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
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full glass-effect px-6 py-3 text-sm font-semibold text-white shadow-lg hover-glow"
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse-slow"></div>
              Built in Northern Uganda • Engineered for East Africa
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white mb-6"
            >
              We build the <span className="text-gradient">systems</span> that power innovation across East Africa.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-2xl text-xl leading-8 text-gray-200 mb-8"
            >
              Tuku-Tuku Innovation Labs designs and deploys scalable programs, platforms, and venture pipelines for startups, institutions, and partners that need reliable implementation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {[
                "Program Design",
                "Venture Building",
                "Innovation Systems",
                "Investment Readiness",
                "Partner Delivery",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full glass-effect px-4 py-2 text-sm font-semibold text-white hover-glow hover-scale cursor-pointer transition-all"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover-lift text-white font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => scrollTo("contact")}
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-effect border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-full hover-scale transition-all duration-300"
                onClick={() => scrollTo("services")}
              >
                Explore Our Work
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-square w-full max-w-md rounded-3xl glass-effect p-8 hover-lift">
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-6 w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center animate-float">
                    <CheckCircle className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Systems?</h3>
                  <p className="text-gray-200 mb-6">
                    Join partners who trust us to deliver measurable innovation outcomes.
                  </p>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">50+</div>
                      <div className="text-sm text-gray-300">Programs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">1000+</div>
                      <div className="text-sm text-gray-300">Entrepreneurs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="rounded-[2rem] border border-border bg-white p-5 shadow-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                    alt="Innovation team workshop"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="rounded-[1.5rem] bg-primary text-white p-5">
                    <p className="text-sm uppercase tracking-[0.24em] font-semibold text-white/80">Infrastructure-focused programs</p>
                    <p className="mt-3 text-lg font-bold">Systems, pipelines, and local delivery</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-slate-100 p-5 text-sm text-foreground">
                    Built for investors, institutions, founders and partners who need execution certainty.
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-6 left-8 hidden rounded-full border border-white bg-white/90 px-4 py-3 shadow-xl md:block">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Pipeline focus</p>
              <p className="mt-1 text-sm font-semibold text-primary">Source → Train → Validate → Build → Prepare → Connect</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
