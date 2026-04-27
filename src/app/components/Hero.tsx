import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
          alt="African innovators collaborating in a modern workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/88 to-primary/65"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent text-sm sm:text-base uppercase tracking-wider font-semibold px-4 py-1.5 rounded-full">
              Built in Northern Uganda • Engineered for East Africa
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              We build the systems that{" "}
              <span className="text-accent">power innovation</span>{" "}
              across East Africa.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-3xl"
          >
            <strong>Tuku-Tuku Innovation Labs</strong> designs and deploys
            scalable programs, platforms, and venture pipelines for startups,
            institutions, and partners that need reliable implementation.
          </motion.p>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {["1,200+ Entrepreneurs supported", "45+ Programs delivered", "500+ MSMEs tracked and supported"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-white/85 text-sm">
                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 font-semibold shadow-lg"
              onClick={() => scrollTo("consulting")}
            >
              Work With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/40 hover:bg-white/25 text-lg px-8 py-6 font-semibold"
              onClick={() => scrollTo("about")}
            >
              View Case Studies
            </Button>
          </motion.div>

          {/* Email capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="max-w-md"
          >
            {!submitted ? (
              <>
                <p className="text-white/70 text-sm mb-3">
                  Get updates on programs and opportunities:
                </p>
                <form onSubmit={handleEmailSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-lg bg-white/15 border border-white/30 text-white placeholder-white/50 text-sm focus:outline-none focus:border-accent focus:bg-white/20 transition-all"
                  />
                  <Button
                    type="submit"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 px-5 py-3 text-sm font-semibold"
                  >
                    Subscribe
                  </Button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 bg-accent/20 border border-accent/40 rounded-lg px-4 py-3"
              >
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-white text-sm font-medium">
                  You're in! We'll be in touch with updates.
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => scrollTo("about")}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
