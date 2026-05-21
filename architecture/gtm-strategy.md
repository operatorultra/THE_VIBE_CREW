# Go-to-Market Strategy

Positioning and acquisition plan for The Vibe Crew. The public site (`src/pages/index.astro`) implements this narrative: diagnose pain before selling the cure.

## Core insight

Most buyers who need us do not self-identify as “vibe coders.” They feel:

- shipping slowing down while effort increases
- fear touching parts of the codebase
- bugs that reappear or cannot be reproduced

**Key signal:** shipping velocity dropped while effort increased.

## ICP (who actually buys)

| Segment | Situation |
|--------|-----------|
| Post-MVP founders | Shipped fast (pre–Series A), now afraid to touch code, unreproducible bugs |
| Solo builders with traction | 5k–100k users, scaling pain, duct-taped Supabase/Firebase/APIs |
| Agencies | Used AI to deliver faster, cannot maintain what they shipped |

Do not target “people who vibe code” as a label. Target **delivery friction after a fast build phase**.

## Positioning

| Avoid (descriptive, low urgency) | Use (outcome, urgent) |
|----------------------------------|------------------------|
| “We clean vibe-coded apps” | “We restore shipping velocity in unstable codebases” |
| “Technical debt cleanup” | “If your team slowed down after moving fast, we fix that.” |

People buy:

- speed back
- confidence back
- fewer fires

Not “cleanup” as a category.

## Detection (inferred, not asked)

Prospects rarely admit they “vibe coded.” Infer fit via stacked signals:

| Source | Signals |
|--------|---------|
| Job posts | “fix legacy code”, “refactor codebase”, “stability”, “platform engineer” |
| GitHub | commit bursts + chaotic structure, low test coverage, many contributors / no ownership |
| Product | fast changelog early, then silence or public bug complaints |
| Stack smell | Next.js + Supabase + many AI APIs, weak backend discipline |
| Founder social | “shipped in 2 weeks”, “rewriting everything”, “this code is cursed” |

**Vibe Debt Score:** semi-automated heuristic from scraping + enrichment. Imperfect accuracy is fine; optimize for **high signal density**.

## Offer ladder

### 1) Vibe Debt Audit (wedge — primary CTA)

- **Duration:** 3–5 days
- **Price:** €1k–€3k
- **Deliverables:**
  - risk map (severity + blast radius)
  - “what will likely break in 3 months”
  - prioritized cleanup sequence
  - go / no-go on full remediation

Lowers friction, proves expertise, natural upsell to scoped cleanup.

### 2) Scoped cleanup (after audit)

Same rhythm every engagement:

1. Deep assessment (quantify debt, ownership, timeline, business fit)
2. Guided remediation (refactor fragile areas, harden tests, restore maintainability)

**Boundaries (non-negotiable):**

- no business-ops / strategy role
- no open-ended maintenance retainer
- no net-new features during stabilization

## Conversion: self-diagnosis on site

Landing checklist (`#vibe-debt-check`). If **2+** apply, prospect likely qualifies:

- afraid to touch parts of the codebase
- bugs reappear after fixes
- new features take longer than before
- no one fully understands the system
- velocity down while effort up
- hiring (or planning to) just to stabilize

Funnel: checklist → **Apply for Vibe Debt Audit** (`/apply`).

## Channel strategy

### LinkedIn (primary)

Use automation as **signal-based outreach**, not spam.

**Filter:** Founder / CTO, recently active, stacked signals from detection table.

**Message pattern — diagnosis, not pitch:**

> Quick question — have you noticed shipping slowing down recently even though the team is working harder?
>
> We’re seeing this a lot with fast AI-built codebases hitting hidden complexity walls.

If they reply → introduce The Vibe Crew and audit offer.

**Example (hiring signal):**

> Saw you're hiring for stabilization — usually means velocity dropped after a fast build phase.
>
> Are you dealing more with fragile flows or just scaling issues?

**Content (3–4×/week):**

- before/after cleanup (anonymized)
- anti-patterns (“why AI codebases collapse after 3 months”)
- strong takes (“vibe coding isn’t the problem; lack of ownership is”)

### Cold email

Best for agencies and funded startups. Same diagnostic opener as LinkedIn.

**Subject ideas:**

- “Are you feeling this in your codebase?”
- “Quick question about your shipping velocity”

### TikTok (optional)

Awareness + authority, not direct leads. Hooks: signs of collapse, “you don’t need a rewrite”, messy vs clean architecture screen recordings.

## Weekly GTM loop (solo-operable)

1. Scrape + enrich ICP weekly
2. Score leads (Vibe Debt heuristic)
3. Send 20–40 targeted LinkedIn messages/day
4. Post 3×/week on LinkedIn
5. Sell **audit first**, not full engagement
6. Turn audits into case studies → feed content

Target: first 10–20 customers from this loop.

## Site ↔ strategy map

| GTM element | Site implementation |
|-------------|---------------------|
| Velocity positioning | Hero headline + meta |
| ICP patterns | “You might already be our buyer” section |
| Self-diagnosis | Interactive vibe debt checklist |
| Audit wedge | Dedicated audit section + CTAs to `/apply` |
| Outcomes | Speed / confidence / fewer fires cards |
| Boundaries | “What we don’t do” section |

## Related docs

- [`platform-vision.md`](./platform-vision.md) — longer-term platform direction (assessment → match → scope)
- [`platform-plan.md`](./platform-plan.md) — MVP workflow and engineer matching
- [`test_script.sh`](./test_script.sh) — LinkedIn outreach via Unipile + Supabase (ops script; requires env vars)

## Next builds (optional)

- LinkedIn outreach sequences (3–5 message flows)
- Vibe Debt scoring pipeline (job posts, GitHub, social) on existing scraping stack
- Apply form fields aligned to diagnostic questions (velocity, fragile modules, stabilization hiring)
