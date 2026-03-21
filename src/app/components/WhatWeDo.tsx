import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Lightbulb, Users, Laptop, FileText, Zap, Sparkles } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Innovation Programs",
    description:
      "Incubators, acceleration tracks, and mentorship that turn raw ideas into market-ready businesses.",
    color: "text-accent",
    bg: "bg-accent/10 group-hover:bg-accent/20",
  },
  {
    icon: Users,
    title: "Advisory & Consulting",
    description:
      "We partner with governments, NGOs, and development organizations to design entrepreneurship and innovation programs that deliver results.",
    color: "text-secondary",
    bg: "bg-secondary/10 group-hover:bg-secondary/20",
  },
  {
    icon: Zap,
    title: "Hackathon Design & Delivery",
    description:
      "We design and run end-to-end hackathons, covering challenge framing, participant recruitment, facilitation, judging, and post-event follow-through.",
    color: "text-primary",
    bg: "bg-primary/10 group-hover:bg-primary/20",
  },
  {
    icon: Sparkles,
    title: "Innovation as a Service",
    description:
      "No internal innovation team? We become yours. We deploy, manage, and report on full innovation programs on your behalf.",
    color: "text-accent-foreground",
    bg: "bg-accent/10 group-hover:bg-accent/20",
  },
  {
    icon: Laptop,
    title: "Technology & Platforms",
    description:
      "We build digital tools that power entrepreneurs, businesses, and community initiatives across East Africa.",
    color: "text-primary",
    bg: "bg-primary/10 group-hover:bg-primary/20",
  },
  {
    icon: FileText,
    title: "Research & Insights",
    description:
      "We produce practical insights that strengthen innovation ecosystems and drive local economic development.",
    color: "text-secondary",
    bg: "bg-secondary/10 group-hover:bg-secondary/20",
  },
];

export function WhatWeDo() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            How We Turn Ideas Into Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From startup incubation to full-service innovation programs, we give organizations the tools, people, and processes to move fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card
                  className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                  onClick={scrollToContact}
                >
                  <CardContent className="p-8">
                    <div className="mb-5">
                      <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center transition-colors duration-300`}>
                        <Icon className={`h-7 w-7 ${service.color}`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
