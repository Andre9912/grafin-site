import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ГрафинЪ — Рюмочная · Астрахань",
  description:
    "ГрафинЪ — современная премиальная рюмочная в Астрахани. Авторские настойки, душевная кухня и тёплая атмосфера.",
  openGraph: {
    title: "ГрафинЪ — Рюмочная · Астрахань",
    description: "Современная премиальная рюмочная в Астрахани.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-ink text-cream">{children}</body>
    </html>
  );
}
