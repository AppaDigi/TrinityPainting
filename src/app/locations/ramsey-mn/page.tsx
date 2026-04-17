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
    faqs: [
        {
            q: "What does it cost to paint the interior of a home in Ramsey, MN?",
            a: "Interior painting in Ramsey generally ranges from $2 to $6 per square foot. A typical Ramsey home repaint runs $3,500 to $7,500 depending on square footage, number of rooms, surface condition, and paint quality. We provide detailed, written, no-pressure estimates for every Ramsey project.",
        },
        {
            q: "How much does popcorn ceiling removal cost in Ramsey, Minnesota?",
            a: "Popcorn ceiling removal in Ramsey typically costs $1.50 to $4 per square foot depending on ceiling height, total area, and whether asbestos testing is required for pre-1980 homes. Most Ramsey homeowners see the entire project completed in one to three days, and the transformation is dramatic.",
        },
        {
            q: "Do you paint homes near the Rum River in Ramsey, MN?",
            a: "Yes — we regularly serve homes throughout the Rum River corridor and all Ramsey neighborhoods. River-adjacent homes often face specific exterior challenges like moisture exposure and wood expansion, and we use appropriate primers and coatings to address those conditions.",
        },
        {
            q: "How long does interior painting take in a typical Ramsey home?",
            a: "Interior painting projects in Ramsey generally take two to four days for a full home repaint. Single rooms can often be completed in a single day. We work efficiently without rushing, ensuring proper dry times between coats for a lasting, professional result.",
        },
        {
            q: "Do you offer deck staining services in Ramsey, MN?",
            a: "Yes — we stain and seal decks, fences, and other exterior wood throughout Ramsey and Anoka County. Minnesota's freeze-thaw cycles are hard on untreated wood, and we use premium penetrating stains that protect from moisture, UV rays, and mold while enhancing the natural grain.",
        },
        {
            q: "Are you licensed and insured for painting work in Ramsey, Minnesota?",
            a: "Yes, fully. We hold a current Minnesota contractor's license and carry both general liability insurance and workers' compensation on every Ramsey project. We're happy to provide proof of coverage before any work begins — just ask.",
        },
    ],
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
