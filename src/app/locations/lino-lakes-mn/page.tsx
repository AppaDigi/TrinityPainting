import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Lino Lakes",
    county: "Anoka County",
    slug: "lino-lakes-mn",
    badge: "Serving Lino Lakes & Anoka County",
    heroDescription: "Trusted by homeowners across north metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Lino Lakes, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Lino Lakes is a quiet, lake-dotted suburb with many custom homes.",
    nearbyInAbout: "Blaine, Forest Lake, and Hugo",
    homesBuilt: "1980s–1990s",
    nearbyInServiceArea: "Blaine, Forest Lake, and Hugo",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.1491", lng: "-93.0923" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Lino Lakes, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Lino Lakes, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/lino-lakes-mn",
    },
    openGraph: {
        title: "Painting Contractor in Lino Lakes, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Lino Lakes, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/lino-lakes-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function LinoLakesPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/lino-lakes-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.1491",
            "longitude": "-93.0923"
        },
        "areaServed": ["Lino Lakes", "Anoka County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
