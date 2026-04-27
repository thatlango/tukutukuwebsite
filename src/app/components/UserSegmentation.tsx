import { Section } from "./Section";

const segments = [
  {
    title: "Development Partners",
    need: "Program design, MEL, and accountable implementation.",
    outcome: "Structured delivery systems with measurable outcomes and reporting.",
  },
  {
    title: "Startups & MSMEs",
    need: "Practical training, mentorship, and market readiness.",
    outcome: "Validated ventures with stronger operations and growth pathways.",
  },
  {
    title: "Institutions",
    need: "Curriculum, labs, and innovation systems that can scale.",
    outcome: "Embedded programs that continue running beyond project cycles.",
  },
  {
    title: "Investors & Partners",
    need: "Vetted pipeline and reduced early-stage risk.",
    outcome: "Access to trained, validated, and investment-ready ventures.",
  },
];

export function UserSegmentation() {
  return (
    <Section
      id="who-we-serve"
      eyebrow="Who We Serve"
      title="Built for the people who deploy capital, run institutions, and scale ventures"
      description="We don't run one-off activities. We build systems each stakeholder can use to deliver real, repeatable outcomes."
      className="bg-muted/30"
    >
      <div className="grid md:grid-cols-2 gap-5">
        {segments.map((segment) => (
          <article key={segment.title} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl font-bold text-primary mb-2">{segment.title}</h3>
            <p className="text-sm text-foreground mb-2">
              <span className="font-semibold">Need:</span> {segment.need}
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Outcome:</span> {segment.outcome}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
