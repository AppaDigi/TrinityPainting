import Image from "next/image";
import Link from "next/link";
import { Facebook, Star, MapPin, ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Leave a Review | Trinity Painting & Renewal Services",
    description: "Thank you for choosing Trinity Painting. Please consider leaving us a review on Google, Facebook, or Yelp.",
};

export default function ReviewPage() {
    return (
        <div className="min-h-screen bg-primary flex flex-col items-center py-12 px-6 relative overflow-hidden font-sans">
            <div className="noise-overlay opacity-30" />
            
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            
            <div className="relative z-10 w-full max-w-md flex flex-col items-center">
                {/* Logo */}
                <Link href="/" className="mb-12 relative flex justify-center">
                    <Image
                        src="/logo.svg"
                        alt="Trinity Painting & Renewal Services"
                        width={240}
                        height={80}
                        className="h-16 w-auto"
                        priority
                    />
                </Link>
                
                <h1 className="text-3xl md:text-4xl font-serif text-white mb-4 text-center font-bold">How did we do?</h1>
                <p className="text-white/80 text-center mb-10 text-sm md:text-base leading-relaxed">
                    Thank you for trusting us with your home. We'd love to hear about your experience! Please consider leaving us a review.
                </p>

                <div className="w-full space-y-4">
                    {/* Google */}
                    <Link
                        href="https://share.google/bgybKDCasR8kWpLRE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-5 bg-white/5 border border-white/10 rounded-2xl shadow-xl hover:bg-white/10 hover:border-gold/50 transition-all group backdrop-blur-sm"
                    >
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                            <Image src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" width={24} height={24} className="w-6 h-6 object-contain" />
                        </div>
                        <div className="ml-5 flex-1">
                            <h3 className="font-bold text-white text-lg">Google Reviews</h3>
                            <p className="text-sm text-white/60">Review us on Google</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-gold group-hover:bg-gold/20 transition-colors">
                            <Star className="h-5 w-5 fill-current" />
                        </div>
                    </Link>

                    {/* Facebook */}
                    <Link
                        href="https://www.facebook.com/TrinityPaintingRenewalServices"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-5 bg-white/5 border border-white/10 rounded-2xl shadow-xl hover:bg-white/10 hover:border-gold/50 transition-all group backdrop-blur-sm"
                    >
                        <div className="w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                            <Facebook className="h-7 w-7 text-white fill-current" />
                        </div>
                        <div className="ml-5 flex-1">
                            <h3 className="font-bold text-white text-lg">Facebook</h3>
                            <p className="text-sm text-white/60">Recommend us on Facebook</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-gold group-hover:bg-gold/20 transition-colors">
                            <Star className="h-5 w-5 fill-current" />
                        </div>
                    </Link>

                    {/* Yelp */}
                    <Link
                        href="https://www.yelp.com/biz/trinity-painting-and-renewal-services-mora"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-5 bg-white/5 border border-white/10 rounded-2xl shadow-xl hover:bg-white/10 hover:border-gold/50 transition-all group backdrop-blur-sm"
                    >
                        <div className="w-14 h-14 bg-[#FF1A1A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                            <Star className="h-7 w-7 text-white fill-current" />
                        </div>
                        <div className="ml-5 flex-1">
                            <h3 className="font-bold text-white text-lg">Yelp</h3>
                            <p className="text-sm text-white/60">Review us on Yelp</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:text-gold group-hover:bg-gold/20 transition-colors">
                            <Star className="h-5 w-5 fill-current" />
                        </div>
                    </Link>
                </div>
                
                <div className="mt-16 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-gold transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Return to Website
                    </Link>
                </div>
            </div>
        </div>
    );
}
