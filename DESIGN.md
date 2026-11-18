---
name: "بازرگانی زمانیان — کارت ویزیت آنلاین"
description: "A physical-card face with four named bottom drawers in Persian."
colors:
  red: "#ed0812"
  deep-red: "#ae0f17"
  paper: "#f2ede8"
  white: "#ffffff"
  ink: "#292727"
  muted: "#716761"
  line: "#ded5d0"
typography:
  headline:
    fontFamily: "var(--font-peyda), Tahoma, sans-serif"
    fontSize: "clamp(1.375rem, 4.5vw, 1.875rem)"
    fontWeight: 800
    lineHeight: 1.6
  title:
    fontFamily: "var(--font-peyda-bold), var(--font-peyda), Tahoma, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.8
  contact-name:
    fontFamily: "var(--font-peyda), Tahoma, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.8
  body:
    fontFamily: "var(--font-peyda), Tahoma, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 2
  description:
    fontFamily: "var(--font-peyda), Tahoma, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.9
  phone:
    fontFamily: "var(--font-peyda), Tahoma, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "var(--font-peyda), Tahoma, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.8
  action:
    fontFamily: "var(--font-peyda), Tahoma, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.8
  caption:
    fontFamily: "var(--font-peyda), Tahoma, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.9
  saved-caption:
    fontFamily: "var(--font-peyda), Tahoma, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.8
rounded:
  control: "0.75rem"
  card: "1rem"
  sheet: "1.5rem"
  grip: "2px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
components:
  card-face:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.lg}"
    width: "100%"
  card-action:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "{spacing.xs}"
  card-action-icon:
    backgroundColor: "{colors.white}"
    textColor: "{colors.deep-red}"
    rounded: "{rounded.card}"
    width: "52px"
    height: "52px"
  drawer-popup:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    width: "min(100%, 34rem)"
  drawer-close:
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    width: "44px"
    height: "44px"
  drawer-close-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.deep-red}"
  contact-row:
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "1rem 0.5rem"
  contact-row-hover:
    backgroundColor: "{colors.paper}"
  drawer-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1rem"
  drawer-primary-hover:
    backgroundColor: "{colors.deep-red}"
    textColor: "{colors.white}"
---

# Design System: بازرگانی زمانیان

## Overview

**Creative North Star: "The Physical Contact Card"**

A white card presents the complete original red Persepolis logo above the company name and supplied representation on one central axis. Warm paper, charcoal type, a soft cast shadow and a fine red perimeter beam preserve the physical-card character. The user rejected the horizontal distributed experiment and chose this simpler composition.

Four named controls beneath the face reveal the showroom phones, salespeople, address and contact download in bottom drawers. This is the implemented sample requested by the user, not final artistic approval. The earlier linear contact composition and exhibition invitation are archived; no new logo, brand positioning or business claim is introduced.

**Key Characteristics:**
- A simple centered card with the original complete logo and uncluttered identity.
- Original undistorted logo, warm light surfaces and restrained red.
- Four icon-and-text controls with direct category drawers.
- Equal contact rows and readable, isolated phone numbers.
- User-triggered sheet motion with a reduced-motion alternative.

## Colors

Frontmatter preserves the exact palette in `app/globals.css`; it is normative for the sample. The values are implementation colors, not verified print specifications.

### Primary

- **red:** Existing logo identity and the thin lower card edge.
- **deep-red:** Control icons, phone numbers, hover/active feedback and keyboard focus; also selected text background.

### Neutral

- **paper:** Page canvas and contact-row/close-button hover backgrounds.
- **white:** Physical face, action-icon surfaces, drawer surfaces and primary-action text.
- **ink:** Main text, drawer primary-action fill and the modal backdrop base.
- **muted:** Descriptions, helper captions and resting close icon.
- **line:** Icon borders, contact separators and the drawer grip.

The backdrop uses ink at swipe-aware opacity. The sidecar's synthesized tonal ramps are panel visualization aids, not additional approved UI colors.

## Typography

Local PeydaWeb WOFF2 fixed weights 400/600/700/800 serve every role. next/font/local preloads the 400/600/800 core family; the separate 700 family is fetched when drawer or no-script headings become visible. Next provides an adjusted Arial fallback, followed by Tahoma and sans-serif; display swap keeps text visible. Synthetic font styles are disabled. Preserve natural Persian shaping, centered primary and drawer text and no letter spacing. Numeric destinations use Latin characters; displayed Persian phone numbers use tabular numerals inside LTR `bdi` elements.

### Hierarchy

- **headline:** Company H1, fluid from 22px to 30px at the standard root size, weight 800.
- **title:** Drawer headings, 18px at the standard root size, weight 700.
- **contact-name:** Both sales names, showroom-line labels and saved-contact names.
- **body:** Full showroom address with normal address styling and generous leading.
- **description:** Representation line and drawer explanations.
- **phone:** Visible telephone numbers, 18px at the standard root size.
- **label:** Four trigger captions, intentionally 13px at the standard root size.
- **action:** Drawer map/download action labels.
- **caption:** The contact-import note, intentionally 13px at the standard root size.
- **saved-caption:** Saved-contact role labels, sharing the caption size with tighter leading.

Exact rem values and line heights are in frontmatter. Headings use balanced wrapping; address/descriptions use pretty wrapping without ellipsis. The 22px headline endpoint, 13px labels/captions and 18px sheet headings/phones intentionally replace the earlier linear sample's scale.

## Layout

The page uses a single `minmax(0, 1fr)` grid track, `min-height: 100svh` and centered placement. The wrapper width is `min(100%, 34rem)` with `min-width: 0`. Outer inline padding is at least `1.25rem`; block padding is at least `xl`, respecting safe-area insets. Natural vertical growth and scrolling remain available.

The white face uses `min-height: clamp(15rem, calc((100vw - 2.5rem) * 54 / 85), 21.6rem)`, full wrapper width and `lg` padding. This derives its baseline height from the physical 85:54 proportion without imposing an aspect ratio. Natural content height can grow freely on narrow screens or enlarged text. The card stacks the complete original logo and text on a central axis. Logo width is 60px with md gap; at 640px it is 84px with lg gap and xl face padding. Representation uses 14px/1.9 and xs top spacing. Card content grows naturally with enlarged text; no forced word breaks, clipping or global nowrap.

Four action controls sit below the face in `repeat(auto-fit, minmax(min(100%, 4rem), 1fr))` tracks, with `sm` gaps and `xl` top separation. The auto-fit grid reflows to fewer columns when rem-based labels grow; it does not force all four controls onto one row. Each trigger is at least 80px tall; the bordered icon surface is 52px square. Labels remain visible below the icon, with no extra desktop column arrangement.

Drawers rise from the bottom on every viewport and share the wrapper's maximum width. Their maximum height uses `100dvh` with a 1rem top allowance; a 2rem offscreen bleed supports swiping. A non-scrolling grip/header sits above a flexing, vertically scrollable body with contained overscroll and safe-area padding. Close remains available while detail content scrolls. Long addresses and phone rows may wrap.

The used CSS spacing scale is in frontmatter; the unused `2xl` declaration was removed during cleanup. Additional observed values include a `0.625rem` trigger icon/label gap, `0.75rem` primary-action block padding and the grip area's 12px/4px block padding. The address is limited to 27rem; drawer explanations to 26rem.

## Elevation & Depth

The physical face uses a custom warm, downward three-layer `--card-shadow`: close contact, a middle cast and a broad diffused falloff. The cream ground is one shade darker while the face remains white. The drawer uses a separate upward shadow; an ink backdrop makes its modal state clear without blur. Full shadow values and layer metadata are in the sidecar because they do not fit the frontmatter component schema.

The user requested one automatic border-light pass: 4.8s linear, fading in/out and then stopping on a quiet static red outline. Reduced motion uses only the outline; unsupported motion-path/mask also falls back to that outline. See docs/border-beam.md. Opening and closing the sheet transitions transform and backdrop opacity for 350ms using `--ease-sheet`. Base UI swipe variables directly drive movement and backdrop opacity; transitions drop to zero during a swipe. With `prefers-reduced-motion: reduce`, both durations become zero. No bounce, card flip or decorative motion is used.

## Shapes

The face and action-icon surfaces share the card radius; triggers, telephone rows, primary actions and close controls share the control radius. Drawers round only the two upper corners using the sheet radius. The grip is a 36px by 4px line with an intentional 2px radius. The border-beam overlay follows the whole rounded perimeter at 1px thickness; it does not affect layout or clip the cast shadow.

Contact rows are separated by straight 1px lines. The original logo is uncropped, unmasked and undistorted. It is not recreated with type or decorative geometry.

## Components

### Physical card face

The complete original logo, company H1 and representation form a centered stack. Identity is visible in server-rendered HTML. Surface, edge, shadow and type carry the physical-card character; contact details are accessed through the named categories beneath it.

### Category triggers

Four native Base UI `Drawer.Trigger` buttons pair Solar Linear icons with the visible labels تماس، کارشناسان، نشانی، ذخیره. The whole trigger is interactive. Its accessible name uses the more descriptive drawer title. Hover and active states turn the caption deep red and strengthen the icon border; the open trigger also retains the deep-red border through `data-popup-open`.

### Bottom drawer

The application uses official Base UI 1.9 `Drawer.Root/Trigger/Portal/Backdrop/Viewport/Popup/Content/Title/Description/Close`. Every panel has a semantic title and description, explicit close button and downward swipe dismissal. The title receives initial focus; Base UI supplies modal focus containment, background scroll handling and focus return to the trigger. Escape, close button and backdrop are alternative closing paths.

The grip is decorative and hidden from assistive technology. The close button is 44px square, with a muted icon; hover/active states use paper and deep red. Links, buttons and focusable headings have a 2px deep-red focus outline with 4px offset. The separate client shell supplies interaction; business content remains server-authored. Static sidecar snippets illustrate appearance only and do not reproduce Base UI's runtime behavior.

### Telephone rows

Showroom and sales drawers use the same centered, full-row telephone links, at least 80px tall with `md`/`sm` padding. Each stacks the name above the phone/icon group. The two salespeople have equal visual weight. Hover/active feedback adds paper behind the row. Phone destinations remain native `tel:` links.

### Address and save actions

The address drawer presents the complete supplied address and a 48px-minimum charcoal map action. Its label honestly describes an address search, not a verified pin. The save drawer lists the company and two sales contacts before one vCard download action and an import note. Both primary actions turn deep red on hover/active. Actual contact importing depends on the browser and contacts application.

### No-JavaScript details

A `noscript` fallback below the face exposes the same telephone rows, address/search and contact download. Identity remains visible without JavaScript; the four interactive drawers require the client runtime.

## Do's and Don'ts

### Do:

- **Do** preserve the complete original logo and its intrinsic aspect ratio.
- **Do** keep the physical face centered and let its proportion-derived minimum height grow with readable text.
- **Do** retain visible labels on all four category controls and equal sales-contact presentation.
- **Do** isolate phone numbers in LTR `bdi` elements and preserve full address wrapping.
- **Do** retain explicit close, focus management, internal scrolling and reduced-motion behavior.
- **Do** distinguish this implemented proposal from final artistic approval.

### Don't:

- **Don't** restore invitation copy, exhibition dates, visiting hours or booth numbers.
- **Don't** invent business facts, social accounts, opening hours, a city or a precise map pin.
- **Don't** replace the logo, add a fabricated portrait or use a screenshot as functional UI.
- **Don't** add nested drawers, a card flip, automatic motion or decorative blur.
- **Don't** clip enlarged content, restrict zoom or break Persian shaping with letter spacing.

The drawer header reserves `spacing.sm` below its grid so its title focus outline stays clear of scrolled content, including at 200% root text size.


## تصمیم فعال ۲۰۲۶-۱۱-۱۷ — سه دکمه و حرکت پیوسته
Border Beam بنا بر اصلاح صریح کاربر بی‌نهایت و خطی است؛ در reduced-motion خاموش می‌شود. ترتیب RTL دکمه‌ها: ارتباط با ما، دفتر مرکزی، فروشگاه مرکزی. ارتباط با ما دو شمارهٔ واقعی کارشناسان را با سمت‌های نمونهٔ مشخص‌شده نشان می‌دهد. دفتر: چهارراه ابوطالب، پاساژ جام‌جم، طبقه ۵، واحد ۵۰۱. فروشگاه: نشانی قبلی توس و دو خط ثابت تأییدشده. هر مکان لینک Directions با destination نشانی دارد؛ پین یا مختصات تأییدشده ادعا نمی‌شود. راهنمای رسمی: https://developers.google.com/maps/documentation/urls/get-started . دکمهٔ ذخیره از صفحه حذف شد؛ endpoint موجود vCard حفظ و سمت نمونه به آن منتقل نشد. این تصمیم قواعد قدیمی چهار دکمه و یک دور انیمیشن را supersede می‌کند.


## پترن مکان‌ها — اجرای ۲۰۲۶-۱۱-۱۷
هر مکان تصویر تزئینیِ اختصاصی خود را از public/assets/maps دارد؛ هندسهٔ SVGهای پاک‌سازی‌شده در رندر با اصل برابر است. پترن ۱۲۸ پیکسلی به بالای Drawer متصل است، برش می‌خورد و با mask تدریجی در سطح سفید محو می‌شود. عنوان و بستن روی سطح خوانا باقی‌اند؛ نام بازرگانی تکرار نمی‌شود. نشانی با فاصلهٔ ۱۶ پیکسلی به مسیریابی متصل است. دفتر فقط اطلاعات مراجعه و اقدام مسیر دارد؛ فروشگاه دو ردیف تلفن کوتاه برای هماهنگی مراجعه نیز دارد. انتساب کوچک OSM دلیل حفظ منبع داده است. تصویر به‌عنوان نقشهٔ مقصد معرفی نمی‌شود؛ پین اضافه نشده است.


## آخرین اصلاح Border Beam و مقصدها
افکت فعلی: سه دنبالهٔ SVG با فاصلهٔ مساوی، دور ۱۶ ثانیه، خط ۱٫۲۵ پیکسل؛ مربع متحرک/ماسک قبلی حذف شد. مشخصات مرجع فعال docs/border-beam.md است و مقادیر تاریخی را supersede می‌کند. مقصدهای دفتر و فروشگاه از لینک‌های دقیق کاربر استخراج شدند؛ docs/location-destinations.md.


## اصلاح نهایی افکت — چهار پرتو Magic UI
طبق اصلاح صریح کاربر، SVG سه‌پرتویی رد شد. چهار مربع گرادیانی واقعی، Motion، مسیر و ماسک لبه جایگزین آن شدند؛ دور۱۶ثانیه و فازهای۰/۲۵/۵۰/۷۵. مرجع فعال docs/border-beam.md است.


## ۲۰۲۶-۱۱-۱۸ — قرارداد فعلی کنترل‌های کارت
ترتیب RTL چهار کنترل: ارتباط با ما، کاتالوگ ما، دفتر مرکزی، فروشگاه مرکزی. کاتالوگ یک BookIcon خطی۲۴px در همان قاب۵۲px است. فعلاً native disabled با متن/آیکون muted و قاب paper، بدون href/hover فعال؛ وضعیت «به‌زودی» با اندازه۰٫۷۵rem و وزن۴۰۰. grid از min۴rem استفاده می‌کند؛ در متن بزرگ تعداد ستون کمتر می‌شود. رفتار و شواهد: docs/catalog-action.md. سه کنترل دیگر همان Drawerهای فعلی‌اند؛ کاتالوگ پس از فعال‌سازی لینک مستقیم خواهد بود.
