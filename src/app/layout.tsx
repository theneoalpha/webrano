import type { Metadata } from "next";
import { Inter_Tight, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
  description: "Senior-led digital agency specializing in high-performance websites for Interior Designers, Architects, Salons, and Medical Clinics. We bring corporate-grade engineering to local businesses with a focus on speed, luxury aesthetics, and seamless booking systems.",
  keywords: ["Web Development", "Interior Design Portfolios", "Salon Booking Systems", "Medical Clinic Websites", "Luxury Web Design", "Local Business SEO", "Senior Developer Agency"],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Webrano | High-End Web Development for Local Business",
    description: "Specialized in luxury portfolios and smart booking systems for designers, salons, and clinics. Built with senior-level corporate expertise.",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Webrano - Premium Digital Agency",
    }],
    type: "website",
    siteName: "Webrano",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webrano | Premium Web Agency",
    description: "Corporate-grade development for specialized local brands.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${interTight.variable} ${instrumentSans.variable} font-sans antialiased bg-[#020105] text-foreground selection:bg-primary/30`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
