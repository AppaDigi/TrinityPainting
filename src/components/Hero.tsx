"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calendar, Award, Shield, Star, CheckCircle } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-black">
            {/* Background Image with Dynamic Overlay */}
            <div className="absolute inset-0 z-0 scale-105">
                <img
                    src="/hero-bg.jpeg"
                    alt="Luxury Interior Painting"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Premium Accent Lines */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold via-gold-dark to-transparent opacity-30" />
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-gold-light via-gold to-transparent opacity-20" />

            <div className="container relative z-10 pt-40 pb-20">
                <div className="grid grid-cols-1 lg-grid-cols-2 gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    >
                        {/* Premium Glass Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="glass-badge mb-10 animate-float"
                        >
                            <div className="status-badge">New</div>
                            <span className="text-gold font-bold uppercase tracking-widest text-xs">
                                Premier Painting in East Central MN
                            </span>
                        </motion.div>

                        <h1 className="mb-8 text-white leading-tight" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                            Transforming Homes with
                            <span className="block text-gold-gradient mt-2 font-black italic">God-Given Excellence</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-xl text-pretty font-light">
                            Experience the intersection of meticulous craftsmanship and unwavering integrity. We bring beauty to your sanctuary, one brushstroke at a time.
                        </p>

                        {/* Trust Tiles */}
                        <div className="grid grid-cols-2 gap-4 mb-12">
                            {[
                                { icon: Shield, text: "Fully Licensed & Insured", label: "Security" },
                                { icon: Award, text: "15+ Years Mastery", label: "Experience" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="relative p-6 bg-white/5 border border-white/10 backdrop-blur-md group hover:border-gold/50 transition-all duration-500 overflow-hidden"
                                >
                                    <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <item.icon size={80} className="text-gold" />
                                    </div>
                                    <div className="text-[10px] uppercase tracking-widest text-gold mb-2 font-bold opacity-70 italic">{item.label}</div>
                                    <div className="text-white font-medium text-sm flex items-center gap-3">
                                        <item.icon className="text-gold shrink-0" size={18} />
                                        {item.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm-flex-row gap-6">
                            <Link href="/quote" className="btn-primary group">
                                <Calendar size={20} className="mr-3" />
                                <span>Get Your Free Estimate</span>
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-white opacity-20 group-hover:w-full transition-all" />
                            </Link>
                            <a href="tel:XXXXXXXXXX" className="btn-secondary">
                                <Phone size={20} className="mr-3" />
                                <span className="tabular font-black">(XXX) XXX-XXXX</span>
                            </a>
                        </div>

                        {/* Social Proof */}
                        <div className="mt-16 flex items-center gap-8">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-primary bg-gray-800 overflow-hidden shadow-xl relative">
                                        <img
                                            src={`https://i.pravatar.cc/150?u=${i}`}
                                            alt="Client"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex gap-1 mb-1">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} size={14} className="fill-gold text-gold" />
                                    ))}
                                </div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                                    Trusted by <span className="text-white">500+ Neighbors</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image - Overlap Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                        className="relative hidden lg-flex h-[600px] items-center justify-center p-20"
                    >
                        <div className="relative w-full max-w-[320px] aspect-[4/5] group">
                            {/* Decorative Gold Frame */}
                            <div className="absolute -inset-6 border-2 border-gold/30 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />

                            {/* Stacked Photos Display Effect */}
                            <div className="absolute -top-12 -left-12 w-40 h-40 border border-gold/20 shadow-2xl rotate-[-6deg] z-0 overflow-hidden group-hover:rotate-0 transition-transform duration-700">
                                <img src="/hero-stack-1.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Detail" />
                            </div>
                            <div className="absolute -bottom-12 -right-12 w-48 h-48 border border-gold/20 shadow-2xl rotate-[12deg] z-0 overflow-hidden group-hover:rotate-0 transition-transform duration-700 delay-100">
                                <img src="/hero-stack-2.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="Detail" />
                            </div>

                            <div className="w-full h-full overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10 relative z-10 bg-black">
                                <img
                                    src="/hero-side-new.png"
                                    alt="Luxury Room Transformation"
                                    className="w-full h-full object-cover img-zoom"
                                />
                            </div>

                            {/* Floating Service Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-20 bg-white p-6 shadow-2xl z-20 border-l-[8px] border-gold w-48"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <CheckCircle className="text-gold" size={18} />
                                    <div>
                                        <div className="text-[8px] uppercase tracking-widest text-gray-400 font-bold">Verified Expert</div>
                                        <div className="text-sm font-black text-primary leading-none">Mora, MN</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-1 border-t border-gray-100 pt-3">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Google_favicon_%282015%29.svg/1200px-Google_favicon_%282015%29.svg.png" className="h-3" alt="Google" />
                                    <span className="text-sm font-black text-primary">5.0 Rating</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
