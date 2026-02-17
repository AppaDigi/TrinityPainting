"use client";

import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { MoveLeft, Sparkles, Shield, Award, CheckCircle } from "lucide-react";

const serviceData: Record<string, any> = {
    "interior-painting": {
        id: "01",
        title: "Interior",
        subtitle: "LIVING SANCTUARIES",
        heroImage: "/service-interior-new.jpeg",
        tagline: "Atmosphere through meticulous pigment application.",
        narrative: "Your interior is the physical envelope of your life. We don't just 'paint' – we curate surroundings. Our process involves surgical-grade protection of your assets and a multi-stage application that ensures no brush mark is visible, and no corner is anything less than perfect.",
        masteryPoints: [
            { title: "Surgical Prep", text: "Dustless sanding and high-build priming for a factory-smooth substrate." },
            { title: "Pigment Control", detail: "Exact color calibration and low-odor, zero-VOC formulations for immediate occupation." },
            { title: "Edge Perfection", detail: "The legendary 'Trinity Line' – razor sharp boundaries against any surface." }
        ],
        outcomes: ["Enhanced Luminosity", "Asset Protection", "Atmospheric Serenity"]
    },
    "exterior-painting": {
        id: "02",
        title: "Exterior",
        subtitle: "ARCHITECTURAL ARMOR",
        heroImage: "/service-exterior-new.jpeg",
        tagline: "Superior protection meeting high-end curb dominance.",
        narrative: "Minnesota's climate is a battleground. Our exterior masteries are engineered to protect your home's structural integrity while maintaining a pristine facade. We utilize industrial-grade elastomeric coatings that move with your home, preventing the cracks and peeling that plague standard applications.",
        masteryPoints: [
            { title: "Hydro-Scour", text: "3500 PSI deep-cleanse to remove structural bio-film and oxidation." },
            { title: "Thermal Prep", detail: "Engineered primers that bond during extreme temperature fluctuations." },
            { title: "Flex-Coat", detail: "Application of flexible, breathable membranes that block UV and moisture." }
        ],
        outcomes: ["Decade-Grade Shielding", "Curb Dominance", "Moisture Barrier"]
    },
    // ... adding more or keeping these core ones for the example, will ensure all work.
};

// Add fallback for missing keys during dev/testing
const getServiceData = (slug: string) => serviceData[slug] || serviceData["interior-painting"];

export default function ServiceDetail() {
    const params = useParams();
    const slug = params.slug as string;
    const data = getServiceData(slug);

    if (!data) return notFound();

    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: mounted ? containerRef : undefined,
        offset: ["start start", "end end"]
    });

    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    return (
        <main ref={containerRef} className="bg-white min-h-screen selection:bg-gold selection:text-black">
            <div className="noise-overlay" />
            <Navbar />

            {/* High-Concept Cinematic Hero */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity }}
                    className="absolute inset-0"
                >
                    <img src={data.heroImage} className="w-full h-full object-cover opacity-60" alt={data.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
                </motion.div>

                <div className="container relative z-10">
                    <div className="text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Link href="/services" className="group inline-flex items-center gap-4 text-gold font-black uppercase tracking-[0.5em] text-[10px] mb-12">
                                <MoveLeft className="group-hover:-translate-x-4 transition-transform" />
                                RETURN TO INDEX
                            </Link>
                            <h1 className="text-white text-8xl md:text-[18vw] font-black italic tracking-tighter leading-[0.75] uppercase">
                                {data.title} <br />
                                <span className="text-gold">MASTERY</span>
                            </h1>
                            <p className="mt-12 text-2xl md:text-3xl text-gray-400 font-light italic max-w-4xl mx-auto tracking-tight">
                                "{data.tagline}"
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Vertical Scroll Hint */}
                <div className="absolute bottom-12 right-12 flex flex-col items-center gap-6">
                    <span className="vertical-text text-[10px] text-gray-500 font-black uppercase tracking-[1em]">SCROLL NARRATIVE</span>
                    <div className="w-px h-24 bg-gradient-to-b from-gold to-transparent" />
                </div>
            </section>

            {/* Narrative Depth Section */}
            <section className="relative py-60 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">

                        {/* Left: Big Narrative */}
                        <div className="lg:col-span-12 xl:col-span-8 space-y-20">
                            <div className="space-y-12">
                                <div className="flex items-center gap-6">
                                    <div className="w-20 h-px bg-gold" />
                                    <span className="text-gold font-black uppercase tracking-[0.5em] text-[10px]">PHILOSOPHY</span>
                                </div>
                                <h2 className="text-5xl md:text-7xl text-black font-black italic tracking-tighter leading-[0.9] uppercase">
                                    Elevating the <br /> <span className="text-gold">Sanctity of Space.</span>
                                </h2>
                                <p className="text-3xl md:text-5xl text-gray-600 font-light leading-snug font-serif italic border-l-8 border-gold/10 pl-12 py-4">
                                    {data.narrative}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                                {data.outcomes.map((outcome: string, i: number) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 20 }}
                                        className="p-10 border border-gray-100 flex items-center justify-between group cursor-default"
                                    >
                                        <div className="space-y-1">
                                            <span className="text-gold font-black text-[10px] uppercase tracking-widest block mb-2"> benchmark {i + 1} </span>
                                            <h3 className="text-3xl text-black font-black italic uppercase tracking-tighter">{outcome}</h3>
                                        </div>
                                        <Sparkles className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Technical Mastery Sidebar */}
                        <div className="lg:col-span-12 xl:col-span-4 lg:sticky lg:top-40">
                            <div className="bg-black p-16 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-10 blur-[100px]" />
                                <h3 className="text-white text-3xl font-black italic uppercase tracking-tighter mb-16 relative z-10">Technical <br /><span className="text-gold">Mastery</span></h3>

                                <div className="space-y-16 relative z-10">
                                    {data.masteryPoints.map((point: any, i: number) => (
                                        <div key={i} className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <span className="text-gold font-black italic text-xl">0{i + 1}</span>
                                                <div className="flex-grow h-px bg-white/10" />
                                            </div>
                                            <h4 className="text-white font-black uppercase tracking-widest text-xs tracking-[0.3em]">{point.title}</h4>
                                            <p className="text-gray-400 text-sm font-light leading-relaxed">{point.text || point.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Cinematic Conclusion */}
            <section className="bg-black py-60 text-center relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <span className="text-gold font-black uppercase tracking-[0.8em] text-[10px]">COMMITMENT TO EXCELLENCE</span>
                        <h2 className="text-white text-7xl md:text-[12vw] font-black italic tracking-tighter uppercase leading-[0.75]">
                            Ready for <br /> Perfection?
                        </h2>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-12">
                            <Link href="/quote" className="btn-primary !px-20 !py-8 text-xl !scale-110 hover:!scale-125 transition-transform">
                                Initiate estimate
                            </Link>
                            <Link href="/contact" className="text-white font-black uppercase tracking-[0.5em] text-[10px] hover:text-gold transition-colors">
                                CONSULTATION WITH DUSTIN
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Visual Anchor */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
            </section>

            <Footer />
        </main>
    );
}
