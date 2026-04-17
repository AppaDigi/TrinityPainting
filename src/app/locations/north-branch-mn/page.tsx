import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "North Branch",
    county: "Chisago County",
    slug: "north-branch-mn",
    badge: "Serving North Branch & Chisago County",
    heroDescription: "Trusted by homeowners along the I-35 corridor, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in North Branch, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "North Branch is a growing community along the I-35 corridor with many newer developments and a strong sense of small-town community.",
    nearbyInAbout: "Chisago City, Forest Lake, and Cambridge",
    homesBuilt: "1990s–2010s",
    nearbyInServiceArea: "Chisago City, Forest Lake, and Cambridge",
    metroArea: "north metro Minneapolis and the I-35 corridor",
    coordinates: { lat: "45.5094", lng: "-92.9835" },
    faqs: [
        {
            q: "What does interior painting cost in North Branch, MN?",
            a: "Interior painting in North Branch typically ranges from $2 to $6 per square foot. For newer North Branch homes with standard ceiling heights and good surface condition, a full repaint often runs $3,000 to $7,000. We offer free, no-pressure written estimates for every homeowner.",
        },
        {
            q: "How do you approach painting newer construction homes in North Branch, Minnesota?",
            a: "Newer homes in North Branch often feature open floor plans, high ceilings, and extensive trim work — all requiring careful masking, cutting in, and detail work. We use the right brush, roller, and spray techniques for each surface type and ensure crisp lines throughout every room.",
        },
        {
            q: "Do you remove popcorn ceilings in North Branch, MN?",
            a: "Yes — while newer North Branch homes are less likely to have popcorn ceilings than older properties, many homes built in the 1990s do still have original textured ceilings in certain rooms. We remove, skim-coat, prime, and paint for a smooth modern finish.",
        },
        {
            q: "What painting services are available along the I-35 corridor near North Branch?",
            a: "We serve the entire I-35 corridor including North Branch, Chisago City, Lindstrom, and surrounding Chisago County communities. Our services include interior painting, exterior painting, popcorn ceiling removal, cabinet painting, drywall repair, and deck staining.",
        },
        {
            q: "Can you paint kitchen cabinets in my North Branch home?",
            a: "Yes — cabinet painting is a popular service throughout North Branch. We strip, sand, prime, and spray a durable factory-quality finish on existing cabinets in any color. It typically runs 10–20% of full replacement cost and delivers a dramatic visual transformation.",
        },
        {
            q: "Do you offer free estimates in North Branch and Chisago County?",
            a: "Yes — we provide completely free, no-obligation on-site estimates throughout North Branch and all of Chisago County. We typically schedule estimate visits within 24 to 48 hours of your request and provide a detailed written quote before any work begins.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in North Branch, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving North Branch, MN and Chisago County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/north-branch-mn",
    },
    openGraph: {
        title: "Painting Contractor in North Branch, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving North Branch, MN and Chisago County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/north-branch-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function NorthBranchPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/north-branch-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.5094",
            "longitude": "-92.9835"
        },
        "areaServed": ["North Branch", "Chisago County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
