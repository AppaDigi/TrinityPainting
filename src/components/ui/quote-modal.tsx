"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, User, Mail, Phone, Home, PaintBucket, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        onClose();
        router.push("/thank-you");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10"
                    >
                        {/* Header Image/Pattern Overlay */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-primary transition-colors z-20"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <div className="relative z-10 p-8 md:p-12">
                            <div className="mb-10">
                                <span className="text-gold font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">Elevate Your Space</span>
                                <h2 className="text-primary text-4xl md:text-5xl font-serif font-black tracking-tight leading-none">
                                    Request Your <br />
                                    <span className="italic text-gold">Premium Quote</span>
                                </h2>
                                <p className="text-muted-foreground mt-4 text-sm font-medium">
                                    Tell us about your project, and we'll craft a personalized solution tailored to your home's unique character.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Full Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-gold transition-colors" />
                                            <input
                                                required
                                                type="text"
                                                className="w-full h-14 pl-12 pr-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all font-medium text-primary"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Phone Number</label>
                                        <div className="relative group">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-gold transition-colors" />
                                            <input
                                                required
                                                type="tel"
                                                className="w-full h-14 pl-12 pr-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all font-medium text-primary"
                                                placeholder="(763) ___ - ____"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Email Address</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-gold transition-colors" />
                                        <input
                                            required
                                            type="email"
                                            className="w-full h-14 pl-12 pr-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all font-medium text-primary"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Service Type */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Service Required</label>
                                        <div className="relative group">
                                            <PaintBucket className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-gold transition-colors" />
                                            <select className="w-full h-14 pl-12 pr-10 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all font-medium text-primary appearance-none cursor-pointer">
                                                <option>Interior Painting</option>
                                                <option>Exterior Painting</option>
                                                <option>Cabinet Refinishing</option>
                                                <option>Full Renovation</option>
                                                <option>Other Service</option>
                                            </select>
                                            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 rotate-90" />
                                        </div>
                                    </div>

                                    {/* Project Area */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Project Site</label>
                                        <div className="relative group">
                                            <Home className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-gold transition-colors" />
                                            <select className="w-full h-14 pl-12 pr-10 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all font-medium text-primary appearance-none cursor-pointer">
                                                <option>Residential</option>
                                                <option>Commercial</option>
                                                <option>Other</option>
                                            </select>
                                            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 rotate-90" />
                                        </div>
                                    </div>
                                </div>

                                {/* Project Description */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Brief Project Description</label>
                                    <div className="relative group">
                                        <MessageSquare className="absolute left-4 top-6 h-4 w-4 text-gray-400 group-focus-within:text-gold transition-colors" />
                                        <textarea
                                            rows={3}
                                            className="w-full p-6 pl-12 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all font-medium text-primary resize-none"
                                            placeholder="Tell us about your colors, rooms, or any specific needs..."
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-16 bg-primary text-white hover:bg-gold hover:text-primary transition-all duration-500 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20 group"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-3">
                                            <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Processing Request...
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-3">
                                            Send Project Request
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                                        </div>
                                    )}
                                </Button>

                                <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest">
                                    <CheckCircle2 className="h-3 w-3 text-gold" />
                                    Responses typically within 24 business hours
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
