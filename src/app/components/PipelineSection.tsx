import { motion } from "motion/react";

const pipeline = [
  {
    stage: "Source",
    detail:
      "Identify founders and opportunities through communities, universities, and local networks.",
  },
  {
    stage: "Train",
    detail:
      "Deliver practical business, technical, and operational capability building.",
  },
  {
    stage: "Validate",
    detail:
      "Test in real market conditions and refine models based on evidence.",
  },
  {
    stage: "Build",
    detail:
      "Strengthen product, operations, and team systems for reliable execution.",
  },
  {
    stage: "Prepare",
    detail:
      "Structure documentation, financials, and readiness for partner review.",
  },
  {
    stage: "Connect",
    detail:
      "Link vetted ventures to investors, funders, and growth partners.",
  },
];

export function PipelineSection() {
  return (
    <section id="pipeline" className="py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            The Tuku-Tuku Pipeline
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
            From raw potential to investable ventures.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We don&apos;t just support startups — we build pipelines that
            consistently produce investable ventures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pipeline.map((item, index) => (
            <motion.div
              key={item.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="inline-flex items-center justify-center text-xs font-bold rounded-full bg-accent/20 text-primary px-2.5 py-1 mb-3">
                Step {index + 1}
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{item.stage}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
