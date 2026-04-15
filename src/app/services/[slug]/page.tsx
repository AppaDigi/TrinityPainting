import { services } from "@/lib/services";
import ServiceClient from "@/components/ServiceClient";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) return { title: "Service Not Found" };

    const ogTitle = slug === "ceiling-painting" 
        ? "Ceiling Painting & Popcorn Removal — Minneapolis MN" 
        : service.seoData.title;

    return {
        title: service.seoData.title,
        description: service.seoData.description,
        keywords: service.seoData.keywords.join(", "),
        alternates: {
            canonical: `/services/${slug}`,
        },
        openGraph: {
            title: ogTitle,
            description: service.seoData.description,
            url: `https://www.trinitypaintingmn.com/services/${slug}`,
            images: [service.image],
        },
    };
}

import { ServiceSchema } from "@/components/SchemaMarkup";

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const specializedSchema = slug === "ceiling-painting" ? {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Popcorn Ceiling Removal Minneapolis",
        "areaServed": "Minneapolis, MN",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Trinity Painting & Renewal"
        }
    } : null;

    return (
        <>
            {specializedSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(specializedSchema) }}
                />
            )}
            <ServiceSchema service={service} />
            <ServiceClient service={service} />
        </>
    );
}
