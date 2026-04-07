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

export default function MinneapolisClient() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    // Filter out the requested services and format them for the ServiceCarousel
    const targetServiceSlugs = [
        "interior-painting",
        "exterior-painting",
        "cabinet-refinishing",
        "ceiling-painting",
        "commercial-painting"
    ];
    
    const locationServices: CarouselService[] = targetServiceSlugs
        .map((slug) => services.find(s => s.slug === slug))
        .filter((s): s is NonNullable<typeof s> => !!s)
        .map((s, idx) => {
            let customHref = undefined;
            if (s.slug === "interior-painting") customHref = "/locations/minneapolis-interior-painting";
            if (s.slug === "exterior-painting") customHref = "/locations/minneapolis-exterior-painting";
            if (s.slug === "cabinet-refinishing") customHref = "/locations/minneapolis-cabinet-painting";

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
                            alt="Minneapolis Painting Contractor"
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
                            <span className="text-gold">Minneapolis</span>
                        </div>
                        <h1 className="font-serif font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none mb-8">
                            Painting Contractor in <br className="hidden md:block" />
                            <span className="text-gold italic font-light">Minneapolis, MN</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12">
                            Trinity Painting & Renewal serves Minneapolis and the Twin Cities metro. Interior & exterior painting, cabinet refinishing, and popcorn ceiling removal.
                        </p>
                        <Button
                            onClick={() => setIsQuoteModalOpen(true)}
                            size="lg"
                            className="h-16 px-10 bg-gold text-primary hover:bg-white hover:text-black transition-all rounded-none uppercase tracking-widest font-bold shadow-2xl shadow-gold/20"
                        >
                            Get a Free Minneapolis Painting Estimate
                            <ArrowRight className="ml-3 h-5 w-5" />
                        </Button>
                    </div>
                </section>

                {/* Intro Content Section */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container px-6 max-w-4xl text-center relative z-10">
                        <h2 className="text-primary text-4xl md:text-6xl font-serif font-black tracking-tight leading-tight mb-8">
                            Serving the <br /><span className="italic text-gold-dark">Twin Cities</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed whitespace-pre-line mb-8">
                            Trinity Painting & Renewal is proud to serve the vibrant communities across the Twin Cities, including Minneapolis, Uptown, Northeast, South Minneapolis, Edina, St. Louis Park, and surrounding suburbs. We understand the harsh realities of Minnesota winters and their impact on your home&apos;s interior and exterior. For exterior projects, we meticulously plan around our tight May to September window to ensure ideal curing conditions and maximum durability.
                        </p>
                        <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed whitespace-pre-line">
                            Inside your home, our crews operate year-round, delivering exquisite cabinetry refinishing, precise trim enameling, and flawless wall coatings. We combine an obsessive attention to detail with premium American-made Sherwin-Williams paints. Whether you are prepping a South Minneapolis bungalow for sale, or updating a modern Edina interior, we bring God-honoring craftsmanship to every job, recognizing that your home is your sanctuary.
                        </p>
                    </div>
                </section>

                {/* Services Grid Section */}
                <section id="services" className="py-[var(--section-spacing)] bg-surface-50 relative border-t border-border overflow-hidden">
                    <div className="container-wide">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
                            <div className="max-w-xl">
                                <span className="text-gold font-bold text-xs uppercase tracking-[0.25em] mb-4 block">What We Do in Minneapolis</span>
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
                            Why Trinity in Minneapolis?
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
                        <div className="text-lg md:text-xl text-white/60 font-light leading-relaxed space-y-8 text-left">
                            <p>
                                When searching for a <strong>Minneapolis painting contractor</strong>, you need more than just a crew with a brush and a truck. You need a partner who understands the unique architectural history of the Twin Cities, from the historic craftsman homes of South Minneapolis to the modern developments spanning the North Loop and Northeast. Trinity Painting & Renewal is a fully Minnesota-licensed entity, operating with comprehensive liability insurance and OSHA compliance to protect your biggest investment.
                            </p>
                            <p>
                                Our approach to <strong>residential painting in Minneapolis</strong> is built on the foundation of &quot;Radical Transparency.&quot; We know that many homeowners have been burned by vague estimates and hidden costs. At Trinity, our estimate process is an open book. We specify every coating, from the high-build primers used to seal weathered cedar siding to the premium low-VOC enamels perfect for a nursery update in Linden Hills. We are Sherwin-Williams certified professionals who understand high-performance coatings and how they react to the extreme Minnesota climate.
                            </p>
                            <p>
                                Most importantly, we operate as a faith-focused business. This means our &quot;God-Honoring Craftsmanship&quot; isn&apos;t just a slogan&mdash;it&apos;s a commitment to honesty, stewardship, and extreme attention to detail. Whether we&apos;re performing a <strong>popcorn ceiling removal in Minneapolis</strong> or a complete <strong>exterior house painting</strong> transformation, we treat your home as a sanctuary. Serving the metro since 2018, we have mastered the &quot;Surgical Preparation&quot; required to ensure a finish that doesn&apos;t just look good today, but lasts through a decade of MN winters.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Local Area SEO Section */}
                <section className="py-24 bg-white border-t border-border overflow-hidden">
                    <div className="container px-6 max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <div>
                                <h2 className="text-primary text-3xl md:text-4xl font-serif font-black mb-8 leading-tight">
                                    Trusted by Homeowners Across <span className="text-gold italic">Minneapolis Neighborhoods</span>
                                </h2>
                                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                                    <p>
                                        Our crews are a common sight in neighborhoods like <strong>Uptown, Kingfield, and Tangletown</strong>. We understand that a home in <strong>South Minneapolis</strong> often comes with historic millwork that requires a delicate touch and lead-safe practices. Conversely, a modern build in <strong>Northeast</strong> might demand the clean, crisp lines of high-volume airless spraying. 
                                    </p>
                                    <p>
                                        We specialize in overcoming the technical challenges of Minneapolis properties. This includes handling the moisture-prone stucco common in the metro, or the deep grain of vintage oak trim that requires multiple coats of high-solids enamel for a factory-smooth finish. Our <strong>Minneapolis interior painting</strong> services are engineered for longevity, using washable, scuff-resistant finishes that stand up to the rigors of an active Twin Cities lifestyle.
                                    </p>
                                    <p>
                                        For those considering <strong>exterior painting in Minneapolis</strong>, our seasonal planning is meticulous. We monitor local humidity levels and surface temperatures with precision, ensuring that our window of May through September is utilized perfectly. We don&apos;t just &quot;slap on a coat&quot;; we build a resilient shield for your home using products like Sherwin-Williams Emerald, guaranteed to resist the freeze-thaw cycles that dominate our climate.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-surface-50 p-8 md:p-12 rounded-[2rem] border border-border">
                                <h3 className="text-xl font-serif font-black text-primary mb-6 uppercase tracking-tight italic">Why Your Neighbors Choose Us:</h3>
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
                                <div className="mt-10 p-6 bg-primary rounded-2xl text-white text-center">
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 leading-none">Ready for a real quote?</p>
                                    <p className="text-[10px] text-white/60 mb-4 uppercase tracking-widest">Get a detailed breakdown for your Minneapolis home.</p>
                                    <Button 
                                        onClick={() => setIsQuoteModalOpen(true)}
                                        variant="outline" 
                                        className="w-full border-gold text-gold hover:bg-gold hover:text-primary rounded-xl font-black uppercase tracking-widest text-[10px]"
                                    >
                                        Free Quote Estimate
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                            Get A Free Minneapolis Painting Estimate
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
