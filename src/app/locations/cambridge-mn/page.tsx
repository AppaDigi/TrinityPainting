import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Cambridge",
    county: "Isanti County",
    slug: "cambridge-mn",
    badge: "Serving Cambridge & Isanti County",
    heroDescription: "Trusted by homeowners across north central Minnesota, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Cambridge, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Cambridge is the county seat of Isanti County with a blend of established neighborhoods and newer developments along the Rum River corridor.",
    nearbyInAbout: "Isanti, North Branch, and Princeton",
    homesBuilt: "1970s–2000s",
    nearbyInServiceArea: "Isanti, North Branch, and Princeton",
    metroArea: "north central Minnesota",
    coordinates: { lat: "45.5719", lng: "-93.2244" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Cambridge, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Cambridge, MN and Isanti County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/cambridge-mn",
    },
    openGraph: {
        title: "Painting Contractor in Cambridge, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Cambridge, MN and Isanti County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/cambridge-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function CambridgePage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/cambridge-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.5719",
            "longitude": "-93.2244"
        },
        "areaServed": ["Cambridge", "Isanti County", "north central Minnesota"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
