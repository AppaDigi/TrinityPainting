import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Chisago City",
    county: "Chisago County",
    slug: "chisago-city-mn",
    badge: "Serving Chisago City & Chisago County",
    heroDescription: "Trusted by homeowners across the Chisago Lakes area, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Chisago City, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Chisago City is a charming lake community in the heart of the Chisago Lakes area with many year-round homes and lake-adjacent properties.",
    nearbyInAbout: "Lindstrom, North Branch, and Forest Lake",
    homesBuilt: "1960s–2000s",
    nearbyInServiceArea: "Lindstrom, North Branch, and Forest Lake",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.3655", lng: "-92.8855" },
    faqs: [
        {
            q: "How much does interior painting cost in Chisago City, MN?",
            a: "Interior painting in Chisago City typically ranges from $2 to $6 per square foot. For year-round lake homes in the Chisago Lakes area, a complete interior repaint often runs $3,500 to $8,000 depending on square footage and condition. Free, no-obligation written estimates are available for every homeowner.",
        },
        {
            q: "Do you paint lake homes and year-round properties in Chisago City, Minnesota?",
            a: "Yes — lake and shoreline properties are common throughout Chisago City. We use moisture-resistant primers and durable exterior coatings for water-adjacent homes, and include thorough surface prep to prevent the peeling that often occurs near bodies of water.",
        },
        {
            q: "Do you remove popcorn ceilings in Chisago City, MN?",
            a: "Yes — many Chisago City homes built from the 1960s through the 1980s have original popcorn or acoustic ceiling texture. We remove, skim-coat, prime, and paint for a smooth, modern finish. Asbestos testing is recommended for all pre-1980 homes before removal begins.",
        },
        {
            q: "Can you paint the exterior of a cabin or vacation home near Chisago City?",
            a: "Yes. We paint seasonal cabins, vacation homes, and year-round lake properties in the Chisago City area. We work on flexible schedules and can often complete smaller cabin exteriors in one to two days. Contact us to schedule a free estimate.",
        },
        {
            q: "Do you stain docks and decks near Chisago City and the Chisago Lakes?",
            a: "Yes — we stain and seal decks, docks, and exterior wood surfaces throughout the Chisago Lakes area. We use premium penetrating stains designed for heavy water exposure and UV, providing maximum protection for your outdoor investment.",
        },
        {
            q: "What painting services are available in Chisago City and Chisago County?",
            a: "We offer interior painting, exterior painting, popcorn ceiling removal, cabinet refinishing, drywall repair, and deck staining throughout Chisago City and all of Chisago County. Free on-site estimates available — contact us to schedule a visit.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in Chisago City, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Chisago City, MN and Chisago County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/chisago-city-mn",
    },
    openGraph: {
        title: "Painting Contractor in Chisago City, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Chisago City, MN and Chisago County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/chisago-city-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function ChisagoCityPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/chisago-city-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.3655",
            "longitude": "-92.8855"
        },
        "areaServed": ["Chisago City", "Chisago County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
