import Link from 'next/link';
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    ShieldCheck,
    Clock,
    ExternalLink
} from 'lucide-react';

export function Footer() {
    const socialLinks = [
        { icon: Facebook, href: "https://www.facebook.com/409868278878694", label: "Facebook" },
        { icon: Instagram, href: "https://www.instagram.com/trinitypaintingrenewalservices?igsh=MWZ5aGh4a2UwanNsMg%3D%3D&utm_source=qr", label: "Instagram" },
        { icon: Twitter, href: "https://x.com/trinitypaintmn?s=21", label: "X (Twitter)" },
        { icon: Youtube, href: "https://youtube.com/@trinitypainter?si=PufG2MiznhidJlNE", label: "YouTube" },
        { icon: MapPin, href: "https://maps.google.com/maps?cid=5950412633800292852", label: "Google Maps" },
        { icon: ExternalLink, href: "https://yelp.to/iBn8FmFGbM", label: "Yelp" },
    ];

    return (
        <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="font-serif font-black text-2xl leading-none text-white">TRINITY</span>
                            <span className="font-sans text-[0.6rem] font-bold tracking-[0.2em] text-gold uppercase">Painting & Renewal</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            God-honoring craftsmanship for your home. Serving East Central Minnesota with excellence, integrity, and a commitment to stewardship.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300"
                                    title={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                            <a
                                href="https://www.tiktok.com/@trinity.painting5?_r=1&_t=ZP-92V9Zsbciml"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300 font-bold text-[10px]"
                                title="TikTok"
                            >
                                TT
                            </a>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <p className="font-sans font-bold text-sm mb-6 uppercase tracking-wider text-gold">Business Hours</p>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex justify-between border-b border-white/5 pb-1">
                                <span>Mon - Fri</span>
                                <span className="text-white">6:00am - 5:00pm</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-1">
                                <span>Saturday</span>
                                <span className="text-white/40 italic">Closed</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-white/40 italic">Closed</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="font-sans font-bold text-sm mb-6 uppercase tracking-wider text-gold">Contact Us</p>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 transition-colors group">
                                <Phone className="h-5 w-5 text-gold shrink-0 group-hover:scale-110 transition-transform" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Call or Text</span>
                                    <span className="text-white font-medium">(763) 225-2393</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Mail className="h-5 w-5 text-gold shrink-0" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Email Address</span>
                                    <span className="text-white italic">dustin@trinitypaintingmn.com</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <MapPin className="h-5 w-5 text-gold shrink-0" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Our Location</span>
                                    <span className="text-white">403 Cardinal Street<br />Mora, MN 55051</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Trust */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-3 mb-3 text-white font-bold">
                                <ShieldCheck className="h-6 w-6 text-gold" />
                                <span>Quality Assured</span>
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                Licensed, insured, and committed to god-honoring craftsmanship in every stroke.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600 font-bold uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} Trinity Painting & Renewal. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
