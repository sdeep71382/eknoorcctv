# Phase 3 Image-Led Hero Implementation Plan

**Goal:** Replace the homepage carousel and placeholder About collage with a single premium, responsive image-led composition using the four user-approved Sky Secure source images.

**Architecture:** Keep the public `HeroSlider` export so homepage wiring stays unchanged, but convert it to a static Server Component. Store the copied images locally and expose their source, alt text, and focal-position metadata from one small module. Reuse existing buttons, layout tokens, and Background Grid styling; retain the current About content and actions.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, `next/image`, global design tokens, Playwright, axe-core.

**Spec:** [Approved Phase 3 design](../specs/2026-11-01-phase-3-image-hero-design.md)

**Global Constraints:** Do not alter header, footer, routes, or unrelated homepage sections. Add no dependencies. Do not hotlink. Preserve factual copy, accessible alt text, keyboard behavior, reduced-motion behavior, and stable image layout.

**Review Focus:**

- [ ] At 320px, hero copy and both CTAs remain visible without horizontal overflow.
- [ ] At 768px and desktop, the selected crop keeps the camera/security context legible.
- [ ] Hero and About reserve image space before loading and all images decode successfully.
- [ ] Reduced-motion mode contains no carousel, autoplay, or motion-dependent content.
- [ ] Homepage retains no serious/critical axe violations and all CTA routes remain correct.

## Task 1: Add focused Phase 3 regression coverage

**Files:** `tests/interactions.spec.ts`, `tests/a11y.spec.ts`

- [ ] Add assertions for one static hero image, accurate CTA routes, loaded images, no carousel controls, and no horizontal overflow at 320, 375, 430, 768, and 1440 pixels.
- [ ] Add a reduced-motion assertion that the hero remains fully usable and static.
- [ ] Run the focused new tests and confirm they fail against the current implementation.

## Task 2: Copy and register the approved local imagery

**Files:** `public/images/home/*.png`, `lib/home-images.ts`

- [ ] Download only the four identified homepage assets from the user-approved source URLs.
- [ ] Inspect actual dimensions/content and select the strongest society/security-camera image as the hero.
- [ ] Record local static imports, accurate alt text, source URL, and focal position in typed metadata.
- [ ] Verify every asset decodes and no component hotlinks the source site.

## Task 3: Replace the carousel with the static image-led hero

**Files:** `components/hero-slider.tsx`, `app/globals.css`

- [ ] Remove carousel state, autoplay, controls, and motion-only behavior while retaining the `HeroSlider` export.
- [ ] Render the local hero with `next/image`, intrinsic dimensions, `sizes="100vw"`, blur placeholder, and `preload`.
- [ ] Keep one factual headline, the existing service description, existing CTAs, and proof points.
- [ ] Add the navy/cyan overlay and restrained Background Grid treatment with responsive focal positioning.
- [ ] Run the focused hero tests and confirm they pass.

## Task 4: Replace About placeholders with supporting imagery

**Files:** `components/about.tsx`, `app/globals.css`

- [ ] Replace only the placeholder visual markup with two supporting local `next/image` assets and retain the badge.
- [ ] Preserve About copy, links, contact placeholder behavior, and semantics.
- [ ] Add a responsive, stable mosaic using explicit aspect ratios and accurate alt text.
- [ ] Run the focused homepage tests and confirm image loading and layout pass.

## Task 5: Final targeted verification

**Files:** All changed implementation and test files.

- [ ] Run ESLint only on changed TypeScript/test files.
- [ ] Run `npm run typecheck`.
- [ ] Run targeted homepage interaction tests across desktop, tablet, and mobile projects.
- [ ] Run the targeted homepage axe test.
- [ ] Run `npm run build` once.
- [ ] Inspect the final diff for unrelated changes and report pre-existing failures separately.

