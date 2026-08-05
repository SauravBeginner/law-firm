import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "../components/PageHero";
import PracticeIcon from "../components/PracticeIcon";
import { Button } from "../components/ui/Button";
import { practiceAreas } from "../data/practiceAreas";
import { images } from "../data/images";

export default function PracticeAreas() {
  return (
    <div>
      <PageHero
        eyebrow="Practice Areas"
        title="Focused counsel across six practice areas"
        description="Each practice area is led by attorneys who handle that work every day, backed by the resources of a full-service firm."
        image={images.practiceAreasHero}
      />

      <section className="py-24 sm:py-28">
        <div className="container space-y-16">
          {practiceAreas.map((area, i) => (
            <div
              key={area.slug}
              id={area.slug}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7 border border-border p-8 sm:p-10 bg-card">
                <PracticeIcon icon={area.icon} size={30} strokeWidth={1.5} className="text-bronze" />
                <h2 className="mt-6 text-2xl sm:text-3xl font-semibold">{area.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{area.description}</p>
                <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {area.services.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm">
                      <Check size={15} className="mt-0.5 shrink-0 text-bronze" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/consultation" className="mt-7 inline-block">
                  <Button variant="bronze" size="sm">
                    Discuss Your Case
                    <ArrowRight size={15} />
                  </Button>
                </Link>
              </div>
              <div className="lg:col-span-5 flex h-56 items-center justify-center border border-border bg-secondary/40 lg:h-full">
                <span className="font-serif text-7xl text-bronze/25 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl sm:text-4xl font-semibold text-ink-foreground text-balance">
            Not sure which practice area fits your situation?
          </h2>
          <p className="max-w-lg text-ink-foreground/70">
            Tell us what's going on during a confidential consultation and
            we'll point you to the right attorney.
          </p>
          <Link to="/consultation">
            <Button variant="bronze" size="lg">
              Schedule a Consultation
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
