"use client";

import React from "react";
import { Shield, Award, MapPin, Clock } from "lucide-react";

const TrustBar = () => {
    const items = [
        { icon: Shield, text: "Licensed & Insured" },
        { icon: Award, text: "15+ Years Experience" },
        { icon: MapPin, text: "Serving East Central MN" },
        { icon: Clock, text: "On-Time Guarantee" },
    ];

    return (
        <div className="bg-gray-50 border-t border-b border-gray-200 py-8">
            <div className="container">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center space-x-3 group cursor-pointer"
                        >
                            <div className="p-2 bg-gold/10 border border-gold/30 group-hover:bg-gold/20 transition-colors">
                                <item.icon className="text-gold" size={20} />
                            </div>
                            <span className="font-semibold text-sm text-primary group-hover-text-gold transition-colors uppercase tracking-wide">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
