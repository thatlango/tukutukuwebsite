import { Section } from "../components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { CTA } from "../components/CTA";
import { Calendar, Users, Target, Award, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router";

const programs = [
  {
    title: "Innovation Accelerator Program",
    type: "Accelerator",
    duration: "6 months",
    cohort: "25 startups",
    status: "Open",
    description: "Comprehensive startup acceleration program combining mentorship, funding, and technical support for East African innovators.",
    benefits: [
      "Up to $50K in funding",
      "12 weeks of intensive mentorship",
      "Technical development support",
      "Market access and networking",
      "Demo day with investors"
    ],
    eligibility: "Early-stage startups with innovative solutions for East African markets",
    applicationDeadline: "Rolling admissions"
  },
  {
    title: "Digital Skills Bootcamp",
    type: "Training",
    duration: "3 months",
    cohort: "50 participants",
    status: "Open",
    description: "Intensive training program teaching modern digital skills to youth and professionals across East Africa.",
    benefits: [
      "Full-stack web development",
      "Mobile app development",
      "Data analytics and visualization",
      "Digital marketing fundamentals",
      "Career placement support"
    ],
    eligibility: "18+ years old with basic computer skills",
    applicationDeadline: "Monthly intakes"
  },
  {
    title: "SME Digital Transformation",
    type: "Consulting",
    duration: "12 months",
    cohort: "20 companies",
    status: "Applications Open",
    description: "End-to-end digital transformation support for small and medium enterprises in East Africa.",
    benefits: [
      "Digital strategy development",
      "Technology implementation",
      "Process optimization",
      "Staff training and capacity building",
      "Ongoing technical support"
    ],
    eligibility: "Registered SMEs with 10-200 employees",
    applicationDeadline: "Quarterly cohorts"
  },
  {
    title: "AgriTech Innovation Challenge",
    type: "Challenge",
    duration: "4 months",
    cohort: "100+ applicants",
    status: "Coming Soon",
    description: "Innovation challenge focused on solving agricultural challenges through technology solutions.",
    benefits: [
      "$100K+ in total prizes",
      "Mentorship from industry experts",
      "Access to agricultural partners",
      "Prototype development funding",
      "Path to commercialization"
    ],
    eligibility: "Teams with technical and agricultural expertise",
    applicationDeadline: "TBD"
  },
  {
    title: "FinTech Regulatory Sandbox",
    type: "Regulatory Support",
    duration: "6-12 months",
    cohort: "10 companies",
    status: "By Invitation",
    description: "Regulatory sandbox program for FinTech innovations with Central Bank collaboration.",
    benefits: [
      "Regulatory guidance and support",
      "Testing environment access",
      "Central Bank engagement",
      "Legal and compliance assistance",
      "Go-to-market strategy support"
    ],
    eligibility: "FinTech startups with innovative financial solutions",
    applicationDeadline: "By invitation only"
  },
  {
    title: "Women in Tech Mentorship",
    type: "Mentorship",
    duration: "12 months",
    cohort: "30 participants",
    status: "Open",
    description: "Comprehensive mentorship and development program for women pursuing careers in technology.",
    benefits: [
      "1-on-1 mentorship with industry leaders",
      "Technical skills development",
      "Leadership and entrepreneurship training",
      "Networking opportunities",
      "Career advancement support"
    ],
    eligibility: "Women aged 18-35 interested in technology careers",
    applicationDeadline: "Bi-annual intakes"
  }
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'open':
      return 'bg-green-100 text-green-800';
    case 'applications open':
      return 'bg-blue-100 text-blue-800';
    case 'coming soon':
      return 'bg-yellow-100 text-yellow-800';
    case 'by invitation':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function ProgramsPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section
        title="Our Programs"
        description="Structured programs designed to accelerate innovation, build capacity, and drive economic growth across East Africa."
        className="bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground mb-8">
            From startup acceleration to skills development and regulatory support, our programs
            provide comprehensive support for innovators, entrepreneurs, and organizations looking
            to make an impact in East Africa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Participants Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$2M+</div>
              <div className="text-sm text-muted-foreground">Funding Distributed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Startups Accelerated</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Programs Grid */}
      <Section title="Active Programs">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card key={program.title} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {program.type}
                  </Badge>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(program.status)}`}>
                    {program.status}
                  </span>
                </div>
                <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {program.cohort}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4">{program.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Key Benefits</h4>
                  <ul className="space-y-1">
                    {program.benefits.slice(0, 3).map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto space-y-3">
                  <div className="text-xs text-muted-foreground">
                    <strong>Eligibility:</strong> {program.eligibility}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <strong>Deadline:</strong> {program.applicationDeadline}
                  </div>
                  <Button
                    className="w-full"
                    disabled={program.status === 'Coming Soon'}
                    asChild={program.status !== 'Coming Soon'}
                  >
                    {program.status === 'Coming Soon' ? (
                      'Coming Soon'
                    ) : (
                      <Link to="/contact">Apply Now</Link>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CTA
          title="Ready to join a program?"
          description="Apply to our programs or partner with us to co-deliver innovative solutions for East Africa."
          primaryLabel="Apply Now"
          primaryTarget="/contact"
          secondaryLabel="Partner With Us"
          secondaryTarget="/contact"
        />
      </div>
    </main>
  );
}
