import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "St. Francis",
    county: "Anoka County",
    slug: "st-francis-mn",
    badge: "Serving St. Francis & Anoka County",
    heroDescription: "Trusted by homeowners across northwest metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in St. Francis, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "St. Francis is a fast-growing community along the Rum River corridor north of Ramsey with many newer developments and a strong local identity.",
    nearbyInAbout: "Ramsey, Elk River, and Zimmerman",
    homesBuilt: "1990s–2010s",
    nearbyInServiceArea: "Ramsey, Elk River, and Zimmerman",
    metroArea: "northwest metro Minneapolis",
    coordinates: { lat: "45.3791", lng: "-93.3959" },
    faqs: [
        {
            q: "What does interior painting cost in St. Francis, MN?",
            a: "Interior painting in St. Francis typically ranges from $2 to $6 per square foot. Newer homes in St. Francis with open floor plans and standard ceiling heights often fall in the $3,500 to $7,500 range for a complete repaint. Free, written, no-obligation estimates are available for every St. Francis homeowner.",
        },
        {
            q: "How long does exterior painting take on a St. Francis home?",
            a: "Most exterior painting projects in St. Francis take three to five days depending on home size, number of stories, and surface prep requirements. We schedule exterior work during appropriate weather windows — 50°F and above, no rain — to ensure the best adhesion and longest-lasting results.",
        },
        {
            q: "Do you remove popcorn ceilings in St. Francis, Minnesota?",
            a: "Yes — popcorn ceiling removal is one of our most requested services throughout St. Francis and the Rum River area. Even in homes built in the 1990s, textured ceilings were common. We remove, skim-coat, prime, and paint to a smooth, modern finish.",
        },
        {
            q: "Are there painting contractors near me in St. Francis, MN?",
            a: "Yes — we serve St. Francis and the surrounding area including Ramsey, Elk River, and Zimmerman. Our crews are familiar with the housing styles and neighborhoods throughout the northwest metro and can schedule estimates quickly. Free on-site quotes available.",
        },
        {
            q: "Can you paint or refinish kitchen cabinets in St. Francis, MN?",
            a: "Yes. Cabinet refinishing is one of the smartest upgrades for St. Francis homeowners wanting a fresh kitchen look without the cost of replacement. We strip, prep, prime, and spray a durable finish in any color for a fraction of the cost of new cabinets.",
        },
        {
            q: "Do you offer a warranty on painting work in St. Francis, Minnesota?",
            a: "Yes — we provide a written workmanship warranty on every painting project in St. Francis. If any covered defect in our workmanship appears within the warranty period, we return to correct it at no charge. Ask us about specific warranty terms when you schedule your free estimate.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in St. Francis, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving St. Francis, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/st-francis-mn",
    },
    openGraph: {
        title: "Painting Contractor in St. Francis, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving St. Francis, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/st-francis-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function StFrancisPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/st-francis-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.3791",
            "longitude": "-93.3959"
        },
        "areaServed": ["St. Francis", "Anoka County", "northwest metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
