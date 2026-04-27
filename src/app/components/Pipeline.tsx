import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const pipelineStages = [
  {
    stage: "Source",
    description: "Identify entrepreneurs and opportunities locally",
    icon: "🔍",
  },
  {
    stage: "Train",
    description: "Structured capacity building programs",
    icon: "🎓",
  },
  {
    stage: "Validate",
    description: "Market testing and real-world validation",
    icon: "✅",
  },
  {
    stage: "Build",
    description: "Product and operational development support",
    icon: "⚙️",
  },
  {
    stage: "Prepare",
    description: "Investment-readiness systems",
    icon: "📈",
  },
  {
    stage: "Connect",
    description: "Link ventures to investors and partners",
    icon: "🤝",
  },
];

export function Pipeline() {
  return (
    <section className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            The Tuku-Tuku Pipeline Model
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We don't just support startups — we build pipelines that consistently produce investable ventures.
          </p>
        </motion.div>

        <div className="relative">
          {/* Pipeline Flow */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-2">
            {pipelineStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="text-3xl mb-3">{stage.icon}</div>
                  <h3 className="text-lg font-bold text-primary mb-2">{stage.stage}</h3>
                  <p className="text-sm text-muted-foreground">{stage.description}</p>
                </div>
                {/* Arrow for desktop */}
                {index < pipelineStages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile arrows */}
          <div className="md:hidden flex justify-center mt-8 space-x-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <ArrowRight key={i} className="h-5 w-5 text-primary" />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This systematic approach reduces investment risk and increases execution certainty for our partners.
          </p>
        </motion.div>
      </div>
    </section>
  );
}