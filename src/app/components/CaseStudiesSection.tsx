import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const studies = [
  {
    tag: "University Ventures",
    tagColor: "#1a4731",
    name: "University Venture Labs Rollout",
    problem: "Universities had entrepreneurship clubs but no consistent venture pipeline system.",
    results: "3 universities adopted the model; 210 ventures progressed; 48 reached investment readiness.",
    stage: "Validate → Build → Prepare",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
  },
  {
    tag: "MSME Accelerator",
    tagColor: "#7C3A1E",
    name: "Post-Conflict MSME Accelerator",
    problem: "MSMEs lacked operational systems and market linkage support in post-conflict districts.",
    results: "160 MSMEs supported; 72% reported revenue growth within 6 months; 35 supplier contracts secured.",
    stage: "Train → Validate → Build",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
  },
  {
    tag: "Digital Platform",
    tagColor: "#162B40",
    name: "Partner Delivery Platform",
    problem: "Multi-partner programs struggled with fragmented reporting and low execution visibility.",
    results: "500+ ventures tracked; reporting cycle time reduced 40%; partner turnaround improved.",
    stage: "Build → Prepare → Connect",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-3">Case Studies</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Proof Over Promises
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm border border-primary/30 px-5 py-2.5 rounded-lg hover:bg-primary hover:text-white transition-colors flex-shrink-0"
          >
            All Case Studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {studies.map((study, i) => (
            <motion.article
              key={study.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-panel transition-shadow duration-300 bg-white group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span
                  className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: study.tagColor }}
                >
                  {study.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-black text-gray-900 text-lg mb-3 leading-snug">{study.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    <span className="font-semibold text-gray-700">Challenge: </span>
                    {study.problem}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    <span className="font-semibold text-gray-700">Results: </span>
                    {study.results}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-primary font-bold uppercase tracking-wider">{study.stage}</span>
                  <ArrowUpRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
