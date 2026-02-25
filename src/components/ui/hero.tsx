"use client";

import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import Link from "next/link";
import Image from "next/image";

const teamPhotos = [
    {
        initials: "DT",
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
        initials: "MK",
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    {
        initials: "JR",
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    {
        initials: "SL",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    {
        initials: "RP",
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
];

const stats = [
    { label: "YEARS OF EXPERIENCE", value: "7+" },
    { label: "HAPPY HOMEOWNERS", value: "500+" },
    { label: "5-STAR REVIEWS", value: "200+" },
    { label: "SERVING EAST CENTRAL MN", value: "✦" },
];

function AvatarStack() {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex -space-x-3">
                {teamPhotos.map((member, i) => (
                    <div
                        className="relative h-10 w-10 rounded-full border-2 border-primary overflow-hidden bg-neutral-800"
                        key={member.initials}
                        style={{ zIndex: teamPhotos.length - i }}
                    >
                        <Image
                            alt={`Team member ${member.initials}`}
                            src={member.src}
                            fill
                            className="object-cover"
                            sizes="40px"
                        />
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                    ))}
                </div>
                <span className="text-white/60 text-[10px] font-medium mt-0.5 uppercase tracking-tighter">
                    200+ Five Star Reviews
                </span>
            </div>
        </div>
    );
}

function StatsMarquee() {
    return (
        <Marquee
            className="border-white/10 border-t bg-black/50 py-3 backdrop-blur-md [--duration:45s] [--gap:4rem]"
            pauseOnHover
            repeat={4}
        >
            {stats.map((stat, i) => (
                <div
                    className="flex items-center gap-4 whitespace-nowrap"
                    key={`${stat.label}-${i}`}
                >
                    <span className="font-bold font-serif text-white/40 text-[10px] tracking-[0.2em] uppercase">
                        {stat.label}
                    </span>
                    <span className="font-bold text-xs text-white">
                        {stat.value}
                    </span>
                    <span className="text-gold/40 text-[10px]">✦</span>
                </div>
            ))}
        </Marquee>
    );
}

export default function Hero({ onOpenQuote }: { onOpenQuote?: () => void }) {
    return (
        <section className="relative flex h-screen min-h-[850px] w-full flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-bg-new.png"
                    alt="Professional Painting Service"
                    fill
                    className="object-cover brightness-[0.25] scale-105"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
            </div>

            {/* Center Content - Headline + CTA Card */}
            <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 mx-auto text-center mb-12">
                <div className="bg-black/30 backdrop-blur-md p-8 sm:p-12 md:p-20 border border-white/10 rounded-3xl lg:rounded-[2.5rem] shadow-2xl">
                    <h1 className="font-serif font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight mb-12">
                        Faith In <span className="text-gold italic font-light">Every</span>
                        <br />
                        <span className="text-gold italic font-light">Stroke</span>
                        <span className="text-white"> We Make</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button
                            size="lg"
                            onClick={onOpenQuote}
                            className="h-16 px-10 text-sm font-bold bg-gold text-primary hover:bg-white hover:text-black transition-all rounded-none uppercase tracking-widest shadow-[0_0_50px_-10px_rgba(198,168,124,0.4)]"
                        >
                            Request Estimate
                            <span className="ml-4 border-l border-primary/20 pl-4">
                                <ArrowRight className="h-5 w-5" />
                            </span>
                        </Button>
                        <Link href="#process">
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-16 px-10 text-sm font-bold text-white border-white/25 hover:bg-white/10 hover:border-white/40 transition-all rounded-none uppercase tracking-widest backdrop-blur-sm"
                            >
                                Our Process
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Elements */}
            <div className="absolute bottom-0 left-0 w-full z-10">
                <div className="container-wide pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-8">
                        {/* Empty left for layout balance */}
                        <div className="hidden md:block"></div>

                        {/* Center: Avatar Stack */}
                        <div className="flex justify-center">
                            <div className="bg-black/40 backdrop-blur-sm py-4 px-6 rounded-3xl border border-white/10">
                                <AvatarStack />
                            </div>
                        </div>

                        {/* Right: Description */}
                        <div className="flex justify-center md:justify-end">
                            <p className="max-w-xs text-[10px] text-white/50 italic md:text-xs lg:text-right leading-relaxed font-light">
                                We don&apos;t just paint houses; we steward homes. From the first consultation to the final walkthrough, experience the intersection of professional craftsmanship and uncompromising integrity.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Marquee at absolute bottom */}
                <StatsMarquee />
            </div>
        </section>
    );
}
