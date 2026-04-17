import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Andover",
    county: "Anoka County",
    slug: "andover-mn",
    badge: "Serving Andover & Anoka County",
    heroDescription: "Trusted by homeowners across northwest metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Andover, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Andover is a thriving residential suburb featuring large single-family homes.",
    nearbyInAbout: "Anoka, Ramsey, and Coon Rapids",
    homesBuilt: "1980s–2000s",
    nearbyInServiceArea: "Anoka, Ramsey, and Coon Rapids",
    metroArea: "northwest metro Minneapolis",
    coordinates: { lat: "45.2611", lng: "-93.3340" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Andover, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Andover, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/andover-mn",
    },
    openGraph: {
        title: "Painting Contractor in Andover, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Andover, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/andover-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function AndoverPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/andover-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.2611",
            "longitude": "-93.3340"
        },
        "areaServed": ["Andover", "Anoka County", "northwest metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
