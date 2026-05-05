import { MapPin, Mail, Phone, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Programs", to: "/programs" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Innovation", to: "/innovation" },
  { label: "Investors", to: "/investors" },
  { label: "Contact", to: "/contact" },
];

const whatsappUrl =
  "https://wa.me/256792131316?text=Hi%20Tuku-Tuku%2C%20I'd%20like%20to%20learn%20more%20about%20your%20programs.";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/tuku-tuku-innovation-labs" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/tukutukuinnovationlabs" },
  { icon: MessageCircle, label: "WhatsApp", href: whatsappUrl },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="bg-[#0f2419] text-white">
      {/* Main footer grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-sm">TT</span>
              </div>
              <div>
                <p className="font-black text-sm text-white leading-none">Tuku-Tuku</p>
                <p className="text-xs text-white/50 mt-0.5">Innovation Labs</p>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Innovation grows where communities believe in their own ideas.
              Supporting entrepreneurs across East Africa since 2016.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-white/8 hover:bg-primary flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-black text-white mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-white/55 hover:text-accent text-sm font-medium transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-black text-white mb-5 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/55">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span>Gulu, Uganda · East Africa</span>
              </div>
              <a href="mailto:info@tukutuku.org" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                info@tukutuku.org
              </a>
              <a href="tel:+256792131316" className="flex items-center gap-3 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                +256 792 131 316
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                <MessageCircle className="h-4 w-4 text-accent flex-shrink-0" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-black text-white mb-5 uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-white/55 text-sm mb-4">
              Get insights and program updates delivered to your inbox.
            </p>
            {done ? (
              <div className="bg-primary/40 border border-accent/30 rounded-lg px-4 py-3 text-sm text-accent font-semibold">
                You're subscribed!
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
                className="flex flex-col gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/8 border border-white/15 text-white text-sm placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                />
                <button
                  type="submit"
                  className="bg-accent text-accent-foreground font-bold text-sm py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40 font-medium">
          <p>© 2026 Tuku-Tuku Innovation Labs. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
