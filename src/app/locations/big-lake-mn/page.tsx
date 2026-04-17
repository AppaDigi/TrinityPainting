import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Big Lake",
    county: "Sherburne County",
    slug: "big-lake-mn",
    badge: "Serving Big Lake & Sherburne County",
    heroDescription: "Trusted by homeowners across northwest metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Big Lake, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Big Lake is a charming lakeside community in Sherburne County with easy I-94 access and a mix of established and newer homes.",
    nearbyInAbout: "Elk River, Monticello, and Zimmerman",
    homesBuilt: "1980s–2000s",
    nearbyInServiceArea: "Elk River, Monticello, and Zimmerman",
    metroArea: "northwest metro Minneapolis",
    coordinates: { lat: "45.3308", lng: "-93.7384" },
    faqs: [
        {
            q: "How much does exterior painting cost for a home in Big Lake, MN?",
            a: "Exterior painting in Big Lake typically ranges from $3,500 to $10,000 depending on square footage, number of stories, siding type, and the condition of existing paint. Big Lake's lakeside climate adds moisture considerations to exterior prep. We provide free, on-site written estimates for every Big Lake homeowner.",
        },
        {
            q: "Do you paint lake homes in Big Lake, Minnesota?",
            a: "Yes — lakeside and water-adjacent properties are a common part of our work in Big Lake. We use moisture-resistant primers and coatings designed for higher humidity environments. Proper surface prep is essential for lake homes to prevent peeling and blistering.",
        },
        {
            q: "Is popcorn ceiling removal available in Big Lake, MN?",
            a: "Yes — many Big Lake homes built in the 1980s and 1990s still have original popcorn or acoustic ceiling texture. We remove it safely, skim-coat the ceiling to a smooth finish, prime, and paint. Asbestos testing is recommended for any home built before 1980.",
        },
        {
            q: "Do you stain decks near Big Lake, MN?",
            a: "Absolutely — deck and fence staining is in high demand in Big Lake given the outdoor lifestyle of the area. We pressure-wash, lightly sand, and apply a premium penetrating stain to protect and enhance your wood surfaces for years to come.",
        },
        {
            q: "How long does it take to paint the interior of a Big Lake home?",
            a: "Interior painting projects in Big Lake typically take two to four days for a complete home repaint. Individual rooms can often be done in a single day. We provide a timeline with every estimate and work cleanly without disrupting your home beyond the spaces being painted.",
        },
        {
            q: "What painting contractor serves Big Lake and Sherburne County?",
            a: "We serve all of Big Lake and Sherburne County, including nearby communities like Elk River, Zimmerman, and Monticello. Free on-site estimates are available throughout the area, and we're familiar with the housing styles and construction eras common in Sherburne County.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in Big Lake, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Big Lake, MN and Sherburne County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/big-lake-mn",
    },
    openGraph: {
        title: "Painting Contractor in Big Lake, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Big Lake, MN and Sherburne County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/big-lake-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function BigLakePage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/big-lake-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.3308",
            "longitude": "-93.7384"
        },
        "areaServed": ["Big Lake", "Sherburne County", "northwest metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
