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
    faqs: [
        {
            q: "What does interior painting cost in Champlin, MN?",
            a: "Interior painting in Champlin typically runs $2 to $6 per square foot. A complete home repaint in Champlin usually costs between $3,500 and $8,000 depending on square footage, room count, ceiling height, and surface condition. We provide free, no-obligation written estimates for every Champlin homeowner.",
        },
        {
            q: "How long does exterior painting take on a Champlin home?",
            a: "Most exterior painting projects in Champlin take three to five days depending on the home's size, number of stories, siding type, and weather conditions. We never rush the prep stage — proper prep is what separates a paint job that lasts three years from one that lasts fifteen.",
        },
        {
            q: "Do you remove popcorn ceilings in Champlin, Minnesota?",
            a: "Yes — popcorn ceiling removal is one of our most in-demand services in Champlin and throughout Hennepin County. Homes built in the 1970s and 1980s frequently have original textured ceilings. We remove, skim-coat, prime, and paint for a smooth modern finish.",
        },
        {
            q: "Can you paint or refinish cabinets in a Champlin kitchen?",
            a: "Absolutely. Cabinet refinishing is a cost-effective way to transform a Champlin kitchen or bathroom without full replacement. We prep, prime, and spray a durable finish in any color — typically at 10–20% of the cost of new cabinets.",
        },
        {
            q: "What is the best exterior paint for Champlin's climate?",
            a: "For Champlin homes, we recommend high-solids exterior coatings from Sherwin-Williams or Benjamin Moore formulated for cold climates. Products like Sherwin-Williams Duration Exterior and Benjamin Moore Aura Exterior are engineered to withstand Minnesota freeze-thaw cycles and resist peeling and fading.",
        },
        {
            q: "Do you serve all of Champlin and Hennepin County?",
            a: "Yes — we serve all of Champlin and regularly work throughout the broader north metro Hennepin County area, including Coon Rapids, Brooklyn Park, and Anoka. Free on-site estimates available throughout the area.",
        },
    ],
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
