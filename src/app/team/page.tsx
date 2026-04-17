import type { Metadata } from "next";
import TeamClient from "@/components/TeamClient";

export const metadata: Metadata = {
  title: "Meet the Team | Trinity Painting & Renewal",
  description: "Meet the Trinity Crew: Men of Character providing God-honoring craftsmanship in Minnesota.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Meet the Team | Trinity Painting & Renewal",
    description: "Meet the Trinity Crew: Men of Character providing God-honoring craftsmanship in Minnesota.",
    url: "https://trinitypaintingmn.com/team",
    images: ["/team%20photos/Team%20Page%20Hero.png"],
  },
};

export default function TeamPage() {
  return <TeamClient />;
}
