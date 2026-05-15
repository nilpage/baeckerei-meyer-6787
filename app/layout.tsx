import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bäckerei Meyer Hitzkirch",
  description:
    "Bäckerei, Konditorei und Café in Hitzkirch. Täglich frisch gebacken, seit Generationen. Bahnhofstrasse 7, 6285 Hitzkirch.",
  robots: "noindex,nofollow",
  openGraph: {
    title: "Bäckerei Meyer Hitzkirch",
    description: "Bäckerei, Konditorei und Café in Hitzkirch.",
    locale: "de_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-CH" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
