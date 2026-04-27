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

  const categories = [
    "Program Design",
    "Venture Building",
    "Innovation Systems",
    "Investment Readiness",
    "Partner Delivery",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[1fr_0.8fr] items-center"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
              Trusted by leading organizations
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Backed by trusted institutions. Powered by local impact.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We partner with global and local actors to deploy programs that strengthen innovation ecosystems with measurable outcomes.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-border bg-primary/5 p-5">
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary whitespace-nowrap"
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-border bg-white/90 p-5 text-center shadow-sm"
                >
                  <p className="text-base font-semibold text-foreground">{partner.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
                    {partner.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
