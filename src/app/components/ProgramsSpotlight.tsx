import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Rocket, Zap, BookOpen, Users } from "lucide-react";

const programs = [
  {
    icon: Rocket,
    title: "Startup Incubation",
    description:
      "Validate your idea and build real traction. Get mentorship, workspace, and the connections to take your venture from concept to customers.",
    tag: "6-month program",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Zap,
    title: "Innovation Challenges & Hackathons",
    description:
      "Focused sprints that turn real problems into tested solutions. Compete, collaborate, and ship a working prototype in 48-72 hours.",
    tag: "Open applications",
    color: "bg-accent/10 text-accent-foreground",
  },
  {
    icon: BookOpen,
    title: "MSME Training Programs",
    description:
      "Hands-on workshops that sharpen operations and unlock growth for small and medium enterprises across Uganda and East Africa.",
    tag: "Rolling enrollment",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Users,
    title: "Mentorship Networks",
    description:
      "Founder-focused guidance from operators and ecosystem leaders who've built businesses in Africa. Get matched with a mentor who gets it.",
    tag: "Year-round",
    color: "bg-primary/10 text-primary",
  },
];

export function ProgramsSpotlight() {
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
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            Our Programs
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Programs That Help Builders Grow
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            You've got the idea. We've got the tools, mentors, and community to
            help you grow it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group cursor-pointer">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${program.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded-full self-start">
                        {program.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <button
                      onClick={scrollToContact}
                      className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all duration-200"
                    >
                      Apply Now <ArrowRight className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
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
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 font-semibold shadow-lg"
            onClick={scrollToContact}
          >
            Apply to a Program
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Not sure which program fits? <button onClick={scrollToContact} className="text-primary font-medium hover:underline">Talk to us</button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
