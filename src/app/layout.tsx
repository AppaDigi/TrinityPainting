import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trinity Painting & Renewal | Faith-Focused Painting in Mora, MN",
  description: "God-honoring craftsmanship that transforms your house into a home. Serving East Central Minnesota with integrity, quality, and excellence since [YEAR].",
  keywords: "painting, Mora MN, interior painting, exterior painting, cabinet refinishing, Trinity Painting, home renewal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
