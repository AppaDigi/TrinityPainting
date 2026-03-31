import type { Metadata } from "next";
import PortfolioClient from "@/components/PortfolioClient";

export const metadata: Metadata = {
  title: "Completed Painting Projects | Trinity Painting & Renewal Portfolio",
  description: "Browse our dramatic before & after transformations. Interactive project map and project showcase for Minnesota residential and commercial painting.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
      title: "Completed Painting Projects Portfolio | Trinity Painting & Renewal",
      description: "Interactive project map and project showcase for Minnesota painting.",
      url: "https://trinitypaintingmn.com/portfolio",
      images: ["/editorial-home.jpeg"],
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
