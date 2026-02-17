"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "/about" },
        {
            name: "Services",
            href: "/services",
            dropdown: [
                { name: "Interior Painting", href: "/services/interior-painting" },
                { name: "Exterior Painting", href: "/services/exterior-painting" },
                { name: "Cabinet Refinishing", href: "/services/cabinet-refinishing" },
                { name: "Commercial Painting", href: "/services/commercial-painting" },
                { name: "Ceiling Painting", href: "/services/ceiling-painting" },
                { name: "Trim & Frame", href: "/services/trim-and-frame" },
            ]
        },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Reviews", href: "/reviews" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-black shadow-2xl py-3 border-b border-gold/20" : "bg-transparent py-6"
                    }`}
            >
                <div className="container flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="cursor-pointer transition-transform hover:scale-105">
                        <Image
                            src="/logo.webp"
                            alt="Trinity Painting & Renewal Services"
                            width={180}
                            height={60}
                            className="h-14 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg-flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => link.dropdown && setServicesDropdownOpen(true)}
                                onMouseLeave={() => link.dropdown && setServicesDropdownOpen(false)}
                            >
                                <Link
                                    href={link.href}
                                    className="text-sm font-semibold text-white hover-text-gold transition-colors cursor-pointer uppercase tracking-wide flex items-center space-x-1"
                                >
                                    <span>{link.name}</span>
                                    {link.dropdown && <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />}
                                </Link>

                                {/* Dropdown Menu */}
                                {link.dropdown && (
                                    <AnimatePresence>
                                        {servicesDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-64 bg-primary-soft border-2 border-gold shadow-2xl"
                                            >
                                                {link.dropdown.map((item, index) => (
                                                    <Link
                                                        key={index}
                                                        href={item.href}
                                                        className="block px-6 py-3 text-white hover:bg-gold hover:text-primary transition-colors border-b border-gray-800 last:border-b-0"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}

                        <a
                            href="tel:XXXXXXXXXX"
                            className="flex items-center space-x-2 text-white font-semibold cursor-pointer hover-text-gold transition-colors"
                        >
                            <Phone size={18} className="text-gold" />
                            <span>(XXX) XXX-XXXX</span>
                        </a>
                        <Link href="/quote" className="btn-primary">
                            Free Estimate
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg-hidden p-2 text-white cursor-pointer hover-text-gold transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 bg-primary z-40 lg-hidden flex flex-col justify-center items-center space-y-6 overflow-y-auto py-20"
                    >
                        {navLinks.map((link) => (
                            <div key={link.name} className="text-center">
                                <Link
                                    href={link.href}
                                    className="text-2xl font-bold text-white hover-text-gold transition-colors block mb-3"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                                {link.dropdown && (
                                    <div className="space-y-2">
                                        {link.dropdown.map((item, index) => (
                                            <Link
                                                key={index}
                                                href={item.href}
                                                className="block text-lg text-gray-300 hover-text-gold transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <a
                            href="tel:XXXXXXXXXX"
                            className="flex items-center space-x-2 text-white font-bold text-lg hover-text-gold transition-colors"
                        >
                            <Phone size={20} className="text-gold" />
                            <span>(XXX) XXX-XXXX</span>
                        </a>
                        <Link
                            href="/quote"
                            className="btn-primary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Free Estimate
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
