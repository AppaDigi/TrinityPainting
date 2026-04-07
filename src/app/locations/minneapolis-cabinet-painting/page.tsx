import { Metadata } from "next";
import ServiceClient from "@/components/ServiceClient";
import { services } from "@/lib/services";
import { ServiceSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
    title: "Cabinet Painting & Refinishing Minneapolis MN | Trinity Painting",
    description: "Professional kitchen cabinet painting in Minneapolis, MN. Factory-smooth finish, Sherwin-Williams Emerald Urethane. Save vs. replacement. Twin Cities metro. Free estimates.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/minneapolis-cabinet-painting",
    },
    openGraph: {
        title: "Cabinet Painting & Refinishing Minneapolis MN | Trinity Painting",
        description: "Professional kitchen cabinet painting in Minneapolis, MN. Factory-smooth finish, Sherwin-Williams Emerald Urethane. Save vs. replacement. Twin Cities metro. Free estimates.",
        url: "https://www.trinitypaintingmn.com/locations/minneapolis-cabinet-painting",
        images: ["/service-cabinets.jpeg"],
    },
};

export default function MinneapolisCabinetPaintingPage() {
    const baseService = services.find(s => s.slug === "cabinet-refinishing")!;

    const minneapolisCabinetService = {
        ...baseService,
        title: "Kitchen Cabinet Painting in Minneapolis, MN",
        shortDescription: "Get a factory-smooth, ultra-durable cabinet finish for a fraction of the cost of replacement.",
        longContent: [
            {
                title: "Why Minneapolis Homeowners Choose Cabinet Refinishing",
                content: `Many homeowners in Minneapolis are discovering that they can achieve a high-end designer kitchen without the $15,000+ price tag of a full remodel. Trinity Painting & Renewal provides professional cabinet painting and refinishing that delivers a factory-smooth finish for typically between $1,500 and $3,500. \n\nWe utilize Sherwin-Williams Emerald Urethane Trim Enamel, a high-performance coating that provides the leveling and durability of an oil-based product with the ease and low-odor of a water-based finish. This ensures a "factory-hard" surface that resists scuffs, scratches, and household chemicals, making it perfect for the high-traffic demands of a modern kitchen.`
            },
            {
                title: "The Professional Cabinet Painting Process",
                content: `Our process is built on precision and thoroughness to ensure long-term durability. We don't just "paint" cabinets; we refinish them. Our steps include: \n\n• Systematic door and drawer removal and numbering\n• Professional degreasing and cleaning to remove kitchen oils\n• Detailed sanding and surface preparation\n• Application of a high-build bonding primer\n• Two finish coats of premium Emerald Urethane\n\nReturning your kitchen to a better-than-new condition with minimal disruption.`
            }
        ],
        faqs: [
            {
                question: "How long does cabinet painting take in Minneapolis?",
                answer: "Most kitchen cabinet projects are completed in 4-6 business days. We typically spend two days onsite for the boxes and the remainder of the time in our specialized spray shop finishing the doors and drawer fronts."
            },
            {
                question: "Do you paint cabinets in place or remove doors?",
                answer: "We use a hybrid approach. We mask and paint the cabinet frames (boxes) onsite using specialized rollers or HVLP spraying. For the doors and drawers, we remove them and take them to our shop to ensure a perfectly level, dust-free, factory finish."
            },
            {
                question: "What paint do you use for Minneapolis kitchen cabinets?",
                answer: "We exclusively use Sherwin-Williams Emerald Urethane Trim Enamel. It offers superior durability and a beautiful finish that resists the yellowing and cracking often seen with cheaper products."
            }
        ],
        bottomContent: {
            title: "Internal Links",
            content: `Looking for more? Explore our full [kitchen cabinet refinishing](/services/cabinet-refinishing) solutions or return to the [Minneapolis painting hub](/locations/minneapolis-mn) for other home renewal services.`
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Cabinet Painting Minneapolis",
        "areaServed": "Minneapolis, MN",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Trinity Painting & Renewal"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <ServiceSchema service={minneapolisCabinetService} />
            <ServiceClient 
                service={minneapolisCabinetService} 
                ctaText="Get a Free Minneapolis Cabinet Painting Estimate"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Locations", href: "/locations/minneapolis-mn" },
                    { label: "Minneapolis Cabinet Painting", href: "/locations/minneapolis-cabinet-painting" }
                ]}
            />
        </>
    );
}
