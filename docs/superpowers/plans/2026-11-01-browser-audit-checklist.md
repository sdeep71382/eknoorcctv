# Browser Audit Checklist Fix Plan

**Goal:** Resolve every issue found in the 43-route live-browser audit without changing routes or unrelated content.

**Architecture:** Use the generated static image manifest as the single category-image source, restore one static hero, and make small accessibility/responsive CSS fixes. Preserve existing navigation, contact validation, and page data.

**Validation:** Focused Playwright tests first, then TypeScript, targeted lint, axe, all-route checks, production build, and a final live-browser review at 320, 375, 768, and 1440px.

- [ ] Replace string-path image lookup with generated static assets and category-family fallbacks.
- [ ] Restore a single image-led hero with semantic highlighted text and no carousel/autoplay.
- [ ] Remove the invalid Google Reviews link unless configured.
- [ ] Hide the mobile CTA on desktop and improve the 768px About composition.
- [ ] Give carousel clones empty alt text and hide them from assistive technology.
- [ ] Correct responsive image `sizes` and preload above-fold detail imagery.
- [ ] Strengthen the 404 secondary CTA contrast.
- [ ] Verify no runtime error, broken visible images, raw markup text, or overflow remains.

