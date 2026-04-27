import { Section } from "../components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { CTA } from "../components/CTA";

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero */}
      <Section
        title="Proof of systems in action"
        className="bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground">
            Real outcomes from real projects. We focus on outcomes, not activity.
            Each case demonstrates how structured systems produce real economic and social impact.
          </p>
        </div>
      </Section>

      {/* Case Study Structure */}
      <Section title="How We Structure Case Studies">
        <div className="max-w-3xl space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Problem</h3>
            <p className="text-muted-foreground">What challenge existed in the ecosystem or institution</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Intervention</h3>
            <p className="text-muted-foreground">What system, program, or platform was designed and implemented</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Outcome</h3>
            <p className="text-muted-foreground">Measured results including ventures, jobs, institutional change, and community impact</p>
          </div>
        </div>
      </Section>

      {/* Example Cases */}
      <Section title="Featured Cases" className="bg-muted/30">
        <div className="max-w-3xl">
          <p className="text-muted-foreground text-center mb-8">
            Coming soon. Case studies showcasing systems that produce measurable outcomes.
          </p>
          <Card className="text-center">
            <CardContent className="pt-8">
              <p className="text-muted-foreground mb-4">
                We're documenting detailed case studies of innovation systems, programs, and platforms that have produced measurable impact.
              </p>
              <p className="text-sm text-muted-foreground">
                Each case will show the problem we addressed, the system we built, and the outcomes produced.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <CTA
          title="Ready to create your success story?"
          description="Partner with us to design and execute systems that produce measurable, repeatable impact."
          primaryLabel="Work With Us"
          primaryTarget="/contact"
          secondaryLabel="View Our Services"
          secondaryTarget="/services"
        />
      </div>
    </main>
  );
}
