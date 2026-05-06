import { motion } from "motion/react";
import { Target, Users, TrendingUp, DollarSign, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const valueProps = [
  { icon: Target, title: "Vetted Pipeline", description: "Opportunities pre-validated through our 6-stage process." },
  { icon: Users, title: "Local Expertise", description: "Deep East African market knowledge and regulatory fluency." },
  { icon: TrendingUp, title: "Execution Support", description: "Ongoing partnership through implementation and scaling." },
  { icon: DollarSign, title: "Impact Aligned", description: "Financial returns and social impact — not a tradeoff." },
];

const stages = [
  { stage: "Pre-Seed", range: "$50K – $200K", investors: "Angels, early-stage funds" },
  { stage: "Seed", range: "$200K – $1M", investors: "VC funds, impact investors" },
  { stage: "Series A", range: "$2M – $10M", investors: "Growth VCs, strategic investors" },
];

const portfolio = [
  { name: "AgriChain", sector: "AgriTech", raised: "$800K", desc: "Supply chain platform connecting 5K+ farmers to export markets", color: "#7C3A1E" },
  { name: "HealthLink", sector: "HealthTech", raised: "$150K", desc: "Telemedicine platform with 50K+ consultations delivered", color: "#162B40" },
  { name: "M-Commerce Pro", sector: "FinTech", raised: "$3M", desc: "Mobile commerce platform serving 100K+ users across 3 countries", color: "#1a4731" },
];

const processSteps = [
  "Initial consultation and alignment",
  "Access to curated pipeline",
  "Co-investment and deal structuring",
  "Due diligence support",
  "Post-investment monitoring",
  "Exit planning and reporting",
];

const sectors = ["FinTech", "AgriTech", "HealthTech", "EdTech", "E-Commerce", "Logistics"];

export default function InvestorsPage() {
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
            For Investors
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Investment Opportunities<br />in East Africa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg max-w-xl mx-auto text-white/65"
          >
            Curated, investment-ready ventures with reduced early-stage risk.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/10 max-w-xl mx-auto"
          >
            <div>
              <p className="text-3xl font-black text-accent">$15M+</p>
              <p className="text-sm text-white/60 mt-1">Capital Deployed</p>
            </div>
            <div>
              <p className="text-3xl font-black text-accent">50+</p>
              <p className="text-sm text-white/60 mt-1">Companies Funded</p>
            </div>
            <div>
              <p className="text-3xl font-black text-accent">300%</p>
              <p className="text-sm text-white/60 mt-1">Average Growth</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 1: What We Offer ─────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--primary)" }}>
              Why Invest Through Us
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">What We Offer</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {valueProps.map((vp, i) => (
              <motion.div
                key={vp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border shadow-card hover:shadow-panel transition-shadow bg-white p-6"
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <vp.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-black text-gray-900 mb-2">{vp.title}</h3>
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>{vp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Investment Stages ─────────────────────── */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--primary)" }}>
              Investment Stages
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Stages We Support</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {stages.map((s, i) => (
              <motion.div
                key={s.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border shadow-card bg-white p-8"
              >
                <h3 className="font-black text-xl text-gray-900">{s.stage}</h3>
                <p className="text-2xl font-black text-primary mt-2">{s.range}</p>
                <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>{s.investors}</p>
                <p className="text-xs uppercase font-bold mt-4" style={{ color: "var(--primary)" }}>Typical Investors</p>
                <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>{s.investors}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Portfolio Highlights ──────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--primary)" }}>
              Portfolio Highlights
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Ventures We've Supported</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {portfolio.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-border shadow-card"
              >
                <div className="h-3" style={{ backgroundColor: p.color }} />
                <div className="p-6">
                  <span
                    className="text-xs font-bold rounded-full px-3 py-1 text-white"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.sector}
                  </span>
                  <h3 className="font-black text-lg text-gray-900 mt-3">{p.name}</h3>
                  <p className="text-3xl font-black text-primary">{p.raised}</p>
                  <p className="text-sm mt-2" style={{ color: "var(--muted-foreground)" }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: How We Work With Investors ────────────── */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "var(--primary)" }}>
              Getting Started
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">How We Work With Investors</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Steps */}
            <div className="space-y-4">
              {processSteps.map((step, i) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-primary text-white rounded-full text-sm font-black flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-sm pt-1" style={{ color: "var(--muted-foreground)" }}>{step}</p>
                </div>
              ))}
            </div>
            {/* Info cards */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-white p-6">
                <h3 className="font-black text-gray-900 mb-4">Investment Criteria</h3>
                <ul className="space-y-3">
                  {["East Africa focus", "Scalable business models", "Strong founding teams", "Social impact alignment"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-white p-6">
                <h3 className="font-black text-gray-900 mb-4">Sectors of Interest</h3>
                <div className="flex flex-wrap gap-2">
                  {sectors.map((sector) => (
                    <span
                      key={sector}
                      className="text-xs font-bold rounded-full px-3 py-1 border"
                      style={{ borderColor: "var(--border)", color: "var(--primary)" }}
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Get Access
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            Ready to invest in East Africa?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-gray-900 font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Partner With Us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Download Deal Flow
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
