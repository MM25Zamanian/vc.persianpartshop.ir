# Architecture

Next.js 16.4.6, React 19.3, TypeScript strict, Tailwind 4.3.3, pnpm 10.6.1. Root app/ App Router structure. Installed Next Image documentation was consulted before this implementation.

app/page.tsx is a static Server Component; config/event.ts centralizes event facts, invitation copy, title lines and private-day notice. No backend or new dependency. Local next/font Vazirmatn, next/image original full PNG logo and eager decorative ceramic WebP; explicit intrinsic dimensions reserve space. CSS tokens, max360px centered composition and one height-only query. No client-side animation or new hydration.

Map action remains a Google Maps venue-name search, not a precise verified pin. Telephone links retain supplied numbers with LTR isolation. noindex stays enabled. Set SITE_URL to a verified public origin at build time for absolute metadata URLs. Missing SITE_URL causes the existing localhost metadata warning; no origin is invented.

app/opengraph-image.png is a separately composed 1200×630 share image; app/icon.png retains the existing red emblem. Original and unused historical assets remain on disk to avoid deleting prior work.

Validation: pnpm exec tsc --noEmit; pnpm lint; pnpm build; production Chrome screenshots, overflow, focus, links, image load and text enlargement. Tool availability: agent-browser absent; existing playwright-cli with installed Chrome used instead. Browser screenshot tooling may produce transient errors when replacing the DOM for offline OG composition; actual page is checked separately on a fresh production session.
