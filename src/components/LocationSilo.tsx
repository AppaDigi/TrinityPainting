"use client";

import ServiceClient from "@/components/ServiceClient";
import { services } from "@/lib/services";
import { ServiceSchema } from "@/components/SchemaMarkup";
import { siloData } from "@/data/silo-content";
import { locationData } from "@/data/location-content";

interface LocationSiloProps {
    citySlug: string; // e.g. 'edina'
    serviceSlug: string; // 'interior', 'exterior', 'cabinet'
    baseServiceSlug: string; // 'interior-painting', 'exterior-painting', 'cabinet-refinishing'
}

export default function LocationSilo({ citySlug, serviceSlug, baseServiceSlug }: LocationSiloProps) {
    const baseService = services.find(s => s.slug === baseServiceSlug)!;
    const content = siloData[citySlug][serviceSlug];
    const location = locationData[citySlug];

    const localizedService = {
        ...baseService,
        title: content.title,
        shortDescription: content.description,
        longContent: [
            {
                title: content.title,
                content: content.content1
            },
            {
                title: "Our Specialized Approach",
                content: content.content2
            }
        ],
        bottomContent: {
            title: `Your Trusted ${location.city} Painter`,
            content: `Need a broader range of services? Visit our main [${location.city} painting hub](/locations/${citySlug}-mn) to see how we tackle exterior projects and whole-home renewals across the Twin Cities.`
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.trinitypaintingmn.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Locations",
                "item": `https://www.trinitypaintingmn.com/locations/${citySlug}-mn`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": localizedService.title,
                "item": `https://www.trinitypaintingmn.com/locations/${citySlug}-${serviceSlug}-painting`
            }
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": localizedService.title,
        "areaServed": `${location.city}, MN`,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Trinity Painting & Renewal"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <ServiceSchema service={localizedService} />
            <ServiceClient 
                service={localizedService} 
                ctaText={content.cta}
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Locations", href: `/locations/${citySlug}-mn` },
                    { label: localizedService.title, href: `/locations/${citySlug}-${serviceSlug}-painting` }
                ]}
            />
        </>
    );
}
