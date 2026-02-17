"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, Verified, Heart } from "lucide-react";

const Introduction = () => {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-1 lg-grid-cols-12 gap-20 items-center">

                    {/* Artistic Composition Left */}
                    <div className="lg:col-span-7 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                            viewport={{ once: true }}
                        >
                            <div className="glass-badge mb-10">
                                <Heart className="text-gold" size={16} fill="currentColor" />
                                <span className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">The Trinity Philosophy</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black mb-12 leading-[1] text-black italic">
                                Artistry <span className="text-gold-gradient">Sanctified</span> by Integrity.
                            </h2>

                            <div className="space-y-10 text-xl text-gray-600 leading-relaxed font-light text-pretty border-l-2 border-gold/20 pl-12 relative">
                                <div className="absolute top-0 left-0 w-2 h-10 bg-gold -translate-x-1/2" />
                                <p>
                                    At Trinity Painting & Renewal, we believe your home is more than walls and ceilings—it's the sacred backdrop where your family's story unfolds.
                                </p>
                                <p>
                                    Since our inception, we've served East Central Minnesota with a singular vision: to elevate the standard of contracting through unwavering faith and meticulous craftsmanship.
                                </p>
                                <p className="font-bold text-primary italic">
                                    "We don't just paint homes; we honor the life within them."
                                </p>
                            </div>

                            {/* Refined Owner Quote Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                                className="mt-20 p-12 bg-black border-l-[12px] border-gold relative premium-card-dark shadow-2xl overflow-visible"
                            >
                                <Quote className="absolute -top-6 -right-6 text-gold opacity-20" size={80} />
                                <div className="relative z-10">
                                    <p className="text-2xl font-light text-white italic mb-8 leading-relaxed text-pretty">
                                        "Our promise is simple: We treat every home as if it were our own. Your satisfaction isn't just a goal—it's our testimony."
                                    </p>
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full border-2 border-gold overflow-hidden shadow-gold">
                                            <img src="/dustin-portrait.webp" alt="Dustin Nyblom" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="text-white font-black uppercase tracking-widest text-sm">Dustin Nyblom</div>
                                            <div className="text-gold text-[10px] font-bold uppercase tracking-[0.2em]">Owner & Founder</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Asymmetrical Image Composition Right */}
                    <div className="lg:col-span-5 relative mt-32 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute -top-16 -right-16 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute -bottom-16 -left-16 w-48 h-48 border border-gold/20 -z-10" />

                            {/* Main Image with Zoom Wrapper */}
                            <div className="relative z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] group overflow-hidden border border-gray-100">
                                <img
                                    src="/mastery-image.jpeg"
                                    alt="Professional Craftsmanship"
                                    className="w-full h-auto img-zoom"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>

                            {/* Floating Architecture Stat Cards */}
                            <div className="absolute -bottom-12 -right-6 lg:-right-12 z-20 space-y-6">
                                {[
                                    { label: "Mastery", value: "15+ Years", color: "gold" },
                                    { label: "Community", value: "500+ Homes", color: "black" }
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1 + i * 0.2 }}
                                        viewport={{ once: true }}
                                        className={`p-8 shadow-2xl border-t-4 border-gold bg-${stat.color === 'gold' ? 'white' : 'primary-soft'} text-${stat.color === 'gold' ? 'primary' : 'white'} relative overflow-hidden`}
                                    >
                                        <div className="text-[10px] uppercase tracking-[0.4em] font-black opacity-50 mb-2 italic">{stat.label}</div>
                                        <div className={`text-3xl font-black tabular ${stat.color === 'gold' ? 'text-black' : 'text-gold'}`}>{stat.value}</div>
                                        <div className="absolute -right-4 -bottom-4 opacity-5">
                                            {stat.label === "Mastery" ? <Star size={64} fill="currentColor" /> : <Verified size={64} fill="currentColor" />}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Introduction;
