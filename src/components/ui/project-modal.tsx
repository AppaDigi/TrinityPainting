"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { CompletedProject } from "@/data/completed-projects";

interface ProjectModalProps {
    project: CompletedProject | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-3xl shadow-2xl border border-white/10"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-all border border-white/20 hover:scale-105"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="p-6 sm:p-10">
                            <div className="flex flex-col md:flex-row gap-4 justify-between md:items-end mb-8 border-b border-border pb-6">
                                <div>
                                    <div className="flex items-center gap-2 text-gold mb-2 font-bold text-xs uppercase tracking-widest">
                                        <MapPin className="h-4 w-4" />
                                        {project.city}
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif text-primary leading-tight">
                                        {project.title}
                                    </h2>
                                </div>
                                <div>
                                    <span className="inline-block px-4 py-2 bg-primary/5 text-primary rounded-full text-xs font-bold uppercase tracking-widest border border-primary/10">
                                        {project.serviceType}
                                    </span>
                                </div>
                            </div>

                            <div className="mb-10 text-muted-foreground text-lg leading-relaxed font-light">
                                <p>{project.description}</p>
                            </div>

                            {/* Before/After Hub */}
                            {(!project.beforeImages || !project.afterImages) ? (
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Before Image */}
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-primary/70">Before</h3>
                                        </div>
                                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-border group">
                                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                                            <Image
                                                src={project.beforeImage}
                                                alt={`Before: ${project.title}`}
                                                fill
                                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                            />
                                        </div>
                                    </div>

                                    {/* After Image */}
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-bold uppercase tracking-widest text-gold flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-gold" />
                                                After
                                            </h3>
                                        </div>
                                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gold/30">
                                            <Image
                                                src={project.afterImage}
                                                alt={`After: ${project.title}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-12">
                                    <div className="space-y-6">
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-primary/70 border-b border-border pb-2">Before Gallery</h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                            {project.beforeImages.map((img, idx) => (
                                                <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-border group">
                                                    <Image src={img} alt={`Before ${idx + 1}`} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-110" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <h3 className="text-sm font-bold uppercase tracking-widest text-gold flex items-center gap-2 border-b border-gold/20 pb-2">
                                            <span className="w-2 h-2 rounded-full bg-gold" />
                                            After Gallery
                                        </h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                            {project.afterImages.map((img, idx) => (
                                                <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border border-gold/30">
                                                    <Image src={img} alt={`After ${idx + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-500" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
