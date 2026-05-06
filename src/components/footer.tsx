import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-24 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
          <div className="lg:col-span-2 space-y-10">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-2xl">
                W
              </div>
              <span className="text-3xl font-black tracking-tighter">{siteConfig.name}</span>
            </Link>
            <p className="text-xl opacity-60 max-w-md leading-relaxed font-medium">
              {siteConfig.description}
            </p>
            <div className="flex gap-8 pt-4">
              {Object.entries(siteConfig.links).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg opacity-40 hover:opacity-100 transition-all hover:-translate-y-1 capitalize font-bold tracking-widest"
                >
                  {key}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-xs text-primary">Navigation</h4>
            <ul className="space-y-4">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-lg font-bold opacity-60 hover:opacity-100 hover:translate-x-2 transition-all inline-block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-xs text-primary">Location</h4>
              <p className="text-lg font-bold opacity-60 leading-relaxed">
                {siteConfig.contact.address}
              </p>
            </div>
            <div>
              <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-xs text-primary">Direct Contact</h4>
              <p className="text-2xl font-black tracking-tighter hover:text-primary transition-colors cursor-pointer">
                {siteConfig.contact.phone}
              </p>
              <p className="text-lg opacity-60 font-medium">{siteConfig.contact.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-sm opacity-40 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} {siteConfig.name} — ALL RIGHTS RESERVED
          </div>
          <div className="flex gap-10">
            <Link href="/privacy" className="text-xs font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Privacy</Link>
            <Link href="/terms" className="text-xs font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Terms</Link>
          </div>
        </div>
      </div>

    </footer >

  );
}
