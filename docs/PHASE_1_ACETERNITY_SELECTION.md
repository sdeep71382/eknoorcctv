# Phase 1 Aceternity Selection

Date: 2026-10-24  
Status: implemented as foundation prototypes; live navigation replacement remains in Phase 2.

## Selection principles

The selected patterns must preserve the site's current semantics, keyboard behavior, static routing, reduced-motion support, and responsive layout. Aceternity is used as a design and interaction source. The implementation remains local and typed so the project does not need a shadcn registry layer for four small patterns.

## Component decisions

| Component | Documentation | Decision | Phase 1 implementation | Fallback |
|---|---|---|---|---|
| Background Grid with Dots | https://ui.aceternity.com/blocks/backgrounds | Selected | A CSS-only, decorative grid-and-dot layer is used behind shared section headings and is available for future hero surfaces. It is hidden from assistive technology and has no runtime cost. | The same sections remain readable on a plain navy or white surface. |
| Bento Grid | https://ui.aceternity.com/components/bento-grid | Selected | A semantic grid wrapper now powers the home solutions layout without changing its articles, links, or content order. | Standard CSS Grid with the existing article markup. |
| Card Spotlight | https://ui.aceternity.com/components/card-spotlight | Selected | Solution cards use a pointer-following light treatment and a short Motion lift. Focus and touch users receive the same border, contrast, and shadow hierarchy. Reduced motion removes the lift. | CSS border, focus, and shadow states. |
| Resizable Navbar | https://ui.aceternity.com/components/resizable-navbar | Compatible; deferred for live use | A typed Motion prototype verifies scroll-state animation, reduced-motion behavior, and arbitrary Next.js link children. It is intentionally not connected to the live header in Phase 1. | Refine the existing accessible header with CSS in Phase 2. |

## Dependencies

- `motion`: used by the spotlight card and navbar compatibility prototype. It supports React 19 and imports through `motion/react`.
- `lucide-react`: supplies a consistent vector icon for shared section headings and is available for later approved component work.
- No shadcn CLI or registry utilities were installed. The project does not need their configuration or generated helpers for these small local patterns.

## Placeholder contact policy

Phone, sales, email, and WhatsApp values remain explicit placeholders. A shared contact-detail renderer outputs them as non-interactive text while placeholder mode is enabled; it can restore the appropriate link type after verified values are supplied. No review, social, testimonial, or form-delivery integration was added in Phase 1.

## Accessibility and performance rules

- Decorative grids are `aria-hidden`.
- Spotlight position never carries information and is not required to identify an interactive element.
- Keyboard focus uses the same or stronger visual hierarchy as pointer hover.
- `prefers-reduced-motion` disables transform-based movement and nonessential transitions.
- The live header remains unchanged until its complete keyboard, touch, dropdown, and Escape behavior can be reviewed in Phase 2.
