import { Section } from "../components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { CTA } from "../components/CTA";
import { Pipeline } from "../components/Pipeline";
import { Lightbulb, Globe, Target, TrendingUp, CheckCircle, Zap } from "lucide-react";

const systemsPrinciples = [
  {
    icon: Lightbulb,
    title: "Innovation as Systems Design",
    description: "Innovation is not about individual breakthroughs—it's about designing repeatable processes and scalable platforms that produce consistent outcomes."
  },
  {
    icon: Globe,
    title: "Local Infrastructure First",
    description: "Imported models fail without local systems. We build foundational infrastructure that enables sustainable innovation ecosystems rooted in local context."
  },
  {
    icon: Target,
    title: "The Pipeline: From Potential to Investment",
    description: "Our 6-stage pipeline (Source → Train → Validate → Build → Prepare → Connect) systematically transforms raw potential into investment-ready ventures."
  },
  {
    icon: TrendingUp,
    title: "Regional Transformation",
    description: "Building innovation infrastructure across East Africa that connects talent, institutions, and capital into functioning ecosystems, not isolated projects."
  }
];

const focusAreas = [
  {
    title: "FinTech Systems",
    description: "Structured financial innovation ecosystems",
    focus: ["Digital lending infrastructure", "Payment systems", "Insurance innovation", "Regulatory integration"],
    outcome: "Validated financial services ventures, measurable transaction volume"
  },
  {
    title: "AgriTech Systems",
    description: "Agricultural value chain transformation",
    focus: ["Supply chain infrastructure", "Market connectivity", "Quality assurance systems", "Farmer networks"],
    outcome: "Income increase for farmers, reduced post-harvest losses, market access"
  },
  {
    title: "HealthTech Systems",
    description: "Healthcare delivery modernization",
    focus: ["Telemedicine platforms", "Health data infrastructure", "Resource management", "Provider networks"],
    outcome: "Improved patient outcomes, institutional capacity, measurable coverage"
  }
];

export default function InnovationPage() {
  return (
    <main>
      {/* Hero */}
      <Section
        title="Systems thinking drives lasting innovation"
        description="We build the infrastructure that enables continuous innovation, not just individual projects."
        className="bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground">
            Innovation requires more than great ideas—it requires systems. Structured processes, scalable platforms, 
            community participation, and institutional support that work together to produce measurable, repeatable outcomes.
          </p>
        </div>
      </Section>

      {/* Philosophy */}
      <Section title="Our Systems Approach">
        <div className="grid md:grid-cols-2 gap-6">
          {systemsPrinciples.map((principle) => (
            <Card key={principle.title}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <principle.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pipeline */}
      <Section
        title="The Innovation Pipeline"
        description="Our systematic approach to transforming potential into outcome."
        className="bg-muted/30"
      >
        <Pipeline />
      </Section>

      {/* Focus Areas */}
      <Section title="Where We Build Systems">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area) => (
            <Card key={area.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{area.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">System Components</h4>
                  <div className="flex flex-wrap gap-1">
                    {area.focus.map((item) => (
                      <Badge key={item} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm text-muted-foreground">
                    <strong>Outcomes:</strong> {area.outcome}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* What Systems Produce */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">What Systems Produce</h2>
          <div className="space-y-4">
            {[
              "Validated ventures that attract capital and scale",
              "Measurable economic activity—jobs, revenue, transactions",
              "Institutional capacity—policies, processes, infrastructure",
              "Community participation in designing and running programs",
              "Repeatable processes that produce consistent outcomes"
            ].map((item, i) => (
              <div key={item} className="flex items-start gap-4 p-4 bg-background rounded-lg border">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <CTA
          title="Ready to build innovation systems?"
          description="Partner with us to design and execute systems that produce lasting, measurable outcomes."
          primaryLabel="Partner With Us"
          primaryTarget="/contact"
          secondaryLabel="See Our Services"
          secondaryTarget="/services"
        />
      </div>
    </main>
  );
}
