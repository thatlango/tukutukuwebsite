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
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          <article className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-primary mb-2">The Problem</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Fragmented ecosystem</li>
              <li>• High investment risk</li>
              <li>• Lack of structured deal flow</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-primary mb-2">Our Solution</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Vetted pipeline</li>
              <li>• Trained founders</li>
              <li>• Validated ventures</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-primary mb-2">Investor Value</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Reduced due diligence burden</li>
              <li>• Local execution partner</li>
              <li>• Continuous venture monitoring</li>
            </ul>
          </article>
        </div>
      </Section>
      <PipelineSection />
      <InvestorsHighlight />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CTA
          title="Reduce due diligence burden with a trusted local pipeline partner"
          description="Work with us to access vetted opportunities and reliable implementation support."
          primaryLabel="Partner With Us"
          primaryTarget="/contact"
          secondaryLabel="Access Pipeline"
          secondaryTarget="/contact"
        />
      </div>
    </main>
  );
}
