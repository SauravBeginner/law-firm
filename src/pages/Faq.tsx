import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { Button } from "../components/ui/Button";
import { faqs } from "../data/faqs";
import { images } from "../data/images";
import { cn } from "../lib/utils";

const categories = Array.from(new Set(faqs.map((f) => f.category)));

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-medium text-base sm:text-lg">{question}</span>
        <ChevronDown
          size={20}
          className={cn("shrink-0 text-bronze transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "grid overflow-hidden transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <div>
      <PageHero
        eyebrow="Resources & FAQ"
        title="Answers to common client questions"
        description="Straightforward answers about consultations, fees, and what to expect when you work with us."
        image={images.faqHero}
      />

      <section className="py-24 sm:py-28">
        <div className="container max-w-3xl">
          {categories.map((cat) => (
            <div key={cat} className="mb-14 last:mb-0">
              <SectionHeading title={cat} className="mb-2 max-w-none" />
              <div className="mt-4">
                {faqs
                  .filter((f) => f.category === cat)
                  .map((f) => (
                    <AccordionItem key={f.question} question={f.question} answer={f.answer} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 border-t border-border py-20">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-3xl font-semibold text-balance">
            Still have questions about your situation?
          </h2>
          <p className="max-w-lg text-muted-foreground">
            The details of your case matter more than general answers.
            Schedule a confidential consultation and we'll walk through it
            together.
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
