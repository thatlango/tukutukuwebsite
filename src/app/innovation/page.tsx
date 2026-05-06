import { motion } from "motion/react";
import { Lightbulb, Globe, Target, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const principles = [
  { icon: Lightbulb, title: "Innovation as Systems Design", description: "Repeatable processes and scalable platforms produce more consistent outcomes than individual breakthroughs." },
  { icon: Globe, title: "Local Infrastructure First", description: "We build foundational infrastructure rooted in local context — because imported models fail without it." },
  { icon: Target, title: "The Pipeline: Potential to Investment", description: "Our 6-stage pipeline systematically transforms raw potential into investment-ready ventures." },
  { icon: TrendingUp, title: "Regional Transformation", description: "Building innovation infrastructure that connects talent, institutions, and capital across East Africa." },
];

const focusAreas = [
  { title: "FinTech Systems", color: "#1a4731", accent: "#a3e635", desc: "Structured financial innovation ecosystems", items: ["Digital lending", "Payment systems", "Insurance innovation", "Regulatory integration"] },
  { title: "AgriTech Systems", color: "#7C3A1E", accent: "#e8a020", desc: "Agricultural value chain transformation", items: ["Supply chain", "Market connectivity", "Quality assurance", "Farmer networks"] },
  { title: "HealthTech Systems", color: "#162B40", accent: "#38bdf8", desc: "Healthcare delivery modernization", items: ["Telemedicine platforms", "Health data", "Resource management", "Provider networks"] },
];

const pipelineStages = ["Source", "Train", "Validate", "Build", "Prepare", "Connect"];

export default function InnovationPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4"
          >
            Innovation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Systems Thinking Drives Lasting Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg max-w-xl mx-auto text-white/65"
          >
            We build infrastructure that enables continuous innovation — not just individual projects.
          </motion.p>
        </div>
      </section>

      {/* ── Section 1: Four Principles ───────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--primary)" }}>
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Four Principles</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border shadow-card hover:shadow-panel transition-shadow bg-white p-6"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <principle.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-black text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Three Focus Areas ─────────────────────── */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--primary)" }}>
              Where We Build
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Three Focus Areas</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 text-white"
                style={{ backgroundColor: area.color }}
              >
                <h3 className="font-black text-white text-xl mb-2">{area.title}</h3>
                <p className="text-white/60 text-sm mb-5">{area.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {area.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-white/10 text-white border border-white/20 rounded-full px-3 py-1 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: The Innovation Pipeline ───────────────── */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white">The Innovation Pipeline</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {pipelineStages.map((stage, i) => (
              <>
                <span
                  key={stage}
                  className="rounded-full bg-white/10 border border-white/15 text-white text-sm font-bold px-5 py-2.5"
                >
                  {stage}
                </span>
                {i < pipelineStages.length - 1 && (
                  <span key={`arrow-${i}`} className="text-white/40 font-bold">→</span>
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto rounded-3xl bg-primary p-12 text-center">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to build innovation systems?
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-gray-900 font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Partner With Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                See Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
