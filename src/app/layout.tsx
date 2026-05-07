import type { Metadata } from "next";
import { Inter_Tight, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getSiteSettings } from "@/sanity/queries";
import { fallbackSiteSettings } from "@/constants/data";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "Webrano | Expert Digital Development & Luxury Design",
  description:
    "Growth-focused startup agency helping early-stage businesses with Instagram page management, Facebook ads, SEO, and conversion-ready websites.",
  keywords: [
    "Instagram Marketing",
    "Facebook Ads",
    "Startup SEO",
    "Startup Website Development",
    "Growth Agency",
    "Early Stage Startup Marketing",
  ],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Webrano | High-End Web Development for Local Business",
    description:
      "Instagram, Facebook ads, SEO, and startup websites built to help new businesses launch with traction.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Webrano - Startup Growth Agency",
      },
    ],
    type: "website",
    siteName: "Webrano",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webrano | Startup Growth Agency",
    description:
      "Instagram growth, Facebook ads, SEO, and websites for early-stage startups.",
    images: ["/og-image.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings =
    (await getSiteSettings().catch(() => null)) || fallbackSiteSettings;

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${interTight.variable} ${instrumentSans.variable} font-sans antialiased bg-[#020105] text-foreground selection:bg-primary/30`}
      >
        <Header siteSettings={siteSettings} />
        <main>{children}</main>
        <Footer siteSettings={siteSettings} />
      </body>
    </html>
  );
}
