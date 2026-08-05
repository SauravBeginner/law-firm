import { type ReactNode } from "react";
import { cn } from "../lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  size?: "default" | "large";
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  size = "default",
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden bg-ink",
        size === "large" ? "min-h-[85vh] pt-32 pb-24" : "min-h-[46vh] pt-32 pb-16"
      )}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-85"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />

      <div className="container relative z-10">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-semibold text-ink-foreground sm:text-5xl md:text-6xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base text-ink-foreground/75 leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
