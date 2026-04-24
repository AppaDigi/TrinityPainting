"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { QuoteForm } from "./quote-form";

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center sm:p-4">
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
                        className="relative w-full max-w-2xl h-[100dvh] sm:h-auto sm:max-h-[90vh] bg-white rounded-none sm:rounded-[2.5rem] shadow-2xl overflow-y-auto sm:border sm:border-white/10 scrollbar-hide"
                    >
                        {/* Header Image/Pattern Overlay */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <button
                            onClick={onClose}
                            aria-label="Close modal"
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-gray-50/50 sm:bg-transparent hover:bg-gray-100 text-gray-500 hover:text-primary transition-colors z-20"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <div className="relative z-10 px-5 py-10 sm:p-8 md:p-12">
                            <div className="mb-8 sm:mb-10">
                                <span className="text-gold font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">Elevate Your Space</span>
                                <h2 className="text-primary text-4xl md:text-5xl font-serif font-black tracking-tight leading-none">
                                    Request Your <br />
                                    <span className="italic text-gold">Premium Quote</span>
                                </h2>
                                <p className="text-muted-foreground mt-4 text-sm font-medium">
                                    Tell us about your project, and we&apos;ll craft a personalized solution tailored to your home&apos;s unique character.
                                </p>
                            </div>

                            <QuoteForm onSuccess={onClose} />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
