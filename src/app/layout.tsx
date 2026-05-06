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
  title: "Webrano | Expert Development & Design",
  description:
    "Specialized in high-end websites for Interior Designers, Salons, and Clinics. Senior-led startup providing corporate-grade development for local businesses.",
  icons: {
    icon: "/logo.svg", // This points to public/logo.svg
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Webrano | Premium Digital Agency",
    description:
      "Expert web development and luxury design for your local business.",
    images: ["/logo.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webrano | Digital Agency",
    description: "Corporate-grade development for local brands.",
    images: ["/logo.svg"],
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
