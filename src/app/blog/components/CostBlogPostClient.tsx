"use client";

import { ArticleSchema } from '@/components/SchemaMarkup';
import { Header } from '@/components/ui/header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { QuoteModal } from '@/components/ui/quote-modal';
import { useState } from 'react';
import { PostSidebar } from './PostSidebar';

export function CostBlogPostClient() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    
    const articleData = {
        headline: "How Much Does It Cost to Paint a House in Minneapolis? (2025 Pricing Guide)",
        description: "A comprehensive guide to residential painting costs in Minneapolis, covering interior and exterior pricing factors, local considerations, and how to choose the right contractor.",
        image: "https://trinitypaintingmn.com/editorial-home.jpeg",
        datePublished: "2024-03-20T08:00:00Z",
        authorName: "Trinity Painting & Renewal",
        publisherName: "Trinity Painting & Renewal",
        url: "https://www.trinitypaintingmn.com/blog/how-much-does-it-cost-to-paint-a-house-in-minneapolis"
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />
            <ArticleSchema article={articleData} />
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:40px_40px]" />
                </div>
                <div className="container-wide relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-2 text-gold font-bold text-xs uppercase tracking-[0.3em] mb-6">
                            <span className="h-px w-8 bg-gold/30" />
                            Pricing Guide & Resources
                            <span className="h-px w-8 bg-gold/30" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-black text-white mb-8 leading-[1.1]">
                            How Much Does It Cost to Paint a House in <span className="text-gold">Minneapolis?</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-serif italic">
                            A breakdown of 2025 pricing for interior and exterior painting in the Twin Cities metro.
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
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                                
                                <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:font-black prose-headings:text-primary prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
                                    
                                    <p className="text-lg leading-relaxed mb-8">
                                        For homeowners in Minneapolis, maintaining the beauty and structural integrity of their property often begins with a fresh coat of paint. Whether you&apos;re looking to refresh a historic South Minneapolis craftsman, update a mid-century home in Northeast, or protect a new build in the suburbs, understanding the financial investment required is essential.
                                    </p>

                                    <p className="mb-8">
                                        In 2025, house painting costs in the Twin Cities are influenced by several factors&mdash;from the rising cost of high-performance materials to the specialized labor required for Minnesota&apos;s unique architectural landscape. In this guide, we break down exactly what you can expect to pay for professional painting services in Minneapolis and the surrounding metro area.
                                    </p>

                                    <h2 className="text-3xl mt-12 mb-6">Minneapolis House Painting Cost Overview</h2>
                                    <p className="mb-6">
                                        On average, a professional painting project in Minneapolis ranges between <strong>$1,800 and $6,000</strong> for an exterior, while interior projects typically range from <strong>$1,200 to $4,500</strong>. These ranges account for standard residential properties; however, large estate homes or intensive restoration projects can exceed these figures.
                                    </p>

                                    <div className="my-10 overflow-x-auto">
                                        <table className="w-full border-collapse bg-slate-50 rounded-2xl overflow-hidden">
                                            <thead>
                                                <tr className="bg-primary text-white">
                                                    <th className="p-4 text-left font-serif uppercase tracking-widest text-[10px]">Home Size</th>
                                                    <th className="p-4 text-left font-serif uppercase tracking-widest text-[10px]">Exterior Cost</th>
                                                    <th className="p-4 text-left font-serif uppercase tracking-widest text-[10px]">Interior Cost</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-200">
                                                <tr>
                                                    <td className="p-4 font-bold text-primary">1,000 sqft</td>
                                                    <td className="p-4 text-slate-600">$1,800 - $2,800</td>
                                                    <td className="p-4 text-slate-600">$1,200 - $2,000</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-bold text-primary">1,500 sqft</td>
                                                    <td className="p-4 text-slate-600">$2,500 - $3,800</td>
                                                    <td className="p-4 text-slate-600">$1,800 - $3,000</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-bold text-primary">2,000 sqft</td>
                                                    <td className="p-4 text-slate-600">$3,200 - $5,000</td>
                                                    <td className="p-4 text-slate-600">$2,500 - $4,000</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-4 font-bold text-primary">2,500 sqft</td>
                                                    <td className="p-4 text-slate-600">$4,000 - $6,500</td>
                                                    <td className="p-4 text-slate-600">$3,200 - $5,000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2 className="text-3xl mt-12 mb-6">What Affects Painting Costs in Minneapolis?</h2>
                                    <p className="mb-6">
                                        Painting prices in MN aren&apos;t just about the square footage. Several localized variables play a significant role in your final estimate:
                                    </p>

                                    <ul className="space-y-4 mb-8">
                                        <li className="flex gap-4">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="h-3 w-3 text-gold" />
                                            </div>
                                            <div>
                                                <strong>Surface Condition & Prep:</strong> Minneapolis is home to many older neighborhoods like Linden Hills and Kingfield. Homes built before 1978 often require lead paint testing and specialized containment. Extensive scraping, sanding, or wood rot repair can add significantly to the labor cost.
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="h-3 w-3 text-gold" />
                                            </div>
                                            <div>
                                                <strong>Number of Stories:</strong> A single-story rambler in Bloomington is far easier to paint than a three-story Victorian in the Wedge. Height requires specialized ladder work, scaffolding, and safety rigging, which increases labor time.
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="h-3 w-3 text-gold" />
                                            </div>
                                            <div>
                                                <strong>Paint Quality:</strong> At Trinity Painting, we specify Sherwin-Williams products. The choice between <em>Duration</em> and <em>Emerald Exterior</em> affects both the material cost and the longevity of the finish. In the freeze-thaw climate of Minnesota, high-performance paint is an investment that pays for itself in reduced maintenance.
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="h-3 w-3 text-gold" />
                                            </div>
                                            <div>
                                                <strong>Seasonal Timing:</strong> The exterior painting window in Minnesota is notoriously tight (generally May through September). Demand spikes in the early spring, and bookings fill up fast. Some contractors offer slight discounts for interior work during the &quot;off-season&quot; winter months.
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 className="h-3 w-3 text-gold" />
                                            </div>
                                            <div>
                                                <strong>Siding Material:</strong> Painting vinyl siding is typically cheaper than restoring weathered wood lap siding. Stuccco&mdash;very common in Minneapolis&mdash;requires specialized elastomeric coatings and often more paint volume due to its porous nature.
                                            </div>
                                        </li>
                                    </ul>

                                    <h2 className="text-3xl mt-12 mb-6">Interior Painting Costs in Minneapolis by Room</h2>
                                    <p className="mb-6">
                                        For interior painting, most Twin Cities contractors charge by the room or by the square foot of wall space. 
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        <li><strong>Average Bedroom:</strong> $350 - $600 (includes walls and basic prep)</li>
                                        <li><strong>Living/Great Room:</strong> $600 - $1,200 (depending on ceiling height)</li>
                                        <li><strong>Kitchen:</strong> $300 - $500 (wall space is usually limited by cabinets)</li>
                                        <li><strong>Bathrooms:</strong> $250 - $450 (due to moisture-resistant paint requirements)</li>
                                    </ul>

                                    <h2 className="text-3xl mt-12 mb-6">How to Choose a Minneapolis Painting Contractor</h2>
                                    <p className="mb-6">
                                        A cheap low-bid offer can often lead to peeling paint or missed details. When vetting local painters, ensure they meet these criteria:
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        <li className="bg-slate-50 p-4 rounded-xl border border-slate-100 italic font-serif">&quot;Check for current MN builder license and liability insurance.&quot;</li>
                                        <li className="bg-slate-50 p-4 rounded-xl border border-slate-100 italic font-serif">&quot;Ask for a written 2-5 year labor and material warranty.&quot;</li>
                                        <li className="bg-slate-50 p-4 rounded-xl border border-slate-100 italic font-serif">&quot;Verify local references in neighborhoods like Edina or St. Paul.&quot;</li>
                                        <li className="bg-slate-50 p-4 rounded-xl border border-slate-100 italic font-serif">&quot;Red Flag: A contractor who asks for 100% payment upfront.&quot;</li>
                                    </ul>

                                    <h2 className="text-3xl mt-12 mb-6">Why Minneapolis Homeowners Choose Trinity Painting</h2>
                                    <p className="mb-8 font-serif italic text-lg text-gold bg-primary p-8 rounded-2xl shadow-inner border border-gold/20">
                                        &quot;At Trinity Painting & Renewal, we believe in radical transparency. Our mission is to provide God-honoring craftsmanship with pricing that reflects true value&mdash;not just the highest margin. We use Sherwin-Williams certified systems to ensure your Twin Cities home survives our brutal winters.&quot;
                                    </p>
                                    <p className="mb-8 leading-relaxed">
                                        We specialize in <Link href="/locations/minneapolis-exterior-painting" className="text-gold hover:underline font-bold">exterior painting</Link> and <Link href="/locations/minneapolis-interior-painting" className="text-gold hover:underline font-bold">interior painting</Link> across the Minneapolis metro. Our estimate process is detailed, outlining exactly where every dollar goes, from premium coatings to the preparation work that makes a finish last for a decade.
                                    </p>

                                    <div className="mt-16 flex flex-col items-center justify-center p-12 bg-slate-50 border border-slate-100 rounded-3xl text-center">
                                        <h3 className="text-2xl font-serif font-black text-primary mb-4">Ready for a Fair Estimate?</h3>
                                        <p className="text-slate-600 mb-8 max-w-lg">Get a detailed, localized pricing breakdown for your specific home in Minneapolis or the suburbs.</p>
                                        <Button 
                                            onClick={() => setIsQuoteModalOpen(true)}
                                            className="h-14 px-10 bg-primary hover:bg-gold transition-all duration-300 text-white rounded-full font-bold uppercase tracking-widest text-xs group"
                                        >
                                            Get a Free Minneapolis Estimate
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
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
