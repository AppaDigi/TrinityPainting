"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/ui/quote-modal";
import { useState } from "react";
import Image from "next/image";
import { 
    ShieldCheck, 
    Flag, 
    Cross, 
    Users, 
    Shield, 
    Heart, 
    Anchor,
    Scale
} from "lucide-react";

export default function AboutPage() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const values = [
        {
            title: "Christian Nationalism & Pro-Christian Politics",
            description: "We believe America is a nation under God. We lead with faith in the public square and believe our laws and local leadership should reflect Christian moral standards. Our work is an extension of our faith, and we aren't afraid to stand for the Truth in a shifting culture.",
            icon: Cross,
            color: "text-amber-600",
            bg: "bg-amber-50"
        },
        {
            title: "Abolitionist & Pro-Life",
            description: "We are unapologetically pro-life and stand for the total abolition of abortion as a core company pillar. We believe every life is a gift from the Creator, and we support organizations that protect the most vulnerable among us.",
            icon: Heart,
            color: "text-red-600",
            bg: "bg-red-50"
        },
        {
            title: "Pro-ICE, Police, & Military",
            description: "We stand for the rule of law. We support the enforcement of our borders, the mission of ICE, and we stand \"Pro-Blue\" with our law enforcement and military without apology. We believe in honoring those who protect our freedom and our streets.",
            icon: Shield,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Verified Minnesota Labor",
            description: "We are 100% locally owned and operated. Our crew consists entirely of Verified Minnesota Labor—we hire only legal American citizens. No illegal or foreign labor. We are neighbors serving neighbors, ensuring your investment stays in our local Minnesota economy.",
            icon: Users,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        }
    ];

    return (
        <div className="relative min-h-screen w-full flex flex-col font-sans overflow-x-hidden bg-background">
            <Header onOpenQuote={() => setIsQuoteModalOpen(true)} theme="light" />
            <div className="noise-overlay" />

            <main className="flex-grow pt-24 md:pt-32 pb-24 relative z-10">
                {/* Hero Section */}
                <section className="container-wide mb-24">
                    <div className="bg-primary rounded-3xl lg:rounded-[3rem] p-8 md:p-12 lg:p-24 relative overflow-hidden border border-white/5 shadow-2xl">
                        {/* Decoration */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />

                        <div className="max-w-4xl relative z-10">
                            <span className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-6 block">Our Identity</span>
                            <h1 className="text-white mb-8 leading-[1.1]">
                                Rooted in <span className="text-gold italic font-light font-serif">Faith</span>, <br />
                                Built on <span className="text-white font-medium">Integrity.</span>
                            </h1>
                            <p className="text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl">
                                At Trinity Painting & Renewal, our mission transcends aesthetics. We are a company governed by biblical principles, dedicated to the renewal of homes and the preservation of our national heritage.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button
                                    onClick={() => setIsQuoteModalOpen(true)}
                                    className="h-16 px-10 bg-gold text-primary hover:bg-white transition-all rounded-full font-bold uppercase tracking-widest text-xs"
                                >
                                    Work With Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The "Why" Section */}
                <section className="container-wide mb-32">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group border border-border">
                                <Image
                                    src="/editorial-home.jpeg"
                                    alt="Dustin & Team"
                                    fill
                                    className="object-cover transition-transform duration-1k group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2rem] shadow-2xl border border-black/5 max-w-xs">
                                <p className="font-serif text-primary italic text-lg leading-tight mb-2">&quot;We work for the Lord, not for men.&quot;</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-gold">Colossians 3:23</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <span className="text-gold font-black text-xs uppercase tracking-[0.3em]">The Visionary</span>
                            <h2 className="text-primary leading-tight">A Covenant of <br /><span className="text-gold italic">Craftsmanship.</span></h2>
                            <div className="prose prose-lg text-muted-foreground font-light leading-relaxed space-y-6">
                                <p>
                                    Trinity Painting & Renewal wasn&apos;t founded to be just another contractor. It was founded to provide an alternative for homeowners who value both world-class quality and shared moral convictions. 
                                </p>
                                <p>
                                    Owner Dustin Nyblom started this journey with a simple promise: to treat every project as an act of stewardship. In an industry often marred by cut corners and lack of communication, we choose the path of excellence—not because it&apos;s profitable, but because it&apos;s right.
                                </p>
                                <p>
                                    We believe that when we renew a home, we are helping a family protect their most valuable earthly asset. That responsibility is one we take with the utmost seriousness, combining modern architectural techniques with old-world work ethic.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Core Values Grid */}
                <section className="bg-surface-50 py-32 border-y border-border relative overflow-hidden">
                    <div className="container-wide relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-24">
                            <span className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-6 block">The Pillar of our Business</span>
                            <h2 className="text-primary mb-8">Our Unapologetic <span className="text-gold italic">Values.</span></h2>
                            <p className="text-muted-foreground font-light leading-relaxed">
                                We don&apos;t hide who we are. Our business is built on these foundational truths, guiding every decision we make—from the people we hire to the products we use.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {values.map((value, i) => (
                                <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-black/5 hover:border-gold/30 transition-all group">
                                    <div className={`h-16 w-16 rounded-2xl ${value.bg} flex items-center justify-center ${value.color} mb-8 group-hover:scale-110 transition-transform`}>
                                        <value.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-2xl font-serif text-primary mb-6">{value.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed font-light">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Standards Section */}
                <section className="container-wide py-32">
                    <div className="bg-primary text-white p-8 md:p-12 lg:p-24 rounded-[3rem] relative overflow-hidden shadow-2xl">
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gold" />
                        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />

                        <div className="grid lg:grid-cols-12 gap-16 relative z-10">
                            <div className="lg:col-span-5">
                                <span className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-6 block text-left">Standards</span>
                                <h2 className="text-white mb-8 border-l-4 border-gold pl-8 leading-tight">The Trinity <br /><span className="italic text-gold-dark font-light">Protocol.</span></h2>
                                <p className="text-gray-400 font-light leading-relaxed text-lg">
                                    We align ourselves with partners and practices that reflect our commitment to American excellence and local prosperity.
                                </p>
                            </div>
                            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h4 className="text-xl font-serif text-gold flex items-center gap-3">
                                        <ShieldCheck className="h-6 w-6" />
                                        Sherwin-Williams Only
                                    </h4>
                                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                                        We exclusively use American-made Sherwin-Williams coatings. We believe in supporting the American worker at every step of the supply chain.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-xl font-serif text-gold flex items-center gap-3">
                                        <Flag className="h-6 w-6" />
                                        American Heritage
                                    </h4>
                                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                                        From our American-built Ford trucks to our tools, we prioritize products made in the nation we love and serve.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-xl font-serif text-gold flex items-center gap-3">
                                        <Scale className="h-6 w-6" />
                                        Biblical Stewardship
                                    </h4>
                                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                                        Our pricing is honest, our communication is direct, and our word is our bond. No hidden fees or &quot;woke&quot; corporate jargon.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-xl font-serif text-gold flex items-center gap-3">
                                        <Anchor className="h-6 w-6" />
                                        Sabbath Rest
                                    </h4>
                                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                                        We protect Sunday for worship and rest. This ensures our crew is spiritually and physically refreshed to give their best on Monday.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="container-wide pb-12">
                     <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-primary mb-8 tracking-tight">Ready to hire a team that <br /> <span className="italic text-gold">shares your values?</span></h2>
                        <Button 
                            onClick={() => setIsQuoteModalOpen(true)}
                            className="h-16 px-12 bg-primary text-white hover:bg-gold hover:text-primary transition-all rounded-full font-bold uppercase tracking-widest text-xs shadow-xl"
                        >
                            Request Your Estimate
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
