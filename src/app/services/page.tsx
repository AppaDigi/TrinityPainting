"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { services, ICON_MAP } from "@/lib/services";
import { QuoteModal } from "@/components/ui/quote-modal";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from "lucide-react";

export default function ServicesHubPage() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    return (
        <div className="relative min-h-screen w-full flex flex-col font-sans overflow-x-hidden bg-background">
            <Header onOpenQuote={() => setIsQuoteModalOpen(true)} theme="light" />
            <div className="noise-overlay" />

            <main className="flex-grow pt-32 pb-24 relative z-10">
                {/* Hero Section */}
                <section className="container-wide mb-24">
                    <div className="bg-primary rounded-[3rem] p-12 lg:p-24 relative overflow-hidden border border-white/5 shadow-2xl">
                        {/* Decoration */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />

                        <div className="max-w-4xl relative z-10">
                            <span className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-6 block">Our Expertise</span>
                            <h1 className="text-white mb-8 leading-[1.1]">
                                Professional <span className="text-gold italic font-light font-serif">Painting Services</span> <br />
                                Across East Central MN
                            </h1>
                            <p className="text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl">
                                From museum-quality interior refreshes to industrial-grade exterior protection, we combine God-honoring craftsmanship with modern architectural aesthetics.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button
                                    onClick={() => setIsQuoteModalOpen(true)}
                                    className="h-16 px-10 bg-gold text-primary hover:bg-white transition-all rounded-full font-bold uppercase tracking-widest text-xs"
                                >
                                    Get A Free Estimate
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction / SEO Block 1 */}
                <section className="container-wide mb-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-primary mb-12">Stewardship in Every <span className="text-gold italic">Square Inch.</span></h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground font-light leading-relaxed space-y-6">
                            <p>
                                Selecting a painting contractor is about more than just finding someone who can handle a brush. It's about finding a team that respects your home as a sacred space where life happens. At <strong>Trinity Painting & Renewal</strong>, based in Mora, MN, we approach every project as an act of stewardship. Whether you are looking to revitalize a single bedroom or protect your entire commercial property, our commitment to excellence remains unwavering.
                            </p>
                            <p>
                                Our services are designed specifically for the unique demands of the Minnesota climate. From the extreme temperature swings that test exterior siding to the cozy interior environments where families gather, we use only the highest contractor-grade materials. By partnering with industry leaders like Sherwin-Williams and Benjamin Moore, we ensure that every color we apply remains vibrant and every finish remains durable for years to come.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid with Deep Content */}
                <section className="container-wide space-y-32">
                    {services.map((service, index) => {
                        const Icon = ICON_MAP[service.icon] || ShieldCheck;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={service.slug} className={`grid lg:grid-cols-2 gap-16 lg:gap-32 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                                <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
                                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border group">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-1k group-hover:scale-110"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-40" />

                                        {/* Floating Label */}
                                        <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                                            <Icon className="h-8 w-8 text-gold" />
                                        </div>
                                    </div>

                                    {/* Decoration */}
                                    <div className={`absolute -z-10 w-full h-full bg-gold/5 rounded-[2.5rem] ${isEven ? 'top-8 left-8' : 'top-8 right-8'}`} />
                                </div>

                                <div className="space-y-8">
                                    <span className="text-gold font-black text-[10px] uppercase tracking-[0.4em]">Service Detail 0{index + 1}</span>
                                    <h3 className="text-4xl md:text-5xl font-serif text-primary mb-6">{service.title}</h3>

                                    <div className="prose prose-md text-muted-foreground font-light leading-relaxed">
                                        <p className="mb-6">
                                            {service.description}
                                        </p>

                                        {/* Dynamic content expansion for SEO */}
                                        {service.slug === 'interior-painting' && (
                                            <p className="mb-6">
                                                Interior painting is about more than color; it's about preparation. Our process for Minnesota homeowners involves a rigorous schedule of surface cleaning, drywall repair, and dust-controlled sanding. We understand that a sharp line on a baseboard or a perfectly flat ceiling finish makes the difference between a "paint job" and a complete home renewal. We specialize in low-VOC options to ensure your air quality remains pristine throughout the process.
                                            </p>
                                        )}
                                        {service.slug === 'exterior-painting' && (
                                            <p className="mb-6">
                                                East Central Minnesota weather is unforgiving. From the biting frost of January to the humid sun of July, your siding requires a coating that can breathe and flex. Our exterior painting solutions focus on moisture barriers and long-term adhesion. We don't just spray; we back-roll every surface to ensure the paint penetrates the grain of the wood or the texture of the siding, creating a protective envelope around your home.
                                            </p>
                                        )}
                                        {service.slug === 'cabinet-refinishing' && (
                                            <p className="mb-6">
                                                Kitchens are the heart of the home, but full renovations can be prohibitively expensive. Our cabinet refinishing service provides a middle ground that delivers a factory-smooth finish at a fraction of the cost. We use industrial-grade lacquers and urethane-alkyd enamels that are designed to withstand the daily wear and tear of a busy kitchen, resisting oils, moisture, and staining.
                                            </p>
                                        )}
                                        {service.slug === 'commercial-painting' && (
                                            <p className="mb-6">
                                                For business owners, image is everything. A fresh, professional exterior reflects the quality of your services. We provide flexible scheduling, including nights and weekends, to ensure your business operations continue uninterrupted. From office buildings in Mora to retail storefronts in Cambridge, we bring a level of professionalism and reliability that commercial clients depend on.
                                            </p>
                                        )}
                                        {service.slug === 'ceiling-painting' && (
                                            <p className="mb-6">
                                                Ceilings are often the most overlooked surface in a home, yet they have the greatest impact on light distribution. Whether you have vaulted cathedral ceilings or are looking to remove dated popcorn textures, our team has the specialized equipment and safety training to handle high-reach projects with ease. We use "dead-flat" non-reflective finishes to hide surface imperfections and maximize the brightness of your rooms.
                                            </p>
                                        )}
                                        {service.slug === 'trim-frame-painting' && (
                                            <p className="mb-6">
                                                The beauty of architectural detail lies in the contrast. Precision painting of trim, baseboards, and window frames defines the boundaries of your design. We use high-build enamels for these surfaces to ensure they can handle the abuse of vacuum cleaners, pets, and children, maintaining their crisp white (or bold accent) color without chipping or peeling.
                                            </p>
                                        )}
                                    </div>

                                    <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8 pb-8">
                                        {service.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-center gap-3 text-sm font-bold text-primary/80 uppercase tracking-widest">
                                                <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-8 border-t border-border flex items-center gap-8">
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="group flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-[0.3em] hover:text-gold transition-colors"
                                        >
                                            In-Depth Service Guide
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setIsQuoteModalOpen(true)}
                                            className="rounded-full border-primary/10 text-[9px] font-black uppercase tracking-widest px-6"
                                        >
                                            Quick Quote
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </section>

                {/* Deep SEO Content Block 2 - Why Choose Us */}
                <section className="bg-surface-50 py-32 mt-32 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                    <div className="container-wide relative z-10">
                        <div className="grid lg:grid-cols-12 gap-16 items-start">
                            <div className="lg:col-span-4 lg:sticky lg:top-32">
                                <span className="text-gold font-black text-xs uppercase tracking-[0.4em] mb-6 block">The Trinity Edge</span>
                                <h2 className="text-primary leading-tight">Why Choose Our <br /> <span className="text-gold italic">Artisan Team?</span></h2>
                                <p className="text-muted-foreground mt-8 font-light leading-relaxed">
                                    Quality is not an accident; it is always the result of high intention, sincere effort, and skillful execution.
                                </p>
                            </div>

                            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-16">
                                <div className="space-y-4">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-gold mb-6">
                                        <ShieldCheck className="h-6 w-6" />
                                    </div>
                                    <h4 className="text-xl font-serif text-primary">God-Honoring Integrity</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                                        We operate on the principle of stewardship. This means being honest about pricing, transparent about timelines, and respectful of your property at all times. Our reputation in Mora and beyond is built on trust that has been earned one brushstroke at a time.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-gold mb-6">
                                        <Star className="h-6 w-6" />
                                    </div>
                                    <h4 className="text-xl font-serif text-primary">Local MN Expertise</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                                        We are not a national franchise; we are your neighbors. We understand how the humidity in the St. Croix Valley affects drying times and which pigments hold up best against the intense UV rays of our Minnesota summers.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-gold mb-6">
                                        <CheckCircle2 className="h-6 w-6" />
                                    </div>
                                    <h4 className="text-xl font-serif text-primary">Meticulous Clean-Up</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                                        A project isn't finished until the last piece of masking tape is gone and the floor is vacuumed. We pride ourselves on leaving your home cleaner than we found it. Our goal is for you to only see the beautiful new color, not the traces of the work.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-gold mb-6">
                                        <Star className="h-6 w-6" />
                                    </div>
                                    <h4 className="text-xl font-serif text-primary">Premium Materials</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                                        Cutting corners on products is a short-term gain that leads to long-term failure. We exclusively use premium, professional-grade lines from trusted manufacturers to ensure your investment stands the test of time and family life.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Long Form SEO Text Section */}
                        <div className="mt-32 pt-24 border-t border-border prose prose-lg max-w-none text-muted-foreground font-light leading-relaxed">
                            <h2 className="text-primary mb-12 text-center text-3xl md:text-4xl">Service Areas in East Central Minnesota</h2>
                            <div className="grid md:grid-cols-2 gap-12">
                                <p>
                                    Trinity Painting & Renewal is proud to serve a wide range of communities across East Central Minnesota. From our home base in <strong>Mora</strong>, we regularly travel to <strong>Cambridge</strong>, <strong>Pine City</strong>, <strong>North Branch</strong>, and the surrounding townships. Our team is familiar with the architectural styles common to our region—from the historic farmhouses of Kanabec County to the modern residential developments in Isanti and Chisago Counties.
                                </p>
                                <p>
                                    As we continue to grow, our focus remains on providing localized, high-end service. Whether you are in <strong>Ogilvie</strong>, <strong>Hinckley</strong>, or <strong>Braham</strong>, you can count on the same level of artisan quality. We understand that in tight-knit communities, our word is our bond. That’s why we provide detailed, written estimates and stick to our agreed-upon schedules, ensuring you know exactly what to expect from start to finish.
                                </p>
                            </div>
                            <div className="mt-12">
                                <p>
                                    In addition to residential projects, we are expanding our commercial footprint. If you manage a facility in <strong>Princeton</strong> or have a retail space in <strong>Milaca</strong>, our commercial painting experts can provide the professional aesthetic your brand deserves. We work with property managers, church boards, and small business owners to deliver value-driven results that protect their assets and enhance their curb appeal.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="container-wide py-32">
                    <div className="bg-gold rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-primary/5" />
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-primary mb-8 leading-tight">Ready to Renew Your <br /> <span className="italic text-white">Sacred Space?</span></h2>
                            <p className="text-xl text-primary/80 font-light mb-12">
                                Join the hundreds of Minnesota families who trust Trinity for God-honoring craftsmanship and uncompromising quality.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Button
                                    onClick={() => setIsQuoteModalOpen(true)}
                                    className="h-16 px-12 bg-primary text-white hover:bg-white hover:text-primary transition-all rounded-full font-bold uppercase tracking-widest text-xs shadow-xl"
                                >
                                    Start Your Free Estimate
                                </Button>
                                <a
                                    href="tel:7632252393"
                                    className="h-16 px-12 rounded-full border-2 border-primary/20 flex items-center justify-center font-bold uppercase tracking-widest text-xs text-primary hover:bg-gold-dark hover:text-white hover:border-gold-dark transition-all"
                                >
                                    Call (763) 225-2393
                                </a>
                            </div>
                        </div>
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
