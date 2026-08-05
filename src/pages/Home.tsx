import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote } from "lucide-react";
import { Button } from "../components/ui/Button";
import SectionHeading from "../components/SectionHeading";
import PracticeIcon from "../components/PracticeIcon";
import { firm } from "../data/firm";
import { practiceAreas } from "../data/practiceAreas";
import { testimonials } from "../data/testimonials";
import { images } from "../data/images";

const stats = [
  { value: "30+", label: "Years in Practice" },
  { value: "2,400+", label: "Cases Resolved" },
  { value: "$180M+", label: "Recovered for Clients" },
  { value: "4.9/5", label: "Average Client Rating" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink">
        <img
          src={images.heroHome}
          alt="Boston financial district skyline at dusk"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/25 to-transparent" />

        <div className="container relative z-10 pt-24">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-bronze animate-fade-in">
            {firm.fullName} &middot; Since {firm.founded}
          </p>
          <h1
            className="max-w-3xl text-5xl font-semibold leading-[1.08] text-ink-foreground sm:text-6xl md:text-7xl text-balance animate-fade-in"
            style={{ animationDelay: "80ms" }}
          >
            Counsel that stands firm when it matters most.
          </h1>
          <p
            className="mt-6 max-w-xl text-lg text-ink-foreground/75 leading-relaxed animate-fade-in"
            style={{ animationDelay: "160ms" }}
          >
            For three decades, Boston families and businesses have trusted
            Whitfield &amp; Cole for direct advice, careful preparation, and
            representation that doesn't back down.
          </p>
          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in"
            style={{ animationDelay: "240ms" }}
          >
            <Link to="/consultation">
              <Button variant="bronze" size="lg">
                Schedule a Consultation
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/practice-areas">
              <Button variant="outlineLight" size="lg">
                Our Practice Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container grid grid-cols-2 gap-8 py-14 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="font-serif text-3xl sm:text-4xl font-semibold text-bronze">{s.value}</p>
              <p className="mt-1.5 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practice areas preview */}
      <section className="py-24 sm:py-28">
        <div className="container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="What We Do"
              title="Practice areas built around real outcomes"
              description="A focused set of practice areas, each led by attorneys who handle that work every day — not a generalist trying to cover everything."
            />
            <Link to="/practice-areas" className="shrink-0">
              <Button variant="outline">
                View All Practice Areas
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                to="/practice-areas"
                className="group relative bg-background p-8 transition-colors hover:bg-secondary/60"
              >
                <PracticeIcon icon={area.icon} size={28} strokeWidth={1.5} className="text-bronze" />
                <h3 className="mt-6 text-xl font-semibold">{area.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{area.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-bronze opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us / image band */}
      <section className="py-24 sm:py-28 bg-secondary/40 border-y border-border">
        <div className="container grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={images.aboutOffice}
              alt="Whitfield & Cole conference room"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Why Whitfield & Cole"
              title="Direct advice. Serious preparation. No surprises."
              description="We built this firm on the idea that clients deserve straight answers, even when they're not what a client hoped to hear. Every matter is prepared as though it will be tried, whether it ultimately is or not."
            />
            <ul className="mt-8 space-y-5">
              {[
                {
                  title: "Partner-level attention",
                  body: "A partner or senior associate oversees every matter from intake through resolution.",
                },
                {
                  title: "Contingency options",
                  body: "Personal injury clients pay no attorney's fees unless we recover compensation.",
                },
                {
                  title: "Confidential by default",
                  body: "Consultations are privileged from the first conversation, whether or not you retain us.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-bronze" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Client Testimonials"
            title="What clients say after working with us"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
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

      {/* CTA banner */}
      <section className="bg-ink py-20">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl sm:text-4xl font-semibold text-ink-foreground text-balance">
            Speak with an attorney about your situation
          </h2>
          <p className="max-w-lg text-ink-foreground/70">
            Consultations are confidential. There's no obligation, and for
            personal injury matters, no fee unless we recover for you.
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
