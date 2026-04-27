import { Section } from "./Section";

const studies = [
  {
    name: "University Venture Labs Rollout",
    problem: "Universities had entrepreneurship clubs but no consistent venture pipeline system.",
    intervention:
      "Designed and deployed a structured campus-to-market venture lab model with facilitator training and tracking tools.",
    results: "3 universities adopted the model; 210 ventures progressed through validation; 48 reached investment readiness.",
    stage: "Pipeline stage reached: Validate → Build → Prepare",
  },
  {
    name: "MSME Accelerator for Post-Conflict Districts",
    problem: "MSMEs lacked operational systems and market linkage support.",
    intervention:
      "Implemented cohort-based training, mentor pairing, and light-touch operational diagnostics with field support.",
    results: "160 MSMEs supported; 72% reported revenue growth within 6 months; 35 formal supplier contracts secured.",
    stage: "Pipeline stage reached: Train → Validate → Build",
  },
  {
    name: "Partner Delivery Platform",
    problem: "Multi-partner programs struggled with fragmented reporting and low execution visibility.",
    intervention:
      "Built a digital implementation dashboard for cohort tracking, milestone monitoring, and partner reporting.",
    results: "500+ ventures tracked; reporting cycle time reduced by 40%; partner decision-making turnaround improved.",
    stage: "Pipeline stage reached: Build → Prepare → Connect",
  },
];

export function CaseStudiesSection() {
  return (
    <Section
      id="case-studies"
      eyebrow="Case Studies"
      title="Proof over promises"
      description="Each case shows the same structure: the problem, our intervention, and measurable results."
      className="bg-muted/30"
    >
      <div className="grid lg:grid-cols-3 gap-5">
        {studies.map((study) => (
          <article key={study.name} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl font-bold text-primary mb-3">{study.name}</h3>
            <p className="text-sm mb-2"><span className="font-semibold">Problem:</span> {study.problem}</p>
            <p className="text-sm mb-2"><span className="font-semibold">Intervention:</span> {study.intervention}</p>
            <p className="text-sm mb-3 text-muted-foreground"><span className="font-semibold text-foreground">Results:</span> {study.results}</p>
            <p className="text-xs uppercase tracking-wider text-primary font-semibold">{study.stage}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
