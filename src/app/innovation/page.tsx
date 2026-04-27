import { HowWeBuildInnovation } from "../components/HowWeBuildInnovation";
import { PipelineSection } from "../components/PipelineSection";
import { Section } from "../components/Section";
import { CTA } from "../components/CTA";

export default function InnovationPage() {
  return (
    <main>
      <Section
        eyebrow="Innovation"
        title="What innovation means here"
        description="For Tuku-Tuku, innovation means building practical systems that keep producing outcomes long after a project ends."
      >
        <div className="grid md:grid-cols-2 gap-5">
          <article className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-primary mb-2">Why imported models fail</h3>
            <p className="text-sm text-muted-foreground">Many imported approaches ignore local infrastructure, institutional constraints, and execution realities. We design with context from day one.</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-primary mb-2">What we build</h3>
            <p className="text-sm text-muted-foreground">Training systems, digital platforms, venture pipelines, and ecosystem infrastructure used by real operators.</p>
          </article>
        </div>
      </Section>
      <HowWeBuildInnovation />
      <PipelineSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CTA
          title="Design innovation systems with us"
          description="If you are building ecosystem infrastructure in East Africa, we can help design and deploy with implementation rigor."
          primaryLabel="Work With Us"
          primaryTarget="/contact"
          secondaryLabel="Partner"
          secondaryTarget="/contact"
        />
      </div>
    </main>
  );
}
