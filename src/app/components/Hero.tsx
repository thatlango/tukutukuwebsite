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
    <section className="relative overflow-hidden bg-[#f7fbf5]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(26,77,46,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(212,175,55,0.14),_transparent_40%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm"
            >
              Built in Northern Uganda • Engineered for East Africa
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
            >
              We build the systems that power innovation across East Africa.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
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
                  className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-semibold text-white/90"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 grid gap-4 lg:grid-cols-3"
            >
              {[
                {
                  title: "Program Design",
                  description: "Clear delivery frameworks, reporting systems, and partner-ready execution.",
                  featured: false,
                },
                {
                  title: "Venture Building",
                  description: "Practical packages that convert ideas into investable ventures.",
                  featured: true,
                },
                {
                  title: "Investment Readiness",
                  description: "Due-diligence-ready systems that make capital decisions easier.",
                  featured: false,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-[2rem] p-6 shadow-lg transition-all duration-300 ${item.featured ? "bg-accent text-primary border border-accent" : "bg-white border border-white/20 text-foreground"}`}
                >
                  <p className={`text-sm uppercase tracking-[0.24em] font-semibold ${item.featured ? "text-primary" : "text-muted-foreground"}`}>
                    {item.featured ? "Featured" : "Featured Service"}
                  </p>
                  <h3 className={`mt-4 text-xl font-bold ${item.featured ? "text-primary" : "text-foreground"}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${item.featured ? "text-primary/90" : "text-muted-foreground"}`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-[#16432a] shadow-lg"
                onClick={() => scrollTo("contact")}
              >
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-white"
                onClick={() => scrollTo("programs")}
              >
                Access Programs
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 grid gap-3 sm:grid-cols-3"
            >
              {[
                { label: "Programs designed", value: "12+" },
                { label: "Partner cohorts", value: "45+" },
                { label: "Entrepreneurs reached", value: "1,200+" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-border bg-white/80 p-5 shadow-sm">
                  <p className="text-3xl font-bold text-primary">{item.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-12 max-w-xl"
            >
              {!submitted ? (
                <form onSubmit={handleEmailSubmit} className="grid gap-3 sm:grid-cols-[1fr_auto]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="rounded-2xl border border-border bg-white px-4 py-4 text-sm text-foreground shadow-sm focus:outline-none focus:border-primary"
                  />
                  <Button
                    type="submit"
                    className="rounded-2xl bg-accent text-primary hover:bg-[#b89026] px-6 py-4 text-sm font-semibold"
                  >
                    Subscribe
                  </Button>
                </form>
              ) : (
                <div className="rounded-2xl border border-accent bg-accent/10 px-5 py-4 text-sm text-primary">
                  You're in! We'll be in touch with updates.
                </div>
              )}
            </motion.div>
          </div>

          <motion.div
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
