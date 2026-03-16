import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Startup incubation",
    description:
      "Early-stage support to validate ideas and build traction.",
  },
  {
    title: "Innovation challenges and hackathons",
    description:
      "Structured sprints that turn local challenges into tested solutions.",
  },
  {
    title: "MSME training programs",
    description:
      "Practical workshops that strengthen operations and growth readiness.",
  },
  {
    title: "Mentorship networks",
    description:
      "Founder-focused guidance from operators and ecosystem leaders.",
  },
];

export function ProgramsSpotlight() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Programs That Help Builders Grow
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            You've got the idea. We've got the tools, mentors, and community to
            help you grow it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group cursor-pointer">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
          >
            Explore Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}