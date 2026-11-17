import { createContactCards } from "@/lib/vcard";

export const dynamic = "force-static";

export function GET() {
  return new Response(createContactCards(), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="zamanian-contacts.vcf"',
      "X-Content-Type-Options": "nosniff",
    },
  });
}
