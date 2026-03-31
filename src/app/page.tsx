import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Trinity Painting & Renewal | Faith-Focused Painting in Minnesota",
  description: "Expert interior, exterior, and cabinet painting in Mora, Cambridge & East Central MN. God-honoring craftsmanship and premium finishes for your home.",
  keywords: ["Painting Contractors Mora MN", "House Painters Cambridge MN", "Cabinet Refinishing Minnesota", "Interior Painting MN", "Exterior Painting MN", "Trinity Painting"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Trinity Painting & Renewal | Faith-Focused Painting",
    description: "God-honoring craftsmanship for your home. Expert painting services in East Central Minnesota.",
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
  return <HomeClient />;
}
