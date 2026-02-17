"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Heart, Clock, Star, Sparkles } from "lucide-react";

const TrinitySeal = () => {
    const promises = [
        {
            icon: Shield,
            title: "Unwavering Integrity",
            desc: "Trust is our foundation. We provide honest assessments and transparent pricing, ensuring your peace of mind from start to finish."
        },
        {
            icon: Heart,
            title: "Faith-Focused Care",
            desc: "We treat your home as a sanctuary. Every stroke is guided by our commitment to servanthood and respect for your living space."
        },
        {
            icon: Clock,
            title: "Punctual Professionalism",
            desc: "Excellence includes reliability. We respect your schedule, arriving promptly and maintaining a clean, efficient workspace."
        },
        {
            icon: Star,
            title: "Master-Level Finish",
            desc: "Good enough is never enough. We pursue perfection in every detail, delivering a finish that transcends expectations."
        }
    ];

    return (
        <section className="section-padding bg-black text-white relative overflow-hidden">
            {/* Elegant Background Accents */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <div className="absolute -left-20 top-1/4 w-96 h-96 bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container relative z-10">
                <div className="section-header text-center mb-24">
                    <span className="glass-badge mb-8">The Trinity Standard</span>
                    <h2 className="text-white mb-6 font-black italic">The Soul of Our <span className="text-gold-gradient">Service</span></h2>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto text-pretty font-light">
                        Painting is our craft, but integrity is our calling. We are dedicated to providing an experience that honors your home and our values.
                    </p>
                </div>

                <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-8">
                    {promises.map((promise, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.15, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                            viewport={{ once: true }}
                            className="premium-card premium-card-dark group py-12 px-10"
                        >
                            <div className="mb-10 relative">
                                <div className="w-16 h-16 flex items-center justify-center bg-white/5 border border-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.1)] group-hover:border-gold/50 transition-all duration-700 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    <promise.icon className="text-gold relative z-10" size={32} strokeWidth={1.5} />
                                </div>
                                <Sparkles className="absolute -top-4 -right-4 text-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" size={40} />
                            </div>

                            <h3 className="text-2xl font-black mb-6 text-white group-hover:text-gold transition-colors duration-500 tracking-tight">
                                {promise.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm font-medium text-pretty group-hover:text-gray-300 transition-colors">
                                {promise.desc}
                            </p>

                            {/* Corner Accent */}
                            <div className="absolute top-4 right-4 text-[8px] font-black text-gold/20 uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">
                                Pillar {index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final Interactive Invite */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center"
                >
                    <div className="inline-block relative p-1">
                        <div className="absolute inset-0 bg-gold/20 animate-pulse blur-xl -z-10" />
                        <div className="bg-primary-soft border border-gold/30 p-12 lg:p-16 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />

                            <div className="relative z-10">
                                <div className="text-xs uppercase tracking-[0.4em] text-gold mb-6 font-black italic">Start Your Transformation</div>
                                <h3 className="text-white text-3xl md:text-5xl font-black mb-12">Experience the Trinity Difference.</h3>
                                <div className="flex flex-col sm-flex-row gap-6 justify-center">
                                    <a href="/quote" className="btn-primary">
                                        Request Your Free Master Estimate
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TrinitySeal;
