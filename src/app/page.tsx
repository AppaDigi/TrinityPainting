"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { TestimonialsSection } from "@/components/ui/testimonials";
import { ServiceCarousel, type Service as CarouselService } from "@/components/ui/services-card";
import { Button } from "@/components/ui/button";
import Hero from "@/components/ui/hero";
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  PaintBucket,
  HomeIcon,
  ChefHat,
  Building2,
  Layers,
  Frame
} from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { QuoteModal } from "@/components/ui/quote-modal";

const carouselServices: CarouselService[] = [
  {
    number: "001",
    title: "Interior Painting",
    description:
      "Transform your living spaces with personalized color schemes and flawless finishes. From cozy bedrooms to open-concept living rooms.",
    icon: PaintBucket,
    image: "/service-interior.jpeg",
  },
  {
    number: "002",
    title: "Exterior Painting",
    description:
      "Weather-resistant coatings that protect your home and boost curb appeal. Built to endure Minnesota's harshest seasons.",
    icon: HomeIcon,
    image: "/service-exterior.png",
  },
  {
    number: "003",
    title: "Kitchen & Cabinet Refinishing",
    description:
      "Modernize your kitchen without the cost of a full renovation. Our factory-smooth finishes breathe new life into tired cabinets.",
    icon: ChefHat,
    image: "/service-cabinet.webp",
  },
  {
    number: "004",
    title: "Commercial Painting",
    description:
      "Professional-grade coatings for offices, retail spaces, and commercial properties. Minimal disruption, maximum impact.",
    icon: Building2,
    image: "/service-commercial.jpeg",
  },
  {
    number: "005",
    title: "Ceiling Painting",
    description:
      "Brighten any room from above. We handle popcorn ceilings, vaulted spaces, and everything in between with precision.",
    icon: Layers,
    image: "/dustin-portrait.webp",
  },
  {
    number: "006",
    title: "Trim & Frame Painting",
    description:
      "The finishing touch that elevates every room. Crisp, clean lines on baseboards, crown molding, door frames, and window trim.",
    icon: Frame,
    image: "/service-trim.png",
  },
];

const testimonials = [
  {
    author: {
      name: "Sarah M.",
      handle: "Cambridge, MN",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Dustin and his team did an excellent job removing wallpaper and repainting a large family room. Great communication throughout, fair pricing, and the room looks fantastic!",
    href: "#"
  },
  {
    author: {
      name: "Mike T.",
      handle: "Mora, MN",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Dustin removed old wallpaper paste, repaired sheetrock, and painted our ceiling, walls, and doors. The walls look like new! Very pleased from beginning to end.",
    href: "#"
  },
  {
    author: {
      name: "Jennifer K.",
      handle: "Pine City, MN",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Very talented and works with much integrity. Keep up the great work team! 🙏🏼✝️",
    href: "#"
  },
  {
    author: {
      name: "David & Lisa R.",
      handle: "South Minneapolis",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Professional, efficient, and very detail-oriented. Everything was kept clean and the finished result looks flawless. We're so happy with how it turned out.",
    href: "#"
  }
];

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const router = useRouter();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle the form data here
    router.push('/thank-you');
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans overflow-x-hidden bg-background">
      <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <div className="noise-overlay" />

      <main className="flex-grow">
        {/* ====================
            HERO SECTION
            ==================== */}
        <Hero onOpenQuote={() => setIsQuoteModalOpen(true)} />

        {/* ====================
            TRUST BAR
            ==================== */}
        <div className="py-12 bg-gold relative z-20 border-y border-gold/20">
          <div className="container-wide">
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-x-16 gap-y-8 text-xs font-bold uppercase tracking-[0.2em] text-black">
              {[
                "BBB Accredited Business",
                "Fully Licensed & Insured",
                "Serving Mora & Beyond",
                "5-Star Rated Service"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 transition-all duration-300 cursor-default hover:scale-110 hover:-translate-y-1">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ====================
            EDITORIAL INTRO (Using Container Queries pattern from 'Advanced Layouts')
            ==================== */}
        <section className="@container py-[var(--section-spacing)] bg-background relative" id="about">
          {/* Decoration */}
          <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              <div className="relative group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                  <Image
                    src="/editorial-home.jpeg"
                    alt="Our Work"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                {/* Floating Badge - Responsive via Queries */}
                <div className="absolute -bottom-12 -right-12 bg-primary p-8 rounded-[2rem] shadow-2xl animate-float hidden @lg:block border border-white/10 z-10 transition-transform hover:scale-105">
                  <div className="flex items-center gap-4">
                    <div className="bg-gold/10 p-3 rounded-full text-gold">
                      <ShieldCheck className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-3xl font-serif font-black text-white">100%</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">Satisfaction<br />Guaranteed</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <span className="text-gold font-bold text-xs uppercase tracking-[0.25em] mb-8 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-gold" />
                  Our Philosophy
                </span>
                <h2 className="mb-10 text-primary">
                  Your home is where <br />
                  <span className="text-gold-dark italic font-medium">life happens.</span>
                </h2>
                <div className="space-y-8 text-xl text-muted-foreground font-light leading-relaxed">
                  <p>
                    At <strong className="text-primary font-medium">Trinity Painting & Renewal</strong>, we believe true luxury lies in peace of mind. It's knowing that the people in your home respect your space as much as you do.
                  </p>
                  <p>
                    Guided by faith and a commitment to excellence, we treat every project as an act of stewardship. From the meticulous protection of your furniture to the final walkthrough, our process is designed to be as seamless as the finish we leave behind.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-border flex items-center gap-6">
                  <div>
                    <p className="font-serif text-2xl text-primary italic">Dustin & Team</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">Founders & Lead Artisans</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================
            SERVICES CAROUSEL
            ==================== */}
        <section id="services" className="py-[var(--section-spacing)] bg-surface-50 relative border-t border-border overflow-hidden">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
              <div className="max-w-xl">
                <span className="text-gold font-bold text-xs uppercase tracking-[0.25em] mb-4 block">What We Do</span>
                <h2 className="text-primary">Our Services.</h2>
              </div>
            </div>

            <ServiceCarousel services={carouselServices} />
          </div>
        </section>

        {/* ====================
            TRINITY SEAL (High Contrast)
            ==================== */}
        <section className="py-[var(--section-spacing)] bg-primary text-white relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5 relative">
                <div className="sticky top-32">
                  <span className="text-gold font-bold text-xs uppercase tracking-[0.25em] mb-6 block">The Trinity Seal</span>
                  <h2 className="text-5xl md:text-7xl font-serif leading-[0.9] mb-12">
                    Our ironclad <br />
                    <span className="text-gray-500 italic">promise to you.</span>
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                    We don't just finish the job; we finish it right. Our 4-point promise covers every aspect of your experience.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-12 gap-y-16">
                {[
                  { title: "God-Honoring Craftsmanship", desc: "Work that reflects excellence and integrity." },
                  { title: "People Over Profits", desc: "You receive our full attention, regardless of project size." },
                  { title: "Transparent Communication", desc: "Just honest pricing and clear timelines. No 'surprise' invoices." },
                  { title: "Quality That Lasts", desc: "Premium materials like Sherwin-Williams only. We never cut corners on prep work." },
                ].map((seal, i) => (
                  <div key={i} className="group border-l border-white/10 pl-8 hover:border-gold transition-colors duration-500">
                    <span className="block text-6xl font-serif text-white/10 font-bold mb-4 group-hover:text-gold transition-colors duration-500">0{i + 1}</span>
                    <h3 className="text-2xl font-serif font-medium mb-3 group-hover:text-gold transition-colors">{seal.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed group-hover:text-gray-300 transition-colors">{seal.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ====================
            TESTIMONIALS
            ==================== */}
        <TestimonialsSection
          title="Word of Mouth"
          description="We take pride in our work and it shows in the reviews from our neighbors."
          testimonials={testimonials}
          className="bg-primary border-t border-white/5 pb-48"
        />

        {/* ====================
            CONTACT / LEAD GEN
            ==================== */}
        <section id="quote" className="relative pb-32 -mt-32 z-30">
          <div className="container-wide">
            <div className="bg-gold rounded-[3rem] shadow-[0_30px_90px_-15px_rgba(198,168,124,0.3)] p-8 lg:p-24 border border-gold/20 relative overflow-hidden">
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />

              <div className="grid lg:grid-cols-2 gap-20 relative z-10">
                <div>
                  <span className="text-primary font-bold text-xs uppercase tracking-[0.25em] mb-6 block">Start Your Project</span>
                  <h2 className="text-primary mb-8 tracking-tight">
                    Ready to renew <br /> <span className="italic text-white">your space?</span>
                  </h2>
                  <p className="text-xl text-primary/80 mb-12 font-light leading-relaxed">
                    Fill out the form to request your free, no-obligation estimate. We'll get back to you within 24 hours.
                  </p>

                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/20 border border-white/10 hover:border-white/30 transition-colors group">
                      <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <PhoneCall className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1">Call/Text Directly</p>
                        <p className="text-3xl font-serif font-bold text-primary">(763) 225-2393</p>
                      </div>
                    </div>
                  </div>
                </div>

                <form
                  onSubmit={handleContactSubmit}
                  className="space-y-6 bg-white/30 p-8 lg:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-md"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-primary/70 pl-3">First Name</label>
                      <input className="w-full h-14 px-6 rounded-2xl bg-white/80 border border-white/20 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all font-medium text-primary shadow-sm" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-primary/70 pl-3">Last Name</label>
                      <input className="w-full h-14 px-6 rounded-2xl bg-white/80 border border-white/20 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all font-medium text-primary shadow-sm" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-primary/70 pl-3">Email Address</label>
                    <input className="w-full h-14 px-6 rounded-2xl bg-white/80 border border-white/20 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all font-medium text-primary shadow-sm" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-primary/70 pl-3">Service Needed</label>
                    <div className="relative">
                      <select className="w-full h-14 px-6 rounded-2xl bg-white/80 border border-white/20 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all font-medium text-primary appearance-none cursor-pointer shadow-sm">
                        <option>Interior Painting</option>
                        <option>Exterior Painting</option>
                        <option>Cabinet Refinishing</option>
                        <option>Full Renovation</option>
                      </select>
                      <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/40 rotate-90 pointer-events-none" />
                    </div>
                  </div>
                  <Button className="w-full h-16 text-lg font-bold bg-primary text-white hover:bg-white hover:text-primary transition-all rounded-2xl uppercase tracking-widest mt-4 shadow-xl shadow-primary/20">
                    Submit Request
                  </Button>
                </form>
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
