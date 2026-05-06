import { motion } from "motion/react";
import { Hero } from "./components/Hero";
import { MarqueeTicker } from "./components/MarqueeTicker";
import { PartnersSection } from "./components/PartnersSection";
import { Pipeline } from "./components/Pipeline";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { ArrowRight, CheckCircle, Users, Zap, TrendingUp, Users2, BarChart3, Lightbulb, Monitor } from "lucide-react";
import { Link } from "react-router";

/* ── About ──────────────────────────────────────────────────── */
function AboutSection() {
  const stats = [
    { value: "1,200+", label: "Entrepreneurs Supported" },
    { value: "50+",    label: "Programs Delivered" },
    { value: "80+",    label: "Communities Reached" },
    { value: "16+",    label: "Years of Operation" },
  ];

  const focus = [
    "Innovation Systems & Strategy",
    "Programs Design & Execution",
    "Digital Platforms for Entrepreneurs",
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — photo stack */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
                alt="Workshop session"
                className="rounded-2xl w-full h-56 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80"
                alt="Women entrepreneurs"
                className="rounded-2xl w-full h-56 object-cover mt-8"
              />
              <div className="col-span-2 rounded-2xl overflow-hidden h-44">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-primary text-white rounded-xl px-4 py-3 shadow-lg">
              <p className="text-accent font-black text-xs uppercase tracking-wide">Our Mission</p>
              <p className="text-white text-sm font-semibold mt-1 max-w-[200px]">
                Innovation that starts local, scales globally.
              </p>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary">About Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mt-4 mb-6">
              Building Innovation<br />Systems That Work
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--muted-foreground)" }}>
              A consulting and implementation firm based in Gulu, Uganda — designing innovation systems that produce measurable economic outcomes across East Africa.
            </p>

            <div className="space-y-3 mb-8">
              {focus.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden shadow-sm">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white px-8 py-8 text-center"
            >
              <p className="text-4xl font-black text-primary mb-2">{stat.value}</p>
              <p className="text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Services ───────────────────────────────────────────────── */
const capabilityCards = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Innovation Systems & Strategy",
    description: "Ecosystem architecture and venture pipeline design that produces consistent, scalable outcomes.",
    bg: "#1B4332",
    accent: "#a3e635",
    decore: "rgba(163,230,53,0.12)",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Programs Design & Execution",
    description: "Full-cycle program management — from mobilisation to measurable field outcomes.",
    bg: "#7C3A1E",
    accent: "#e8a020",
    decore: "rgba(232,160,32,0.12)",
  },
  {
    number: "03",
    icon: Monitor,
    title: "Digital Platforms for Entrepreneurs",
    description: "Digital tools for entrepreneurship, MSME growth, and ecosystem coordination across East Africa.",
    bg: "#162B40",
    accent: "#38bdf8",
    decore: "rgba(56,189,248,0.12)",
  },
];

function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-3">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Three Capability<br />Areas
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm border border-primary/30 px-5 py-2.5 rounded-lg hover:bg-primary hover:text-white transition-colors flex-shrink-0"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {capabilityCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden p-8 flex flex-col min-h-[320px]"
                style={{ backgroundColor: card.bg }}
              >
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-56 h-56 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none"
                  style={{ background: card.decore }} />
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none"
                  style={{ background: card.decore }} />

                {/* Watermark number */}
                <span className="absolute bottom-3 right-5 text-[100px] font-black leading-none pointer-events-none select-none"
                  style={{ color: "rgba(255,255,255,0.06)" }}>
                  {card.number}
                </span>

                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
                    style={{ background: card.decore, border: `1px solid ${card.accent}30` }}>
                    <Icon className="h-6 w-6" style={{ color: card.accent }} />
                  </div>

                  <p className="text-xs font-black uppercase tracking-[0.2em] mb-2" style={{ color: card.accent }}>
                    Capability {card.number}
                  </p>
                  <h3 className="text-xl font-black text-white leading-tight mb-3">{card.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed flex-1">{card.description}</p>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 font-bold text-xs px-4 py-2.5 rounded-lg w-fit mt-6 transition-opacity hover:opacity-90"
                    style={{ background: card.accent, color: "#111827" }}
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Why Choose Us ──────────────────────────────────────────── */
const whyUs = [
  {
    icon: Users,
    title: "Community-Rooted",
    description: "Communities are active participants, not passive recipients.",
  },
  {
    icon: TrendingUp,
    title: "Execution-Focused",
    description: "Systems over activities — outcomes over output.",
  },
  {
    icon: Zap,
    title: "Practically Proven",
    description: "16+ years of on-the-ground implementation across East Africa.",
  },
  {
    icon: Users2,
    title: "Partner-Trusted",
    description: "Governments, NGOs, and investors rely on us to deliver.",
  },
];

function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-accent text-xs uppercase tracking-[0.2em] font-bold mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Why Partners<br />Believe in Us
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-white/8 border border-white/10 rounded-2xl p-6 hover:bg-white/12 transition-colors duration-200"
              >
                <div className="w-11 h-11 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-black text-white mb-1.5">{item.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Who We Serve ───────────────────────────────────────────── */
const audiences = [
  {
    label: "Development Partners",
    desc: "Structured programs that deliver measurable outcomes.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=500&q=80",
  },
  {
    label: "Institutions",
    desc: "Systems that strengthen institutional capacity and ecosystem performance.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
  },
  {
    label: "Startups & Entrepreneurs",
    desc: "From idea to validation to investment readiness.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80",
  },
  {
    label: "Investors",
    desc: "Validated, investment-ready venture pipelines with full documentation.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
  },
];

function AudienceSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-3">Who We Work With</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            We Serve<br />Those Who Build
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-border hover-lift bg-white shadow-card"
            >
              <div className="h-40 overflow-hidden">
                <img src={a.image} alt={a.label} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-black text-gray-900 mb-1.5">{a.label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ──────────────────────────────────────────────── */
function FinalCTA() {
  const beliefs = [
    "Innovation must be structured to produce outcomes",
    "Programs designed for execution, not just activity",
    "Communities integrated as active participants",
    "Economic impact must be measurable and repeatable",
  ];
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent text-xs uppercase tracking-[0.2em] font-bold mb-4">Partner With Us</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Build Systems That<br />Produce Real Outcomes
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-8">
              Let's design and implement innovation systems that work — for your institution, your partners, and the communities you serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-7 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-base"
              >
                Work With Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-bold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                View Case Studies
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            {beliefs.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-white/8 border border-white/10 rounded-xl px-5 py-3.5"
              >
                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                <p className="text-white font-semibold text-sm">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HomePage ───────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <MarqueeTicker />
      <PartnersSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <AudienceSection />
      <Pipeline />
      <CaseStudiesSection />
      <FinalCTA />
    </main>
  );
}
