import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Coon Rapids",
    county: "Anoka County",
    slug: "coon-rapids-mn",
    badge: "Serving Coon Rapids & Anoka County",
    heroDescription: "Trusted by homeowners across north metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Coon Rapids, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Coon Rapids is one of Anoka County's largest cities with a dense residential base.",
    nearbyInAbout: "Blaine, Anoka, and Andover",
    homesBuilt: "1960s–1990s",
    nearbyInServiceArea: "Blaine, Anoka, and Andover",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.1236", lng: "-93.3069" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Coon Rapids, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Coon Rapids, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/coon-rapids-mn",
    },
    openGraph: {
        title: "Painting Contractor in Coon Rapids, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Coon Rapids, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/coon-rapids-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function CoonRapidsPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/coon-rapids-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.1236",
            "longitude": "-93.3069"
        },
        "areaServed": ["Coon Rapids", "Anoka County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
