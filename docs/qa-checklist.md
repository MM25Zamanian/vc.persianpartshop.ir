# کنترل کیفیت کارت ویزیت — ۲۰۲۶-۱۱-۱۵

جدیدترین تغییر: [نصب و بررسی فونت Peyda](peyda-installation.md).

آخرین اصلاح: [رنگ، سایه و پاک‌سازی](qa-polish-cleanup.md).

> نسخهٔ فعلی کارت فیزیکی و Base UI Drawer است: [بررسی‌های جدید](qa-drawers.md). نتایج زیر مربوط به نمونهٔ خطی پیشین‌اند و برای تعامل‌های Drawer مدرک محسوب نمی‌شوند.

این سند فقط نسخهٔ کارت ویزیت را پوشش می‌دهد. نتایج دعوت‌نامهٔ قبلی در بایگانی است. بررسی‌ها و شواهد اجرای فعلی پس از پیاده‌سازی در همین سند تکمیل می‌شوند.

## قرارداد پذیرش
- نام، عبارت نمایندگی، نشانی، دو خط ثابت و دو کارشناس مطابق `content.md`.
- عدم وجود فراز، دعوت‌نامه، تاریخ و غرفه در رابط، metadata و OG فعلی.
- چهار `tel:` درست؛ نقشه جست‌وجوی نشانی، بدون پین ادعایی.
- دانلود سه مخاطب با نام و شمارهٔ درست؛ UTF-8 سالم، CRLF، folding و Content-Type صحیح.
- لوگوی کامل و دست‌نخورده؛ متن فارسی طبیعی؛ مرکز هندسی مشترک؛ عرض ۳۲۰، ۳۶۰، ۳۹۰، ۴۳۰، ۷۶۸، ۱۴۴۰؛ اسکرول عمودی مجاز.
- ناحیهٔ لمس حداقل ۴۴px، فوکوس مرئی و ترتیب کیبورد، کنتراست کافی، بدون پنهان‌کردن محتوا با حرکت.
- بزرگ‌کردن متن ۲۰۰٪ بدون برش یا اسکرول افقی.
- `pnpm exec tsc --noEmit`، `pnpm lint`، `pnpm build` با نتایج واقعی.

## محدودیت‌های انتشار
پین دقیق، URL عمومی، import روی iOS/Android واقعی، تماس واقعی، مرورگرهای غیر Chromium، screen reader و unfurl واقعی هنوز بررسی نشده‌اند. دانلود صحیح، اثبات import روی همهٔ دستگاه‌ها نیست. نمونه تأیید نهایی گرافیکی کارفرما نیست.

## نتایج اجرای نمونه

TypeScript (`pnpm exec tsc --noEmit`) موفق. ESLint محدود به app/config/lib و اسکریپت OG بدون warning/error موفق. `pnpm build` موفق و صفحه، دانلود مخاطبان و metadata routes به‌صورت static prerender شدند. `SITE_URL` داده نشده؛ هشدار metadataBase/localhost ثبت شده و مانع ساخت نیست، اما برای انتشار باید رفع شود.

`pnpm lint` کامل: صفر خطا، ۹۳ هشدار در فایل‌های از قبل موجود و vendored مهارت Impeccable. نتیجهٔ نهایی مجدداً پس از تکمیل اسکریپت تولید OG اجرا شد؛ شمارش نهایی در پایین این سند ثبت می‌شود.

### اندازه‌ها و مشاهدهٔ واقعی

Chrome نصب‌شده با session جداگانه agent-browser، روی نسخهٔ production در پورت ۳۱۰۷؛ فونت و لوگو پیش از capture آماده بودند. تمام تصاویر زیر باز و مشاهده شدند. اسکرول عمودی مجاز است.

| viewport | اندازهٔ سند | مرکز ستون | شاهد |
|---|---|---|---|
| ۳۲۰×۵۶۸ | ۳۲۰×۱۰۳۶ | ۱۶۰ | qa/business-card/320.png |
| ۳۶۰×۶۴۰ | ۳۶۰×۱۰۳۶ | ۱۸۰ | qa/business-card/360.png |
| ۳۹۰×۸۴۴ | ۳۹۰×۹۹۲ | ۱۹۵ | qa/business-card/390.png |
| ۴۳۰×۹۳۲ | ۴۳۰×۹۹۲ | ۲۱۵ | qa/business-card/430.png |
| ۷۶۸×۱۰۲۴ | ۷۶۸×۱۰۲۴ | ۳۸۴ | qa/business-card/768.png |
| ۱۴۴۰×۱۰۰۰ | ۱۴۴۰×۱۰۰۰ | ۷۲۰ | qa/business-card/1440.png |

لوگو در همهٔ اندازه‌ها ۸۸px عرض با نسبت منبع و بارگذاری موفق؛ یک H1؛ همهٔ لینک‌ها حداقل ۴۴px ارتفاع. دو ردیف کارشناس ۸۴px؛ اعمال ۴۸px. در عرض ۳۲۰/۳۶۰، تلفن‌های ثابت زیر هم و از ۳۹۰ کنار هم قرار گرفتند. شواهد DOM در viewport-checks.json موجود است.

**محدودیت capture اصلاح‌شده:** `--full` در دو اندازه‌ای که سند هم‌ارتفاع viewport بود، تصویر را به راست جابه‌جا کرد، در حالی که bounds واقعی صفحه دقیقاً مرکزی بود. تصویر استاندارد viewport برای ۷۶۸ و ۱۴۴۰ گرفته، بازبینی و جایگزین شد؛ فایل‌های نهایی معتبر و مرکزی‌اند. این مسئله به ابزار capture مربوط بود؛ نقص رابط یا Next اثبات نشد.

در عرض ۳۲۰، font-size ریشه ۲۰۰٪ شد: سند ۳۲۰×۲۸۶۳، بدون اسکرول افقی یا برش؛ متن و شماره‌ها با جریان طبیعی چندسطر شدند. شاهد text-200.png مشاهده شد. این شبیه‌سازی تغییر اندازهٔ متن/ریشه است، نه اثبات همهٔ روش‌های zoom یا دستگاه‌های واقعی.

### تعامل، محتوا و دسترسی

اولین Tab به «تماس با کارشناسان» با outline solid می‌رسد. Enter هم hash را به #sales-title تغییر می‌دهد و هم فوکوس را به تیتر کارشناسان انتقال می‌دهد. lang=fa و dir=rtl؛ شماره‌ها bdi/ltr هستند. با reduced-motion تعداد animation فعال صفر است. console/errors در batch تعامل خالی بود. شواهد interaction-checks.txt.

چهار tel از DOM و HTML production با مقصد درست مقایسه شدند؛ هیچ تماس واقعی برقرار نشد. نقشه URL HTTPS معتبرِ جست‌وجوی نشانی با query متن کامل است؛ انتخاب نتیجه، صحت پین و تجربهٔ اپ نقشه بررسی نشده‌اند. هیچ فراز، دعوت‌نامه، غرفه، تاریخ یا شمارهٔ همراه منسوخ در HTML production نبود. noindex حفظ شد. metadata هویت جدید را دارد و پاسخ OG با فایل جدید SHA-256 یکسان داشت.

فایل /contacts.vcf با HTTP ۲۰۰، `text/vcard; charset=utf-8` و attachment دریافت شد. سه رکورد مجزا، چهار شماره با مالک درست، CRLF، UTF-8 سالم، حداکثر ۷۵ بایت در خط فیزیکی و نبود موبایل منسوخ بررسی شدند. شاهد contacts.vcf و vcard-check.json. صحت parsing روی گوشی واقعی هنوز ادعا نمی‌شود.

کنتراست از مقادیر CSS: muted/paper برابر ۵٫۲۰، muted/white برابر ۵٫۵۰، deep-red/paper برابر ۶٫۸۸، white/charcoal برابر ۱۴٫۸۵. رنگ اصلی لوگو تغییر نکرد. detector یک‌بار اجرا شد و `[]` داد؛ فقط شاهد مکانیکی است.

تصویر OG جدید ۱۲۰۰×۶۳۰ با لوگو و معرفی فعلی از HTML مستقل ساخته و بازبینی شد، نه از screenshot کل UI. اسکریپت قابل بازتولید `scripts/render-business-og.mjs`، HTML میانی `output/business-card/og.html`، font و logo محلی؛ نیازمند Node با اجرای native TypeScript (در این اجرا Node 25). پیش‌نمایش کوچک در ابزار تصویر دیده شد؛ unfurl عمومی بررسی نشده.

### مرور مستقل و اسناد

عامل مستقل finish_review، سورس، شش تصویر معتبر، تصویر OG، دادهٔ محتوا و شواهد vCard را بررسی کرد: **ship as working sample**؛ نقص مهمی برای اصلاح رابط گزارش نشد. DESIGN.md قدیمی در حین مرور اصلاح شد و نسخهٔ فعلی دوباره بررسی شد. این نتیجه تصویب نهایی کارفرما یا بررسی مستقل رفتار کیبورد/دستگاه واقعی نیست.

عامل document_design فایل DESIGN.md و `.impeccable/design.json` را از کد واقعی بازسازی کرد. JSON و ترتیب بخش‌ها بررسی شد؛ YAML جداگانه با PyYAML در محیط موقت uv با موفقیت parse شد. validator مهارت اختصاصی ابتدا به دلیل نبود PyYAML در Python میزبان اجرا نشد؛ اجرای مجدد در uv با PyYAML: «Skill is valid!». `node scripts/check-design-readiness.mjs`: وجود ۳۲ فایل و شکل frontmatter تأیید شد؛ این آزمون فقط ساختاری است. arrange هنوز در نصب موجود نیست؛ عبور همهٔ gateهای full redesign ادعا نمی‌شود.

پاس گزارش Next پیش از پاسخ نهایی انجام شد: candidate معنادارِ تأییدشده‌ای باقی نماند، بنابراین دستور ارسال feedback اجرا نشد. خطاهای کوتیشن ابزار مرورگر و وابستگی Python به‌عنوان مسائل محلی اصلاح شدند؛ به Next نسبت داده نشدند.

نتیجهٔ نهایی lint کامل: exit 0، صفر خطا و همان ۹۳ هشدار vendored موجود. `git diff --check` موفق؛ هیچ commit، push یا استقرار عمومی انجام نشد. سرور production محلی برای بررسی نمونه در http://localhost:3107 باقی است.

## 2026-11-15 — Distributed card interior

User direction overrides centered interior; see docs/card-justify.md. Production Chrome screenshots and measurements: docs/qa/justify/. Inspected 320, 390 and 1440 captures and 200% text top/bottom; 768 layout measured/captured. No horizontal overflow at 320/390/768/1440; logo and identity top-aligned at opposite ends. All original images decoded. At 200% root text the card grows and page scrolls; no fixed-height clipping. Full-page capture produced repeated viewport artifacts and was replaced by standard top/bottom captures. Four drawers open and dismiss with Escape; browser errors empty. This pass is implementation verification, not a fresh independent two-agent Impeccable critique or physical-device test.

TypeScript, lint and clean production build passed. Lint: 93 existing vendored-skill warnings, zero errors. Existing metadataBase warning remains; public URL not supplied. Next feedback reporting pass: no new qualifying issue; previously reported cache friction is not duplicated. Asset originals verified byte-for-byte against user ZIP; provenance manifest in docs/reference/horizontal-lockup-provenance.json.

## 2026-11-15 — Reduce unnecessary wrapping

Final production captures: docs/qa/wrap/; checks.json counts distinct rendered line positions (not bidi fragments). At 320/390/768/1440 every card-face text item occupies one line: company name, representation, showroom label and short address. At 320 the original font sizes remain unchanged; inline padding is 16px and heading gap 8px. Browser retained an old page during same-URL navigation; final fresh query navigation verified the current build/CSS. At 200% text, width remains 320 and card grows to 729px with no clipped content; natural wrapping intentionally remains available. Inspected final 320 and 390 output. TypeScript and production build passed; lint zero errors, 93 existing vendor warnings. Type detector returned no findings. No new Next.js feedback candidate; previously reported cache issue not duplicated. No physical-device or full formal critique claimed.

## 2026-11-15 — Restore simple centered card

Latest user preference rejects the distributed experiment. Restored complete original logo above centered company name and representation; removed the two-ended imprint and experimental face selectors. Colors, shadow, Peyda and drawer controls retained. Production screenshots/measurements in docs/qa/center-restored/: 320, 390 and 1440, zero horizontal overflow, no card clipping, images decoded, logo/title center offsets zero. Final 390 capture visually inspected. TypeScript and clean build passed; lint zero errors with 93 existing skill warnings. No new qualifying Next.js issue in reporting pass; no full independent critique or physical-device check claimed.

## 2026-11-15 — Border Beam

Reference research/decisions: docs/border-beam.md. Replaced lower 2px fixed red pseudo-element with a non-interactive, aria-hidden 1px masked perimeter overlay. CSS animation makes one 4.8-second pass; reduced motion has no animation. Final production Chrome evidence: docs/qa/border-beam/. At 320/390/1440: no horizontal overflow or clipped card content, computed mask exclusion and path progress valid, pointer-events none, iteration count 1, old ::after absent. Frozen timeline frames at 600/2400/3600/4800ms captured; final moving-edge frames visually inspected after removing erroneous overflow clipping. Reduced-motion emulation: display none and zero beam animations, static outline retained. Phone drawer opens and closes with Escape; browser errors empty. TypeScript, lint (0 errors/93 existing vendor warnings), production build and diff whitespace checks passed. No physical-device profiling, cross-engine verification or formal independent critique claimed. Next feedback reporting pass: no new qualifying issue; reference source-path 404 and corrected CSS clipping were ordinary research/implementation debugging, not framework defects.

Final Border Beam verification was repeated after a clean build and full browser reload (rather than query-only client navigation). Loaded stylesheet matched the current build; overlay overflow computed as visible, preventing the previous border clipping. Updated checks.json explicitly asserts this. Final 600ms screenshot shows the red segment on the top edge; 3600ms shows it on the left/lower corner. Source/typecheck and whitespace check passed after final changes.

## 2026-11-17 — Three actions

Evidence: docs/qa/three-actions/. Checked dev page at 320/390/1440: exactly three controls, no horizontal overflow, infinite computed beam iterations. All three drawers open and close with Escape. Contact drawer includes two tel links and visibly sample roles. Office contains supplied address and destination URL; store contains supplied address, Directions link and both landlines. Reduced-motion hides beam. Browser errors empty. Final mobile card and office screenshots inspected. TypeScript, lint (0 errors, 93 existing skill warnings), build and diff whitespace passed. No real Google geocoding/pin accuracy or physical-device routing verification claimed. Next feedback reporting pass: no new qualifying framework issue.

## 2026-11-17 — Luxury beam timing

Beam adjusted from 4.8s/100px to 12s/220px, preserving 1px width and reduced-motion rule. Final dev computed values confirmed; 390px frame visually inspected. TypeScript/build/diff checks passed; lint 0 errors, 93 existing warnings. Development server remains available on port 3000.

## 2026-11-17 — Decorative location patterns

Evidence: docs/qa/location-patterns/; sanitized-asset hashes/bytes in docs/maps-sanitization.json. Both originals were inspected as XML and rendered. Strict sanitizer preserved all geometry; 1000px Quick Look source/output comparisons pixel-identical. No script/link/image/foreignObject/external resources in outputs; style blocks and editor metadata removed. Office output 9921 bytes; store 18300 (inlining means this one is not smaller).

Final dev checks at 320/390/1440: three actions, no page overflow; each drawer opens and closes with Escape; correct phones, office address and address-based Directions destinations; reduced-motion hides beam. At 320 with 200% root text, dialog body clientWidth=scrollWidth=320, pattern loads and content scrolls. Final store/office and enlarged-text screenshots inspected. Store uses compact phone rows; header gap is 32px, artwork 128px. SVGs are decorative, not destination maps. No new exact pin or geocoding claim. Existing large-beam overflow repaired with clip-margin preserving its border paint.

TypeScript, production build, lint (zero errors, 93 existing skill warnings) and diff checks passed. No fresh independent formal design critique, physical-device test or public unfurl was performed. Next feedback reporting pass: no new qualifying issue; previously recorded cache behavior not re-submitted. Dev server remains on port 3000.

## 2026-11-17 — Three SVG border trails + exact map destinations

Evidence in docs/qa/beam-three/. Six fixed times 0/2/4/8/12/16s at 320/390/1440: page width equals viewport, 3 groups/9 trail strokes, duration16s, three distinct phase delays. 390px phase2s/8s inspected: curved borders match card, multiple visible red segments, no square/mask artifacts. Reduced-motion has zero trail animations. Drawer Escape works; office/store primary links resolve destination parameter to coordinates extracted from user URLs. Browser errors empty. Map redirects inspected over HTTP; real-device navigation/geocoding not independently checked. TypeScript and production build passed. Lint and whitespace outcomes recorded after final run; no independent critique or hardware profiling claimed.

## 2026-11-17 — Four Magic UI gradient beams

Evidence docs/qa/beam-four/: exactly4 gradient squares; relative phase differences25%; live offset progression observed over600ms; original rect/size-rounded path normalizes to inset in computed CSS; gradient is red/deep-red/transparent. At320/390/1440, page width equals viewport. Reduced motion hides lights. 390 screenshot inspected. TypeScript, build and whitespace passed; lint0errors/93existing warnings. No physical-device profiling or formal independent critique claimed. No new Next feedback candidate.

## 2026-11-17 — GHCR workflow

Infrastructure-only change; no UI behavior modified. Workflow validated with actionlint 1.7.12, no diagnostics. TypeScript and production build passed; lint passed with zero errors and 93 existing vendored-skill warnings. Existing metadataBase warning remains without SITE_URL. Docker daemon unavailable and repository has no remote: actual image build/run/push, registry access, cache hits and GitHub runtime/cost remain unverified. No new visual/keyboard/reduced-motion pass was needed for this change. Next feedback reporting pass: no new qualifying candidate; no submission command needed. See ci-ghcr.md for setup and tradeoffs.

## 2026-11-17 — Office lines and contact titles

Evidence docs/qa/office-phones/: four office tel links match +985137123212/13/14/15; actual full URI values recorded in checks.json. Contact titles match family-name-only request with existing surnames; given name absent. At320px/200% text, page and drawer body have no horizontal overflow; all4links remain in scrollable body. Office/contact screenshot captures use completed transitions and loaded fonts. TypeScript, production build and diff check passed; lint zero errors with93existing skill warnings. No new framework feedback candidate.

### اصلاح نهایی عنوان افراد
نام‌های دقیق «سرکار خانم آزما» و «جناب آقای مهندسی مهربان» با عنوان مشترک «کارشناس فروش» در DOM پنل واقعی بررسی شد؛ دیگر برچسب نمونه وجود ندارد. TypeScript و build موفق؛ lint صفر خطا و۹۳هشدار قبلی. این اصلاح متنی است؛ مرور تصویری/دستگاه فیزیکی مجدد انجام نشد. candidate جدید برای Next feedback وجود ندارد.

### عبارت جدید نمایندگی و چهار کارشناس
عبارت دقیق جدید در DOM کارت و تصویر OG/alt هماهنگ شد. چهار نام/عنوان/شماره در پنل واقعی بررسی و screenshot مشاهده شد؛ تماس‌های جدید +989150026400 و+989150297404 صحیح‌اند. تصویر1200x630 با فونت/لوگوی موجود بازتولید و مشاهده شد؛ unfurl عمومی تکرار نشد. خروجی static vCard پنج رکورد دارد (مجموعه+چهار کارشناس) و هر دو شماره جدید تأیید شدند. TypeScript و build و diff-check موفق؛ lint صفر خطا با۹۳هشدار قبلی. آزمون دستگاه واقعی انجام نشد.

## 2026-11-17 — Soft Achaemenid ornament

Original p11 downloaded from user URL and preserved in docs/reference. RGBA alpha0..20/255 verified; visible browser reference inspected. Native imagegen reconstructed transparent1095x1436 motif; delivery WebP163KB, no original-logo change. Provenance and SHA256 in docs/design/achaemenid-pattern.json. Native generation retained; conversion was delivery encoding only.

Evidence docs/qa/achaemenid-pattern/: image decodes;320/390/1440 page widths match viewport; pseudo-element fixed at RTL start/right, opacity0.045, pointer-events:none, z-index:-1 in isolated body; top mask fades. Final390/1440 screenshots inspected. Store Drawer opens and dismisses with Escape. No new motion; decoration hidden when printing. TypeScript, lint (0errors,93existing warnings), clean production build and whitespace checks passed. Final production CSS verified to reference existing WebP, not stale PNG. Known build-cache behavior worked around without duplicate Next feedback report; no new qualifying candidate. Physical device/public deployment not verified.


## 2026-11-18 — Correct engineer honorific

Corrected مهندسی to مهندس for Mehraban, Shariatzadeh and Ghadimi in both display and saved-contact names. TypeScript and production build passed; lint passed with 0 errors and 93 existing skill warnings. Production static output served locally: Chrome drawer DOM confirms all four exact names and unchanged tel destinations; 390px screenshot inspected with no horizontal overflow, Escape exercised. Generated contacts.vcf contains all three corrected names. No physical-device, full responsive/keyboard/reduced-motion regression or independent design review claimed for this copy-only change. Next feedback reporting pass: no new qualifying candidate; existing metadataBase warning remains.


## 2026-11-18 — Disabled catalog action
TypeScript, lint (0 errors,93 existing warnings), production build and final whitespace checks passed. Chrome dev evidence: docs/qa/catalog-actions/;4actions at320/390/768/1440 without overflow; disabled native catalog has nohref and click cannot navigate/open a panel; Tab skips it to office. All3existing drawers open and close with Escape; exact phone/map destinations recorded. At320/root200%, one grid column and no horizontal overflow. Reduced-motion hides beams; runtime errors empty. Final320/390/1440/text200 images inspected. Independent agent reviewed screenshots/source, no actionable defect; interactions were not independently repeated. No real-device/cross-engine/screen-reader/live-catalog claim. Existing metadataBase warning remains. Next feedback reporting pass: no new qualifying candidate.
