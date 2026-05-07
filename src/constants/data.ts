import { env } from "@/config/env";

export const fallbackSiteSettings = {
  brandName: "Webrano",
  brandMark: "W",
  description:
    "Growth-focused startup agency for founders who need Instagram management, Facebook ads, SEO, and conversion-ready websites in one place.",
  siteUrl: env.site.url,
  footerTagline:
    "We help early-stage startups look credible, get discovered, and turn attention into leads.",
  contactEmail: env.site.contactEmail,
  contactPhone: env.site.contactPhone,
  address: env.site.address,
  navigation: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Showcase", href: "#showcase" },
    { label: "Why Us", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { label: "Instagram", href: env.site.instagramUrl },
    { label: "Facebook", href: env.site.facebookUrl },
    { label: "LinkedIn", href: env.site.linkedinUrl },
  ],
  booking: {
    visualTitle: "Let’s launch your next growth move.",
    visualAccent: "Fast strategy, clean execution.",
    visualImage:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    highlights: [
      "Instagram content systems for startup visibility",
      "Facebook ads tuned for lead generation",
      "SEO and websites built to convert early traffic",
    ],
    formTitle: "Start Your Growth Brief",
    formDescription:
      "Share what stage your startup is in and what you want help with. We’ll come back with a practical plan.",
    submitText: "Request Growth Plan",
    successTitle: "Brief Received",
    successDescription:
      "We’ve received your details and will reply with the next steps shortly.",
    businessOptions: [
      "Startup Founder",
      "SaaS Startup",
      "D2C Brand",
      "Local Startup",
      "Agency Partner",
    ],
  },
};

export const fallbackHomePage = {
  servicesEyebrow: "What We Do",
  servicesTitle: "Simple services to help your business grow online.",
  servicesDescription:
    "We are a small startup team, so we keep the offer focused: better social presence, smarter ads, stronger websites, and practical SEO for businesses that want to grow.",
  showcaseEyebrow: "How We Help",
  showcaseTitle: "Built for attention, clicks, and conversion.",
  showcaseDescription:
    "Each service is designed to support the others, so your startup doesn’t end up with disconnected marketing and a weak website.",
  showcaseFeatures: [
    {
      title: "Instagram Page Management",
      description:
        "We plan content, design post systems, and keep your page active so your startup looks trusted from the first profile visit.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Facebook Ads That Find Buyers",
      description:
        "We create campaigns for reach, leads, and retargeting so your ad spend goes toward measurable startup growth instead of guesswork.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "SEO And Websites That Convert",
      description:
        "We combine landing-page clarity, technical SEO, and fast development so your startup can rank better and convert traffic into enquiries.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    },
  ],
  projectsEyebrow: "Selected Work",
  projectsTitle: "Work we’ll be proud to show next.",
  projectsDescription:
    "We would rather earn real case studies than fill the site with placeholder projects. When we have published work, it will be here.",
  projectsButtonText: "Future Case Studies",
  testimonialsEyebrow: "Trust First",
  testimonialsTitle: "No made-up praise, just clear execution.",
  testimonialsDescription:
    "We are building this the honest way. Instead of fake testimonials, we focus on strong delivery, clear communication, and long-term trust.",
  teamEyebrow: "Why Us",
  teamTitle: "A new team with a modern way of working.",
  teamDescription:
    "We are still early in our journey, and we are honest about that. What we bring is care, consistency, modern tools, and a serious approach to helping businesses build a better digital presence.",
  teamQuote:
    "We may be new, but we are focused on doing thoughtful work, communicating clearly, and helping businesses grow with the right digital foundation.",
  teamQuoteAuthor: "Our Approach",
};

export const fallbackHero = {
  title: "Digital support for growing businesses",
  subtitle: "We help businesses with Instagram, Facebook ads, SEO, and modern websites.",
  ctaText: "Book a Call",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1400",
  badge: "For early-stage startups",
};

export const fallbackAbout = {
  title: "We help small businesses build a better online presence.",
  content:
    "If your business needs a cleaner website, better social media presence, or a more practical marketing setup, we are here to help. We keep things simple, modern, and focused on helping you move forward one step at a time.",
  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
  features: [
    "Instagram strategy and execution",
    "Facebook ads for leads and retargeting",
    "SEO foundations for long-term growth",
    "Startup websites built to convert",
  ],
};

export const fallbackCta = {
  title: "Ready to give your business more room to grow?",
  subtitle:
    "Let’s work on a digital presence that looks current, feels clear, and gives your business a stronger base to grow from.",
  primaryCtaText: "Get a Custom Plan",
  secondaryCtaText: "Talk To Our Team",
};

export const fallbackServices = [
  {
    _id: "s1",
    title: "Instagram Management",
    slug: "instagram-management",
    description:
      "We help you keep your page active, clean, and consistent so your business feels more trustworthy when people discover you online.",
    color: "bg-pink-500/10 text-pink-400",
  },
  {
    _id: "s2",
    title: "Facebook Ads Management",
    slug: "facebook-ads-management",
    description:
      "We set up and manage practical ad campaigns focused on reach, leads, and steady improvement instead of random spending.",
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    _id: "s3",
    title: "SEO and Website Setup",
    slug: "seo-and-website-setup",
    description:
      "We build modern websites and improve search basics so your business is easier to find and easier to trust.",
    color: "bg-amber-500/10 text-amber-400",
  },
];

export const fallbackProjects = [];

export const fallbackTestimonials = [];

export const fallbackTeam = [
  {
    _id: "founder",
    name: "Webrano Team",
    role: "Social, Ads, SEO and Website Support",
    bio: "We are a young team focused on helping businesses improve how they show up online. Our goal is to give you cleaner execution, better consistency, and a digital presence that feels current.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400",
    skills: [
      "Modern Tools",
      "Clear Communication",
      "Paid Ads",
      "Web Development",
    ],
  },
];
