import {
    PaintBucket,
    ShieldCheck,
    Clock,
    Trash2,
    Hammer,
    Heart,
    HomeIcon,
    ChefHat,
    Building2,
    Layers,
    Frame,
    Sparkles,
    Shield,
    Users,
    Gem
} from "lucide-react";

export const ICON_MAP: Record<string, any> = {
    PaintBucket,
    ShieldCheck,
    Clock,
    Trash2,
    Hammer,
    Heart,
    HomeIcon,
    ChefHat,
    Building2,
    Layers,
    Frame,
    Sparkles,
    Shield,
    Users,
    Gem
};

export interface ServiceSection {
    title: string;
    content: string;
}

export interface ServiceFAQ {
    question: string;
    answer: string;
}

export interface ProcessStep {
    title: string;
    description: string;
    icon: string;
}

export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    icon: string;
    features: string[];
    process: ProcessStep[];
    benefits: { title: string; content: string; icon: string }[];
    longContent: ServiceSection[];
    galleryImages?: string[];
    faqs: ServiceFAQ[];
    seoData: {
        title: string;
        description: string;
        keywords: string[];
    };
}

export const services: Service[] = [
    {
        slug: "interior-painting",
        title: "Interior Painting",
        shortDescription: "Personalized color schemes and meticulous preparation for a flawless finish.",
        description: "From cozy bedrooms to open-concept living spaces, we bring new life to your interiors with premium finishes and God-honoring craftsmanship.",
        image: "/service-interior.jpeg",
        icon: "PaintBucket",
        features: [
            "Wall & Ceiling Painting",
            "Trim, Baseboards & Molding",
            "Accent Walls & Texture",
            "Low-VOC Premium Paints"
        ],
        process: [
            {
                title: "Personal Consultation",
                description: "We discuss your vision, color palettes, and lighting to ensure the perfect mood for your home.",
                icon: "Sparkles"
            },
            {
                title: "Surgical Preparation",
                description: "Masking, floor protection, and surface repair. A perfect finish starts with a perfect canvas.",
                icon: "Shield"
            },
            {
                title: "Master Application",
                description: "Using premium tools and high-performance paints for deep, rich colors and even texture.",
                icon: "PaintBucket"
            },
            {
                title: "Quality Walkthrough",
                description: "We don't leave until every line is crisp and your space is cleaner than we found it.",
                icon: "Gem"
            }
        ],
        benefits: [
            {
                title: "Odor-Free Safety",
                content: "We use low-VOC paints that are safe for your children and pets.",
                icon: "ShieldCheck"
            },
            {
                title: "Clean Environment",
                content: "Our team maintains a tidy workspace with minimal disruption to your life.",
                icon: "Trash2"
            }
        ],
        longContent: [
            {
                title: "Professional Interior House Painting in East Central Minnesota",
                content: `When searching for interior painting services in Mora, Cambridge, Pine City, and surrounding communities in East Central Minnesota, homeowners face a daunting choice. Many contractors prioritize speed and volume over the meticulous details required to produce a truly high-end finish. At Trinity Painting & Renewal, we hold a fundamentally different philosophy. Rooted in the Colossians 3:23 work ethic—working "for the Lord, not for men"—our interior painting services are defined by God-honoring craftsmanship. \n\nYour home is your sanctuary, a place where life happens, where families gather, and where you deserve absolute peace of mind. We approach every interior residential painting project with an uncompromising dedication to protecting your property and delivering flawless aesthetics. We never hire cheap, unverified labor. Our team consists strictly of verified American citizens who respect you, your family, and your living space. We act as stewards of your property, treating the drywall, trim, and ceilings not just as surfaces to coat, but as architectural elements to restore and enhance.`
            },
            {
                title: "Exclusively American-Made Sherwin-Williams Coatings",
                content: `In our commitment to long-term quality over short-term profits, we refuse to use subpar "contractor grade" materials that break down, lose color vibrancy, or emit strong chemical odors. We exclusively rely on American-made Sherwin-Williams interior paints. By offering our clear Good/Better/Best stewardship pricing tiers (SuperPaint/Latitude, Duration, and Emerald/Rain Refresh), we empower Minnesota homeowners to select the exact level of protection and finish they desire.\n\nWhether you are repainting a single master bedroom, updating the color scheme of a vaulted living room, or undertaking a full home interior renewal for maximum Realtor ROI before a sale, our material selection guarantees superior washability, scuff resistance, and vibrant true-to-color pigmentation. Sherwin-Williams Emerald, for instance, provides exceptional stain-blocking technology and antimicrobial agents that inhibit the growth of mold and mildew on the paint surface—a critical feature for Minnesota bathrooms and basements.`
            },
            {
                title: "The Definition of the Trinity Seal Promise",
                content: `Our interior painting methodology is surgical. While the final coat of paint is what guests see, the underlying preparation is what determines the longevity and smoothness of the finish. Our "Surgical Preparation" phase involves obsessive masking of floors, sealing off rooms with plastic to prevent dust migration, deep-cleaning surfaces, stripping old wallpaper paste, bridging gaps with premium elastomeric caulk, and meticulous spackling of drywall imperfections.\n\nA paint job is only as good as the foundation it rests upon. By the time our brushes and rollers touch your walls, the environment is perfectly controlled. Under the Trinity Seal of Integrity, our promise to you is simple: if the project isn't right, we fix it—prioritizing our commitment to your home's excellence over our own bottom line. No corporate jargon. No hidden fees. Just honest craftsmanship delivered by local tradesmen.`
            },
            {
                title: "Transforming Spaces with Precision and Purpose",
                content: `Interior residential painting requires an eye for detail that extends well beyond simply rolling color onto a wall. Cutting in sharp, distinct lines where the wall meets the ceiling, ensuring uniform coverage without lap marks, and carefully painting around delicate fixtures requires years of professional experience. We pride ourselves on executing these intricate details flawlessly.\n\nWe understand that allowing contractors into your home is an exercise in trust. From the moment we arrive in our American-built Ford trucks to the final walkthrough, we communicate directly and transparently. We respect the rhythm of your household, maintaining clean job sites. Furthermore, aligned with our Sabbath Rest Policy, our crews never work on Sundays, ensuring that when we arrive at your home on Monday morning, we are refreshed, focused, and ready to outwork the competition.`
            }
        ],
        galleryImages: [
            "/gallery/interior/1b1e4fcc-0610-40a6-94f4-90364ed716c9.jpeg",
            "/gallery/interior/01e3e79a-effc-4741-a81a-f8c28c1a94a6.jpeg",
            "/gallery/interior/3a979fbe-7513-49e7-9ff4-3b00b5a4baa7.jpeg",
            "/gallery/interior/5e839602-56c2-4a76-9626-5d4a49bfafdc.jpeg",
            "/gallery/interior/5f04c5ed-596f-4426-be03-2e1f86df1397.jpeg",
            "/gallery/interior/9ae333c9-8772-4b06-a88f-ecd20bd2aca0.jpeg",
            "/gallery/interior/9e3f9ed0-4fdd-4a32-8ead-cb3b46eb883e.jpeg",
            "/gallery/interior/29bb6f79-cace-4ac6-8659-cda2c66a4fcb.jpeg",
            "/gallery/interior/73b23a04-1e80-4dc4-8347-d8a481fb961d.webp",
            "/gallery/interior/87e78f09-62eb-41a8-a54d-7c9fd7d7ea2a.jpeg"
        ],
        faqs: [
            {
                question: "How long does it take to paint a typical living room?",
                answer: "Most medium-sized living rooms can be completed in 1-2 days, depending on the amount of furniture, drywall repair requirements, and ceiling height. We prioritize efficiency without ever cutting corners on prep work."
            },
            {
                question: "Do I need to buy the paint myself?",
                answer: "No. We exclusively source American-made Sherwin-Williams products to ensure we are using the highest quality premium lines. We pass on our contractor insights to help you choose the tier (Good/Better/Best) that fits your stewardship goals. The final color choice is entirely yours."
            },
            {
                question: "Do you repair drywall damage before painting?",
                answer: "Absolutely. Proper adhesion and a flawless finish require a pristine surface. We repair nail holes, stress cracks, dings, and previous water stain damage prior to priming and painting."
            },
            {
                question: "Is the paint safe for my family and pets?",
                answer: "Yes. Our premium Sherwin-Williams paint choices include Low-VOC and Zero-VOC options that significantly reduce any lingering odors and ensure a safe, breathable environment for your home immediately after application."
            }
        ],
        seoData: {
            title: "Interior Painting Services Mora MN | Home Painters",
            description: "Expert interior painting in Mora, Cambridge & East Central MN. Professional painters specializing in residential refreshes, drywall repair, and Sherwin-Williams premium finishes.",
            keywords: ["Interior Painting Mora MN", "House Painters Cambridge MN", "Residential Painting Minnesota", "Drywall Repair Painters", "Local MN Painters", "Sherwin Williams Painters"]
        }
    },
    {
        slug: "exterior-painting",
        title: "Exterior House Painting",
        shortDescription: "Weather-resistant coatings that protect your home and boost curb appeal.",
        description: "Protect your largest investment from Minnesota's harsh seasons with durable, weather-tested exterior coatings applied with precision.",
        image: "/service-exterior.png",
        icon: "HomeIcon",
        features: [
            "Full House Exterior",
            "Siding & Trim Painting",
            "Deck & Fence Staining",
            "Pressure Washing"
        ],
        process: [
            {
                title: "Surface Restoration",
                description: "Deep pressure washing, mold removal, and scraping to strip old, peeling residue.",
                icon: "Sparkles"
            },
            {
                title: "Sealing & Priming",
                description: "Applying high-quality elastomeric caulk to joints and high-build primer to bare wood to prevent moisture intrusion.",
                icon: "Shield"
            },
            {
                title: "Durable Coating",
                description: "Sprayed and back-rolled application using Sherwin-Williams exterior formulas for deep penetration and a protective shell.",
                icon: "PaintBucket"
            },
            {
                title: "Site Cleanup",
                description: "We pick up every paint chip and mask. Your yard will look pristine.",
                icon: "Trash2"
            }
        ],
        benefits: [
            {
                title: "Climate Ready",
                content: "Our exterior coatings handle the extreme temperature swings of Minnesota winters and summers.",
                icon: "ShieldCheck"
            },
            {
                title: "Increased ROI",
                content: "Boost your home's resale value and curb appeal significantly with a modern, fresh exterior.",
                icon: "Gem"
            }
        ],
        longContent: [
            {
                title: "Elite Exterior Painting Defense for Minnesota Weather",
                content: `Your home's exterior is not just an aesthetic feature—it is the primary line of defense against the relentless climate of East Central Minnesota. From baking summer humidity to sub-zero blizzards, our regional weather aggressively degrades low-quality paint, leading to siding rot, water intrusion, and structural damage. Exterior painting is, fundamentally, an act of home preservation. \n\nAt Trinity Painting & Renewal, we treat your property with the stewardship it commands. We do not offer quick, cheap "spray and pray" applications. A failed paint job costs homeowners thousands in siding repair. Our exterior painting services in Mora, Cambridge, and the surrounding areas are designed for absolute permanence, utilizing only the most resilient, American-made Sherwin-Williams exterior formulas like Duration and Emerald Rain Refresh to build an impenetrable shield against the elements.`
            },
            {
                title: "The Ultimate Exterior Preparation Process",
                content: `Preparation dictates 90% of an exterior paint job's lifespan. We begin every project with deep exterior pressure washing to eradicate mold, mildew, chalking, and airborne pollutants. Once dry, our verified, local Minnesota crews address failing areas through meticulous scraping, sanding, and the application of slow-drying, penetrating exterior primers that lock down the surface.\n\nMoisture is the enemy of any Minnesota home. Therefore, we recaulk failing vertical and horizontal seams, window frames, and door casings using premium elastomeric caulks that stretch with the natural expansion and contraction of your home's siding. Without this level of detail—which many volume-based corporate crews bypass to save time—even the best paint will eventually peel. We prioritize God-honoring craftsmanship, meaning we do the hard, tedious prep work completely and correctly, strictly adhering to our Projects Over Profits philosophy.`
            },
            {
                title: "Advanced Application Techniques for True Protection",
                content: `Once the foundation is flawless, we employ advanced application techniques. Depending on your siding type—whether it's LP SmartSide, James Hardie fiber cement, traditional wood clapping, or stucco—we utilize a specialized spray and back-roll method. Spraying ensures highly uniform, thick mil coverage, while back-rolling physically forces the coating deep into the grain and pores of the siding substrate.\n\nThis labor-intensive method creates a profound mechanical bond that resists peeling and blistering. With options like Sherwin-Williams Emerald Rain Refresh, which features self-cleaning technology that washes away dirt upon contact with rain, your home's exterior will not only be protected but will maintain a freshly-painted appearance year after year.`
            },
            {
                title: "Maximizing Realtor ROI with Modern Curb Appeal",
                content: `Beyond protection, a high-quality exterior paint job is one of the most effective ways to instantly increase a property's market value. Local realtors consistently note the immense ROI of a fresh, modern color palette when listing a home. Whether you are looking to sell quickly or simply upgrading your forever home, our aesthetic transformations are striking.\n\nFrom modernizing brick with breathable masonry coatings to striking color contrasts on trim and shutters, we handle it all. We back all of our exterior work with The Trinity Seal of Integrity: if it isn't completely right, we return and fix it. Partner with a local American business that stands unapologetically for faith, high standards, and community.`
            }
        ],
        galleryImages: [
            "/gallery/exterior/0beb257d-a895-4a31-857d-5b706f1b2523.jpeg",
            "/gallery/exterior/0cea2fac-451c-4928-8179-31680c7a4033.jpeg",
            "/gallery/exterior/2ea1a261-c820-4fc8-9436-b32d7f80358f.jpeg",
            "/gallery/exterior/5d23ac96-e783-47eb-9f5b-27b8c7677e1e.jpeg",
            "/gallery/exterior/6aa24337-9d93-474b-b8ca-c695cad2a7c5.jpeg",
            "/gallery/exterior/7b1ca560-86b3-4eec-8467-7079e3e2093e.jpeg",
            "/gallery/exterior/028a4038-e7de-4ae6-b74a-b41a9e9d1e52.jpeg",
            "/gallery/exterior/69b6234d-68b7-4a47-a46a-809426209d90.jpeg",
            "/gallery/exterior/093ed1b4-95c6-43bf-be76-a8476e4af72a.jpeg",
            "/gallery/exterior/1349a284-f229-43d7-b9f9-06f941e8d18b.jpeg",
            "/gallery/exterior/99467dc4-46e3-4453-a99c-b28488f85f39.jpeg",
            "/gallery/exterior/527202f2-6960-48c4-92e8-4010f990d5b7.jpeg",
            "/gallery/exterior/45816188-f00d-4fcb-a8ca-1f64ac58358b.jpeg",
            "/gallery/exterior/b5fabe65-e579-4a3e-b551-c53cf31fa467.jpeg",
            "/gallery/exterior/c7f1f3fb-419e-4c0f-aed2-9b84cfb1b23f.png",
            "/gallery/exterior/db0471b9-ce28-4392-8437-a6c6c3ff7a88.jpeg",
            "/gallery/exterior/e1a32812-1028-4cfe-ae0e-6d244d01d084.jpeg"
        ],
        faqs: [
            {
                question: "What temperature is too cold for exterior painting in Minnesota?",
                answer: "We typically require temperatures to stay above 40°F-50°F during application and for at least 24 hours after, depending on the specific Sherwin-Williams product used. In Minnesota, the ideal season is late May through early October."
            },
            {
                question: "Do you spray or roll?",
                answer: "We almost always do both. We use professional airless sprayers to apply a heavy, even coat, and then immediately back-roll the wet paint into the siding to push it into the wood grain or texture for maximum adhesion."
            },
            {
                question: "Will you replace rotten wood before painting?",
                answer: "We perform minor carpentry and wood rot repair. If we uncover significant structural damage or vast amounts of degraded siding, we will clearly communicate with you and can leverage our Christian Trade Network to recommend trusted carpenters to correct the issue properly before we seal the home."
            },
            {
                question: "How often should a house exterior be painted?",
                answer: "In the harsh Minnesota climate, a highly professional paint job using top-tier materials like Sherwin-Williams Emerald should last 7 to 10 years, depending on sun exposure and moisture levels."
            }
        ],
        seoData: {
            title: "Exterior House Painting Mora MN | Weather-Resistant Coatings",
            description: "Protect your home with professional exterior painting in Mora, MN. Durable siding and trim coatings designed for Minnesota winters. Free estimates available.",
            keywords: ["Exterior Painting Mora MN", "Siding Painting Mora", "House Painters Cambridge MN", "Deck Staining Mora", "Minnesota Exterior Painters", "Sherwin Williams Exterior Paint"]
        }
    },
    {
        slug: "cabinet-refinishing",
        title: "Kitchen Cabinet Refinishing",
        shortDescription: "Modernize your kitchen for a fraction of the cost of a full renovation.",
        description: "Get a factory-smooth, showroom-ready kitchen by refinishing your existing cabinets with industrial-grade premium coatings.",
        image: "/service-cabinet.webp",
        icon: "ChefHat",
        features: [
            "Factory-Smooth Finish",
            "Kitchen & Bath Updates",
            "Hardware Installation",
            "Color Transformations"
        ],
        process: [
            {
                title: "De-Greasing & Prep",
                description: "Intense chemical cleaning to remove decades of kitchen oils and cooking grease, followed by meticulous sanding.",
                icon: "Sparkles"
            },
            {
                title: "Masking & Protection",
                description: "Creating a sealed environment in your kitchen to prevent any overspray and dust from reaching the rest of your home.",
                icon: "Shield"
            },
            {
                title: "Industrial Priming",
                description: "Applying high-adhesion stain-blocking primers designed specifically to grip old woodwork and block tannin bleed.",
                icon: "Layers"
            },
            {
                title: "State-of-the-Art Spray",
                description: "We use professional fine-finish spray systems to apply hard-enamel coatings for a perfectly smooth, stroke-free finish.",
                icon: "PaintBucket"
            }
        ],
        benefits: [
            {
                title: "Massive Cost Savings",
                content: "Save up to 70% compared to the cost of tearing out and replacing solid wood cabinets.",
                icon: "Banknote"
            },
            {
                title: "Factory Durability",
                content: "Our specific cabinet enamels cure to a diamond-hard finish that resists chipping and scratching.",
                icon: "ShieldCheck"
            }
        ],
        longContent: [
            {
                title: "Breathe New Life Into Your Kitchen with Cabinet Refinishing",
                content: `The kitchen is the heart of the home, but dark, heavy, or outdated oak cabinets can make the entire space feel small and aged. Many homeowners assume the only way to modernize their kitchen is to endure the exorbitant cost and multi-month disruption of a full demolition and remodel. Trinity Painting & Renewal offers a vastly superior alternative: professional kitchen cabinet refinishing. \n\nWe specialize in transforming sturdy, existing cabinets into factory-smooth, showroom-quality focal points at a fraction of the replacement cost. Whether you desire a bright, modern white, a deep dramatic navy, or a sophisticated greige, we deliver an ultra-durable, flawless finish that cannot be replicated by DIY brushing or rolling. We view your kitchen remodel as a stewardship—bringing out the maximum potential of the assets you already own.`
            },
            {
                title: "The Industrial Application Process: Preparation is Everything",
                content: `Painting cabinets is highly specialized. Standard wall paint will peel right off a cabinet door within weeks. To achieve true durability, the process requires industrial execution. We begin with a rigorous degreasing process. Kitchens naturally accumulate invisible layers of cooking oils and hand grease over the years. If not chemically stripped and meticulously sanded, no primer will bond.\n\nOnce the wood is completely neutralized and sanded dead-flat, we apply a specialized, high-adhesion stain-blocking primer. This critical step locks in the natural wood tannins (especially important for oak and cherry) preventing them from bleeding through your new, bright finish. Following the primer, we sand the surfaces again to ensure absolute smoothness before the final coats. The result is a finish so smooth it looks and feels like it came directly from a high-end cabinet manufacturer.`
            },
            {
                title: "Fine-Finish Airless Spraying for a Flawless Result",
                content: `We do not brush or roll cabinet doors. To achieve our Trinity standard of God-honoring craftsmanship, we utilize advanced airless fine-finish spraying systems. This applies the premium Sherwin-Williams cabinet enamels in a highly atomized mist, resulting in a finish completely free of brush strokes, roller stipple, and lap marks.\n\nThe coatings we use cure into a highly scrubbable, impact-resistant shell. It stands up to the daily abuse of a busy family kitchen, resisting chips from pans and stains from spills. Furthermore, while the doors and drawer fronts are removed and sprayed in a controlled environment, we meticulously mask and seal off your kitchen to spray the cabinet boxes on-site, leaving your home spotless and free of overspray.`
            },
            {
                title: "Upgrade Hardware and Maximize Home Value",
                content: `As part of the refinishing process, we can also fill old hardware holes and drill new ones, allowing you to completely change the style of your handles and pulls. Switching from dated, center-mounted knobs to sleek, modern bar pulls drastically enhances the transformation.\n\nCabinet refinishing is heavily praised by Realtors for delivering one of the highest Returns on Investment possible in residential interior design. A bright, modernized kitchen sells a home faster than almost any other upgrade. Trust the local experts at Trinity Painting & Renewal to elevate your kitchen without the corporate fluff—just transparent pricing, honest communication, and American-made materials.`
            }
        ],
        galleryImages: [
            "/gallery/img1.jpeg",
            "/gallery/img2.jpeg",
            "/gallery/img3.jpeg"
        ],
        faqs: [
            {
                question: "Will the grain of my oak cabinets show through the paint?",
                answer: "Heavy oak grain is notorious for showing through paint. While our industrial primers and high-build enamels fill much of the grain, the natural texture of the wood will still lightly present. If you desire a 100% glass-flat surface, we offer an optional grain-filling process that fully conceals oak pores before painting."
            },
            {
                question: "How long will I be without my kitchen?",
                answer: "Typically, the on-site process for cabinet boxes takes 2-4 days. You will be able to use your appliances and sink in the evenings. The doors and drawers are taken off-site and reinstalled generally within 7-10 days."
            },
            {
                question: "Is the paint prone to chipping?",
                answer: "Because we use specialized, hardening cabinet enamels specifically formulated for cabinetry (not soft wall paint), the finish is highly resistant to chipping, scuffing, and peeling under normal use."
            },
            {
                question: "Do you install new hinges and hardware?",
                answer: "Yes, we can absolutely install new, hidden hinges or modern handles as part of the project to complete the updated look."
            }
        ],
        seoData: {
            title: "Kitchen Cabinet Refinishing & Painting Mora MN",
            description: "Transform your kitchen with professional cabinet painting and refinishing in Mora and Cambridge, MN. Save thousands compared to full replacement. High-durability finishes.",
            keywords: ["Cabinet Painting Mora MN", "Kitchen Cabinet Refinishing", "Cabinet Sprayers Minnesota", "Kitchen Remodel Mora", "Interior Painting Cabinets"]
        }
    },
    {
        slug: "commercial-painting",
        title: "Commercial Painting",
        shortDescription: "Professional-grade coatings for offices, retail, and commercial properties.",
        description: "Enhance your business's professional image with clean, durable painting solutions designed for minimal disruption to your operations.",
        image: "/service-commercial.jpeg",
        icon: "Building2",
        features: [
            "Office Space Refreshes",
            "Retail Color Schemes",
            "Industrial Coatings",
            "After-Hours Scheduling"
        ],
        process: [
            {
                title: "Logistical Planning",
                description: "We coordinate with your management to schedule work safely, avoiding disruption to your customers and staff.",
                icon: "Clock"
            },
            {
                title: "Asset Protection",
                description: "Thorough masking of inventory, electronics, displays, and flooring.",
                icon: "Shield"
            },
            {
                title: "High-Volume Application",
                description: "Utilizing professional spraying techniques to rapidly coat large warehouse ceilings and vast commercial walls.",
                icon: "PaintBucket"
            },
            {
                title: "Rapid Return to Service",
                description: "Clean up is swift. We ensure you are back in business immediately following cure times.",
                icon: "Gem"
            }
        ],
        benefits: [
            {
                title: "Minimal Disruption",
                content: "We offer tailored scheduling, including nights and weekends, so your business never stops.",
                icon: "Clock"
            },
            {
                title: "Elevated Brand Image",
                content: "A pristine environment builds trust with your clients and creates a better workspace for your employees.",
                icon: "Sparkles"
            }
        ],
        longContent: [
            {
                title: "Professional Commercial Painting Contractors in East Central MN",
                content: `Your commercial property is the physical manifestation of your brand. When clients, customers, or tenants walk into your office, retail store, or industrial facility, the condition of the environment directly influences their trust in your business. Scuffed, fading, or peeling walls send a message of neglect. Trinity Painting & Renewal partners with local Minnesota businesses to deliver high-performance commercial painting services that revive your building's aesthetic and protect your commercial assets. \n\nWe understand that commercial painting is vastly different from residential work. The primary concern for any business owner or property manager is operational downtime. Time is money, and closing your doors for maintenance is rarely an option. That is why we offer highly flexible, after-hours, and weekend scheduling. Our crew of verified Minnesota labor operates with surgical efficiency, executing the project quickly while maintaining our exacting Colossians 3:23 standards.`
            },
            {
                title: "Industrial & High-Traffic Durability",
                content: `Commercial spaces face intense daily wear and tear. A standard residential paint will be destroyed in weeks within a high-traffic hallway, restaurant, or factory floor. We exclusively utilize high-performance, commercial-grade coatings from Sherwin-Williams specifically engineered for impact resistance, repeated chemical washing, and scuff defense.\n\nFrom applying two-part epoxies and direct-to-metal (DTM) coatings on industrial stairwells and warehouse decking, to utilizing high-scrub, low-VOC acrylics in active medical offices to ensure zero patient disruption, we match the chemistry of the coating exactly to the demands of your facility. We never cut corners. Our "Projects Over Profits" standard applies heavily here: we will never specify an inadequate material just to win a low bid.`
            },
            {
                title: "Comprehensive Commercial Services",
                content: `We are equipped to handle a diverse range of commercial property painting in Mora, Cambridge, Princeton, and surrounding communities. Our portfolio includes local mom-and-pop storefronts, expansive warehouse dryfall ceiling painting, massive multi-tenant housing turnarounds, church sanctuaries, and corporate office refreshes.\n\nWe respect the rule of law and your liability. Trinity Painting & Renewal is fully licensed, heavily insured, and deeply committed to OSHA safety compliance. When our owner arrives in his American-built Ford truck to assess your property, you will receive a straightforward, honest bid devoid of "salesman" tactics. We communicate directly with general contractors, facility managers, and business owners to ensure our scopes of work are flawlessly integrated into your master operational plans.`
            },
            {
                title: "A Partnership Built on Local Values",
                content: `By hiring Trinity, you are choosing a local business that keeps investment right here in the Minnesota economy. We are a part of a wider Christian Trade Network—meaning if a project requires a trusted commercial electrician or carpenter prior to painting, we have vetted, high-integrity professionals ready for referral.\n\nWhether you need an exterior facelift to attract new foot traffic, or a complete interior redesign to modernize your corporate culture, Trinity Painting & Renewal provides reliable, honest, and impeccable commercial finishing.`
            }
        ],
        galleryImages: [
            "/gallery/commercial/3ed7e4b7-ff16-47e9-b180-59d4d7edee0d.jpeg",
            "/gallery/commercial/4a1696a0-9d3a-4f76-bcfe-f9a1de775bba.jpeg",
            "/gallery/commercial/5b1f5924-853a-4752-b1f5-7a20d9b626d9.jpeg",
            "/gallery/commercial/7b1ca560-86b3-4eec-8467-7079e3e2093e.jpeg",
            "/gallery/commercial/8aab3e7d-c0fc-4b94-8d5a-4cd1391e6a6a.jpeg",
            "/gallery/commercial/8ad5b878-8cb6-4bde-97a1-475ec08b52fc.jpeg",
            "/gallery/commercial/336e8796-ae73-48fd-8091-bfb811e66cd7.jpeg",
            "/gallery/commercial/410dfdaa-8aed-4952-8405-e0f8792b32d2.jpeg",
            "/gallery/commercial/454d7e1b-33c7-4c05-830e-63f8cba92a1a.jpeg",
            "/gallery/commercial/734fa508-1a57-42c5-b197-4b27df7ca973.jpeg",
            "/gallery/commercial/797bb9d1-20f6-41c4-aaeb-c8cbc0737184.jpeg",
            "/gallery/commercial/11205fae-5126-46de-a82a-6e1fb5f46098.jpeg",
            "/gallery/commercial/45400ee9-2c89-46c9-b659-5db94aa2133d.jpeg",
            "/gallery/commercial/b9812286-f0c1-4db0-b40d-5e557f541730.jpeg",
            "/gallery/commercial/bcf29dc2-86d1-4381-a2e6-3368fdf14f9e.jpeg",
            "/gallery/commercial/c6884583-6e8d-4c5f-9201-627edd0fa3b2.jpeg",
            "/gallery/commercial/d1070320-ee4d-4eb6-9ea0-f3c6d76fa6dd.jpeg"
        ],
        faqs: [
            {
                question: "Can you paint our commercial property after hours or on weekends?",
                answer: "Yes. In fact, most commercial projects demand it. We will schedule our crews to paint during your off-hours to ensure zero disruption to your daily operations. However, please note we adhere to a Sabbath Rest Policy and do not operate on Sundays to honor our faith, families, and team restoration."
            },
            {
                question: "Do you use low or no-odor paint for offices?",
                answer: "Absolutely. For occupied offices and medical facilities, we utilize advanced Zero-VOC and Low-VOC coatings from Sherwin-Williams that emit virtually no odor, ensuring total safety and comfort for your returning staff."
            },
            {
                question: "Can you handle high-ceiling warehouses or tall exteriors?",
                answer: "Yes, we are fully equipped with proper lifts, scaffolding, and commercial airless spraying systems to handle large-scale dryfall ceiling painting and high-elevation commercial exteriors."
            },
            {
                question: "Are you fully licensed and insured?",
                answer: "We are deeply committed to the rule of law and professional liability. We are fully licensed, carry heavy liability insurance specifically tailored for large commercial projects, and operate under strict OSHA safety protocols."
            }
        ],
        seoData: {
            title: "Commercial Painting Services Mora MN | Business Asset Protection",
            description: "Expert commercial painters in Mora, MN. We provide office, retail, and industrial painting solutions with minimal operational disruption.",
            keywords: ["Commercial Painting Mora MN", "Office Painters Minnesota", "Retail Painting Services", "Industrial Coatings MN", "Commercial Painting Contractors MN"]
        }
    },
    {
        slug: "ceiling-painting",
        title: "Ceiling Painting & Popcorn Removal",
        shortDescription: "Brighten any room from above with professional ceiling services.",
        description: "From vaulted spaces to popcorn removal and smooth finishes, we handle the most difficult areas of your home with precision and care.",
        image: "/service-interior.jpeg",
        icon: "Layers",
        features: [
            "Vaulted & High Ceilings",
            "Acoustic/Popcorn Removal",
            "Drywall Texture Matching",
            "Bright White Overlays"
        ],
        process: [
            {
                title: "Complete Floor Protection",
                description: "Heavy-duty poly and drop cloths to seal off the room and completely cover all flooring and furniture below.",
                icon: "Shield"
            },
            {
                title: "Scraping & Skim Coating",
                description: "Safe, wet scraping of old popcorn texture followed by meticulous skim coating of the drywall beneath.",
                icon: "Hammer"
            },
            {
                title: "Dead-Flat Priming",
                description: "Applying a high-build, dead-flat primer to hide drywall imperfections and seal the surface.",
                icon: "Layers"
            },
            {
                title: "Bright Final Coat",
                description: "Rolling an ultra-flat, bright ceiling paint that maximizes light diffusion and minimizes glare.",
                icon: "Sparkles"
            }
        ],
        benefits: [
            {
                title: "Modernize Instantly",
                content: "Removing 1980s popcorn ceilings instantly updates a home's aesthetic, making rooms feel larger and cleaner.",
                icon: "Gem"
            },
            {
                title: "Brighter Lighting",
                content: "Fresh, ultra-white ceiling paint drastically improves the natural and artificial light reflection in your space.",
                icon: "Sparkles"
            }
        ],
        longContent: [
            {
                title: "Professional Ceiling Painting and Acoustic Texture Removal",
                content: `Homeowners frequently ignore ceilings because painting them is notoriously exhausting, messy, and physically taxing. However, a dingy, yellowed, or heavily textured "popcorn" ceiling will constantly drag down the look of an otherwise beautifully updated room. Trinity Painting & Renewal provides expert ceiling painting and texture removal services throughout Mora, Cambridge, and East Central Minnesota, relieving you of the back-breaking labor and delivering a pristine, bright finish overhead. \n\nWe specialize in handling difficult high-elevation spaces, including vast vaulted ceilings, grand foyers, and stairwells. With our God-honoring craftsmanship, we recognize that the ceiling is the fifth wall of the room. A perfectly cut-in edge between a vivid wall color and a crisp white ceiling serves as the hallmark of a high-end, professional painting achievement.`
            },
            {
                title: "The Popcorn Ceiling Removal Process",
                content: `Nothing dates a home faster than acoustic "popcorn" texture. Its removal is heavily desired for increasing property value, but the process is intensely dirty. We completely handle the chaos. Our popcorn removal process begins by essentially creating a sealed "clean room" out of the space. Every inch of flooring, wall space, and furniture is wrapped and masked.\n\nWe then lightly dampen the texture to suppress dust and carefully scrape it away to reveal the raw drywall tape joints beneath. Because acoustic texture was originally used to hide terrible drywall finishing, the underlying ceiling is rarely smooth. Our crew of verified Minnesota labor then goes to work applying joint compound, skim coating, and sanding the ceiling until it achieves a beautifully modern, smooth profile.`
            },
            {
                title: "Solving the Water Stain and Nicotine Problem",
                content: `Ceilings are magnets for household damage. Old roof leaks leave aggressive brown water stains, while previous homeowners may have left behind nicotine and smoke damage that standard paint cannot cover. Trying to roll cheap ceiling paint over these issues simply reactivates the stain, pulling it right through your new paint job.\n\nAs part of our commitment to doing the project right—Projects Over Profits—we spot-treat these areas with industrial shellac and oil-based stain-blocking primers. This chemically locks the stain into the drywall, completely sealing away both the discoloration and the odor before we apply premium, dead-flat Sherwin-Williams ceiling coatings. The result is a flawless, uniform finish that permanently banishes old damage.`
            },
            {
                title: "The Flawless Dead-Flat Finish",
                content: `Unlike walls, ceilings require paint with virtually zero sheen. Any gloss or eggshell finish on a wide ceiling will catch the light from windows and lamps, highlighting every minor drywall inconsistency and raking light across the room. We utilize specific, ultra-flat ceiling paints that dry to a highly absorptive matte finish. This diffuses light evenly, softening the room overhead and establishing a sense of height and expansive space.\n\nDon't risk a ladder accident or the frustration of lap-marks overhead. Let the professionals at Trinity Painting & Renewal illuminate your home from the top down with clear communication, honest Christian pricing, and absolute attention to detail.`
            }
        ],
        galleryImages: [
            "/gallery/img4.jpeg",
            "/gallery/img5.jpeg",
            "/gallery/img6.jpeg"
        ],
        faqs: [
            {
                question: "Is popcorn ceiling removal messy?",
                answer: "Yes, incredibly messy. However, we mitigate that entirely by using extensive floor masking, plastic sheeting over walls, and sealing off doorways. You won't have to clean up a thing; we leave the house cleaner than we found it."
            },
            {
                question: "Do you test for asbestos before removing popcorn ceilings?",
                answer: "For homes built prior to 1980, popcorn texture often contained asbestos. In these cases, we strongly advise having a sample lab-tested. If asbestos is present, specialized remediation must occur before we can safely step in to skim and paint the smooth drywall."
            },
            {
                question: "Can you fix a hole in the ceiling before painting?",
                answer: "Yes, we routinely patch drywall holes from old light fixtures, plumbing leaks, or accidents. We will replace the drywall, tape, mud, and texture-match the area before painting so the patch completely disappears."
            },
            {
                question: "Why does my newly painted ceiling look streaky?",
                answer: "Streaky ceilings are signs of an amateur DIY application or cheap paint lacking coverage. It occurs from improper roller overlap (lap marks) and paint drying too fast. We use professional 18-inch rollers, premium high-build Sherwin-Williams paints, and keep a 'wet edge' to ensure the ceiling dries into one massive, uniform sheet of white."
            }
        ],
        seoData: {
            title: "Ceiling Painting & Popcorn Removal Mora MN",
            description: "Professional ceiling painting in Mora, MN. Specializing in vaulted ceilings, popcorn texture removal, and smooth finish restoration.",
            keywords: ["Ceiling Painting Mora MN", "Popcorn Removal Mora", "Vaulted Ceiling Painters", "Drywall Repair Ceilings"]
        }
    },
    {
        slug: "trim-frame-painting",
        title: "Trim & Door Frame Painting",
        shortDescription: "The finishing touch that elevates every room's architecture.",
        description: "Crisp, clean lines on baseboards, crown molding, and door frames that define the architectural character of your home.",
        image: "/service-trim.png",
        icon: "Frame",
        features: [
            "Baseboards & Casings",
            "Crown Molding Perfection",
            "Window Frames & Sills",
            "Interior Door Enamel"
        ],
        process: [
            {
                title: "Extensive Sanding",
                description: "De-glossing existing trim to ensure proper adhesion for new enamel coatings.",
                icon: "Sparkles"
            },
            {
                title: "Gap Eradication",
                description: "Caulking every seam where wood meets drywall, creating a flawless, built-in look.",
                icon: "Shield"
            },
            {
                title: "Hard Enamel Application",
                description: "Applying premium Sherwin-Williams ProClassic or Emerald Urethane for a rock-hard, scuff-resistant finish.",
                icon: "PaintBucket"
            },
            {
                title: "Laser Straight Lines",
                description: "Creating the absolute sharpest cut-in edge between the trim and the wall color.",
                icon: "Gem"
            }
        ],
        benefits: [
            {
                title: "High Durability",
                content: "Our enamels resist the scuffs of vacuums, pets, and children on your baseboards.",
                icon: "ShieldCheck"
            },
            {
                title: "Architectural Contrast",
                content: "Bright white trim creates a stunning, sharp contrast against modern wall colors.",
                icon: "Sparkles"
            }
        ],
        longContent: [
            {
                title: "Mastering the Details: Trim, Doors, and Crown Molding",
                content: `In the world of interior aesthetics, greatness is defined by the details. You can paint a room an incredibly beautiful, rich color, but if the baseboards are scuffed, the door frames are yellowing, and the crown molding has gaps, the entire visual impact collapses. At Trinity Painting & Renewal, we consider fine-finish trim painting to be the crown jewel of our residential interior services in East Central Minnesota. \n\nPainting trim requires a completely different skill set than rolling walls. It is a slow, methodical process that demands patience and God-honoring craftsmanship. Whether you are transitioning to modern white millwork from outdated 1990s honey oak, or simply refreshing existing white trim that has fallen victim to vacuum cleaners and busy family life, we deliver a flawless, high-durability finish.`
            },
            {
                title: "The Importance of Adhesion and Preparation",
                content: `The single biggest mistake amateur painters make is slapping latex wall paint over glossy, clear-coated wood trim. Within months, it will peel off in rubbery strips. To ensure permanent adhesion, our verified, local Minnesota craftsmen engage in rigorous preparation. Every inch of trim is degreased and heavily sanded to break the gloss of old clear coats or oil-based enamels.\n\nNext, we apply high-adhesion stain-blocking primers that fuse to the wood grain. Furthermore, we inspect all carpentry joints. Wood shifts over time in the extreme Minnesota climate, opening up ugly cracks in corners and where the trim meets the drywall. We bridge these gaps with premium, elastic caulk, creating a seamless, "built-in" look that makes the molding look like it was carved directly into the wall.`
            },
            {
                title: "Advanced Urethane Trim Enamels from Sherwin-Williams",
                content: `Baseboards and doors take heavy abuse. Standard wall paint is soft and porous; if applied to a door frame, it will quickly accumulate dirt from hand oils and inevitably chip. We exclusively utilize high-end, waterborne alkyd and urethane enamels from Sherwin-Williams, such as Emerald Urethane Trim Enamel.\n\nThese specialized coatings level out like an oil-based paint, naturally erasing brush strokes as they dry to form a rock-hard, impact-resistant shell. This ensures that your baseboards can withstand the rigors of pets, kids, and daily traffic, and your doors remain exceptionally easy to wash clean without breaking down the beautiful finish.`
            },
            {
                title: "The Ultimate Architectural Contrast",
                content: `Crisp, laser-straight paint lines are the signature of a Trinity Paint job. The contrast between a newly enameled, bright white door casing and a deeply saturated wall color is breathtaking. It frames the room, highlighting the home's architecture.\n\nWe provide honest, transparent estimates for upgrading your entire home's millwork. We skip the "salesman" fluff and rely purely on our expertise and dedication to the Colossians 3:23 standard. Upgrade your home's trim and doors today with a team driven by local values, protecting the investment of neighbors serving neighbors.`
            }
        ],
        galleryImages: [
            "/gallery/img7.jpeg",
            "/gallery/img8.jpeg",
            "/gallery/img9.jpeg"
        ],
        faqs: [
            {
                question: "Can you paint over my stained oak trim to make it white?",
                answer: "Yes, this is one of our most requested services. It is an intensive process involving deglossing, deep sanding, and aggressive stain-blocking primers to stop the wood tannins from bleeding through. When finished, it completely modernizes the home."
            },
            {
                question: "Will you spray or brush the trim?",
                answer: "If the home is empty before a move-in or a major remodel, we prefer to mask off the house and spray the trim for a flawless factory finish. In occupied homes, to minimize disruption, we utilize high-quality fine finish brushes and leveling enamels that flatten out elegantly to mimic a sprayed look."
            },
            {
                question: "What sheen is best for doors and trim?",
                answer: "Satin or Semi-Gloss. These sheens provide a smooth, hard surface that naturally reflects light (highlighting the architecture) and creates a washable barrier against hand dirt and scuffs."
            },
            {
                question: "Do you take the doors off the hinges to paint them?",
                answer: "Yes. For the best result, we remove the doors, remove all doorknobs and hardware, and paint them flat to prevent runs and sags in the heavy enamel. We then carefully re-hang them once cured."
            }
        ],
        seoData: {
            title: "Trim, Door & Crown Molding Painting Mora MN",
            description: "Expert trim and door painting in Mora, MN. Specialized fine-finish enamels for crown molding, baseboards, and converting oak to white millwork.",
            keywords: ["Trim Painting Mora MN", "Baseboard Painting Mora", "Crown Molding Painters", "Door Painting Services", "Oak to White Paint"]
        }
    }
];
