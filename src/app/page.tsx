import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Trinity Painting & Renewal | Minneapolis & MN Painting Contractor",
  description: "Expert interior, exterior & cabinet painting serving Minneapolis, St. Paul and East Central MN. Faith-focused craftsmanship since 2018. Free estimates.",
  keywords: ["Painting Contractors Mora MN", "House Painters Cambridge MN", "Cabinet Refinishing Minnesota", "Interior Painting MN", "Exterior Painting MN", "Trinity Painting"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Trinity Painting & Renewal | Minneapolis Painting Contractor",
    description: "God-honoring craftsmanship for Minneapolis & Minnesota homeowners. Interior, exterior, cabinet & ceiling painting. Call for a free quote.",
    url: "https://trinitypaintingmn.com",
    siteName: "Trinity Painting & Renewal",
    images: [
      {
        url: "/editorial-home.jpeg",
        width: 1200,
        height: 630,
        alt: "Trinity Painting & Renewal Craftsmanship",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Trinity Painting & Renewal Services",
    "url": "https://www.trinitypaintingmn.com",
    "telephone": "763-225-2393",
    "priceRange": "$$",
    "openingHours": "Mo-Fr 07:00-18:00",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mora",
      "addressRegion": "MN",
      "addressCountry": "US"
    },
    "areaServed": [
      "Minneapolis",
      "St. Paul",
      "Blaine",
      "Coon Rapids",
      "Brooklyn Park",
      "Maple Grove",
      "Plymouth",
      "Eden Prairie",
      "Mora"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "11"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomeClient />
    </>
  );
}
