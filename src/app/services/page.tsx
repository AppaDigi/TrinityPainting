import type { Metadata } from "next";
import ServicesHubPageClient from "./ServicesHubPageClient";

export const metadata: Metadata = {
    title: "Painting Services | Trinity Painting & Renewal",
    description: "Explore Trinity Painting & Renewal's interior, exterior, and cabinet painting services across Minneapolis, the Twin Cities, and East Central Minnesota.",
    alternates: {
        canonical: "/services",
    },
    openGraph: {
        title: "Painting Services | Trinity Painting & Renewal",
        description: "Interior, exterior, and cabinet painting delivered with faith-focused craftsmanship across Minneapolis and East Central Minnesota.",
        url: "https://www.trinitypaintingmn.com/services",
        images: ["/editorial-home.jpeg"],
    },
};

export default function ServicesPage() {
    return <ServicesHubPageClient />;
}
