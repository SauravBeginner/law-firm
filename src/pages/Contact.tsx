import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { Button } from "../components/ui/Button";
import { firm } from "../data/firm";
import { images } from "../data/images";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(firm.mapQuery)}&output=embed`;

  function validate(values: FormState) {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) next.message = "Please tell us briefly how we can help.";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with our team"
        description="Reach out with questions, or schedule a confidential consultation about your matter."
        image={images.contactHero}
      />

      <section className="py-24 sm:py-28">
        <div className="container grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Info + Map */}
          <div>
            <SectionHeading eyebrow="Visit or Call" title="Our office" />
            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3.5">
                <MapPin size={19} className="text-bronze shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  {firm.addressLine1}
                  <br />
                  {firm.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-3.5">
                <Phone size={19} className="text-bronze shrink-0" />
                <a href={`tel:${firm.phoneHref}`} className="text-sm hover:text-bronze transition-colors">
                  {firm.phone}
                </a>
              </li>
              <li className="flex items-center gap-3.5">
                <Mail size={19} className="text-bronze shrink-0" />
                <a href={`mailto:${firm.email}`} className="text-sm hover:text-bronze transition-colors">
                  {firm.email}
                </a>
              </li>
            </ul>

            <div className="mt-8 flex items-start gap-3.5">
              <Clock size={19} className="text-bronze shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                {firm.hours.map((h) => (
                  <div key={h.day} className="flex gap-4 text-sm">
                    <span className="w-40 text-muted-foreground">{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 aspect-[4/3] w-full overflow-hidden border border-border">
              <iframe
                title="Whitfield & Cole office location"
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <SectionHeading eyebrow="Send a Message" title="Tell us how we can help" />

            {submitted ? (
              <div className="mt-8 border border-bronze/30 bg-bronze/5 p-8 flex flex-col items-start gap-3">
                <CheckCircle2 size={28} className="text-bronze" />
                <h3 className="text-lg font-semibold">Message received</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thank you, {form.name.split(" ")[0]}. A member of our team
                  will respond within one business day. If your matter is
                  time-sensitive, please call us directly at{" "}
                  <a href={`tel:${firm.phoneHref}`} className="text-bronze">
                    {firm.phone}
                  </a>
                  .
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setForm(initialState);
                    setSubmitted(false);
                  }}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full border border-input bg-background px-4 py-2.5 text-sm focus:border-bronze focus:outline-none"
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full border border-input bg-background px-4 py-2.5 text-sm focus:border-bronze focus:outline-none"
                    placeholder="jane@email.com"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 w-full border border-input bg-background px-4 py-2.5 text-sm focus:border-bronze focus:outline-none"
                    placeholder="(617) 555-0100"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full resize-none border border-input bg-background px-4 py-2.5 text-sm focus:border-bronze focus:outline-none"
                    placeholder="Briefly describe your situation..."
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Submitting this form does not create an attorney-client
                  relationship. Please avoid including sensitive details
                  until we've confirmed representation.
                </p>

                <Button type="submit" variant="bronze" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
