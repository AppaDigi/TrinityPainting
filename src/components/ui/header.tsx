"use client";

import Link from 'next/link';
import { Button } from './button';
import { Menu, X, ArrowRight, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
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

    // Lock scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const services = [
        { title: "Interior Painting", href: "/services/interior-painting" },
        { title: "Exterior Painting", href: "/services/exterior-painting" },
        { title: "Cabinet Refinishing", href: "/services/cabinet-refinishing" },
        { title: "Commercial Painting", href: "/services/commercial-painting" },
        { title: "Ceiling Painting", href: "/services/ceiling-painting" },
        { title: "Trim & Frames", href: "/services/trim-frame-painting" },
    ];

    const navItems = [
        { title: 'Portfolio', href: '/portfolio' },
        { title: 'About', href: '/#about' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${scrolled
                ? "bg-white/95 backdrop-blur-2xl border-primary/5 py-4 shadow-sm"
                : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="container-wide flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group relative z-[110]">
                    <div className="relative">
                        <img src="/logo.webp" alt="Trinity Painting" className="h-10 w-auto transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col">
                        <span className={`font-serif font-black text-xl leading-none tracking-tight transition-colors duration-300 ${isMenuOpen ? 'text-primary' : (isLightText ? 'text-white' : 'text-primary')}`}>
                            TRINITY
                        </span>
                        <span className="font-sans text-[0.6rem] font-bold tracking-[0.25em] text-gold uppercase mt-0.5">
                            Painting & Renewal
                        </span>
                    </div>
                </Link>

                <nav className={`hidden lg:flex items-center gap-10 font-bold text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${isLightText ? 'text-white/80' : 'text-primary/80'}`}>
                    {/* Services Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setHoveredService(true)}
                        onMouseLeave={() => setHoveredService(false)}
                    >
                        <Link
                            href="/services"
                            className="flex items-center gap-1 py-4 group-hover:text-gold transition-colors uppercase cursor-pointer"
                        >
                            Services
                        </Link>

                        <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 transition-all duration-300 ${hoveredService ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
                            <div className="bg-white border border-primary/5 rounded-2xl shadow-2xl overflow-hidden p-2 flex flex-col gap-1">
                                {services.map((service) => (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        className="block px-6 py-4 text-[10px] font-black text-primary/70 hover:text-primary hover:bg-gold/10 rounded-xl transition-all uppercase tracking-widest"
                                    >
                                        {service.title}
                                    </Link>
                                ))}
                                <div className="border-t border-primary/5 mt-1 pt-1">
                                    <Link
                                        href="/services"
                                        className="block px-6 py-4 text-[10px] font-black text-gold hover:bg-gold/10 rounded-xl transition-all uppercase tracking-widest text-center"
                                    >
                                        View All Services
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {navItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="relative overflow-hidden group py-1"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-gold uppercase">{item.title}</span>
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-8 relative z-[110]">
                    <div className="flex flex-col items-end text-right">
                        <span className={`text-[9px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${isLightText ? 'text-white/60' : 'text-muted-foreground'}`}>Call or Text</span>
                        <a href="tel:7632252393" className={`font-serif font-bold text-lg leading-none transition-colors ${isLightText ? 'text-white hover:text-gold' : 'text-primary hover:text-gold'}`}>
                            (763) 225-2393
                        </a>
                    </div>
                    <Button
                        onClick={onOpenQuote}
                        className="h-12 px-8 bg-primary text-white hover:bg-gold hover:text-primary transition-all duration-300 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-black/5"
                    >
                        Get Quote
                    </Button>
                </div>

                <button
                    className={`lg:hidden relative z-[110] p-2 transition-colors ${isMenuOpen ? 'text-primary' : (isLightText ? 'text-white hover:text-gold' : 'text-primary hover:text-gold')}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" strokeWidth={1.5} />}
                </button>
            </div>

            {/* Full Screen Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[105] bg-white flex flex-col lg:hidden"
                    >
                        <div className="flex-grow flex flex-col overflow-y-auto px-8 pt-32 pb-12">
                            <div className="space-y-12">
                                {/* Main Nav */}
                                <div className="flex flex-col gap-6">
                                    <span className="text-gold font-black text-[10px] uppercase tracking-[0.3em]">Navigation</span>
                                    <div className="flex flex-col gap-4">
                                        <Link
                                            href="/"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-4xl font-serif font-black text-primary hover:text-gold transition-colors uppercase"
                                        >
                                            Home
                                        </Link>
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="text-4xl font-serif font-black text-primary hover:text-gold transition-colors uppercase"
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Services */}
                                <div className="flex flex-col gap-6">
                                    <Link
                                        href="/services"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-gold font-black text-[10px] uppercase tracking-[0.3em] hover:text-primary transition-colors inline-block"
                                    >
                                        Our Services
                                    </Link>
                                    <div className="grid grid-cols-1 gap-4">
                                        {services.map((service) => (
                                            <Link
                                                key={service.href}
                                                href={service.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="group flex items-center justify-between py-2 border-b border-primary/5 text-xl font-serif font-medium text-primary/80 hover:text-primary transition-colors uppercase"
                                            >
                                                {service.title}
                                                <ArrowRight className="h-5 w-5 text-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Contact Info */}
                            <div className="mt-auto pt-12 space-y-8">
                                <div className="grid grid-cols-1 gap-6">
                                    <a href="tel:7632252393" className="flex items-center gap-4 group">
                                        <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Call or Text</p>
                                            <p className="text-xl font-serif font-bold text-primary">(763) 225-2393</p>
                                        </div>
                                    </a>
                                </div>

                                <Button
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        if (onOpenQuote) onOpenQuote();
                                    }}
                                    className="w-full h-16 bg-primary text-white rounded-2xl text-sm font-bold uppercase tracking-[0.2em] shadow-xl shadow-primary/20"
                                >
                                    Get A Free Quote
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
