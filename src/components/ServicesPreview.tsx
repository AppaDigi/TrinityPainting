"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Paintbrush, Wrench, Sparkles, ChevronRight } from "lucide-react";

const services = [
    {
        title: "Interior Painting",
        image: "/service-interior-new.jpeg",
        link: "/services/interior-painting"
    },
    {
        title: "Exterior Painting",
        image: "/service-exterior-new.jpeg",
        link: "/services/exterior-painting"
    },
    {
        title: "Cabinet Refinishing",
        image: "/service-cabinets-new.jpeg",
        link: "/services/cabinet-refinishing"
    },
    {
        title: "Commercial Painting",
        image: "/service-commercial-new.jpeg",
        link: "/services/commercial-painting"
    },
    {
        title: "Ceiling Painting",
        image: "/service-ceiling.jpeg",
        link: "/services/ceiling-painting"
    },
    {
        title: "Trim & Frame Painting",
        image: "/service-trim-new.jpeg",
        link: "/services/trim-and-frame"
    }
];

const ServicesPreview = () => {
    return (
        <section className="bg-black py-32 relative overflow-hidden">
            {/* Subtle background branding */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[30vw] font-black italic">SERVICES</div>
            </div>

            <div className="container relative z-10">
                <div className="section-header text-center mb-24">
                    <span className="glass-badge mb-6 border-gold/20 text-gold">Master Masteries</span>
                    <h2 className="text-white font-black italic text-5xl md:text-7xl mb-8">
                        Our <span className="text-gold">Expertise</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light italic">
                        Meticulous craftsmanship for every surface of your sanctuary.
                    </p>
                </div>

                <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-0 border border-white/5">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="group relative aspect-[4/3] overflow-hidden border border-white/5"
                        >
                            <Link href={service.link} className="block w-full h-full">
                                {/* Images */}
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />

                                {/* Initial Dark Overlay */}
                                <div className="absolute inset-0 bg-black/60 group-hover:opacity-0 transition-opacity duration-700" />

                                {/* Glass Overlay Reveal */}
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-700 border-2 border-transparent group-hover:border-gold/20" />

                                {/* The "Premium Bar" - Transitions from Dark to Glass */}
                                <div className="absolute bottom-0 left-0 w-full p-8 border-t border-gold/10 flex items-center justify-between transition-all duration-500 bg-black group-hover:bg-black/40 group-hover:backdrop-blur-xl">
                                    <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter italic group-hover:text-gold transition-colors">
                                        {service.title}
                                    </h3>

                                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                                        <ChevronRight
                                            size={20}
                                            className="text-gold group-hover:text-black group-hover:translate-x-1 transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Top Edge Reveal */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 text-center">
                    <Link href="/services" className="btn-primary">
                        View Detailed Masteries
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
