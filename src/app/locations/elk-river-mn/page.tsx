import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Elk River",
    county: "Sherburne County",
    slug: "elk-river-mn",
    badge: "Serving Elk River & Sherburne County",
    heroDescription: "Trusted by homeowners across northwest metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Elk River, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Elk River is the gateway to Sherburne County with a booming housing market.",
    nearbyInAbout: "Zimmerman, Otsego, and Big Lake",
    homesBuilt: "1980s–1990s",
    nearbyInServiceArea: "Zimmerman, Otsego, and Big Lake",
    metroArea: "northwest metro Minneapolis",
    coordinates: { lat: "45.3006", lng: "-93.5669" },
    faqs: [
        {
            q: "How much does exterior painting cost in Elk River, MN?",
            a: "Exterior painting in Elk River typically ranges from $3,500 to $10,000 depending on the home's size, siding type, number of stories, and current paint condition. We use weather-resistant coatings designed for Minnesota's climate and provide free, detailed written estimates for every Elk River homeowner.",
        },
        {
            q: "Is popcorn ceiling removal a common service in Elk River, Minnesota?",
            a: "Yes — many Elk River homes from the 1980s and 1990s still have original popcorn or textured ceiling finishes. We remove them cleanly, skim-coat the surface to a smooth finish, and paint — completely transforming the look and feel of any room in your Elk River home.",
        },
        {
            q: "Do you offer deck and fence staining in Elk River, MN?",
            a: "Yes. We stain, seal, and refinish decks, fences, and pergolas throughout Elk River and Sherburne County. Elk River's wood surfaces face significant UV exposure and moisture from the Mississippi and Elk Rivers. We use penetrating oil stains that soak into the wood grain for maximum protection.",
        },
        {
            q: "How long does interior painting take in an Elk River home?",
            a: "Interior painting projects in Elk River typically take two to five days for a complete home repaint depending on square footage, room count, and ceiling height. We maintain a clean job site throughout and never leave rooms in an unusable state overnight.",
        },
        {
            q: "Can you paint kitchen cabinets in my Elk River home?",
            a: "Yes — we refinish cabinets in kitchens and bathrooms throughout Elk River. The process involves stripping, sanding, priming, and spray-applying a durable factory-quality finish. Cabinet painting costs significantly less than replacement and achieves a comparable visual result.",
        },
        {
            q: "What painting contractor serves Elk River and Sherburne County?",
            a: "We serve Elk River and all of Sherburne County, including Zimmerman, Big Lake, and Otsego. We're locally operated and familiar with the region's housing styles and construction eras. Free on-site estimates available throughout the area.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in Elk River, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Elk River, MN and Sherburne County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/elk-river-mn",
    },
    openGraph: {
        title: "Painting Contractor in Elk River, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Elk River, MN and Sherburne County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/elk-river-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function ElkRiverPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/elk-river-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.3006",
            "longitude": "-93.5669"
        },
        "areaServed": ["Elk River", "Sherburne County", "northwest metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
