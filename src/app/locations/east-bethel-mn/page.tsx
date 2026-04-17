import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "East Bethel",
    county: "Anoka County",
    slug: "east-bethel-mn",
    badge: "Serving East Bethel & Anoka County",
    heroDescription: "Trusted by homeowners across north metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in East Bethel, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "East Bethel is a spacious rural community north of Blaine with many large-lot homes and a quiet, suburban character.",
    nearbyInAbout: "Blaine, Ham Lake, and Anoka",
    homesBuilt: "1980s–2000s",
    nearbyInServiceArea: "Blaine, Ham Lake, and Anoka",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.3283", lng: "-93.2016" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in East Bethel, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving East Bethel, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/east-bethel-mn",
    },
    openGraph: {
        title: "Painting Contractor in East Bethel, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving East Bethel, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/east-bethel-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function EastBethelPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/east-bethel-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.3283",
            "longitude": "-93.2016"
        },
        "areaServed": ["East Bethel", "Anoka County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
