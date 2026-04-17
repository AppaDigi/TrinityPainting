import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Lindstrom",
    county: "Chisago County",
    slug: "lindstrom-mn",
    badge: "Serving Lindstrom & Chisago County",
    heroDescription: "Trusted by homeowners across the Chisago Lakes area, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Lindstrom, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Lindstrom is the heart of the Chisago Lakes area, known for its Scandinavian heritage and beautiful lake-area homes with unique character.",
    nearbyInAbout: "Chisago City, North Branch, and Forest Lake",
    homesBuilt: "1970s–2000s",
    nearbyInServiceArea: "Chisago City, North Branch, and Forest Lake",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.3830", lng: "-92.8436" },
    faqs: [
        {
            q: "How much does exterior painting cost for a lake home in Lindstrom, MN?",
            a: "Exterior painting for lake-area homes in Lindstrom typically ranges from $4,000 to $12,000 depending on the home's size, siding type, proximity to water, and prep requirements. Properties near the lake often require moisture-resistant primers and careful prep to prevent peeling. Free on-site estimates available throughout the Chisago Lakes area.",
        },
        {
            q: "Do you paint homes in the Chisago Lakes area near Lindstrom, Minnesota?",
            a: "Yes — we serve all of Lindstrom and the broader Chisago Lakes area including Chisago City, Shafer, and Center City. We're familiar with the mix of year-round homes, lake cabins, and traditional properties throughout the region.",
        },
        {
            q: "Is popcorn ceiling removal available in Lindstrom, MN?",
            a: "Yes — many Lindstrom homes built in the 1970s and 1980s have original popcorn or acoustic ceiling texture. We remove it safely, skim-coat to a smooth finish, prime, and paint. For homes built before 1980, we always recommend asbestos testing before removal.",
        },
        {
            q: "Do you stain and refinish decks near Lindstrom and Chisago Lake?",
            a: "Yes — deck staining is a very popular service in the Chisago Lakes area. We pressure-wash, prep, and apply premium penetrating stains and sealants for long-lasting protection against Minnesota's moisture, UV, and freeze-thaw extremes.",
        },
        {
            q: "How do I choose exterior paint colors for my Lindstrom lake home?",
            a: "We provide color consultation with every project. For Lindstrom lake homes, many homeowners choose natural, muted tones that complement the water and trees — Scandinavian-inspired whites, soft grays, and muted blues work beautifully in this setting. We bring samples and help you visualize options before committing.",
        },
        {
            q: "Do you offer free estimates in Lindstrom and Chisago County?",
            a: "Yes — free on-site estimates are available throughout Lindstrom and all of Chisago County. We visit your home, assess the full scope, and provide a detailed written quote with no obligation. Contact us to schedule.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in Lindstrom, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Lindstrom, MN and Chisago County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/lindstrom-mn",
    },
    openGraph: {
        title: "Painting Contractor in Lindstrom, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Lindstrom, MN and Chisago County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/lindstrom-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function LindstromPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/lindstrom-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.3830",
            "longitude": "-92.8436"
        },
        "areaServed": ["Lindstrom", "Chisago County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
