import { motion } from "motion/react";
import { MapPin, Mail, Phone, Linkedin, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: MessageCircle, label: "WhatsApp", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Tuku-Tuku Innovation Labs
            </h3>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Innovation grows where communities believe in their own ideas.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Gulu, Uganda</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:info@tukutuku.org"
                  className="hover:text-accent transition-colors"
                >
                  info@tukutuku.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+256 792131316</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
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
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
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