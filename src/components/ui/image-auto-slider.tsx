"use client";

import React from 'react';
import Image from 'next/image';

interface ImageAutoSliderProps {
    images: string[];
    title?: string;
    subtitle?: string;
}

export const ImageAutoSlider = ({ images, title, subtitle }: ImageAutoSliderProps) => {
    // Duplicate images for seamless loop
    const duplicatedImages = [...images, ...images];

    return (
        <section className="py-24 bg-black relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0" />

            <div className="container relative z-10 mb-16 text-center">
                {subtitle && (
                    <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block animate-fade-in">
                        {subtitle}
                    </span>
                )}
                {title && (
                    <h2 className="font-serif font-black text-4xl md:text-6xl text-white tracking-tight leading-none">
                        {title}
                    </h2>
                )}
            </div>

            <style jsx>{`
                @keyframes scroll-right {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .infinite-scroll {
                    animation: scroll-right 40s linear infinite;
                }

                .scroll-container {
                    mask-image: linear-gradient(
                        90deg,
                        transparent 0%,
                        black 15%,
                        black 85%,
                        transparent 100%
                    );
                    -webkit-mask-image: linear-gradient(
                        90deg,
                        transparent 0%,
                        black 15%,
                        black 85%,
                        transparent 100%
                    );
                }

                .image-item {
                    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
                }

                .image-item:hover {
                    transform: scale(1.05);
                    filter: brightness(1.2);
                }
            `}</style>

            {/* Scrolling images container */}
            <div className="relative z-10 w-full flex items-center justify-center py-4">
                <div className="scroll-container w-full">
                    <div className="infinite-scroll flex gap-6 w-max px-6">
                        {duplicatedImages.map((image, index) => (
                            <div
                                key={index}
                                className="image-item flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[350px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                            >
                                <img
                                    src={image}
                                    alt={`Gallery image ${(index % images.length) + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
        </section>
    );
};
