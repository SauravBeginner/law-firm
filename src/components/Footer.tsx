import { Link } from "react-router-dom";
import { Scale, MapPin, Phone, Mail } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { firm, navLinks } from "../data/firm";
import { practiceAreas } from "../data/practiceAreas";

export default function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container py-16 grid grid-cols-1 gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2.5">
            <Scale size={24} className="text-bronze" strokeWidth={1.5} />
            <span className="font-serif text-lg font-semibold">{firm.name}</span>
          </Link>
          <p className="mt-4 text-sm text-ink-foreground/65 leading-relaxed">
            Counsel built on discretion, preparation, and a straightforward
            relationship with every client we represent.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={firm.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center border border-ink-foreground/20 text-ink-foreground/80 hover:border-bronze hover:text-bronze transition-colors"
            >
              <FaLinkedinIn size={14} />
            </a>
            <a
              href={firm.social.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="inline-flex h-9 w-9 items-center justify-center border border-ink-foreground/20 text-ink-foreground/80 hover:border-bronze hover:text-bronze transition-colors"
            >
              <FaXTwitter size={14} />
            </a>
            <a
              href={firm.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center border border-ink-foreground/20 text-ink-foreground/80 hover:border-bronze hover:text-bronze transition-colors"
            >
              <FaFacebookF size={14} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/50">
            Navigate
          </h4>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-ink-foreground/75 hover:text-bronze transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/50">
            Practice Areas
          </h4>
          <ul className="mt-4 space-y-2.5">
            {practiceAreas.slice(0, 5).map((area) => (
              <li key={area.slug}>
                <Link
                  to="/practice-areas"
                  className="text-sm text-ink-foreground/75 hover:text-bronze transition-colors"
                >
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/50">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/75">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-bronze shrink-0 mt-0.5" />
              <span>
                {firm.addressLine1}
                <br />
                {firm.addressLine2}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-bronze shrink-0" />
              <a href={`tel:${firm.phoneHref}`} className="hover:text-bronze transition-colors">
                {firm.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-bronze shrink-0" />
              <a href={`mailto:${firm.email}`} className="hover:text-bronze transition-colors">
                {firm.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-foreground/50">
          <p>
            &copy; {new Date().getFullYear()} {firm.fullName}. All rights reserved.
          </p>
          <p>Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
        </div>
      </div>
    </footer>
  );
}
