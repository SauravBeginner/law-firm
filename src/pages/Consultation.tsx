import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import { Button } from "../components/ui/Button";
import { practiceAreas } from "../data/practiceAreas";
import { firm } from "../data/firm";
import { images } from "../data/images";

interface FormState {
  name: string;
  email: string;
  phone: string;
  practiceArea: string;
  date: string;
  time: string;
  description: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  practiceArea: "",
  date: "",
  time: "",
  description: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function Consultation() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values: FormState): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your full name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.phone.trim()) next.phone = "Please enter a phone number.";
    if (!values.practiceArea) next.practiceArea = "Please select a practice area.";
    if (!values.date) next.date = "Please select a preferred date.";
    if (!values.description.trim()) next.description = "Please briefly describe your situation.";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const selectedArea = practiceAreas.find((p) => p.slug === form.practiceArea);

  return (
    <div>
      <PageHero
        eyebrow="Schedule a Consultation"
        title="Speak confidentially with an attorney"
        description="Tell us a bit about your situation and preferred timing. We'll confirm your consultation within one business day."
        image={images.consultationHero}
      />

      <section className="py-24 sm:py-28">
        <div className="container grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="border border-border p-7 bg-secondary/40 sticky top-28">
              <ShieldCheck size={26} className="text-bronze" strokeWidth={1.5} />
              <h3 className="mt-4 font-semibold">Your consultation is confidential</h3>
              <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                Everything you share is protected by attorney-client
                privilege, whether or not you ultimately retain the firm.
                There's no obligation to move forward after your
                consultation.
              </p>
              <div className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground space-y-2">
                <p>Prefer to talk now?</p>
                <a href={`tel:${firm.phoneHref}`} className="font-medium text-bronze block">
                  {firm.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 order-1 lg:order-2">
            {submitted ? (
              <div className="border border-bronze/30 bg-bronze/5 p-10 flex flex-col items-start gap-4">
                <CheckCircle2 size={32} className="text-bronze" />
                <h2 className="text-2xl font-semibold">Consultation request received</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Thank you, {form.name.split(" ")[0]}. We've received your
                  request for a consultation
                  {selectedArea ? ` regarding ${selectedArea.title.toLowerCase()}` : ""}
                  {form.date ? ` on ${form.date}` : ""}
                  {form.time ? ` at ${form.time}` : ""}. A member of our
                  team will call {form.phone || "you"} within one business
                  day to confirm the details.
                </p>
                <p className="text-sm text-muted-foreground">
                  This request and everything you shared are treated as
                  confidential.
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setForm(initialState);
                      setSubmitted(false);
                    }}
                  >
                    Schedule Another Consultation
                  </Button>
                  <Link to="/">
                    <Button variant="bronze">
                      Return Home
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-2 w-full border border-input bg-background px-4 py-2.5 text-sm focus:border-bronze focus:outline-none"
                      placeholder="Jane Doe"
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="c-phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-2 w-full border border-input bg-background px-4 py-2.5 text-sm focus:border-bronze focus:outline-none"
                      placeholder="(617) 555-0100"
                    />
                    {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="c-email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full border border-input bg-background px-4 py-2.5 text-sm focus:border-bronze focus:outline-none"
                    placeholder="jane@email.com"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="c-area" className="text-sm font-medium">
                    Practice Area of Interest
                  </label>
                  <select
                    id="c-area"
                    value={form.practiceArea}
                    onChange={(e) => setForm({ ...form, practiceArea: e.target.value })}
                    className="mt-2 w-full border border-input bg-background px-4 py-2.5 text-sm focus:border-bronze focus:outline-none"
                  >
                    <option value="">Select a practice area&hellip;</option>
                    {practiceAreas.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                  {errors.practiceArea && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.practiceArea}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-date" className="text-sm font-medium">
                      Preferred Date
                    </label>
                    <input
                      id="c-date"
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="mt-2 w-full border border-input bg-background px-4 py-2.5 text-sm focus:border-bronze focus:outline-none"
                    />
                    {errors.date && <p className="mt-1.5 text-xs text-destructive">{errors.date}</p>}
                  </div>
                  <div>
                    <label htmlFor="c-time" className="text-sm font-medium">
                      Preferred Time <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <input
                      id="c-time"
                      type="time"
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="mt-2 w-full border border-input bg-background px-4 py-2.5 text-sm focus:border-bronze focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-description" className="text-sm font-medium">
                    Briefly describe your case
                  </label>
                  <textarea
                    id="c-description"
                    rows={5}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="mt-2 w-full resize-none border border-input bg-background px-4 py-2.5 text-sm focus:border-bronze focus:outline-none"
                    placeholder="Share what's going on and what you're hoping to accomplish..."
                  />
                  {errors.description && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.description}</p>
                  )}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  All consultations are confidential. Submitting this form
                  does not by itself create an attorney-client relationship.
                </p>

                <Button type="submit" variant="bronze" size="lg" className="w-full sm:w-auto">
                  Request Consultation
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
