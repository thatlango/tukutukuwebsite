import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

interface CTAProps {
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel?: string;
  primaryTarget: string;
  secondaryTarget?: string;
  dark?: boolean;
}

export function CTA({
  title,
  description,
  primaryLabel,
  secondaryLabel,
  primaryTarget,
  secondaryTarget,
  dark = false,
}: CTAProps) {
  return (
    <div
      className={`rounded-2xl p-8 md:p-12 ${
        dark
          ? "bg-primary text-white"
          : "bg-muted border border-gray-100"
      }`}
    >
      <h3
        className={`text-3xl md:text-4xl font-black leading-tight mb-4 ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-lg mb-8 max-w-xl ${
          dark ? "text-white/75" : "text-gray-500"
        }`}
      >
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to={primaryTarget}
          className={`inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-lg text-base transition-colors ${
            dark
              ? "bg-accent text-accent-foreground hover:opacity-90"
              : "bg-primary text-white hover:bg-primary-light"
          }`}
        >
          {primaryLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
        {secondaryLabel && secondaryTarget && (
          <Link
            to={secondaryTarget}
            className={`inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-lg text-base transition-colors border-2 ${
              dark
                ? "border-white/25 text-white hover:bg-white/10"
                : "border-gray-200 text-gray-700 hover:border-primary hover:text-primary"
            }`}
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
