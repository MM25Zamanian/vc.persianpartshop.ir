# کارت ویزیت آنلاین بازرگانی زمانیان

کارت افقی فارسی و RTL با چهار bottom drawer از Base UI برای نمایندگی انحصاری شرکت کاشی پرسپولیس یزد: نشانی نمایشگاه مرکزی، دو خط ثابت، تماس با دو کارشناس فروش و دانلود مخاطبان. بر پایهٔ Next.js App Router و @base-ui/react؛ بدون دیتابیس.

```bash
pnpm install
pnpm dev
```

منبع داده: `config/business.ts`. مسیر صفحه `/` و دانلود مخاطبان `/contacts.vcf`. مستندات کامل و منشأ محتوا: [docs/README.md](docs/README.md)، [تحلیل](docs/business-card-analysis.md)، [نتایج واقعی بررسی](docs/qa-checklist.md).

```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

ظاهر فعلی نمونهٔ اولیه است. پیش از انتشار `SITE_URL` باید مبدأ عمومی تأییدشده باشد؛ `noindex` نمونه حفظ شده و نقشه فقط جست‌وجوی نشانی است. پین دقیق و آزمون import مخاطبان در گوشی واقعی هنوز لازم‌اند. [بایگانی دعوت‌نامه](docs/archive/invitation-2026-11-15/README.md) قرارداد محصول فعال نیست.

[ایده و قرارداد Drawer](docs/business-card-drawers.md) · [بررسی این نسخه](docs/qa-drawers.md).

فونت فعلی [PeydaWeb محلی](docs/peyda-installation.md) است؛ تنها چهار وزن WOFF2 مصرفی با next/font/local بارگذاری می‌شوند.


## خروجی استاتیک و Docker

`pnpm build` خروجی مستقل را در `out/` می‌سازد؛ `next start` برای این حالت قابل استفاده نیست. برای تولید metadata عمومی، مبدأ تأییدشده را هنگام build تنظیم کنید.

```bash
docker build --build-arg SITE_URL=https://example.com -t zamanian-card .
docker run --rm -p 8080:80 zamanian-card
curl -i http://localhost:8080/server-info
curl -I http://localhost:8080/
curl -I http://localhost:8080/contacts.vcf
curl -I http://localhost:8080/missing.js
```

آدرس نمونه را با مبدأ واقعی جایگزین کنید. فایل‌ها با `ghcr.io/gecut/nginx/cdn:2.0.0` از `/data` سرو می‌شوند. HTML، فایل‌های معمول، تصاویر و JSON تا ۳۰۰ ثانیه cache می‌شوند؛ خطاها `no-store` و service workerها `no-cache` هستند. فشرده‌سازی خاموش است. تنظیم TLS و cache/purge لبهٔ CDN به زیرساخت انتشار مربوط است. آزمایش‌های اجرایی و محدودیت‌ها در [معماری](docs/architecture.md) ثبت شده‌اند.

## GitHub Actions و GHCR

[Workflow انتشار](.github/workflows/publish-image.yml) با push مرتبط روی `main` یا اجرای دستی، ایمیج `linux/amd64` را در `ghcr.io/<owner>/<repository>` با تگ‌های `latest` و `sha-<commit>` منتشر می‌کند. یک job، کش لایه‌های Docker، حذف اجرای صرفاً مستندات و لغو اجرای قدیمی، مصرف زمان را محدود می‌کنند. `SITE_URL` را در Actions Variables روی مبدأ عمومی تأییدشده تنظیم کنید؛ ورود GHCR از `GITHUB_TOKEN` خودکار استفاده می‌کند. [راهنمای تنظیم و نتایج واقعی](docs/ci-ghcr.md).

# vc.persianpartshop.ir
