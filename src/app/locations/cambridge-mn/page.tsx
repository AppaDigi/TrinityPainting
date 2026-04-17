import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Cambridge",
    county: "Isanti County",
    slug: "cambridge-mn",
    badge: "Serving Cambridge & Isanti County",
    heroDescription: "Trusted by homeowners across north central Minnesota, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Cambridge, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Cambridge is the county seat of Isanti County with a blend of established neighborhoods and newer developments along the Rum River corridor.",
    nearbyInAbout: "Isanti, North Branch, and Princeton",
    homesBuilt: "1970s–2000s",
    nearbyInServiceArea: "Isanti, North Branch, and Princeton",
    metroArea: "north central Minnesota",
    coordinates: { lat: "45.5719", lng: "-93.2244" },
    faqs: [
        {
            q: "What does interior painting cost in Cambridge, MN?",
            a: "Interior painting in Cambridge generally runs $2 to $6 per square foot. For a typical Cambridge home, a full interior repaint is often in the $3,000 to $7,000 range depending on size, surface condition, and paint quality. Free, detailed, no-obligation written estimates are available for every Cambridge homeowner.",
        },
        {
            q: "How much does popcorn ceiling removal cost in Cambridge, Minnesota?",
            a: "Popcorn ceiling removal in Cambridge typically costs $1.50 to $4 per square foot for removal and skim coat. Most full-home projects are completed in one to three days. For homes built before 1980 in Cambridge, we always recommend professional asbestos testing before removal begins.",
        },
        {
            q: "Do you offer exterior painting in Cambridge and Isanti County?",
            a: "Yes — we provide full exterior painting throughout Cambridge and all of Isanti County. Services include siding, trim, fascia, soffits, doors, shutters, and fences. We use premium exterior coatings designed to withstand Minnesota winters and provide a multi-year warranty on every exterior project.",
        },
        {
            q: "Can you paint cabinets in a Cambridge, MN kitchen or bathroom?",
            a: "Yes. Cabinet painting is a cost-effective way to modernize a Cambridge kitchen or bathroom without the expense of replacement. We strip, sand, prime, and spray a durable finish in any color you choose.",
        },
        {
            q: "What's the difference between a painting estimate and a painting quote in Cambridge?",
            a: "A quote is a firm, written commitment on price — which is what we always provide before any project begins. Some contractors offer vague estimates that balloon as the job progresses. Our written quotes for Cambridge homeowners include all labor, materials, and prep so there are no surprises.",
        },
        {
            q: "Do you serve rural properties and acreage homes near Cambridge, MN?",
            a: "Yes — we serve Cambridge and the rural communities throughout Isanti County including acreage properties, farmsteads, and homes outside city limits. If you're unsure whether we cover your location, give us a call — we'll confirm quickly.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in Cambridge, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Cambridge, MN and Isanti County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/cambridge-mn",
    },
    openGraph: {
        title: "Painting Contractor in Cambridge, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Cambridge, MN and Isanti County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/cambridge-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function CambridgePage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/cambridge-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.5719",
            "longitude": "-93.2244"
        },
        "areaServed": ["Cambridge", "Isanti County", "north central Minnesota"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
