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
    faqs: [
        {
            q: "What does interior painting cost in Mora, MN?",
            a: "Interior painting in Mora typically ranges from $2 to $6 per square foot. For established Mora homes with older walls and ceilings, surface prep is often more involved — filling cracks, repairing plaster, sealing water stains. We price every project individually and include all prep in our written estimates.",
        },
        {
            q: "How much does it cost to paint the exterior of a home in Mora, Minnesota?",
            a: "Exterior painting in Mora typically runs $3,000 to $9,000 for a standard single-family home depending on siding type, square footage, number of stories, and surface condition. We include pressure washing, scraping, caulking, and priming in every exterior estimate for Mora homeowners.",
        },
        {
            q: "Do Mora homes have popcorn ceilings that need to be removed?",
            a: "Yes — many Mora homes built from the 1950s through the 1980s have original popcorn or acoustic ceiling texture. These older textures may contain asbestos in pre-1978 homes, so testing is essential before any removal begins. We remove, skim-coat, prime, and paint for a completely updated look.",
        },
        {
            q: "Do you serve rural properties near Mora and Kanabec County?",
            a: "Yes — we serve in-town Mora properties as well as rural homes, farmsteads, and acreage properties throughout Kanabec County. We travel to properties outside city limits regularly and include rural locations in our free estimate service area.",
        },
        {
            q: "How long does an exterior painting project take in Mora, MN?",
            a: "Most exterior painting projects in Mora take three to six days depending on the home's size, siding material, and prep requirements. We schedule work during appropriate weather windows and keep you updated on progress throughout the project.",
        },
        {
            q: "Are you a licensed painting contractor serving Mora and north central Minnesota?",
            a: "Yes — we are fully licensed by the State of Minnesota and carry general liability insurance and workers' compensation on every project. We serve Mora and the surrounding north central Minnesota region including Pine City, Cambridge, and Milaca. Free on-site estimates available.",
        },
    ],
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
