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

    return {
        title: service.seoData.title,
        description: service.seoData.description,
        keywords: service.seoData.keywords.join(", "),
        alternates: {
            canonical: `/services/${slug}`,
        },
        openGraph: {
            title: service.seoData.title,
            description: service.seoData.description,
            url: `https://trinitypaintingmn.com/services/${slug}`,
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

    return (
        <>
            <ServiceSchema service={service} />
            <ServiceClient service={service} />
        </>
    );
}
