import { Section } from "./components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Hero } from "./components/Hero";
import { Pipeline } from "./components/Pipeline";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { CTA } from "./components/CTA";
import { Users, Zap, TrendingUp, Users2 } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Development Partners",
    description: "We design and implement structured programs, systems, and monitoring frameworks that deliver measurable outcomes."
  },
  {
    icon: TrendingUp,
    title: "Institutions",
    description: "We build innovation systems, programs, and platforms that strengthen internal capacity and ecosystem performance."
  },
  {
    icon: Zap,
    title: "Startups and Entrepreneurs",
    description: "We support structured venture development from idea to validation to investment readiness."
  },
  {
    icon: Users2,
    title: "Investors",
    description: "We provide structured pipelines of validated and investment ready ventures."
  }
];

const coreValues = [
  { title: "Systems Over Activities", description: "Structured systems that produce repeatable outcomes, not isolated programs or events." },
  { title: "Execution Over Theory", description: "Delivery in real environments over conceptual design alone." },
  { title: "Outcomes Over Output", description: "Success through ventures, economic activity, and institutional change." },
  { title: "Community Embedded Innovation", description: "Systems that include communities as active participants, not passive recipients." },
  { title: "Clarity Over Complexity", description: "Simplified systems that can be understood, implemented, and scaled." }
];

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Who We Work With */}
      <Section
        title="Who We Work With"
        className="bg-muted/30"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => (
            <Card key={audience.title}>
              <CardHeader>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <audience.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{audience.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Community */}
      <Section
        title="Community"
        description="We work with and within communities to ensure innovation systems are grounded in real needs and real environments."
      >
        <div className="max-w-3xl">
          <p className="text-lg font-semibold text-primary mb-6">Community is not an audience. It is a core part of the system we build.</p>
          <p className="text-muted-foreground mb-8">We design programs and platforms that ensure communities are:</p>
          <ul className="space-y-3 mb-8">
            {[
              "Included in opportunity creation",
              "Part of venture development processes",
              "Connected to economic outcomes",
              "Active participants in innovation systems"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* What We Do */}
      <Section
        title="What We Do"
        className="bg-muted/30"
      >
        <div className="max-w-3xl space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">We operate across all stages of the innovation and venture lifecycle</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {["Early Idea Generation", "Validation & Testing", "Venture Building", "Investment Readiness", "Ecosystem Scaling"].map((stage) => (
                <div key={stage} className="text-center">
                  <Badge variant="outline" className="inline-block">{stage}</Badge>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground">We design, build, and implement systems that work across every stage.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">We operate across three integrated capability areas</h3>
            <div className="space-y-3">
              {[
                "Innovation Systems and Strategy Design",
                "Programs (Design, Implementation and Execution)",
                "Digital Platforms for Entrepreneurs and MSMEs"
              ].map((capability) => (
                <div key={capability} className="flex items-center gap-3 p-3 bg-background rounded-lg border">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="font-medium">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Pipeline */}
      <Pipeline />

      {/* Core Values */}
      <Section title="Core Values">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {coreValues.map((value) => (
            <Card key={value.title} className="text-center">
              <CardHeader>
                <CardTitle className="text-base">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Case Studies */}
      <CaseStudiesSection />

      {/* Final CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <CTA
          title="Build systems that produce real outcomes"
          description="Partner with Tuku-Tuku to design and implement innovation systems that work."
          primaryLabel="Work With Us"
          primaryTarget="/contact"
          secondaryLabel="View Case Studies"
          secondaryTarget="/case-studies"
        />
      </div>
    </main>
  );
}
