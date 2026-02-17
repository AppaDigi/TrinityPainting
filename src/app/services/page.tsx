"use client";

import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, MoveRight } from "lucide-react";

const services = [
    {
        id: "01",
        title: "Interior",
        subtitle: "LIVING SANCTUARIES",
        slug: "interior-painting",
        description: "Transforming the atmosphere of your interior through meticulous pigment application and surface perfection.",
        image: "/service-interior-new.jpeg",
        details: ["Vaulted Masteries", "Clean-Air Formulas", "Precision Trim"]
    },
    {
        id: "02",
        title: "Exterior",
        subtitle: "ARCHITECTURAL ARMOR",
        slug: "exterior-painting",
        description: "Superior protection meeting high-end curb dominance. Engineered for the Minnesota climate.",
        image: "/service-exterior-new.jpeg",
        details: ["Weather-Pro Shield", "Masonry Mastery", "Restorative Prep"]
    },
    {
        id: "03",
        title: "Cabinets",
        subtitle: "CULINARY RENEWAL",
        slug: "cabinet-refinishing",
        description: "Factory-grade spray finishes that turn standard cabinetry into high-end furniture pieces.",
        image: "/service-cabinets-new.jpeg",
        details: ["KCMA Rated", "Industrial Luster", "Dust-Free Execution"]
    },
    {
        id: "04",
        title: "Commercial",
        subtitle: "BRANDED SCALE",
        slug: "commercial-painting",
        description: "High-volume excellence for business environments that demand both speed and prestige.",
        image: "/service-commercial-new.jpeg",
        details: ["Safety Certified", "Night-Shift Logic", "High-Build Coatings"]
    },
    {
        id: "05",
        title: "Ceilings",
        subtitle: "THE FIFTH WALL",
        slug: "ceiling-painting",
        description: "Luminous, shadow-free overhead masteries that instantly brighten and modernize any room.",
        image: "/service-ceiling.jpeg",
        details: ["Texture Matching", "Popcorn Removal", "Streak-Free Flat"]
    }
];

const ServiceBlock = ({ service, index }: { service: any, index: number }) => {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: mounted ? containerRef : undefined,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);
    const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

    return (
        <motion.div
            ref={containerRef}
            style={{ opacity }}
            className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
        >
            {/* Background Identifiers */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
                <span className="text-[40vw] font-black italic text-black">{service.id}</span>
            </div>

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Image Side (Split Parallax) */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative group">
                        <motion.div
                            style={{ y, scale }}
                            className="relative overflow-hidden aspect-[4/5] md:aspect-[16/10] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.6)] border border-white/10"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                            />
                            {/* Glass Overlay on Hover */}
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-[1px]" />
                        </motion.div>

                        {/* Floating Architectural Badge */}
                        <motion.div
                            style={{ y: textY }}
                            className={`absolute hidden md:block -bottom-10 ${index % 2 === 1 ? '-left-10' : '-right-10'} p-12 bg-black border border-gold/20 shadow-2xl z-20`}
                        >
                            <div className="space-y-4">
                                <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] block">Project Type</span>
                                <h3 className="text-white text-3xl font-black italic uppercase tracking-tighter">{service.subtitle}</h3>
                                <div className="w-12 h-0.5 bg-gold" />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''} space-y-12`}>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="text-gold font-black italic text-2xl tracking-tighter">/ {service.id}</span>
                            <div className="flex-grow h-px bg-gold/20" />
                        </div>
                        <h2 className="text-7xl md:text-9xl font-black italic text-black leading-[0.8] tracking-tighter uppercase">
                            {service.title} <br />
                            <span className="text-stroke-white opacity-40">MASTERY</span>
                        </h2>
                    </div>

                    <p className="text-2xl text-gray-500 font-light italic leading-snug max-w-md">
                        {service.description}
                    </p>

                    <div className="space-y-4">
                        {service.details.map((detail: string, i: number) => (
                            <div key={i} className="flex items-center gap-6 group/detail">
                                <div className="w-4 h-4 rounded-full border border-gold/30 flex items-center justify-center p-1">
                                    <div className="w-full h-full bg-gold scale-0 group-hover/detail:scale-100 transition-transform" />
                                </div>
                                <span className="text-xs font-black uppercase tracking-[.3em] text-gray-400 group-hover/detail:text-black transition-colors">{detail}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-10">
                        <Link
                            href={`/services/${service.slug}`}
                            className="btn-primary group !py-6 !px-12 flex items-center gap-6 justify-between max-w-xs"
                        >
                            <span className="font-black italic uppercase tracking-widest text-sm">Deep Dive</span>
                            <MoveRight className="group-hover:translate-x-4 transition-transform duration-500" />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function ServicesPage() {
    return (
        <main className="bg-white min-h-screen selection:bg-gold selection:text-black">
            <div className="noise-overlay" />
            <Navbar />

            {/* High-Concept Landing Hero */}
            <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
                <div className="absolute inset-0">
                    <img src="/service-interior-new.jpeg" className="w-full h-full object-cover opacity-30 scale-110 blur-sm" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-white" />
                </div>

                <div className="container relative z-10">
                    <div className="text-center space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-gold font-black uppercase tracking-[0.8em] text-[10px] mb-8 block">THE TRINITY COMPENDIUM</span>
                            <h1 className="text-white text-8xl md:text-[15vw] font-black italic tracking-tighter leading-none uppercase">
                                PROVEN <br /> <span className="text-gold">MASTERIES</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <p className="text-gray-400 font-light italic text-2xl max-w-xl text-balance">
                                A curated index of architectural renewal services for those who recognize the value of integrity.
                            </p>
                            <div className="w-px h-32 bg-gradient-to-b from-gold to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Architectural Service List */}
            <div className="space-y-20">
                {services.map((service, index) => (
                    <ServiceBlock key={service.id} service={service} index={index} />
                ))}
            </div>

            {/* Final Artistic Closure */}
            <section className="bg-black py-60 text-center relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <h2 className="text-white text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-none">
                            Ready for <br /> <span className="text-gold">Transformation?</span>
                        </h2>
                        <Link href="/quote" className="btn-primary !scale-125 hover:!scale-150 transition-transform">
                            Initiate Consultation
                        </Link>
                    </div>
                </div>

                {/* Background Branding */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[40vw] text-white opacity-[0.01] font-black pointer-events-none italic select-none">
                    TRINITY
                </div>
            </section>

            <Footer />
        </main>
    );
}
