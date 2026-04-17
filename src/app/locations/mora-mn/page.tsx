import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Mora",
    county: "Kanabec County",
    slug: "mora-mn",
    badge: "Serving Mora & Kanabec County",
    heroDescription: "Trusted by homeowners across north central Minnesota, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Mora, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Mora is the county seat of Kanabec County with a strong local identity and a mix of older established homes and newer construction.",
    nearbyInAbout: "Pine City, Cambridge, and Milaca",
    homesBuilt: "1950s–1990s",
    nearbyInServiceArea: "Pine City, Cambridge, and Milaca",
    metroArea: "north central Minnesota",
    coordinates: { lat: "45.8783", lng: "-93.3024" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Mora, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Mora, MN and Kanabec County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/mora-mn",
    },
    openGraph: {
        title: "Painting Contractor in Mora, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Mora, MN and Kanabec County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/mora-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function MoraPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/mora-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.8783",
            "longitude": "-93.3024"
        },
        "areaServed": ["Mora", "Kanabec County", "north central Minnesota"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
