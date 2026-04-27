import { Section } from "../components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { CTA } from "../components/CTA";
import { ExternalLink, TrendingUp, Users, DollarSign, Calendar } from "lucide-react";
import { Link } from "react-router";

const caseStudies = [
  {
    title: "Digital Lending Platform for East African FinTech",
    client: "Leading FinTech Company",
    industry: "Financial Services",
    duration: "12 months",
    impact: {
      users: "50,000+",
      growth: "300%",
      revenue: "$2.5M"
    },
    description: "Built a comprehensive digital lending platform serving multiple East African countries with automated credit scoring and mobile money integration.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Mobile Money APIs"],
    results: [
      "Processed over $10M in loans within first year",
      "Achieved 98% on-time repayment rate",
      "Expanded to 3 additional countries",
      "Reduced operational costs by 60%"
    ]
  },
  {
    title: "Agricultural Supply Chain Management System",
    client: "Regional Agricultural Cooperative",
    industry: "Agriculture",
    duration: "8 months",
    impact: {
      users: "10,000+",
      growth: "150%",
      revenue: "$1.2M"
    },
    description: "Developed an end-to-end supply chain platform connecting farmers to markets with real-time pricing and quality tracking.",
    technologies: ["React Native", "Python", "MongoDB", "IoT Sensors", "SMS Gateway"],
    results: [
      "Connected 5,000+ farmers to new markets",
      "Increased farmer income by 40%",
      "Reduced post-harvest losses by 25%",
      "Improved supply chain transparency"
    ]
  },
  {
    title: "Healthcare Management Platform",
    client: "National Health Ministry",
    industry: "Healthcare",
    duration: "18 months",
    impact: {
      users: "25,000+",
      growth: "200%",
      revenue: "$3.1M"
    },
    description: "Created a comprehensive healthcare management system for patient tracking, resource allocation, and data analytics.",
    technologies: ["Next.js", "Python/Django", "PostgreSQL", "Docker", "Analytics Dashboard"],
    results: [
      "Improved patient outcomes by 35%",
      "Reduced administrative overhead by 50%",
      "Enhanced resource allocation efficiency",
      "Enabled data-driven health policy decisions"
    ]
  },
  {
    title: "E-Commerce Platform for SME Growth",
    client: "SME Development Agency",
    industry: "E-Commerce",
    duration: "10 months",
    impact: {
      users: "15,000+",
      growth: "250%",
      revenue: "$800K"
    },
    description: "Built a multi-vendor e-commerce platform with payment integration and logistics management for small businesses.",
    technologies: ["Next.js", "Stripe API", "MongoDB", "Redis", "Logistics APIs"],
    results: [
      "Onboarded 2,000+ small businesses",
      "Generated $5M+ in additional SME revenue",
      "Created 500+ new jobs",
      "Improved market access for rural businesses"
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section
        title="Case Studies"
        description="Real results from real projects. See how we've helped organizations across East Africa achieve transformative growth."
        className="bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground">
            Our track record speaks for itself. We've partnered with governments, financial institutions,
            and businesses to build technology solutions that drive measurable impact and sustainable growth.
          </p>
        </div>
      </Section>

      {/* Case Studies Grid */}
      <Section title="Featured Projects">
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={study.title} className="overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Content */}
                <div className="lg:col-span-2 p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">{study.industry}</Badge>
                    <Badge variant="outline">{study.duration}</Badge>
                  </div>

                  <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                  <p className="text-primary font-medium mb-4">{study.client}</p>
                  <p className="text-muted-foreground mb-6">{study.description}</p>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-primary mb-1">
                        <Users className="h-4 w-4" />
                        <span className="font-bold">{study.impact.users}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-primary mb-1">
                        <TrendingUp className="h-4 w-4" />
                        <span className="font-bold">{study.impact.growth}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-primary mb-1">
                        <DollarSign className="h-4 w-4" />
                        <span className="font-bold">{study.impact.revenue}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Revenue</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-semibold mb-2">Key Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Side */}
                <div className="bg-muted/30 p-6 flex flex-col justify-center items-center text-center lg:border-l">
                  <h3 className="font-semibold mb-4">Interested in similar results?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Let's discuss how we can replicate this success for your organization.
                  </p>
                  <Button asChild>
                    <Link to="/contact">Start a Project</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CTA
          title="Ready to create your success story?"
          description="Partner with us to design and execute systems that produce measurable, repeatable impact."
          primaryLabel="Partner With Us"
          primaryTarget="/contact"
          secondaryLabel="View Our Services"
          secondaryTarget="/services"
        />
      </div>
    </main>
  );
}
