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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-sm">TT</span>
          <span className="text-lg sm:text-xl font-bold text-primary hidden sm:inline">Tuku-Tuku Innovation Labs</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Link to="/contact">Work With Us</Link>
          </Button>
        </nav>

        <button onClick={() => setOpen((v) => !v)} className="lg:hidden p-2" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <nav className="lg:hidden border-t border-border px-4 sm:px-6 pb-4 bg-white">
          <div className="flex flex-col gap-3 pt-3">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `py-2 text-sm font-medium ${isActive ? "text-primary" : "text-foreground"}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <Link to="/contact" onClick={() => setOpen(false)}>Work With Us</Link>
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
