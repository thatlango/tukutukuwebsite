import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Lightbulb, Users, Laptop, FileText } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Innovation Programs",
    description:
      "Incubators, startup acceleration tracks, and mentorship that help entrepreneurs grow their ideas into real businesses through practical business development support.",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Advisory & Consulting",
    description:
      "We work with governments, NGOs, and development organizations to design entrepreneurship and innovation programs that work.",
    color: "text-secondary",
  },
  {
    icon: Laptop,
    title: "Technology & Platforms",
    description:
      "We build digital tools that support entrepreneurs, businesses, and community initiatives.",
    color: "text-primary",
  },
  {
    icon: FileText,
    title: "Research & Insights",
    description:
      "We gather practical insights that help strengthen innovation ecosystems and local economic development.",
    color: "text-accent",
  },
];

export function WhatWeDo() {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We Turn Ideas Into Impact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className={`h-8 w-8 ${service.color}`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
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