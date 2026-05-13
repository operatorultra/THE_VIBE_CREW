import { c as createComponent, e as renderTemplate, r as renderHead, u as unescapeHTML, d as addAttribute, f as createAstro } from '../chunks/astro/server_Bzb0pHYA.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const brandName = "The Vibe Crew";
  const siteUrl = "https://thevibecrew.dev";
  const title = `${brandName} | 10+ Years of Engineering Expertise for Vibe-Coded Cleanup`;
  const description = "The Vibe Crew helps teams stabilize fragile vibe-coded apps, reduce technical debt, and ship maintainable software with more than a decade of engineering expertise.";
  const keywords = [
    "The Vibe Crew",
    "technical debt cleanup service",
    "AI generated code review",
    "codebase refactoring experts",
    "software maintainability",
    "legacy app stabilization",
    "vibe coding cleanup crew"
  ].join(", ");
  const faqs = [
    {
      question: "What does The Vibe Crew do?",
      answer: "We review and remediate unstable software projects, especially vibe-coded and AI-generated codebases that became hard to maintain, test, and ship safely."
    },
    {
      question: "How quickly should we fix AI-generated technical debt?",
      answer: "Teams usually need intervention early, because unresolved debt compounds quickly and can block delivery in a matter of months."
    },
    {
      question: "What is included in a cleanup engagement?",
      answer: "Audit, risk map, architecture simplification, refactors, test hardening, and a practical roadmap we execute with clear ownership."
    },
    {
      question: "Do you only work with startups?",
      answer: "No. We support startups, agencies, and product teams that need a software engineering cleanup partner with more than a decade of expertise."
    }
  ];
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brandName,
    url: siteUrl,
    description,
    areaServed: "Worldwide",
    serviceType: "Technical debt remediation and codebase cleanup",
    knowsAbout: [
      "Technical Debt",
      "AI-assisted Development",
      "Codebase Maintainability",
      "Software Refactoring",
      "Architecture Review"
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-j7pv25f6> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"', "><title>", '</title><link rel="canonical"', '><meta name="description"', '><meta name="keywords"', '><meta name="robots" content="index, follow, max-image-preview:large"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:url"', '><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><script type="application/ld+json">', '<\/script><script type="application/ld+json">', "<\/script>", '</head> <body data-astro-cid-j7pv25f6> <div class="page" data-astro-cid-j7pv25f6> <header class="nav" data-astro-cid-j7pv25f6> <div class="logo" data-astro-cid-j7pv25f6> <span class="logo-mark" aria-hidden="true" data-astro-cid-j7pv25f6></span> <span data-astro-cid-j7pv25f6>', '</span> </div> <a class="nav-cta" href="mailto:hello@thevibecrew.dev?subject=Book%20a%20Cleanup%20Call" data-astro-cid-j7pv25f6>Book a Cleanup Call</a> </header> <main data-astro-cid-j7pv25f6> <section class="hero" data-astro-cid-j7pv25f6> <span class="kicker" data-astro-cid-j7pv25f6>10+ years of engineering expertise. Human-led cleanup.</span> <h1 data-astro-cid-j7pv25f6>We get vibe-coded projects production-ready.</h1> <p data-astro-cid-j7pv25f6> ', ' is a software engineering team focused on codebase cleanup and technical debt\n						remediation. We help product teams turn fragile, overgrown vibe-coded projects into stable,\n						testable, maintainable systems.\n</p> <div class="hero-actions" data-astro-cid-j7pv25f6> <a class="btn btn-primary" href="/apply" data-astro-cid-j7pv25f6>Apply for assessment</a> <a class="btn btn-secondary" href="mailto:hello@thevibecrew.dev?subject=Book%20a%20Cleanup%20Call" data-astro-cid-j7pv25f6>Book a cleanup call</a> </div> <p class="hero-note" data-astro-cid-j7pv25f6>2-minute intake on a dedicated application page.</p> </section> <section class="section section-focus tone-a" aria-labelledby="problem-title" data-astro-cid-j7pv25f6> <div class="section-head" data-astro-cid-j7pv25f6> <h2 class="section-title" id="problem-title" data-astro-cid-j7pv25f6>Why this matters right now</h2> <p class="section-lead" data-astro-cid-j7pv25f6>Vibe-coded projects can move fast early, then hit hidden debt that slows everything down.</p> </div> <div class="cards" data-astro-cid-j7pv25f6> <article class="card span-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>AI can compound debt</h3> <p data-astro-cid-j7pv25f6>We often see tools generate new complexity while trying to patch old issues, making systems harder to reason about.</p> </article> <article class="card span-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Bad debt is fragile debt</h3> <p data-astro-cid-j7pv25f6>Some debt is strategic; unstable debt is different. It creates \u201Chouse of cards\u201D architecture where small changes break core flows.</p> </article> <article class="card span-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Delay increases risk</h3> <p data-astro-cid-j7pv25f6>What looks shippable today can become unmaintainable in months without targeted refactoring and clear engineering ownership.</p> </article> </div> </section> <section class="section section-focus tone-b" aria-labelledby="services-title" data-astro-cid-j7pv25f6> <div class="section-head" data-astro-cid-j7pv25f6> <h2 class="section-title" id="services-title" data-astro-cid-j7pv25f6>Our 2-step cleanup method</h2> <p class="section-lead" data-astro-cid-j7pv25f6>The model is intentionally repetitive: we assess first, then we clean up in clear scope order.</p> </div> <div class="cards" data-astro-cid-j7pv25f6> <article class="card span-6" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>1) Deep assessment</h3> <p data-astro-cid-j7pv25f6>We assess how bad things are, what is bad, how long it will take to fix, and whether remediation is worth it for your business goals.</p> </article> <article class="card span-6" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>2) Clear scoped roadmap</h3> <p data-astro-cid-j7pv25f6>We deliver a roadmap with issues clearly scoped and prioritized by risk and impact, then we clean up in that order without guesswork.</p> </article> </div> </section> <section class="section section-focus tone-a" aria-labelledby="answers-title" data-astro-cid-j7pv25f6> <div class="section-head" data-astro-cid-j7pv25f6> <h2 class="section-title" id="answers-title" data-astro-cid-j7pv25f6>Quick answers for search, AI assistants, and decision-makers</h2> <p class="section-lead" data-astro-cid-j7pv25f6>Short direct answers improve readability and make the page easier for retrieval systems to parse.</p> </div> <div class="answer-grid" data-astro-cid-j7pv25f6> <article class="answer" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>What is technical debt?</strong> <div data-astro-cid-j7pv25f6>Technical debt is future rework created by fast choices made today. Some debt is acceptable; unstable debt must be resolved quickly.</div> </article> <article class="answer" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>What is AI-assisted development risk?</strong> <div data-astro-cid-j7pv25f6>Without engineering oversight, AI-generated code can produce hidden complexity, brittle integrations, and maintenance bottlenecks.</div> </article> <article class="answer" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Who should hire a cleanup crew?</strong> <div data-astro-cid-j7pv25f6>Any team with growing delivery friction, fragile releases, or oversized codebases that outpaced architecture and quality controls.</div> </article> </div> </section> <section class="section section-focus tone-b" aria-labelledby="process-title" data-astro-cid-j7pv25f6> <div class="section-head" data-astro-cid-j7pv25f6> <h2 class="section-title" id="process-title" data-astro-cid-j7pv25f6>How our cleanup process works</h2> <p class="section-lead" data-astro-cid-j7pv25f6>We follow the same engagement rhythm every time so delivery stays predictable.</p> </div> <ol class="timeline" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Step 1 \u2014 Initial engagement</span>\nWe align on product goals, urgent failures, and release pressure.\n</li> <li data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Step 2 \u2014 Code inspection</span>\nWe inspect architecture and identify where AI-generated changes expanded risk and complexity.\n</li> <li data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Step 3 \u2014 Debt analysis</span>\nWe map compounding technical debt, prioritize fixes, and define a practical remediation sequence.\n</li> <li data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Step 4 \u2014 Guided remediation</span>\nWe refactor fragile areas, harden quality, and clean up the codebase into a maintainable system.\n</li> </ol> </section> <section class="section section-focus tone-a" id="faq" aria-labelledby="faq-title" data-astro-cid-j7pv25f6> <div class="section-head" data-astro-cid-j7pv25f6> <h2 class="section-title" id="faq-title" data-astro-cid-j7pv25f6>FAQ</h2> <p class="section-lead" data-astro-cid-j7pv25f6>Fast answers before we start.</p> </div> <div class="faq" data-astro-cid-j7pv25f6> ', ' </div> </section> <section class="section section-focus tone-b" aria-labelledby="boundaries-title" data-astro-cid-j7pv25f6> <div class="section-head" data-astro-cid-j7pv25f6> <h2 class="section-title" id="boundaries-title" data-astro-cid-j7pv25f6>What we don\u2019t do</h2> <p class="section-lead" data-astro-cid-j7pv25f6>Clear boundaries keep cleanup fast, scoped, and execution-focused.</p> </div> <div class="cards" data-astro-cid-j7pv25f6> <article class="card span-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>No business-operation role</h3> <p data-astro-cid-j7pv25f6>We don\u2019t run your business or provide business advice.</p> </article> <article class="card span-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>No ongoing maintenance retainer</h3> <p data-astro-cid-j7pv25f6>We don\u2019t do ongoing maintenance after the scoped cleanup engagement.</p> </article> <article class="card span-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>No net-new feature builds</h3> <p data-astro-cid-j7pv25f6>We don\u2019t build new features inside cleanup projects.</p> </article> </div> </section> <section class="cta" aria-labelledby="cta-title" data-astro-cid-j7pv25f6> <h2 id="cta-title" data-astro-cid-j7pv25f6>Your app can feel fast again without rebuilding from zero.</h2> <p data-astro-cid-j7pv25f6>\nIf your vibe-coded codebase is turning into a maintenance trap, bring in ', ' to\n						stabilize it and get shipping velocity back.\n</p> <p data-astro-cid-j7pv25f6> <a class="btn btn-primary" href="mailto:hello@thevibecrew.dev?subject=Book%20The%20Vibe%20Crew" data-astro-cid-j7pv25f6>Book The Vibe Crew</a> </p> </section> </main> <footer class="footer" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>', " \xB7 Technical debt remediation for AI-assisted software projects \xB7 Serving teams worldwide.</p> </footer> </div> </body></html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(siteUrl, "href"), addAttribute(description, "content"), addAttribute(keywords, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(siteUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), unescapeHTML(JSON.stringify(organizationSchema)), unescapeHTML(JSON.stringify(faqSchema)), renderHead(), brandName, brandName, faqs.map((item) => renderTemplate`<details data-astro-cid-j7pv25f6> <summary data-astro-cid-j7pv25f6>${item.question}</summary> <p data-astro-cid-j7pv25f6>${item.answer}</p> </details>`), brandName, brandName);
}, "/Users/home/Development/Projects/psyche_daily/THE_VIBE_CREW/src/pages/index.astro", void 0);

const $$file = "/Users/home/Development/Projects/psyche_daily/THE_VIBE_CREW/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
