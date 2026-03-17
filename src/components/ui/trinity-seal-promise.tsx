"use client";

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { ShieldCheck, Cross, Sparkles, ArrowRight, Shield, Award } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const promises = [
  {
    title: "God-Honoring craftsmanship",
    description: "Every brushstroke is an act of worship. We bring a level of care and precision that honors our Creator and your home.",
    icon: Sparkles,
    color: "from-gold-dark to-gold",
    detail: "Colossians 3:23 Standard"
  },
  {
    title: "Your project over our profits",
    description: "We prioritize your vision and the integrity of your home above all else. If it's not right for you, it's not right for us.",
    icon: Shield,
    color: "from-gold to-gold-light",
    detail: "Biblical Stewardship"
  },
  {
    title: "We aren’t done until the Lord is proud of it",
    description: "Our standard isn't just client satisfaction—it's divine excellence. We work until the result reflects our highest values.",
    icon: Cross,
    color: "from-gold-light to-white",
    detail: "Uncompromising Finish"
  },
];

function TrinitySealIcon({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <motion.svg 
        viewBox="0 0 100 100" 
        className="w-full h-full text-gold"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <path
          id="sealTextPath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text className="text-[8px] font-bold uppercase tracking-[0.2em] fill-current">
          <textPath xlinkHref="#sealTextPath">
            ✦ Trinity Painting ✦ Seal of Excellence ✦ Promise of Quality ✦
          </textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <ShieldCheck className="h-1/2 w-1/2 text-gold animate-pulse" strokeWidth={1} />
      </div>
    </div>
  );
}

export function TrinitySealPromise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Mouse Glow Effect for cards
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  return (
    <section 
      ref={containerRef}
      className="py-[var(--section-spacing)] bg-[#050505] relative overflow-hidden border-y border-white/5"
    >
      {/* Dynamic Background with Parallax Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full" 
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full" 
        />
        <div 
          className="absolute inset-0 opacity-5 mix-blend-overlay" 
          style={{ backgroundImage: "url('/noise.svg')" }}
        />
      </div>
      
      {/* Decorative Rotating Seal (Desktop) */}
      <motion.div 
        style={{ rotate, opacity, scale }}
        className="absolute -right-48 top-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/10 rounded-full pointer-events-none hidden xl:flex items-center justify-center"
      >
        <div className="w-[700px] h-[700px] border border-gold/5 rounded-full flex items-center justify-center" />
      </motion.div>

      <div className="container-wide relative z-10">
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-12"
          >
            <TrinitySealIcon className="h-32 w-32" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-bold text-xs uppercase tracking-[0.5em] mb-6 block">The Trinity Covenant</span>
            <h2 className="text-white max-w-4xl mx-auto text-fluid-h2 leading-none">
              A Branding <span className="italic font-light text-gold-dark">Roots in Faith,</span> <br />
              <span className="text-white">Sealed with Excellence</span>
            </h2>
            <div className="h-1 w-24 bg-gold mx-auto mt-10 rounded-full" />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {promises.map((promise, index) => {
            // Create a staggered parallax effect for each card
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const cardY = useTransform(
              scrollYProgress, 
              [0, 1], 
              [0, index % 2 === 0 ? -40 : 40]
            );

            return (
              <motion.div
                key={index}
                style={{ y: cardY }}
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 1, 
                  ease: [0.23, 1, 0.32, 1] 
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group h-full"
              >
                {/* Mouse Hover Glow Effect */}
                <motion.div
                  className="pointer-events-none absolute -inset-px rounded-[4rem] opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{
                    background: useMotionTemplate`
                      radial-gradient(
                        600px circle at ${mouseX}px ${mouseY}px,
                        var(--color-brand-gold) 0%,
                        transparent 40%
                      )
                    `,
                  }}
                />

                <div className="h-full bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-3xl border border-white/10 p-10 sm:p-14 rounded-[4rem] flex flex-col items-center text-center transition-all duration-700 hover:bg-white/[0.02] hover:shadow-[0_40px_100px_-20px_rgba(198,168,124,0.15)] group overflow-hidden relative z-10">
                  
                  {/* Promise Number */}
                  <div className="absolute top-8 left-10 text-gold/20 font-serif text-5xl italic pointer-events-none select-none group-hover:scale-110 group-hover:text-gold/40 transition-all duration-700">
                    0{index + 1}
                  </div>

                  {/* Animated Icon Container */}
                  <div className="relative mb-12">
                    <div className={`absolute inset-0 bg-gold/20 blur-2xl rounded-full transition-all duration-700 ${hoveredIndex === index ? 'scale-150 opacity-40' : 'scale-0 opacity-0'}`} />
                    <div className={`h-24 w-24 rounded-[2rem] bg-gradient-to-br ${promise.color} flex items-center justify-center text-primary shadow-2xl relative z-10 transition-all duration-700 group-hover:rotate-[15deg] group-hover:scale-110`}>
                      <promise.icon className="h-10 w-10" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6 leading-tight transition-colors duration-500 group-hover:text-gold capitalize px-4">
                    {promise.title}
                  </h3>

                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60 mb-8 py-1 px-4 border border-gold/20 rounded-full group-hover:border-gold/50 group-hover:text-gold transition-colors duration-500">
                    {promise.detail}
                  </div>
                  
                  <p className="text-white/40 text-lg font-light leading-relaxed mb-auto group-hover:text-white/70 transition-colors duration-500">
                    {promise.description}
                  </p>

                  {/* Decorative Seal Mark */}
                  <div className="mt-12 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 relative z-20">
                    <Award className="h-8 w-8 text-gold mt-auto" strokeWidth={1} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-32 text-center"
        >
          <Link href="/about" className="group relative inline-block">
            <div className="relative z-10 flex items-center gap-8 px-16 py-8 rounded-full bg-white text-primary font-black text-xs uppercase tracking-[0.4em] transition-all duration-500 group-hover:px-20 group-hover:bg-gold shadow-2xl shadow-gold/20 group-hover:shadow-gold/40">
              Explore Our Values
              <div className="relative w-6 h-6 overflow-hidden">
                <ArrowRight className="h-6 w-6 absolute top-0 left-0 transition-transform duration-500 group-hover:translate-x-full" />
                <ArrowRight className="h-6 w-6 absolute top-0 -left-full transition-transform duration-500 group-hover:translate-x-full text-white" />
              </div>
            </div>
            
            {/* Outer Ring Animation */}
            <div className="absolute inset-0 rounded-full border border-gold/50 scale-110 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 rounded-full border border-gold/30 scale-125 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-100" />
          </Link>
        </motion.div>
      </div>

      {/* Background Section Mask */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent" />
    </section>
  );
}
