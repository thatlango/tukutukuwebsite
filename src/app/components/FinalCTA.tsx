import { motion } from "motion/react";
import { Button } from "./ui/button";
import { MessageCircle, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export function FinalCTA() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  const whatsappUrl = "https://wa.me/256792131316?text=Hi%20Tuku-Tuku%2C%20I'd%20like%20to%20learn%20more%20about%20your%20programs.";
  const mailtoUrl = `mailto:info@tukutuku.org?subject=Inquiry from website&body=Hi Tuku-Tuku Team,%0D%0A%0D%0A${encodeURIComponent(form.message || "I'd like to learn more about your programs.")}%0D%0A%0D%0AName: ${encodeURIComponent(form.name)}`;

  return (
    <section className="py-20 lg:py-32 bg-primary text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Big change starts with small brave steps.
              </h2>
              <p className="text-lg sm:text-xl mb-10 leading-relaxed text-white/85 max-w-lg">
                Got an idea? Looking for a partner? Curious about our work?
                We'd love to hear from you.
              </p>

              {/* Quick contact options */}
              <div className="space-y-4 mb-10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/15 group-hover:bg-green-500 flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold group-hover:text-accent transition-colors">WhatsApp us</p>
                    <p className="text-white/65 text-sm">+256 792131316 — fastest response</p>
                  </div>
                </a>
                <a
                  href="mailto:info@tukutuku.org"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/15 group-hover:bg-accent flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold group-hover:text-accent transition-colors">Email us</p>
                    <p className="text-white/65 text-sm">info@tukutuku.org</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Call us</p>
                    <p className="text-white/65 text-sm">+256 792131316</p>
                  </div>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[#25D366] text-white hover:bg-[#20b85a] text-lg px-8 py-6 font-semibold shadow-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>

            {/* Right: Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm"
            >
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-1.5">
                        Your name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Grace Aloyo"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/25 text-white placeholder-white/40 focus:outline-none focus:border-accent focus:bg-white/15 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-1.5">
                        Email address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/25 text-white placeholder-white/40 focus:outline-none focus:border-accent focus:bg-white/15 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-1.5">
                        How can we help? *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your idea, partnership interest, or question..."
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/25 text-white placeholder-white/40 focus:outline-none focus:border-accent focus:bg-white/15 transition-all text-sm resize-none"
                      />
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button
                        type="submit"
                        className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-3"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                      <a
                        href={mailtoUrl}
                        className="flex items-center justify-center px-4 bg-white/10 hover:bg-white/20 border border-white/25 rounded-lg transition-colors"
                        title="Open in email client"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                    <p className="text-xs text-white/50 text-center">
                      We typically respond within 24 hours.
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-64 text-center"
                >
                  <CheckCircle className="h-16 w-16 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Message received!</h3>
                  <p className="text-white/75 leading-relaxed">
                    Thanks, <strong>{form.name}</strong>! We'll be in touch within 24 hours.
                    <br />
                    In the meantime, feel free to{" "}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-semibold"
                    >
                      WhatsApp us
                    </a>{" "}
                    for a faster response.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
