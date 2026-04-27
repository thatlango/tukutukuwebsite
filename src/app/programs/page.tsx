import { Section } from "../components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { CTA } from "../components/CTA";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router";

export default function ProgramsPage() {
  return (
    <main>
      {/* Hero */}
      <Section
        title="Programs are structured systems, not training activities"
        className="bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground">
            We design and run programs that move participants through structured stages of 
            venture development, capacity building, and ecosystem participation.
          </p>
        </div>
      </Section>

      {/* Overview */}
      <Section title="Our Approach">
        <div className="max-w-3xl space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">We work across all stages of innovation</h3>
            <p className="text-muted-foreground">From idea generation to investment readiness, our programs are designed to produce measurable outcomes.</p>
          </div>
        </div>
      </Section>

      {/* Program Structure */}
      <Section title="Program Structure" className="bg-muted/30">
        <div className="max-w-3xl">
          <p className="text-muted-foreground mb-8">Each program includes:</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Defined duration",
              "Target participants",
              "Structured phases of execution",
              "Community engagement systems",
              "Venture development process",
              "Outcome measurement system"
            ].map((item) => (
              <Card key={item}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="font-medium">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Outcomes */}
      <Section title="Outcomes We Produce">
        <div className="max-w-3xl">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Validated ventures",
              "Investment ready startups",
              "Skilled entrepreneurs",
              "Institutional capability improvement",
              "Active community participation in innovation systems"
            ].map((outcome) => (
              <div key={outcome} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg border">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <CTA
          title="Ready to launch or join a program?"
          description="Let's discuss your goals and how structured programs can help achieve them."
          primaryLabel="Apply or Partner"
          primaryTarget="/contact"
          secondaryLabel="View Services"
          secondaryTarget="/services"
        />
      </div>
    </main>
  );
}
