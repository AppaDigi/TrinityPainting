import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export interface TestimonialAuthor {
    name: string;
    handle: string; // e.g., "Mora, MN"
    avatar: string;
}

export interface TestimonialCardProps {
    author: TestimonialAuthor;
    text: string;
    href?: string;
    className?: string;
}

function TestimonialCard({
    author,
    text,
    href,
    className
}: TestimonialCardProps) {
    const Wrapper = href ? 'a' : 'div';

    return (
        <Wrapper
            {...(href ? { href } : {})}
            className={cn(
                "flex flex-col justify-between rounded-[2rem]",
                "bg-white/5 backdrop-blur-md border border-white/10",
                "p-10 text-start",
                "hover:bg-white/10 hover:border-gold/30 hover:scale-[1.02]",
                "w-[450px] shrink-0 h-[320px]",
                "transition-all duration-500 ease-out",
                className
            )}
        >
            <div className="flex flex-col gap-6">
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gold fill-gold" />
                    ))}
                </div>
                <p className="text-xl text-gray-200 font-serif leading-relaxed italic line-clamp-4">
                    "{text}"
                </p>
            </div>

            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
                <div className="h-12 w-12 rounded-full overflow-hidden border border-white/20 ring-2 ring-gold/20">
                    <img src={author.avatar} alt={author.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col items-start">
                    <p className="font-sans font-bold text-white text-base leading-snug tracking-normal">
                        {author.name}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-wider text-gold/80">
                        {author.handle}
                    </p>
                </div>
            </div>
        </Wrapper>
    );
}

interface TestimonialsSectionProps {
    title: string;
    description: string;
    testimonials: Array<{
        author: TestimonialAuthor;
        text: string;
        href?: string;
    }>;
    className?: string;
}

export function TestimonialsSection({
    title,
    description,
    testimonials,
    className
}: TestimonialsSectionProps) {
    return (
        <section className={cn("py-32 bg-primary relative overflow-hidden", className)} id="reviews">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-wide mb-20 relative z-10 flex flex-col md:flex-row items-end justify-between gap-10">
                <div className="max-w-2xl">
                    <span className="text-gold font-bold text-xs uppercase tracking-[0.25em] mb-6 block">Client Stories</span>
                    <h2 className="text-5xl md:text-6xl font-serif text-white">
                        {title}
                    </h2>
                </div>
                <p className="text-lg text-gray-400 max-w-md font-light leading-relaxed mb-2">
                    {description}
                </p>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <div className="flex w-full overflow-hidden">
                    <div className="flex shrink-0 gap-8 animate-marquee flex-row hover:[animation-play-state:paused] py-4 pl-4">
                        {[...Array(4)].map((_, setIndex) => (
                            testimonials.map((testimonial, i) => (
                                <TestimonialCard
                                    key={`${setIndex}-${i}`}
                                    {...testimonial}
                                />
                            ))
                        ))}
                    </div>
                </div>

                {/* Fade Masks */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-20" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-20" />
            </div>
        </section>
    );
}
