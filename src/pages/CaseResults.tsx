import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { Button } from "../components/ui/Button";
import { caseResults, resultsDisclaimer } from "../data/caseResults";
import { testimonials } from "../data/testimonials";
import { images } from "../data/images";

export default function CaseResults() {
  return (
    <div>
      <PageHero
        eyebrow="Case Results & Testimonials"
        title="A track record built one case at a time"
        description="A sample of outcomes we've secured for clients, alongside their own words about working with us."
        image={images.caseResultsHero}
      />

      <section className="py-24 sm:py-28">
        <div className="container">
          <SectionHeading eyebrow="Notable Results" title="Recent case outcomes" />
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {caseResults.map((c) => (
              <div key={c.title} className="bg-background p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
                  {c.practiceArea}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
                <p className="mt-5 font-serif text-2xl font-semibold text-foreground">{c.outcome}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-xs text-muted-foreground leading-relaxed">
            {resultsDisclaimer}
          </p>
        </div>
      </section>

      <section className="py-24 sm:py-28 bg-secondary/40 border-y border-border">
        <div className="container">
          <SectionHeading
            eyebrow="Client Testimonials"
            title="Hear from clients we've represented"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="border border-border p-8 bg-card">
                <Quote size={22} className="text-bronze/60" />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-bronze text-bronze" />
                  ))}
                </div>
                <figcaption className="mt-3 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="text-muted-foreground"> &middot; {t.context}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl sm:text-4xl font-semibold text-ink-foreground text-balance">
            Your case could be next
          </h2>
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
