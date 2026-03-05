import { CheckCircle2, ShieldCheck, Flag, Cross, Users, Banknote, Shield } from "lucide-react";

export function CoreIdentity() {
    return (
        <section className="py-[var(--section-spacing)] bg-[#0a0a0a] relative border-t border-black/10 overflow-hidden" id="identity">
            <div className="container-wide">

                {/* Section 1: The Trinity Identity & Professional Standards */}
                <div className="mb-24">
                    <span className="text-gold font-bold text-xs uppercase tracking-[0.25em] mb-4 block">Our Foundation</span>
                    <h2 className="text-white mb-12">The Trinity Identity & <br /><span className="italic text-gold-dark">Professional Standards</span></h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Verified Minnesota Labor",
                                desc: "We are 100% locally owned and operated. Our crew consists entirely of Verified Minnesota Labor—we hire only legal American citizens. No illegal or foreign labor. We are neighbors serving neighbors, ensuring your investment stays in our local Minnesota economy.",
                                icon: Users
                            },
                            {
                                title: "Sherwin-Williams Exclusively",
                                desc: "We only use American-made Sherwin-Williams coatings. It's the highest standard for our climate and supports the American worker from the paint can to the job site.",
                                icon: ShieldCheck
                            },
                            {
                                title: "Project Over Profit",
                                desc: "Our mission is the quality of your home. If a job isn't right, we fix it—prioritizing craftsmanship over our bottom line.",
                                icon: Shield
                            },
                            {
                                title: "Colossians 3:23 Work Ethic",
                                desc: "We work \"for the Lord, not for men.\" This results in a level of detail and care that corporate crews simply cannot match.",
                                icon: Cross // replace with standard icon if Cross doesn't exist, lucide has 'Cross'
                            },
                            {
                                title: "Christian Pricing & Direct Communication",
                                desc: "We provide honest, transparent estimates rooted in biblical stewardship. No hidden fees, no &quot;salesman&quot; tactics, and zero &quot;woke&quot; corporate fluff or jargon.",
                                icon: Banknote
                            },
                            {
                                title: "Owner's American Fleet",
                                desc: "I lead by example, arriving at every estimate and job site in American-built Ford trucks.",
                                icon: Flag
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:border-gold/30 transition-colors">
                                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 2 & 3: Discounts & National Identity */}
                <div className="grid lg:grid-cols-2 gap-16 mb-24">
                    <div className="bg-primary text-white p-10 rounded-[3rem] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                        <span className="text-gold font-bold text-xs uppercase tracking-[0.25em] mb-4 block relative z-10">Savings</span>
                        <h3 className="text-3xl font-serif mb-8 relative z-10">Hero & Heritage Discounts</h3>
                        <div className="space-y-6 relative z-10">
                            <div>
                                <h4 className="font-bold text-gold text-lg flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Homeschooling Families</h4>
                                <p className="text-gray-400 mt-2 text-sm leading-relaxed">A specific discount to support those raising and educating the next generation at home.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gold text-lg flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> First Responders & Military</h4>
                                <p className="text-gray-400 mt-2 text-sm leading-relaxed">Dedicated &quot;Thank You&quot; savings for the Police, Fire, EMS, and Veterans who protect our Minnesota streets and our nation.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="text-gold font-bold text-xs uppercase tracking-[0.25em] mb-4 block">Our Values</span>
                        <h3 className="text-3xl font-serif text-white mb-8">National Identity & <br />Pro-Christian Politics</h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="font-bold text-white text-lg">Christian Nationalism & Pro-Christian Politics</h4>
                                <p className="text-gray-400 mt-2 text-sm leading-relaxed">We believe America is a nation under God. We lead with faith in the public square and believe our laws and local leadership should reflect Christian moral standards.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">Abolitionist & Pro-Life</h4>
                                <p className="text-gray-400 mt-2 text-sm leading-relaxed">We are unapologetically pro-life and stand for the total abolition of abortion as a core company pillar.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">Pro-ICE, Police, & Military</h4>
                                <p className="text-gray-400 mt-2 text-sm leading-relaxed">We stand for the rule of law. We support the enforcement of our borders, the mission of ICE, and we stand &quot;Pro-Blue&quot; with our law enforcement and military without apology.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4, 5 & 6 */}
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
                        <span className="text-gold font-bold text-xs uppercase tracking-[0.25em] mb-4 block">Community</span>
                        <h3 className="text-2xl font-serif text-primary mb-4">The Christian Trade Network</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            <strong>Business within the Faith:</strong> We are part of a deep network of Christian tradesmen. From plumbers to electricians, we can connect you with contractors who share our values and commitment to excellence. The Body of Christ working together to serve our community.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
                        <span className="text-gold font-bold text-xs uppercase tracking-[0.25em] mb-4 block">Policy</span>
                        <h3 className="text-2xl font-serif text-primary mb-4">The Sabbath Rest Policy</h3>
                        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                            <p className="italic font-serif text-primary">&quot;Honored Rest. Monday Excellence.&quot;</p>
                            <p>At Trinity Painting & Renewal, we believe that faithful labor requires faithful rest. We do not work on Sundays—period. We protect the Sabbath for worship, rest, and time with our families.</p>
                            <ul className="list-disc pl-4 space-y-2">
                                <li><strong>The Sabbath Mandate:</strong> &quot;Six days you shall labor...&quot; — Exodus 20:9.</li>
                                <li><strong>The Monday Promise:</strong> We rest on Sunday so we can outwork everyone else on Monday.</li>
                                <li><strong>A Refreshed Crew:</strong> Our boundaries ensure your project is handled by men who are physically and spiritually ready to work.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
                        <span className="text-gold font-bold text-xs uppercase tracking-[0.25em] mb-4 block">Pricing</span>
                        <h3 className="text-2xl font-serif text-primary mb-4">Stewardship Pricing Model</h3>
                        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                            <p>We are implementing a Good / Better / Best pricing model for both residential and commercial projects, providing clear options for your investment:</p>
                            <ul className="list-disc pl-4 space-y-2">
                                <li><strong>Good:</strong> SuperPaint / Latitude</li>
                                <li><strong>Better:</strong> Duration</li>
                                <li><strong>Best:</strong> Emerald / Rain Refresh</li>
                            </ul>
                            <p className="italic text-primary/80 mt-4 border-l-2 border-gold pl-4">
                                The Standard: We do not offer anything below these three tiers. We believe in protecting the homeowner&apos;s asset; using sub-par, &quot;contractor-grade&quot; materials is a disservice to the property. Applying anything worse would be shameful.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
