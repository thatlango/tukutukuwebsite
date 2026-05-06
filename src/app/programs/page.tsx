import { motion } from "motion/react";
import { ArrowRight, CheckCircle, Calendar, Users, BarChart3, Target, Zap } from "lucide-react";
import { Link } from "react-router";

export default function ProgramsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Our Programs</p>
            <h1 className="font-black text-white text-4xl lg:text-6xl mb-4 whitespace-pre-line">
              {"Programs Are Systems,\nNot Training Events"}
            </h1>
            <p className="text-white/65 text-lg max-w-xl">
              Structured stages of venture development and capacity building — designed for measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Outcomes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">What We Produce</p>
            <h2 className="font-black text-3xl lg:text-4xl text-primary">Outcomes, Not Activities</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: "210+", label: "Validated ventures" },
              { num: "1,200+", label: "Entrepreneurs trained" },
              { num: "72%", label: "Revenue growth rate" },
              { num: "48", label: "Investment-ready startups" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl bg-primary p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <p className="text-accent font-black text-3xl mb-1">{stat.num}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Program Structure */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Program Structure</p>
            <h2 className="font-black text-3xl lg:text-4xl text-primary">Every Program Includes</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Calendar className="w-5 h-5 text-primary" />,
                title: "Defined Duration",
                desc: "Set timelines with clear delivery milestones",
              },
              {
                icon: <Users className="w-5 h-5 text-primary" />,
                title: "Target Participants",
                desc: "Entrepreneurs, MSMEs, or institutions",
              },
              {
                icon: <BarChart3 className="w-5 h-5 text-primary" />,
                title: "Structured Phases",
                desc: "Source → Train → Validate → Build",
              },
              {
                icon: <Target className="w-5 h-5 text-primary" />,
                title: "Outcome Measurement",
                desc: "Tracked metrics at every program stage",
              },
              {
                icon: <CheckCircle className="w-5 h-5 text-primary" />,
                title: "Community Engagement",
                desc: "Active participation built into delivery",
              },
              {
                icon: <Zap className="w-5 h-5 text-primary" />,
                title: "Venture Development",
                desc: "Idea to validation to investment readiness",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="rounded-2xl border border-border shadow-card hover:shadow-panel transition-shadow bg-white p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="font-black text-primary mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Pipeline Stages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Pipeline Stages</p>
            <h2 className="font-black text-3xl lg:text-4xl text-primary">From Idea to Investment</h2>
          </motion.div>
          <motion.div
            className="rounded-2xl bg-surface border border-border p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-4 items-center">
              {["Source", "Train", "Validate", "Build", "Prepare", "Connect"].map((stage, i) => (
                <div key={stage} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-white rounded-full text-sm font-black flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="font-bold text-primary">{stage}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Get Involved</p>
            <h2 className="font-black text-white text-3xl lg:text-5xl mb-8">
              Ready to launch or join a program?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-primary font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Apply or Partner <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
