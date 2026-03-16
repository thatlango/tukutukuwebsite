import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";

const stories = [
  {
    title: "Founder stories",
    excerpt:
      "This week at the lab: 10 founders, one goal — building the future.",
  },
  {
    title: "Program highlights",
    excerpt:
      "New cohorts are turning local challenges into practical ventures.",
  },
  {
    title: "Innovation insights",
    excerpt:
      "Lessons from Northern Uganda that can shape ecosystems across Africa.",
  },
];

export function StoriesSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What's Happening at Tuku-Tuku
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group cursor-pointer">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {story.excerpt}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}