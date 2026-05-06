"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Section } from "@/components/section";

const features = [
  {
    title: "High-Speed Portfolios",
    description: "Ultra-fast, mobile-optimized showcase websites designed specifically for interior designers and architects.",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Smart Booking Systems",
    description: "Seamless appointment scheduling for salons and clinics that works directly from your customer's mobile device.",
    image: "https://images.pexels.com/photos/3993311/pexels-photo-3993311.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Local SEO Domination",
    description: "Built-in technical SEO that helps local shops and restaurants appear at the top of Google search results.",
    image: "https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function MobileShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <Section ref={containerRef} spacing="none" className="relative bg-[#05020a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Side: Scrolling Content */}
          <div className="w-full lg:w-1/2 py-[30vh] space-y-[60vh]">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.1, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-30% 0% -30% 0%" }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="text-primary font-black uppercase tracking-[0.4em] text-[10px]">
                  Feature 0{i + 1}
                </div>
                <h3 className="text-5xl lg:text-8xl font-black tracking-tighter leading-[0.85] font-display">
                  {feature.title.split(' ').map((word, idx) => (
                    <span key={idx} className={idx === feature.title.split(' ').length - 1 ? "gradient-text block" : "block"}>
                      {word}
                    </span>
                  ))}
                </h3>
                <p className="text-lg text-muted-foreground font-medium max-w-md leading-relaxed opacity-60">
                  {feature.description}
                </p>
              </motion.div>
            ))}
            {/* Spacer to allow final feature to be read */}
            <div className="h-[20vh]" />
          </div>

          {/* Right Side: Sticky Mobile Frame */}
          <div className="hidden lg:block w-1/2">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <motion.div 
                style={{ 
                  scale: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]),
                  rotateY: useTransform(scrollYProgress, [0, 1], [5, -5])
                }}
                className="relative w-[340px] h-[680px] bg-[#0a0a0b] rounded-[4rem] border-[14px] border-[#1a1a1b] shadow-[0_50px_100px_rgba(0,0,0,0.8),0_0_50px_rgba(124,58,237,0.1)] overflow-hidden"
              >
                {/* Dynamic Screen Content */}
                <div className="absolute inset-0">
                  {features.map((feature, i) => {
                    // Correctly calculated ranges that stay between 0 and 1
                    const start = i / features.length;
                    const end = (i + 1) / features.length;
                    const middle = (start + end) / 2;

                    return (
                      <motion.div
                        key={i}
                        className="absolute inset-0"
                        style={{
                          opacity: useTransform(
                            scrollYProgress,
                            [Math.max(0, start - 0.1), middle, Math.min(1, end + 0.1)],
                            [0, 1, 0]
                          ),
                          scale: useTransform(
                            scrollYProgress,
                            [Math.max(0, start - 0.1), middle, Math.min(1, end + 0.1)],
                            [1.1, 1, 0.9]
                          )
                        }}
                      >
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent opacity-60" />
                      </motion.div>
                    );
                  })}
                </div>

                {/* iPhone Details */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-[#1a1a1b] rounded-b-[2rem] z-50 flex items-center justify-center">
                  <div className="w-12 h-1 bg-white/10 rounded-full" />
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-50" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
