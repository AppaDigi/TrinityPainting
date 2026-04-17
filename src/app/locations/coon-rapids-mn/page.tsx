import { Metadata } from "next";
import AnokaCityPage, { AnokaCityData } from "@/components/AnokaCityPage";

const cityData: AnokaCityData = {
    city: "Coon Rapids",
    county: "Anoka County",
    slug: "coon-rapids-mn",
    badge: "Serving Coon Rapids & Anoka County",
    heroDescription: "Trusted by homeowners across north metro Minneapolis, we deliver beautiful, lasting paint jobs and professional popcorn ceiling removal in Coon Rapids, MN. Fully licensed, insured, and backed by a written workmanship warranty. Get your free estimate today.",
    aboutCity: "Coon Rapids is one of Anoka County's largest cities with a dense residential base.",
    nearbyInAbout: "Blaine, Anoka, and Andover",
    homesBuilt: "1960s–1990s",
    nearbyInServiceArea: "Blaine, Anoka, and Andover",
    metroArea: "north metro Minneapolis",
    coordinates: { lat: "45.1236", lng: "-93.3069" },
    faqs: [
        {
            q: "How much does it cost to repaint an older home in Coon Rapids, MN?",
            a: "Painting older homes in Coon Rapids often requires more prep than newer builds — filling nail holes, repairing plaster cracks, sealing water stains, and priming bare wood. Interior painting typically costs $2 to $6 per square foot and exterior $3 to $7 per square foot. We include all prep in our written estimates with no hidden fees.",
        },
        {
            q: "Do Coon Rapids homes have asbestos in their popcorn ceilings?",
            a: "Homes in Coon Rapids built before 1980 — and there are many — may contain asbestos in popcorn or acoustic ceiling texture. We always recommend professional asbestos testing before removal on any pre-1980 home. If asbestos is present, we coordinate safe abatement before our removal and skim-coat work begins.",
        },
        {
            q: "What exterior painting services do you offer in Coon Rapids, Minnesota?",
            a: "We offer complete exterior painting in Coon Rapids including siding, trim, fascia, soffits, garage doors, shutters, and fences. We pressure-wash, caulk, spot-prime, and apply two coats of a premium exterior coating — all included in every Coon Rapids exterior estimate.",
        },
        {
            q: "Can you do popcorn ceiling removal throughout a Coon Rapids home?",
            a: "Yes — we remove popcorn, cottage cheese, and acoustic ceiling texture throughout entire homes in Coon Rapids. After removal, we skim-coat to a smooth finish, prime, and paint. Most full-home projects are completed in two to four days.",
        },
        {
            q: "Do you stain decks and fences in Coon Rapids, MN?",
            a: "Yes. We apply premium deck stains and sealants to wood decks, privacy fences, and pergolas throughout Coon Rapids. Minnesota's climate makes regular staining essential for preventing moisture damage, gray weathering, and wood rot. We pressure-wash and prep before applying any stain.",
        },
        {
            q: "Are you a painting contractor near me in Coon Rapids, MN?",
            a: "Yes — we serve all neighborhoods in Coon Rapids and the surrounding north metro area. Our crews are familiar with the area's housing stock and can often schedule estimates quickly. Contact us to set up a free, no-obligation on-site estimate.",
        },
    ],
};

export const metadata: Metadata = {
    title: "Painting Contractor in Coon Rapids, MN | Interior Painting & Popcorn Ceiling Removal",
    description: "Professional painting contractor serving Coon Rapids, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/coon-rapids-mn",
    },
    openGraph: {
        title: "Painting Contractor in Coon Rapids, MN | Interior Painting & Popcorn Ceiling Removal",
        description: "Professional painting contractor serving Coon Rapids, MN and Anoka County. Interior painting, exterior painting, and popcorn ceiling removal. Licensed & insured. Free estimates — call today.",
        url: "https://www.trinitypaintingmn.com/locations/coon-rapids-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function CoonRapidsPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/coon-rapids-mn",
        "telephone": "763-200-4121",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "45.1236",
            "longitude": "-93.3069"
        },
        "areaServed": ["Coon Rapids", "Anoka County", "north metro Minneapolis"]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <AnokaCityPage data={cityData} />
        </>
    );
}
