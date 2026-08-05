import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Scale } from "lucide-react";
import { firm, navLinks } from "../data/firm";
import { Button } from "./ui/Button";
import ThemeToggle from "./ThemeToggle";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "bg-background/95 backdrop-blur border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <Scale size={26} className="text-bronze" strokeWidth={1.5} />
          <span className="font-serif text-xl font-semibold leading-none tracking-tight text-foreground">
            {firm.name}
            <span className="block text-[10px] font-sans font-medium tracking-[0.25em] text-muted-foreground uppercase mt-0.5">
              {firm.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium tracking-wide transition-colors",
                  isActive ? "text-bronze" : "text-foreground/80 hover:text-foreground"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link to="/consultation">
            <Button variant="bronze" size="sm">
              Schedule a Consultation
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center text-foreground"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "py-2.5 text-sm font-medium tracking-wide border-b border-border/60 last:border-0",
                    isActive ? "text-bronze" : "text-foreground/80"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/consultation" className="mt-4">
              <Button variant="bronze" className="w-full">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
