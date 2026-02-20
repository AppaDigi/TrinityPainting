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
    }
];
