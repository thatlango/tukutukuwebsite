import { Section } from "../components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { CTA } from "../components/CTA";
import { Users, Target, Heart, Award, MapPin, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We exist to accelerate innovation and economic growth across East Africa through technology and strategic partnerships."
  },
  {
    icon: Heart,
    title: "Local Expertise",
    description: "Deep understanding of East African markets, regulations, and cultural contexts drives our approach."
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We believe in co-creation with partners, combining our technical expertise with local insights."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we build and deliver."
  }
];

const stats = [
  { label: "Years of Experience", value: "5+" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Countries Served", value: "6" },
  { label: "Team Members", value: "25+" }
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section
        title="About Tuku-Tuku Innovation Labs"
        description="We are East Africa's premier innovation and technology implementation partner, bridging the gap between vision and execution."
        className="bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2019, Tuku-Tuku has been at the forefront of digital transformation across East Africa.
              We specialize in building scalable technology solutions that drive economic growth and social impact.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Headquartered in Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Serving 6 countries across East Africa</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section
        title="Our Mission & Vision"
        className="bg-muted/30"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To accelerate innovation and economic growth in East Africa by building world-class technology
                solutions that solve real problems and create sustainable impact.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To be East Africa's most trusted technology partner, known for excellence in execution,
                deep local expertise, and transformative impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Values */}
      <Section title="Our Values">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
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

      {/* CTA */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CTA
          title="Ready to partner with us?"
          description="Let's build something transformative together."
          primaryLabel="Partner With Us"
          primaryTarget="/contact"
          secondaryLabel="View Our Services"
          secondaryTarget="/services"
        />
      </div>
    </main>
  );
}
