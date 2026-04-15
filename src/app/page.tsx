import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import { LocalBusinessSchema } from "@/components/SchemaMarkup";

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
    url: "https://www.trinitypaintingmn.com",
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
  return (
    <>
      <LocalBusinessSchema />
      <HomeClient />
    </>
  );
}
