import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Search, PenTool, Play, BarChart3, Building, Globe, HeartHandshake, Landmark } from "lucide-react";

const phases = [
  {
    icon: Search,
    title: "Diagnose",
    description: "We assess your organization's innovation goals, ecosystem context, and the problem space you want to address.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "We build a custom innovation program — incubator, accelerator, challenge fund, or hybrid — tailored to your objectives and budget.",
  },
  {
    icon: Play,
    title: "Deploy",
    description: "We execute on your behalf: recruit, select, train, mentor, and support participants through every stage of the program.",
  },
  {
    icon: BarChart3,
    title: "Report",
    description: "You get clear impact data — businesses supported, jobs created, revenue generated — ready for your board, donors, or stakeholders.",
  },
];

const clients = [
  { icon: Building, label: "Corporate Foundations", desc: "CSR & shared value programs" },
  { icon: Globe, label: "Development Agencies", desc: "USAID, GIZ, Enabel, UN bodies" },
  { icon: Landmark, label: "Government Ministries", desc: "Youth, trade, and ICT departments" },
  { icon: HeartHandshake, label: "NGOs & Foundations", desc: "Mission-aligned innovation investment" },
];

const offerings = [
  "Fully managed startup incubators",
  "Accelerator program design & delivery",
  "Challenge fund administration",
  "Startup scouting & due diligence",
  "Mentor network coordination",
  "Impact measurement & reporting",
  "Ecosystem mapping & analysis",
  "Demo days & investor showcases",
];

export function InnovationAsAService() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="iaas" className="py-20 lg:py-32 bg-foreground text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-widest text-accent font-semibold">
              Innovation as a Service
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-5 leading-tight">
              Don't have an innovation team?{" "}
              <span className="text-accent">We become yours.</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Organizations across East Africa hire Tuku-Tuku to design, launch, and manage full innovation programs on their behalf — from scoping to final impact report.
            </p>
            <p className="text-white/65 leading-relaxed text-sm">
              With nearly a decade of on-the-ground experience since 2016, we bring the ecosystem knowledge, program infrastructure, community networks, and proven methodologies so your organization can deliver real innovation outcomes without building the capability from scratch.
            </p>
          </motion.div>

          {/* Who it's for */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {clients.map((client) => {
              const Icon = client.icon;
              return (
                <div
                  key={client.label}
                  className="bg-white/8 border border-white/15 rounded-xl p-5 hover:bg-white/12 transition-colors"
                >
                  <Icon className="h-6 w-6 text-accent mb-3" />
                  <p className="font-semibold text-sm text-white mb-1">{client.label}</p>
                  <p className="text-white/55 text-xs">{client.desc}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-10">How it works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Connector line */}
                  {index < phases.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[calc(100%-12px)] w-6 h-0.5 bg-accent/30 z-10"></div>
                  )}
                  <div className="bg-white/8 border border-white/15 rounded-xl p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-accent/60 text-xs font-bold uppercase tracking-widest">Step {index + 1}</span>
                    <h4 className="font-bold text-white text-lg mt-1 mb-2">{phase.title}</h4>
                    <p className="text-white/65 text-sm leading-relaxed">{phase.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* What's included + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-5">What's included in IaaS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {offerings.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-accent/10 border border-accent/25 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-3">
              Let's scope your program
            </h3>
            <p className="text-white/75 text-sm leading-relaxed mb-6">
              Every IaaS engagement starts with a free scoping conversation. Tell us your goals, budget, and timeline — we'll show you what's possible.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-white/70">
              <li className="flex items-center gap-2"><span className="text-accent">✓</span> No long-term lock-in required</li>
              <li className="flex items-center gap-2"><span className="text-accent">✓</span> Flexible engagement models</li>
              <li className="flex items-center gap-2"><span className="text-accent">✓</span> Full reporting for donors & boards</li>
            </ul>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full"
              onClick={scrollToContact}
            >
              Talk to Us About IaaS
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
