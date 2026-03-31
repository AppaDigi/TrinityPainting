
import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

import { LocalBusinessSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  metadataBase: new URL("https://trinitypaintingmn.com"),
  title: "Trinity Painting & Renewal",
  description: "Faith-Focused Painting & Renewal. Serving East Central Minnesota with excellence since 2018.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
      siteName: "Trinity Painting & Renewal",
      locale: "en_US",
      type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${outfit.variable} antialiased`}
      >
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
