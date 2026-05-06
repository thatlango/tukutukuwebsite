import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router";

const studies = [
  {
    tag: "University Ventures",
    tagColor: "#1a4731",
    name: "University Venture Labs Rollout",
    context: "3 universities · Northern Uganda",
    stat: "48",
    statLabel: "ventures reached investment readiness",
    highlights: [
      "210 ventures progressed through pipeline",
      "3 university programs adopted the model",
      "Structured faculty-led venture labs established",
    ],
    stage: "Validate → Build → Prepare",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "MSME Accelerator",
    tagColor: "#7C3A1E",
    name: "Post-Conflict MSME Accelerator",
    context: "Northern Uganda · Post-conflict districts",
    stat: "72%",
    statLabel: "of MSMEs reported revenue growth within 6 months",
    highlights: [
      "160 MSMEs supported through structured program",
      "35 supplier contracts secured",
      "Operational systems established for each business",
    ],
    stage: "Train → Validate → Build",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Digital Platform",
    tagColor: "#162B40",
    name: "Partner Delivery Platform",
    context: "Multi-partner · East Africa",
    stat: "500+",
    statLabel: "ventures tracked across partner programs",
    highlights: [
      "40% reduction in reporting cycle time",
      "Real-time execution visibility for all stakeholders",
      "Standardized data across 8 implementing partners",
    ],
    stage: "Build → Prepare → Connect",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Case Studies</p>
            <h1 className="font-black text-white text-4xl lg:text-6xl mb-4">Proof Over Promises</h1>
            <p className="text-white/65 text-lg max-w-xl">
              Real outcomes from real projects — every engagement must produce measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {studies.map((study, i) => (
              <motion.div
                key={study.name}
                className="grid lg:grid-cols-5 rounded-3xl overflow-hidden border border-border shadow-panel"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Image — 2 cols */}
                <div className="lg:col-span-2">
                  <img
                    src={study.image}
                    alt={study.name}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>

                {/* Content — 3 cols */}
                <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                  <div>
                    {/* Tag + context */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-white text-xs font-bold px-3 py-1 rounded-full"
                        style={{ backgroundColor: study.tagColor }}
                      >
                        {study.tag}
                      </span>
                      <span className="text-xs text-muted-foreground">{study.context}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-black text-xl text-primary mb-4">{study.name}</h2>

                    {/* Stat card */}
                    <div className="rounded-xl bg-surface border border-border p-5 mb-5">
                      <p className="text-4xl font-black text-primary leading-none mb-1">{study.stat}</p>
                      <p className="text-sm text-muted-foreground">{study.statLabel}</p>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {study.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stage pill */}
                  <div>
                    <span className="text-xs text-primary font-bold uppercase tracking-wider border border-primary/20 rounded-full px-3 py-1 w-fit inline-block">
                      {study.stage}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Ready?</p>
            <h2 className="font-black text-white text-3xl lg:text-5xl mb-8">
              Create your success story
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-primary font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
