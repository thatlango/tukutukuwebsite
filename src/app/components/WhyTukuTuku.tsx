import { motion } from "motion/react";
import { MapPin, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: MapPin,
    title: "Local insight",
    description: "Nearly a decade on the ground across Uganda and East Africa gives us insight no outsider can replicate.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Entrepreneur-first approach",
    description: "Our programs are designed around real founders and real challenges.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Lightbulb,
    title: "Practical innovation",
    description: "We focus on solutions that work in the real world.",
    color: "bg-accent/10 text-accent",
  },
];

export function WhyTukuTuku() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-white to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Rooted in Community. Built for Impact.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${value.color} flex items-center justify-center`}
                >
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}