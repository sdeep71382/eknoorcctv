# UI/UX Improvements — Sky Secure

Date: 2026-10-19

## Implemented

- Removed build-time Google font downloads and the `next/font/google` module. Typography uses the existing `--font-heading` and `--font-body` tokens with an Arial/Helvetica system stack. This makes the production build independent of Google Fonts network access.
- Changed header menu state to be scoped to the current pathname. Route navigation now closes menus without triggering a state update during render.
- Fixed 320px overflow on product detail pages by allowing the mobile grid track to shrink and scaling the product mark responsively.
- Preserved existing routes, content, metadata, interaction behavior, and the locally validating contact form.

## Files changed

- `app/layout.tsx` — removed font module classes and import.
- `app/globals.css` — system font token values and narrow-screen product detail sizing.
- `app/fonts.ts` — removed network-dependent font setup.
- `components/header.tsx` — route-scoped menu state.

## Verification

- `npm run build` — passed; generated 43 app outputs.
- `npm run typecheck` — passed.
- `npm run lint` — passed.
- Playwright: a 30/30 production run passed before the final narrow-screen CSS adjustment. On final source, a parallel run passed 28/30; the two tablet tests that timed out both passed in a serialized focused rerun. The full serial rerun stalled in the tablet route sweep. See `UI_UX_TEST_REPORT.md` for details.
- Responsive audit — 35 representative route/viewport combinations across the five audited pages and seven widths; zero document overflow after the fix. The home audit also identifies decorative hero art and horizontal tab rails extending beyond the viewport, while the document itself remains within the viewport.
- Console/request sweep — 36 sitemap routes checked; no console errors, page errors, failed requests, or non-200 responses.

## Limitations

- Current Lighthouse/Core Web Vitals were not rerun. Prior metrics in old workspace artifacts are not claimed as results for this version.
- Visual hero/collage/card artwork remains CSS-generated because no approved image assets were available in the audited source tree.
- The contact form remains an explicitly disclosed local demo and does not transmit submissions.
