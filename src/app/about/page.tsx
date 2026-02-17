import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <>
            <Navbar />
            <section className="pt-32 pb-20 bg-primary text-white">
                <div className="container">
                    <h1 className="text-5xl md-text-7xl font-bold mb-6">Our Story</h1>
                    <p className="text-xl text-white/70 max-w-2xl font-light italic">
                        "Honest work, done with excellence, honors God and serves people."
                    </p>
                </div>
            </section>

            <section className="section-padding bg-bg">
                <div className="container grid grid-cols-1 lg-grid-cols-2 gap-20">
                    <div className="space-y-8 text-lg text-text-muted">
                        <h2 className="text-4xl font-bold text-primary">Based in Mora, Minnesota</h2>
                        <p>
                            Trinity Painting & Renewal was founded on a simple belief: that honest work, done with excellence, honors God and serves people.
                            Owner Dustin Nyblom started this company with a vision to bring more than just paint to homeowners' doors.
                        </p>
                        <p>
                            We take our name seriously. "Trinity" represents our commitment to three core principles: honoring God in our work, serving people with excellence, and delivering quality that lasts.
                        </p>
                        <div className="bg-white p-10 rounded-lg shadow-sm border-l-4 border-secondary">
                            <h3 className="text-2xl font-bold text-primary mb-4 italic">"I started this company because I believe homeowners deserve a contractor they can actually trust. Someone who shows up, does what they say they'll do, and treats your home with respect. That's the Trinity difference."</h3>
                            <p className="font-bold">— Dustin Nyblom</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                            <img src="/images/b9812286-f0c1-4db0-b40d-5e557f541730.jpeg" alt="Dustin at Work" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
