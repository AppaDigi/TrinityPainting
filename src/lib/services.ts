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
                title: "Professional Interior Painting in Mora, MN: Elevate Your Home",
                content: "When it comes to interior painting in Mora and the surrounding East Central Minnesota area, Trinity Painting & Renewal stands out by combining integrity-driven service with high-end architectural aesthetics. Your home is your sanctuary, and our mission is to refresh that sanctuary with colors that inspire and quality that lasts. We specialize in transforming dated rooms into modern, vibrant spaces using the industry's best materials from Sherwin-Williams and Benjamin Moore."
            },
            {
                title: "Why Detail Matters",
                content: "Most painters see a wall; we see an investment in your comfort. Our exhaustive preparation process includes filling every nail hole, repairing drywall imperfections, and precision taping. This ensures that the beautiful gold accents or deep navy walls you've dreamed of have the sharpest possible edges and most uniform finish. Whether it's a single accent wall or a full-home renovation, we treat every square inch with the same level of devotion."
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
                answer: "Most medium-sized living rooms can be completed in 1-2 days, depending on the amount of furniture and ceiling height. We prioritize efficiency without ever cutting corners on prep work."
            },
            {
                question: "Do I need to buy the paint myself?",
                answer: "No, we prefer to source the materials ourselves to ensure we're using the highest contractor-grade premium lines that offer the best durability and color retention. However, the final color choice is entirely yours!"
            }
        ],
        seoData: {
            title: "Interior Painting Services Mora MN | Trinity Painting & Renewal",
            description: "Expert interior painting in Mora, MN. Professional painters specializing in residential refreshes, trim work, and premium finishes. Request your free quote today.",
            keywords: ["Interior Painting Mora MN", "House Painters Mora", "Residential Painting Minnesota", "Kitchen Painting Services"]
        }
    },
    {
        slug: "exterior-painting",
        title: "Exterior Painting",
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
                description: "Pressure washing and scraping to remove old residue and prepare the siding for a fresh bond.",
                icon: "Sparkles"
            },
            {
                title: "Sealing & Priming",
                description: "Applying high-quality caulk and primer to prevent moisture intrusion and ensure longevity.",
                icon: "Shield"
            },
            {
                title: "Durable Coating",
                description: "Sprayed and back-rolled application for deep penetration and a uniform, protective shell.",
                icon: "PaintBucket"
            }
        ],
        benefits: [
            {
                title: "Climate Ready",
                content: "Our coatings handle the -30°F to 100°F temperature swings of Minnesota.",
                icon: "ShieldCheck"
            },
            {
                title: "Increased Value",
                content: "Boost your home's resale value and curb appeal significantly with a modern exterior.",
                icon: "Gem"
            }
        ],
        longContent: [
            {
                title: "Exterior House Painters in Mora & Cambridge, MN",
                content: "In regions like East Central Minnesota, your home's exterior is its first line of defense. Peeling paint isn't just an eyesore; it's a vulnerability to wood rot and moisture damage. Trinity Painting & Renewal provides comprehensive exterior solutions that don't just look good on day one—they provide protection for years to come. We are fully licensed and insured, giving you peace of mind while we transform your home's facade."
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
                question: "What temperature is too cold for exterior painting?",
                answer: "We typically require temperatures to stay above 50°F during application and for at least 24 hours after. In Minnesota, the ideal season is late May through early October."
            }
        ],
        seoData: {
            title: "Exterior House Painting Mora MN | Weather-Resistant Coatings",
            description: "Protect your home with professional exterior painting in Mora, MN. Durable siding and trim coatings designed for Minnesota winters. Free estimates available.",
            keywords: ["Exterior Painting Mora MN", "Siding Painting Mora", "House Painters Cambridge MN", "Deck Staining Mora"]
        }
    },
    {
        slug: "cabinet-refinishing",
        title: "Cabinet Refinishing",
        shortDescription: "Modernize your kitchen without the cost of a full renovation.",
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
                description: "Intense cleaning to remove kitchen oils followed by meticulous sanding.",
                icon: "Sparkles"
            },
            {
                title: "State-of-the-Art Spray",
                description: "We use professional spray systems for a perfectly smooth, stroke-free finish.",
                icon: "PaintBucket"
            }
        ],
        benefits: [],
        longContent: [],
        faqs: [],
        seoData: {
            title: "Kitchen Cabinet Refinishing Mora MN | Factory-Smooth Finishes",
            description: "Transform your kitchen with professional cabinet painting and refinishing in Mora, MN. Save thousands compared to full replacement. High-durability coatings.",
            keywords: ["Cabinet Painting Mora MN", "Kitchen Cabinet Refinishing", "Cabinet Sprayers Minnesota", "Kitchen Remodel Mora"]
        }
    },
    {
        slug: "commercial-painting",
        title: "Commercial Painting",
        shortDescription: "Professional-grade coatings for offices and commercial properties.",
        description: "Enhance your business's professional image with clean, durable painting solutions designed for minimal disruption to your operations.",
        image: "/service-commercial.jpeg",
        icon: "Building2",
        features: [
            "Office Space Refreshes",
            "Retail Color Schemes",
            "Industrial Coatings",
            "Night/Weekend Sched"
        ],
        process: [],
        benefits: [],
        longContent: [],
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
        faqs: [],
        seoData: {
            title: "Commercial Painting Services Mora MN | Business Asset Protection",
            description: "Expert commercial painters in Mora, MN. We provide office, retail, and industrial painting solutions with minimal operational disruption.",
            keywords: ["Commercial Painting Mora MN", "Office Painters Minnesota", "Retail Painting Services", "Industrial Coatings MN"]
        }
    },
    {
        slug: "ceiling-painting",
        title: "Ceiling Painting",
        shortDescription: "Brighten any room from above with professional ceiling services.",
        description: "From vaulted spaces to popcorn removal and smooth finishes, we handle the most difficult areas of your home with precision and care.",
        image: "/dustin-portrait.webp",
        icon: "Layers",
        features: [
            "Vaulted Ceilings",
            "Popcorn Removal",
            "Texture Matching",
            "Bright White Overlays"
        ],
        process: [],
        benefits: [],
        longContent: [],
        faqs: [],
        seoData: {
            title: "Ceiling Painting & Popcorn Removal Mora MN",
            description: "Professional ceiling painting in Mora, MN. Specializing in vaulted ceilings, popcorn texture removal, and smooth finish restoration.",
            keywords: ["Ceiling Painting Mora MN", "Popcorn Removal Mora", "Vaulted Ceiling Painters", "Drywall Repair Ceilings"]
        }
    },
    {
        slug: "trim-frame-painting",
        title: "Trim & Frame Painting",
        shortDescription: "The finishing touch that elevates every room's architecture.",
        description: "Crisp, clean lines on baseboards, crown molding, and door frames that define the architectural character of your home.",
        image: "/service-trim.png",
        icon: "Frame",
        features: [
            "Baseboards & Casings",
            "Crown Molding",
            "Window Frames",
            "Door Refinishing"
        ],
        process: [],
        benefits: [],
        longContent: [],
        faqs: [],
        seoData: {
            title: "Trim & Molding Painting Mora MN | Architectural Detail",
            description: "Expert trim and door painting in Mora, MN. Fine-finish specialists for crown molding, baseboards, and window casings.",
            keywords: ["Trim Painting Mora MN", "Baseboard Painting Mora", "Crown Molding Painters", "Door Painting Services"]
        }
    }
];
