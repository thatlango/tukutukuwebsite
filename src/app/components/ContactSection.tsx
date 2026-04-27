import { useState } from "react";
import { Section } from "./Section";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";

const intents = ["Start a project", "Partner", "Join program", "Investor inquiry"];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    intent: intents[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build together"
      description="Choose your path and tell us what you need. We will respond with a clear next step."
      className="bg-primary text-white"
      invert
    >
      <div className="max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-6 md:p-8">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60"
                required
              />
              <input
                type="email"
                placeholder="you@organization.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60"
                required
              />
            </div>

            <select
              value={form.intent}
              onChange={(e) => setForm({ ...form, intent: e.target.value })}
              className="w-full rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-sm text-white"
            >
              {intents.map((intent) => (
                <option key={intent} value={intent} className="text-foreground">
                  {intent}
                </option>
              ))}
            </select>

            <textarea
              rows={4}
              placeholder="Tell us your goals, timeline, and what success looks like."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/60"
              required
            />

            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" type="submit">
              Send Inquiry
            </Button>
          </form>
        ) : (
          <div className="flex items-center gap-3 rounded-lg border border-accent/30 bg-accent/20 p-4">
            <CheckCircle className="h-5 w-5 text-accent" />
            <p className="text-white">Thanks! Your inquiry was submitted. We’ll respond within 24 hours.</p>
          </div>
        )}
      </div>
    </Section>
  );
}
