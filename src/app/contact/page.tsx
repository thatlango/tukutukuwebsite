import { Section } from "../components/Section";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <Section
        title="Let's build together"
        className="bg-gradient-to-br from-primary/5 to-accent/5"
      >
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground">
            Whether you're looking to start a project, explore partnership opportunities, or apply to a program, 
            we're here to listen and collaborate.
          </p>
        </div>
      </Section>

      {/* Three Options */}
      <Section title="How Can We Help?">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Start a Project</CardTitle>
              <p className="text-sm text-muted-foreground">Design a program or system with us</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Looking to implement innovation systems, build programs, or create digital platforms. Let's discuss your needs.
              </p>
              <Button asChild className="w-full">
                <a href="#contact-form" onClick={() => document.getElementById('project-type')?.setAttribute('value', 'project')}>
                  Get Started
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Partner</CardTitle>
              <p className="text-sm text-muted-foreground">Collaborate on ecosystem initiatives</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Interested in co-designing or co-delivering programs, systems, or platforms. Let's explore collaboration.
              </p>
              <Button asChild className="w-full">
                <a href="#contact-form" onClick={() => document.getElementById('project-type')?.setAttribute('value', 'partnership')}>
                  Explore Partnership
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Apply</CardTitle>
              <p className="text-sm text-muted-foreground">Join a program or venture pipeline</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Interested in joining one of our programs or accessing our venture support pipeline. Tell us more.
              </p>
              <Button asChild className="w-full">
                <a href="#contact-form" onClick={() => document.getElementById('project-type')?.setAttribute('value', 'application')}>
                  Apply Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact Form */}
      <Section
        title="Contact Us"
        description="Fill out the form below and we'll get back to you with structure, clarity, and intent rather than generic responses."
        className="bg-muted/30"
        id="contact-form"
      >
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6">
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
                  <Input id="email" type="email" placeholder="your.email@organization.com" required />
                </div>

                <div>
                  <Label htmlFor="organization">Organization</Label>
                  <Input id="organization" placeholder="Your organization name" />
                </div>

                <div>
                  <Label htmlFor="project-type">What are you interested in? *</Label>
                  <select
                    id="project-type"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="project">Start a Project</option>
                    <option value="partnership">Partnership</option>
                    <option value="application">Apply to Program</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs, goals, and how we can help..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact Info */}
      <Section title="Reach Out Directly">
        <div className="max-w-3xl">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:hello@tukutuku.africa" className="text-primary hover:underline">
                  hello@tukutuku.africa
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+254700000000" className="text-primary hover:underline">
                  +254 700 000 000
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-medium mb-2">Offices</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Nairobi, Kenya</p>
                  <p>Kampala, Uganda</p>
                  <p>Dar es Salaam, Tanzania</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
