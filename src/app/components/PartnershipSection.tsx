import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Zap, Sparkles, Building2 } from "lucide-react";

const offerings = [
  {
    icon: Zap,
    title: "Run a Hackathon",
    description:
      "We design, facilitate, and deliver end-to-end hackathons for your organization — corporate, sector-specific, or community-wide.",
    cta: "Plan a hackathon",
    href: "#hackathons",
  },
  {
    icon: Sparkles,
    title: "Innovation as a Service",
    description:
      "Hire us to deploy and manage a full innovation program on your behalf — incubators, accelerators, or challenge funds.",
    cta: "Explore IaaS",
    href: "#iaas",
  },
  {
    icon: Building2,
    title: "Custom Partnership",
    description:
      "Have a unique initiative in mind? We work with governments, NGOs, and development partners to co-design solutions.",
    cta: "Start a conversation",
    href: "#contact",
  },
];

export function PartnershipSection() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            Work With Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Governments, NGOs, development agencies, and companies partner with{" "}
            <strong>Tuku-Tuku Innovation Labs</strong> to unlock economic opportunity across East Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {offerings.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-border hover:border-primary/40 rounded-2xl p-8 flex flex-col hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => scrollTo(item.href)}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-5 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                  {item.description}
                </p>
                <button
                  className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-200"
                >
                  {item.cta} <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
