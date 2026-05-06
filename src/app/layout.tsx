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
  title: "Webrano | Premium Digital Agency for Local Businesses",
  description: "Webrano delivers high-end, senior-led web development and luxury design for clinics, salons, and interior designers. Affordable excellence for your digital presence.",
  openGraph: {
    title: "Webrano | Premium Digital Agency",
    description: "Expert web development and luxury design for your local business.",
    images: ["/og-image.png"], // You can add an OG image in your public folder later
  },
  twitter: {
    card: "summary_large_image",
    title: "Webrano | Expert Web Development",
    description: "High-performance websites for local businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${interTight.variable} ${instrumentSans.variable} font-sans antialiased bg-[#020105] text-foreground selection:bg-primary/30`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
