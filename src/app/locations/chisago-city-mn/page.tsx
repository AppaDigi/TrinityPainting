import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Chisago City",
    county: "Chisago County",
    slug: "chisago-city-mn",
    badge: "Serving Chisago City & Chisago County",
    heroDescription: "Trusted by homeowners across the Chisago Lakes area, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Chisago City, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Chisago City is a charming lake community in the heart of the Chisago Lakes area with many year-round homes and lake-adjacent properties.",
    nearbyInAbout: "Lindstrom, North Branch, and Forest Lake",
    homesBuilt: "1960s–2000s",
    nearbyInServiceArea: "Lindstrom, North Branch, and Forest Lake",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.3655", lng: "-92.8855" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Chisago City, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Chisago City, MN and Chisago County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/chisago-city-mn",
    },
    openGraph: {
        title: "Painting Contractor in Chisago City, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Chisago City, MN and Chisago County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/chisago-city-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function ChisagoCityPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/chisago-city-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.3655",
            "longitude": "-92.8855"
        },
        "areaServed": ["Chisago City", "Chisago County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
