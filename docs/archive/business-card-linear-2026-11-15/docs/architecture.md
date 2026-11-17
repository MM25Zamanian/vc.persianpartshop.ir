# معماری کارت ویزیت

Next.js 16.4.6، React 19.3، TypeScript strict، CSS tokens و pnpm موجود حفظ می‌شوند؛ وابستگی تازه‌ای اضافه نمی‌شود. راهنماهای نصب‌شدهٔ Next دربارهٔ pages/layouts، Image، metadata و Route Handlers پیش از کدنویسی خوانده شدند.

| مسیر | مسئولیت |
|---|---|
| `config/business.ts` | هویت، نشانی، دو خط ثابت، دو کارشناس و تولید مقصد نقشه از دادهٔ مشترک |
| `app/page.tsx` | Server Component و اجزای کوچک هویت، نشانی و تماس‌ها |
| `app/globals.css` | توکن‌ها، محور مرکزی، اندازه‌ها، فوکوس و تطبیق عرض |
| `app/layout.tsx` | زبان/جهت، فونت محلی، metadata از دادهٔ کسب‌وکار |
| `lib/vcard.ts` | serialize سه مخاطب با escaping و folding بایت UTF-8 |
| `app/contacts.vcf/route.ts` | GET ثابت برای دانلود مخاطبان از همان داده، بدون اطلاعات درخواست یا DB |
| `app/opengraph-image.png` | تصویر اشتراک‌گذاری جدید؛ `alt.txt` متن جایگزین |

با `cacheComponents: true` فعلی، Route Handler بدون دادهٔ runtime خودکار prerender می‌شود؛ `dynamic = force-static` که در این حالت پشتیبانی نمی‌شود اضافه نمی‌کنیم. فایل مخاطب صرفاً export دادهٔ عمومی است؛ هیچ endpoint نوشتن یا جمع‌آوری اطلاعات ندارد.

`config/event.ts` و component قدیمی blur به‌عنوان سابقهٔ کار موجود حفظ می‌شوند ولی هیچ import فعال ندارند. نسخهٔ قبل از تغییر در `docs/archive/invitation-2026-11-15` نیز موجود است. اسناد بایگانی و اسکریپت‌های آن در build اپ مشارکت ندارند.

شمارهٔ نمایشی با ارقام فارسی، URI با E.164. vCard 3.0 با UTF-8 و CRLF، سه رکورد مجزا، folding حداکثر ۷۵ بایت، نام شخص/عنوان فروش و سازمان مشترک؛ شماره‌های اشخاص با تلفن سازمان مخلوط نمی‌شوند. فایل دانلودی را OS ممکن است برای import باز کند. نام فایل لاتین پایدار است.

`noindex` تا انتشار حفظ می‌شود. `SITE_URL` فقط با مبدأ عمومی تأییدشده تنظیم شود؛ canonical و URL عمومی حدس زده نمی‌شوند. metadata بدون SITE_URL ممکن است هشدار localhost بدهد؛ این به معنای انتشار درست نیست. تصویر OG از دادهٔ فعلی و لوگوی اصلی ساخته می‌شود، نه screenshot کل رابط.
