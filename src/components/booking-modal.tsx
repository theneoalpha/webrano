"use client";

import * as React from "react";
import { X, CircleCheck, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { sendBookingEmail } from "@/app/actions/contact";
import Image from "next/image";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      business: formData.get("business") as string,
      message: formData.get("message") as string,
    };

    const result = await sendBookingEmail(data);

    if (result.success) {
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
      }, 5000);
    } else {
      alert("Failed to send details. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020105]/95 backdrop-blur-3xl"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-6xl h-full md:h-auto min-h-[600px] bg-[#0A0A0B] rounded-none md:rounded-[4rem] shadow-[0_0_100px_rgba(124,58,237,0.1)] overflow-hidden flex flex-col md:flex-row border border-white/5"
          >
            {/* Left Side: Brand & Visuals */}
            <div className="relative w-full md:w-[40%] bg-primary p-12 md:p-16 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#ffffff_0%,transparent_70%)]" />
                <Image 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
                  alt="Background"
                  fill
                  className="object-cover mix-blend-overlay"
                />
              </div>

              <div className="relative z-10 space-y-8">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-primary font-black text-3xl shadow-2xl">W</div>
                <h3 className="text-4xl md:text-5xl font-black text-white leading-none font-display tracking-tighter">
                  Let's craft your <br /> <span className="text-black/50">digital future.</span>
                </h3>
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex flex-col gap-4">
                  {[
                    "Senior-led development",
                    "Luxury design aesthetic",
                    "Unmatched performance"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-white/80 font-bold text-sm tracking-tight">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">✓</div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex-1 p-10 md:p-20 relative bg-[#0A0A0B]">
              <button
                onClick={onClose}
                className="absolute top-10 right-10 p-4 rounded-full hover:bg-white/5 transition-all text-muted-foreground hover:text-white group"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-10 py-20">
                  <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="w-32 h-32 bg-primary/10 rounded-[3rem] flex items-center justify-center text-primary"
                  >
                    <CircleCheck className="w-16 h-16" />
                  </motion.div>
                  <div className="space-y-4">
                    <h4 className="text-5xl font-black font-display tracking-tighter">Inquiry Received</h4>
                    <p className="text-muted-foreground font-medium text-lg max-w-sm mx-auto leading-relaxed">
                      We've notified the team. Check your inbox for a confirmation from Webrano.
                    </p>
                  </div>
                  <Button variant="outline" onClick={onClose} className="rounded-full px-10">Close Portal</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="h-full flex flex-col">
                  <div className="mb-12 space-y-4">
                    <h4 className="text-4xl md:text-5xl font-black tracking-tighter font-display leading-none">Inquiry Portal</h4>
                    <p className="text-muted-foreground font-medium text-base">Fill the details to get a custom quote.</p>
                  </div>

                  <div className="space-y-12 flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Full Name</label>
                        <input
                          required
                          name="name"
                          placeholder="Your name"
                          className="w-full bg-transparent border-b-2 border-white/10 p-0 pb-4 text-xl font-bold focus:outline-none focus:border-primary transition-all placeholder:text-white/5"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Email</label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="hello@company.com"
                          className="w-full bg-transparent border-b-2 border-white/10 p-0 pb-4 text-xl font-bold focus:outline-none focus:border-primary transition-all placeholder:text-white/5"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">I am a</label>
                      <select
                        name="business"
                        className="w-full bg-transparent border-b-2 border-white/10 p-0 pb-4 text-xl font-bold focus:outline-none focus:border-primary transition-all appearance-none cursor-pointer"
                      >
                        <option value="interior" className="bg-[#0A0A0B]">Interior Designer</option>
                        <option value="salon" className="bg-[#0A0A0B]">Salon Owner</option>
                        <option value="clinic" className="bg-[#0A0A0B]">Clinic Owner</option>
                        <option value="architect" className="bg-[#0A0A0B]">Architect</option>
                        <option value="other" className="bg-[#0A0A0B]">Local Business</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Project Overview</label>
                      <textarea
                        required
                        name="message"
                        rows={1}
                        placeholder="Tell us about your digital goals"
                        className="w-full bg-transparent border-b-2 border-white/10 p-0 pb-4 text-xl font-bold focus:outline-none focus:border-primary transition-all resize-none placeholder:text-white/5"
                      />
                    </div>
                  </div>

                  <div className="pt-12">
                    <Button
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-20 py-10 rounded-full text-xl font-black group shadow-3xl shadow-primary/30"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-8 h-8 animate-spin" />
                      ) : (
                        <span className="flex items-center gap-4">
                          Request Consultation <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
