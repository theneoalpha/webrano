import { env } from "@/config/env";

export const siteConfig = {
  name: "Webrano",
  description:
    "Growth-focused startup agency helping businesses with Instagram, Facebook ads, SEO, and modern websites.",
  url: env.site.url,
  ogImage: `${env.site.url}/og.jpg`,
  links: {
    instagram: env.site.instagramUrl,
    facebook: env.site.facebookUrl,
    linkedin: env.site.linkedinUrl,
  },
  contact: {
    email: env.site.contactEmail,
    phone: env.site.contactPhone,
    address: env.site.address,
  },
  navigation: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Showcase", href: "#showcase" },
    { label: "Why Us", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  footer: {
    tagline: "Helping businesses build visibility, trust, and momentum online.",
    copyright: "All rights reserved.",
  },
};
