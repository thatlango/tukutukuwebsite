import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  invert?: boolean;
  children: ReactNode;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  className = "",
  invert = false,
  children,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 lg:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          {eyebrow ? (
            <p className={`text-sm uppercase tracking-[0.2em] font-semibold mb-3 ${invert ? "text-accent" : "text-primary"}`}>
              {eyebrow}
            </p>
          ) : null}
          <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${invert ? "text-white" : "text-primary"}`}>
            {title}
          </h2>
          {description ? (
            <p className={`text-lg leading-relaxed ${invert ? "text-white/85" : "text-muted-foreground"}`}>
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
