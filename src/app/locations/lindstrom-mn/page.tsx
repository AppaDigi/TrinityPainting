import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Lindstrom",
    county: "Chisago County",
    slug: "lindstrom-mn",
    badge: "Serving Lindstrom & Chisago County",
    heroDescription: "Trusted by homeowners across the Chisago Lakes area, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Lindstrom, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Lindstrom is the heart of the Chisago Lakes area, known for its Scandinavian heritage and beautiful lake-area homes with unique character.",
    nearbyInAbout: "Chisago City, North Branch, and Forest Lake",
    homesBuilt: "1970s–2000s",
    nearbyInServiceArea: "Chisago City, North Branch, and Forest Lake",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.3830", lng: "-92.8436" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Lindstrom, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Lindstrom, MN and Chisago County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/lindstrom-mn",
    },
    openGraph: {
        title: "Painting Contractor in Lindstrom, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Lindstrom, MN and Chisago County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/lindstrom-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function LindstromPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/lindstrom-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.3830",
            "longitude": "-92.8436"
        },
        "areaServed": ["Lindstrom", "Chisago County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
