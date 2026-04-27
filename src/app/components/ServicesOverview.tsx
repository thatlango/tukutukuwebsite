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
      title="Boost your brand with our expertise"
      description="We deliver practical systems and programs that turn ideas into measurable results for founders, institutions, and partners."
      className="bg-[#e9f6ed]"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        <article className="rounded-[2rem] border border-border bg-white p-8 shadow-sm">
          <h3 className="text-xl font-bold text-primary mb-4">MSME Capacity Building</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Structured training and venture support programs for entrepreneurs and small businesses.
          </p>
        </article>

        <article className="rounded-[2rem] border border-primary bg-primary text-white p-8 shadow-xl">
          <h3 className="text-xl font-bold mb-4">Digital Products</h3>
          <p className="text-sm leading-relaxed text-white/90 mb-6">
            Practical digital platforms for tracking, learning, and venture support operations.
          </p>
          <p className="text-sm text-white/80">
            Better visibility, stronger coordination, and measurable program performance.
          </p>
        </article>

        <article className="rounded-[2rem] border border-border bg-white p-8 shadow-sm">
          <h3 className="text-xl font-bold text-primary mb-4">Consulting & Learning</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Program design, MEL integration, and learning systems built for scale and context fit.
          </p>
        </article>
      </div>
    </Section>
  );
}
