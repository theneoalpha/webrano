import Image from "next/image";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

interface Project {
  _id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  if (!projects?.length) return null;

  return (
    <Section id="projects" spacing="lg">
      <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
        <div className="space-y-6">
          <div className="text-primary font-black uppercase tracking-[0.2em] text-sm">Portfolio</div>
          <h2 className="text-4xl font-black tracking-tighter sm:text-7xl leading-[0.9]">
            Recent <span className="gradient-text">Masterpieces</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl text-balance font-medium opacity-80">
            A selection of our most impactful collaborations and transformative healthcare spaces.
          </p>
        </div>
        <Button variant="outline" size="lg" className="rounded-full px-10">
          View All Projects
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <div 
            key={project._id} 
            className={`group relative overflow-hidden rounded-[2.5rem] bg-muted transition-all duration-700 hover:shadow-3xl hover:shadow-primary/10 ${
              i === 1 ? 'md:translate-y-10' : ''
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            </div>
            
            <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary-foreground text-[10px] font-black uppercase tracking-widest border border-white/10">
                  {project.category}
                </span>
                <h3 className="text-white text-3xl font-black leading-tight tracking-tighter italic">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm line-clamp-2 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {project.description}
                </p>
                {project.link && (
                  <div className="pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-white font-black text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors"
                    >
                      Case Study <span>→</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
