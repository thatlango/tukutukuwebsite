import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router";

export default function AboutPage() {
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
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">About Us</p>
            <h1 className="font-black text-white text-4xl lg:text-6xl mb-4">We Build What Stays</h1>
            <p className="text-white/65 text-lg max-w-xl">
              Innovation systems that produce measurable, repeatable outcomes across East Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Who We Are</p>
              <h2 className="font-black text-3xl lg:text-4xl text-primary mb-5">
                A Consulting &amp; Implementation Firm
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Based in Gulu, Uganda — we design and execute innovation systems that strengthen
                institutions, enable entrepreneurs, and produce measurable economic outcomes.
              </p>
              <div className="space-y-3">
                {[
                  "Innovation must be structured to produce outcomes",
                  "Programs designed for execution, not just activity",
                  "Systems matter more than isolated interventions",
                  "Communities must be integrated, not just served",
                  "Economic impact must be measurable and repeatable",
                ].map((belief) => (
                  <div
                    key={belief}
                    className="border border-border bg-surface rounded-xl p-3 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-semibold">{belief}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "1200+", label: "Entrepreneurs" },
                  { num: "50+", label: "Programs" },
                  { num: "80+", label: "Communities" },
                  { num: "16+", label: "Years" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-primary p-8 text-center">
                    <p className="text-accent font-black text-3xl mb-1">{stat.num}</p>
                    <p className="text-white/70 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
                alt="Team at work"
                className="rounded-2xl h-44 w-full object-cover mt-4"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: How We Work */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="font-black text-3xl lg:text-4xl text-primary">Our Process</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { num: "01", label: "Design Systems" },
              { num: "02", label: "Build Programs" },
              { num: "03", label: "Implement in the Field" },
              { num: "04", label: "Engage Communities" },
              { num: "05", label: "Measure Outcomes" },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                className="bg-white rounded-2xl p-6 text-center border border-border shadow-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-10 h-10 bg-primary text-white rounded-full font-black text-sm flex items-center justify-center mx-auto mb-3">
                  {step.num}
                </div>
                <p className="font-black text-sm text-primary">{step.label}</p>
              </motion.div>
            ))}
          </div>
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
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Partner With Us</p>
            <h2 className="font-black text-white text-3xl lg:text-5xl mb-8">
              Let's build systems that work
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-primary font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Work With Us <ArrowRight className="w-4 h-4" />
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
