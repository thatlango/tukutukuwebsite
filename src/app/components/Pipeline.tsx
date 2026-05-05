import { motion } from "motion/react";
import { Search, GraduationCap, FlaskConical, Hammer, TrendingUp, Link2 } from "lucide-react";

const stages = [
  {
    icon: Search,
    stage: "01 · Source",
    description: "Identify entrepreneurs and opportunities within communities across the region.",
  },
  {
    icon: GraduationCap,
    stage: "02 · Train",
    description: "Structured capacity-building programs that give founders real skills and tools.",
  },
  {
    icon: FlaskConical,
    stage: "03 · Validate",
    description: "Market testing and real-world validation to confirm product-market fit.",
  },
  {
    icon: Hammer,
    stage: "04 · Build",
    description: "Product and operational development support to get ventures production-ready.",
  },
  {
    icon: TrendingUp,
    stage: "05 · Prepare",
    description: "Investment-readiness systems: financials, pitch, documentation, and governance.",
  },
  {
    icon: Link2,
    stage: "06 · Connect",
    description: "Link ventures to investors, partners, and markets that fuel their growth.",
  },
];

export function Pipeline() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-3">Our Process</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4">
            How the Pipeline Works
          </h2>
          <p className="text-gray-500 text-lg">
            We don't just support startups — we build pipelines that consistently produce investable ventures.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stages.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover-lift group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-primary font-bold uppercase tracking-wider mb-1">{s.stage}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10 font-medium">
          This systematic approach reduces investment risk and increases execution certainty for our partners.
        </p>
      </div>
    </section>
  );
}
