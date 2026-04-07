"use client";

import { Header } from '@/components/ui/header';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { QuoteModal } from '@/components/ui/quote-modal';
import { useState } from 'react';

const blogPosts = [
    {
        title: "When Is the Best Time to Paint the Exterior of a House in Minnesota?",
        excerpt: "Minnesota exterior painting season runs May-September. Learn why temperature, humidity & daylight hours matter for a lasting finish — from a local MN painting contractor.",
        date: "March 22, 2024",
        author: "Trinity Painting",
        readTime: "7 min read",
        slug: "best-time-to-paint-exterior-in-minnesota",
        image: "/images/b5fabe65-e579-4a3e-b551-c53cf31fa467.jpeg"
    },
    {
        title: "How Much Does It Cost to Paint a House in Minneapolis? (2025 Guide)",
        excerpt: "Minneapolis house painting costs range $1,800-$6,000+ depending on size, prep needs & paint quality. Get local MN pricing breakdowns...",
        date: "March 20, 2024",
        author: "Trinity Painting",
        readTime: "8 min read",
        slug: "how-much-does-it-cost-to-paint-a-house-in-minneapolis",
        image: "https://trinitypaintingmn.com/editorial-home.jpeg"
    }
];

export function BlogListingClient() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-white">
            <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-primary overflow-hidden relative">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:40px_40px]" />
                </div>
                <div className="container-wide relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-2 text-gold font-bold text-xs uppercase tracking-[0.3em] mb-6">
                            <span className="h-px w-8 bg-gold/30" />
                            Insights & Excellence
                            <span className="h-px w-8 bg-gold/30" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-8">
                            Blog & <span className="text-gold">Resources</span>
                        </h1>
                        <p className="text-xl text-white/70 max-w-xl mx-auto leading-relaxed">
                            Professional advice, local market updates, and expert tips for maximizing your home&apos;s value and beauty.
                        </p>
                    </div>
                </div>
            </section>

            {/* Post Grid */}
            <section className="py-24">
                <div className="container-wide">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link 
                                href={`/blog/${post.slug}`} 
                                key={post.slug}
                                className="group bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image 
                                        src={post.image} 
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-4 text-[10px] font-bold text-gold uppercase tracking-widest mb-4">
                                        <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {post.date}</span>
                                        <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {post.readTime}</span>
                                    </div>
                                    <h2 className="text-2xl font-serif font-black text-primary mb-4 leading-tight group-hover:text-gold transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 italic">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                                        Read Article 
                                        <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-2" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pb-24">
                <div className="container-wide">
                    <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h3 className="text-3xl md:text-5xl font-serif font-black text-primary mb-6">
                                Have a specific project in mind?
                            </h3>
                            <p className="text-slate-600 mb-10 text-lg">
                                We provide free, detailed estimates across the entire Twin Cities metro area.
                            </p>
                            <Button 
                                onClick={() => setIsQuoteModalOpen(true)}
                                className="h-16 px-10 bg-primary hover:bg-gold text-white rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-xl shadow-primary/20"
                            >
                                Get A Free Quote
                            </Button>
                        </div>
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
