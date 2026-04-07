import { Metadata } from "next";
import LocationSilo from "@/components/LocationSilo";
import { siloData } from "@/data/silo-content";

const CITY_SLUG = "golden-valley";
const SERVICE_SLUG = "cabinet";
const BASE_SERVICE_SLUG = "cabinet-refinishing";
const content = siloData[CITY_SLUG][SERVICE_SLUG];

export const metadata: Metadata = {
    title: `${content.title} | Trinity Painting & Renewal`,
    description: content.description,
    alternates: {
        canonical: `https://www.trinitypaintingmn.com/locations/${CITY_SLUG}-${SERVICE_SLUG}-painting`,
    },
    openGraph: {
        title: `${content.title} | Trinity Painting & Renewal`,
        description: content.description,
        url: `https://www.trinitypaintingmn.com/locations/${CITY_SLUG}-${SERVICE_SLUG}-painting`,
        images: ["/service-cabinet.webp"],
    },
};

export default function GoldenValleyCabinet() {
    return (
        <LocationSilo 
            citySlug={CITY_SLUG} 
            serviceSlug={SERVICE_SLUG} 
            baseServiceSlug={BASE_SERVICE_SLUG} 
        />
    );
}
