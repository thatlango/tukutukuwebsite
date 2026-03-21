import { motion } from "motion/react";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Smartphone,
  LayoutDashboard,
  Database,
  Globe,
  ShoppingBag,
  BarChart2,
  CheckCircle,
} from "lucide-react";

const platforms = [
  {
    icon: LayoutDashboard,
    title: "Innovation Program Platforms",
    description:
      "Custom-built systems to run incubators and accelerators: application portals, cohort tracking, mentor matching, and milestone reporting.",
    tag: "Most requested",
    highlight: true,
  },
  {
    icon: Globe,
    title: "Challenge & Hackathon Portals",
    description:
      "Full-stack platforms for innovation challenges: participant registration, team formation, submission management, judging, and public leaderboards.",
    tag: "Built for scale",
    highlight: false,
  },
  {
    icon: Smartphone,
    title: "Mobile-First Entrepreneur Tools",
    description:
      "Lightweight apps and USSD tools built for low-connectivity environments: business trackers, market access tools, and training delivery.",
    tag: "Offline-capable",
    highlight: false,
  },
  {
    icon: ShoppingBag,
    title: "Digital Marketplaces",
    description:
      "Platforms connecting local businesses to buyers, suppliers, and service providers. Built for African market realities.",
    tag: "Local-first",
    highlight: false,
  },
  {
    icon: BarChart2,
    title: "Impact Dashboards",
    description:
      "Real-time dashboards for development organizations and funders to track program performance, entrepreneur outcomes, and economic indicators.",
    tag: "Donor-ready",
    highlight: false,
  },
  {
    icon: Database,
    title: "Ecosystem Data Platforms",
    description:
      "Structured databases and discovery tools that map startup ecosystems, track innovators, and deliver insights for governments and investors.",
    tag: "Data-driven",
    highlight: false,
  },
];

const buildProcess = [
  { step: "01", title: "Discover", desc: "We map your users, workflows, and constraints before writing a line of code." },
  { step: "02", title: "Design", desc: "Wireframes and prototypes validated with real users, not just stakeholders." },
  { step: "03", title: "Build", desc: "Agile development with regular demos so you see progress every two weeks." },
  { step: "04", title: "Launch", desc: "Deployment, training, and handover. Ongoing support available." },
];

export function TechPlatforms() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="platforms" className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            Technology & Platforms
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-5">
            We Build Digital Tools That{" "}
            <span className="text-primary">Actually Get Used</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From innovation management systems to mobile tools for low-connectivity entrepreneurs, we build practical, context-aware platforms built for African realities.
          </p>
        </motion.div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`rounded-2xl border-2 p-7 flex flex-col transition-all duration-300 hover:shadow-lg group cursor-pointer ${
                  platform.highlight
                    ? "bg-primary border-primary text-white"
                    : "bg-white border-border hover:border-primary/40"
                }`}
                onClick={scrollToContact}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      platform.highlight
                        ? "bg-white/15"
                        : "bg-primary/10 group-hover:bg-primary/20 transition-colors"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        platform.highlight ? "text-accent" : "text-primary"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      platform.highlight
                        ? "bg-accent/20 text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {platform.tag}
                  </span>
                </div>
                <h3
                  className={`text-lg font-bold mb-3 ${
                    platform.highlight
                      ? "text-white"
                      : "text-foreground group-hover:text-primary transition-colors"
                  }`}
                >
                  {platform.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed flex-1 ${
                    platform.highlight ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {platform.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* How we build + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Build process */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              How we build
            </h3>
            <div className="space-y-6">
              {buildProcess.map((item, index) => (
                <div key={item.step} className="flex gap-5">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-xs">
                      {item.step}
                    </div>
                    {index < buildProcess.length - 1 && (
                      <div className="w-0.5 h-6 bg-primary/20 mt-2" />
                    )}
                  </div>
                  <div className="pt-1.5">
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-2">
              {[
                "Mobile-first, offline-capable where needed",
                "Built for low-bandwidth African markets",
                "Open to handover or ongoing support contracts",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-10 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">
              Have a platform in mind?
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Whether you need a simple data collection tool or a full innovation management system, we scope it honestly, build it well, and make sure your team can run it.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Free discovery call to scope your idea
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Fixed-price or milestone-based billing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">✓</span> Training and documentation included
              </li>
            </ul>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full"
              onClick={scrollToContact}
            >
              Discuss Your Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
