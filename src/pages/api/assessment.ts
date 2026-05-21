import type { APIRoute } from 'astro';
import { Pool } from 'pg';
import nodemailer from 'nodemailer';
import Stripe from 'stripe';

const pool = new Pool(
	process.env.DATABASE_URL
		? {
				connectionString: process.env.DATABASE_URL,
				ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
			}
		: undefined,
);

const smtpConfigured = Boolean(process.env.SMTP_HOST && process.env.SMTP_FROM && process.env.ASSESSMENT_INTERNAL_TO);

const smtpTransport = smtpConfigured
	? nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT || '587'),
			secure: process.env.SMTP_SECURE === 'true',
			auth:
				process.env.SMTP_USER && process.env.SMTP_PASS
					? {
							user: process.env.SMTP_USER,
							pass: process.env.SMTP_PASS,
						}
					: undefined,
		})
	: null;

const stripeClient = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

type AssessmentPayload = {
	name?: unknown;
	landingPage?: unknown;
	email?: unknown;
	phone?: unknown;
	concept?: unknown;
	links?: unknown;
	submitIntent?: unknown;
};

const clean = (value: unknown): string => (typeof value === 'string' ? value.trim() : '');

const toNullable = (value: string): string | null => (value.length > 0 ? value : null);

export const POST: APIRoute = async ({ request }) => {
	try {
		const payload = (await request.json()) as AssessmentPayload;
		const name = clean(payload.name);
		const landingPage = clean(payload.landingPage);
		const email = clean(payload.email);
		const phone = clean(payload.phone);
		const concept = clean(payload.concept);
		const links = clean(payload.links);
		const submitIntent = clean(payload.submitIntent) === 'submit-book' ? 'submit-book' : 'submit';
		const priorityCheckoutUrl = process.env.STRIPE_PRIORITY_CALL_URL || process.env.BOOKING_URL || null;
		const stripePriorityPriceId = process.env.STRIPE_PRIORITY_CALL_PRICE_ID || '';
		const stripePriorityProductId = process.env.STRIPE_PRIORITY_CALL_PRODUCT_ID || '';
		const userAgent = request.headers.get('user-agent') ?? '';
		const requestUrl = new URL(request.url);
		const successUrl =
			process.env.STRIPE_PRIORITY_CALL_SUCCESS_URL || `${requestUrl.origin}/priority-call`;
		const cancelUrl = process.env.STRIPE_PRIORITY_CALL_CANCEL_URL || `${requestUrl.origin}/apply`;

		if (!name) {
			return new Response(JSON.stringify({ ok: false, error: 'Name is required.' }), {
				status: 400,
				headers: { 'content-type': 'application/json' },
			});
		}

		if (!concept) {
			return new Response(JSON.stringify({ ok: false, error: 'Short concept description is required.' }), {
				status: 400,
				headers: { 'content-type': 'application/json' },
			});
		}

		if (!email && !phone) {
			return new Response(JSON.stringify({ ok: false, error: 'Email or phone is required.' }), {
				status: 400,
				headers: { 'content-type': 'application/json' },
			});
		}

		const insertResult = await pool.query(
			`INSERT INTO assessment_applications
				(name, landing_page, email, phone, concept, links, submit_intent, user_agent)
			 VALUES
				($1, $2, $3, $4, $5, $6, $7, $8)
			 RETURNING id, created_at`,
			[
				name,
				toNullable(landingPage),
				toNullable(email),
				toNullable(phone),
				concept,
				toNullable(links),
				submitIntent,
				toNullable(userAgent),
			],
		);

		const applicationId = insertResult.rows[0]?.id;
		const createdAt = insertResult.rows[0]?.created_at;
		let checkoutUrl = submitIntent === 'submit-book' ? priorityCheckoutUrl : null;

		if (submitIntent === 'submit-book' && stripeClient) {
			let checkoutPriceId = stripePriorityPriceId;

			if (!checkoutPriceId && stripePriorityProductId) {
				const product = await stripeClient.products.retrieve(stripePriorityProductId, { expand: ['default_price'] });
				const defaultPrice = product.default_price;

				if (typeof defaultPrice === 'string') {
					checkoutPriceId = defaultPrice;
				} else if (defaultPrice && !defaultPrice.deleted) {
					checkoutPriceId = defaultPrice.id;
				}
			}

			if (checkoutPriceId) {
				const checkoutSession = await stripeClient.checkout.sessions.create({
					mode: 'payment',
					line_items: [{ price: checkoutPriceId, quantity: 1 }],
					success_url: successUrl,
					cancel_url: cancelUrl,
					client_reference_id: applicationId ? String(applicationId) : undefined,
					metadata: applicationId ? { applicationId: String(applicationId) } : undefined,
				});

				checkoutUrl = checkoutSession.url || null;
			}
		}

		if (smtpTransport && process.env.SMTP_FROM && process.env.ASSESSMENT_INTERNAL_TO) {
			const internalRecipients = process.env.ASSESSMENT_INTERNAL_TO.split(',').map((entry) => entry.trim()).filter(Boolean);
			const intentLabel = submitIntent === 'submit-book' ? 'paid-priority-call' : 'standard-review';

			const internalSubject = `New assessment application: ${name}`;
			const internalText = [
				`Application ID: ${applicationId ?? 'n/a'}`,
				`Submitted at: ${createdAt ?? 'n/a'}`,
				`Intent: ${intentLabel}`,
				'',
				`Name: ${name}`,
				`Landing page: ${landingPage || 'n/a'}`,
				`Email: ${email || 'n/a'}`,
				`Phone: ${phone || 'n/a'}`,
				'',
				'Concept:',
				concept,
				'',
				'Relevant links/socials:',
				links || 'n/a',
			].join('\n');

			await smtpTransport.sendMail({
				from: process.env.SMTP_FROM,
				to: internalRecipients,
				replyTo: email || undefined,
				subject: internalSubject,
				text: internalText,
			});

			if (email) {
				const confirmationSubject = 'We received your assessment application';
				const confirmationText = [
					`Hi ${name},`,
					'',
					'Thanks for applying for an assessment with The Vibe Crew.',
					'We received your project details and will follow up with next steps.',
					'',
					submitIntent === 'submit-book'
						? 'You selected the paid priority-call path. Complete checkout, then pick a slot on our scheduling page.'
						: 'You selected standard review. Expect a reply within 10 working days.',
					'',
					'— The Vibe Crew',
				].join('\n');

				await smtpTransport.sendMail({
					from: process.env.SMTP_FROM,
					to: email,
					subject: confirmationSubject,
					text: confirmationText,
				});
			}
		}

		return new Response(
			JSON.stringify({
				ok: true,
				applicationId,
				submitIntent,
				checkoutUrl,
				emailDelivery: smtpTransport ? 'attempted' : 'skipped_missing_smtp_config',
			}),
			{
				status: 200,
				headers: { 'content-type': 'application/json' },
			},
		);
	} catch (error) {
		console.error('Assessment submission failed', error);
		return new Response(JSON.stringify({ ok: false, error: 'Unable to process assessment submission.' }), {
			status: 500,
			headers: { 'content-type': 'application/json' },
		});
	}
};
