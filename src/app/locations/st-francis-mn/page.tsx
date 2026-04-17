import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "St. Francis",
    county: "Anoka County",
    slug: "st-francis-mn",
    badge: "Serving St. Francis & Anoka County",
    heroDescription: "Trusted by homeowners across northwest metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in St. Francis, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "St. Francis is a fast-growing community along the Rum River corridor north of Ramsey with many newer developments and a strong local identity.",
    nearbyInAbout: "Ramsey, Elk River, and Zimmerman",
    homesBuilt: "1990s–2010s",
    nearbyInServiceArea: "Ramsey, Elk River, and Zimmerman",
    metroArea: "northwest metro Minneapolis",
    coordinates: { lat: "45.3791", lng: "-93.3959" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in St. Francis, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving St. Francis, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/st-francis-mn",
    },
    openGraph: {
        title: "Painting Contractor in St. Francis, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving St. Francis, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/st-francis-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function StFrancisPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/st-francis-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.3791",
            "longitude": "-93.3959"
        },
        "areaServed": ["St. Francis", "Anoka County", "northwest metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
