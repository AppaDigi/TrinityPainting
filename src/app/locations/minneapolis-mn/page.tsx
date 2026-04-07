import { Metadata } from "next";
import MinneapolisClient from "./MinneapolisClient";

export const metadata: Metadata = {
    title: "Painting Contractor in Minneapolis, MN | Trinity Painting",
    description: "Trinity Painting & Renewal serves Minneapolis and the Twin Cities metro. Interior & exterior painting, cabinet refinishing, popcorn ceiling removal. Faith-focused craftsmanship. Free estimates.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/minneapolis-mn",
    },
    openGraph: {
        title: "Painting Contractor in Minneapolis, MN | Trinity Painting",
        description: "Trinity Painting & Renewal serves Minneapolis and the Twin Cities metro. Interior & exterior painting, cabinet refinishing, popcorn ceiling removal. Faith-focused craftsmanship. Free estimates.",
        url: "https://www.trinitypaintingmn.com/locations/minneapolis-mn",
        images: ["/editorial-home.jpeg"],
    },
};

export default function MinneapolisPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": "https://www.trinitypaintingmn.com/locations/minneapolis-mn",
        "telephone": "763-225-2393",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "44.9778",
            "longitude": "-93.2650"
        },
        "areaServed": [
            "Minneapolis",
            "Uptown",
            "Northeast Minneapolis",
            "South Minneapolis",
            "Edina",
            "St. Louis Park",
            "Maple Grove",
            "Plymouth",
            "Eden Prairie"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <MinneapolisClient />
        </>
    );
}
