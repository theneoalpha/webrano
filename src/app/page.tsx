"use client";

import Image from "next/image";
import { Hero } from "@/sections/hero";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/section";
import { Projects } from "@/sections/projects";
import { Testimonials } from "@/sections/testimonials";
import { MobileShowcase } from "@/sections/mobile-showcase";
import { Team } from "@/sections/team";
import { getServices, getProjects, getTestimonials, getHero, getAbout, getCta, getTeam } from "@/sanity/queries";
import { fallbackServices, fallbackProjects, fallbackTestimonials } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [hero, about, cta, services, projects, testimonials, team] = await Promise.all([
          getHero(), getAbout(), getCta(), getServices(), getProjects(), getTestimonials(), getTeam()
        ]);
        setData({ hero, about, cta, services, projects, testimonials, team });
      } catch (error) {
        console.error("Sanity fetch failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  // Fallback Logic
  const displayHero = data?.hero || {
    title: "Modern Digital Presence for Local Business",
    subtitle: "We build ultra-fast, mobile-friendly websites that help local shops, clinics, and designers stand out in the digital age.",
    ctaText: "Build Your Website",
    image: "https://images.pexels.com/photos/14553704/pexels-photo-14553704.jpeg?_gl=1*93do56*_ga*MTg1NjQ1MjI3OS4xNzc4MDY0MjEz*_ga_8JE65Q40S6*czE3NzgwNjQyMTMkbzEkZzEkdDE3NzgwNjQ2MjgkajQ5JGwwJGgw",
    badge: "Launching Webrano"
  };

  const displayAbout = data?.about || {
    title: "Modern Solutions, Focused Expertise",
    content: "Webrano is built on a foundation of high-level software engineering. We bring the speed and personal touch of a startup combined with the technical depth of specialized developers to every project we undertake.",
    image: "https://images.pexels.com/photos/9553909/pexels-photo-9553909.jpeg?_gl=1*158xzy7*_ga*MTg1NjQ1MjI3OS4xNzc4MDY0MjEz*_ga_8JE65Q40S6*czE3NzgwNjQyMTMkbzEkZzEkdDE3NzgwNjQ0ODkkajQ4JGwwJGgw",
    features: ["Specialized Dev", "Mobile-First Design", "Rapid Delivery", "Direct Access"]
  };

  const displayCta = data?.cta || {
    title: "Ready to prioritize your online presence?",
    subtitle: "Join the local businesses who trust Webrano to build their premium digital storefronts.",
    primaryCtaText: "Book Appointment Now",
    secondaryCtaText: `Call ${siteConfig.contact.phone}`
  };

  const displayServices = data?.services?.length ? data.services : fallbackServices;
  const displayProjects = data?.projects?.length ? data.projects : fallbackProjects;
  const displayTestimonials = data?.testimonials?.length ? data.testimonials : fallbackTestimonials;
  const displayTeam = data?.team || [];

  // Scroll Animations for "About"
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  const aboutY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const aboutScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const smoothAboutScale = useSpring(aboutScale, { damping: 20 });

  return (
    <main className="overflow-x-hidden">
      <Hero
        title={displayHero.title}
        subtitle={displayHero.subtitle}
        ctaText={displayHero.ctaText}
        image={displayHero.image}
        badge={displayHero.badge}
      />

      <Section id="services" spacing="lg" className="relative z-10">
        <div className="text-center space-y-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-black uppercase tracking-[0.3em] text-[10px]"
          >
            Specialties
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl text-balance leading-none font-display"
          >
            Our <span className="gradient-text">Premium</span> Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto text-balance font-medium leading-relaxed"
          >
            Providing world-class care with a focus on patient experience and modern medical technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {displayServices.map((service: any, i: number) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-12 rounded-[3.5rem] bg-card border border-border/40 hover:border-primary/20 transition-all duration-700 hover:-translate-y-4 premium-shadow"
            >
              <div className={`w-20 h-20 ${service.color || 'bg-primary/5 text-primary'} rounded-[2rem] flex items-center justify-center mb-10 text-4xl transition-transform duration-700 group-hover:rotate-12`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-6 tracking-tight font-display">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm opacity-70 mb-8 max-w-[280px]">
                {service.description}
              </p>
              <Button variant="outline" className="rounded-full px-6 text-[10px] group/btn">
                Details <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="about" spacing="none" className="relative py-48 bg-secondary/5 overflow-visible">
        <div ref={aboutRef} className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Experience</div>
              <h2 className="text-5xl font-black tracking-tight sm:text-8xl leading-[0.9] font-display">{displayAbout.title}</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium max-w-lg">
                {displayAbout.content}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {displayAbout.features?.map((item: string, i: number) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-3xl glass border-white/5 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black shrink-0 text-xs">
                    ✓
                  </div>
                  <span className="font-bold text-sm tracking-tight">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            style={{ scale: smoothAboutScale, y: aboutY }}
            className="relative group"
          >
            <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] opacity-50" />
            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
              <Image
                src={displayAbout.image}
                alt={displayAbout.title}
                fill
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 mix-blend-overlay" />
            </div>
            {/* Apple-style floating text */}
            <div className="absolute -bottom-10 -left-10 glass p-10 rounded-[2.5rem] shadow-3xl">
              <div className="text-5xl font-black gradient-text">Top Tier</div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Quality Innovation</div>
            </div>
          </motion.div>
        </div>
      </Section>

      <MobileShowcase />
      <Team team={displayTeam} />

      <Projects projects={displayProjects} />

      <Testimonials testimonials={displayTestimonials} />

      <Section id="contact" spacing="lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[5rem] bg-foreground px-10 py-32 md:px-32 text-center text-background relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />

          <div className="relative z-10 space-y-12">
            <h2 className="text-5xl font-black tracking-tighter sm:text-8xl lg:text-9xl leading-[0.8] text-balance font-display">{displayCta.title}</h2>
            <p className="text-base md:text-lg opacity-60 max-w-xl mx-auto mb-12 text-balance font-medium leading-relaxed">
              {displayCta.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-16 py-8 text-lg shadow-2xl">
                {displayCta.primaryCtaText}
              </Button>
              {displayCta.secondaryCtaText && (
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-16 py-8 text-lg backdrop-blur-md">
                  {displayCta.secondaryCtaText}
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </Section>
    </main>
  );
}
