import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Programs", href: "/programs" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Innovation", href: "/innovation" },
  { label: "Investors", href: "/investors" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-gray-100 shadow-sm"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <span className="text-white font-black text-sm tracking-tight">TT</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-black text-sm text-gray-900 leading-none">Tuku-Tuku</p>
            <p className="text-xs text-gray-500 font-medium mt-0.5">Innovation Labs</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-primary bg-primary/8"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-primary-light transition-colors duration-200 flex-shrink-0"
        >
          Partner With Us
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-5 w-5 text-gray-700" />
          ) : (
            <Menu className="h-5 w-5 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center bg-primary text-white text-sm font-bold px-5 py-3 rounded-lg hover:bg-primary-light transition-colors"
            >
              Partner With Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
