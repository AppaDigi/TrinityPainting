
import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
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
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-KETXRJD31C" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KETXRJD31C');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
