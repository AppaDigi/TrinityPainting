export interface CompletedProject {
    id: string;
    title: string;
    city: string;
    coordinates: [number, number]; // [lat, lng]
    description: string;
    beforeImage: string;
    afterImage: string;
    beforeImages?: string[];
    afterImages?: string[];
    serviceType: string;
}

export const completedProjects: CompletedProject[] = [
    {
        id: "proj-allies-house",
        title: "Allie's House",
        city: "Minneapolis",
        coordinates: [44.9778, -93.2650], // Minneapolis
        description: "Complete interior painting to breathe fresh life and light into beautifully detailed rooms. Every corner and molding was carefully prepared and finished for a stunning final result.",
        beforeImage: "/portfolio/allies-house/before.jpg",
        afterImage: "/portfolio/allies-house/after.jpg",
        beforeImages: [
            "/portfolio/allies-house/before/1-Dec 29 2025 03_08pm-SZE2.jpg",
            "/portfolio/allies-house/before/2-Dec 29 2025 03_08pm-rg4P.jpg",
            "/portfolio/allies-house/before/3-Dec 29 2025 03_08pm-9hPh.jpg",
            "/portfolio/allies-house/before/4-Dec 29 2025 03_09pm-ML2Y.jpg"
        ],
        afterImages: [
            "/portfolio/allies-house/after/5-Dec 29 2025 05_23pm-qkyS.jpg",
            "/portfolio/allies-house/after/6-Dec 29 2025 05_24pm-mYXW.jpg",
            "/portfolio/allies-house/after/7-Dec 29 2025 05_24pm-FBDa.jpg",
            "/portfolio/allies-house/after/8-Dec 29 2025 05_24pm-XNwM.jpg"
        ],
        serviceType: "Interior Painting"
    },
    {
        id: "proj-donnas-house",
        title: "Donna's House",
        city: "Zimmerman",
        coordinates: [45.4427, -93.5877], // Zimmerman, MN
        description: "Extensive interior painting project completely refreshing the aesthetic of the entire home. Including walls, baseboards, trim, and doors for a seamless modern finish.",
        beforeImage: "/portfolio/donnas-house/before/15-Jan 09 2026 03_11pm-5uVi.jpg",
        afterImage: "/portfolio/donnas-house/after/30-Jan 20 2026 04_22pm-A2Ek.jpg",
        beforeImages: [
            "/portfolio/donnas-house/before/15-Jan 09 2026 03_11pm-5uVi.jpg",
            "/portfolio/donnas-house/before/16-Jan 09 2026 03_12pm-kv3b.jpg",
            "/portfolio/donnas-house/before/17-Jan 09 2026 03_12pm-v4mF.jpg",
            "/portfolio/donnas-house/before/24-Jan 09 2026 03_13pm-NEtj.jpg"
        ],
        afterImages: [
            "/portfolio/donnas-house/after/28-Jan 09 2026 09_06pm-ZJqz.jpg",
            "/portfolio/donnas-house/after/29-Jan 09 2026 09_07pm-7A9y.jpg",
            "/portfolio/donnas-house/after/30-Jan 20 2026 04_22pm-A2Ek.jpg",
            "/portfolio/donnas-house/after/31-Jan 20 2026 04_22pm-Uibj.jpg"
        ],
        serviceType: "Interior Painting"
    },
    {
        id: "proj-retreat-refresh",
        title: "Retreat Refresh",
        city: "Mora",
        coordinates: [45.8761, -93.2941], // Mora, MN
        description: "A complete exterior painting transformation for a corporate retreat property in Mora. We provided resilient, weather-resistant coatings to refresh the look and prolong the lifespan of the structures.",
        beforeImage: "/portfolio/retreat-refresh/before/07fe9d3e-9781-4da6-9dde-62ff783142bb.jpeg",
        afterImage: "/portfolio/retreat-refresh/after/03d9ae9a-62d5-4e48-94d8-6554b4f4aa2d.jpeg",
        beforeImages: [
            "/portfolio/retreat-refresh/before/07fe9d3e-9781-4da6-9dde-62ff783142bb.jpeg",
            "/portfolio/retreat-refresh/before/38822f51-4bcb-4f25-accc-28967b13acb0.jpeg",
            "/portfolio/retreat-refresh/before/94b0ae6f-e6e6-4d2e-9d16-716396c2c672.jpeg",
            "/portfolio/retreat-refresh/before/dcbd2e9e-8168-478f-8f8e-72f9f84fbff4.jpeg"
        ],
        afterImages: [
            "/portfolio/retreat-refresh/after/03d9ae9a-62d5-4e48-94d8-6554b4f4aa2d.jpeg",
            "/portfolio/retreat-refresh/after/093ed1b4-95c6-43bf-be76-a8476e4af72a.jpeg",
            "/portfolio/retreat-refresh/after/168f7222-1a51-4a5a-816f-b0d64b9181ef.jpeg",
            "/portfolio/retreat-refresh/after/1bf2d79a-353f-4287-99b5-f924811f2444.jpeg"
        ],
        serviceType: "Corporate, Exterior Paint"
    },
    {
        id: "proj-gregs-house",
        title: "Greg's House",
        city: "Cambridge",
        coordinates: [45.5602, -93.2249],
        description: "A comprehensive interior transformation in Cambridge, MN. Our team meticulously prepared surfaces and applied premium finishes to modernize and brighten the living spaces, significantly enhancing the home's aesthetic and value.",
        beforeImage: "/portfolio/gregs-house/before/1-Feb 21 2026 03_59pm-7XrW.jpg",
        afterImage: "/portfolio/gregs-house/after/5-Feb 24 2026 08_07pm-dqtF.jpg",
        beforeImages: [
            "/portfolio/gregs-house/before/1-Feb 21 2026 03_59pm-7XrW.jpg",
            "/portfolio/gregs-house/before/2-Feb 21 2026 03_59pm-ERPi.jpg",
            "/portfolio/gregs-house/before/3-Feb 21 2026 03_59pm-H2CM.jpg",
            "/portfolio/gregs-house/before/4-Feb 21 2026 03_59pm-be1j.jpg"
        ],
        afterImages: [
            "/portfolio/gregs-house/after/5-Feb 24 2026 08_07pm-dqtF.jpg",
            "/portfolio/gregs-house/after/6-Feb 24 2026 08_07pm-8KAh.jpg",
            "/portfolio/gregs-house/after/7-Feb 24 2026 08_07pm-eKqt.jpg",
            "/portfolio/gregs-house/after/8-Feb 24 2026 08_07pm-7xGK.jpg"
        ],
        serviceType: "Interior Painting"
    },
    {
        id: "proj-stacys-home",
        title: "Stacy's Home",
        city: "Lakeville",
        coordinates: [44.6497, -93.2427],
        description: "Surface Restoration & Modernization in Lakeville, MN. This high-needs project involved intensive 'Mechanical Bond' preparation to smooth rough, unsanded walls and repair surface damage. We transitioned the space from a tired gray to a sophisticated, deep slate blue-gray, delivering a high-end, durable masterpiece through superior preparation.",
        beforeImage: "/portfolio/stacys-home/before/1-Feb 17 2026 10_57pm-a16f.jpg",
        afterImage: "/portfolio/stacys-home/after/12-Mar 11 2026 11_12pm-gQbw.jpg",
        beforeImages: [
            "/portfolio/stacys-home/before/1-Feb 17 2026 10_57pm-a16f.jpg",
            "/portfolio/stacys-home/before/10-Feb 17 2026 10_58pm-JxDb.jpg",
            "/portfolio/stacys-home/before/11-Feb 17 2026 10_58pm-STYo.jpg",
            "/portfolio/stacys-home/before/2-Feb 17 2026 10_57pm-aCQ9.jpg"
        ],
        afterImages: [
            "/portfolio/stacys-home/after/12-Mar 11 2026 11_12pm-gQbw.jpg",
            "/portfolio/stacys-home/after/13-Mar 11 2026 11_12pm-tkHY.jpg",
            "/portfolio/stacys-home/after/14-Mar 11 2026 11_12pm-yAvh.jpg",
            "/portfolio/stacys-home/after/15-Mar 11 2026 11_12pm-FcR3.jpg"
        ],
        serviceType: "Interior Restoration"
    },
    {
        id: "proj-sarahs-home",
        title: "Sarah's Home",
        city: "St. Michael",
        coordinates: [45.2105, -93.6644],
        description: "Whole-Home Interior Renewal in St. Michael & Albertville area. We transformed this property by updating living rooms, kitchens, hallways, and bedrooms—replacing dated brown tones with modern grays and vibrant blues. The final renewal included a bathroom ceiling refresh to brighten every space from the top down.",
        beforeImage: "/portfolio/sarahs-home/before/1-Feb 12 2026 03_56am-RUf1.jpg",
        afterImage: "/portfolio/sarahs-home/after/100-Mar 06 2026 08_02pm-gTSD.jpg",
        beforeImages: [
            "/portfolio/sarahs-home/before/1-Feb 12 2026 03_56am-RUf1.jpg",
            "/portfolio/sarahs-home/before/10-Feb 12 2026 03_57am-fkbq.jpg",
            "/portfolio/sarahs-home/before/11-Feb 12 2026 03_57am-Mew8.jpg",
            "/portfolio/sarahs-home/before/12-Feb 12 2026 03_57am-L3GC.jpg"
        ],
        afterImages: [
            "/portfolio/sarahs-home/after/100-Mar 06 2026 08_02pm-gTSD.jpg",
            "/portfolio/sarahs-home/after/101-Mar 06 2026 08_02pm-PjfK.jpg",
            "/portfolio/sarahs-home/after/102-Mar 06 2026 08_02pm-6pZd.jpg",
            "/portfolio/sarahs-home/after/103-Mar 06 2026 08_02pm-Yuet.jpg"
        ],
        serviceType: "Whole-Home Renewal"
    },
    {
        id: "proj-nancys-home",
        title: "Nancy's Home",
        city: "East Bethel",
        coordinates: [45.3427, -93.2086],
        description: "In this Cedar/East Bethel home, we transformed a sprawling layout including the entryway, kitchen hallway, and living room from dated 'old-school' green and heavy beige to a vibrant, cohesive sanctuary. Featuring sophisticated Deep Sea Blue accents balanced by light-reflective beige to keep high-traffic spaces feeling open and intentional.",
        beforeImage: "/portfolio/nancys-home/before/1-Feb 12 2026 04_12am-Azgv.jpg",
        afterImage: "/portfolio/nancys-home/after/24-Mar 09 2026 08_19pm-HrGY.jpg",
        beforeImages: [
            "/portfolio/nancys-home/before/1-Feb 12 2026 04_12am-Azgv.jpg",
            "/portfolio/nancys-home/before/10-Feb 12 2026 04_12am-uK6w.jpg",
            "/portfolio/nancys-home/before/11-Feb 12 2026 04_12am-82qU.jpg",
            "/portfolio/nancys-home/before/12-Mar 09 2026 03_28pm-8g3p.jpg"
        ],
        afterImages: [
            "/portfolio/nancys-home/after/24-Mar 09 2026 08_19pm-HrGY.jpg",
            "/portfolio/nancys-home/after/25-Mar 09 2026 08_19pm-NwPt.jpg",
            "/portfolio/nancys-home/after/26-Mar 09 2026 08_19pm-GY1i.jpg",
            "/portfolio/nancys-home/after/27-Mar 09 2026 08_19pm-PL9D.jpg"
        ],
        serviceType: "Interior Painting"
    },
    {
        id: "proj-pams-home",
        title: "Pam's Home",
        city: "Lino Lakes",
        coordinates: [45.1636, -93.0905],
        description: "Comprehensive interior painting project in Lino Lakes. Dustin removed old wallpaper paste, repaired sheetrock, and restored walls to factory-smooth condition. Fresh paint on ceilings, walls, and doors brought new life and light to every room, treating the property with the respect and integrity a homeowner deserves.",
        beforeImage: "/portfolio/pams-home/before/1-Dec 22 2025 04_05pm-Ght8.jpg",
        afterImage: "/portfolio/pams-home/after/5-Dec 23 2025 08_36pm-CjDp.jpg",
        beforeImages: [
            "/portfolio/pams-home/before/1-Dec 22 2025 04_05pm-Ght8.jpg",
            "/portfolio/pams-home/before/2-Dec 22 2025 04_05pm-5aXF.jpg",
            "/portfolio/pams-home/before/3-Dec 22 2025 04_05pm-TuT5.jpg",
            "/portfolio/pams-home/before/4-Dec 22 2025 04_05pm-NT8j.jpg"
        ],
        afterImages: [
            "/portfolio/pams-home/after/5-Dec 23 2025 08_36pm-CjDp.jpg",
            "/portfolio/pams-home/after/6-Dec 23 2025 08_37pm-k2ze.jpg",
            "/portfolio/pams-home/after/7-Dec 23 2025 08_51pm-fuKE.jpg",
            "/portfolio/pams-home/after/8-Dec 23 2025 08_51pm-2Bd2.jpg"
        ],
        serviceType: "Interior Paint & Repair"
    }
];
