import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "North Branch",
    county: "Chisago County",
    slug: "north-branch-mn",
    badge: "Serving North Branch & Chisago County",
    heroDescription: "Trusted by homeowners along the I-35 corridor, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in North Branch, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "North Branch is a growing community along the I-35 corridor with many newer developments and a strong sense of small-town community.",
    nearbyInAbout: "Chisago City, Forest Lake, and Cambridge",
    homesBuilt: "1990s–2010s",
    nearbyInServiceArea: "Chisago City, Forest Lake, and Cambridge",
    metroArea: "north metro Minneapolis and the I-35 corridor",
    coordinates: { lat: "45.5094", lng: "-92.9835" },
};

export const metadata: Metadata = {
    title: "Painting Contractor in North Branch, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving North Branch, MN and Chisago County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/north-branch-mn",
    },
    openGraph: {
        title: "Painting Contractor in North Branch, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving North Branch, MN and Chisago County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/north-branch-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function NorthBranchPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/north-branch-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.5094",
            "longitude": "-92.9835"
        },
        "areaServed": ["North Branch", "Chisago County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
