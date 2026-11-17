# ساخت و انتشار کم‌هزینه در GHCR

Workflow: `.github/workflows/publish-image.yml`، ایجادشده در ۲۰۲۶-۱۱-۱۷ بنا به درخواست کاربر. الگوهای محلی StoryFrame (`.github/workflows/deploy.yml`) و Persian Part Shop (`.github/workflows/pipeline.yml`) بررسی شدند؛ فقط قابلیت‌های لازم برای ساخت و انتشار این پروژه استفاده شدند.

## رفتار و کاهش زمان

- یک job روی Linux x64 با هدف `linux/amd64`، فقط push مرتبط روی `main` یا اجرای دستی روی main؛ انتخاب ref دیگر job را skip می‌کند. PR، tag، matrix، QEMU و job استقرار نداریم. برای سرور ARM باید platform و راهبرد runner/cache تغییر کنند.
- فیلتر `paths` تغییر صرفاً docs، README، مهارت‌ها و تصاویر QA را کنار می‌گذارد. اجرای جدید، اجرای قبلی همین workflow/ref را لغو می‌کند. سقف job پانزده دقیقه است.
- مقصد خودکار lowercase: `ghcr.io/<owner>/<repository>:latest` و `ghcr.io/<owner>/<repository>:sha-<full-commit-sha>`؛ دو تگ روی همان تصویر و تنها یک build.
- ورود با `GITHUB_TOKEN` خودکار و `packages: write`؛ PAT جدید لازم نیست. package از قبل موجود یا base image خصوصی ممکن است نیاز به اعطای دسترسی package به repository داشته باشد. visibility عمومی package تابع تنظیم GitHub است.
- کش لایه‌های BuildKit روی GitHub Actions API v2 با `mode=max`، شامل لایه‌های میانی نصب وابستگی‌ها. نصب pnpm تا تغییر manifest/lockfile/workspace یا base image از کش استفاده می‌کند؛ cache miss یا انقضای کش همچنان نصب مجدد ایجاد می‌کند. export ناموفق کش، build موفق را fail نمی‌کند.
- COPY صریح builder فقط app/config/lib/public و فایل‌های تنظیمات/پکیج را وارد می‌کند؛ تغییر nginx فقط لایهٔ runtime را عوض می‌کند. docs، مهارت‌ها، workflow و اسکریپت‌های تولید دارایی به builder کپی نمی‌شوند. `.dockerignore` context را هم کوچک‌تر می‌کند. خروجی فعلی اسکریپت‌های تولید دارایی در سورس نگهداری می‌شود.
- lint و `pnpm build` هرکدام یک بار داخل Docker؛ Next بررسی TypeScript را هنگام build انجام می‌دهد. نصب Node/pnpm روی میزبان و build تکراری وجود ندارد. upload رکورد Docker و تولید SBOM/provenance اضافی خاموش‌اند.

mount فروشگاه pnpm برای همان builder مفید است؛ این workflow آن mount یا `.next/cache` را بین runnerهای تازه ذخیره نمی‌کند. کش بین اجراها مربوط به **لایه‌های Docker** است؛ کمترین زمان مطلق یا شتاب کامپایل Next برای کد تغییرکرده ادعا نمی‌شود. زمان اجرای واقعی هنوز اندازه‌گیری نشده است.

با افزودن ورودی build جدید مانند پوشهٔ سورس، `.npmrc` یا patch، فهرست COPY، `.dockerignore` و فیلتر `paths` باید هماهنگ شوند.

## راه‌اندازی

۱. پروژه و تمام ورودی‌های build را در repository گیت‌هاب قرار دهید. در پایان این تغییر، مخزن محلی هنوز remote ندارد و commit/push انجام نشده است.
۲. در `Settings → Secrets and variables → Actions → Variables`، متغیر `SITE_URL` را روی مبدأ عمومی تأییدشده قرار دهید. این مقدار هنگام build در metadata استفاده می‌شود؛ خالی بودن آن build را متوقف نمی‌کند ولی هشدار metadataBase و fallback localhost باقی می‌ماند. تغییر variable به‌تنهایی event ایجاد نمی‌کند؛ پس از تغییر آن، Run workflow روی main لازم است.
۳. Actions و انتشار package باید طبق policy مخزن/سازمان مجاز باشند. اولین push مرتبط روی main یا Run workflow تصویر را منتشر می‌کند؛ سرویس میزبانی redeploy نمی‌شود.

## اعتبارسنجی واقعی

- `actionlint` نسخهٔ 1.7.12: موفق، بدون diagnostic.
- `pnpm exec tsc --noEmit`: موفق.
- `pnpm lint`: موفق، صفر خطا و همان ۹۳ هشدار موجود در مهارت‌های vendored؛ این فایل‌ها وارد Docker context نمی‌شوند.
- `pnpm build`: موفق، خروجی static صفحه، vCard و metadata؛ هشدار شناخته‌شدهٔ metadataBase در نبود `SITE_URL` باقی است.
- Docker daemon محلی در دسترس نیست؛ build/pull/run/push تصویر، دسترسی واقعی GHCR، cache hit و زمان/هزینهٔ GitHub Actions بررسی نشده‌اند.
- تغییر رابط نداریم؛ مرور تصویری، responsive، کیبورد و reduced motion در این تغییر تکرار نشدند. پاس بررسی feedback Next انجام شد؛ candidate جدید معناداری باقی نماند و فرمان ارسال لازم نشد.

مبنای تنظیمات: [کش رسمی Docker](https://docs.docker.com/build/ci/github-actions/cache/)، [انتشار GHCR](https://docs.github.com/en/actions/tutorials/publish-packages/publish-docker-images)، releaseهای رسمی [checkout](https://github.com/actions/checkout/releases/tag/v7.0.1)، [Buildx](https://github.com/docker/setup-buildx-action/releases/tag/v4.4.1)، [login](https://github.com/docker/login-action/releases/tag/v4.8.0) و [build/push](https://github.com/docker/build-push-action/releases/tag/v7.4.0). راهنمای deployment/static export از `node_modules/next/dist/docs/` نصب‌شده خوانده شد؛ تنظیمات Next تغییر نکردند.
