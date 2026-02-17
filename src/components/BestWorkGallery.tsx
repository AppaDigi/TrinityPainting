"use client";

import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
    { src: "/gallery/img1.jpeg", alt: "Trinity Masterwork 1" },
    { src: "/gallery/img2.jpeg", alt: "Trinity Masterwork 2" },
    { src: "/gallery/img3.jpeg", alt: "Trinity Masterwork 3" },
    { src: "/gallery/img4.jpeg", alt: "Trinity Masterwork 4" },
    { src: "/gallery/img5.jpeg", alt: "Trinity Masterwork 5" },
    { src: "/gallery/img6.jpeg", alt: "Trinity Masterwork 6" },
    { src: "/gallery/img7.jpeg", alt: "Trinity Masterwork 7" },
    { src: "/gallery/img8.jpeg", alt: "Trinity Masterwork 8" },
    { src: "/gallery/img9.jpeg", alt: "Trinity Masterwork 9" },
    { src: "/gallery/img10.jpeg", alt: "Trinity Masterwork 10" },
    { src: "/gallery/img11.jpeg", alt: "Trinity Masterwork 11" },
    { src: "/gallery/img12.jpeg", alt: "Trinity Masterwork 12" },
];

const Row = ({ images, direction = "left", speed = 40 }: { images: typeof galleryImages, direction?: "left" | "right", speed?: number }) => {
    // Duplicate images for seamless loop
    const doubledImages = [...images, ...images];

    return (
        <div className="flex overflow-hidden whitespace-nowrap py-4">
            <motion.div
                className="flex gap-8 px-4"
                animate={{
                    x: direction === "left" ? [0, "-50%"] : ["-50%", 0],
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {doubledImages.map((image, index) => (
                    <div
                        key={index}
                        className="relative w-[300px] md:w-[450px] aspect-[16/10] flex-shrink-0 group overflow-hidden shadow-2xl border border-white/10 bg-black rounded-[15px]"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-0 transition-opacity duration-700" />

                        {/* Subtle Label */}
                        <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="text-[8px] font-black text-gold uppercase tracking-[0.3em] italic">Sanctified Quality</div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const BestWorkGallery = () => {
    // Split images into two rows
    const firstRow = galleryImages.slice(0, 6);
    const secondRow = galleryImages.slice(6, 12);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mb-16">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <span className="glass-badge mb-6 border-black/10 text-primary">Master Gallery</span>
                        <h2 className="text-black font-black italic text-5xl md:text-7xl leading-none">
                            Divine <span className="text-gold">Artistry</span> in Motion
                        </h2>
                    </div>
                    <p className="text-xl text-gray-500 font-light italic max-w-sm border-l-2 border-gold/30 pl-8">
                        A continuous witness to our commitment to Excellence across East Central Minnesota.
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                <Row images={firstRow} direction="left" speed={45} />
                <Row images={secondRow} direction="right" speed={50} />
            </div>
        </section>
    );
};

export default BestWorkGallery;
