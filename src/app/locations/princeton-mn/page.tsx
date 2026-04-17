import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Princeton",
    county: "Mille Lacs County",
    slug: "princeton-mn",
    badge: "Serving Princeton & Mille Lacs County",
    heroDescription: "Trusted by homeowners across north central Minnesota, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Princeton, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Princeton is the county seat of Mille Lacs County with a strong community character and a blend of established and newer neighborhoods.",
    nearbyInAbout: "Zimmerman, Cambridge, and Milaca",
    homesBuilt: "1970s–2000s",
    nearbyInServiceArea: "Zimmerman, Cambridge, and Milaca",
    metroArea: "north central Minnesota",
    coordinates: { lat: "45.5686", lng: "-93.5885" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Princeton, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Princeton, MN and Mille Lacs County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/princeton-mn",
    },
    openGraph: {
        title: "Painting Contractor in Princeton, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Princeton, MN and Mille Lacs County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/princeton-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function PrincetonPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/princeton-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.5686",
            "longitude": "-93.5885"
        },
        "areaServed": ["Princeton", "Mille Lacs County", "north central Minnesota"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
