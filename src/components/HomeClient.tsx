"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { TestimonialsSection } from "@/components/ui/testimonials";
import Link from 'next/link';
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
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { QuoteModal } from "@/components/ui/quote-modal";
import { CoreIdentity } from "@/components/ui/core-identity";
import { TrinitySealPromise } from "@/components/ui/trinity-seal-promise";

const carouselServices: CarouselService[] = [
  {
    number: "001",
    title: "Interior Painting",
    slug: "interior-painting",
    description:
      "Transform your living spaces with personalized color schemes and flawless finishes. From cozy bedrooms to open-concept living rooms.",
    icon: PaintBucket,
    image: "/service-interior.jpeg",
  },
  {
    number: "002",
    title: "Exterior Painting",
    slug: "exterior-painting",
    description:
      "Weather-resistant coatings that protect your home and boost curb appeal. Built to endure Minnesota's harshest seasons.",
    icon: HomeIcon,
    image: "/service-exterior.png",
  },
  {
    number: "003",
    title: "Kitchen & Cabinet Refinishing",
    slug: "cabinet-refinishing",
    description:
      "Modernize your kitchen without the cost of a full renovation. Our factory-smooth finishes breathe new life into tired cabinets.",
    icon: ChefHat,
    image: "/service-cabinet.webp",
  },
  {
    number: "004",
    title: "Commercial Painting",
    slug: "commercial-painting",
    description:
      "Professional-grade coatings for offices, retail spaces, and commercial properties. Minimal disruption, maximum impact.",
    icon: Building2,
    image: "/service-commercial.jpeg",
  },
  {
    number: "005",
    title: "Ceiling Painting",
    slug: "ceiling-painting",
    description:
      "Brighten any room from above. We handle popcorn ceilings, vaulted spaces, and everything in between with precision.",
    icon: Layers,
    image: "/dustin-portrait.webp",
  },
  {
    number: "006",
    title: "Trim & Frame Painting",
    slug: "trim-frame-painting",
    description:
      "The finishing touch that elevates every room. Crisp, clean lines on baseboards, crown molding, door frames, and window trim.",
    icon: Frame,
    image: "/service-trim.png",
  },
];

const testimonials = [
  {
    author: {
      name: "Home Owner",
      handle: "Facebook",
    },
    text: "We hired trinity for some interior painting and the end result was flawless. Thanks again",
    href: "#"
  },
  {
    author: {
      name: "Home Owner",
      handle: "Google",
    },
    text: "We hired Dustin to paint a couple of years ago, and he did a great job! We were impressed with how quickly he completed the job and would recommend him to friends and family.",
    href: "#"
  },
  {
    author: {
      name: "Minneapolis, MN",
      handle: "Facebook",
    },
    text: "Highly recommend! We had our bedroom painted by Dustin and it turned out amazing. Professional, efficient, and very detail-oriented. Everything was kept clean and the finished result looks flawless. We're so happy with how it turned out and would definitely use them again!",
    href: "#"
  },
  {
    author: {
      name: "Dustin Akers",
      handle: "Google",
    },
    text: "I have used dustin Nyblom for shop repair after tree fell on it. He does great work also treats you like family and it's his own home. Respectful responsible careing and very informative how the job will be done and keeps you in the loop.",
    href: "#"
  },
  {
    author: {
      name: "Allie Nicole",
      handle: "Google",
    },
    text: "We had our bedroom painted in our South Minneapolis home and couldn't be happier with the results. The work was done professionally, efficiently, and with great attention to detail. Communication with Dustin was easy throughout the process, and everything was completed on time. We would absolutely recommend them to anyone looking for quality interior painting and would gladly hire them again.",
    href: "#"
  },
  {
    author: {
      name: "Sara McConnell",
      handle: "REALTOR (Google)",
    },
    text: "Dustin and his team did an excellent job removing wallpaper and repainting a large family room for a client of mine. Dustin had great communication throughout the process, was fair with pricing and the family room looks fantastic now! Thanks Dustin and team!",
    href: "#"
  },
  {
    author: {
      name: "Saint Paul Home Owner",
      handle: "Facebook",
    },
    text: "Shoutout to Trinity Painting & Renewal Services for the amazing job they did on my home interior! They covered multiple rooms and several walls, completely transforming the feel of my house here in Saint Paul. The owner is one of the friendliest professionals I've dealt with and he really went above and beyond to make the project work for my financial goals. The crew was respectful, and the communication was excellent throughout the entire job. I will definitely be using them again for any future painting needs!",
    href: "#"
  },
  {
    author: {
      name: "Pam Caron",
      handle: "Lino Lakes, MN",
    },
    text: "Dustin removed old wallpaper paste on sheet rocked walls. Some sheet rock repair was done, and the walls look like new! Fresh paint on the ceiling, walls and doors. I was very pleased with his work from beginning to end. Would definitely hire him again.",
    href: "#"
  },
  {
    author: {
      name: "Nathan Tatro",
      handle: "Google",
    },
    text: "Very talented and works with much integrity. Keep up the great work team! 🙏🏼✝️",
    href: "#"
  },
  {
    author: {
      name: "Andrew Barrett",
      handle: "Google",
    },
    text: "Good work, better people 👍🏼",
    href: "#"
  },
  {
    author: {
      name: "Calvin Peterson",
      handle: "Google",
    },
    text: "Great owner, honest work!",
    href: "#"
  }
];

export default function HomeClient() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const router = useRouter();

  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingContact(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        router.push('/thank-you');
      } else {
        alert("Something went wrong. Please try again or call us.");
        setIsSubmittingContact(false);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again or call us.");
      setIsSubmittingContact(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans overflow-x-hidden bg-background">
      <Header onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <div className="noise-overlay" />

      <main className="flex-grow">
        <Hero onOpenQuote={() => setIsQuoteModalOpen(true)} />

        <div className="py-12 bg-gold relative z-20 border-y border-gold/20">
          <div className="container-wide">
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-x-16 gap-y-8 text-xs font-bold uppercase tracking-[0.2em] text-black">
              <div className="hover:scale-105 transition-transform">
                <iframe title="BBB Accredited Business Seal" loading="lazy" frameBorder="0" style={{ border: 0, height: "90px", width: "200px" }} src="https://seal-minnesota.bbb.org/frame/ruhzbal/bbb-1000078684.png?chk=C86EBB7D65"></iframe>
              </div>
              {[
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

        <section className="@container py-[var(--section-spacing)] bg-background relative" id="about">
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
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
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
                    At <strong className="text-primary font-medium">Trinity Painting & Renewal</strong>, we believe true luxury lies in peace of mind. It&apos;s knowing that the people in your home respect your space as much as you do.
                  </p>
                  <p>
                    Guided by faith and a commitment to excellence, we treat every project as an act of stewardship. From the meticulous protection of your furniture to the final walkthrough, our process is designed to be as seamless as the finish we leave behind.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        <TrinitySealPromise />

        <section id="services" className="py-[var(--section-spacing)] bg-surface-50 relative border-t border-border overflow-hidden">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
              <div className="max-w-xl">
                <span className="text-gold font-bold text-xs uppercase tracking-[0.25em] mb-4 block">What We Do</span>
                <h2 className="text-primary mb-6">Our Services.</h2>
              </div>
            </div>

            <ServiceCarousel services={carouselServices} />
          </div>
        </section>

        <CoreIdentity />

        <TestimonialsSection
          title="Realtor ROI & Client Testimonials"
          description="Local realtors and homeowners agree: A Trinity paint job directly increases your home's value and speeds up the resale process in our market."
          testimonials={testimonials}
          className="bg-primary border-t border-white/5 pb-48"
        />

        <section id="quote" className="relative pb-20 sm:pb-32 -mt-16 sm:-mt-32 z-30">
          <div className="container-wide px-4 sm:px-6">
            <div className="bg-gold rounded-[2rem] sm:rounded-[3rem] shadow-[0_30px_90px_-15px_rgba(198,168,124,0.3)] p-6 sm:p-8 lg:p-24 border border-gold/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />

              <div className="grid lg:grid-cols-2 gap-20 relative z-10">
                <div>
                  <span className="text-primary font-bold text-xs uppercase tracking-[0.25em] mb-6 block">Start Your Project</span>
                  <h2 className="text-primary mb-8 tracking-tight">
                    Ready to renew <br /> <span className="italic text-white">your space?</span>
                  </h2>
                  <p className="text-xl text-primary/80 mb-12 font-light leading-relaxed">
                    Fill out the form to request your free, no-obligation estimate. We&apos;ll get back to you within 24 hours.
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
                  className="space-y-4 sm:space-y-6 bg-white/30 p-6 sm:p-8 lg:p-12 rounded-3xl sm:rounded-[2.5rem] border border-white/10 backdrop-blur-md"
                >
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary/70 pl-2 sm:pl-3">Name</label>
                      <input required name="fullName" className="w-full h-12 sm:h-14 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-white/80 border border-white/20 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all font-medium text-primary shadow-sm text-sm sm:text-base" placeholder="First & Last Name" />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary/70 pl-2 sm:pl-3">Phone Number</label>
                      <input required type="tel" name="phone" className="w-full h-12 sm:h-14 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-white/80 border border-white/20 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all font-medium text-primary shadow-sm text-sm sm:text-base" placeholder="(555) 555-5555" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary/70 pl-2 sm:pl-3">Email Address</label>
                      <input required type="email" name="email" className="w-full h-12 sm:h-14 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-white/80 border border-white/20 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all font-medium text-primary shadow-sm text-sm sm:text-base" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary/70 pl-2 sm:pl-3">Project Address</label>
                      <input required name="address" className="w-full h-12 sm:h-14 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-white/80 border border-white/20 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all font-medium text-primary shadow-sm text-sm sm:text-base" placeholder="Street, City, Zip" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary/70 pl-2 sm:pl-3">Property Type</label>
                      <div className="relative">
                        <select required name="propertyType" className="w-full h-12 sm:h-14 px-4 sm:px-6 pr-10 rounded-xl sm:rounded-2xl bg-white/80 border border-white/20 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all font-medium text-primary appearance-none cursor-pointer shadow-sm text-sm sm:text-base truncate">
                          <option value="">Select an option...</option>
                          <option>Residential (Single Family, Townhome)</option>
                          <option>Commercial (Storefront, Office, Industrial)</option>
                        </select>
                        <ArrowRight className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/40 rotate-90 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary/70 pl-2 sm:pl-3">Primary Service</label>
                      <div className="relative">
                        <select required name="service" className="w-full h-12 sm:h-14 px-4 sm:px-6 pr-10 rounded-xl sm:rounded-2xl bg-white/80 border border-white/20 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all font-medium text-primary appearance-none cursor-pointer shadow-sm text-sm sm:text-base truncate">
                          <option value="">Select an option...</option>
                          <option>Exterior Painting</option>
                          <option>Interior Painting</option>
                          <option>Full Renewal (Both)</option>
                        </select>
                        <ArrowRight className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/40 rotate-90 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary/70 pl-2 sm:pl-3">Stewardship Tier (American-Made Sherwin-Williams)</label>
                    <div className="relative">
                      <select required name="tier" className="w-full h-12 sm:h-14 px-4 sm:px-6 pr-10 rounded-xl sm:rounded-2xl bg-white/80 border border-white/20 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all font-medium text-primary appearance-none cursor-pointer shadow-sm text-sm sm:text-base truncate">
                        <option value="">Select protection level...</option>
                        <option>The Best: Emerald / Rain Refresh</option>
                        <option>The Better: Duration</option>
                        <option>The Good: SuperPaint / Latitude</option>
                      </select>
                      <ArrowRight className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/40 rotate-90 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary/70 pl-2 sm:pl-3">Hero & Heritage Discounts</label>
                    <div className="relative">
                      <select name="discount" className="w-full h-12 sm:h-14 px-4 sm:px-6 pr-10 rounded-xl sm:rounded-2xl bg-white/80 border border-white/20 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all font-medium text-primary appearance-none cursor-pointer shadow-sm text-sm sm:text-base truncate">
                        <option>None / Regular Stewardship</option>
                        <option>Homeschooling Family</option>
                        <option>First Responder / Law Enforcement</option>
                        <option>Military / Veteran</option>
                      </select>
                      <ArrowRight className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/40 rotate-90 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary/70 pl-2 sm:pl-3">Project Goals & Additional Notes</label>
                    <textarea
                      rows={4}
                      name="goals"
                      className="w-full p-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-white/80 border border-white/20 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all font-medium text-primary shadow-sm resize-none text-sm sm:text-base"
                      placeholder="Tell us about your goals (e.g. Maximizing Resale Value, Routine Maintenance) and current conditions..."
                    />
                  </div>

                  <Button type="submit" disabled={isSubmittingContact} className="w-full h-14 sm:h-16 text-base sm:text-lg font-bold bg-primary text-white hover:bg-white hover:text-primary transition-all rounded-xl sm:rounded-2xl uppercase tracking-widest mt-2 sm:mt-4 shadow-xl shadow-primary/20">
                    {isSubmittingContact ? "Processing..." : "Request Formal Estimate"}
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
