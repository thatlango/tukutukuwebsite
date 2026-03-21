import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Megaphone, Users, Trophy, Rocket, Calendar, CheckCircle } from "lucide-react";

const process = [
  {
    step: "01",
    icon: Megaphone,
    title: "Challenge Design",
    description: "We work with you to frame the right problem, define success, and structure a compelling challenge that attracts the best participants.",
  },
  {
    step: "02",
    icon: Users,
    title: "Recruitment & Activation",
    description: "We mobilize participants — startups, students, professionals — from our community network across East Africa.",
  },
  {
    step: "03",
    icon: Calendar,
    title: "Full-Event Facilitation",
    description: "We run every element of the event: workshops, mentoring sessions, check-ins, and the pitch finale. You show up and engage.",
  },
  {
    step: "04",
    icon: Trophy,
    title: "Judging & Awards",
    description: "We coordinate judges, scoring, and prizes — ensuring a credible, transparent outcome that builds your brand.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Post-Event Follow-Through",
    description: "The best hackathons don't end on day two. We support winning teams with prototyping resources and next-step pathways.",
  },
];

const formats = [
  { label: "Corporate Innovation Sprints", desc: "Internal teams tackling business challenges" },
  { label: "Sector Hackathons", desc: "Agri, health, fintech, climate, education" },
  { label: "Community Problem-Solving Events", desc: "Open to local entrepreneurs and youth" },
  { label: "Government Innovation Challenges", desc: "Public sector service design and delivery" },
  { label: "University & Student Hackathons", desc: "STEM, business, and social innovation tracks" },
  { label: "Multi-Day Innovation Sprints", desc: "Deep-dive formats for complex problems" },
];

export function HackathonServices() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hackathons" className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-white to-accent/5">
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
            Hackathon Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            We Design & Run World-Class Hackathons
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Whether you're a government ministry, corporate, university, or NGO — we handle every detail of your hackathon so you can focus on what matters: the ideas and the people.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Process steps */}
          <div className="space-y-8">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    {index < process.length - 1 && (
                      <div className="w-0.5 h-8 bg-primary/20 mt-2"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="h-4 w-4 text-primary" />
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Formats + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border-2 border-border rounded-2xl p-8 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Hackathon formats we run
              </h3>
              <ul className="space-y-4">
                {formats.map((f) => (
                  <li key={f.label} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground text-sm">{f.label}</span>
                      <span className="text-muted-foreground text-sm"> — {f.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3">Ready to run your hackathon?</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Tell us your challenge, your audience, and your timeline — we'll design the rest. We've been running events since 2016, from 20 to 500+ participants.
              </p>
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full"
                onClick={scrollToContact}
              >
                Run a Hackathon With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
