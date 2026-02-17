"use client";

import Link from 'next/link';
import { Button } from './button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header({ onOpenQuote }: { onOpenQuote?: () => void }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll effect for glassmorphism
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
                ? "bg-white/80 backdrop-blur-2xl border-primary/5 py-4 shadow-sm"
                : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="container-wide flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <img src="/logo.webp" alt="Trinity Painting" className="h-10 w-auto transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col">
                        <span className={`font-serif font-black text-xl leading-none tracking-tight transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
                            TRINITY
                        </span>
                        <span className="font-sans text-[0.6rem] font-bold tracking-[0.25em] text-gold uppercase mt-0.5">
                            Painting & Renewal
                        </span>
                    </div>
                </Link>

                <nav className={`hidden lg:flex items-center gap-10 font-medium text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${scrolled ? 'text-primary/80' : 'text-white/80'}`}>
                    {['Services', 'Process', 'Portfolio', 'About'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="relative overflow-hidden group py-1"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-gold">{item}</span>
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex flex-col items-end text-right">
                        <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${scrolled ? 'text-muted-foreground' : 'text-white/60'}`}>Call or Text</span>
                        <a href="tel:7632252393" className={`font-serif font-bold text-lg leading-none transition-colors ${scrolled ? 'text-primary hover:text-gold' : 'text-white hover:text-gold'}`}>
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
                    className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-primary hover:text-gold' : 'text-white hover:text-gold'}`}
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
                        className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-primary/5 shadow-2xl overflow-hidden"
                    >
                        <nav className="flex flex-col p-8 gap-8 items-center text-center">
                            {['Services', 'Process', 'Portfolio', 'About'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="font-serif text-3xl text-primary font-medium hover:text-gold transition-colors"
                                >
                                    {item}
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
