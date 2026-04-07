import { Metadata } from "next";
import LocationHub from "@/components/LocationHub";
import { locationData } from "@/data/location-content";

const SLUG = "edina";
const cityData = locationData[SLUG];

export const metadata: Metadata = {
    title: `Painting Contractor in ${cityData.city}, MN | Trinity Painting`,
    description: cityData.description,
    alternates: {
        canonical: `https://www.trinitypaintingmn.com/locations/${SLUG}-mn`,
    },
    openGraph: {
        title: `Painting Contractor in ${cityData.city}, MN | Trinity Painting`,
        description: cityData.description,
        url: `https://www.trinitypaintingmn.com/locations/${SLUG}-mn`,
        images: ["/editorial-home.jpeg"],
    },
};

export default function EdinaPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Trinity Painting & Renewal",
        "url": `https://www.trinitypaintingmn.com/locations/${SLUG}-mn`,
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
            "latitude": cityData.coordinates.lat,
            "longitude": cityData.coordinates.lng
        },
        "areaServed": [
            cityData.city,
            "Minneapolis",
            "Twin Cities Metro"
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <LocationHub location={cityData} slug={SLUG} />
        </>
    );
}
