# معماری کارت ویزیت با Drawer

Next.js 16.4.6، React 19.3، TypeScript strict، pnpm و فونت محلی موجود حفظ می‌شوند. طبق درخواست کاربر، `@base-ui/react` نسخهٔ 1.9.0 به وابستگی‌ها اضافه شد؛ peer رسمی React 19 را پوشش می‌دهد. Drawer از زیرمسیر تایپ‌شدهٔ `@base-ui/react/drawer` import می‌شود. راهنمای نسخهٔ نصب‌شدهٔ Next برای Server/Client Components و راهنمای رسمی Base UI پیش از پیاده‌سازی خوانده شدند.

| فایل | مسئولیت |
|---|---|
| config/business.ts | حقیقت کسب‌وکار، اشخاص، چهار شماره و جست‌وجوی نشانی |
| app/page.tsx | Server Component؛ روی کارت، محتوای چهار دسته و fallback بدون JS |
| app/_contact-drawer.tsx | تنها پوستهٔ Client Component جدید؛ Trigger/Portal/Backdrop/Viewport/Popup/Title/Description/Content/Close رسمی Base UI |
| app/globals.css | توکن‌ها، کارت فیزیکی، پنل پایین، scroll و gesture و reduced-motion |
| app/layout.tsx | هویت، اعمال CSS variables فونت، زبان/جهت و metadata |
| lib/vcard.ts و app/contacts.vcf/route.ts | export ثابت سه مخاطب، مستقل از UI جدید |
| app/opengraph-image.png | پیش‌نمایش برند موجود؛ هنوز حقیقت کارت جدید را درست توصیف می‌کند |

هر دسته یک Root مستقل و uncontrolled دارد. کتابخانه modal focus trap، scroll lock، Escape، outside press و swipe down را مدیریت می‌کند. state موازی، event listener سراسری، Dialog دست‌ساز یا Drawer تو در تو نداریم. initialFocus به عنوان و finalFocus به trigger پیش‌فرض کتابخانه برمی‌گردد. Portal به body و جهت فارسی از html ارث می‌رسد. محتوای واقعی Server Component است و به پوستهٔ client از طریق children منتقل می‌شود.

Popup با header ثابت و بدنهٔ min-height:0 / overflow-y:auto، حداکثر ارتفاع viewport پویا و safe-area تعریف می‌شود. متغیر --drawer-swipe-movement-y و data-starting-style/data-ending-style/data-swiping به CSS رسمی gesture وصل‌اند. bleed پایین برای جلوگیری از شکاف هنگام gesture؛ duration در reduced-motion صفر می‌شود. به درخواست جدید کاربر، تنها انیمیشن خودکار کارت Border Beam محدود به یک دور ۴٫۸ ثانیه‌ای است؛ docs/border-beam.md.

صفحه در build همچنان prerender می‌شود؛ تعامل پنل‌ها پس از hydration فعال است. وقتی JS غیرفعال باشد، noscript اطلاعات و links native را نمایش می‌دهد. هیچ DB، endpoint جمع‌آوری داده، پیام‌رسان تأییدنشده یا مختصات ساختگی اضافه نشده است. vCard و noindex همان رفتار قبل را دارند؛ SITE_URL پیش از انتشار لازم است.

کامپوننت ProgressiveBlur، config/event.ts، دارایی‌های runtime طرح‌های منسوخ و وابستگی lucide-react پس از بررسی import/URL حذف شدند؛ فهرست دقیق در docs/cleanup-manifest.json است. فقط لوگوی اصلی PNG در public/assets باقی است. Next metadata files و اسناد/شواهد اصلی حفظ شده‌اند.

نسخهٔ خطی قبل از این تغییر در docs/archive/business-card-linear-2026-11-15 نگهداری می‌شود. نسخهٔ دعوت‌نامه نیز بایگانی مستقل دارد؛ کدهای .ts/.tsx بایگانی با پسوند txt از کامپایل کنار گذاشته شده‌اند.

## نصب Peyda
`app/fonts` چهار فایل WOFF2 ثابتِ اصلی و بدون تبدیل را نگه می‌دارد؛ manifest نسخه/حجم/SHA256 کنارشان است. `app/_fonts.ts` دو loader استاتیک next/font/local را یک‌بار تعریف می‌کند: خانوادهٔ اصلی۴۰۰/۶۰۰/۸۰۰ باpreload=true؛ خانوادهٔ عنوان۷۰۰ باpreload=false. root layout هر دو variable را رویhtml اعمال می‌کند تا Portal هم فونت را بگیرد. body از --font-peyda و عنوانDrawer/noscript از --font-peyda-bold استفاده می‌کنند. نمایشswap، fallback خودکارArial با متریک تنظیم‌شده و font-synthesis:none. فایل‌ها درpublic تکرار نمی‌شوند و preload دستی یا درخواست به سرویس فونت خارجی وجود ندارد.

اسکریپت OG از همان فایل‌های محلی۴۰۰/۸۰۰ استفاده می‌کند و بستهٔ @fontsource-variable/vazirmatn حذف شد. مبنای نصب، راهنمای فونت در node_modules/next/dist/docs نسخه16.4.6 است. مستندات صریحاً preload را برای همهٔ فایل‌های یک گروه مشترک می‌دانند؛ جداسازی۷۰۰ از preload بی‌دلیل آن جلوگیری می‌کند. جزئیات نتایج در peyda-installation.md است.


app/_border-beam.tsx: Server Component تزئینی با CSS motion-path و mask؛ بدون وابستگی/Client Component جدید. خط ثابت قبلی حذف شده است.


## تصمیم فعال ۲۰۲۶-۱۱-۱۷ — سه دکمه و حرکت پیوسته
Border Beam بنا بر اصلاح صریح کاربر بی‌نهایت و خطی است؛ در reduced-motion خاموش می‌شود. ترتیب RTL دکمه‌ها: ارتباط با ما، دفتر مرکزی، فروشگاه مرکزی. ارتباط با ما دو شمارهٔ واقعی کارشناسان را با سمت‌های نمونهٔ مشخص‌شده نشان می‌دهد. دفتر: چهارراه ابوطالب، پاساژ جام‌جم، طبقه ۵، واحد ۵۰۱. فروشگاه: نشانی قبلی توس و دو خط ثابت تأییدشده. هر مکان لینک Directions با destination نشانی دارد؛ پین یا مختصات تأییدشده ادعا نمی‌شود. راهنمای رسمی: https://developers.google.com/maps/documentation/urls/get-started . دکمهٔ ذخیره از صفحه حذف شد؛ endpoint موجود vCard حفظ و سمت نمونه به آن منتقل نشد. این تصمیم قواعد قدیمی چهار دکمه و یک دور انیمیشن را supersede می‌کند.


## خروجی استاتیک و کانتینر — ۲۰۲۶-۱۱-۱۷

`output: export` فایل‌های `out/` را تولید می‌کند و image optimization داخلی خاموش است. route مخاطبان با `force-static` هنگام build تولید می‌شود؛ برای سازگاری با این route، Cache Components و partial prefetching خاموش شدند. هدرهای Response در خروجی فایل منتقل نمی‌شوند؛ template اختصاصی NGINX نوع `text/vcard`، charset و نام دانلود را تنظیم می‌کند و محدودیت متدهای لایهٔ پایه را حفظ می‌کند. `SITE_URL` مقدار زمان build است، نه runtime. `next start` حذف شد.

Dockerfile با pnpm قفل‌شده و frozen lockfile می‌سازد و تنها `out/` را در `/data` تصویر `ghcr.io/gecut/nginx/cdn:2.0.0` قرار می‌دهد. فایل‌ها و HTML با سیاست ۳۰۰ ثانیه، service worker با `no-cache` و خطاها با `no-store` پیش‌بینی شده‌اند؛ فشرده‌سازی خاموش است. هیچ fallback مسیر SPA، TLS یا cache/purge لبه ارائه نمی‌شود.

نتیجه: build و TypeScript موفق؛ lint با صفر خطا و ۹۳ هشدار موجود در فایل‌های مهارت vendored موفق؛ verifier مهارت Dockerfile موفق. Docker daemon در دسترس نبود؛ build تصویر، entrypoint، صحت header/vCard روی HTTP، cache/ETag، health، مرورگر و دستگاه واقعی در این تغییر بررسی نشدند. `SITE_URL` در build محلی تنظیم نبود و هشدار metadataBase باقی ماند. فرمان `npx skills use` موجود نبود؛ مهارت از checkout موقت مخزن خوانده شد.


## پترن مکان‌ها — اجرای ۲۰۲۶-۱۱-۱۷
هر مکان تصویر تزئینیِ اختصاصی خود را از public/assets/maps دارد؛ هندسهٔ SVGهای پاک‌سازی‌شده در رندر با اصل برابر است. پترن ۱۲۸ پیکسلی به بالای Drawer متصل است، برش می‌خورد و با mask تدریجی در سطح سفید محو می‌شود. عنوان و بستن روی سطح خوانا باقی‌اند؛ نام بازرگانی تکرار نمی‌شود. نشانی با فاصلهٔ ۱۶ پیکسلی به مسیریابی متصل است. دفتر فقط اطلاعات مراجعه و اقدام مسیر دارد؛ فروشگاه دو ردیف تلفن کوتاه برای هماهنگی مراجعه نیز دارد. انتساب کوچک OSM دلیل حفظ منبع داده است. تصویر به‌عنوان نقشهٔ مقصد معرفی نمی‌شود؛ پین اضافه نشده است.


## آخرین اصلاح Border Beam و مقصدها
افکت فعلی: سه دنبالهٔ SVG با فاصلهٔ مساوی، دور ۱۶ ثانیه، خط ۱٫۲۵ پیکسل؛ مربع متحرک/ماسک قبلی حذف شد. مشخصات مرجع فعال docs/border-beam.md است و مقادیر تاریخی را supersede می‌کند. مقصدهای دفتر و فروشگاه از لینک‌های دقیق کاربر استخراج شدند؛ docs/location-destinations.md.


## اصلاح نهایی افکت — چهار پرتو Magic UI
طبق اصلاح صریح کاربر، SVG سه‌پرتویی رد شد. چهار مربع گرادیانی واقعی، Motion، مسیر و ماسک لبه جایگزین آن شدند؛ دور۱۶ثانیه و فازهای۰/۲۵/۵۰/۷۵. مرجع فعال docs/border-beam.md است.

## انتشار GHCR — ۲۰۲۶-۱۱-۱۷

یک job برای build/push روی main یا dispatch؛ کش لایه‌های BuildKit در GHA، بسته‌های pnpm قفل‌شده و خروجی static در runtime موجود. lint/build تنها داخل Docker اجرا می‌شوند و Next بررسی TypeScript را در build انجام می‌دهد. COPY صریح builder مانع باطل‌شدن کش Next بر اثر تغییر docs/CI/nginx است؛ nginx همچنان ورودی مستقل runtime است. نام تصویر از repository و `SITE_URL` از Actions Variables می‌آید. شرح رفتار، اعتبارسنجی و محدودیت عدم دسترسی به Docker daemon و remote در [ci-ghcr.md](ci-ghcr.md) است.


## ۲۰۲۶-۱۱-۱۸ — کاتالوگ
CatalogAction در app/page.tsx یک Server Component کوچک با تنظیمات business.catalog است: enabled:false به button disabled بدون href تبدیل می‌شود؛ enabled:true لینک مستقیم URL تأییدشده است. وابستگی، endpoint، Client Component یا state جدید ندارد. خروجی static است؛ فعال‌سازی بعدی نیازمند build مجدد است. سه Drawer موجود مستقل باقی‌اند.
