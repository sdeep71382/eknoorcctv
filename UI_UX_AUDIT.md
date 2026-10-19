# UI/UX Audit — Sky Secure

Date: 2026-10-19

## Scope and evidence

- Reviewed the App Router structure, shared root layout, home page, dynamic `[slug]` page, route data, shared components, global styles, and existing Playwright/QA scripts.
- Public route inventory: 36 sitemap entries (home plus 35 slugs). Unknown routes use the custom not-found page.
- Browser verification used the production build. Automated checks covered desktop (1440px), tablet (768px), and mobile (375px). A separate responsive audit covered 320, 375, 430, 768, 1024, 1440, and 1920px on `/`, `/about-us`, `/contact-us`, `/home-solutions`, and `/door-access-control`.
- Confirmed findings are separated below from items that need further measurement or approved assets.

## Confirmed issues and improvements

| Severity | Area / affected pages | Finding | Improvement |
|---|---|---|---|
| High | `/door-access-control` at 320px | The product mark's intrinsic width forced the one-column detail grid to 330px; document overflow was 25px. | Constrained the mobile grid track and scaled the product mark. The rerun reports document overflow of 0 at 320px. |
| Medium | All pages / shared typography | `next/font/google` required build-time access to Google. It failed in this restricted environment and fell back to Arial, contrary to the previous report's “self-hosted” claim. | Removed the network-dependent font imports and selected an explicit Arial/Helvetica system stack, retaining the existing heading/body tokens and hierarchy. Production build now succeeds without font downloads. |
| Medium | Shared header, route transitions | Header menu state reset during render on route changes, and the browser emitted a React warning during the first dev test run. | Made open-menu state pathname-scoped so it is closed on a new route without a render-phase state update. Production Playwright interaction tests pass. |
| Medium | 320px responsive layouts | A representative detail route had actual horizontal overflow. | Fixed and rechecked the five representative routes at all seven target widths; all document widths fit the viewport. |
| Low | Home page | Hero art uses CSS gradients and abstract decorative shapes; it is not photographic security imagery. | Preserved the implementation and its content. Replacing it needs approved brand/product photographs; none were present in the audited source tree. |
| Low | Contact page | The form intentionally validates locally and does not submit data. | Kept the explicit disclosure and success message; this is a demonstration interaction, not a lead-capture integration. |

## Existing strengths confirmed

- Shared root layout provides a skip link, one main landmark, global metadata, and shared header/footer.
- Dynamic route parameters use the current Promise-based Next.js pattern; public pages are statically generated from the route list.
- Navigation has active-page state, menu expanded state, Escape handling, and mobile menu behavior.
- Product and client tablists implement arrow-key and Home/End navigation.
- Focus indicators and reduced-motion rules are present.
- Axe checks on home and contact found no serious or critical violations in desktop, tablet, and mobile projects.
- No horizontal document overflow was found on the five representative routes at the seven specified widths after the fix.

## Items not established by this audit

- Current Core Web Vitals/Lighthouse scores were not remeasured after the typography and layout changes. Older Lighthouse artifacts in the workspace do not represent this final source state.
- The full website was not manually inspected at every route-width combination. All 36 public routes were exercised in the automated route test at each Playwright project width; detailed layout checks used the five representative routes listed above.
- WCAG 2.2 AA conformance is not certified. Automated axe scans cover serious/critical findings on two pages and do not replace a full assistive-technology audit.
