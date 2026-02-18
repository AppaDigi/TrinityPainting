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
        openGraph: {
            title: service.seoData.title,
            description: service.seoData.description,
            images: [service.image],
        },
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return <ServiceClient service={service} />;
}
