# Phase 2 Global Shell and Navigation

Date: 2026-10-24  
Status: implemented

## Navigation decision

The Phase 1 Resizable Navbar prototype was adopted as the live header wrapper. It remains a non-semantic `div` so the document contains one authoritative `nav` landmark. Motion is limited to width and radius interpolation; scroll-state detection uses a passive browser listener, and the existing reduced-motion treatment removes nonessential animation.

The original Next.js links, route awareness, disclosure buttons, and mobile body-scroll lock remain intact. Desktop menus open by pointer or button activation. Arrow Down opens a focused disclosure, Tab enters its links, and Escape closes the active panel and restores focus to its trigger. Tablet and mobile widths use an explicit bounded menu with independently expandable solution and product groups.

## Placeholder and external-link configuration

- Contact values live in `lib/site-data.ts` and remain in placeholder mode.
- `ContactDetail` renders phone, email, and WhatsApp values as text while placeholder mode is enabled.
- Facebook, Instagram, X, WhatsApp, and Google Reviews destinations are centralized in `externalLinks`.
- Every external destination is `null` until a verified URL is supplied; the header and footer do not invent or emit placeholder links.

## Footer structure

The footer now contains semantic brand, Explore, Solutions, and Contact sections plus a subdued metadata row. Contact placeholders remain visible but inactive, while social and review availability is stated without exposing fake actions.

## Phase boundary

No photography, homepage-section redesign, hero work, product/solution content restructuring, review integration, or form-delivery behavior was added in Phase 2.
