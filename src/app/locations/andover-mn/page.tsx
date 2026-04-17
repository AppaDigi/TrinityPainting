import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Andover",
    county: "Anoka County",
    slug: "andover-mn",
    badge: "Serving Andover & Anoka County",
    heroDescription: "Trusted by homeowners across northwest metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Andover, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Andover is a thriving residential suburb featuring large single-family homes.",
    nearbyInAbout: "Anoka, Ramsey, and Coon Rapids",
    homesBuilt: "1980s–2000s",
    nearbyInServiceArea: "Anoka, Ramsey, and Coon Rapids",
    metroArea: "northwest metro Minneapolis",
    coordinates: { lat: "45.2611", lng: "-93.3340" },
    faqs: [
        {
            q: "How much does exterior painting cost for a large home in Andover, MN?",
            a: "Exterior painting for larger single-family homes in Andover typically ranges from $4,000 to $12,000 depending on square footage, number of stories, siding type, and paint condition. We use weather-resistant coatings built for Minnesota's freeze-thaw climate and provide free, no-obligation written estimates for every Andover homeowner.",
        },
        {
            q: "Is popcorn ceiling removal worth it in an Andover home?",
            a: "Absolutely. Popcorn ceiling removal adds value, modernizes your home, and makes rooms feel larger and brighter — all for a relatively modest cost. In Andover's competitive real estate market, smooth ceilings are a notable upgrade that buyers and appraisers notice.",
        },
        {
            q: "What interior paint brands do you use in Andover, MN?",
            a: "We use Sherwin-Williams, Benjamin Moore, and Behr — all top-rated brands known for rich color, washability, and long-lasting durability. For Andover clients, we often recommend Sherwin-Williams SuperPaint or Emerald for interior walls and Duration Exterior for outdoor surfaces.",
        },
        {
            q: "How long does exterior painting take on an Andover home?",
            a: "Most exterior painting projects in Andover take three to six days depending on the home's size, number of stories, surface prep requirements, and weather conditions. We never leave a job unfinished overnight in poor condition and keep you updated throughout the process.",
        },
        {
            q: "Do you offer cabinet refinishing services in Andover, Minnesota?",
            a: "Yes. Cabinet refinishing is one of the most cost-effective upgrades for Andover homeowners. We prep, prime, and spray a durable factory-quality finish on existing cabinets — transforming your kitchen or bathroom without the expense or disruption of full replacement.",
        },
        {
            q: "Are you a painting contractor that serves all of Andover, MN?",
            a: "Yes — we serve all neighborhoods throughout Andover including communities along Highway 10, the river corridor, and newer developments to the north. We also serve Anoka, Ramsey, and Coon Rapids. Free on-site estimates available throughout Anoka County.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in Andover, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Andover, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/andover-mn",
    },
    openGraph: {
        title: "Painting Contractor in Andover, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Andover, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/andover-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function AndoverPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/andover-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.2611",
            "longitude": "-93.3340"
        },
        "areaServed": ["Andover", "Anoka County", "northwest metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
