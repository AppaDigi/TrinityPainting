import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Anoka",
    county: "Anoka County",
    slug: "anoka-mn",
    badge: "Serving Anoka & Anoka County",
    heroDescription: "Trusted by homeowners across north metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Anoka, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Anoka is the county seat of Anoka County with a historic downtown and a diverse housing stock ranging from turn-of-the-century Victorians to modern builds.",
    nearbyInAbout: "Champlin, Coon Rapids, and Andover",
    homesBuilt: "1950s–2000s",
    nearbyInServiceArea: "Champlin, Coon Rapids, and Andover",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.1977", lng: "-93.3869" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Anoka, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Anoka, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/anoka-mn",
    },
    openGraph: {
        title: "Painting Contractor in Anoka, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Anoka, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/anoka-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function AnokaPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/anoka-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.1977",
            "longitude": "-93.3869"
        },
        "areaServed": ["Anoka", "Anoka County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
