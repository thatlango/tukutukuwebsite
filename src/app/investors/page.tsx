import { InvestorsHighlight } from "../components/InvestorsHighlight";
import { PipelineSection } from "../components/PipelineSection";
import { Section } from "../components/Section";
import { CTA } from "../components/CTA";

export default function InvestorsPage() {
  return (
    <main>
      <Section
        eyebrow="Investors & Partners"
        title="Access curated, investment-ready opportunities"
        description="We reduce early-stage risk by sourcing, training, validating, and preparing ventures before investor engagement."
      >
        <div className="grid md:grid-cols-2 gap-5">
          <article className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-primary mb-2">The problem</h3>
            <p className="text-sm text-muted-foreground">Fragmented ecosystems and unvalidated startups make early-stage discovery expensive and risky.</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-primary mb-2">Our solution</h3>
            <p className="text-sm text-muted-foreground">Pre-filtered pipeline, venture readiness systems, and local execution support before and after funding.</p>
          </article>
        </div>
      </Section>
      <PipelineSection />
      <InvestorsHighlight />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CTA
          title="Reduce due diligence burden with a trusted local pipeline partner"
          description="Work with us to access vetted opportunities and reliable implementation support."
          primaryLabel="Access Pipeline"
          primaryTarget="/contact"
          secondaryLabel="Fund a Program"
          secondaryTarget="/contact"
        />
      </div>
    </main>
  );
}
