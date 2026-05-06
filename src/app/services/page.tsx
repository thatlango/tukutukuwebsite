import { Section } from "../components/Section";
import { CheckCircle, Lightbulb, Layers, Smartphone, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CTA } from "../components/CTA";
import { motion } from "motion/react";

const capabilities = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Innovation Systems & Strategy Design",
    description:
      "We design the architecture of innovation ecosystems and venture pipelines — giving institutions the blueprint to produce consistent, scalable outcomes.",
    includes: [
      "Innovation ecosystem design",
      "Venture pipeline architecture",
      "Institutional innovation strategy",
      "Program frameworks and delivery systems",
    ],
    outcome:
      "A structured innovation system that produces consistent venture creation and economic activity.",
    bg: "bg-primary",
    accent: "#a3e635",
    accentText: "text-accent",
    accentBg: "bg-accent",
    decorColor: "rgba(163,230,53,0.12)",
    decorColor2: "rgba(255,255,255,0.05)",
    textColor: "text-white",
    mutedText: "text-white/65",
    tagBg: "bg-white/10",
    tagText: "text-white",
    checkColor: "text-accent",
  },
  {
    number: "02",
    icon: Layers,
    title: "Programs Design, Implementation & Execution",
    description:
      "We design, manage, and fully execute structured programs for institutions, governments, and ecosystem partners — from mobilisation to measurable outcomes.",
    includes: [
      "Program design and structuring",
      "Full program management and delivery",
      "Field implementation and operational execution",
      "Multi-stakeholder coordination",
      "Monitoring, Evaluation & Learning systems",
      "Performance tracking and reporting",
      "Risk management and adaptive execution",
      "Community engagement and participation",
    ],
    outcome:
      "Programs that function as execution systems, producing real ventures, measurable economic outcomes, and active community participation.",
    bg: "bg-[#7C3A1E]",
    accent: "#e8a020",
    accentText: "text-[#e8a020]",
    accentBg: "bg-[#e8a020]",
    decorColor: "rgba(232,160,32,0.12)",
    decorColor2: "rgba(255,255,255,0.05)",
    textColor: "text-white",
    mutedText: "text-white/65",
    tagBg: "bg-white/10",
    tagText: "text-white",
    checkColor: "text-[#e8a020]",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Digital Platforms for Entrepreneurs & MSMEs",
    description:
      "We build digital infrastructure that supports entrepreneurship, enterprise growth, and ecosystem coordination — designed for real connectivity conditions in East Africa.",
    includes: [
      "MSME onboarding systems",
      "Entrepreneur support platforms",
      "Venture tracking systems",
      "Opportunity matching systems",
      "Ecosystem data and intelligence tools",
      "Community engagement platforms",
    ],
    outcome:
      "Connected digital ecosystems that improve access, visibility, and structured participation across communities and enterprises.",
    bg: "bg-[#162B40]",
    accent: "#38bdf8",
    accentText: "text-sky-400",
    accentBg: "bg-sky-400",
    decorColor: "rgba(56,189,248,0.12)",
    decorColor2: "rgba(255,255,255,0.04)",
    textColor: "text-white",
    mutedText: "text-white/65",
    tagBg: "bg-white/10",
    tagText: "text-white",
    checkColor: "text-sky-400",
  },
];

const differentiators = [
  "We are not advisors or trainers.",
  "We are a consulting and implementation firm that designs systems, builds programs, and runs execution until outcomes are produced.",
  "We work across all stages of innovation — from idea to scale — within real environments and real communities.",
];

const outcomeStandards = [
  "Validated ventures",
  "Measurable economic activity",
  "Functional innovation systems",
  "Improved institutional execution capacity",
  "Active community participation",
  "Scalable digital ecosystems",
];

export default function ServicesPage() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent text-xs uppercase tracking-[0.2em] font-bold mb-4">
              What We Do
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              Systems That Turn Innovation Into Outcomes
            </h1>
            <p className="text-white/65 text-lg">
              Strategy, program implementation, and digital infrastructure — built to produce real results.
            </p>
          </div>
        </div>
      </section>

      {/* ── Capability Cards ──────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-3">
              Our Capabilities
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Three Integrated<br />Capability Areas
            </h2>
          </div>

          <div className="space-y-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.number}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative rounded-3xl overflow-hidden ${cap.bg} p-8 lg:p-12`}
                >
                  {/* Decorative layered circles */}
                  <div
                    className="absolute top-0 right-0 w-80 h-80 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none"
                    style={{ background: cap.decorColor }}
                  />
                  <div
                    className="absolute bottom-0 left-1/3 w-56 h-56 rounded-full translate-y-1/2 pointer-events-none"
                    style={{ background: cap.decorColor }}
                  />
                  <div
                    className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full pointer-events-none"
                    style={{ background: cap.decorColor2 }}
                  />

                  {/* Large watermark number */}
                  <span
                    className="absolute bottom-4 right-8 text-[120px] font-black leading-none pointer-events-none select-none"
                    style={{ color: "rgba(255,255,255,0.06)" }}
                  >
                    {cap.number}
                  </span>

                  {/* Content */}
                  <div className="relative z-10 grid lg:grid-cols-[1fr_1fr] gap-10">
                    {/* Left */}
                    <div>
                      {/* Icon + number row */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                          style={{ background: cap.decorColor, border: `1px solid ${cap.accent}30` }}
                        >
                          <Icon className="h-7 w-7" style={{ color: cap.accent }} />
                        </div>
                        <span
                          className="text-xs font-black uppercase tracking-[0.2em]"
                          style={{ color: cap.accent }}
                        >
                          Capability {cap.number}
                        </span>
                      </div>

                      <h3 className={`text-2xl lg:text-3xl font-black ${cap.textColor} leading-tight mb-4`}>
                        {cap.title}
                      </h3>
                      <p className={`${cap.mutedText} text-base leading-relaxed mb-8`}>
                        {cap.description}
                      </p>

                      {/* Outcome box */}
                      <div
                        className="rounded-2xl p-5"
                        style={{ background: cap.decorColor, border: `1px solid ${cap.accent}25` }}
                      >
                        <p
                          className="text-xs font-black uppercase tracking-wider mb-2"
                          style={{ color: cap.accent }}
                        >
                          Outcome
                        </p>
                        <p className={`text-sm leading-relaxed ${cap.mutedText}`}>
                          {cap.outcome}
                        </p>
                      </div>
                    </div>

                    {/* Right — includes list */}
                    <div>
                      <p
                        className="text-xs font-black uppercase tracking-wider mb-5"
                        style={{ color: cap.accent }}
                      >
                        Includes
                      </p>
                      <ul className="space-y-3 mb-8">
                        {cap.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle
                              className="h-4 w-4 flex-shrink-0 mt-0.5"
                              style={{ color: cap.accent }}
                            />
                            <span className={`text-sm font-medium ${cap.mutedText}`}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-lg transition-opacity hover:opacity-90"
                        style={{ background: cap.accent, color: "#111827" }}
                      >
                        Discuss Your Needs <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different ───────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-3">Our Difference</p>
              <h2 className="text-4xl font-black text-gray-900 leading-tight mb-6">What Makes Us Different</h2>
              <div className="space-y-3">
                {differentiators.map((d) => (
                  <div key={d} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 font-semibold text-sm">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-3">Outcome Standard</p>
              <h2 className="text-4xl font-black text-gray-900 leading-tight mb-6">What We Deliver</h2>
              <div className="grid grid-cols-2 gap-3">
                {outcomeStandards.map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-4 border border-border shadow-card flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">{s}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Work ───────────────────────────────────── */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-accent text-xs uppercase tracking-[0.2em] font-bold mb-3">
              Engagement Model
            </p>
            <h2 className="text-4xl font-black text-white leading-tight">
              How We Work
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "1", t: "Design Systems With Partners" },
              { n: "2", t: "Run Full Implementation End to End" },
              { n: "3", t: "Enable Institutions With Tools They Can Operate" },
              { n: "4", t: "Embed Community Participation Into Delivery" },
            ].map((step) => (
              <div key={step.n} className="bg-white/8 border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-black text-sm mx-auto mb-4">
                  {step.n}
                </div>
                <p className="text-white font-semibold text-sm leading-relaxed">{step.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <CTA
          title="Ready to design innovation systems?"
          description="Let's discuss your challenges and how we can build structured solutions that produce real outcomes."
          primaryLabel="Start a Conversation"
          primaryTarget="/contact"
          secondaryLabel="Learn More"
          secondaryTarget="/about"
        />
      </div>
    </main>
  );
}
