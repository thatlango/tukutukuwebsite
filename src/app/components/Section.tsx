import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  invert?: boolean;
  titleAlign?: "left" | "center";
  children: ReactNode;
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  className = "",
  invert = false,
  titleAlign = "left",
  children,
}: SectionProps) {
  const isCenter = titleAlign === "center";

  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-14 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}>
          {eyebrow && (
            <div className={`inline-flex items-center gap-2 mb-4 ${isCenter ? "justify-center" : ""}`}>
              <span
                className={`text-xs uppercase tracking-[0.2em] font-bold ${
                  invert ? "text-accent" : "text-primary"
                }`}
              >
                {eyebrow}
              </span>
            </div>
          )}
          <h2
            className={`text-4xl md:text-5xl font-black leading-tight mb-5 ${
              invert ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`text-lg leading-relaxed ${
                invert ? "text-white/75" : "text-gray-500"
              }`}
            >
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
