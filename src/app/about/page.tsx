import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "Our Identity | Trinity Painting & Renewal | Faith & Integrity",
  description: "Rooted in Faith, Built on Integrity. Learn about Dustin Nyblom and the Trinity protocol for God-honoring craftsmanship in Minnesota.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Trinity Painting & Renewal | Faith & Integrity",
    description: "Learn about our commitment to biblical stewardship and professional painting excellence.",
    url: "https://trinitypaintingmn.com/about",
    images: ["/editorial-home.jpeg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
