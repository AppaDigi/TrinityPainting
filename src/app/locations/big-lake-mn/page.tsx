import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Big Lake",
    county: "Sherburne County",
    slug: "big-lake-mn",
    badge: "Serving Big Lake & Sherburne County",
    heroDescription: "Trusted by homeowners across northwest metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Big Lake, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Big Lake is a charming lakeside community in Sherburne County with easy I-94 access and a mix of established and newer homes.",
    nearbyInAbout: "Elk River, Monticello, and Zimmerman",
    homesBuilt: "1980s–2000s",
    nearbyInServiceArea: "Elk River, Monticello, and Zimmerman",
    metroArea: "northwest metro Minneapolis",
    coordinates: { lat: "45.3308", lng: "-93.7384" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Big Lake, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Big Lake, MN and Sherburne County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/big-lake-mn",
    },
    openGraph: {
        title: "Painting Contractor in Big Lake, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Big Lake, MN and Sherburne County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/big-lake-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function BigLakePage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/big-lake-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.3308",
            "longitude": "-93.7384"
        },
        "areaServed": ["Big Lake", "Sherburne County", "northwest metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
