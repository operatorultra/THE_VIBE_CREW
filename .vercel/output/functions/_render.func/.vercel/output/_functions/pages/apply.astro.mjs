import { c as createComponent, d as addAttribute, r as renderHead, e as renderTemplate, f as createAstro } from '../chunks/astro/server_Bzb0pHYA.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Apply = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Apply;
  const brandName = "The Vibe Crew";
  const siteUrl = "https://thevibecrew.dev/apply";
  const title = `${brandName} | Apply for Assessment`;
  const description = "Apply for a Vibe Crew assessment by sharing your project details, contact information, concept, and relevant links.";
  return renderTemplate`<html lang="en" data-astro-cid-og6np6hy> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="canonical"${addAttribute(siteUrl, "href")}><meta name="description"${addAttribute(description, "content")}><meta name="robots" content="index, follow, max-image-preview:large">${renderHead()}</head> <body data-astro-cid-og6np6hy> <div class="page" data-astro-cid-og6np6hy> <header class="nav" data-astro-cid-og6np6hy> <div class="logo" data-astro-cid-og6np6hy> <span class="logo-mark" aria-hidden="true" data-astro-cid-og6np6hy></span> <span data-astro-cid-og6np6hy>${brandName}</span> </div> <a class="nav-link" href="/" data-astro-cid-og6np6hy>Back to home</a> </header> <main class="wrap" data-astro-cid-og6np6hy> <h1 data-astro-cid-og6np6hy>Apply for assessment</h1> <p class="lead" data-astro-cid-og6np6hy>Share your project details and choose your path: standard application review (typically within 10 working days) or paid priority call booking.</p> <form class="apply-form" id="assessment-form" novalidate data-astro-cid-og6np6hy> <div class="form-grid" data-astro-cid-og6np6hy> <label class="field span-6" data-astro-cid-og6np6hy> <span data-astro-cid-og6np6hy>Your name *</span> <input name="name" type="text" autocomplete="name" required data-astro-cid-og6np6hy> </label> <label class="field span-6" data-astro-cid-og6np6hy> <span data-astro-cid-og6np6hy>Project landing page</span> <input name="landingPage" type="url" placeholder="https://your-project.com" data-astro-cid-og6np6hy> </label> <label class="field span-6" data-astro-cid-og6np6hy> <span data-astro-cid-og6np6hy>Email</span> <input name="email" type="email" autocomplete="email" placeholder="you@company.com" data-astro-cid-og6np6hy> </label> <label class="field span-6" data-astro-cid-og6np6hy> <span data-astro-cid-og6np6hy>Phone number</span> <input name="phone" type="tel" autocomplete="tel" placeholder="+1 555 123 4567" data-astro-cid-og6np6hy> </label> <label class="field" data-astro-cid-og6np6hy> <span data-astro-cid-og6np6hy>Short concept description *</span> <textarea name="concept" placeholder="What are you building, who is it for, and what is the current technical challenge?" required data-astro-cid-og6np6hy></textarea> </label> <label class="field" data-astro-cid-og6np6hy> <span data-astro-cid-og6np6hy>Relevant links / socials</span> <textarea name="links" placeholder="GitHub, docs, product links, social profiles, demos, Loom videos, etc." data-astro-cid-og6np6hy></textarea> </label> </div> <p class="form-help" data-astro-cid-og6np6hy>At least one contact method is required: email or phone.</p> <div class="form-actions" data-astro-cid-og6np6hy> <button class="btn btn-primary" type="submit" data-intent="submit" data-astro-cid-og6np6hy>Submit application</button> <button class="btn" type="submit" data-intent="submit-book" data-astro-cid-og6np6hy>Pay to book a priority call</button> </div> <p class="form-status" id="assessment-status" role="status" aria-live="polite" data-astro-cid-og6np6hy></p> </form> </main> </div>  </body> </html>`;
}, "/Users/home/Development/Projects/psyche_daily/THE_VIBE_CREW/src/pages/apply.astro", void 0);

const $$file = "/Users/home/Development/Projects/psyche_daily/THE_VIBE_CREW/src/pages/apply.astro";
const $$url = "/apply";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Apply,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
