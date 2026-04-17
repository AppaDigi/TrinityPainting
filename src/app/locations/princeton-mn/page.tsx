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
    faqs: [
        {
            q: "What does interior painting cost in Princeton, MN?",
            a: "Interior painting in Princeton typically ranges from $2 to $6 per square foot. For a typical Princeton home, a complete interior repaint generally costs $3,000 to $7,500 depending on square footage, room count, surface condition, and number of coats. Free, written, no-obligation estimates available.",
        },
        {
            q: "How much does exterior painting cost in Princeton, Minnesota?",
            a: "Exterior painting in Princeton typically runs $3,500 to $10,000 for a standard single-family home depending on siding type, square footage, number of stories, and surface preparation required. We include all prep — pressure washing, caulking, spot priming — in every exterior estimate for Princeton homeowners.",
        },
        {
            q: "Do you remove popcorn ceilings in Princeton, MN?",
            a: "Yes — popcorn ceiling removal is available throughout Princeton and Mille Lacs County. Many Princeton homes built from the 1970s through the 1990s still have original textured ceilings. We remove, skim-coat, prime, and paint to a smooth modern finish.",
        },
        {
            q: "Do you serve rural properties near Princeton, Minnesota?",
            a: "Yes — we regularly serve rural properties, acreage homes, and hobby farms throughout Mille Lacs County in addition to in-town Princeton homes. If you're outside of town, give us a call and we'll confirm your location falls within our service area.",
        },
        {
            q: "Can you paint or refinish kitchen cabinets in Princeton, MN?",
            a: "Absolutely. Cabinet refinishing is available throughout Princeton and is one of the most cost-effective ways to upgrade a kitchen or bathroom. We strip, prep, prime, and spray a smooth, durable finish in any color you choose.",
        },
        {
            q: "Are you a licensed painting contractor serving Princeton and Mille Lacs County?",
            a: "Yes — we are fully licensed by the State of Minnesota, carry general liability insurance, and maintain workers' compensation on every project. We serve Princeton and all of Mille Lacs County. Free on-site estimates are available with no pressure or obligation.",
        },
    ],
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
