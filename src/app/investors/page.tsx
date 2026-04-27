import { Section } from "../components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { CTA } from "../components/CTA";
import { Pipeline } from "../components/Pipeline";
import { TrendingUp, Users, Target, DollarSign, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const investmentStages = [
  {
    stage: "Pre-Seed",
    description: "Early validation and MVP development",
    checkSize: "$50K - $200K",
    typicalInvestors: "Angel investors, early-stage funds"
  },
  {
    stage: "Seed",
    description: "Product-market fit and initial traction",
    checkSize: "$200K - $1M",
    typicalInvestors: "VC funds, impact investors"
  },
  {
    stage: "Series A",
    description: "Scale and market expansion",
    checkSize: "$2M - $10M",
    typicalInvestors: "Growth VCs, strategic investors"
  }
];

const portfolioHighlights = [
  {
    company: "M-Pesa Clone",
    sector: "FinTech",
    stage: "Series A",
    raised: "$3M",
    description: "Mobile money platform serving 100K+ users across 3 countries"
  },
  {
    company: "AgriChain",
    sector: "AgriTech",
    stage: "Seed",
    raised: "$800K",
    description: "Supply chain platform connecting 5K+ farmers to export markets"
  },
  {
    company: "HealthLink",
    sector: "HealthTech",
    stage: "Pre-Seed",
    raised: "$150K",
    description: "Telemedicine platform with 50K+ consultations delivered"
  }
];

const valueProposition = [
  {
    icon: Target,
    title: "Vetted Pipeline",
    description: "Access thoroughly validated opportunities with reduced due diligence burden"
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "Deep understanding of East African markets, regulations, and opportunities"
  },
  {
    icon: TrendingUp,
    title: "Execution Support",
    description: "Ongoing partnership for implementation, scaling, and market expansion"
  },
  {
    icon: DollarSign,
    title: "Impact Focus",
    description: "Investment opportunities that drive both financial returns and social impact"
  }
];

export default function InvestorsPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section
        title="Investment Opportunities in East Africa"
        description="Access curated, investment-ready opportunities with reduced risk and local execution support."
        className="bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground mb-8">
            We reduce early-stage risk by sourcing, training, validating, and preparing ventures
            before investor engagement. Our structured pipeline delivers investment-ready
            opportunities across FinTech, AgriTech, HealthTech, and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$15M+</div>
              <div className="text-sm text-muted-foreground">Capital Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Companies Funded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">300%</div>
              <div className="text-sm text-muted-foreground">Average Growth</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Value Proposition */}
      <Section title="Why Invest Through Tuku-Tuku">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProposition.map((value) => (
            <Card key={value.title} className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Investment Stages */}
      <Section
        title="Investment Stages We Support"
        className="bg-muted/30"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {investmentStages.map((stage) => (
            <Card key={stage.stage}>
              <CardHeader>
                <CardTitle className="text-xl">{stage.stage}</CardTitle>
                <p className="text-sm text-muted-foreground">{stage.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-medium">Check Size</div>
                    <div className="text-lg font-bold text-primary">{stage.checkSize}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Typical Investors</div>
                    <div className="text-sm text-muted-foreground">{stage.typicalInvestors}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pipeline */}
      <Section title="Our Investment Pipeline">
        <Pipeline />
      </Section>

      {/* Portfolio Highlights */}
      <Section title="Portfolio Highlights">
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioHighlights.map((company) => (
            <Card key={company.company}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{company.company}</CardTitle>
                    <Badge variant="secondary" className="mt-1">{company.sector}</Badge>
                  </div>
                  <Badge variant="outline">{company.stage}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <div className="text-sm font-medium">Raised</div>
                  <div className="text-lg font-bold text-primary">{company.raised}</div>
                </div>
                <p className="text-sm text-muted-foreground">{company.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Investment Process */}
      <Section
        title="How We Work With Investors"
        className="bg-muted/30"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Process</h3>
            <div className="space-y-4">
              {[
                "Initial consultation and investment criteria alignment",
                "Access to our curated pipeline of vetted opportunities",
                "Co-investment opportunities and deal structuring",
                "Due diligence support and local market insights",
                "Post-investment monitoring and execution support",
                "Portfolio management and exit planning"
              ].map((step, index) => (
                <div key={step} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-sm">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Investment Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    East Africa focus
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Scalable business models
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Strong founding teams
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Social impact alignment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sectors of Interest</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["FinTech", "AgriTech", "HealthTech", "EdTech", "E-Commerce", "Logistics"].map((sector) => (
                    <Badge key={sector} variant="outline">{sector}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CTA
          title="Ready to invest in East Africa?"
          description="Partner with us to access vetted opportunities and reliable execution support."
          primaryLabel="Partner With Us"
          primaryTarget="/contact"
          secondaryLabel="Access Pipeline"
          secondaryTarget="/contact"
        />
      </div>
    </main>
  );
}
        />
      </div>
    </main>
  );
}
