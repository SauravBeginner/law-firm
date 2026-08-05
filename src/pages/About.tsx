import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Scale, Handshake } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { Button } from "../components/ui/Button";
import { firm } from "../data/firm";
import { attorneys } from "../data/attorneys";
import { images } from "../data/images";

const values = [
  {
    icon: ShieldCheck,
    title: "Discretion",
    body: "Client matters are handled with strict confidentiality, from the first consultation through resolution.",
  },
  {
    icon: Scale,
    title: "Preparation",
    body: "We prepare every matter as though it will be tried, which is why so few of ours need to be.",
  },
  {
    icon: Handshake,
    title: "Directness",
    body: "You'll get straightforward advice about your options and their likely outcomes — not what's easiest to say.",
  },
];

const stats = [
  { value: "1994", label: "Firm Founded" },
  { value: "6", label: "Attorneys" },
  { value: "2,400+", label: "Cases Resolved" },
  { value: "$180M+", label: "Recovered for Clients" },
];

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About the Firm"
        title="Three decades of steady, direct representation"
        description="Whitfield & Cole was built on a simple premise: clients deserve attorneys who prepare rigorously and communicate honestly."
        image={images.aboutOffice}
      />

      {/* History */}
      <section className="py-24 sm:py-28">
        <div className="container grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Founded on the idea that clients deserve better answers"
            />
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Whitfield & Cole was founded in {firm.founded} by Margaret
                Whitfield and Daniel Cole, two Boston litigators who believed
                clients were too often left in the dark about their own
                cases. They built a practice around plain communication and
                rigorous preparation — and grew it, case by case, into a
                mid-size firm still guided by those same principles.
              </p>
              <p>
                Today the firm's six attorneys handle personal injury, family
                law, corporate matters, real estate, criminal defense, and
                estate planning for clients across Massachusetts. We've
                stayed intentionally mid-size: large enough to handle
                complex, high-stakes matters, small enough that every client
                works directly with the attorney handling their case.
              </p>
            </div>
            <Link to="/attorneys" className="mt-8 inline-block">
              <Button variant="outline">
                Meet the Full Team
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={images.aboutBuilding}
              alt="Whitfield & Cole office interior"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container grid grid-cols-2 gap-8 py-14 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="font-serif text-3xl sm:text-4xl font-semibold text-bronze">{s.value}</p>
              <p className="mt-1.5 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="What Guides Us"
            title="The principles behind every matter we take"
            align="center"
            className="mx-auto"
          />
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="text-center px-6">
                <span className="inline-flex h-14 w-14 items-center justify-center border border-bronze/30 text-bronze mx-auto">
                  <v.icon size={24} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership preview */}
      <section className="py-24 sm:py-28 bg-secondary/40 border-t border-border">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet the partners"
            description="A closer look at the attorneys who founded and lead the firm."
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {attorneys.slice(0, 3).map((a) => (
              <Link
                key={a.slug}
                to="/attorneys"
                className="group bg-card border border-border overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.name}
                    className="h-full w-full object-cover grayscale-[15%] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{a.name}</h3>
                  <p className="text-sm text-bronze mt-0.5">{a.title}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.bio}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/attorneys">
              <Button variant="bronze">
                View All Attorneys
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
