# Ceramic invitation QA — 2026-11-14

## Final production checks

Built from a fresh Next output directory after stopping the dev server; served on localhost:3000. Production screenshots supersede all older invitation/redesign screenshots.

| Viewport | Document size | Card height | Center x | Images |
|---|---|---|---|---|
| 320×568 | 320×568 | 533.64px | 160px | loaded |
| 360×640 | 360×640 | 593.58px | 180px | loaded |
| 375×667 | 375×667 | 593.58px | 187.5px | loaded |
| 390×844 | 390×844 | 593.58px | 195px | loaded |
| 430×932 | 430×932 | 593.58px | 215px | loaded |
| 1440×900 | 1440×900 | 593.58px | 720px | loaded |

No horizontal or vertical scrolling at default text size in these Chrome viewports. Screenshots: qa/luxury-{320,360,375,390,430,1440}.png. Final 320,390,1440 and enlarged-text captures visually inspected. Original full logo retains aspect ratio and color. Header ceramic margins do not overlap meaningful central text. Image is conceptual, not product evidence.

At320px, all computed font sizes doubled simultaneously to simulate 200% text: document320×1230, natural vertical scrolling, no horizontal overflow or clipped content. Screenshot qa/luxury-text-200.png. This is a text-enlargement simulation, not a claim of testing every browser zoom mechanism.

One H1; lang=fa; dir=rtl; telephone footer dir=ltr. First Tab reaches map with solid visible outline. All four links have44px height. Map URL and three telephone hrefs match config; no actual phone calls placed. Both images decode successfully. Production console:0 errors,0 warnings.

## Independent assessment

Assessment A: separate visual-review agent inspected source, screenshots and live Chrome. No critical visual defect; requested larger compact logo and footer touch targets. Those were fixed to64px and44px respectively, then verified in production above.

Assessment B: separate mechanical-review agent ran source detector once,0 findings (qa/luxury-detector.json). Contrast: red/white4.522:1, muted/paper5.196:1, charcoal/white14.854:1. Browser checks in that pass were limited by stale dev output; final clean production measurements above supersede them. Browser detector overlay was not injected.

## Technical checks and limits

TypeScript passed; scoped app/config ESLint passed without warnings. Full pnpm lint passed with93 warnings in pre-existing vendored Impeccable scripts,0 errors. Final production build passed and renders static routes. SITE_URL is unset, so existing metadataBase warning remains; configure the verified origin at build time before publishing. OG image1200×630 visually inspected.

No public deployment, real messaging/social unfurl, exact venue pin validation, physical-device test, screen-reader audit, other browser engine or Lighthouse score claimed. No animation exists; reduced-motion users receive the same immediately visible content. Next feedback reporting pass: no qualifying framework issue retained; stale shared dev/build output was routine local process/cache cleanup.

## Latest base-content spacing change
Image removed from rendered page; only original logo remains. Four groups use actual computed justify-content:space-between and a viewport-relative minimum height. Production Chrome at320×568,360×640,390×844,1440×900: document dimensions match viewport in each case, no horizontal/vertical overflow. Evidence: qa/spacing-{320,360,390,1440}.png;390 screenshot visually inspected. First Tab has visible map focus; all four hrefs unchanged. At200% simulated text size,320px document width remains320px with natural vertical height1226px. Production console initially clean; no animations introduced. Typecheck, full lint and build passed; existing vendored-skill lint warnings and unset SITE_URL metadata warning remain. No qualifying new Next feedback candidate.
