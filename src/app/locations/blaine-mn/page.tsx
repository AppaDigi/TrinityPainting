import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Blaine",
    county: "Anoka County",
    slug: "blaine-mn",
    badge: "Serving Blaine & Anoka County",
    heroDescription: "Trusted by homeowners across north metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Blaine, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Blaine is one of the fastest-growing suburbs north of Minneapolis with a mix of newer developments and established neighborhoods.",
    nearbyInAbout: "Coon Rapids, Andover, and Spring Lake Park",
    homesBuilt: "1980s–2000s",
    nearbyInServiceArea: "Coon Rapids, Andover, and Spring Lake Park",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.1608", lng: "-93.2350" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Blaine, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Blaine, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/blaine-mn",
    },
    openGraph: {
        title: "Painting Contractor in Blaine, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Blaine, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/blaine-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function BlainePage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/blaine-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.1608",
            "longitude": "-93.2350"
        },
        "areaServed": ["Blaine", "Anoka County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
