"use client";

import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface PostSidebarProps {
    onOpenQuote: () => void;
}

const cities = [
    { name: 'Minneapolis', href: '/locations/minneapolis-mn' },
    { name: 'Edina', href: '/locations/edina-mn' },
    { name: 'St Louis Park', href: '/locations/st-louis-park-mn' },
    { name: 'Richfield', href: '/locations/richfield-mn' },
    { name: 'Bloomington', href: '/locations/bloomington-mn' },
    { name: 'Golden Valley', href: '/locations/golden-valley-mn' },
    { name: 'Mora', href: '/locations/mora-mn' }
];

const services = [
    { name: 'Exterior Painting', href: '/locations/minneapolis-exterior-painting' },
    { name: 'Interior Painting', href: '/locations/minneapolis-interior-painting' },
    { name: 'Cabinet Refinishing', href: '/services/cabinet-refinishing' }
];

export function PostSidebar({ onOpenQuote }: PostSidebarProps) {
    return (
        <aside className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
                
                {/* Service Area Card */}
                <div className="bg-primary rounded-3xl p-8 text-white shadow-xl shadow-primary/10">
                    <h4 className="text-xl font-serif font-black mb-4">Service Areas</h4>
                    <p className="text-sm text-white/70 mb-6 leading-relaxed">
                        We serve the entire Twin Cities metro area, including:
                    </p>
                    <div className="grid grid-cols-1 gap-y-2 text-xs font-bold uppercase tracking-widest text-white/90">
                        {cities.map((city) => (
                            <Link 
                                key={city.name}
                                href={city.href} 
                                className="flex items-center justify-between group hover:text-gold transition-colors p-2 rounded-lg hover:bg-white/5"
                            >
                                <span className="flex items-center gap-2"><CheckCircle2 className="h-3 w-3 text-gold" /> {city.name}</span>
                                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
                            </Link>
                        ))}
                    </div>
                    <Button 
                        variant="outline" 
                        onClick={onOpenQuote}
                        className="w-full mt-8 border-gold/30 text-gold hover:bg-gold hover:text-primary transition-all rounded-xl font-bold uppercase tracking-widest text-[10px]"
                    >
                        Get An Estimate
                    </Button>
                </div>

                {/* Expert Services */}
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                    <h4 className="text-xl font-serif font-black text-primary mb-6">Expert Services</h4>
                    <div className="space-y-4">
                        {services.map((service) => (
                            <Link 
                                key={service.name}
                                href={service.href} 
                                className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl group hover:bg-gold/10 transition-colors"
                            >
                                <span className="font-bold text-xs uppercase tracking-widest text-primary/70 group-hover:text-primary">{service.name}</span>
                                <ArrowRight className="h-4 w-4 text-gold" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Values Card */}
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
                    <h4 className="text-xl font-serif font-black text-primary mb-4">God-Honoring Craft</h4>
                    <p className="text-sm text-slate-500 leading-relaxed italic mb-6">
                        &quot;Whatever you do, work at it with all your heart, as working for the Lord...&quot;
                    </p>
                    <div className="h-px w-12 bg-gold/30 mx-auto mb-6" />
                    <Link href="/about" className="text-[10px] font-black text-gold uppercase tracking-[0.2em] hover:text-primary transition-colors">Learn About Our Mission</Link>
                </div>

            </div>
        </aside>
    );
}
