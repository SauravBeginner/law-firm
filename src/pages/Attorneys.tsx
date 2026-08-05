import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Scale as ScaleIcon } from "lucide-react";
import PageHero from "../components/PageHero";
import { Button } from "../components/ui/Button";
import { attorneys } from "../data/attorneys";
import { images } from "../data/images";

export default function Attorneys() {
  return (
    <div>
      <PageHero
        eyebrow="Our Team"
        title="Attorneys who know their practice areas cold"
        description="Six attorneys, one point of contact for every client — from first consultation through resolution."
        image={images.attorneysHero}
      />

      <section className="py-24 sm:py-28">
        <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {attorneys.map((a) => (
            <div key={a.slug} className="border border-border bg-card overflow-hidden flex flex-col">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={a.image} alt={a.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-semibold">{a.name}</h3>
                <p className="text-sm text-bronze mt-0.5">{a.title}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{a.focus}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1">{a.longBio}</p>

                <div className="mt-6 space-y-3 border-t border-border pt-5">
                  <div className="flex gap-2.5 text-xs">
                    <GraduationCap size={15} className="text-bronze shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{a.education.join(" · ")}</span>
                  </div>
                  <div className="flex gap-2.5 text-xs">
                    <ScaleIcon size={15} className="text-bronze shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Admitted: {a.admissions.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 border-t border-border py-20">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-3xl font-semibold text-balance">
            Ready to talk with one of our attorneys?
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
