import { Metadata } from "next";
import LocationSilo from "@/components/LocationSilo";
import { siloData } from "@/data/silo-content";

const CITY_SLUG = "st-louis-park";
const SERVICE_SLUG = "interior";
const BASE_SERVICE_SLUG = "interior-painting";
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
        images: ["/service-interior.jpeg"],
    },
};

export default function SLPInterior() {
    return (
        <LocationSilo 
            citySlug={CITY_SLUG} 
            serviceSlug={SERVICE_SLUG} 
            baseServiceSlug={BASE_SERVICE_SLUG} 
        />
    );
}
