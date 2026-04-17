import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Ham Lake",
    county: "Anoka County",
    slug: "ham-lake-mn",
    badge: "Serving Ham Lake & Anoka County",
    heroDescription: "Trusted by homeowners across north metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Ham Lake, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Ham Lake is a rural suburban community with generous lot sizes and a mix of newer construction and established homes.",
    nearbyInAbout: "Blaine, Andover, and East Bethel",
    homesBuilt: "1990s–2010s",
    nearbyInServiceArea: "Blaine, Andover, and East Bethel",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.2503", lng: "-93.2131" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Ham Lake, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Ham Lake, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/ham-lake-mn",
    },
    openGraph: {
        title: "Painting Contractor in Ham Lake, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Ham Lake, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/ham-lake-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function HamLakePage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/ham-lake-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.2503",
            "longitude": "-93.2131"
        },
        "areaServed": ["Ham Lake", "Anoka County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
