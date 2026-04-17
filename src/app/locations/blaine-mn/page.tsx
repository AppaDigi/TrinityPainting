import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Blaine",
    county: "Anoka County",
    slug: "blaine-mn",
    badge: "Serving Blaine & Anoka County",
    heroDescription: "Trusted by homeowners across north metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Blaine, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Blaine is one of the fastest-growing suburbs north of Minneapolis with a mix of newer developments and established neighborhoods.",
    nearbyInAbout: "Coon Rapids, Andover, and Spring Lake Park",
    homesBuilt: "1980s–2000s",
    nearbyInServiceArea: "Coon Rapids, Andover, and Spring Lake Park",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.1608", lng: "-93.2350" },
    faqs: [
        {
            q: "How much does interior painting cost in Blaine, MN?",
            a: "Interior painting in Blaine typically costs $2 to $6 per square foot, with most whole-home repaints ranging from $3,500 to $8,000 depending on square footage, room count, ceiling height, and surface condition. We offer free on-site estimates for every Blaine homeowner with no pressure and no obligation.",
        },
        {
            q: "What is the best time of year to paint the exterior of a Blaine home?",
            a: "The ideal window for exterior painting in Blaine is May through September, when temperatures consistently stay above 50°F and humidity is manageable. Applying paint in cold or damp conditions causes adhesion failures and peeling. We schedule all Blaine exterior jobs within this window to ensure the most durable finish.",
        },
        {
            q: "Do homes in Blaine still have popcorn ceilings that need to be removed?",
            a: "Yes — many Blaine homes built in the 1980s and 1990s still have original popcorn or acoustic ceiling texture. It was a standard finish for decades and is still very common in established Blaine neighborhoods. We remove it safely, skim-coat the surface smooth, and paint to a clean modern finish.",
        },
        {
            q: "Can you paint kitchen cabinets in my Blaine home without replacing them?",
            a: "Yes — cabinet painting is one of our most popular services in Blaine. We strip, sand, prime, and spray a factory-smooth finish on your existing cabinets in any color you choose. It costs a fraction of replacement and completely transforms the look of your kitchen or bathroom.",
        },
        {
            q: "How long does it take to paint the interior of a typical Blaine home?",
            a: "Most whole-home interior painting projects in Blaine take two to five days depending on square footage, number of rooms, ceiling height, and the level of surface prep required. Single-room jobs are often completed in one day. We provide a detailed timeline with every written estimate.",
        },
        {
            q: "How do I find a licensed painting contractor in Blaine, Minnesota?",
            a: "Look for a contractor licensed by the State of Minnesota, carrying general liability insurance and workers' compensation. We are fully licensed and insured and serve Blaine and all of Anoka County. You can verify any Minnesota contractor's license at the Department of Labor and Industry website.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in Blaine, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Blaine, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/blaine-mn",
    },
    openGraph: {
        title: "Painting Contractor in Blaine, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Blaine, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/blaine-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function BlainePage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/blaine-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.1608",
            "longitude": "-93.2350"
        },
        "areaServed": ["Blaine", "Anoka County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
