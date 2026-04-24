"use client";

import { useState } from "react";
import { ArrowRight, User, Mail, Phone, Home, PaintBucket, MessageSquare, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

export function QuoteForm({ onSuccess }: { onSuccess?: () => void }) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                setIsSubmitting(false);
                if (onSuccess) onSuccess();
                router.push("/thank-you");
            } else {
                alert("Something went wrong. Please try again or call us.");
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again or call us.");
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                {/* Name */}
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Full Name</label>
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-gold transition-colors" />
                        <input
                            required
                            type="text"
                            name="fullName"
                            className="w-full h-14 pl-12 pr-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all font-medium text-primary"
                            placeholder="John Doe"
                        />
                    </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Phone Number</label>
                    <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-gold transition-colors" />
                        <input
                            required
                            type="tel"
                            name="phone"
                            className="w-full h-14 pl-12 pr-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all font-medium text-primary"
                            placeholder="(763) ___ - ____"
                        />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                {/* Email */}
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Email Address</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-gold transition-colors" />
                        <input
                            required
                            type="email"
                            name="email"
                            className="w-full h-14 pl-12 pr-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all font-medium text-primary"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Project Address</label>
                    <div className="relative group">
                        <Home className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-gold transition-colors" />
                        <input
                            required
                            type="text"
                            name="address"
                            className="w-full h-14 pl-12 pr-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all font-medium text-primary"
                            placeholder="Street, City, Zip"
                        />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                {/* Service Type */}
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Primary Service</label>
                    <div className="relative group">
                        <PaintBucket className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-gold transition-colors" />
                        <select required name="service" className="w-full h-14 pl-12 pr-10 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all font-medium text-primary appearance-none cursor-pointer">
                            <option value="">Select option...</option>
                            <option>Exterior Painting</option>
                            <option>Interior Painting</option>
                            <option>Full Renewal (Both)</option>
                        </select>
                        <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 rotate-90" />
                    </div>
                </div>

                {/* Stewardship Tier */}
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1 text-nowrap">Stewardship Tier <span className="hidden sm:inline">(Sherwin-Williams)</span></label>
                    <div className="relative group">
                        <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-gold transition-colors" />
                        <select required name="tier" className="w-full h-14 pl-12 pr-10 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all font-medium text-primary appearance-none cursor-pointer text-sm">
                            <option value="">Select protection level...</option>
                            <option>The Best: Emerald / Rain Refresh</option>
                            <option>The Better: Duration</option>
                            <option>The Good: SuperPaint / Latitude</option>
                        </select>
                        <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 rotate-90" />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                {/* Property Type */}
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Property Type</label>
                    <div className="relative group">
                        <Home className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-gold transition-colors" />
                        <select required name="propertyType" className="w-full h-14 pl-12 pr-10 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all font-medium text-primary appearance-none cursor-pointer">
                            <option value="">Select option...</option>
                            <option>Residential</option>
                            <option>Commercial</option>
                        </select>
                        <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 rotate-90" />
                    </div>
                </div>
                {/* Discounts */}
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Hero & Heritage Discounts</label>
                    <div className="relative group">
                        <CheckCircle2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-gold transition-colors" />
                        <select name="discount" className="w-full h-14 pl-12 pr-10 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all font-medium text-primary appearance-none cursor-pointer text-sm">
                            <option>None / Regular Stewardship</option>
                            <option>Homeschooling Family</option>
                            <option>First Responder / Law</option>
                            <option>Military / Veteran</option>
                        </select>
                        <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 rotate-90" />
                    </div>
                </div>
            </div>

            {/* Project Description */}
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary/60 ml-1">Project Goals & Details</label>
                <div className="relative group">
                    <MessageSquare className="absolute left-4 top-6 h-4 w-4 text-gray-400 group-focus-within:text-gold transition-colors" />
                    <textarea
                        rows={2}
                        name="goals"
                        className="w-full p-6 pl-12 rounded-2xl bg-gray-50 border border-gray-100 focus:border-gold focus:ring-4 focus:ring-gold/10 focus:outline-none transition-all font-medium text-primary resize-none"
                        placeholder="Tell us about your goals (e.g. Maximizing Resale Value, Routine Maintenance), specific repairs, or preferred start dates..."
                    />
                </div>
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 bg-primary text-white hover:bg-gold hover:text-primary transition-all duration-500 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20 group"
            >
                {isSubmitting ? (
                    <div className="flex items-center gap-3">
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing Request...
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        Send Project Request
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </div>
                )}
            </Button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest">
                <CheckCircle2 className="h-3 w-3 text-gold" />
                Responses typically within 24 business hours
            </div>
        </form>
    );
}
