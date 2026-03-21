import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, Calendar } from "lucide-react";

const stories = [
  {
    category: "Founder Story",
    categoryColor: "bg-primary/10 text-primary",
    title: "Founder stories",
    excerpt:
      "This week at the lab: 10 founders, one goal — building the future of food systems in Northern Uganda.",
    date: "March 2026",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=70",
    readTime: "4 min read",
  },
  {
    category: "Program Highlight",
    categoryColor: "bg-accent/15 text-accent-foreground",
    title: "Program highlights",
    excerpt:
      "New cohorts are turning local challenges into practical ventures. See how our latest batch tackled water access and agri-logistics.",
    date: "February 2026",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=70",
    readTime: "6 min read",
  },
  {
    category: "Innovation Insight",
    categoryColor: "bg-secondary/10 text-secondary",
    title: "Innovation insights",
    excerpt:
      "Lessons from Northern Uganda that can shape innovation ecosystems across Africa. What we've learned after 45+ programs since 2016.",
    date: "January 2026",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=70",
    readTime: "8 min read",
  },
];

export function StoriesSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            Latest News
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            What's Happening at Tuku-Tuku
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stories, programs, and insights from the heart of Northern Uganda's innovation ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group cursor-pointer overflow-hidden">
                {/* Story image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${story.categoryColor} bg-white/90`}>
                    {story.category}
                  </span>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {story.date}
                    </span>
                    <span>·</span>
                    <span>{story.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                    {story.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
                    Read more <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground">
            Want to share your story?{" "}
            <button
              onClick={scrollToContact}
              className="text-primary font-semibold hover:underline"
            >
              Get in touch with us →
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
