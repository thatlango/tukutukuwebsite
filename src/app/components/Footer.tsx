import { motion } from "motion/react";
import { MapPin, Mail, Phone, Linkedin, Facebook, MessageCircle, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router";

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

  const quickLinks = [
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Case Studies", to: "/case-studies" },
    { label: "Programs", to: "/programs" },
    { label: "Innovation", to: "/innovation" },
    { label: "Investors", to: "/investors" },
    { label: "Contact", to: "/contact" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Case Studies", id: "case-studies" },
    { label: "Programs", id: "programs" },
    { label: "Innovation", id: "innovation" },
    { label: "Investors", id: "investors" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary text-white flex items-center justify-center font-bold text-base flex-shrink-0 shadow-lg">
                TT
              </div>
              <span className="font-black text-lg leading-tight">
                Tuku-Tuku<br />Innovation Labs
              </span>
            </div>
            <p className="text-white/70 leading-relaxed mb-8 text-sm">
              Innovation grows where communities believe in their own ideas.
              Supporting entrepreneurs across East Africa since 2016.
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
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-gradient-primary hover:shadow-lg flex items-center justify-center transition-all duration-300 hover-lift"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-black mb-6 text-white flex items-center gap-2">
              <div className="h-1 w-6 bg-gradient-secondary rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.slice(0, 7).map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="text-white/70 hover:text-secondary text-sm font-medium transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-black mb-6 text-white flex items-center gap-2">
              <div className="h-1 w-6 bg-gradient-accent rounded-full"></div>
              Contact
            </h4>
            <div className="space-y-4 text-white/70 text-sm">
              <div className="flex items-start gap-3 hover:text-accent transition-colors duration-300 group">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-secondary group-hover:text-accent transition-colors" />
                <span className="leading-relaxed">Gulu, Uganda<br />East Africa</span>
              </div>
              <a href="mailto:info@tukutuku.org" className="flex items-center gap-3 hover:text-accent transition-colors duration-300 group">
                <Mail className="h-5 w-5 flex-shrink-0 text-secondary group-hover:text-accent transition-colors" />
                <span className="font-medium">info@tukutuku.org</span>
              </a>
              <a href="tel:+256792131316" className="flex items-center gap-3 hover:text-accent transition-colors duration-300 group">
                <Phone className="h-5 w-5 flex-shrink-0 text-secondary group-hover:text-accent transition-colors" />
                <span className="font-medium">+256 792131316</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors duration-300 group">
                <MessageCircle className="h-5 w-5 flex-shrink-0 text-secondary group-hover:text-accent transition-colors" />
                <span className="font-medium">WhatsApp us</span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base font-black mb-6 text-white flex items-center gap-2">
              <div className="h-1 w-6 bg-gradient-primary rounded-full"></div>
              Stay Updated
            </h4>
            <p className="text-white/60 text-sm mb-4 font-medium">
              Get insights delivered to your inbox.
            </p>
            {!newsletterSubmitted ? (
              <form onSubmit={handleNewsletter} className="space-y-3">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm font-medium focus:outline-none focus:border-secondary focus:bg-white/15 transition-all duration-300 hover:bg-white/15"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-secondary text-white hover:shadow-lg font-bold py-3 rounded-lg hover-lift text-sm"
                >
                  Subscribe
                </Button>
              </form>
            ) : (
              <div className="flex items-center gap-3 bg-gradient-accent/20 border border-accent/40 rounded-lg px-4 py-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-white/90">You're subscribed!</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm font-medium">
            <p>
              © 2026 Tuku-Tuku Innovation Labs. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
