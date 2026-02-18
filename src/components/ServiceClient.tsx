"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { QuoteModal } from "@/components/ui/quote-modal";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    Home,
    ShieldCheck,
    Star,
    Info,
    Plus,
    Minus,
    HelpCircle
} from "lucide-react";
import { ICON_MAP } from "@/lib/services";
import { motion, AnimatePresence } from "framer-motion";
import { Service } from "@/lib/services";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

export default function ServiceClient({ service }: { service: Service }) {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const Icon = ICON_MAP[service.icon] || HelpCircle;

    return (
        <div className="relative min-h-screen w-full flex flex-col font-sans overflow-x-hidden bg-background">
            <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src={service.image}
                            alt={service.title}
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
                            <span className="text-gold">Services</span>
                        </div>
                        <h1 className="font-serif font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none mb-8">
                            {service.title.split(' ').slice(0, -1).join(' ')} <br className="hidden md:block" />
                            <span className="text-gold italic font-light">{service.title.split(' ').pop()}</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12">
                            {service.shortDescription}
                        </p>
                        <Button
                            onClick={() => setIsQuoteModalOpen(true)}
                            size="lg"
                            className="h-16 px-10 bg-gold text-primary hover:bg-white hover:text-black transition-all rounded-none uppercase tracking-widest font-bold shadow-2xl shadow-gold/20"
                        >
                            Request Expert Quote
                            <ArrowRight className="ml-3 h-5 w-5" />
                        </Button>
                    </div>
                </section>

                {/* Trust Bar (Service Level) */}
                <div className="bg-primary py-8 border-y border-white/5">
                    <div className="container px-6">
                        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
                            {service.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                                    <CheckCircle2 className="h-4 w-4 text-gold/40" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Process Section */}
                {service.process && service.process.length > 0 && (
                    <section className="py-24 bg-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />

                        <div className="container px-6 relative z-10">
                            <div className="text-center mb-20">
                                <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Methodology</span>
                                <h2 className="text-primary text-4xl md:text-6xl font-serif font-black tracking-tight leading-tight">
                                    The Trinity <br /><span className="italic text-gold-dark">Service Standard</span>
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {service.process.map((step, i) => {
                                    const StepIcon = ICON_MAP[step.icon] || HelpCircle;
                                    return (
                                        <div key={i} className="group relative p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 transition-all hover:bg-white hover:shadow-2xl hover:border-gold/20">
                                            <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gold mb-8 group-hover:scale-110 transition-transform">
                                                <StepIcon className="h-7 w-7" />
                                            </div>
                                            <span className="text-gold/40 font-serif font-black text-4xl leading-none mb-4 block uppercase tracking-tighter">0{i + 1}</span>
                                            <h3 className="text-primary font-serif font-bold text-xl mb-4">{step.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed font-medium capitalize">
                                                {step.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* Content Sections */}
                <section className="py-24 bg-primary text-white relative overflow-hidden">
                    <div className="container px-6 max-w-4xl">
                        {service.longContent.map((section, i) => (
                            <div key={i} className="mb-24 last:mb-0 text-center">
                                <h2 className="text-3xl md:text-5xl font-serif font-black mb-8 leading-tight">
                                    {section.title}
                                </h2>
                                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed whitespace-pre-line">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Gallery Section */}
                {service.galleryImages && service.galleryImages.length > 0 && (
                    <ImageAutoSlider
                        images={service.galleryImages}
                        title="Our Recent Work"
                        subtitle="Gallery"
                    />
                )}

                {/* FAQ Section */}
                {service.faqs && service.faqs.length > 0 && (
                    <section className="py-24 bg-gray-50">
                        <div className="container px-6 max-w-4xl">
                            <div className="text-center mb-16">
                                <span className="text-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">SEO Guidance</span>
                                <h2 className="text-primary text-4xl font-serif font-black">Common Questions</h2>
                            </div>

                            <div className="space-y-4">
                                {service.faqs.map((faq, i) => (
                                    <div
                                        key={i}
                                        className="bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all shadow-sm hover:shadow-md"
                                    >
                                        <button
                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                            className="w-full p-8 flex items-center justify-between text-left"
                                        >
                                            <span className="text-primary font-bold text-lg md:text-xl pr-8">{faq.question}</span>
                                            <div className="p-2 rounded-full bg-gray-50 text-gold">
                                                {openFaq === i ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                                            </div>
                                        </button>
                                        <AnimatePresence>
                                            {openFaq === i && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="px-8 pb-8 text-muted-foreground text-lg font-medium leading-relaxed border-t border-gray-50 pt-6">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Final CTA */}
                <section className="py-24 bg-gold relative overflow-hidden">
                    <div className="container px-6 text-center text-primary relative z-10">
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
                            Get A Free Estimate
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
