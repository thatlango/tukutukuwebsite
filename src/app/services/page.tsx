import { Section } from "../components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { CTA } from "../components/CTA";
import {
  Code,
  Smartphone,
  Database,
  Cloud,
  Users,
  BarChart3,
  Shield,
  Zap,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Full-stack web and mobile applications built with modern technologies and best practices.",
    features: ["React/Next.js", "Node.js/Python", "Mobile Apps", "API Development"],
    category: "Development"
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile applications for iOS and Android with offline capabilities.",
    features: ["React Native", "Flutter", "Progressive Web Apps", "SMS Integration"],
    category: "Development"
  },
  {
    icon: Database,
    title: "Data Systems & Analytics",
    description: "Robust data collection, processing, and analytics platforms for informed decision making.",
    features: ["Data Warehousing", "Business Intelligence", "Real-time Dashboards", "ML/AI Integration"],
    category: "Data"
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions on AWS, Azure, and Google Cloud with security and compliance.",
    features: ["Infrastructure as Code", "DevOps", "Security", "Monitoring"],
    category: "Infrastructure"
  },
  {
    icon: Users,
    title: "Digital Product Strategy",
    description: "End-to-end product development from ideation to launch and growth optimization.",
    features: ["Product Roadmap", "User Research", "MVP Development", "Growth Hacking"],
    category: "Strategy"
  },
  {
    icon: BarChart3,
    title: "Business Process Automation",
    description: "Streamline operations with custom automation solutions and workflow optimization.",
    features: ["Workflow Automation", "ERP Systems", "Integration", "Process Optimization"],
    category: "Automation"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security implementations and regulatory compliance solutions.",
    features: ["Data Protection", "Compliance Audits", "Security Training", "Risk Assessment"],
    category: "Security"
  },
  {
    icon: Zap,
    title: "Innovation Consulting",
    description: "Strategic guidance on technology adoption and digital transformation initiatives.",
    features: ["Technology Assessment", "Digital Strategy", "Innovation Labs", "Change Management"],
    category: "Consulting"
  }
];

const categories = ["All", "Development", "Data", "Infrastructure", "Strategy", "Automation", "Security", "Consulting"];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section
        title="Our Services"
        description="Comprehensive technology solutions tailored for East African markets and institutions."
        className="bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground mb-8">
            From concept to deployment, we provide end-to-end technology services that drive
            innovation and create measurable impact. Our expertise spans the full technology stack
            with deep local market knowledge.
          </p>
          <div className="flex flex-wrap gap-2">
            {categories.slice(1).map((category) => (
              <Badge key={category} variant="secondary" className="text-sm">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section title="What We Offer">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <Badge variant="outline" className="w-fit text-xs">
                  {service.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" asChild className="p-0 h-auto font-medium">
                  <Link to="/contact" className="flex items-center gap-1">
                    Learn More
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section
        title="Our Delivery Process"
        className="bg-muted/30"
      >
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discovery", description: "Understand your needs and define success criteria" },
            { step: "02", title: "Design", description: "Create detailed specifications and technical architecture" },
            { step: "03", title: "Development", description: "Build with agile methodologies and regular updates" },
            { step: "04", title: "Delivery", description: "Deploy, train, and ensure successful adoption" }
          ].map((phase) => (
            <div key={phase.step} className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {phase.step}
              </div>
              <h3 className="font-semibold mb-2">{phase.title}</h3>
              <p className="text-sm text-muted-foreground">{phase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CTA
          title="Ready to start your project?"
          description="Let's discuss your requirements and create a tailored solution for your needs."
          primaryLabel="Start a Project"
          primaryTarget="/contact"
          secondaryLabel="View Case Studies"
          secondaryTarget="/case-studies"
        />
      </div>
    </main>
  );
}
