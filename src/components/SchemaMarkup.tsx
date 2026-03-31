import React from 'react';

export const LocalBusinessSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Painter",
        "name": "Trinity Painting & Renewal",
        "image": "https://trinitypaintingmn.com/editorial-home.jpeg",
        "@id": "https://trinitypaintingmn.com",
        "url": "https://trinitypaintingmn.com",
        "telephone": "763-225-2393",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "403 Cardinal Street",
            "addressLocality": "Mora",
            "addressRegion": "MN",
            "postalCode": "55051",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 45.8769,
            "longitude": -93.2938
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "06:00",
                "closes": "17:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/409868278878694",
            "https://www.instagram.com/trinitypaintingrenewalservices?igsh=MWZ5aGh4a2UwanNsMg%3D%3D&utm_source=qr",
            "https://x.com/trinitypaintmn?s=21",
            "https://youtube.com/@trinitypainter?si=PufG2MiznhidJlNE"
        ],
        "brand": {
            "@type": "Brand",
            "name": "Trinity Painting & Renewal"
        },
        "areaServed": [
            "Mora, MN",
            "Cambridge, MN",
            "Pine City, MN",
            "Princeton, MN",
            "East Central Minnesota"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export const ServiceSchema = ({ service }: { service: any }) => {
    if (!service) return null;

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.shortDescription,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Trinity Painting & Renewal",
            "telephone": "763-225-2393",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "403 Cardinal Street",
                "addressLocality": "Mora",
                "addressRegion": "MN",
                "postalCode": "55051",
                "addressCountry": "US"
            }
        },
        "areaServed": "East Central Minnesota",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Painting Services",
            "itemListElement": service.features.map((feature: string) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": feature
                }
            }))
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
