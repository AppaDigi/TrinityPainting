import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Elk River",
    county: "Sherburne County",
    slug: "elk-river-mn",
    badge: "Serving Elk River & Sherburne County",
    heroDescription: "Trusted by homeowners across northwest metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Elk River, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Elk River is the gateway to Sherburne County with a booming housing market.",
    nearbyInAbout: "Zimmerman, Otsego, and Big Lake",
    homesBuilt: "1980s–1990s",
    nearbyInServiceArea: "Zimmerman, Otsego, and Big Lake",
    metroArea: "northwest metro Minneapolis",
    coordinates: { lat: "45.3006", lng: "-93.5669" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Elk River, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Elk River, MN and Sherburne County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/elk-river-mn",
    },
    openGraph: {
        title: "Painting Contractor in Elk River, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Elk River, MN and Sherburne County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/elk-river-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function ElkRiverPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/elk-river-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.3006",
            "longitude": "-93.5669"
        },
        "areaServed": ["Elk River", "Sherburne County", "northwest metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
