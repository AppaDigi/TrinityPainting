import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Ham Lake",
    county: "Anoka County",
    slug: "ham-lake-mn",
    badge: "Serving Ham Lake & Anoka County",
    heroDescription: "Trusted by homeowners across north metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Ham Lake, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Ham Lake is a rural suburban community with generous lot sizes and a mix of newer construction and established homes.",
    nearbyInAbout: "Blaine, Andover, and East Bethel",
    homesBuilt: "1990s–2010s",
    nearbyInServiceArea: "Blaine, Andover, and East Bethel",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.2503", lng: "-93.2131" },
    faqs: [
        {
            q: "How much does exterior painting cost for a large-lot home in Ham Lake, MN?",
            a: "Exterior painting for larger homes in Ham Lake typically ranges from $4,000 to $12,000 depending on square footage, number of stories, siding type, and how much of the structure needs painting including outbuildings, fences, or garages. Free, written, no-obligation estimates are provided for every Ham Lake property.",
        },
        {
            q: "Do you paint large custom homes in Ham Lake, Minnesota?",
            a: "Yes — we regularly paint larger single-family homes and acreage properties throughout Ham Lake. We staff appropriately for larger projects and price them based on actual scope, not rough guesses. Detailed written quotes are always provided before any work begins.",
        },
        {
            q: "Is popcorn ceiling removal available in Ham Lake, MN?",
            a: "Yes — many Ham Lake homes built in the 1990s and early 2000s still have original textured ceilings. We remove, skim-coat, prime, and paint after removal for a clean, modern finish. For homes built before 1980, asbestos testing is always recommended.",
        },
        {
            q: "Do you stain decks and fences in Ham Lake, Minnesota?",
            a: "Absolutely — deck and fence staining is popular for Ham Lake's larger-lot properties. We pressure-wash, prep, and apply premium penetrating stains to protect wood surfaces from Minnesota's freeze-thaw cycles, UV exposure, and moisture. We also refinish older, grayed wood to restore its original appearance.",
        },
        {
            q: "How do I find a reliable painting contractor near Ham Lake, MN?",
            a: "Look for a contractor licensed by the State of Minnesota, fully insured, providing written estimates, and standing behind their work with a warranty. We meet all of those standards and serve Ham Lake and Anoka County homeowners with five-star results. Contact us for a free on-site quote.",
        },
        {
            q: "What interior painting services do you offer in Ham Lake, MN?",
            a: "We offer complete interior painting throughout Ham Lake including walls, ceilings, trim, doors, and built-ins. We use premium low-VOC paints from Sherwin-Williams, Benjamin Moore, and Behr and include all surface prep — filling holes, caulking gaps, spot priming — in every estimate.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in Ham Lake, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Ham Lake, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/ham-lake-mn",
    },
    openGraph: {
        title: "Painting Contractor in Ham Lake, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Ham Lake, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/ham-lake-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function HamLakePage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/ham-lake-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.2503",
            "longitude": "-93.2131"
        },
        "areaServed": ["Ham Lake", "Anoka County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
