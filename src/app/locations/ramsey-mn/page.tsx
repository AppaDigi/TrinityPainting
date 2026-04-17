import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Ramsey",
    county: "Anoka County",
    slug: "ramsey-mn",
    badge: "Serving Ramsey & Anoka County",
    heroDescription: "Trusted by homeowners across northwest metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Ramsey, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Ramsey is a growing riverfront community with a mix of classic and contemporary homes.",
    nearbyInAbout: "Andover, Anoka, and St. Francis",
    homesBuilt: "1970s–2000s",
    nearbyInServiceArea: "Andover, Anoka, and St. Francis",
    metroArea: "northwest metro Minneapolis",
    coordinates: { lat: "45.2568", lng: "-93.4502" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Ramsey, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Ramsey, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/ramsey-mn",
    },
    openGraph: {
        title: "Painting Contractor in Ramsey, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Ramsey, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/ramsey-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function RamseyPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/ramsey-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.2568",
            "longitude": "-93.4502"
        },
        "areaServed": ["Ramsey", "Anoka County", "northwest metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
