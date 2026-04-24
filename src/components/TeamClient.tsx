"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { QuoteModal } from "@/components/ui/quote-modal";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TeamClient() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const teamMembers = [
        {
            name: "Dustin",
            title: "Owner & Sales",
            subtitle: "The \"Faith Over Fear\" Visionary",
            bio: "Dustin spent 7 years in the trenches with a brush in his hand before founding Trinity. After a seasonal union layoff, he decided to stop building other people's dreams and start building a company on a rock-solid foundation of integrity. Dustin manages the vision and the sales, ensuring every estimate is rooted in honesty. He’s currently living the \"controlled chaos\" lifestyle with three little ones at home and a fourth on the way—that’s 4 under 4, folks! When he isn't serving at church or chasing toddlers, he’s ensuring Trinity stays true to its mission of service over self.",
            image: "/team-photos/dustin.png"
        },
        {
            name: "Jermaine",
            title: "Senior Lead Painter",
            subtitle: "The Detail Detective & Master Craftsman",
            bio: "If a wall has a secret, Jermaine will find it. He operates with a \"do it right the first time\" conviction that borders on a professional calling. Jermaine is our resident seeker of knowledge, researching every product and technique until he is a master of the craft. His patient, steady focus is practiced daily at home, where he manages a \"crew\" of 11 children. He brings that same calm, focused character to every job site he leads. If Jermaine is on the job, rest easy—perfection is the baseline.",
            image: "/team-photos/jermaine.png"
        },
        {
            name: "Brian",
            title: "Production Specialist",
            subtitle: "The Right-Hand Man & Cinematic Soul",
            bio: "Brian is a production powerhouse and the literal right-hand man to his son, Jermaine. There is a special kind of trust that comes when a father and son work side-by-side, and Brian brings that \"peace under pressure\" to every project. He manages a blended family of 14 children—a feat of logistics and patience that makes painting a house look like a walk in the park! A massive movie buff, Brian ensures the final result of your project is nothing short of a blockbuster.",
            image: "/team-photos/brian.png"
        },
        {
            name: "Angel",
            title: "Seasoned Painter",
            subtitle: "The \"Flow State\" Master & All-Star Dad",
            bio: "Angel is the calm in the middle of any renovation. A seasoned pro with years of experience, he is a master of the \"flow,\" finding his rhythm in the work and letting his high-level results speak for themselves. As a dad to two little ones (ages 6 and 2), he knows exactly how important it is to keep a home environment peaceful and orderly while work is being done. When the ladders are stowed, you’ll find Angel on the water; he’s an avid fisherman who knows that the best results come from patience, timing, and integrity.",
            image: "/team-photos/angel.png"
        }
    ];

    return (
        <div className="relative min-h-screen w-full flex flex-col font-sans overflow-x-hidden bg-background">
            <Header onOpenQuote={() => setIsQuoteModalOpen(true)} theme="dark" />
            <div className="noise-overlay" />

            <main className="flex-grow pt-24 md:pt-32 pb-24 relative z-10">
                {/* Hero Section */}
                <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col justify-end mb-24 overflow-hidden -mt-24 md:-mt-32 pt-24 md:pt-32">
                    <div className="absolute inset-0">
                        <Image
                            src="/team-photos/team-hero.png"
                            alt="Trinity Painting Team"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        {/* Cinematic gradient overlay: dark at bottom to read text, fading up */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                        <div className="absolute inset-0 bg-black/30" /> {/* Subtle darkening to ensure header/white text pops everywhere */}
                    </div>

                    <div className="container-wide relative z-10 pb-16 md:pb-24">
                        <div className="max-w-4xl">
                            <span className="text-gold font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4 block drop-shadow-md">Meet the Trinity Crew</span>
                            <h1 className="text-white mb-6 leading-[1.1] text-5xl md:text-6xl lg:text-7xl drop-shadow-xl">
                                Men of <span className="text-gold italic font-light font-serif">Character.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl drop-shadow-lg">
                                At Trinity Painting & Renewal Services, we live by one simple standard: God-honoring craftsmanship that puts your project over our profits. We believe you shouldn&apos;t just hire a &quot;painter&quot;—you should hire men of character. Whether we are obsessing over a razor-sharp trim line or keeping the site spotless, we treat your space as a sanctuary and your home as if it were our own. We aren&apos;t just here to change a color; we&apos;re here to be a blessing to your household.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Members Grid */}
                <section className="container-wide mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {teamMembers.map((member, idx) => (
                            <div key={idx} className="group relative bg-white border border-black/5 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl hover:border-gold/30 transition-all duration-500 flex flex-col h-full">
                                {member.image && (
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-50">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                                {!member.image && (
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-primary/5 flex items-center justify-center">
                                        <span className="text-primary/20 font-serif text-8xl italic">{member.name.charAt(0)}</span>
                                    </div>
                                )}
                                
                                <div className="p-10 flex-grow flex flex-col">
                                    <div className="mb-6">
                                        <h3 className="text-4xl font-serif text-primary mb-2">{member.name}</h3>
                                        <p className="text-gold font-bold text-sm uppercase tracking-widest mb-3">{member.title}</p>
                                        <p className="text-primary italic font-serif text-xl">{member.subtitle}</p>
                                    </div>
                                    <p className="text-muted-foreground text-lg font-light leading-relaxed flex-grow">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* The Trinity Difference */}
                <section className="bg-surface-50 py-32 border-y border-border relative overflow-hidden">
                    <div className="container-wide relative z-10 max-w-4xl mx-auto text-center">
                        <span className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-6 block">Our Commitment</span>
                        <h2 className="text-primary mb-8 leading-tight">The Trinity <br /><span className="text-gold italic">Difference.</span></h2>
                        <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
                            Our clients often tell us they came for the paint job but invited us back because of the men on our crew. We know that inviting people into your home is a big deal, which is why we lead with respect and follow through with excellence. Every stroke of the brush is done with the goal of honoring your space and delivering a finish that lasts.
                        </p>
                        
                        <div className="bg-white p-8 rounded-[2rem] border border-black/5 shadow-md inline-block text-left max-w-2xl">
                            <p className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">P.S.</p>
                            <p className="text-muted-foreground font-light text-lg">
                                Want to hear the most memorable voicemail in Minnesota? Call Dustin to hear the &quot;Cats and Boots&quot; beatbox that started it All!
                            </p>
                        </div>
                    </div>
                </section>
                
                {/* Final CTA */}
                <section className="container-wide py-24">
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
