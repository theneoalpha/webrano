"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { BookingModal } from "@/components/booking-modal";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  image?: string;
  badge?: string;
}

export function Hero({ title, subtitle, ctaText, image, badge }: HeroProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -2]);

  return (
    <Section ref={containerRef} spacing="none" className="relative min-h-[120vh] flex flex-col items-center pt-32 overflow-visible">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      {/* Fixed/Sticky Text Content */}
      <motion.div 
        style={{ opacity, scale, y: "-10%" }}
        className="sticky top-48 z-20 text-center space-y-10 px-6 max-w-5xl"
      >
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/10 text-sm font-bold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {badge}
          </div>
        )}
        
        <h1 className="text-6xl font-black tracking-tighter sm:text-8xl lg:text-[10rem] leading-[0.8] text-balance font-display">
          {title.split(' ').map((word, i) => (
            <span key={i} className={i === title.split(' ').length - 1 ? "gradient-text inline-block" : "inline-block mr-4"}>
              {word}
            </span>
          ))}
        </h1>

        <p className="text-xl text-muted-foreground md:text-2xl leading-relaxed max-w-2xl mx-auto text-balance font-medium opacity-70">
          {subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <Button 
            onClick={() => setIsBookingOpen(true)}
            size="lg" 
            className="rounded-full px-12 py-10 text-xl shadow-2xl shadow-primary/20"
          >
            {ctaText}
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-12 py-10 text-xl glass">
            Our Work
          </Button>
        </div>
      </motion.div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Scaling Sticky Image Section (Apple-style) */}
      {image && (
        <div className="relative w-full max-w-[1400px] mt-24 px-6 perspective-1000">
          <motion.div 
            style={{ scale, rotateX: rotate }}
            className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[3rem] shadow-3xl bg-muted border border-white/20 overflow-hidden"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
            
            {/* Inner Floating Element */}
            <motion.div 
              style={{ y }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass p-10 rounded-[2.5rem] hidden md:block text-center border-white/40"
            >
              <div className="text-4xl font-black mb-2 font-display">2026 Ready</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 text-primary">Experience Excellence</div>
            </motion.div>
          </motion.div>
          
          {/* Subtle Glow beneath image */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-primary/20 blur-[100px] -z-10 rounded-full" />
        </div>
      )}
    </Section>
  );
}
