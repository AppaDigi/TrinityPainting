"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { QuoteModal } from "@/components/ui/quote-modal";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { ServiceCarousel, type Service as CarouselService } from "@/components/ui/services-card";
import { services } from "@/lib/services";
import { LocationContent } from "@/data/location-content";

interface LocationHubProps {
    location: LocationContent;
    slug: string; // e.g., 'edina'
}

const locationFaqs: Record<string, { q: string; a: string }[]> = {
    "Edina": [
        { q: "How much does interior painting cost in Edina, MN?", a: "Interior painting in Edina typically ranges from $3 to $7 per square foot depending on the home's size, finish level, and amount of trim and millwork. Full estate repaints in Country Club or Morningside often run $8,000 to $20,000+. We provide detailed written estimates at no charge." },
        { q: "How much does exterior painting cost for an Edina home?", a: "Exterior painting in Edina typically runs $5,000 to $15,000+ depending on square footage, siding material, and prep requirements. Larger estate homes can exceed this range. We include pressure washing, scraping, caulking, and priming in every Edina exterior estimate." },
        { q: "Do Edina homes have popcorn ceilings that need removal?", a: "Yes — many Edina homes built from the 1960s through the 1980s still have original popcorn or acoustic ceiling texture. Homes built before 1980 may contain asbestos, so testing is strongly recommended. We remove, skim-coat, prime, and paint for a smooth modern finish." },
        { q: "Do you paint or refinish kitchen cabinets in Edina, MN?", a: "Yes — cabinet refinishing is very popular among Edina homeowners who want a luxury kitchen update without a full remodel. We spray-apply hard-wearing enamel in any color for a factory-smooth finish at a fraction of the replacement cost." },
        { q: "Do you work with HOA guidelines or design standards in Edina?", a: "Yes — we're familiar with the color requirements common in Edina's established neighborhoods and HOA communities. We help you select a compliant palette that still achieves the aesthetic upgrade you want." },
        { q: "Are you a licensed painting contractor in Edina, MN?", a: "Yes — fully licensed by the State of Minnesota with general liability insurance and workers' compensation on every project. We serve Edina and the south metro. Free on-site estimates available." },
    ],
    "St. Louis Park": [
        { q: "How much does interior painting cost in St. Louis Park, MN?", a: "Interior painting in St. Louis Park typically ranges from $2 to $6 per square foot. For mid-century SLP homes with plaster walls, additional prep — filling cracks, skim-coating, sealing stains — is often needed and is always included in our written estimates." },
        { q: "How much does exterior painting cost in St. Louis Park, MN?", a: "Exterior painting in St. Louis Park typically runs $3,000 to $9,000 for a standard single-family home. We include pressure washing, scraping, caulking, and priming in every SLP exterior estimate. Free written quotes available." },
        { q: "Do St. Louis Park homes have popcorn ceilings that need removal?", a: "Yes — many SLP homes from the 1960s through the 1980s still have original popcorn or acoustic ceiling texture. Pre-1980 homes may contain asbestos, so testing is important before removal. We remove, skim-coat, prime, and paint for a clean modern finish." },
        { q: "Do you paint or refinish cabinets in St. Louis Park, MN?", a: "Yes. Cabinet refinishing is a cost-effective way to update a dated SLP kitchen. We spray-apply a hard-wearing enamel in any color and finish, transforming your existing cabinets into a modern focal point. Most SLP cabinet jobs are completed in 7 to 10 days." },
        { q: "Do you have experience painting older bungalows and mid-century homes in SLP?", a: "Yes — many St. Louis Park homes were built in the 1950s through 1970s, and we specialize in the prep these properties require. We're experienced with plaster walls, original millwork, and lead-safe practices required for pre-1978 homes." },
        { q: "Are you a licensed painting contractor in St. Louis Park, MN?", a: "Yes — fully licensed by the State of Minnesota with general liability insurance and workers' compensation on every project. We serve St. Louis Park and the west metro. Free on-site estimates available." },
    ],
    "Richfield": [
        { q: "How much does interior painting cost in Richfield, MN?", a: "Interior painting in Richfield typically ranges from $2 to $6 per square foot. For Richfield's post-war bungalows and ramblers, surface prep — filling cracks, priming bare wood, sealing stains — is often a significant part of the project and is always included in our written estimates." },
        { q: "How much does exterior painting cost for a Richfield home?", a: "Exterior painting in Richfield typically runs $3,000 to $8,000 for a standard single-family home. We include pressure washing, scraping, caulking, and priming in every Richfield exterior estimate. Free on-site quotes available." },
        { q: "Do Richfield homes have popcorn ceilings that need removal?", a: "Yes — many Richfield homes built from the 1950s through the 1970s still have original popcorn or acoustic ceiling texture. Homes built before 1978 may contain asbestos, so testing is recommended before removal. We remove, skim-coat, prime, and paint for a smooth updated finish." },
        { q: "Do you do drywall or plaster repair before painting in Richfield, MN?", a: "Yes. Drywall and plaster repair is standard in our prep process for Richfield homes. We patch nail holes, skim-coat damaged surfaces, and repair water stains before priming and painting. All repair work is included in our written estimates." },
        { q: "Can you modernize the interior of a post-war bungalow in Richfield?", a: "Yes — updating a mid-century bungalow is one of our specialties. A fresh palette with updated trim colors can dramatically transform the look and feel of a classic Richfield home. We can help you choose colors that work with your existing flooring and fixtures." },
        { q: "Are you a licensed painting contractor in Richfield, MN?", a: "Yes — fully licensed by the State of Minnesota with general liability insurance and workers' compensation on every project. We serve Richfield and the south metro. Free on-site estimates available." },
    ],
    "Bloomington": [
        { q: "How much does interior painting cost in Bloomington, MN?", a: "Interior painting in Bloomington typically ranges from $2 to $6 per square foot. For Bloomington's larger suburban homes, a whole-home interior repaint may run $5,000 to $12,000+ depending on square footage, ceiling height, and finish level. Written estimates are always provided at no charge." },
        { q: "How much does exterior painting cost for a Bloomington home?", a: "Exterior painting in Bloomington typically runs $3,500 to $10,000 depending on home size, siding material, and condition. Larger or two-story homes may exceed this range. We include all prep — pressure washing, scraping, caulking, and priming — in every exterior estimate." },
        { q: "Do Bloomington homes have popcorn ceilings that need removal?", a: "Yes — many Bloomington homes built from the 1960s through the 1980s still have original popcorn or acoustic ceiling texture. Homes built before 1980 may contain asbestos in the texture, so testing is recommended before removal. We remove, skim-coat, prime, and paint for a clean modern finish." },
        { q: "Do you paint large or two-story homes in Bloomington, MN?", a: "Yes — we're fully equipped for Bloomington's larger suburban homes, including two-story and split-level properties. We bring the right equipment and crew size to handle larger homes efficiently without compromising our prep standards." },
        { q: "Can you refinish kitchen cabinets in a Bloomington home?", a: "Yes. Cabinet refinishing is a popular update for Bloomington homeowners. We spray-apply a durable hard-wear enamel finish in any color. The result is a fresh, modern kitchen at a fraction of the cost of full replacement. Most projects complete in 7 to 10 days." },
        { q: "Are you a licensed painting contractor in Bloomington, MN?", a: "Yes — fully licensed by the State of Minnesota with general liability insurance and workers' compensation on every project. We serve Bloomington and the south metro. Free on-site estimates available." },
    ],
    "Golden Valley": [
        { q: "How much does interior painting cost in Golden Valley, MN?", a: "Interior painting in Golden Valley typically ranges from $2 to $7 per square foot depending on the finish level and scope. Many mid-century modern Golden Valley homes have open floor plans that make whole-home repaints efficient. Free written estimates available." },
        { q: "How much does exterior painting cost for a Golden Valley home?", a: "Exterior painting in Golden Valley typically runs $4,000 to $12,000 depending on home size, siding type, and condition. Many GV homes have unique architectural details requiring careful masking and hand-cutting. We include all prep in our written estimates." },
        { q: "Can you match paint colors for a mid-century modern home in Golden Valley?", a: "Yes — color consultation is included with every project. For mid-century modern homes in Golden Valley, many homeowners are updating to warm whites, soft greiges, and muted sage tones that complement the original architecture. We bring samples and help you visualize before committing." },
        { q: "Do you remove popcorn ceilings in Golden Valley homes?", a: "Yes — many Golden Valley homes from the 1960s and 1970s still have original popcorn or acoustic ceiling texture. Homes built before 1978 may contain asbestos, so testing is recommended. We remove, skim-coat, prime, and paint for a smooth modern finish that suits GV's design-forward aesthetic." },
        { q: "Do you apply high-gloss or specialty trim finishes in Golden Valley, MN?", a: "Yes — high-gloss and semi-gloss trim painting is popular in Golden Valley's architectural homes. We spray-apply high-solid enamels for a factory-smooth finish on door casings, window trim, and built-ins. These finishes look stunning and are far more durable than brush-applied paint." },
        { q: "Are you a licensed painting contractor in Golden Valley, MN?", a: "Yes — fully licensed by the State of Minnesota with general liability insurance and workers' compensation on every project. We serve Golden Valley and the northwest metro. Free on-site estimates available." },
    ],
};

export default function LocationHub({ location, slug }: LocationHubProps) {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const faqs = locationFaqs[location.city] || [];

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
                <section className="relative min-h-[650px] h-[100svh] md:h-[60vh] flex items-center justify-center overflow-hidden pt-[calc(env(safe-area-inset-top)+5rem)] md:pt-[6rem]">
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

                {/* FAQ Section */}
                {faqs.length > 0 && (
                    <section className="py-24 bg-surface-50 border-t border-border">
                        <div className="container px-6 max-w-4xl">
                            <div className="mb-12">
                                <span className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-4 block">Common Questions</span>
                                <h2 className="text-primary text-3xl md:text-4xl font-serif font-black">
                                    Frequently Asked Questions — Painting in {location.city}, MN
                                </h2>
                            </div>
                            <div className="space-y-3">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="bg-white rounded-2xl border border-border overflow-hidden">
                                        <button
                                            className="w-full flex items-start justify-between gap-4 p-6 text-left"
                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        >
                                            <span className="font-bold text-primary text-sm md:text-base leading-snug">{faq.q}</span>
                                            <ChevronDown
                                                className={`h-5 w-5 text-gold shrink-0 mt-0.5 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        {openFaq === i && (
                                            <div className="px-6 pb-6 text-muted-foreground font-light text-sm leading-relaxed border-t border-border pt-4">
                                                {faq.a}
                                            </div>
                                        )}
                                    </div>
                                ))}
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
