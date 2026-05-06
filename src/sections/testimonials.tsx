import Image from "next/image";
import { Section } from "@/components/section";

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  if (!testimonials?.length) return null;

  return (
    <Section id="testimonials" spacing="lg" className="bg-muted/30 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="text-center space-y-6 mb-20">
        <div className="text-primary font-black uppercase tracking-[0.2em] text-sm">Testimonials</div>
        <h2 className="text-4xl font-black tracking-tight sm:text-6xl text-balance">
          The <span className="gradient-text">Human</span> Experience
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance font-medium opacity-80">
          Join the community of patients and partners who have experienced our transformative care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial._id} 
            className="group p-10 rounded-[3rem] bg-background/50 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-8 right-10 text-8xl font-black text-primary/5 leading-none select-none">
              "
            </div>

            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-xl ${i < testimonial.rating ? "text-accent" : "text-muted"} transition-colors group-hover:scale-110 duration-300`} style={{ transitionDelay: `${i * 50}ms` }}>
                  ★
                </span>
              ))}
            </div>

            <blockquote className="text-xl italic font-medium text-muted-foreground mb-10 flex-1 leading-relaxed relative z-10">
              "{testimonial.content}"
            </blockquote>

            <div className="flex items-center gap-5 pt-8 border-t border-border/50">
              {testimonial.image ? (
                <div className="relative h-16 w-16 flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-accent rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover relative z-10 p-[2px]"
                  />
                </div>
              ) : (
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xl flex-shrink-0 border-2 border-primary/20">
                  {testimonial.name[0]}
                </div>
              )}
              <div>
                <div className="font-black text-lg tracking-tight">{testimonial.name}</div>
                <div className="text-sm font-bold text-primary uppercase tracking-widest">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
