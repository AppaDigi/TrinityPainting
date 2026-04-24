"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function WelcomeModal() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (pathname === '/review') return;
        
        const hasSeen = localStorage.getItem('hasSeenWelcomeModal');
        if (!hasSeen) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [pathname]);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('hasSeenWelcomeModal', 'true');
    };

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors border border-white/20 hover:scale-105"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {/* Left: Video */}
                        <div className="w-full md:w-5/12 h-[35vh] md:h-auto min-h-[300px] md:min-h-[500px] bg-black relative">
                            <iframe 
                                src="https://www.youtube.com/embed/W5uuxkOVgDY?autoplay=1&mute=1&loop=1&playlist=W5uuxkOVgDY" 
                                title="Trinity Painting Welcome"
                                className="absolute inset-0 w-full h-full"
                                style={{ border: 0 }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            />
                        </div>

                        {/* Right: Content */}
                        <div className="w-full md:w-7/12 p-6 md:p-10 lg:p-12 flex flex-col justify-center overflow-y-auto">
                            <span className="text-gold font-bold text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-4 block">Welcome to Trinity Painting</span>
                            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4 leading-tight">
                                Transforming Homes with Faith & Excellence
                            </h2>
                            <p className="text-muted-foreground mb-8 leading-relaxed text-sm md:text-base">
                                Since 2018, we've been bringing new life to homes across East Central Minnesota. Whether you need a fresh exterior, a full interior repaint, or a complete cabinet renewal, our team is dedicated to God-honoring craftsmanship.
                            </p>

                            <div className="space-y-4 mt-auto">
                                <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2">Explore Our Services:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <Link onClick={handleClose} href="/services/interior-painting" className="group flex items-center justify-between p-3 rounded-xl border border-border hover:border-gold/50 hover:bg-gold/5 transition-all">
                                        <span className="text-sm font-bold text-primary group-hover:text-gold transition-colors">Interior</span>
                                        <ArrowRight className="h-4 w-4 text-primary/40 group-hover:text-gold transition-colors" />
                                    </Link>
                                    <Link onClick={handleClose} href="/services/exterior-painting" className="group flex items-center justify-between p-3 rounded-xl border border-border hover:border-gold/50 hover:bg-gold/5 transition-all">
                                        <span className="text-sm font-bold text-primary group-hover:text-gold transition-colors">Exterior</span>
                                        <ArrowRight className="h-4 w-4 text-primary/40 group-hover:text-gold transition-colors" />
                                    </Link>
                                    <Link onClick={handleClose} href="/services/cabinet-refinishing" className="group flex items-center justify-between p-3 rounded-xl border border-border hover:border-gold/50 hover:bg-gold/5 transition-all">
                                        <span className="text-sm font-bold text-primary group-hover:text-gold transition-colors">Cabinets</span>
                                        <ArrowRight className="h-4 w-4 text-primary/40 group-hover:text-gold transition-colors" />
                                    </Link>
                                    <Link onClick={handleClose} href="/services/commercial-painting" className="group flex items-center justify-between p-3 rounded-xl border border-border hover:border-gold/50 hover:bg-gold/5 transition-all">
                                        <span className="text-sm font-bold text-primary group-hover:text-gold transition-colors">Commercial</span>
                                        <ArrowRight className="h-4 w-4 text-primary/40 group-hover:text-gold transition-colors" />
                                    </Link>
                                    <Link onClick={handleClose} href="/services" className="group sm:col-span-2 flex items-center justify-center gap-2 p-4 rounded-xl bg-primary text-white hover:bg-gold hover:text-primary transition-all mt-2 shadow-lg shadow-primary/20">
                                        <span className="text-sm font-bold uppercase tracking-widest">View All Services</span>
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
