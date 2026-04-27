import { Section } from "../components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle } from "lucide-react";
import { CTA } from "../components/CTA";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <Section
        title="We build what stays"
        className="bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground">
            Innovation systems that produce measurable, repeatable outcomes.
          </p>
        </div>
      </Section>

      {/* Who We Are */}
      <Section title="Who We Are">
        <div className="max-w-3xl space-y-6">
          <p className="text-lg text-muted-foreground">
            Tuku-Tuku is a consulting and implementation firm that designs and executes innovation systems that strengthen institutions, enable entrepreneurs, and produce measurable economic outcomes.
          </p>
          <p className="text-lg text-muted-foreground">
            We work across strategy, program design, implementation, digital platforms, and ecosystem development.
          </p>
        </div>
      </Section>

      {/* What We Believe */}
      <Section title="What We Believe" className="bg-muted/30">
        <div className="max-w-3xl space-y-3">
          {[
            "Innovation must be structured to produce outcomes",
            "Programs must be designed for execution, not activity",
            "Systems matter more than isolated interventions",
            "Communities must be integrated into innovation systems",
            "Economic impact must be measurable and repeatable"
          ].map((belief) => (
            <div key={belief} className="flex items-start gap-3 p-4 bg-background rounded-lg border">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="font-medium">{belief}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How We Work */}
      <Section title="How We Work">
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {[
            "Design Systems",
            "Build Programs",
            "Implement in Real Environments",
            "Support Communities",
            "Measure Outcomes"
          ].map((step, index) => (
            <div key={step}>
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <p className="font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <CTA
          title="Let's build systems that work"
          description="Partner with us to design and implement innovation that produces real outcomes."
          primaryLabel="Work With Us"
          primaryTarget="/contact"
          secondaryLabel="View Our Services"
          secondaryTarget="/services"
        />
      </div>
    </main>
  );
}
