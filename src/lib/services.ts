
import {
    PaintBucket,
    ShieldCheck,
    Clock,
    Trash2,
    Hammer,
    Heart,
} from "lucide-react";

export interface ServiceSection {
    title: string;
    content: string;
}

export interface ServiceFAQ {
    question: string;
    answer: string;
}

export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    icon: any;
    features: string[];
    details: { title: string; content: string }[];
    longContent: ServiceSection[];
    faqs: ServiceFAQ[];
}

export const services: Service[] = [
    {
        slug: "interior-painting",
        title: "Interior Painting",
        shortDescription: "Personalized color schemes and meticulous preparation for a flawless finish in every room.",
        description: "From cozy bedrooms to open-concept living spaces, we bring new life to your interiors. Our process ensures clean lines, even coverage, and a finish that reflects your unique style.",
        image: "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?q=80&w=2070&auto=format&fit=crop",
        icon: PaintBucket,
        features: [
            "Wall & Ceiling Painting",
            "Trim, Baseboards & Crown Molding",
            "Accent Walls & Textured Finishes",
            "Low-VOC Premium Paints"
        ],
        details: [
            {
                title: "Protection First",
                content: "We handle all furniture moving and floor protection before a single drop of paint is opened."
            },
            {
                title: "Surgical Prep",
                content: "We patch holes, sand rough spots, and prime surfaces to ensure the final coat looks perfect."
            },
            {
                title: "Premium Finish",
                content: "Using top-tier paints like Sherwin-Williams Emerald, we deliver deep colors and durable surfaces."
            }
        ],
        longContent: [
            {
                title: "Professional Interior Painting in Mora, MN: Transforming Your Living Space",
                content: "When it comes to interior painting in Mora and the surrounding East Central Minnesota area, Trinity Painting & Renewal stands out by combining God-honoring craftsmanship with modern aesthetic sensibilities. Your home is more than just a building; it's a sanctuary for your family and a place where memories are made. A fresh coat of paint is one of the most cost-effective ways to revitalize your living environment, improve your mood, and even increase the resale value of your property. Our team doesn't just 'splash paint' on walls; we meticulously prepare every surface, ensuring that the final result is as durable as it is beautiful. Whether you're looking to modernize a dated living room, brighten up a dark kitchen, or create a soothing retreat in your master bedroom, our professional interior painters have the expertise and the heart to bring your vision to life. We understand that inviting workers into your home requires trust, and we honor that trust by maintaining a clean, respectful, and efficient job site from the second we step through your front door until the final inspection is signed off."
            },
            {
                title: "Our Comprehensive Interior Painting Process: The Foundation of Quality",
                content: "At Trinity Painting & Renewal, we believe that the secret to a world-class finish lies in the preparation—work that many other contractors skim over. Our interior painting process begins with a detailed assessment of your space and your specific goals. We start by protecting your home—moving furniture to the center of the room and covering it with fresh plastic sheeting, while floors are shielded with heavy-duty drop cloths and painters' tape. Next, we address the 'bones' of your walls. This includes filling nail holes, repairing cracks in the plaster or drywall, and sanding rough patches to ensure a uniform surface. We then apply high-quality primers where necessary to ensure excellent adhesion and color depth. This is especially important when shifting from dark colors to light, or when working on surfaces that have never been painted before. Only after the preparation is complete do we begin the application of premium, low-VOC paints from trusted brands like Sherwin-Williams and Benjamin Moore. We use a combination of brush, roll, and spray techniques depending on the surface, ensuring crisp lines at the ceiling and trim, and a smooth, consistent finish on every wall."
            },
            {
                title: "The Trinity Standard: Stewardship and Safety in Your Home",
                content: "We view every project through the lens of stewardship. This means being responsible with the resources you've entrusted us with and being careful with the environment your family lives in. One of the ways we do this is by strictly using low-VOC (Volatile Organic Compounds) and zero-VOC paints. Older paints often released 'off-gasses' for weeks that could cause headaches or respiratory issues. Our modern, high-performance selections are virtually odorless and safe to sleep around the very same night they are applied. Furthermore, we maintain a 'Dust-Minimized' environment. Sanding drywall or old paint can create a mess, so we use advanced HEPA-filtered vacuum sanders and protective sheeting to contain any particles. We don't just leave you with beautiful walls; we leave you with a home that is as clean as—or cleaner than—when we found it. This commitment to your health and safety is a cornerstone of our 'People Over Profits' mantra."
            },
        ],
        faqs: [
            {
                question: "How long does a typical interior painting project take from start to finish?",
                answer: "Most single-room projects are completed within 1-2 days. A full house interior (3-4 bedrooms, living areas, and kitchen) can take anywhere from 5 to 10 days depending on the size and the amount of trim work and preparation required."
            },
            {
                question: "Do you use low-odor or eco-friendly paints that are safe for pets?",
                answer: "Yes! We primarily use low-VOC or zero-VOC (Volatile Organic Compounds) paints, which are safe for families, children, and pets. These paints allow you to enjoy your freshly painted rooms without harsh chemical smells or the need for long-term ventilation."
            },
        ]
    },
    {
        slug: "exterior-painting",
        title: "Exterior Painting",
        shortDescription: "Weather-resistant coatings that protect your home while enhancing its curb appeal.",
        description: "Protect and beautify your home's exterior with durable, weather-resistant coatings. We handle siding, trim, decks, and fences with meticulous prep work for lasting results against Minnesota winters.",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2070&auto=format&fit=crop",
        icon: ShieldCheck,
        features: [
            "Full House Exterior",
            "Siding & Trim Painting",
            "Deck & Fence Staining",
            "Pressure Washing & Prep"
        ],
        details: [
            {
                title: "Climate Ready",
                content: "Our coatings are specifically selected to handle the 100-degree temperature swings of Minnesota."
            },
            {
                title: "Meticulous Prep",
                content: "Scraping, sanding, and high-quality caulking are the foundation of our exterior longevity."
            }
        ],
        longContent: [
            {
                title: "Expert Exterior House Painting in East Central Minnesota: Protecting Your Investment",
                content: "In regions like Mora, Cambridge, and Pine City, a home's exterior is its first line of defense against some of the harshest weather in the country. From brutal negative-degree winters to humid 90-degree summers, your siding and trim take a beating that can lead to rapid deterioration if not properly maintained. Professional exterior painting is not just about aesthetics; it's about preservation and long-term asset management."
            }
        ],
        faqs: [
            {
                question: "What is the best time of year for exterior painting in Minnesota?",
                answer: "The ideal window is typically from late May through early October. Temperatures need to be consistently above 50 degrees (even at night) for proper curing, and humidity must be manageable. We monitor the weather hourly to ensure your house is painted during the perfect climate window."
            }
        ]
    },
    {
        slug: "cabinet-refinishing",
        title: "Cabinet Refinishing",
        shortDescription: "Modernize your kitchen without the cost of a full renovation.",
        description: "Transform your kitchen or bathroom without the environmental impact or cost of replacement. Our industrial-grade finishes provide a factory-smooth look that lasts.",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
        icon: Clock,
        features: [
            "Kitchen Cabinet Painting",
            "Bathroom Vanity Updates",
            "Hardware Installation",
            "Factory-Quality Finish"
        ],
        details: [],
        longContent: [],
        faqs: []
    },
    {
        slug: "wallpaper-removal",
        title: "Wallpaper Removal",
        shortDescription: "Say goodbye to outdated patterns and hello to fresh, modern walls.",
        description: "Tired of dated wallpaper? We safely remove old paper, repair underlying drywall damage, and prepare walls for a modern paint finish. No mess, no stress.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        icon: Trash2,
        features: [],
        details: [],
        longContent: [],
        faqs: []
    },
    {
        slug: "drywall-repair",
        title: "Drywall Repair",
        shortDescription: "Restoring your walls to smooth perfection before the first drop of paint.",
        description: "From nail pops to water damage, we restore your walls to smooth perfection. A great paint job requires a perfect canvas, and we ensure your walls are up to the task.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
        icon: Hammer,
        features: [],
        details: [],
        longContent: [],
        faqs: []
    },
    {
        slug: "home-renovation",
        title: "Home Renovation",
        shortDescription: "Light renovation and carpentry services to add value to your home.",
        description: "Beyond painting, we offer light renovation services including trim installation, carpentry repairs, and space refreshes that add significant value and comfort to your home.",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop",
        icon: Heart,
        features: [],
        details: [],
        longContent: [],
        faqs: []
    }
];
