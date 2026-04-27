import { Section } from "../components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Users,
  Lightbulb,
  DollarSign,
  MessageSquare
} from "lucide-react";

const contactMethods = [
  {
    icon: Users,
    title: "Partnership Inquiries",
    description: "Discuss collaboration opportunities and strategic partnerships",
    email: "partnerships@tukutuku.africa",
    response: "Within 24 hours"
  },
  {
    icon: Lightbulb,
    title: "Innovation Projects",
    description: "Start a new project or discuss innovation initiatives",
    email: "projects@tukutuku.africa",
    response: "Within 48 hours"
  },
  {
    icon: DollarSign,
    title: "Investor Relations",
    description: "Investment opportunities and portfolio discussions",
    email: "investors@tukutuku.africa",
    response: "Within 24 hours"
  },
  {
    icon: MessageSquare,
    title: "General Inquiries",
    description: "General questions and support requests",
    email: "hello@tukutuku.africa",
    response: "Within 72 hours"
  }
];

const offices = [
  {
    city: "Nairobi, Kenya",
    address: "Westlands Business Park, Nairobi",
    phone: "+254 700 000 000",
    email: "nairobi@tukutuku.africa"
  },
  {
    city: "Kampala, Uganda",
    address: "Nakasero Business Park, Kampala",
    phone: "+256 700 000 000",
    email: "kampala@tukutuku.africa"
  },
  {
    city: "Dar es Salaam, Tanzania",
    address: "Ubungo Business Park, Dar es Salaam",
    phone: "+255 700 000 000",
    email: "dar@tukutuku.africa"
  }
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section
        title="Get In Touch"
        description="Ready to start your next project or explore partnership opportunities? We'd love to hear from you."
        className="bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground">
            Whether you're looking to build innovative solutions, access our investment pipeline,
            or partner on transformative projects, our team is here to help turn your vision into reality.
          </p>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section title="How Can We Help?">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => (
            <Card key={method.title} className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${method.email}`} className="text-primary hover:underline">
                      {method.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {method.response}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Section
        title="Send Us a Message"
        className="bg-muted/30"
      >
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Project Inquiry Form</CardTitle>
              <p className="text-sm text-muted-foreground">
                Tell us about your project or partnership idea. We'll get back to you within 48 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Your first name" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Your last name" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your.email@company.com" required />
                </div>

                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>

                <div>
                  <Label htmlFor="inquiryType">Type of Inquiry</Label>
                  <select
                    id="inquiryType"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="project">New Project</option>
                    <option value="partnership">Partnership</option>
                    <option value="investment">Investment</option>
                    <option value="program">Program Application</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, goals, timeline, and how we can help..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Office Locations */}
      <Section title="Our Offices">
        <div className="grid md:grid-cols-3 gap-6">
          {offices.map((office) => (
            <Card key={office.city}>
              <CardHeader>
                <CardTitle className="text-lg">{office.city}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href={`tel:${office.phone}`} className="text-sm text-primary hover:underline">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href={`mailto:${office.email}`} className="text-sm text-primary hover:underline">
                      {office.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Additional Info */}
      <Section
        title="Response Times & Support"
        className="bg-muted/30"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">When to Expect a Response</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm">Partnership & Investment Inquiries</span>
                <Badge variant="secondary">24 hours</Badge>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm">Project Proposals</span>
                <Badge variant="secondary">48 hours</Badge>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm">General Inquiries</span>
                <Badge variant="outline">72 hours</Badge>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm">Program Applications</span>
                <Badge variant="outline">1-2 weeks</Badge>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-muted-foreground mb-4">
              For urgent matters or time-sensitive inquiries, please call our main office
              or use the partnership email for faster response.
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <strong>Emergency Contact:</strong> +254 700 000 000
              </p>
              <p className="text-sm">
                <strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM EAT
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
