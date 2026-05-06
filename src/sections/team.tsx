"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/section";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  skills?: string[];
}

interface TeamProps {
  team: TeamMember[];
}

export function Team({ team }: TeamProps) {

  const displayTeam = team?.length ? team : [
    {
      _id: "founder",
      name: "Nitin Sannat",
      role: "Founder & Lead Developer",
      bio: "After 2 years of building scalable systems at a top-tier software company, I founded Webrano to provide high-end development quality to local businesses at an affordable price point.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      skills: ["Full-Stack Dev", "Cloud Architect", "UI Design"]
    }
  ];

  return (
    <Section id="team" spacing="lg">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">The Human Core</div>
            <h2 className="text-5xl font-black tracking-tighter sm:text-7xl leading-[0.9] font-display">
              Corporate Tech <span className="gradient-text">Local</span> Impact
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-medium max-w-md">
              We leverage our experience from established software firms to build production-grade websites for local brands. No fluff, just high-performance code that works.
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-10 rounded-[3rem] glass border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
              <p className="text-base italic font-medium opacity-80 mb-6 leading-relaxed">
                "Our mission is simple: bringing the same level of engineering excellence we used at top software companies to local businesses, but without the high-agency overhead."
              </p>
              <div className="font-black text-lg text-primary">— Founder's Vision</div>
            </div>
          </div>
        </div>

        <div className="grid gap-10">
          {displayTeam.map((member) => (
            <motion.div
              key={member._id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-10 rounded-[4rem] glass-premium overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                {member.image && (
                  <div className="relative w-40 h-40 rounded-[2.5rem] overflow-hidden shrink-0 shadow-2xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="space-y-4 text-center md:text-left flex-1">
                  <h3 className="text-2xl font-black tracking-tight font-display">{member.name}</h3>
                  <div className="text-primary font-bold uppercase tracking-widest text-[10px]">{member.role}</div>
                  <p className="text-muted-foreground font-medium leading-relaxed text-sm opacity-80">
                    {member.bio}
                  </p>
                  {member.skills && (
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-4">
                      {member.skills.map(skill => (
                        <span key={skill} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
