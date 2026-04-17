import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Champlin",
    county: "Hennepin County",
    slug: "champlin-mn",
    badge: "Serving Champlin & Hennepin County",
    heroDescription: "Trusted by homeowners across north metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Champlin, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Champlin is a river-hugging suburb with quick access to I-694 and a well-established residential community.",
    nearbyInAbout: "Coon Rapids, Brooklyn Park, and Anoka",
    homesBuilt: "1970s–1990s",
    nearbyInServiceArea: "Coon Rapids, Brooklyn Park, and Anoka",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.1761", lng: "-93.3884" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in Champlin, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Champlin, MN and Hennepin County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/champlin-mn",
    },
    openGraph: {
        title: "Painting Contractor in Champlin, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Champlin, MN and Hennepin County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/champlin-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function ChamplinPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/champlin-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.1761",
            "longitude": "-93.3884"
        },
        "areaServed": ["Champlin", "Hennepin County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
