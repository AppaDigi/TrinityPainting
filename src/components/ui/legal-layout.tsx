"use client";

import React, { useState } from "react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { QuoteModal } from "@/components/ui/quote-modal";

interface LegalLayoutProps {
    title: string;
    children: React.ReactNode;
}

export function LegalLayout({ title, children }: LegalLayoutProps) {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    return (
        <div className="relative min-h-screen w-full flex flex-col font-sans overflow-x-hidden bg-background">
            <Header onOpenQuote={() => setIsQuoteModalOpen(true)} theme="light" />
            <div className="noise-overlay" />

            <main className="flex-grow pt-32 pb-24 relative z-10">
                <div className="container-wide">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-serif font-black text-primary mb-12 border-b border-border pb-8">
                            {title}
                        </h1>
                        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-primary prose-strong:text-primary">
                            {children}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <QuoteModal 
                isOpen={isQuoteModalOpen} 
                onClose={() => setIsQuoteModalOpen(false)} 
            />
        </div>
    );
}
