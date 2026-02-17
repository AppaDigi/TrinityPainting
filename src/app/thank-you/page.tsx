import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Star, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-primary">
            {/* Background with Hero Image Variation */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg-new.png"
                    alt="Trinity Painting"
                    fill
                    className="object-cover brightness-[0.2] blur-[2px]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary" />
            </div>

            {/* Decorative Orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container relative z-10 px-6 py-20 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center p-4 bg-gold/10 rounded-full mb-8 border border-gold/20 animate-float">
                    <CheckCircle2 className="h-10 w-10 text-gold" />
                </div>

                <h1 className="font-serif font-black text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-8">
                    Request <span className="text-gold italic font-light">Received.</span>
                </h1>

                <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                    Thank you for choosing <span className="text-gold font-medium">Trinity Painting & Renewal</span>. We've received your project details and a consultant will reach out within <span className="text-white font-medium">24 business hours</span> to schedule your walkthrough.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
                    <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-3xl">
                        <Star className="h-6 w-6 text-gold mx-auto mb-4" />
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Next Steps</h3>
                        <p className="text-xs text-white/50 leading-relaxed font-medium capitalize">We'll review your details and prepare for our call.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-3xl">
                        <Mail className="h-6 w-6 text-gold mx-auto mb-4" />
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Confirmation</h3>
                        <p className="text-xs text-white/50 leading-relaxed font-medium">A copy of your request was sent to your email.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-3xl">
                        <Phone className="h-6 w-6 text-gold mx-auto mb-4" />
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Text Alerts</h3>
                        <p className="text-xs text-white/50 leading-relaxed font-medium">Keep an eye out for a text from (763) 225-2393.</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link href="/">
                        <Button className="h-16 px-10 bg-gold text-primary hover:bg-white hover:text-black transition-all rounded-none uppercase tracking-widest font-bold shadow-2xl shadow-gold/20">
                            <ArrowLeft className="mr-3 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                    <Link href="#portfolio">
                        <Button variant="outline" className="h-16 px-10 border-white/20 text-white hover:bg-white/10 transition-all rounded-none uppercase tracking-widest font-bold backdrop-blur-sm">
                            View Portfolio
                        </Button>
                    </Link>
                </div>

                {/* Footer info mini */}
                <div className="mt-24 pt-12 border-t border-white/10 flex flex-col items-center gap-4">
                    <div className="flex items-center gap-6 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                        <span className="flex items-center gap-2"><MapPin className="h-3 w-3 text-gold" /> Mora, MN</span>
                        <span className="flex items-center gap-2"><Phone className="h-3 w-3 text-gold" /> (763) 225-2393</span>
                    </div>
                    <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.3em]">Trinity Painting & Renewal &copy; {new Date().getFullYear()}</p>
                </div>
            </div>
        </main>
    );
}
