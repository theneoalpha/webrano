import { fetchHomePageData } from "./api";
import { AboutSection } from "./components/about-section";
import { ContactCtaSection } from "./components/contact-cta-section";
import { HeroSection } from "./components/hero-section";
import { MobileShowcaseSection } from "./components/mobile-showcase-section";
import { ProjectsSection } from "./components/projects-section";
import { ServicesSection } from "./components/services-section";
import { TeamSection } from "./components/team-section";
import { TestimonialsSection } from "./components/testimonials-section";

export default async function Home() {
  const data = await fetchHomePageData();
  const secondaryCtaHref = data.projects.length ? "#projects" : "/case-studies";

  return (
    <main className="overflow-x-hidden">
      <HeroSection
        {...data.hero}
        secondaryCtaText={data.homePage.projectsButtonText}
        secondaryCtaHref={secondaryCtaHref}
        brandMark={data.siteSettings.brandMark}
        booking={data.siteSettings.booking}
      />
      <ServicesSection content={data.homePage} services={data.services} />
      <AboutSection {...data.about} />
      <MobileShowcaseSection content={data.homePage} />
      <TeamSection team={data.team} content={data.homePage} />
      {data.projects.length ? <ProjectsSection projects={data.projects} content={data.homePage} /> : null}
      {data.testimonials.length ? (
        <TestimonialsSection testimonials={data.testimonials} content={data.homePage} />
      ) : null}
      <ContactCtaSection cta={data.cta} siteSettings={data.siteSettings} />
    </main>
  );
}
