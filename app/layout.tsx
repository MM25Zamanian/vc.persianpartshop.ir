import type { Metadata } from "next";
import { peyda, peydaBold } from "./_fonts";
import { business, businessDescription } from "@/config/business";
import "./globals.css";

const title = `${business.name} | کارت ویزیت آنلاین`;
const description = businessDescription;

export const metadata: Metadata = {
  metadataBase: process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined,
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: { title, description, locale: "fa_IR", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={`${peyda.variable} ${peydaBold.variable}`}>
      <body>{children}</body>
    </html>
  );
}
