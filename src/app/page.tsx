import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Introduction from "@/components/Introduction";
import ServicesPreview from "@/components/ServicesPreview";
import BestWorkGallery from "@/components/BestWorkGallery";
import TrinitySeal from "@/components/TrinitySeal";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <TrustBar />
            <Introduction />
            <BestWorkGallery />
            <ServicesPreview />

            {/* Testimonials Section */}
            <section className="section-padding bg-gray-50">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Client Testimonials</span>
                        <h2 className="mb-6">What Our Clients Say</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
                            Don't just take our word for it—hear from homeowners who've experienced the Trinity difference.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
                        {[
                            {
                                text: "Dustin and his team did an excellent job removing wallpaper and repainting our large family room. Great communication throughout, fair pricing, and the room looks absolutely fantastic!",
                                author: "Sarah M.",
                                location: "Cambridge, MN",
                                rating: 5
                            },
                            {
                                text: "Dustin removed old wallpaper paste, repaired sheetrock, and painted our ceiling, walls, and doors. The walls look like new! Very pleased from beginning to end.",
                                author: "Mike T.",
                                location: "Mora, MN",
                                rating: 5
                            },
                            {
                                text: "Dustin treats you like family and your home like it's his own. Respectful, responsible, caring, and very informative. He keeps you in the loop every step of the way.",
                                author: "Tom H.",
                                location: "Braham, MN",
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="premium-card h-full justify-between"
                            >
                                <div>
                                    {/* Stars */}
                                    <div className="flex space-x-1 mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="text-gold text-xl">★</span>
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-gray-700 italic mb-8 leading-relaxed text-lg text-pretty">
                                        "{testimonial.text}"
                                    </p>
                                </div>

                                {/* Author */}
                                <div className="pt-6 border-t border-gray-100">
                                    <div className="font-bold text-primary text-xl">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm text-gold uppercase tracking-widest mt-1">
                                        {testimonial.location}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Review CTA */}
                    <div className="text-center mt-16">
                        <a href="/reviews" className="btn-secondary">
                            Read More Reviews
                        </a>
                    </div>
                </div>
            </section>

            <TrinitySeal />

            {/* Final CTA Section */}
            <section className="section-padding bg-black text-white relative overflow-hidden">
                {/* Subtle Gold Texture */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-px bg-gold" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gold" />
                </div>

                <div className="container text-center max-w-4xl relative z-10">
                    <span className="section-label">Get Started Today</span>
                    <h2 className="text-white mb-8">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light text-pretty">
                        Get a free, no-obligation consultation. We'll assess your project, provide honest recommendations, and deliver a detailed estimate.
                    </p>
                    <div className="flex flex-col sm-flex-row items-center justify-center gap-6">
                        <a href="/quote" className="btn-primary">
                            Schedule Free Consultation
                        </a>
                        <a
                            href="tel:XXXXXXXXXX"
                            className="btn-secondary"
                        >
                            Call (XXX) XXX-XXXX
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400 uppercase tracking-widest">
                        <span className="flex items-center">
                            <span className="text-gold mr-2">✓</span> Licensed & Insured
                        </span>
                        <span className="flex items-center">
                            <span className="text-gold mr-2">✓</span> Free Estimates
                        </span>
                        <span className="flex items-center">
                            <span className="text-gold mr-2">✓</span> Satisfaction Guaranteed
                        </span>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
