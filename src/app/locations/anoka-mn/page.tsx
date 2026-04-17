import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Anoka",
    county: "Anoka County",
    slug: "anoka-mn",
    badge: "Serving Anoka & Anoka County",
    heroDescription: "Trusted by homeowners across north metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Anoka, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Anoka is the county seat of Anoka County with a historic downtown and a diverse housing stock ranging from turn-of-the-century Victorians to modern builds.",
    nearbyInAbout: "Champlin, Coon Rapids, and Andover",
    homesBuilt: "1950s–2000s",
    nearbyInServiceArea: "Champlin, Coon Rapids, and Andover",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.1977", lng: "-93.3869" },
    faqs: [
        {
            q: "How much does it cost to paint an older home in Anoka, MN?",
            a: "Older homes in Anoka — including Victorian-era and mid-century properties near downtown — often require more prep than newer construction: repairing wood siding, removing flaking paint, priming bare surfaces, and caulking gaps. Interior painting typically costs $2 to $6 per square foot and exterior $3 to $8 per square foot depending on condition.",
        },
        {
            q: "Do Anoka homes have asbestos in their popcorn ceilings?",
            a: "Homes built before 1980 in Anoka — and given the city's age, there are many — may contain asbestos in popcorn or acoustic ceiling texture. We always recommend professional asbestos testing before removal on any pre-1980 home. If asbestos is found, we coordinate certified abatement before our skim-coat work begins.",
        },
        {
            q: "What exterior painting services are available in Anoka, Minnesota?",
            a: "We offer full exterior painting in Anoka including wood siding, vinyl siding, trim, fascia, soffits, doors, shutters, fences, and garage doors. For Anoka's older wood-sided homes, we include all necessary prep — scraping, sanding, priming — in every exterior estimate.",
        },
        {
            q: "Can you repair and repaint drywall and plaster in my Anoka home?",
            a: "Yes — drywall and plaster repair is part of nearly every project we complete in older Anoka homes. We fill cracks, patch holes, skim-coat damaged areas, and blend the repairs seamlessly into the surrounding wall texture before applying finish paint.",
        },
        {
            q: "Do you paint commercial properties in Anoka, MN?",
            a: "Yes — we serve light commercial properties throughout Anoka including offices, storefronts, multi-family buildings, and rental units. We can work around business hours to minimize disruption, and all commercial estimates are free and provided in writing.",
        },
        {
            q: "How do I get a free painting estimate in Anoka, MN?",
            a: "Call us or submit a request online. We'll schedule a free on-site visit to your Anoka property, assess the scope in detail, and provide a written estimate — typically within 24 to 48 hours. There's no obligation and no pressure.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in Anoka, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Anoka, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/anoka-mn",
    },
    openGraph: {
        title: "Painting Contractor in Anoka, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Anoka, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/anoka-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function AnokaPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/anoka-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.1977",
            "longitude": "-93.3869"
        },
        "areaServed": ["Anoka", "Anoka County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
