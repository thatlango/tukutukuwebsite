import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Programs", href: "/programs" },
  { label: "Innovation", href: "/innovation" },
  { label: "Investors", href: "/investors" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover-scale transition-transform">
          <div className="w-12 h-12 rounded-xl bg-gradient-primary text-white flex items-center justify-center font-black text-base shadow-lg">TT</div>
          <span className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-primary hidden sm:inline">Tuku-Tuku</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-semibold transition-all duration-300 ${isActive ? "text-primary" : "text-gray-700 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-primary after:transition-all"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild className="bg-gradient-primary text-white hover-lift font-bold shadow-lg px-6 py-5 rounded-full hover:shadow-xl">
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </nav>

        <button onClick={() => setOpen((v) => !v)} className="lg:hidden p-2 hover-scale transition-transform" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
        </button>
      </div>

      {open ? (
        <nav className="lg:hidden border-t border-white/20 px-4 sm:px-6 pb-4 bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-xl">
          <div className="flex flex-col gap-3 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `py-3 px-4 text-sm font-semibold rounded-lg transition-colors ${isActive ? "bg-gradient-primary text-white" : "text-gray-700 hover:bg-gray-100"}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild className="bg-gradient-primary text-white hover-lift font-bold mt-2 shadow-lg">
              <Link to="/contact" onClick={() => setOpen(false)}>Partner With Us</Link>
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
