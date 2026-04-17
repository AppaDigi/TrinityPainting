"use client";

import ServiceClient from "@/components/ServiceClient";
import { services, ServiceFAQ } from "@/lib/services";
import { ServiceSchema } from "@/components/SchemaMarkup";
import { siloData } from "@/data/silo-content";
import { locationData } from "@/data/location-content";

interface LocationSiloProps {
    citySlug: string; // e.g. 'edina'
    serviceSlug: string; // 'interior', 'exterior', 'cabinet'
    baseServiceSlug: string; // 'interior-painting', 'exterior-painting', 'cabinet-refinishing'
}

function getSiloFaqs(citySlug: string, serviceSlug: string, cityName: string): ServiceFAQ[] {
    if (serviceSlug === "interior") {
        return [
            { question: `How much does interior painting cost in ${cityName}, MN?`, answer: `Interior painting in ${cityName} typically ranges from $2 to $6 per square foot depending on room count, ceiling height, and finish level. Surface prep — patching plaster, sealing stains, priming bare wood — is included in every written estimate. Contact us for a free quote.` },
            { question: `How long does an interior painting project take in ${cityName}?`, answer: `Most interior projects in ${cityName} take two to five days depending on the number of rooms and prep requirements. We provide a detailed schedule with every estimate so you know exactly when to expect us and when we'll be done.` },
            { question: `Do you move furniture before interior painting in ${cityName}?`, answer: `Yes — our crews handle light furniture moving as part of every interior project. We place drop cloths over floors and furnishings to protect your belongings throughout the project.` },
            { question: `Do you paint ceilings and trim during an interior project in ${cityName}, MN?`, answer: `Yes — we paint walls, ceilings, baseboards, crown molding, window casings, and doors. Trim and ceiling work are priced as part of the overall estimate. We use Sherwin-Williams enamels for trim and ceilings for a crisp, durable finish.` },
            { question: `Can you match existing paint colors in my ${cityName} home?`, answer: `Yes — we can match virtually any existing color using Sherwin-Williams color matching technology. For homeowners who want to update their palette entirely, we offer color consultation and bring samples to your home to view in your actual lighting before committing.` },
            { question: `Are you a licensed interior painting contractor in ${cityName}, MN?`, answer: `Yes — we are fully licensed by the State of Minnesota and carry general liability insurance and workers' compensation on every project. We serve ${cityName} and the surrounding area with free on-site estimates. Call (763) 200-4121 to schedule.` },
        ];
    }
    if (serviceSlug === "exterior") {
        return [
            { question: `How much does exterior painting cost in ${cityName}, MN?`, answer: `Exterior painting in ${cityName} typically runs $3,000 to $10,000 for a standard single-family home, depending on size, siding type, number of stories, and surface condition. We include all prep — pressure washing, scraping, caulking, and priming — in every exterior estimate.` },
            { question: `What is the best time of year for exterior painting in ${cityName}, MN?`, answer: `In ${cityName}, we paint exteriors from late May through early October when temperatures stay above 50°F and humidity is manageable. We monitor weather closely and schedule projects to avoid moisture-related adhesion issues.` },
            { question: `Do you pressure wash before exterior painting in ${cityName}?`, answer: `Yes — thorough pressure washing is included in every exterior painting project in ${cityName}. We also scrape loose paint, sand rough areas, caulk gaps around windows and trim, and prime bare wood before applying any topcoat.` },
            { question: `How long does an exterior paint job last on a ${cityName} home?`, answer: `A properly prepped exterior using premium Sherwin-Williams coatings like Duration or Emerald should last 7 to 10 years on a ${cityName} home. We back our work with a written workmanship warranty.` },
            { question: `Do you repair wood rot before painting the exterior in ${cityName}, MN?`, answer: `Yes — we perform minor carpentry and wood rot repair as part of our exterior projects. If we discover significant structural damage, we'll clearly communicate the issue and can recommend trusted local carpenters before proceeding with painting.` },
            { question: `Are you licensed for exterior painting in ${cityName}, MN?`, answer: `Yes — we are fully licensed by the State of Minnesota and carry general liability insurance and workers' compensation on every project. We serve ${cityName} and the surrounding area. Free on-site estimates available — call (763) 200-4121.` },
        ];
    }
    if (serviceSlug === "cabinet") {
        return [
            { question: `How much does cabinet refinishing cost in ${cityName}, MN?`, answer: `Cabinet refinishing in ${cityName} typically runs $1,500 to $5,000 depending on the number of doors, drawer fronts, and linear feet of cabinet boxes. For most kitchens, refinishing costs 10–20% of what full cabinet replacement would — with similarly dramatic results.` },
            { question: `How long does cabinet painting take in ${cityName}, MN?`, answer: `Most cabinet refinishing projects in ${cityName} take 7 to 10 days. We remove doors and drawers for off-site spraying, paint the boxes in place, then reinstall everything once cured. Your kitchen remains accessible for basic use throughout.` },
            { question: `Will the grain in my oak cabinets show through the paint in ${cityName}?`, answer: `Oak grain is porous and can show through standard paint. We use high-build industrial primers and multiple coats of enamel to minimize this, and offer an optional grain-filling process for a completely smooth finish. We discuss this option during your free estimate.` },
            { question: `Can I stay in my home during cabinet painting in ${cityName}, MN?`, answer: `Yes — cabinet refinishing is minimally disruptive. Doors and drawers are removed and painted off-site. You can use your appliances and sink each evening. Most ${cityName} homeowners stay in their homes throughout the project.` },
            { question: `Is cabinet refinishing a good investment for a ${cityName} home?`, answer: `Yes — cabinet refinishing offers one of the highest returns of any home improvement in ${cityName}. A fresh modern finish dramatically updates your kitchen and adds real appeal to buyers. The cost is a fraction of replacement.` },
            { question: `Do you offer a warranty on cabinet refinishing in ${cityName}, MN?`, answer: `Yes — all cabinet refinishing in ${cityName} is backed by a written workmanship warranty. We use professional-grade cabinet enamels specifically formulated for high-durability finish. If anything chips or peels due to workmanship, we'll make it right.` },
        ];
    }
    return [];
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
        },
        faqs: getSiloFaqs(citySlug, serviceSlug, location.city),
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
