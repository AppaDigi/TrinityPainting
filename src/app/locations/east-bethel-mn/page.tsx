import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "East Bethel",
    county: "Anoka County",
    slug: "east-bethel-mn",
    badge: "Serving East Bethel & Anoka County",
    heroDescription: "Trusted by homeowners across north metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in East Bethel, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "East Bethel is a spacious rural community north of Blaine with many large-lot homes and a quiet, suburban character.",
    nearbyInAbout: "Blaine, Ham Lake, and Anoka",
    homesBuilt: "1980s–2000s",
    nearbyInServiceArea: "Blaine, Ham Lake, and Anoka",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.3283", lng: "-93.2016" },
    faqs: [
        {
            q: "How much does exterior painting cost for a large-lot home in East Bethel, MN?",
            a: "Exterior painting for larger homes in East Bethel typically ranges from $4,000 to $12,000 depending on square footage, number of stories, siding type, and how much of the structure needs painting. We include all outbuildings and garages in our written scope and provide free on-site estimates for every East Bethel property.",
        },
        {
            q: "Do you paint rural and semi-rural homes in East Bethel, Minnesota?",
            a: "Yes — East Bethel's semi-rural character means many homes are larger, sit on bigger lots, and include outbuildings or multi-structure properties. We staff appropriately for these projects and include all structures in our written scope.",
        },
        {
            q: "Is popcorn ceiling removal available in East Bethel, MN?",
            a: "Yes — many East Bethel homes built in the 1980s and 1990s still have original popcorn or acoustic texture on ceilings. We remove it safely with a tested process, skim-coat the surface smooth, prime, and apply fresh ceiling paint. Asbestos testing is recommended for any pre-1980 home.",
        },
        {
            q: "Do you stain and seal decks in East Bethel, Minnesota?",
            a: "Absolutely. Decks and fences throughout East Bethel take heavy weathering from Minnesota's extreme temperature swings. We pressure-wash, prep, and apply premium penetrating stain and sealant — including options to restore grayed, weathered wood to a like-new appearance.",
        },
        {
            q: "How long does interior painting take in an East Bethel home?",
            a: "Interior painting projects in East Bethel typically take two to five days for a full home repaint depending on square footage and surface condition. We maintain a clean job site and protect all areas not being painted with drop cloths and plastic sheeting.",
        },
        {
            q: "What painting services are available in East Bethel and northern Anoka County?",
            a: "We offer interior painting, exterior painting, popcorn ceiling removal, cabinet painting, drywall repair, and deck staining throughout East Bethel and all of northern Anoka County. Free on-site estimates available — contact us to schedule.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in East Bethel, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving East Bethel, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/east-bethel-mn",
    },
    openGraph: {
        title: "Painting Contractor in East Bethel, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving East Bethel, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/east-bethel-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function EastBethelPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/east-bethel-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.3283",
            "longitude": "-93.2016"
        },
        "areaServed": ["East Bethel", "Anoka County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
