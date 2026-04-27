import { Section } from "./Section";

const services = [
  {
    name: "MSME Capacity Building",
    what: "Structured training and venture support programs for entrepreneurs and small businesses.",
    who: "Startups, MSMEs, youth founders, and women-led enterprises.",
    outcomes: "Improved business fundamentals, market readiness, and growth execution.",
  },
  {
    name: "Digital Products",
    what: "Practical digital platforms for tracking, learning, and venture support operations.",
    who: "Programs, institutions, and ecosystem actors needing operating infrastructure.",
    outcomes: "Better visibility, stronger coordination, and measurable program performance.",
  },
  {
    name: "Consulting",
    what: "Program design, implementation systems, MEL integration, and partner delivery support.",
    who: "Donors, INGOs, government agencies, and development partners.",
    outcomes: "Lower delivery risk, clearer accountability, and stronger execution quality.",
  },
  {
    name: "Learning Systems",
    what: "Curriculum and institutional learning models built for scale and context-fit.",
    who: "Universities, TVETs, public institutions, and training networks.",
    outcomes: "Repeatable learning infrastructure embedded into local institutions.",
  },
];

export function ServicesOverview() {
  return (
    <Section
      id="services"
      eyebrow="Our Services"
      title="What Service We Offer"
      description="Each service is designed as infrastructure: clear purpose, clear users, and clear outcomes."
    >
      <div className="grid md:grid-cols-2 gap-5">
        {services.map((service) => (
          <article key={service.name} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl font-bold text-primary mb-3">{service.name}</h3>
            <p className="text-sm mb-2"><span className="font-semibold">What it is:</span> {service.what}</p>
            <p className="text-sm mb-2"><span className="font-semibold">Who it&apos;s for:</span> {service.who}</p>
            <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Outcomes:</span> {service.outcomes}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
