import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Zimmerman",
    county: "Sherburne County",
    slug: "zimmerman-mn",
    badge: "Serving Zimmerman & Sherburne County",
    heroDescription: "Trusted by homeowners across northwest metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Zimmerman, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Zimmerman is a growing community midway between the Twin Cities and St. Cloud with many newer single-family neighborhoods.",
    nearbyInAbout: "Elk River, Princeton, and St. Francis",
    homesBuilt: "1990s–2010s",
    nearbyInServiceArea: "Elk River, Princeton, and St. Francis",
    metroArea: "northwest metro Minneapolis",
    coordinates: { lat: "45.4444", lng: "-93.5913" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Zimmerman, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Zimmerman, MN and Sherburne County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/zimmerman-mn",
    },
    openGraph: {
        title: "Painting Contractor in Zimmerman, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Zimmerman, MN and Sherburne County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/zimmerman-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function ZimmermanPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/zimmerman-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.4444",
            "longitude": "-93.5913"
        },
        "areaServed": ["Zimmerman", "Sherburne County", "northwest metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
