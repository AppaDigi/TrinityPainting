"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { QuoteModal } from "@/components/ui/quote-modal";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import { ServiceCarousel, type Service as CarouselService } from "@/components/ui/services-card";
import { services } from "@/lib/services";
import { LocationContent } from "@/data/location-content";

interface LocationHubProps {
    location: LocationContent;
    slug: string; // e.g., 'edina'
}

export default function LocationHub({ location, slug }: LocationHubProps) {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    // List of core services to show in the carousel
    const targetServiceSlugs = [
        "interior-painting",
        "exterior-painting",
        "cabinet-refinishing",
        "ceiling-painting",
        "commercial-painting"
    ];
    
    const locationServices: CarouselService[] = targetServiceSlugs
        .map((sSlug) => services.find(s => s.slug === sSlug))
        .filter((s): s is NonNullable<typeof s> => !!s)
        .map((s, idx) => {
            let customHref = undefined;
            // Create localized links for interior, exterior, and cabinets
            if (s.slug === "interior-painting") customHref = `/locations/${slug}-interior-painting`;
            if (s.slug === "exterior-painting") customHref = `/locations/${slug}-exterior-painting`;
            if (s.slug === "cabinet-refinishing") customHref = `/locations/${slug}-cabinet-painting`;

            return {
                number: `00${idx + 1}`,
                title: s.title,
                slug: s.slug,
                description: s.shortDescription,
                icon: s.icon,
                image: s.image,
                href: customHref
            };
        });

    return (
        <div className="relative min-h-screen w-full flex flex-col font-sans overflow-x-hidden bg-background">
            <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/editorial-home.jpeg"
                            alt={`${location.city} Painting Contractor`}
                            fill
                            className="object-cover brightness-[0.25] scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />
                    </div>

                    <div className="container relative z-10 text-center px-6">
                        <div className="flex items-center justify-center gap-2 text-gold/60 text-[10px] uppercase tracking-[0.4em] font-bold mb-6 animate-fade-in">
                            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-gold">Locations</span>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-gold">{location.city}</span>
                        </div>
                        <h1 className="font-serif font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none mb-8">
                            Painting Contractor in <br className="hidden md:block" />
                            <span className="text-gold italic font-light">{location.city}, MN</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12">
                            {location.description}
                        </p>
                        <Button
                            onClick={() => setIsQuoteModalOpen(true)}
                            size="lg"
                            className="h-16 px-10 bg-gold text-primary hover:bg-white hover:text-black transition-all rounded-none uppercase tracking-widest font-bold shadow-2xl shadow-gold/20"
                        >
                            Get a Free {location.city} Painting Estimate
                            <ArrowRight className="ml-3 h-5 w-5" />
                        </Button>
                    </div>
                </section>

                {/* Intro Content Section */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container px-6 max-w-4xl text-center relative z-10">
                        <h2 className="text-primary text-4xl md:text-6xl font-serif font-black tracking-tight leading-tight mb-8">
                            {location.introTitle}
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed whitespace-pre-line mb-8">
                            {location.introContent1}
                        </p>
                        <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed whitespace-pre-line">
                            {location.introContent2}
                        </p>
                    </div>
                </section>

                {/* Services Grid Section */}
                <section id="services" className="py-[var(--section-spacing)] bg-surface-50 relative border-t border-border overflow-hidden">
                    <div className="container-wide">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
                            <div className="max-w-xl">
                                <span className="text-gold font-bold text-xs uppercase tracking-[0.25em] mb-4 block">What We Do in {location.city}</span>
                                <h2 className="text-primary text-4xl md:text-5xl font-serif font-black">Our Core Services.</h2>
                            </div>
                        </div>

                        <ServiceCarousel services={locationServices} />
                    </div>
                </section>

                {/* Why Trinity Section */}
                <section className="py-24 bg-primary text-white relative flex justify-center items-center">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                    
                    <div className="container px-6 max-w-4xl text-center relative z-10">
                        <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Standard</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-black mb-8 leading-tight">
                            {location.whyTitle}
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 mb-10">
                            {[
                                "Minnesota Licensed",
                                "Sherwin-Williams Certified",
                                "Faith-Focused",
                                "Fully Insured"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/80 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] bg-white/5 py-2 px-4 rounded-full border border-white/10">
                                    <CheckCircle2 className="h-4 w-4 text-gold" />
                                    {text}
                                </div>
                            ))}
                        </div>
                        <div className="text-lg md:text-xl text-white/60 font-light leading-relaxed space-y-6 text-left">
                            <p className="whitespace-pre-line">{location.whyContent}</p>
                            {location.longContent1 && (
                                <p className="whitespace-pre-line border-l-2 border-gold/30 pl-8 mt-8 italic">
                                    {location.longContent1}
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {/* Local Area SEO Section */}
                {(location.longContent2 || location.neighborhoodList) && (
                    <section className="py-24 bg-white border-t border-border overflow-hidden">
                        <div className="container px-6 max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                                <div>
                                    <h2 className="text-primary text-3xl md:text-4xl font-serif font-black mb-8 leading-tight">
                                        Trusted by Homeowners Across <span className="text-gold italic">{location.city}</span>
                                    </h2>
                                    <div className="space-y-6 text-muted-foreground font-light leading-relaxed whitespace-pre-line">
                                        {location.longContent2 || `Our team is dedicated to providing superior results for every property in ${location.city}. We understand the local architecture and the specific technical requirements for creating a long-lasting finish in the Minnesota climate.`}
                                    </div>
                                </div>
                                <div className="bg-surface-50 p-8 md:p-12 rounded-[2rem] border border-border">
                                    <h3 className="text-xl font-serif font-black text-primary mb-6 uppercase tracking-tight italic">Service Highlights:</h3>
                                    <ul className="space-y-6">
                                        {[
                                            { title: "Surgical Prep", desc: "We spend 70% of the project time in prep—scraping, sanding, and caulking to ensure permanence." },
                                            { title: "Elite Materials", desc: "We exclusively specify Sherwin-Williams premium lines like Duration and Emerald for MN durability." },
                                            { title: "Radical Transparency", desc: "No hidden fees, no vague 'materials' lines. You see exactly where every dollar of your investment goes." },
                                            { title: "God-Honoring Craft", desc: "Our faith drives our quality standard. We work with a sense of stewardship for your home and your trust." }
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4">
                                                <CheckCircle2 className="h-6 w-6 text-gold shrink-0" />
                                                <div>
                                                    <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-1">{item.title}</h4>
                                                    <p className="text-sm text-muted-foreground leading-relaxed italic">{item.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    {location.neighborhoodList && (
                                        <div className="mt-10 pt-10 border-t border-border">
                                            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-primary mb-4">Areas We Serve in {location.city}:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {location.neighborhoodList.map(n => (
                                                    <span key={n} className="text-[9px] font-bold uppercase tracking-widest text-gold bg-gold/5 px-3 py-1 rounded-full border border-gold/10">
                                                        {n}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Final CTA */}
                <section className="py-24 bg-gold relative overflow-hidden flex justify-center text-center">
                    <div className="container px-6 text-primary relative z-10">
                        <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight mb-8">
                            Ready to renew <br /><span className="italic">your property?</span>
                        </h2>
                        <p className="max-w-xl mx-auto text-primary/80 font-bold uppercase tracking-widest text-xs mb-12">
                            Transform your space with the professionals who care about your project as much as you do.
                        </p>
                        <Button
                            onClick={() => setIsQuoteModalOpen(true)}
                            size="lg"
                            className="h-20 px-12 bg-primary text-white hover:bg-white hover:text-black transition-all rounded-none font-black uppercase tracking-widest text-lg shadow-2xl"
                        >
                            Get A Free {location.city} Painting Estimate
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />

            <QuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </div>
    );
}
