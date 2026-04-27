import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Tuku-Tuku gave me the structure and mentorship to turn my agriculture idea into a real business. I went from zero to 50 customers in 3 months.",
    name: "Grace Aloyo",
    role: "Founder, FreshRoute Uganda",
    cohort: "Incubation Cohort 3",
    stars: 5,
  },
  {
    quote:
      "The Innovation Challenge connected me with a co-founder and funding I never thought I'd access from Gulu. This team genuinely cares about the communities they serve.",
    name: "David Okello",
    role: "CEO, BuildSmart Technologies",
    cohort: "Innovation Challenge 2024",
    stars: 5,
  },
  {
    quote:
      "As a development partner, working with Tuku-Tuku gave us real reach into communities. Their local knowledge and execution capability are unmatched in the region.",
    name: "Sarah Müller",
    role: "Program Officer, GIZ Uganda",
    cohort: "Development Partner",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-primary text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-semibold">
            What Our Clients Saying
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            What Our Clients Saying
          </h2>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            From first-time founders to international development organizations, here's what they say about working with Tuku-Tuku.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-accent mb-4 opacity-80" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-white/90 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="border-t border-white/20 pt-5">
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-white/65 text-sm mt-0.5">{t.role}</p>
                <span className="inline-block mt-2 text-xs text-accent/80 bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">
                  {t.cohort}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
