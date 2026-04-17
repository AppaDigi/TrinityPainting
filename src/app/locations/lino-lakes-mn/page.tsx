import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Lino Lakes",
    county: "Anoka County",
    slug: "lino-lakes-mn",
    badge: "Serving Lino Lakes & Anoka County",
    heroDescription: "Trusted by homeowners across north metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Lino Lakes, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Lino Lakes is a quiet, lake-dotted suburb with many custom homes.",
    nearbyInAbout: "Blaine, Forest Lake, and Hugo",
    homesBuilt: "1980s–1990s",
    nearbyInServiceArea: "Blaine, Forest Lake, and Hugo",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.1491", lng: "-93.0923" },
    faqs: [
        {
            q: "How much does it cost to paint a custom home in Lino Lakes, MN?",
            a: "Painting costs for custom homes in Lino Lakes vary based on square footage, ceiling height, architectural details like coffered ceilings or built-ins, and surface condition. Interior painting typically runs $2 to $6 per square foot and exterior $3 to $7 per square foot. We price every project individually with a free on-site estimate.",
        },
        {
            q: "Do you paint lake homes and properties near Lino Lakes, Minnesota?",
            a: "Yes — we serve lakeside properties throughout Lino Lakes and the surrounding area. Lake homes require moisture-resistant primers and exterior coatings that handle higher humidity and UV exposure near water. We use products rated for these conditions on every lake-adjacent project.",
        },
        {
            q: "Do Lino Lakes homes have popcorn ceilings that need to be removed?",
            a: "Many Lino Lakes homes built in the 1980s still have original popcorn or acoustic ceiling texture. We remove it safely — with asbestos testing recommended for pre-1980 homes — skim-coat the surface smooth, and apply a fresh coat of ceiling paint. It's a transformative upgrade in any room.",
        },
        {
            q: "What's the best exterior paint for a home in Lino Lakes, MN?",
            a: "For homes in Lino Lakes, we typically recommend Sherwin-Williams Duration or Emerald Exterior — both formulated for Minnesota's freeze-thaw climate. These coatings expand and contract with temperature changes and resist peeling, fading, and mildew far longer than standard paints.",
        },
        {
            q: "Can you paint kitchen or bathroom cabinets in Lino Lakes, Minnesota?",
            a: "Yes — cabinet painting is a popular service for Lino Lakes homeowners looking to refresh their kitchen or bathroom. We thoroughly prep, prime, and spray cabinets to a smooth, durable finish in any color. It typically costs 10–20% of full cabinet replacement while delivering a comparable visual result.",
        },
        {
            q: "How do I get a painting estimate in Lino Lakes, MN?",
            a: "Call or submit a request online. We'll schedule a free on-site visit to your Lino Lakes home, assess the scope, and provide a detailed written estimate — usually within 24 to 48 hours. There's no obligation and no pressure to book.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in Lino Lakes, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Lino Lakes, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/lino-lakes-mn",
    },
    openGraph: {
        title: "Painting Contractor in Lino Lakes, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Lino Lakes, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/lino-lakes-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function LinoLakesPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/lino-lakes-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.1491",
            "longitude": "-93.0923"
        },
        "areaServed": ["Lino Lakes", "Anoka County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
