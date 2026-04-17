import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Forest Lake",
    county: "Washington County",
    slug: "forest-lake-mn",
    badge: "Serving Forest Lake & Washington County",
    heroDescription: "Trusted by homeowners across the northeast metro Minneapolis area, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Forest Lake, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Forest Lake is a scenic lake community northeast of the Twin Cities with a mix of year-round and vacation-style homes.",
    nearbyInAbout: "Lino Lakes, Hugo, and White Bear Lake",
    homesBuilt: "1970s–2000s",
    nearbyInServiceArea: "Lino Lakes, Hugo, and White Bear Lake",
    metroArea: "northeast metro Minneapolis",
    coordinates: { lat: "45.2794", lng: "-92.9851" },
    faqs: [
        {
            q: "How much does it cost to paint the exterior of a home in Forest Lake, MN?",
            a: "Exterior painting in Forest Lake typically ranges from $3,500 to $11,000 depending on home size, siding type, number of stories, and prep requirements. Lake-area and wooded properties often need more thorough prep due to moisture and shading. We provide free, detailed, no-obligation on-site estimates for every Forest Lake homeowner.",
        },
        {
            q: "Do you paint lake homes and properties near Forest Lake, Minnesota?",
            a: "Yes — lake properties are a specialty in our service area. We use moisture-resistant primers and durable exterior coatings rated for high-humidity environments. Proper surface prep is critical for lake homes, and we never skip the steps that make a paint job last.",
        },
        {
            q: "Do Forest Lake homes have popcorn ceilings?",
            a: "Many Forest Lake homes built from the 1970s through the 1990s still have original popcorn or acoustic ceiling texture. We remove it safely — including asbestos testing recommendations for pre-1980 homes — skim-coat the surface smooth, and paint for a clean, modern finish.",
        },
        {
            q: "Can you stain my deck near Forest Lake, MN?",
            a: "Yes — deck and fence staining is a popular service in Forest Lake and the surrounding Washington County area. We pressure-wash, prep, and apply a premium penetrating stain to protect your outdoor wood surfaces from moisture, UV damage, and the freeze-thaw cycles that cause cracking and splintering.",
        },
        {
            q: "How do I choose paint colors for my Forest Lake home?",
            a: "We provide color consultation as part of every project. For Forest Lake homes near the lake, many homeowners choose nature-inspired tones that complement the water, trees, and landscape — soft greens, warm grays, and muted blues work beautifully in this setting. We bring samples and help you visualize options before committing.",
        },
        {
            q: "Do you offer free painting estimates in Forest Lake, MN?",
            a: "Yes — we offer completely free on-site estimates throughout Forest Lake and Washington County. We visit your home, assess the full scope, and provide a detailed written quote with no obligation. Contact us by phone or online to schedule.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in Forest Lake, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Forest Lake, MN and Washington County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/forest-lake-mn",
    },
    openGraph: {
        title: "Painting Contractor in Forest Lake, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Forest Lake, MN and Washington County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/forest-lake-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function ForestLakePage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/forest-lake-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.2794",
            "longitude": "-92.9851"
        },
        "areaServed": ["Forest Lake", "Washington County", "northeast metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
