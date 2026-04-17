import { Metadata } from "next";
import ServiceClient from "@/components/ServiceClient";
import { services } from "@/lib/services";
import { ServiceSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
    title: "Exterior Painting Minneapolis MN | Trinity Painting & Renewal",
    description: "Expert exterior house painting in Minneapolis, MN. Weather-tough Sherwin-Williams finishes built for MN winters. Serving the Twin Cities metro. Free estimates.",
    alternates: {
        canonical: "https://www.trinitypaintingmn.com/locations/minneapolis-exterior-painting",
    },
    openGraph: {
        title: "Exterior Painting Minneapolis MN | Trinity Painting & Renewal",
        description: "Expert exterior house painting in Minneapolis, MN. Weather-tough Sherwin-Williams finishes built for MN winters. Serving the Twin Cities metro. Free estimates.",
        url: "https://www.trinitypaintingmn.com/locations/minneapolis-exterior-painting",
        images: ["/hero-bg-new.png"],
    },
};

export default function MinneapolisExteriorPaintingPage() {
    const baseService = services.find(s => s.slug === "exterior-painting")!;

    const minneapolisExteriorService = {
        ...baseService,
        title: "Exterior House Painting in Minneapolis, MN",
        shortDescription: "High-performance exterior coatings engineered for the brutal Minnesota freeze-thaw cycle.",
        longContent: [
            {
                title: "Professional Minneapolis Exterior Painting Services",
                content: `Trinity Painting & Renewal specializes in shielding Minneapolis homes against the destructive forces of the Minnesota climate. Our primary exterior painting season runs from May through September, providing the ideal window for proper coating adhesion and curing. We understand the unique challenges presented by the local freeze-thaw cycle, which can cause inferior paints to crack and peel within a single season. \n\nTo combat this, we exclusively specify premium Sherwin-Williams Duration or Emerald Exterior coatings. These high-build formulas are engineered with advanced cross-linking technology that remains flexible during extreme temperature swings, preventing moisture intrusion and protecting your home's structural integrity. We proudly serve residential neighborhoods throughout South Minneapolis, Northeast, Robbinsdale, Crystal, and Golden Valley.`
            },
            {
                title: "What We Paint in the Twin Cities",
                content: `Our expertise extends far beyond simple siding. We provide comprehensive exterior renewals for: \n\n• Vinyl, Cedar, and James Hardie Siding\n• Exterior Windows, Trim, and Soffits\n• Front Doors and Entryways\n• Fences and Decks\n• Detached Garages and Outbuildings\n\nExperience the difference of [professional exterior painting services](/services/exterior-painting) designed for longevity.`
            },
            {
                title: "The Trinity Exterior Process",
                content: `Success in Minnesota exterior painting is 90% preparation. Our process includes thorough power washing, scraping of loose debris, and precision priming of all raw substrates. We strictly adhere to manufacturer specifications, ensuring that surface temperatures remain above 35°F during application and initial drying. This commitment to technical excellence ensures your two-coat finish will look beautiful for years, not just months.`
            }
        ],
        bottomContent: {
            title: "Trusted Minneapolis Painting Contractor",
            content: `Need interior work as well? Trinity is your go-to [Minneapolis painting contractor](/locations/minneapolis-mn) for whole-home renewals, including cabinetry and ceiling restorations.`
        },
        faqs: [
            { question: "How much does exterior painting cost in Minneapolis, MN?", answer: "Exterior painting in Minneapolis typically runs $4,000 to $15,000+ depending on the home's size, siding type, and condition. Historic stucco and wood-sided homes common throughout Minneapolis require careful prep. We include pressure washing, scraping, caulking, and priming in every exterior estimate." },
            { question: "What is the best time of year for exterior painting in Minneapolis?", answer: "In Minneapolis, we paint exteriors from late May through early October when temperatures stay above 50°F and humidity is manageable. We monitor weather closely and schedule projects to avoid moisture-related adhesion issues. Most exterior projects book weeks in advance during peak season." },
            { question: "Do you pressure wash and prep before exterior painting in Minneapolis?", answer: "Yes — thorough pressure washing is included in every exterior project. We also scrape loose paint, sand rough areas, caulk gaps around windows and trim, and prime bare wood before applying any topcoat. Prep is 70% of what makes a paint job last." },
            { question: "How long does an exterior paint job last on a Minneapolis home?", answer: "A properly prepped exterior using premium Sherwin-Williams coatings like Duration or Emerald should last 7 to 10 years on a Minneapolis home, even through harsh Minnesota freeze-thaw cycles. We back our work with a written workmanship warranty." },
            { question: "Do you repair wood rot before painting the exterior in Minneapolis?", answer: "Yes — we perform minor carpentry and wood rot repair as part of our exterior projects. Minneapolis's older housing stock frequently has moisture damage behind siding and around windows. If we find significant structural damage, we'll communicate clearly and can recommend trusted local carpenters." },
            { question: "What Minneapolis neighborhoods do you serve for exterior painting?", answer: "We serve all Minneapolis neighborhoods — South Minneapolis, Northeast, Uptown, Linden Hills, Kenwood, Seward, Longfellow, Tangletown, and more. We're experienced with the diverse siding types found across the city, from historic stucco to cedar to James Hardie. Free on-site estimates available — call (763) 200-4121." },
        ],
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Exterior Painting Minneapolis",
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
            <ServiceSchema service={minneapolisExteriorService} />
            <ServiceClient 
                service={minneapolisExteriorService} 
                ctaText="Get a Free Minneapolis Exterior Painting Quote"
                breadcrumb={[
                    { label: "Home", href: "/" },
                    { label: "Locations", href: "/locations/minneapolis-mn" },
                    { label: "Minneapolis Exterior Painting", href: "/locations/minneapolis-exterior-painting" }
                ]}
            />
        </>
    );
}
