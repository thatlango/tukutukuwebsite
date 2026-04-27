import { Section } from "../components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { CTA } from "../components/CTA";
import { Pipeline } from "../components/Pipeline";
import { Lightbulb, Target, Users, TrendingUp, Globe, Zap } from "lucide-react";
import { Link } from "react-router";

const innovationPrinciples = [
  {
    icon: Lightbulb,
    title: "Innovation as Systems Design",
    description: "We treat innovation as infrastructure: repeatable processes, scalable platforms, and sustainable models that outlast individual projects."
  },
  {
    icon: Globe,
    title: "Importance of Local Infrastructure",
    description: "Without strong local systems, imported models fail. We build the foundational infrastructure that enables sustainable innovation ecosystems."
  },
  {
    icon: Target,
    title: "The Tuku-Tuku Model",
    description: "Source, train, validate, build, prepare, connect. Our 6-stage pipeline transforms raw potential into investment-ready ventures."
  },
  {
    icon: TrendingUp,
    title: "Ecosystem Transformation Vision",
    description: "Become a regional innovation infrastructure platform connecting talent, institutions, and capital across East Africa and beyond."
  }
];

const innovationAreas = [
  {
    title: "FinTech Innovation",
    description: "Building the next generation of financial services for East Africa",
    focus: ["Digital lending", "Mobile money", "Insurance tech", "RegTech"],
    impact: "500K+ users, $50M+ in transactions"
  },
  {
    title: "AgriTech Solutions",
    description: "Transforming agricultural value chains through technology",
    focus: ["Supply chain tracking", "Market access", "Farm management", "Quality control"],
    impact: "10K+ farmers, 40% income increase"
  },
  {
    title: "HealthTech Platforms",
    description: "Improving healthcare delivery and outcomes",
    focus: ["Telemedicine", "Health records", "Resource management", "Data analytics"],
    impact: "25K+ patients, 35% better outcomes"
  },
  {
    title: "EdTech Initiatives",
    description: "Scaling education and skills development",
    focus: ["Online learning", "Skills assessment", "Career matching", "Capacity building"],
    impact: "100K+ learners, 60% completion rates"
  },
  {
    title: "ClimateTech Solutions",
    description: "Addressing climate challenges with innovative technology",
    focus: ["Carbon tracking", "Renewable energy", "Sustainable agriculture", "Climate finance"],
    impact: "Regional climate impact monitoring"
  },
  {
    title: "GovTech Platforms",
    description: "Modernizing government services and citizen engagement",
    focus: ["Digital services", "Data transparency", "Citizen platforms", "Policy tools"],
    impact: "Multi-country implementations"
  }
];

export default function InnovationPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section
        title="Innovation at Tuku-Tuku"
        description="Building practical systems that keep producing outcomes long after a project ends."
        className="bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground mb-8">
            For us, innovation isn't just about creating new products—it's about designing sustainable
            systems that transform entire ecosystems. We focus on building the infrastructure that
            enables continuous innovation and economic growth across East Africa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Innovations Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$15M+</div>
              <div className="text-sm text-muted-foreground">Economic Impact</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Innovation Principles */}
      <Section title="Our Innovation Philosophy">
        <div className="grid md:grid-cols-2 gap-6">
          {innovationPrinciples.map((principle) => (
            <Card key={principle.title}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <principle.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Innovation Pipeline */}
      <Section
        title="The Tuku-Tuku Innovation Pipeline"
        description="Our systematic approach to transforming ideas into scalable solutions."
        className="bg-muted/30"
      >
        <Pipeline />
      </Section>

      {/* Innovation Areas */}
      <Section title="Innovation Focus Areas">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovationAreas.map((area) => (
            <Card key={area.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{area.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Key Focus Areas</h4>
                  <div className="flex flex-wrap gap-1">
                    {area.focus.map((item) => (
                      <Badge key={item} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="text-sm">
                  <strong>Impact:</strong> {area.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Innovation Labs */}
      <Section
        title="Innovation Labs & Accelerators"
        className="bg-muted/30"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Building Innovation Capacity</h3>
            <p className="text-muted-foreground mb-6">
              Our innovation labs serve as testing grounds for new ideas and technologies.
              We provide the infrastructure, mentorship, and resources needed to validate
              and scale innovative solutions.
            </p>
            <ul className="space-y-3">
              {[
                "Prototype development facilities",
                "Access to industry experts and mentors",
                "Testing and validation environments",
                "Regulatory guidance and support",
                "Market access and partnership opportunities"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Lab Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">FinTech Regulatory Sandbox</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">AgriTech Innovation Hub</span>
                    <Badge variant="secondary">Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">HealthTech Solutions Lab</span>
                    <Badge variant="outline">Planning</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CTA
          title="Ready to innovate with us?"
          description="Partner with us to design and deploy innovation systems that create lasting impact."
          primaryLabel="Start Innovating"
          primaryTarget="/contact"
          secondaryLabel="View Our Pipeline"
          secondaryTarget="#pipeline"
        />
      </div>
    </main>
  );
}
