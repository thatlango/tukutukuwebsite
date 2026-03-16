import { motion } from "motion/react";

export function TrustSection() {
  const partners = [
    "Partner Logo",
    "Partner Logo",
    "Partner Logo",
    "Partner Logo",
    "Partner Logo",
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl text-foreground/80 mb-4">
            Working with entrepreneurs, communities, and development partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We collaborate with institutions and implement programs that create
            practical economic opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 mt-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="px-6 py-4 bg-white border border-border rounded-lg text-muted-foreground/60 hover:text-foreground hover:border-primary/30 transition-all duration-300 text-sm font-medium"
            >
              {partner}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}