import { motion } from "motion/react";

export function TrustSection() {
  const partners = [
    { name: "UNHCR", category: "UN Agency" },
    { name: "GIZ", category: "Development" },
    { name: "Makerere University", category: "Academia" },
    { name: "USAID", category: "Aid Agency" },
    { name: "Mastercard Foundation", category: "Foundation" },
    { name: "Enabel", category: "Cooperation" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold mb-3">
            Trusted by leading organizations
          </p>
          <h2 className="text-2xl sm:text-3xl text-foreground/80 mb-3">
            Backed by global organizations. Trusted by local communities.
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            We partner with leading institutions to deliver programs that create
            real economic opportunity across East Africa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 lg:gap-6"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="flex flex-col items-center px-6 py-4 bg-white border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 min-w-[120px]"
            >
              <span className="text-foreground font-bold text-base leading-tight">{partner.name}</span>
              <span className="text-muted-foreground text-xs mt-1">{partner.category}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
