import type { Metadata } from "next";
import { Instrument_Sans, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getSiteSettings } from "@/sanity/queries";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  
  return {
    title: {
      default: settings?.title || "Local Business Starter",
      template: `%s | ${settings?.title || "Local Business Starter"}`
    },
    description: settings?.description || "A professional, CMS-driven starter kit for local businesses.",
    openGraph: {
      title: settings?.title,
      description: settings?.description,
      images: settings?.ogImage ? [{ url: settings.ogImage }] : [],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${instrumentSans.variable} ${interTight.variable} font-sans antialiased selection:bg-primary/20`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
