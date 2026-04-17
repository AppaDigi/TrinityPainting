import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Zimmerman",
    county: "Sherburne County",
    slug: "zimmerman-mn",
    badge: "Serving Zimmerman & Sherburne County",
    heroDescription: "Trusted by homeowners across northwest metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Zimmerman, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Zimmerman is a growing community midway between the Twin Cities and St. Cloud with many newer single-family neighborhoods.",
    nearbyInAbout: "Elk River, Princeton, and St. Francis",
    homesBuilt: "1990s–2010s",
    nearbyInServiceArea: "Elk River, Princeton, and St. Francis",
    metroArea: "northwest metro Minneapolis",
    coordinates: { lat: "45.4444", lng: "-93.5913" },
    faqs: [
        {
            q: "How much does it cost to paint the interior of a home in Zimmerman, MN?",
            a: "Interior painting in Zimmerman typically ranges from $2 to $6 per square foot. For most Zimmerman single-family homes built in the 1990s and 2000s, a complete interior repaint runs $3,000 to $7,500 depending on size, ceiling height, and surface condition. Free, written estimates are provided for every project.",
        },
        {
            q: "What's the best exterior paint for Zimmerman homes in Minnesota?",
            a: "For Zimmerman's climate — with hot summers, harsh winters, and significant temperature swings — we recommend high-solids exterior coatings like Sherwin-Williams Duration or Emerald Exterior. These products are formulated for Minnesota conditions and provide outstanding freeze-thaw resistance and UV stability.",
        },
        {
            q: "Do you offer popcorn ceiling removal in Zimmerman, Minnesota?",
            a: "Yes — popcorn ceiling removal is a popular service in Zimmerman. Many homes in the area built in the 1990s still have original textured ceilings. We remove, skim-coat, prime, and paint for a smooth, updated finish that modernizes any room.",
        },
        {
            q: "How do I find a painting contractor between Minneapolis and St. Cloud near Zimmerman?",
            a: "We serve the corridor between the Twin Cities and St. Cloud including Zimmerman, Elk River, Princeton, and St. Francis. We're familiar with the area's housing stock and can schedule free on-site estimates quickly throughout Sherburne County and surrounding areas.",
        },
        {
            q: "Can you refinish cabinets in my Zimmerman, MN home?",
            a: "Yes — cabinet painting is a popular, cost-effective upgrade for Zimmerman kitchens and bathrooms. We prep, prime, and spray a smooth factory-quality finish in any color. Cabinet refinishing typically costs 10–20% of full replacement while delivering a comparable result.",
        },
        {
            q: "Are you licensed to paint in Zimmerman and Sherburne County?",
            a: "Yes — we are fully licensed by the State of Minnesota and carry comprehensive general liability insurance and workers' compensation coverage on every project in Zimmerman and throughout Sherburne County. We're happy to provide proof of insurance before any work begins.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in Zimmerman, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Zimmerman, MN and Sherburne County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/zimmerman-mn",
    },
    openGraph: {
        title: "Painting Contractor in Zimmerman, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Zimmerman, MN and Sherburne County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/zimmerman-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function ZimmermanPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/zimmerman-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.4444",
            "longitude": "-93.5913"
        },
        "areaServed": ["Zimmerman", "Sherburne County", "northwest metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
