"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Phone, ArrowUpRight } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white pt-32 pb-12 relative overflow-hidden">
            {/* Background Branding Watermark */}
            <div className="absolute -bottom-20 -right-20 text-[20vw] font-black text-white/5 pointer-events-none select-none italic leading-none">
                TRINITY
            </div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg-grid-cols-12 gap-16 mb-24">
                    {/* Brand Pillar */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-block mb-10 group">
                            <Image
                                src="/logo.webp"
                                alt="Trinity Painting"
                                width={220}
                                height={80}
                                className="h-16 w-auto brightness-110 group-hover:scale-105 transition-transform duration-500"
                            />
                        </Link>
                        <p className="text-gray-400 text-lg leading-relaxed mb-10 text-pretty font-light">
                            Crafting sanctuaries of beauty across East Central Minnesota. A faith-driven pursuit of perfection in every brushstroke.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-12 h-12 flex items-center justify-center border border-gold/30 text-gold hover:bg-gold hover:text-primary transition-all duration-500 group"
                                >
                                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Pillars */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs uppercase tracking-[0.3em] font-black text-gold mb-12">Essence</h4>
                        <ul className="space-y-6">
                            {["About", "Services", "Portfolio", "Reviews", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={`/${link.toLowerCase()}`}
                                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm font-bold uppercase tracking-widest"
                                    >
                                        <div className="w-0 h-px bg-gold group-hover:w-4 transition-all" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="text-xs uppercase tracking-[0.3em] font-black text-gold mb-12">Masteries</h4>
                        <ul className="space-y-6">
                            {[
                                { name: "Interior Painting", href: "#interior" },
                                { name: "Exterior Painting", href: "#exterior" },
                                { name: "Cabinet Refinishing", href: "#cabinets" },
                                { name: "Drywall Repair", href: "#drywall" }
                            ].map((s) => (
                                <li key={s.name}>
                                    <Link
                                        href={`/services${s.href}`}
                                        className="text-gray-400 hover:text-white transition-colors flex items-center justify-between group text-sm font-bold uppercase tracking-widest"
                                    >
                                        <span>{s.name}</span>
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Pillar */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs uppercase tracking-[0.3em] font-black text-gold mb-12">Sanctuary</h4>
                        <div className="space-y-10">
                            <div className="group cursor-pointer">
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-black">Direct Line</div>
                                <a href="tel:XXXXXXXXXX" className="text-2xl font-black text-white group-hover:text-gold transition-colors tabular">
                                    (XXX) XXX-XXXX
                                </a>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-black">Mailing Address</div>
                                <div className="text-white font-bold leading-loose text-pretty">
                                    Mora, MN & Serving<br />
                                    East Central Minnesota
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Architectural Bar */}
                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-black">
                        © {currentYear} Trinity Painting & Renewal Services
                    </div>
                    <div className="flex gap-12">
                        {[
                            "Licensed & Insured",
                            "BBB Accredited"
                        ].map((badge) => (
                            <div key={badge} className="flex items-center gap-3">
                                <div className="w-1 h-1 bg-gold rounded-full" />
                                <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black">{badge}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
