"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { type LucideIcon, ArrowRight, ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";
import { ICON_MAP } from "@/lib/services";

export interface Service {
    number: string;
    title: string;
    slug: string;
    description: string;
    icon: any;
    image?: string;
}

interface ServiceCardProps {
    service: Service;
    index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
    const Icon = ICON_MAP[service.icon as string] || HelpCircle;

    return (
        <Link
            href={`/services/${service.slug}`}
            className={cn(
                "group relative flex flex-col justify-between",
                "w-[320px] sm:w-[360px] lg:w-[400px] h-[480px] shrink-0",
                "rounded-[2rem] overflow-hidden",
                "bg-surface-100 border border-border",
                "select-none block",
                "transition-all duration-500 ease-out",
                "hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 hover:border-gold/30"
            )}
        >
            {/* Background Image with Black Overlay */}
            {service.image ? (
                <div className="absolute inset-0">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                </div>
            ) : (
                <div className="absolute inset-0 bg-primary">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold/10 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3" />
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full p-10">
                {/* Top section */}
                <div className="flex items-start justify-between mb-auto">
                    <span className="font-serif text-5xl font-black text-white/10 group-hover:text-gold/20 transition-colors duration-500 leading-none tracking-tighter">
                        {service.number}
                    </span>
                    <div className="h-12 w-12 rounded-xl flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-500">
                        <Icon className="h-7 w-7" strokeWidth={1} />
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-auto space-y-4">
                    <div>
                        <h3 className="!text-3xl !font-serif !font-bold !text-gold !tracking-tight !leading-tight uppercase italic underline decoration-gold/30 underline-offset-8 decoration-1 group-hover:decoration-gold transition-all duration-300">
                            {service.title}
                        </h3>
                    </div>

                    <p className="text-sm text-white/80 font-light leading-relaxed line-clamp-3 group-hover:text-white transition-colors duration-300">
                        {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 pt-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold/60 group-hover:text-gold transition-colors duration-300">
                            View Project Details
                        </span>
                        <ArrowRight className="h-3 w-3 text-gold/40 group-hover:text-gold group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                </div>
            </div>
        </Link>
    );
}

interface ServiceCarouselProps {
    services: Service[];
    className?: string;
}

export function ServiceCarousel({ services, className }: ServiceCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 10);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        checkScroll();
        el.addEventListener("scroll", checkScroll, { passive: true });
        window.addEventListener("resize", checkScroll);
        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, [checkScroll]);

    const scroll = (direction: "left" | "right") => {
        const el = scrollRef.current;
        if (!el) return;
        const cardWidth = 420; // card width + gap
        el.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };

    // Drag to scroll
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftStart, setScrollLeftStart] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX);
        setScrollLeftStart(scrollRef.current?.scrollLeft ?? 0);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const walk = (e.pageX - startX) * 1.5;
        scrollRef.current.scrollLeft = scrollLeftStart - walk;
    };

    const handleMouseUp = () => setIsDragging(false);

    return (
        <div className={cn("relative w-full", className)}>
            {/* Navigation Buttons */}
            <div className="hidden lg:flex items-center gap-3 absolute -top-20 right-0 z-10">
                <button
                    onClick={() => scroll("left")}
                    disabled={!canScrollLeft}
                    className={cn(
                        "h-12 w-12 rounded-full border flex items-center justify-center transition-all duration-300",
                        canScrollLeft
                            ? "border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary"
                            : "border-border text-muted-foreground/30 cursor-not-allowed"
                    )}
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                    onClick={() => scroll("right")}
                    disabled={!canScrollRight}
                    className={cn(
                        "h-12 w-12 rounded-full border flex items-center justify-center transition-all duration-300",
                        canScrollRight
                            ? "border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary"
                            : "border-border text-muted-foreground/30 cursor-not-allowed"
                    )}
                >
                    <ChevronRight className="h-5 w-5" />
                </button>
            </div>

            {/* Carousel Track */}
            <div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                className={cn(
                    "flex gap-6 overflow-x-auto pb-8 pt-2 px-1 snap-x snap-mandatory",
                    "scrollbar-hide",
                    isDragging ? "cursor-grabbing" : "cursor-grab",
                    "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                )}
            >
                {services.map((service, i) => (
                    <div key={service.number} className="snap-start">
                        <ServiceCard service={service} index={i} />
                    </div>
                ))}
            </div>

            {/* Fade edges */}
            {canScrollLeft && (
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface-50 to-transparent z-10 hidden lg:block" />
            )}
            {canScrollRight && (
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface-50 to-transparent z-10 hidden lg:block" />
            )}
        </div>
    );
}
