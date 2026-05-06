import { groq } from "next-sanity";
import { client } from "./client";

// Queries
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;

export const heroQuery = groq`*[_type == "hero"][0] {
  title,
  subtitle,
  ctaText,
  badge,
  "image": image.asset->url
}`;

export const aboutQuery = groq`*[_type == "about"][0] {
  title,
  content,
  features,
  "image": image.asset->url
}`;

export const ctaQuery = groq`*[_type == "cta"][0] {
  title,
  subtitle,
  primaryCtaText,
  secondaryCtaText
}`;

export const servicesQuery = groq`*[_type == "service"] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  description,
  icon,
  "image": image.asset->url
}`;

export const projectsQuery = groq`*[_type == "project"] | order(completedDate desc) {
  _id,
  title,
  category,
  "image": image.asset->url,
  description,
  link,
  completedDate
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"] {
  _id,
  name,
  role,
  content,
  "image": image.asset->url,
  rating
}`;

export const teamQuery = groq`*[_type == "team"] | order(order asc) {
  _id,
  name,
  role,
  bio,
  "image": image.asset->url,
  skills
}`;

// Fetch Helpers
export async function getSiteSettings() {
  return client.fetch(siteSettingsQuery);
}

export async function getHero() {
  return client.fetch(heroQuery);
}

export async function getAbout() {
  return client.fetch(aboutQuery);
}

export async function getCta() {
  return client.fetch(ctaQuery);
}

export async function getServices() {
  return client.fetch(servicesQuery);
}

export async function getProjects() {
  return client.fetch(projectsQuery);
}

export async function getTestimonials() {
  return client.fetch(testimonialsQuery);
}

export async function getTeam() {
  return client.fetch(teamQuery);
}
