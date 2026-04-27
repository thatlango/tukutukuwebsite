import { motion } from "motion/react";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";

const points = [
  "Trained founders",
  "Market-tested models",
  "Structured venture documentation",
  "Local implementation support",
];

export function InvestorsHighlight() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="investors" className="py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-3">
            For Investors & Strategic Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Access a curated pipeline with reduced early-stage risk.
          </h2>
          <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6">
            We pre-filter and prepare ventures before they reach you, and we stay
            on the ground to support implementation after funding.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {points.map((point) => (
              <p key={point} className="flex items-center gap-2 text-primary-foreground/95">
                <CheckCircle className="h-4 w-4 text-accent" />
                {point}
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              onClick={() => scrollTo("contact")}
            >
              Access Pipeline
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 text-primary-foreground hover:bg-white/10"
              onClick={() => scrollTo("consulting")}
            >
              Partner With Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
