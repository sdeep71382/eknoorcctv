# Website UI/UX Improvement Plan — Eknoor CCTV

Date: 2026-10-23  
Scope: design strategy and phased planning only. No application code, styling, dependencies, content data, routes, or integrations were changed while preparing this document.

## Status of decisions

### Approved design constraints

- Retain and refine the existing navy, cyan, and white visual identity.
- Create a visibly more premium, modern security-solutions experience.
- Use high-quality CCTV, security installation, access-control, and networking imagery as a central design element.
- Make selected Aceternity UI patterns part of the foundation and relevant delivery phases, rather than a late optional addition.
- Preserve the current Next.js architecture, static routing, functionality, SEO metadata, accessible interactions, and responsive behavior.
- Keep public contact details as replaceable placeholders without breaking phone, email, WhatsApp, or other interactive links.
- Deliver the work in seven reviewable phases. Implementation begins only after Phase 1 is approved.

### Decisions that still need confirmation

- The final logo, public business address, review URL, social links, and whether the contact form remains a demonstration or receives an approved submission endpoint.
- Approved business photography, logo-use permissions, verified testimonials, product capabilities, and claims such as “since 2013.”
- Whether to install `motion`, shadcn registry support, and `lucide-react` for selected Aceternity components.
- Whether licensed stock photography may be used where business imagery is unavailable, and the preferred provider/budget.

## A. Executive summary

Eknoor CCTV has a sound Next.js 16 foundation: data-driven products and solutions, static generation, shared header/footer, metadata, accessible tab lists, product search, responsive CSS, and automated quality checks. The redesign should preserve these strengths while making the site visually credible enough for a buyer evaluating a security provider.

The new direction is **premium technical assurance**: large, authentic-looking security imagery; clean dark navy surfaces; precise cyan interaction cues; restrained light effects; and card layouts that feel intentional instead of generic. Photography should show installed cameras, access-control readers, control rooms, structured cabling, and professional site work. Aceternity patterns should support hierarchy and feedback, never obscure content or become decorative noise.

The desired conversion path is: `Clear promise → proof through imagery and service scope → solution/product discovery → trust signals → quote/contact action`.

## B. Existing website audit

### Architecture and technology

- **Framework:** Next.js 16 App Router, React 19, TypeScript.
- **Routes:** home plus statically generated `/[slug]` routes for About, Contact, six solution pages, and product pages. `dynamicParams = false` remains appropriate.
- **Content model:** `lib/site-data.ts` centralizes contact information, services, products, testimonials, brands, and client groups.
- **Styling:** Tailwind is available; the UI currently relies mainly on global CSS custom properties and media queries.
- **Quality controls:** Playwright, axe, ESLint, TypeScript, production build scripts, and prior responsive audits are present.

### Existing strengths to preserve

- Shared global shell and reusable page/detail templates.
- Product search, category tabs, related content, and quote-oriented calls to action.
- Keyboard-operable tabs, skip link, focus indicators, dropdown Escape handling, and reduced-motion behavior.
- Metadata and static generation strategy.
- Contact form labels and transparent local-demo disclosure.

### Main visual and UX gaps

- The hero, about collage, service/product illustrations, map, brands, and client logos are mostly gradients, text, or glyphs. They do not prove real-world capability.
- The homepage has many similar-weight sections. It needs a stronger visual rhythm and a clearer sequence from promise to proof to conversion.
- Solution cards expose long lists before visitors have chosen a category; product cards use text markers rather than visual recognition.
- Detail pages are structurally reliable but visually repetitive and light on context-specific imagery.
- Testimonials, client names, brand names, category capabilities, and review destinations need factual/permission checks before visual emphasis increases.
- `app/globals.css` combines foundations, components, responsive behavior, and late overrides. A future implementation should introduce a clear token layer and scoped component ownership.

## C. Visual Design Blueprint

### Overall look and feel

The finished site should look like a refined regional security integrator rather than a template catalogue: confident dark surfaces, crisp white content areas, cyan highlights that guide action, and photography with real equipment scale. It should use generous but disciplined whitespace, subtle technical grids/noise, thin borders, and moderate radii. Motion should be short, purposeful, and disabled or flattened for reduced-motion users.

### Desktop, tablet, and mobile

| Viewport | Final experience |
|---|---|
| Desktop | Full-width photographic hero with a navy overlay, left-aligned copy, two CTAs, and a compact credibility strip. Alternate white, pale-gray, and navy feature surfaces inside a 1200–1250px shell. Image-led cards use subtle spotlight/border feedback rather than heavy 3D effects. |
| Tablet | Keep the image as the dominant visual but increase overlay contrast. Use balanced two-column or stacked layouts based on image legibility. Retain focusable horizontal category rails and an explicit responsive navigation menu. |
| Mobile | Lead with one static, legible hero message and primary CTA. Use single-column cards, 44px primary controls, no hover-dependent information, and fixed image ratios to prevent layout shift. Repeat the main CTA after discovery instead of competing actions everywhere. |

### Major-section blueprint

| Section | Visual layout and background | Image placement | Content hierarchy | Selected pattern |
|---|---|---|---|---|
| Header | White/translucent surface with thin navy border/shadow on scroll | Logo only | Brand → primary nav → quote CTA | Aceternity Resizable Navbar pattern or accessible existing-header enhancement |
| Home hero | Navy overlay over photographic hero; subtle grid/dots behind text only | Full-bleed image with right/center focal area | Eyebrow → H1 → proof paragraph → two CTAs → trust strip | Background Grid with Dots; optional Spotlight |
| About | White two-column section with an offset image frame | One large installation image + one supporting team/detail image | Eyebrow → H2 → short story → CTA/call action | CSS composition; no heavy motion |
| Solutions | Pale-gray technical surface with 3×2 desktop grid | Image/category illustration at card top | Category → one-line scope → 3-item preview → action | Bento Grid structure + Card Spotlight |
| Product catalogue | White surface, search first, tabs second, grid third | Product/category visual per card | Search → category → product → category label | Card Spotlight; existing accessible tabs/search retained |
| Why choose | Navy contrast band with five proof cards | Optional verified icon/photo only | Proof title → concise factual explanation | Feature-card pattern with CSS fallback |
| Brands / clients | White/soft-gray confidence section | Verified logos only | Heading → qualified relationship text → logo grid | Logo Cloud if assets/rights approved |
| Testimonials | Pale-gray section with one highlighted verified quote plus supporting cards | Headshot only if explicitly approved | Heading → quote → source → review CTA | Animated Testimonials or current carousel fallback |
| Contact CTA | Navy/cyan gradient band above footer | Optional equipment/technician image | Invitation → call/email/WhatsApp → form | Contact Section pattern after workflow decision |
| Footer | Deep navy, clear columns, subdued detail | Verified map only | Contact → navigation → services → location | Existing footer refined |

## D. Page-by-page proposed layouts

| Page | Proposed section order | Background and imagery | Content hierarchy | Components/patterns |
|---|---|---|---|---|
| `/` Home | Header → Hero → credibility strip → About → Solutions → Why Choose → Products → Brands/Clients → Testimonials → Contact CTA → Footer | Dark photographic hero; white About/Product surfaces; pale-gray Solutions/Testimonials; navy proof/contact bands | One approved core promise; services before products; proof before final contact | Resizable Navbar pattern, Background Grid with Dots, Bento Grid, Card Spotlight, Logo Cloud, Animated Testimonials/Carousel, Contact Section |
| `/about-us` | Header → compact page hero → story/mission → installation imagery → operating approach → verified proof/brands → Contact CTA → Footer | Compact navy hero; image-led story section; white/pale-gray alternation | H1 → what Eknoor does → how it works → evidence → CTA | Background Grid with Dots, image composition, Logo Cloud if approved |
| `/contact-us` | Header → compact page hero → contact options → approved form → service-area/location → reassurance/proof → Footer | Navy hero; white form card on pale-gray surface; optional approved technician image | H1 → fastest contact route → form → response expectation only if verified | Contact Section pattern; existing semantic form retained |
| Solution pages | Header → compact service hero → image/scope split → service list → related solutions → contact CTA → Footer | Solution-specific installation imagery; alternating white/pale-gray sections | H1 → ideal-for statement → scope → related option → quote action | Background Grid hero, Card Spotlight related cards, CSS fallback |
| Product pages | Header → compact product hero → product/category visual + consultation scope → approved capability list → related products → quote CTA → Footer | Product/category image at top; white content surface; soft-gray related section | H1 → context → verified options → related products → quote action | Card Spotlight related cards; route/metadata model retained |
| Not-found/loading/error | Shared header/footer → concise status card → home/contact action | Minimal pale-gray or navy surface; no stock photography needed | Status → explanation → recovery action | Existing status styles plus subtle grid background |

## E. Aceternity UI integration plan

Aceternity is a central source of patterns from Phase 1 onward. Existing accessible behavior remains authoritative: a new component must meet or improve keyboard, touch, semantic, and reduced-motion behavior before replacing a working feature.

| Exact component | Documentation URL | Phase / location | Integration requirement | Fallback |
|---|---|---|---|---|
| Resizable Navbar | [Aceternity documentation](https://ui.aceternity.com/components/resizable-navbar) | Phase 1 prototype; Phase 2 header | Registry/shadcn review; likely `motion`; adapt existing Next `Link`, menu controls, and `aria-expanded` behavior | Refine existing `Header` with CSS and preserve interaction model |
| Background Grid with Dots | [Aceternity blocks](https://ui.aceternity.com/blocks/backgrounds) | Phase 1 + 3; home/page heroes | Adapt as static CSS if possible; verify contrast and reduced motion | Current CSS grid/gradient with improved tokens |
| Bento Grid | [Aceternity documentation](https://ui.aceternity.com/components/bento-grid) | Phase 1 prototype; Phase 4 solutions/product categories | Check registry/shadcn implementation; map existing semantic cards to grid landmarks | CSS Grid using existing `article` cards |
| Card Spotlight | [Aceternity documentation](https://ui.aceternity.com/components/card-spotlight) | Phase 1 prototype; Phases 4–5 cards | Requires `motion` and registry dependencies; no hover-only content; flatten for reduced motion | CSS focus/hover border, color, and shadow transition |
| Logo Cloud | [Aceternity blocks](https://ui.aceternity.com/blocks/logo-clouds) | Phase 4 brands/clients | Verified logos, usage rights, predictable dimensions; may require Pro | Static semantic logo grid with `next/image` |
| Animated Testimonials | [Aceternity documentation](https://ui.aceternity.com/components/animated-testimonials) | Phase 4/6 testimonials | Requires `motion` and `@tabler/icons-react`; source data, avatars, and review destination approved | Existing accessible testimonial carousel |
| Testimonials With Carousel | [Aceternity block](https://ui.aceternity.com/blocks/testimonials/testimonials-with-carousel) | Phase 4/6 alternative | May require Pro access and `motion`; select only one testimonial implementation | Existing `Testimonials` component |
| Contact Sections | [Aceternity blocks](https://ui.aceternity.com/blocks/contact-sections) | Phase 6 contact page + final CTA | Form behavior, privacy, spam handling, endpoint, success/error states defined first | Existing contact layout rebuilt from approved tokens |

Not selected: WebGL/canvas effects, mouse-following cursors, complex parallax, continuously moving marquees, and high-cost animated backgrounds. They are a poor fit for a trust-focused service site and create unnecessary performance/accessibility risk.

## F. Color and typography proposal

The approved palette direction is a refined navy/cyan/white system with supporting neutrals for a more premium finish.

| Token | Value | Use |
|---|---:|---|
| Primary navy | `#041F30` | Header, footer, dark emphasis bands, high-emphasis text |
| Navy hover | `#06324A` | Selected/hover dark controls |
| Cyan | `#1196D3` | Links, key actions, active indicators |
| Cyan light | `#4FA8DC` | Soft gradient/light treatments; not body text on white |
| Premium accent gold | `#F6B91A` | Small proof highlights/ratings; never small text on white |
| Page background | `#F7FAFC` | Alternating section surface |
| Surface | `#FFFFFF` | Cards, forms, default sections |
| Surface blue | `#EAF3F8` | Image captions, soft callouts, hover backgrounds |
| Heading | `#102A3A` | Headings and high-emphasis content |
| Body | `#334E5C` | Paragraph copy |
| Border | `#C9D7DF` | Fields, dividers, subtle card outlines |
| Success | `#137A43` | Valid form state |
| Error | `#B42318` | Error text and invalid fields |

Retain the system font stack unless a licensed brand typeface is supplied. Use 16px minimum body text, 1.5–1.65 body line height, 600–700 heading weight, and fluid but bounded display sizes. Prefer sentence case for product/service labels. Validate actual-state color contrast before sign-off.

## G. Imagery and asset strategy

### Photography priority

1. CCTV camera installation in a home, office, or commercial setting.
2. Access-control reader, door lock, or biometric terminal in use.
3. Neat structured cabling, networking rack, or monitoring workstation.
4. Technician performing installation/configuration, with consent.
5. Product-category images that show real equipment rather than generic icons.

### Illustrative licensed stock alternative

Where approved business photography is unavailable, use licensed stock images clearly labelled in the asset inventory as **illustrative**, not evidence of Eknoor work. Suitable sources to evaluate after approval include Adobe Stock, Shutterstock, iStock, Unsplash, and Pexels. Prefer realistic Indian/commercial contexts; avoid staged “hacker,” facial-recognition, police, or surveillance imagery that implies unprovided services.

For every image, record source URL, license/receipt, business-owned or illustrative status, subject, intended page, alt text, credit requirement, crop focal point, original dimensions, and optimized AVIF/WebP variant. Use `next/image` with explicit dimensions or aspect-ratio wrappers to prevent layout shift.

| Asset type | Placement | Treatment |
|---|---|---|
| Primary installation image | Home hero | Full bleed with navy overlay; readable text contrast |
| Technician/access-control image | About + Contact CTA | Framed/offset image; never competes with fields |
| Category visual | Solution cards/detail pages | Consistent 4:3 or 16:10 crop, subject-centered |
| Product visual | Catalogue/product page | Consistent crop; alt text identifies product type |
| Brand/client logo | Proof sections/footer | SVG/transparent PNG; verified relationship/rights only |
| Location/map | Footer/contact | Only after address and privacy/provider review |

## H. Content, contact placeholders, accessibility, and technical requirements

### Content requirements

- Retain the solution/product taxonomy, dynamic routing, search, tabs, related links, and quote journey.
- Reduce home-card service lists to concise previews; keep detailed scope on the current detail pages.
- Review each product highlight against actual models. Present non-guaranteed capabilities as “options available” or consultation topics.
- Correct approved language inconsistencies: “Our Major Clients,” “Wi‑Fi,” “SIM-based,” and “Intrusion Alarm System.”
- Replace the generic `https://share.google/` review destination only when a verified business review URL is provided; otherwise hide the CTA in an approved phase.

### Contact placeholder requirements

Contact data is centralized in `lib/site-data.ts`. In the approved global-shell phase, use readable display placeholders and safe machine link behavior:

```ts
phone: "[PHONE_NUMBER]",
sales: "[SALES_PHONE_NUMBER]",
email: "[EMAIL_ADDRESS]",
secondaryEmail: "[SUPPORT_EMAIL_ADDRESS]",
address: "[BUSINESS_ADDRESS]",
whatsApp: "[WHATSAPP_NUMBER]",
reviewsUrl: "[GOOGLE_REVIEWS_URL]",
```

Before a real phone/email value is supplied, do not render invalid `tel:`, `mailto:`, or WhatsApp URLs. Render placeholders as non-interactive text with a development configuration note. Once values are supplied, normalize digits for `tel:`/WhatsApp URLs while retaining the readable formatted number as link text.

### Accessibility and responsive requirements

- Preserve semantic landmarks, the skip link, visible focus, tab keyboard navigation, menu Escape behavior, and reduced-motion support.
- Test every implemented phase at 320, 375, 430, 768, 1024, 1440, and 1920px.
- Keep primary actions at least 44px tall; provide at least 24px targets for other visible controls where layout permits.
- Ensure no information is hover-only. Spotlight/motion/card emphasis needs a meaningful static, touch, and keyboard state.
- Use meaningful image alternative text and hide decorative effects from assistive technology.
- If the contact form becomes live, associate errors with fields, preserve user input, block duplicates, and announce success/failure.

### Technical requirements

- Keep App Router, static route generation, metadata, current accessible client interactions, and tests intact.
- Establish semantic CSS tokens and scoped component styles before broad visual changes.
- Prototype each Aceternity dependency in isolation before global adoption. Prefer CSS when it produces the same useful result.
- Treat imagery as the main LCP risk: define sizes, priorities, and responsive sources before implementation.
- Expand axe coverage across each page template after markup changes; compare production Lighthouse measurements before and after imagery/motion phases.

## I. Seven-phase implementation roadmap

Every phase requires a pre-phase explanation, reviewable implementation, verification report, suggested commit message, and explicit approval before the next phase.

### Phase 1 — Premium visual foundation and Aceternity selection

- **Visual outcome:** A coherent navy/cyan/white design system with a premium visual language and approved Aceternity choices.
- **Pages/components:** Global CSS/tokens, section titles, buttons, cards, form primitives; Aceternity compatibility spike.
- **Tasks:** Finalize tokens, type scale, spacing, radii, shadows, image ratios, motion rules; prototype Background Grid with Dots, Bento Grid, Card Spotlight, and Resizable Navbar; select fallback for each.
- **Likely files:** `app/globals.css`, potentially `app/design-tokens.css`, temporary prototype/test; `package.json` only if explicitly approved.
- **Prerequisites:** Approval of palette, typography approach, Aceternity dependency policy, and blueprint.
- **Acceptance criteria:** Token map approved; patterns work with Next Links/keyboard flow; reduced-motion fallback defined; no route/content change.
- **Validation:** Contrast review, production build, typecheck, lint, focused Playwright/axe checks.

### Phase 2 — Global shell, safe placeholders, and navigation

- **Visual outcome:** A polished responsive frame with intentional header, navigation, footer, and safe configurable contact placeholders.
- **Pages/components:** `components/header.tsx`, `components/footer.tsx`, `lib/site-data.ts`, global styles.
- **Tasks:** Implement approved Resizable Navbar/fallback; refine mega menu; apply footer treatment; add display/link-safe placeholder helpers; move review/social destinations to configuration.
- **Prerequisites:** Placeholder labels; navbar decision; approved review/social/location values or explicit placeholders.
- **Acceptance criteria:** Real links stay valid and placeholder links are not actionable; menus remain keyboard/touch usable; routes/metadata unchanged.
- **Validation:** Desktop/tablet/mobile navigation, keyboard/Escape, link inspection, axe, route suites.

### Phase 3 — Image system and homepage hero

- **Visual outcome:** An image-led, premium first impression with one clear conversion path.
- **Pages/components:** Hero, About visual composition, shared image primitives/assets.
- **Tasks:** Integrate approved business/illustrative images; implement optimized `next/image`; redesign hero around one core message and two restrained CTAs; add Background Grid/Spotlight only where it supports legibility.
- **Prerequisites:** Hero copy, approved imagery/licenses, focal-point instructions, carousel decision.
- **Acceptance criteria:** Single dominant message and quote CTA; accurate alt text/known licenses; no avoidable CLS; clear mobile CTA.
- **Validation:** Image audit, responsive screenshots, reduced-motion, Lighthouse baseline comparison, Playwright/axe.

### Phase 4 — Homepage solution, product, and proof experience

- **Visual outcome:** Visitors can identify a service, inspect products, see verified proof, and request a quote.
- **Pages/components:** Solutions, Product Catalog, Why Choose, Brands, Clients, Testimonials.
- **Tasks:** Implement Bento Grid/Card Spotlight/fallbacks; redesign cards around imagery and concise content; retain accessible search/tabs; integrate verified logos/testimonials; choose one testimonial treatment.
- **Prerequisites:** Approved service copy, capability wording, logos, testimonials, review URL, selected Aceternity components.
- **Acceptance criteria:** No faux logos/unverified claims; search/tabs retain semantics; proof sections are distinct; no hover-only/motion-only information.
- **Validation:** Tab/search regression, asset review, mobile card audit, axe, Lighthouse comparison.

### Phase 5 — Solution and product detail-page redesign

- **Visual outcome:** Detail pages feel specific to the visitor’s need while retaining the efficient data-driven route model.
- **Pages/components:** `solution-page.tsx`, `product-page.tsx`, `page-hero.tsx`, related cards, data/assets.
- **Tasks:** Add approved category imagery; refine page-hero; add concise “ideal for” and verified scope blocks; apply Card Spotlight/fallback to related content; improve CTA placement.
- **Prerequisites:** Approved product/service information and assets.
- **Acceptance criteria:** One H1 per route, valid breadcrumb, visible quote CTA, accurate wording, no target-width overflow.
- **Validation:** Full static route sweep, responsive audit, axe sampling, metadata checks.

### Phase 6 — Contact workflow and conversion finishing

- **Visual outcome:** A trustworthy contact experience with clear call, email, WhatsApp, and form routes.
- **Pages/components:** Contact page, final home CTA, testimonial/review action, contact configuration.
- **Tasks:** Apply Contact Section/fallback; implement approved local-demo/live-form path; add validated contact links when real data exists; complete review/social configuration.
- **Prerequisites:** Contact workflow decision, privacy/spam requirements, endpoint authorization if live, real contact values.
- **Acceptance criteria:** Placeholder mode cannot generate broken actions; live mode has accessible validation/recovery; no data transmits without an approved endpoint.
- **Validation:** Form error/success/duplicate-submit, URL/link tests, keyboard/mobile use, network inspection, axe.

### Phase 7 — Quality, performance, and release validation

- **Visual outcome:** A cohesive, fast, accessible site with a documented evidence trail.
- **Pages/components:** All public routes, shared layout, assets, tests, reports.
- **Tasks:** Run full regression; inspect templates at target widths; compare image/motion performance; complete content/alt-text/link audit; capture screenshots; document residual issues.
- **Prerequisites:** Completion and approval of Phases 1–6.
- **Acceptance criteria:** Build, lint, typecheck, routes, interactions, agreed a11y checks, and performance budget pass; limitations explicit.
- **Validation:** Production Playwright, axe, seven-width responsive audit, Lighthouse, manual keyboard/touch/zoom.

## J. Approval gate before Phase 1

Please confirm or revise the following before implementation starts:

1. Approve the premium navy/cyan/white blueprint and system-font direction.
2. Approve the Phase 1 Aceternity spike and specify whether `motion`, shadcn registry setup, and `lucide-react` may be installed if needed.
3. Confirm the literal placeholder convention and whether placeholder contacts are visible but non-interactive until real values are supplied.
4. Confirm the approved photography/logo source approach: business-owned assets, licensed stock, or both; provide brand/usage constraints.
5. Provide or defer the Google Reviews URL, social links, public address, and contact-form destination decision.
6. Confirm the claims/testimonials/logos that can receive greater visual emphasis.

After approval, work begins with Phase 1 only. Its report will list changes, affected files, dependencies, validation results, open issues, and a suggested commit message before requesting approval for Phase 2.
