import { Section } from "../components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { CTA } from "../components/CTA";
import { Lightbulb, Layers, Smartphone, CheckCircle } from "lucide-react";
import { Link } from "react-router";

const capabilities = [
  {
    icon: Lightbulb,
    title: "Innovation Systems and Strategy Design",
    description: "We design the architecture of innovation ecosystems and venture pipelines.",
    includes: [
      "Innovation ecosystem design",
      "Venture pipeline architecture",
      "Institutional innovation strategy",
      "Program frameworks and delivery systems"
    ],
    outcome: "A structured innovation system that produces consistent venture creation and economic activity."
  },
  {
    icon: Layers,
    title: "Programs (Design, Implementation and Execution)",
    description: "We design, manage, and fully execute structured programs for institutions, governments, and ecosystem partners.",
    includes: [
      "Program design and structuring",
      "Full program management and delivery",
      "Field implementation and operational execution",
      "Multi-stakeholder coordination and alignment",
      "Monitoring, Evaluation and Learning systems",
      "Performance tracking and reporting",
      "Risk management and adaptive execution",
      "Community engagement and participation systems"
    ],
    outcome: "Programs that function as execution systems, producing real ventures, measurable economic outcomes, strengthened institutional capacity, and active community participation."
  },
  {
    icon: Smartphone,
    title: "Digital Platforms for Entrepreneurs and MSMEs",
    description: "We build digital infrastructure that supports entrepreneurship, enterprise growth, and ecosystem coordination.",
    includes: [
      "MSME onboarding systems",
      "Entrepreneur support platforms",
      "Venture tracking systems",
      "Opportunity matching systems",
      "Ecosystem data and intelligence tools",
      "Community engagement platforms"
    ],
    outcome: "Connected digital ecosystems that improve access, visibility, and structured participation across communities and enterprises."
  }
];

const differentiators = [
  "We are not advisors or trainers.",
  "We are a consulting and implementation firm that designs systems, builds programs, and runs execution until outcomes are produced.",
  "We work across all stages of innovation, from idea to scale, within real environments and real communities."
];

const outcomeStandards = [
  "Validated ventures",
  "Measurable economic activity",
  "Functional innovation systems",
  "Improved institutional execution capacity",
  "Active community participation in innovation systems",
  "Scalable digital ecosystems"
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section
        title="We design and implement systems that turn innovation into measurable economic outcomes."
        className="bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground">
            We work across strategy, program implementation, and digital infrastructure to build 
            innovation systems that produce real results.
          </p>
        </div>
      </Section>

      {/* Three Capabilities */}
      <Section title="Our Three Capability Areas">
        <div className="space-y-12">
          {capabilities.map((capability) => (
            <Card key={capability.title} className="overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-0">
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <capability.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{capability.title}</CardTitle>
                      <p className="text-muted-foreground">{capability.description}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Includes</h4>
                    <ul className="space-y-2">
                      {capability.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Outcome</h4>
                    <p className="text-sm text-muted-foreground">{capability.outcome}</p>
                  </div>
                </div>

                <div className="bg-muted/30 p-8 flex flex-col justify-center border-l">
                  <div className="text-center">
                    <p className="font-semibold mb-4">Ready to explore?</p>
                    <Button asChild>
                      <Link to="/contact">Discuss Your Needs</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* What Makes Us Different */}
      <Section
        title=\"What Makes Us Different\"
        className=\"bg-muted/30\"
      >
        <div className=\"max-w-3xl space-y-4\">
          {differentiators.map((diff) => (
            <div key={diff} className=\"flex items-start gap-3 p-4 bg-background rounded-lg border\">
              <CheckCircle className=\"h-5 w-5 text-primary mt-0.5 flex-shrink-0\" />
              <p>{diff}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Outcome Standard */}
      <Section title="Our Outcome Standard\">
        <div className="max-w-3xl">
          <p className="text-muted-foreground mb-6">Every engagement must produce at least one of:</p>
          <div className="grid md:grid-cols-2 gap-4">
            {outcomeStandards.map((standard) => (
              <div key={standard} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg border">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Engagement Model */}
      <Section
        title="How We Work"
        className="bg-muted/30\"
      >
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            "Design systems with partners",
            "Run full implementation end to end",
            "Enable institutions with tools and platforms they can operate",
            "Embed community participation into delivery systems"
          ].map((model, index) => (
            <div key={model}>
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <p className="font-medium text-sm">{model}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <CTA
          title="Ready to design innovation systems?"
          description="Let's discuss your challenges and how we can help build structured solutions."
          primaryLabel="Start a Conversation"
          primaryTarget="/contact"
          secondaryLabel="Learn More"
          secondaryTarget="/about"
        />
      </div>
    </main>
  );
}

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Full-stack web and mobile applications built with modern technologies and best practices.",
    features: ["React/Next.js", "Node.js/Python", "Mobile Apps", "API Development"],
    category: "Development"
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
