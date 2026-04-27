import { motion } from "motion/react";
import { Search, Wrench, Rocket, Building2 } from "lucide-react";

const steps = [
  {
    title: "Discover",
    description:
      "We identify real constraints and opportunities through field engagement with communities, institutions, and entrepreneurs.",
    icon: Search,
  },
  {
    title: "Build",
    description:
      "We design programs, platforms, and tools that solve specific market and institutional needs.",
    icon: Wrench,
  },
  {
    title: "Deploy",
    description:
      "We implement in real operating environments with clear delivery ownership and measurable outputs.",
    icon: Rocket,
  },
  {
    title: "Scale",
    description:
      "We embed systems into partner institutions so outcomes continue long after project cycles end.",
    icon: Building2,
  },
];

export function HowWeBuildInnovation() {
  return (
    <section id="innovation" className="py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            How We Build Innovation
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
            We build systems that can be deployed across East Africa and beyond.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our model was field-tested in Northern Uganda and engineered for
            cross-market implementation by development partners, institutions,
            and investors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
