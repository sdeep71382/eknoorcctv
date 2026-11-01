# Phase 3 Image System and Homepage Hero Design

## Intent

Replace the abstract CSS hero with an image-led, premium first impression using imagery supplied by the user from `skysecurestore.com`, while keeping Eknoor CCTV branding, routes, accessibility, and responsive behavior intact.

## Goals

- Use one strong, static hero image with one dominant message and two restrained calls to action.
- Copy the four supplied homepage hero images into local optimized assets with clear source attribution in code metadata.
- Use the strongest society/security-camera image in the hero and reserve the remaining images for the homepage About composition.
- Render imagery with `next/image`, explicit responsive sizing, stable aspect ratios, accurate alt text, and intentional focal positioning.
- Preserve keyboard navigation, reduced-motion behavior, existing routes, and mobile readability.

## Non-goals

- No changes to navigation, footer, product/solution sections, testimonials, or detail pages.
- No invented business claims, contact data, social destinations, or external image sources.
- No carousel, autoplay, slider controls, or decorative motion in the redesigned hero.

## Approaches considered

1. **Selected — focused static hero:** one dominant image and message; remaining supplied images support the About composition. Best clarity, performance, and alignment with the approved plan.
2. **Preserve the four-slide carousel:** closest to the source site, but heavier and less focused, with additional motion and controls.

## Implementation constraints

- Reuse the existing navy/cyan/white tokens, buttons, Background Grid primitive, and current content routes.
- Keep assets local; do not hotlink the source website.
- Treat the supplied website as the user-approved image source.
- Validate image dimensions, layout stability, responsive focal points, reduced motion, axe, and targeted hero interactions before the phase is complete.
