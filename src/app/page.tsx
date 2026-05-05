import { motion } from "motion/react";
import { Hero } from "./components/Hero";
import { MarqueeTicker } from "./components/MarqueeTicker";
import { PartnersSection } from "./components/PartnersSection";
import { Pipeline } from "./components/Pipeline";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { ArrowRight, CheckCircle, Users, Zap, TrendingUp, Users2, BarChart3, Lightbulb, Monitor } from "lucide-react";
import { Link } from "react-router";

/* ── About / Stats ─────────────────────────────────────────── */
function AboutSection() {
  const capabilities = [
    { label: "Entrepreneurship Support", pct: 90 },
    { label: "Innovation Systems Design", pct: 85 },
    { label: "Program Delivery", pct: 95 },
  ];

  const stats = [
    { value: "1,200+", label: "Entrepreneurs Supported" },
    { value: "50+",    label: "Programs Delivered" },
    { value: "80+",    label: "Communities Reached" },
    { value: "16+",    label: "Years of Operation" },
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
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 bg-primary text-white rounded-xl px-4 py-3 shadow-lg">
              <p className="text-accent font-black text-xs uppercase tracking-wide">Our Mission</p>
              <p className="text-white text-sm font-semibold mt-1 max-w-[200px]">
                Building innovation that starts local, scales globally.
              </p>
            </div>
          </motion.div>

          {/* Right — text + bars */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              Building Innovation<br />Systems That Work
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Tuku-Tuku Innovation Labs is a consulting and implementation firm
              headquartered in Gulu, Uganda. We design and execute innovation
              systems that strengthen institutions, enable entrepreneurs, and
              produce measurable economic outcomes across East Africa.
            </p>

            {/* Capability bars */}
            <div className="space-y-5 mb-8">
              {capabilities.map((cap) => (
                <div key={cap.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-semibold text-gray-700">{cap.label}</span>
                    <span className="text-sm font-bold text-primary">{cap.pct}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cap.pct}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
            >
              About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden">
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
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
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
    description:
      "We design the architecture of innovation ecosystems and venture pipelines that produce consistent, scalable outcomes.",
    tags: ["Ecosystem Design", "Pipeline Architecture", "Strategy"],
    bg: "#1B4332",
    accent: "#a3e635",
    decore: "rgba(163,230,53,0.12)",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Programs Design & Execution",
    description:
      "We design, manage, and fully execute structured programs — from mobilisation to measurable field outcomes — for institutions and development partners.",
    tags: ["Program Management", "Field Execution", "MEL Systems"],
    bg: "#7C3A1E",
    accent: "#e8a020",
    decore: "rgba(232,160,32,0.12)",
  },
  {
    number: "03",
    icon: Monitor,
    title: "Digital Platforms for Entrepreneurs",
    description:
      "We build digital infrastructure that supports entrepreneurship, enterprise growth, and ecosystem coordination across East Africa.",
    tags: ["MSME Platforms", "Venture Tracking", "Ecosystem Tools"],
    bg: "#162B40",
    accent: "#38bdf8",
    decore: "rgba(56,189,248,0.12)",
  },
];

function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-3">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight max-w-lg">
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

        {/* Colorful layered cards */}
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
                className="relative rounded-3xl overflow-hidden p-8 flex flex-col min-h-[380px]"
                style={{ backgroundColor: card.bg }}
              >
                {/* Layered decorative circles */}
                <div className="absolute top-0 right-0 w-56 h-56 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none"
                  style={{ background: card.decore }} />
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none"
                  style={{ background: card.decore }} />
                <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ background: "rgba(255,255,255,0.04)" }} />

                {/* Watermark number */}
                <span className="absolute bottom-3 right-5 text-[100px] font-black leading-none pointer-events-none select-none"
                  style={{ color: "rgba(255,255,255,0.06)" }}>
                  {card.number}
                </span>

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
                    style={{ background: card.decore, border: `1px solid ${card.accent}30` }}>
                    <Icon className="h-6 w-6" style={{ color: card.accent }} />
                  </div>

                  {/* Number label */}
                  <p className="text-xs font-black uppercase tracking-[0.2em] mb-3"
                    style={{ color: card.accent }}>
                    Capability {card.number}
                  </p>

                  <h3 className="text-xl font-black text-white leading-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                    {card.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {card.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                        style={{ background: card.decore, color: card.accent, border: `1px solid ${card.accent}25` }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 font-bold text-xs px-4 py-2.5 rounded-lg w-fit transition-opacity hover:opacity-90"
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
    description: "We listen first and build with people, not for people. Communities are active participants, not passive recipients.",
  },
  {
    icon: TrendingUp,
    title: "Execution-Focused",
    description: "We deliver in real environments over conceptual design alone. Systems over activities, outcomes over output.",
  },
  {
    icon: Zap,
    title: "Practically Proven",
    description: "Over 16 years of on-the-ground implementation across Northern Uganda and East Africa.",
  },
  {
    icon: Users2,
    title: "Partner-Trusted",
    description: "Governments, NGOs, development agencies, and investors rely on us to deliver measurable innovation outcomes.",
  },
];

function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Why Our Partners<br />Believe in Us
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
                className="bg-white rounded-2xl p-6 border border-gray-100 hover-lift"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-black text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
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
    desc: "Structured programs, frameworks, and monitoring systems that deliver measurable outcomes.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=500&q=80",
  },
  {
    label: "Institutions",
    desc: "Innovation systems and platforms that strengthen internal capacity and ecosystem performance.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
  },
  {
    label: "Startups & Entrepreneurs",
    desc: "Structured venture development from idea to validation to investment readiness.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80",
  },
  {
    label: "Investors",
    desc: "Structured pipelines of validated, investment-ready ventures with full documentation.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
  },
];

function AudienceSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-3">Who We Work With</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight max-w-lg">
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
              className="rounded-2xl overflow-hidden border border-gray-100 hover-lift bg-white"
            >
              <div className="h-40 overflow-hidden">
                <img src={a.image} alt={a.label} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-black text-gray-900 mb-2">{a.label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
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
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Partner with Tuku-Tuku to design and implement innovation systems
              that work — for your institution, your partners, and the communities you serve.
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
          <div className="space-y-4">
            {beliefs.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white/8 border border-white/10 rounded-xl px-5 py-4"
              >
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
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
