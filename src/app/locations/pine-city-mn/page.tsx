import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Pine City",
    county: "Pine County",
    slug: "pine-city-mn",
    badge: "Serving Pine City & Pine County",
    heroDescription: "Trusted by homeowners across north central Minnesota, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Pine City, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Pine City is the county seat of Pine County with a close-knit community and a mix of older established homes and newer construction.",
    nearbyInAbout: "Mora, North Branch, and Hinckley",
    homesBuilt: "1960s–1990s",
    nearbyInServiceArea: "Mora, North Branch, and Hinckley",
    metroArea: "north central Minnesota",
    coordinates: { lat: "45.8264", lng: "-92.9685" },
    faqs: [
        {
            q: "What does interior painting cost in Pine City, MN?",
            a: "Interior painting in Pine City typically ranges from $2 to $6 per square foot. For older Pine City homes, additional prep work — patching plaster, sealing stains, priming bare wood — is often necessary and is always included in our written estimates. Contact us for a free, no-obligation quote.",
        },
        {
            q: "How much does exterior painting cost for a Pine City, Minnesota home?",
            a: "Exterior painting in Pine City typically runs $3,000 to $9,000 depending on siding type, square footage, number of stories, and paint condition. We include all surface prep — pressure washing, scraping, priming, and caulking — in every exterior estimate for Pine City homeowners.",
        },
        {
            q: "Do Pine City homes have popcorn ceilings that need to be removed?",
            a: "Yes — many Pine City homes from the 1960s through the 1980s still have original popcorn or acoustic ceiling texture. Pre-1980 homes may contain asbestos in the texture, so testing is important before any removal. We remove, skim-coat, prime, and paint for a smooth modern finish.",
        },
        {
            q: "Do you serve rural properties in Pine County near Pine City?",
            a: "Yes — we serve in-town Pine City and rural properties throughout Pine County including acreage homes, cabins, and farmsteads. Give us a call and we'll confirm your location and schedule a free estimate.",
        },
        {
            q: "Can you paint or refinish cabinets in a Pine City, MN home?",
            a: "Yes. Cabinet refinishing is a popular, affordable alternative to replacement for Pine City homeowners. We prep, prime, and spray a smooth, durable finish on existing cabinets in any color. The results are dramatic and the cost is a fraction of new cabinetry.",
        },
        {
            q: "Are you a painting contractor that serves Pine City and Pine County?",
            a: "Yes — we serve Pine City and the broader Pine County area. Our crews are familiar with the region and can schedule free on-site estimates quickly. Contact us by phone or online to get started.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in Pine City, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Pine City, MN and Pine County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/pine-city-mn",
    },
    openGraph: {
        title: "Painting Contractor in Pine City, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Pine City, MN and Pine County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/pine-city-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function PineCityPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/pine-city-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.8264",
            "longitude": "-92.9685"
        },
        "areaServed": ["Pine City", "Pine County", "north central Minnesota"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
