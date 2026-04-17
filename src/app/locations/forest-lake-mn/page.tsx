import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Forest Lake",
    county: "Washington County",
    slug: "forest-lake-mn",
    badge: "Serving Forest Lake & Washington County",
    heroDescription: "Trusted by homeowners across the northeast metro Minneapolis area, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Forest Lake, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Forest Lake is a scenic lake community northeast of the Twin Cities with a mix of year-round and vacation-style homes.",
    nearbyInAbout: "Lino Lakes, Hugo, and White Bear Lake",
    homesBuilt: "1970s–2000s",
    nearbyInServiceArea: "Lino Lakes, Hugo, and White Bear Lake",
    metroArea: "northeast metro Minneapolis",
    coordinates: { lat: "45.2794", lng: "-92.9851" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Forest Lake, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Forest Lake, MN and Washington County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/forest-lake-mn",
    },
    openGraph: {
        title: "Painting Contractor in Forest Lake, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Forest Lake, MN and Washington County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/forest-lake-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function ForestLakePage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/forest-lake-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.2794",
            "longitude": "-92.9851"
        },
        "areaServed": ["Forest Lake", "Washington County", "northeast metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
