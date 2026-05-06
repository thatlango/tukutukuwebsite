import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Building2, Handshake, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export default function ContactPage() {
  const [selectedType, setSelectedType] = useState("");

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4"
          >
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            Let's Build Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--muted-foreground)" }}
          >
            Tell us what you're working on and we'll respond with structure and intent.
          </motion.p>
        </div>
      </section>

      {/* ── Enquiry type + Form ───────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Option cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {/* Start a Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedType("project")}
              className={`rounded-2xl border p-6 cursor-pointer transition-all ${
                selectedType === "project"
                  ? "border-primary bg-primary/5"
                  : "border-border"
              }`}
            >
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-black text-gray-900 mb-1">Start a Project</h3>
              <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>Design a program or system</p>
            </motion.div>

            {/* Partner With Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.07 }}
              viewport={{ once: true }}
              onClick={() => setSelectedType("partner")}
              className={`rounded-2xl border p-6 cursor-pointer transition-all ${
                selectedType === "partner"
                  ? "border-primary bg-primary/5"
                  : "border-border"
              }`}
            >
              <div className="w-11 h-11 bg-[#7C3A1E]/10 rounded-xl flex items-center justify-center mb-4">
                <Handshake className="h-5 w-5 text-[#7C3A1E]" />
              </div>
              <h3 className="font-black text-gray-900 mb-1">Partner With Us</h3>
              <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>Co-design or co-deliver programs</p>
            </motion.div>

            {/* Apply to a Program */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              viewport={{ once: true }}
              onClick={() => setSelectedType("apply")}
              className={`rounded-2xl border p-6 cursor-pointer transition-all ${
                selectedType === "apply"
                  ? "border-primary bg-primary/5"
                  : "border-border"
              }`}
            >
              <div className="w-11 h-11 bg-[#162B40]/10 rounded-xl flex items-center justify-center mb-4">
                <GraduationCap className="h-5 w-5 text-[#162B40]" />
              </div>
              <h3 className="font-black text-gray-900 mb-1">Apply to a Program</h3>
              <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>Join the venture pipeline</p>
            </motion.div>
          </div>

          {/* Contact form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-5 max-w-2xl mx-auto mt-12"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" className="hidden" />
            <input type="hidden" name="project-type" value={selectedType} />

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" placeholder="Jane" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" placeholder="Doe" required />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" placeholder="jane@example.com" required />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="organization">Organization</Label>
              <Input id="organization" name="organization" placeholder="Your company or institution" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us what you're building or looking for..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* ── Contact info ─────────────────────────────────────── */}
      <section className="bg-surface py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white border border-border p-6"
            >
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-black text-gray-900 mb-1">Email</h3>
              <a
                href="mailto:hello@tukutuku.africa"
                className="text-sm text-primary hover:underline"
              >
                hello@tukutuku.africa
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.07 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white border border-border p-6"
            >
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-black text-gray-900 mb-1">Phone</h3>
              <a
                href="tel:+256777000000"
                className="text-sm text-primary hover:underline"
              >
                +256 777 000 000
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white border border-border p-6"
            >
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-black text-gray-900 mb-1">Location</h3>
              <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Gulu, Uganda — serving East Africa
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
