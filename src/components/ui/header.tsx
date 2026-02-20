"use client";

import Link from 'next/link';
import { Button } from './button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header({ onOpenQuote, theme = 'dark' }: { onOpenQuote?: () => void, theme?: 'light' | 'dark' }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredService, setHoveredService] = useState(false);

    const isLightText = !scrolled && theme === 'dark';

    // Scroll effect for glassmorphism
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        { title: "Interior Painting", href: "/services/interior-painting" },
        { title: "Exterior Painting", href: "/services/exterior-painting" },
        { title: "Cabinet Refinishing", href: "/services/cabinet-refinishing" },
        { title: "Commercial Painting", href: "/services/commercial-painting" },
        { title: "Ceiling Painting", href: "/services/ceiling-painting" },
        { title: "Trim & Frames", href: "/services/trim-frame-painting" },
    ];

    const navItems = [
        { title: 'Process', href: '#process' },
        { title: 'Portfolio', href: '/portfolio' },
        { title: 'About', href: '#about' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
                ? "bg-white/95 backdrop-blur-2xl border-primary/5 py-4 shadow-sm"
                : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="container-wide flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <img src="/logo.webp" alt="Trinity Painting" className="h-10 w-auto transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col">
                        <span className={`font-serif font-black text-xl leading-none tracking-tight transition-colors duration-300 ${isLightText ? 'text-white' : 'text-primary'}`}>
                            TRINITY
                        </span>
                        <span className="font-sans text-[0.6rem] font-bold tracking-[0.25em] text-gold uppercase mt-0.5">
                            Painting & Renewal
                        </span>
                    </div>
                </Link>

                <nav className={`hidden lg:flex items-center gap-10 font-medium text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${isLightText ? 'text-white/80' : 'text-primary/80'}`}>
                    {/* Services Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setHoveredService(true)}
                        onMouseLeave={() => setHoveredService(false)}
                    >
                        <button className="flex items-center gap-1 py-4 group-hover:text-gold transition-colors">
                            Services
                        </button>

                        <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 transition-all duration-300 ${hoveredService ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
                            <div className="bg-white/95 backdrop-blur-xl border border-primary/5 rounded-xl shadow-2xl overflow-hidden p-2 flex flex-col gap-1">
                                {services.map((service) => (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        className="block px-4 py-3 text-[10px] font-bold text-primary/70 hover:text-primary hover:bg-gold/10 rounded-lg transition-colors text-center"
                                    >
                                        {service.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {navItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="relative overflow-hidden group py-1"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-gold">{item.title}</span>
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex flex-col items-end text-right">
                        <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${isLightText ? 'text-white/60' : 'text-muted-foreground'}`}>Call or Text</span>
                        <a href="tel:7632252393" className={`font-serif font-bold text-lg leading-none transition-colors ${isLightText ? 'text-white hover:text-gold' : 'text-primary hover:text-gold'}`}>
                            (763) 225-2393
                        </a>
                    </div>
                    <Button
                        onClick={onOpenQuote}
                        className="h-12 px-8 bg-primary text-white hover:bg-gold hover:text-primary transition-all duration-300 rounded-full font-bold uppercase tracking-wider text-xs shadow-lg shadow-black/5"
                    >
                        Get Quote
                    </Button>
                </div>

                <button
                    className={`lg:hidden p-2 transition-colors ${isLightText ? 'text-white hover:text-gold' : 'text-primary hover:text-gold'}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" strokeWidth={1.5} />}
                </button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-primary/5 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                    >
                        <nav className="flex flex-col p-8 gap-6 items-center text-center">
                            <div className="w-full flex flex-col gap-4 border-b border-primary/5 pb-6">
                                <span className="text-gold font-bold text-xs uppercase tracking-[0.25em]">Services</span>
                                {services.map((service) => (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="font-serif text-2xl text-primary font-medium hover:text-gold transition-colors"
                                    >
                                        {service.title}
                                    </Link>
                                ))}
                            </div>

                            {navItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="font-serif text-2xl text-primary/80 font-medium hover:text-gold transition-colors"
                                >
                                    {item.title}
                                </Link>
                            ))}

                            <div className="w-full mt-4">
                                <Button
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        if (onOpenQuote) onOpenQuote();
                                    }}
                                    className="w-full h-14 bg-primary text-white rounded-xl text-lg font-serif"
                                >
                                    Get Your Free Quote
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
