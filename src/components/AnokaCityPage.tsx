"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { QuoteModal } from "@/components/ui/quote-modal";
import { Button } from "@/components/ui/button";
import { ChevronRight, CheckCircle2, ArrowRight, Phone, ChevronDown } from "lucide-react";

export interface AnokaCityData {
    city: string;
    county: string;
    slug: string;
    badge: string;
    heroDescription: string;
    aboutCity: string;
    nearbyInAbout: string;
    homesBuilt: string;
    nearbyInServiceArea: string;
    metroArea: string;
    coordinates: { lat: string; lng: string };
    faqs: { q: string; a: string }[];
}

export default function AnokaCityPage({ data }: { data: AnokaCityData }) {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const { city, county, homesBuilt, nearbyInAbout, nearbyInServiceArea, metroArea } = data;

    const services = [
        {
            title: "Interior House Painting",
            description: `Whether it's a single accent wall or a complete whole-home repaint, our interior painters in ${city} deliver clean lines, smooth coverage, and lasting color. We use low-VOC, washable premium paints safe for your family and pets.`,
        },
        {
            title: "Exterior House Painting",
            description: `Minnesota winters are hard on exterior paint. We use weather-resistant coatings designed to withstand freeze-thaw cycles and UV exposure — keeping your ${city} home looking sharp year after year.`,
        },
        {
            title: "Popcorn Ceiling Removal",
            description: `Many ${city} homes built in the ${homesBuilt} still have original popcorn, cottage-cheese, or acoustic ceiling texture. We remove it safely, skim-coat the surface to a smooth finish, prime, and paint.`,
        },
        {
            title: "Ceiling Texture Repair & Skim Coat",
            description: `Cracks, water stains, or uneven texture? We repair and skim-coat ceilings to a paint-ready smooth finish throughout your ${city} home.`,
        },
        {
            title: "Cabinet Painting & Refinishing",
            description: `Update your kitchen or bathroom without the cost of replacement. Our cabinet refinishing service in ${city} delivers a factory-smooth finish in any color you choose.`,
        },
        {
            title: "Drywall Repair & Patch Painting",
            description: `Nail pops, dings, cracks, and water damage repaired and blended seamlessly into your existing walls and ceilings.`,
        },
        {
            title: "Deck & Fence Staining",
            description: `Protect your outdoor wood surfaces from Minnesota's harsh climate with premium stain and sealant applied by our skilled team.`,
        },
        {
            title: "Commercial Interior Painting",
            description: `We serve light commercial properties throughout ${city} including offices, retail spaces, rental units, and multi-family buildings.`,
        },
    ];

    const whyItems = [
        {
            title: "Licensed & Insured",
            description: `Fully licensed by the State of Minnesota and carrying comprehensive general liability insurance and workers' compensation coverage on every ${city} project.`,
        },
        {
            title: "Premium Materials",
            description: `We use only top-rated paints from Sherwin-Williams, Benjamin Moore, and Behr — brands known for rich color, excellent coverage, and long-lasting durability.`,
        },
        {
            title: "Written Estimates",
            description: `Every job starts with a detailed written estimate. No surprises, no hidden fees — just transparent, honest pricing before work begins.`,
        },
        {
            title: "5-Star Reviews",
            description: `Satisfied homeowners across ${county} and the broader ${metroArea} rate us five stars. Our reputation is built one project at a time.`,
        },
        {
            title: "On Time, Every Time",
            description: `We respect your schedule. Projects are completed on the timeline we promise — no unexplained delays, no ghosting.`,
        },
        {
            title: "Workmanship Warranty",
            description: `We stand behind our work with a written warranty on every painting and popcorn ceiling removal project in ${city}.`,
        },
    ];

    const processSteps = [
        {
            step: "01",
            title: "Free On-Site Estimate",
            description: `We visit your ${city} home, assess the scope, and provide a detailed written quote at no cost and with no obligation.`,
        },
        {
            step: "02",
            title: "Color Consultation",
            description: `We help you select the perfect colors and finishes to match your vision, your home's architecture, and current design trends.`,
        },
        {
            step: "03",
            title: "Surface Preparation",
            description: `We clean, sand, fill holes and cracks, caulk gaps, and prime all surfaces before a single drop of paint is applied.`,
        },
        {
            step: "04",
            title: "Professional Application",
            description: `Our skilled painters apply premium paint using the right tools and techniques for each specific surface and finish type.`,
        },
        {
            step: "05",
            title: "Detail & Touch-Up",
            description: `We trim, cut in, and touch up every edge, corner, and detail for a flawless, professional final result.`,
        },
        {
            step: "06",
            title: "Final Walkthrough",
            description: `You inspect the completed work with us. We will not leave your ${city} home until you are completely satisfied.`,
        },
    ];

    const faqs = data.faqs;

    const popcornBullets = [
        "Safe removal process — asbestos testing available for pre-1980 homes",
        "Ceiling skim coat & smooth finish after texture removal",
        "Same-day priming after removal when project schedule allows",
        "Full ceiling paint in your chosen color",
        "Minimal dust & mess — we protect floors, furniture, and fixtures",
        `Serving all neighborhoods in ${city} and ${county}`,
        "Free on-site estimates, no obligation",
        "Fully licensed & insured in Minnesota",
    ];

    return (
        <div className="relative min-h-screen w-full flex flex-col font-sans overflow-x-hidden bg-background">
            <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />

            {/* Hero */}
            <section className="relative min-h-[650px] h-[100svh] md:h-[65vh] flex items-center justify-center overflow-hidden pt-[calc(env(safe-area-inset-top)+5rem)] md:pt-[6rem]">
                <div className="absolute inset-0">
                    <Image
                        src="/editorial-home.jpeg"
                        alt={`${city}, MN Painting Contractor`}
                        fill
                        className="object-cover brightness-[0.25] scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />
                </div>
                <div className="container relative z-10 text-center px-6">
                    <div className="flex items-center justify-center gap-2 text-gold/60 text-[10px] uppercase tracking-[0.4em] font-bold mb-6">
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link href="/locations" className="hover:text-gold transition-colors">Locations</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-gold">{city}</span>
                    </div>
                    <span className="inline-block text-gold font-black text-[10px] uppercase tracking-[0.35em] mb-6 bg-gold/10 border border-gold/20 px-4 py-2 rounded-full">
                        {data.badge}
                    </span>
                    <h1 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-none mb-8">
                        Painting Contractor in{" "}
                        <br className="hidden md:block" />
                        <span className="text-gold italic font-light">{city}, MN</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12">
                        {data.heroDescription}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            onClick={() => setIsQuoteModalOpen(true)}
                            size="lg"
                            className="h-14 px-10 bg-gold text-primary hover:bg-white hover:text-black transition-all rounded-none uppercase tracking-widest font-bold shadow-2xl shadow-gold/20"
                        >
                            Get a Free Estimate
                            <ArrowRight className="ml-3 h-5 w-5" />
                        </Button>
                        <a
                            href="tel:7632004121"
                            className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors font-bold text-sm uppercase tracking-widest"
                        >
                            <Phone className="h-4 w-4" />
                            (763) 200-4121
                        </a>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-24 bg-white">
                <div className="container px-6 max-w-4xl">
                    <h2 className="text-primary text-3xl md:text-5xl font-serif font-black mb-10 leading-tight">
                        Professional Painting Services in{" "}
                        <span className="text-gold italic">{city}, Minnesota</span>
                    </h2>
                    <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                        <p>
                            {data.aboutCity} Whether you need a complete interior repaint, a refreshed exterior, or want to modernize your home by removing outdated popcorn ceilings, our experienced crew is ready to help.
                        </p>
                        <p>
                            We serve all neighborhoods throughout {city} and the surrounding communities of {nearbyInAbout}. Many homes in the area were built in the {homesBuilt}, meaning original textured ceilings, dated color palettes, and weathered exterior surfaces are common — and all are well within our specialty.
                        </p>
                        <p>
                            As a fully licensed and insured Minnesota painting contractor, we stand behind every project with a written warranty. From color consultation to final walkthrough, we make the entire painting process easy, clean, and stress-free.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 bg-surface-50 border-t border-border">
                <div className="container-wide px-6">
                    <div className="mb-16">
                        <span className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-4 block">What We Do</span>
                        <h2 className="text-primary text-3xl md:text-5xl font-serif font-black">
                            Painting &amp; Ceiling Services We Offer in {city}, MN
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-border hover:border-gold/30 hover:shadow-lg transition-all">
                                <div className="text-[10px] font-black text-gold uppercase tracking-[0.3em] mb-3">0{i + 1}</div>
                                <h3 className="text-primary font-serif font-black text-lg mb-3 leading-tight">{service.title}</h3>
                                <p className="text-sm text-muted-foreground font-light leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popcorn Ceiling Feature */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="container px-6 max-w-5xl relative z-10">
                    <span className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-4 block">Specialty Service</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-black mb-10 leading-tight">
                        Popcorn Ceiling Removal in{" "}
                        <span className="text-gold italic">{city}, MN</span>
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-6 text-white/70 font-light leading-relaxed">
                            <p>
                                That rough, bumpy textured ceiling — called &ldquo;popcorn,&rdquo; &ldquo;cottage cheese,&rdquo; or &ldquo;acoustic&rdquo; ceiling — was popular from the 1950s through the 1980s. Today it&apos;s outdated, collects dust, and can even harbor asbestos in pre-1980 homes.
                            </p>
                            <p>
                                Our professional popcorn ceiling removal service in {city} transforms your rooms, increases home value, and creates a clean modern look that makes spaces feel larger and brighter.
                            </p>
                            <p>
                                After removal, we smooth the surface with a skim coat, prime, and paint to a flawless finish — ready for updated lighting and your fresh interior design vision.
                            </p>
                        </div>
                        <ul className="space-y-4">
                            {popcornBullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                                    <span className="text-white/80 font-light text-sm leading-relaxed">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-12">
                        <Button
                            onClick={() => setIsQuoteModalOpen(true)}
                            className="h-14 px-10 bg-gold text-primary hover:bg-white hover:text-primary transition-all rounded-none font-bold uppercase tracking-widest text-xs"
                        >
                            Get a Free Popcorn Ceiling Estimate
                            <ArrowRight className="ml-3 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="container-wide px-6">
                    <div className="mb-16">
                        <span className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-4 block">Our Standard</span>
                        <h2 className="text-primary text-3xl md:text-5xl font-serif font-black">
                            Why {city} Homeowners Choose Us
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyItems.map((item, i) => (
                            <div key={i} className="flex gap-5">
                                <CheckCircle2 className="h-6 w-6 text-gold shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-black text-primary text-sm uppercase tracking-widest mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground font-light text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 bg-surface-50 border-t border-border">
                <div className="container-wide px-6">
                    <div className="mb-16">
                        <span className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-4 block">How It Works</span>
                        <h2 className="text-primary text-3xl md:text-5xl font-serif font-black">
                            Our Painting Process in {city}, MN
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {processSteps.map((step, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 border border-border">
                                <div className="text-4xl font-serif font-black text-gold/30 mb-4">{step.step}</div>
                                <h3 className="font-serif font-black text-primary text-xl mb-3">{step.title}</h3>
                                <p className="text-muted-foreground font-light text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Area */}
            <section className="py-24 bg-white border-t border-border">
                <div className="container px-6 max-w-4xl">
                    <h2 className="text-primary text-3xl md:text-4xl font-serif font-black mb-8">
                        Serving {city} and the{" "}
                        <span className="text-gold italic">Surrounding Area</span>
                    </h2>
                    <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                        <p>
                            In addition to {city}, we serve the broader {metroArea} including {nearbyInServiceArea} and many communities throughout {county} and neighboring counties. If you&apos;re unsure whether we cover your area, give us a call — we&apos;ll come to you.
                        </p>
                        <p>
                            Our crews are locally based and know the neighborhoods, roads, and housing styles throughout this region. That local knowledge means faster scheduling, better color recommendations, and a team that genuinely cares about the community they paint.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-surface-50 border-t border-border">
                <div className="container px-6 max-w-4xl">
                    <div className="mb-12">
                        <span className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-4 block">Common Questions</span>
                        <h2 className="text-primary text-3xl md:text-4xl font-serif font-black">
                            Frequently Asked Questions — Painting in {city}, MN
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

            {/* CTA */}
            <section className="py-24 bg-gold relative overflow-hidden">
                <div className="container px-6 text-center relative z-10">
                    <h2 className="text-primary text-4xl md:text-6xl font-serif font-black mb-6 leading-tight">
                        Ready for a Fresh Look in <br />
                        <span className="italic">Your {city} Home?</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-primary/80 font-light text-lg mb-12">
                        Contact us today for a free, no-obligation estimate on interior painting, exterior painting, or popcorn ceiling removal in {city}, MN. We&apos;re proud to serve {county} homeowners and look forward to transforming your space.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={() => setIsQuoteModalOpen(true)}
                            className="h-16 px-12 bg-primary text-white hover:bg-white hover:text-primary transition-all rounded-none font-bold uppercase tracking-widest text-xs shadow-xl"
                        >
                            Get My Free Estimate
                        </Button>
                        <a
                            href="tel:7632004121"
                            className="h-16 px-12 border-2 border-primary/20 flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-xs text-primary hover:bg-primary hover:text-white transition-all"
                        >
                            <Phone className="h-4 w-4" />
                            Call (763) 200-4121
                        </a>
                    </div>
                </div>
            </section>

            <Footer />

            <QuoteModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </div>
    );
}
