import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Pine City",
    county: "Pine County",
    slug: "pine-city-mn",
    badge: "Serving Pine City & Pine County",
    heroDescription: "Trusted by homeowners across north central Minnesota, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Pine City, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Pine City is the county seat of Pine County with a close-knit community and a mix of older established homes and newer construction.",
    nearbyInAbout: "Mora, North Branch, and Hinckley",
    homesBuilt: "1960s–1990s",
    nearbyInServiceArea: "Mora, North Branch, and Hinckley",
    metroArea: "north central Minnesota",
    coordinates: { lat: "45.8264", lng: "-92.9685" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Pine City, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Pine City, MN and Pine County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/pine-city-mn",
    },
    openGraph: {
        title: "Painting Contractor in Pine City, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Pine City, MN and Pine County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/pine-city-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function PineCityPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/pine-city-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.8264",
            "longitude": "-92.9685"
        },
        "areaServed": ["Pine City", "Pine County", "north central Minnesota"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
