import type { Metadata } from "next";

import "./globals.css";

// Scaffold-level metadata. Replace per lead in the bespoke layout (or
// override here once the design phase is done). Fonts are intentionally
// not loaded at the scaffold level — type pairings are a design choice
// the per-lead designer makes after the soul-read.

export const metadata: Metadata = {
  title: "sanity-scaffold",
  description: "Scaffold for nopage per-lead Sanity demos. Replace before deploy.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-CH">
      <body>{children}</body>
    </html>
  );
}
