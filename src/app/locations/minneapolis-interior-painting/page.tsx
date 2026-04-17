import { Metadata } from "next";
import ServiceClient from "@/components/ServiceClient";
import { services } from "@/lib/services";
import { ServiceSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
    title: "Interior Painting Minneapolis MN | Trinity Painting & Renewal",
    description: "Professional interior painting in Minneapolis, MN. Walls, ceilings, trim & cabinets. Faith-focused craftsmanship, Sherwin-Williams paints. Free estimates for Twin Cities homeowners.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/minneapolis-interior-painting",
    },
    openGraph: {
        title: "Interior Painting Minneapolis MN | Trinity Painting & Renewal",
        description: "Professional interior painting in Minneapolis, MN. Walls, ceilings, trim & cabinets. Faith-focused craftsmanship, Sherwin-Williams paints. Free estimates for Twin Cities homeowners.",
        url: "https://www.trinitypaintingmn.com/locations/minneapolis-interior-painting",
        images: ["/service-interior.jpeg"],
    },
};

export default function MinneapolisInteriorPaintingPage() {
    const baseService = services.find(s => s.slug === "interior-painting")!;

    const minneapolisInteriorService = {
        ...baseService,
        title: "Interior Painting in Minneapolis, MN",
        shortDescription: "Professional interior painting specializing in walls, ceilings, and precise trim work for Minneapolis homeowners.",
        longContent: [
            {
                title: "Expert Interior Painting Services in Minneapolis",
                content: `Trinity Painting & Renewal provides premium interior painting services across the heart of Minneapolis and its surrounding suburbs, including Uptown, Edina, St. Louis Park, Richfield, and Bloomington. We understand the specific environmental challenges of the Twin Cities, where summer humidity can significantly impact paint drying times and adhesion. Our professionals meticulously monitor these conditions to ensure a flawless, long-lasting finish. \n\nFor families with children or pets, we prioritize health by offering low-VOC and zero-VOC paint options from Sherwin-Williams that maintain indoor air quality without sacrificing durability. Whether you are refreshing a single room or revitalizing an entire century-old Northeast Minneapolis home, our God-honoring craftsmanship ensures that your interior surfaces—from walls and ceilings to intricate trim—are treated with the highest level of respect and professional care.`
            },
            {
                title: "Our Comprehensive Interior Solutions",
                content: `Our comprehensive interior solutions include meticulously painting walls, ceilings, baseboards, crown molding, window casings, and doors. We utilize advanced enameling techniques for trim and high-performance coatings for ceilings. For specialized projects that require extensive preparation and finish, check out our core services: \n\n• [Professional Interior Painting](/services/interior-painting)\n• [Kitchen Cabinet Refinishing & Enameling](/services/cabinet-refinishing)`
            },
            {
                title: "Trusted Minneapolis Painting Contractor",
                content: `As a leading [Minneapolis painting contractor](/locations/minneapolis-mn), we are committed to your total satisfaction. Our process is designed to minimize disruption to your home life while delivering high-end results. We handle all furniture moving, floor protection, and thorough cleanup, leaving you with nothing but a beautifully renewed living space.`
            }
        ],
        bottomContent: {
            title: "Internal Links",
            content: `Need a broader range of services? Visit our main [Minneapolis painting hub](/locations/minneapolis-mn) to see how we tackle exterior projects and whole-home renewals across the Twin Cities.`
        },
        faqs: [
            { question: "How much does interior painting cost in Minneapolis, MN?", answer: "Interior painting in Minneapolis typically ranges from $2 to $7 per square foot depending on the neighborhood, home age, and finish level. Historic craftsman homes in South Minneapolis or Northeast may require more prep — plaster repair, lead-safe practices, detailed millwork. We provide free written estimates for all Minneapolis homeowners." },
            { question: "How long does an interior painting project take in Minneapolis?", answer: "Most Minneapolis interior projects take two to five days depending on room count and prep requirements. We schedule around your household routine and provide a detailed timeline with every estimate." },
            { question: "Do you move furniture before interior painting in Minneapolis?", answer: "Yes — our crews handle light furniture moving and protect floors and furnishings with drop cloths throughout every interior project. We ask that you remove fragile or irreplaceable items before we arrive." },
            { question: "Do you paint historic homes in Minneapolis with plaster walls?", answer: "Yes — we regularly work in Minneapolis's historic craftsman homes, bungalows, and Tudor-style properties. We're experienced with plaster repair, lead-safe painting practices for pre-1978 homes, and working carefully around original woodwork and millwork." },
            { question: "Do you offer low-VOC interior paint options in Minneapolis?", answer: "Yes — we use Sherwin-Williams low-VOC and zero-VOC formulas on request, especially popular for nurseries, bedrooms, and households with allergy concerns. These coatings have minimal odor and allow families to return to their spaces quickly." },
            { question: "What Minneapolis neighborhoods do you serve for interior painting?", answer: "We serve all Minneapolis neighborhoods — Uptown, South Minneapolis, Northeast, Linden Hills, Kingfield, Tangletown, Seward, Longfellow, North Loop, Kenwood, and more. Free on-site estimates available throughout the city. Call (763) 200-4121 to schedule." },
        ],
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
                "item": "https://www.trinitypaintingmn.com/locations/minneapolis-mn"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Minneapolis Interior Painting",
                "item": "https://www.trinitypaintingmn.com/locations/minneapolis-interior-painting"
            }
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Interior Painting Minneapolis",
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <ServiceSchema service={minneapolisInteriorService} />
            <ServiceClient 
                service={minneapolisInteriorService} 
                ctaText="Get Your Free Minneapolis Interior Painting Quote"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Locations", href: "/locations/minneapolis-mn" },
                    { label: "Minneapolis Interior Painting", href: "/locations/minneapolis-interior-painting" }
                ]}
            />
        </>
    );
}
