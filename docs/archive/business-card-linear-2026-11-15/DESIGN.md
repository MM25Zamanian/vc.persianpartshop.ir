---
name: "بازرگانی زمانیان — کارت ویزیت آنلاین"
description: "Centered Persian contact card using the existing Persepolis identity."
colors:
  red: "#ed0812"
  deep-red: "#ae0f17"
  paper: "#faf8f6"
  white: "#ffffff"
  ink: "#292727"
  muted: "#716761"
  line: "#ded5d0"
typography:
  headline:
    fontFamily: "var(--font-vazirmatn), Tahoma, sans-serif"
    fontSize: "clamp(1.625rem, 5vw, 1.875rem)"
    fontWeight: 800
    lineHeight: 1.6
  title:
    fontFamily: "var(--font-vazirmatn), Tahoma, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.75
  body:
    fontFamily: "var(--font-vazirmatn), Tahoma, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 2
  representation:
    fontFamily: "var(--font-vazirmatn), Tahoma, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.9
  phone:
    fontFamily: "var(--font-vazirmatn), Tahoma, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "var(--font-vazirmatn), Tahoma, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.7
  caption:
    fontFamily: "var(--font-vazirmatn), Tahoma, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  control: "0.75rem"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "2.5rem"
components:
  action-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.75rem"
  action-primary-hover:
    backgroundColor: "{colors.deep-red}"
    textColor: "{colors.white}"
  action-map:
    textColor: "{colors.deep-red}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.75rem"
  action-map-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.deep-red}"
  sales-contact:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1rem"
  save-link:
    textColor: "{colors.deep-red}"
  business-card:
    width: "min(100%, 29rem)"
---

# Design System: بازرگانی زمانیان

## Overview

**Creative North Star: "The Centered Contact Card"**

The existing original red Persepolis logo anchors a warm, quiet Persian contact surface. Charcoal type and generous line height make the company, showroom and two sales contacts easy to distinguish. Identity comes from the supplied mark, local type and central axis rather than material photography or decoration.

This document records the implemented business-card sample, not final user approval of the artwork. The permanent card replaces the exhibition invitation; historical imagery and compositions are archived references. The title above describes the current composition and does not introduce a new brand positioning.

**Key Characteristics:**
- One centered column and naturally flowing Persian text.
- Original undistorted logo, restrained red and warm light surfaces.
- Readable contact details with equal visual weight for both salespeople.
- Flat surfaces, native links and no motion.

## Colors

The frontmatter preserves the exact CSS colors in `app/globals.css`; it is the normative palette. These are implementation colors, not verified print or corporate brand specifications.

### Primary

- **red:** Existing logo identity; the page does not add a competing filled red panel.
- **deep-red:** Action text, phone icons, focus outlines, hover and active feedback, and selected text background.

### Neutral

- **paper:** Page canvas.
- **white:** Sales-contact surfaces, primary-action text and map-action hover background.
- **ink:** Main text and primary-action fill.
- **muted:** Secondary captions, explanatory text and resting sales phone numbers.
- **line:** The two showroom separators.

The sidecar's synthesized tonal ramps are panel visualization aids, not additional approved UI colors.

## Typography

Vazirmatn Variable is loaded locally through `next/font/local`, with Tahoma and sans-serif fallbacks. The same family serves every role; no decorative display face or separate number font is used. Preserve natural Persian joining and avoid letter spacing.

### Hierarchy

- **headline:** Company H1; fluid size and strong weight.
- **title:** Section H2s and both salesperson names.
- **body:** Complete showroom address, with normal rather than italic address styling.
- **representation:** The supplied brand relationship below the company name.
- **phone:** All phone numbers, with tabular numerals inside LTR `bdi` elements.
- **label:** The two top actions. The save link shares its size and weight but uses normal inherited line height.
- **caption:** The showroom telephone label and the explanation below the save link.

The token scale is normative. Headings use balanced wrapping; the address uses pretty wrapping without truncation. Visible numbers are Persian; machine destinations remain normalized Latin numbers.

## Layout

The page uses a grid with `min-height: 100svh`, centering a single article when space allows and allowing normal vertical growth and scrolling. The article width is the frontmatter's `business-card` width. Outer inline padding is at least `1.25rem`; block padding is at least the `xl` spacing token, with safe-area insets respected on all four sides.

The original logo is displayed at `88px` wide with its intrinsic aspect ratio and an `lg` gap below. Identity precedes two native actions, the showroom/address/landlines, two sales contacts and the save link. This reading order remains the same on desktop.

The two top actions use wrapping flex layout with `flex: 1 1 12rem` and an `sm` gap. Their arrangement follows available width rather than a media-query breakpoint. Landlines also wrap naturally, separated by an `lg` horizontal gap. The sales list is a single-column grid with an `sm` gap. Each salesperson remains centered and equally prominent.

The CSS spacing primitives are listed in frontmatter; the `2xl` token is declared but is not currently applied. Additional observed measurements are `0.75rem` action/contact block padding, the `1.25rem` page gutter, and the address's `25rem` maximum width. Do not stretch groups with `space-between`, fix the content height or clip enlarged text.

## Elevation & Depth

No shadows, blur, gradients or floating layers are used. Depth comes from white sales-contact surfaces on paper and thin showroom separators. Hover feedback changes color and, for text actions, adds an underline; it does not lift, scale or animate content.

## Shapes

The shared control radius in frontmatter applies to top actions and the two sales-contact surfaces. Showroom rules remain straight `1px` lines. The overall article has no enclosing card border, background panel or shadow. The logo remains an uncropped image with no mask or replacement drawing.

## Components

### Brand

The unchanged original logo, company H1 and supplied representation line form one centered header. The reserved image dimensions preserve aspect ratio. Company naming is not automatically translated.

### Primary actions

The charcoal filled action links to the sales heading within the page. The map action uses deep-red text on the page canvas and opens a search for the supplied address in a new tab. It represents an address search, not a verified map pin. Both controls use a minimum height of `48px`, centered labels and Solar Linear icons.

Hover and active states use the palette variants in frontmatter. Map hover/active states also underline the label. Links and the programmatically focusable sales heading have a `2px` deep-red focus outline with `4px` offset. There are no state transitions or animations.

### Showroom and landlines

A centered H2, complete address, caption and two telephone links sit between thin block separators. Showroom block padding uses `lg`; its top gap uses `xl`. Each landline link is at least `44px` tall, with an `18px` decorative icon and an LTR isolated number. Hover/active states become deep red and underlined.

### Sales contacts

Two full-width white link surfaces share identical spacing, radius and typography. Each stacks the name above its visible number and icon. The contact surface changes name and number to deep red on hover/active; the whole surface initiates a native phone call. Do not assign one salesperson visual priority over the other.

### Save contacts

A centered deep-red link with a `19px` download icon offers one vCard file containing the company and two salespeople. The link is at least `44px` tall, with underlined hover/active feedback. A muted caption explains the file's contents. Actual importing behavior depends on the user's browser and contact application.

## Do's and Don'ts

### Do:

- **Do** preserve the original complete Persepolis mark and its aspect ratio.
- **Do** keep Persian primary content centered and phones isolated in LTR `bdi` elements.
- **Do** retain equal presentation for the two salespeople and show both central landlines.
- **Do** allow action wrapping, full address wrapping and natural page scrolling.
- **Do** retain visible keyboard focus and the existing minimum control heights.
- **Do** distinguish this implemented proposal from final visual approval.

### Don't:

- **Don't** restore exhibition dates, visiting hours, booth numbers or invitation copy to the permanent card.
- **Don't** invent business facts, social accounts, opening hours, a city or a precise map pin.
- **Don't** add a fabricated portrait, material scene or screenshot as functional UI.
- **Don't** introduce motion, heavy shadows, generic dashboard patterns or extra columns to this sample.
- **Don't** clip content, restrict zoom or use Persian letter spacing that breaks shaping.
