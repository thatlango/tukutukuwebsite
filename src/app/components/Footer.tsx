import { motion } from "motion/react";
import { MapPin, Mail, Phone, Linkedin, Facebook, MessageCircle, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
    }
  };

  const whatsappUrl = "https://wa.me/256792131316?text=Hi%20Tuku-Tuku%2C%20I'd%20like%20to%20learn%20more%20about%20your%20programs.";

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/tuku-tuku-innovation-labs" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/tukutukuinnovationlabs" },
    { icon: MessageCircle, label: "WhatsApp", href: whatsappUrl },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About Us", id: "about" },
    { label: "Programs", id: "programs" },
    { label: "Consulting", id: "consulting" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                TT
              </span>
              <span className="font-bold text-lg leading-tight">
                Tuku-Tuku<br />Innovation Labs
              </span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6 text-sm">
              Innovation grows where communities believe in their own ideas.
              Supporting entrepreneurs across East Africa since 2020.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-white/70 hover:text-accent text-sm transition-colors hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold mb-5">Contact</h4>
            <div className="space-y-3 text-white/70 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>Gulu, Uganda<br />East Africa</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a
                  href="mailto:info@tukutuku.org"
                  className="hover:text-accent transition-colors"
                >
                  info@tukutuku.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a
                  href="tel:+256792131316"
                  className="hover:text-accent transition-colors"
                >
                  +256 792131316
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 flex-shrink-0 text-accent" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base font-bold mb-2">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">
              Get program updates, innovation insights, and opportunities delivered to your inbox.
            </p>
            {!newsletterSubmitted ? (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-accent focus:bg-white/15 transition-all"
                />
                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-semibold py-2.5"
                >
                  Subscribe to Newsletter
                </Button>
              </form>
            ) : (
              <div className="flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-lg px-3 py-2.5">
                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-sm text-white/85">You're subscribed!</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
            <p>
              © 2026 Tuku-Tuku Innovation Labs. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
