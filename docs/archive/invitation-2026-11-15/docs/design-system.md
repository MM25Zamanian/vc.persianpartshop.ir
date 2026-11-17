# Ceramic invitation design system

## Authority

The user's approved implementation plan is the current visual contract. Older large reference layouts and navy Faraz redesign are superseded. World: light ceramic material, a precision red edge, original logo and centered Persian text. Mode: Persuade. Build path: code-first, confirmed by the user.

## Palette and typography

Warm white #FAF8F6, red #ED0812, deep red #AE0F17, charcoal #292727, muted #716761, line #DED5D0. Suggested package colors are not official print specifications. Red is reserved for logo and booth; charcoal primary action, outlined secondary action. Visible deep-red focus ring and themed text selection.

Local Vazirmatn Variable, weights 400/550/700. Company 18px; heading 22px with a 14px lead line; invitation and primary data 14px; secondary content and buttons 12px; booth 36px. Centered, natural Persian shaping, no tracking. The small invitation label is explicitly required by the user and overrides general skill advice against eyebrows.

## Layout

One semantic static invitation, max-width 360px, centered in a min-height 100svh page with natural overflow. Header: unchanged complete red logo, company and role; decorative ceramic study at margins with clean center. No card frame or heavy shadows. Event title/message, grouped date/hours and venue/private note, compact red booth plaque, two actions, isolated contact footer. Sparse separators group data rather than splitting every section.

Base 16px vertical gaps and 20px page padding. One max-height:620px query reduces gaps to 8px, outer vertical padding to 10px, logo/decorative footprint and internal spacing; text and 44px buttons keep their size. Never use overflow hiding, fixed content heights or zoom restrictions.

## Assets and behavior

public/assets/persepolis-logo.png is copied unchanged from the supplied full red PNG. public/assets/ceramic-study.webp is variant A of three native imagegen outputs, optimized to 1200×675, 5980 bytes; conceptual rather than verified product. The image cannot carry event copy or logo. Native links only, no client component or animation. Share image is a separate 1200×630 composition using the same identity and study.

## Latest user correction — base content first
Remove the ceramic image from the page. Keep four centered groups: brand, invitation, event details/booth, and actions/contacts. The article has viewport-relative min-height (100svh minus outer padding), flex column and justify-content:space-between. Minimum gaps preserve grouping when space is tight; content expands naturally when text is enlarged. No fixed height or clipping. Historical generated assets and OG image remain unchanged for later visual work.

## Latest content and information refinement
The company name is heavier with limited decorative tatweel, while its accessible label preserves the natural spelling. The role line and booth plaque are removed; the booth appears in bold within the venue line. A compact invitation paragraph follows the organizer's invitation tone. Solar linear calendar, clock and location icons accompany the logistics; the centered, viewport-spaced layout remains intact.

## Symmetric event details
The event information is a single centered section bounded by understated horizontal rules. Date and hours occupy equal columns; location, booth and private-day note share the central axis below. Solar icons remain paired with their labels. Compact-height spacing keeps the section usable on short phones.

## User-supplied dark slab accents
The user subsequently authorized dark material accents using Dima Navy Blue and Mallorca Black. Their downloaded WebP originals are under public/assets/materials. Two mirrored architectural cuts flank the lower event section, outside the text axis. The mobile composition shows cropped edges; wider viewports reveal more surface. These are code-native masks of supplied product photography, not generated product representations. Main brand palette and original logo remain intact. Decoration is excluded from accessibility navigation and its own layer clips overflow without clipping page content.
