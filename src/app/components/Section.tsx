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
    <section id={id} className={`py-20 lg:py-28 relative overflow-hidden ${className}`}>
      {/* Decorative background elements */}
      {!invert && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          {eyebrow ? (
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-1 w-6 bg-gradient-primary rounded-full"></div>
              <p className={`text-sm uppercase tracking-[0.2em] font-bold ${invert ? "text-secondary" : "text-primary"}`}>
                {eyebrow}
              </p>
            </div>
          ) : null}
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 ${invert ? "text-white" : "text-gradient"}`}>
            {title}
          </h2>
          {description ? (
            <p className={`text-lg md:text-xl leading-relaxed ${invert ? "text-white/85" : "text-gray-600"}`}>
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
