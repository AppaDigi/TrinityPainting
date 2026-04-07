"use client";

import { ArticleSchema } from '@/components/SchemaMarkup';
import { Header } from '@/components/ui/header';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { QuoteModal } from '@/components/ui/quote-modal';
import { useState } from 'react';
import Image from 'next/image';
import { PostSidebar } from './PostSidebar';

export function BestTimeBlogPostClient() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const articleSchema = {
        headline: "When Is the Best Time to Paint the Exterior of a House in Minnesota?",
        description: "Minnesota exterior painting season runs May-September. Learn why temperature, humidity & daylight hours matter for a lasting finish — from a local MN painting contractor.",
        image: "https://www.trinitypaintingmn.com/images/b5fabe65-e579-4a3e-b551-c53cf31fa467.jpeg",
        datePublished: "2024-03-22T08:00:00Z",
        authorName: "Dustin Nyblom - Trinity Painting & Renewal",
        publisherName: "Trinity Painting & Renewal",
        url: "https://www.trinitypaintingmn.com/blog/best-time-to-paint-exterior-in-minnesota"
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />
            <ArticleSchema article={articleSchema} />
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:40px_40px]" />
                </div>
                <div className="container-wide relative z-10">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <div className="flex items-center justify-center gap-2 text-gold font-bold text-xs uppercase tracking-[0.3em] mb-6">
                            <span className="h-px w-8 bg-gold/30" />
                            Seasonal Painting Guide
                            <span className="h-px w-8 bg-gold/30" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-8 leading-[1.1]">
                            When Is the Best Time to Paint Your House in <span className="text-gold">Minnesota?</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-serif italic italic-light">
                            Navigating the short, high-demand exterior painting season in the Twin Cities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-20">
                <div className="container-wide">
                    <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
                        
                        {/* Post Content */}
                        <div className="flex-grow lg:w-2/3">
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 overflow-hidden relative">
                                
                                {/* Featured Image Section */}
                                <div className="relative aspect-video mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-slate-100">
                                   <Image 
                                      src="/images/b5fabe65-e579-4a3e-b551-c53cf31fa467.jpeg"
                                      alt="Minnesota House Exterior"
                                      fill
                                      className="object-cover"
                                      priority
                                   />
                                </div>

                                <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:font-black prose-headings:text-primary prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
                                    
                                    <p className="text-lg leading-relaxed mb-8 font-medium">
                                        As a painting contractor here in Minnesota, the question I get asked more than any other is: &quot;When can we get on your schedule?&quot; In the Twin Cities, we don&apos;t have the luxury of a year-round exterior painting season like our colleagues in Florida or Texas. We are working with a tight, high-stakes window where temperature, humidity, and even daylight hours dictate the quality of your home&apos;s finish.
                                    </p>

                                    <h2 className="text-3xl mt-12 mb-6">The Minnesota Exterior Painting Window</h2>
                                    <p className="mb-6">
                                        If you want a paint job that actually lasts through a decade of our brutal freeze-thaw cycles, you have to play by the rules of chemistry. For most premium exterior paints, including the Sherwin-Williams Emerald series we specify, we look for very specific conditions:
                                    </p>

                                    <ul className="space-y-4 mb-8">
                                        <li className="flex gap-4">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="h-3 w-3 text-gold" />
                                            </div>
                                            <div>
                                                <strong>Optimal Temps:</strong> Ideally between 50°F and 90°F. While some late-season paints are rated for 35°F, we prefer a consistent 50°F+ to ensure proper film formation and bonding.
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="h-3 w-3 text-gold" />
                                            </div>
                                            <div>
                                                <strong>Dry Time:</strong> No rain forecast for at least 24 hours after application. Minnesota summer storms can roll in fast, so we monitor radar constantly.
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="h-3 w-3 text-gold" />
                                            </div>
                                            <div>
                                                <strong>Humidity Profile:</strong> Below 85% humidity. High humidity prevents the water in the paint from evaporating, which can lead to a &quot;surfactant leaching&quot; or a sticky finish that never quite cures.
                                            </div>
                                        </li>
                                    </ul>

                                    <h3 className="text-2xl mt-8 mb-4">The Best Months: May, June, and September</h3>
                                    <p className="mb-6">
                                        <strong>May and June</strong> are the &quot;Golden Months&quot; for Minnesota painters. The air is fresh, the humidity hasn&apos;t quite peaked yet, and the long daylight hours give our crews ample time to ensure precision work. 
                                    </p>
                                    <p className="mb-12">
                                        <strong>September</strong> is our second favorite window. The &quot;dog days&quot; of August heat have passed, and we get those beautiful, x-60-degree days that are perfect for paint curing. However, we have to watch the dew points carefully in the late fall.
                                    </p>

                                    <h2 className="text-3xl mt-12 mb-6">Why Minnesota Winters Destroy Improperly Applied Paint</h2>
                                    <p className="mb-6">
                                        Why does it matter so much? Because the <strong>Freeze-Thaw Cycle</strong> is the number one killer of paint in the Midwest. If your paint was applied when the wood was damp (even slightly) or when the temperature dropped below 40°F before the paint cured, moisture gets trapped behind the film.
                                    </p>
                                    <p className="mb-6">
                                        When that moisture freezes in January, it expands. When it thaws in April, it pushes the paint right off the siding. This is why you see so many older South Minneapolis homes with &quot;alligatoring&quot; or large sheets of peeling paint. They weren&apos;t just painted poorly; they were painted at the wrong time.
                                    </p>
                                    <p className="mb-12">
                                        At Trinity, we specify <strong>Sherwin-Williams Duration</strong> or <strong>Emerald Exterior</strong> specifically because these lines are engineered to breathe. They allow small amounts of moisture to escape without compromising the bond, which is essential for our climate.
                                    </p>

                                    <h2 className="text-3xl mt-12 mb-6">Can You Paint Exterior in Fall?</h2>
                                    <p className="mb-8">
                                        The late September and early October window is possible, but it&apos;s risky. Once the overnight lows start hitting the 30s, the chemical curing process essentially stops. If the paint isn&apos;t 100% cured before that first hard freeze, you are looking at a failure within two years. We usually stop our exterior season by mid-October to ensure every client gets a finish that will last a decade, not just a season.
                                    </p>

                                    <div className="mt-16 flex flex-col items-center justify-center p-12 bg-primary rounded-[3rem] text-center shadow-2xl shadow-primary/20 border border-white/5 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                        <h3 className="text-2xl md:text-3xl font-serif font-black text-white mb-4 relative z-10">Our 2025 Schedule is Filling Fast</h3>
                                        <p className="text-white/70 mb-8 max-w-lg relative z-10 font-light">The Minnesota exterior window is short. Book your free estimate now to secure a spot in our May or June rotation.</p>
                                        <Button 
                                            onClick={() => setIsQuoteModalOpen(true)}
                                            className="h-16 px-10 bg-gold hover:bg-white transition-all duration-300 text-primary rounded-full font-bold uppercase tracking-widest text-xs relative z-10 shadow-xl group"
                                        >
                                            Secure Your Exterior Quote
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Recent Service Area Component Link for SEO */}
                        <PostSidebar onOpenQuote={() => setIsQuoteModalOpen(true)} />
                    </div>
                </div>
            </section>
            
            <QuoteModal 
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />
        </main>
    );
}
