import { Button } from "./ui/button";

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
  const scrollTo = (id: string) => {
    if (id.startsWith("/")) {
      window.location.href = id;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`rounded-3xl border p-8 md:p-12 lg:p-16 relative overflow-hidden hover-lift transition-all duration-300 ${dark ? "bg-gradient-primary border-0 text-white shadow-2xl" : "bg-gradient-to-br from-white to-gray-50 border-white/20 shadow-xl"}`}>
      {/* Background decorative elements */}
      {dark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-black/10 rounded-full blur-3xl"></div>
        </div>
      )}

      <div className="relative z-10">
        <h3 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-4 ${dark ? "text-white" : "text-gradient"}`}>
          {title}
        </h3>
        <p className={`text-lg md:text-xl mb-8 max-w-2xl ${dark ? "text-white/90" : "text-gray-700"}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className={`font-bold px-8 py-6 rounded-full text-base hover-lift shadow-lg ${dark ? "bg-white text-primary hover:bg-white/95" : "bg-gradient-primary text-white hover:shadow-xl"}`}
            onClick={() => scrollTo(primaryTarget)}
          >
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryTarget ? (
            <Button
              size="lg"
              variant="outline"
              className={`font-bold px-8 py-6 rounded-full text-base hover-scale ${dark ? "border-white/30 text-white hover:bg-white/10" : "border-primary/30 text-primary hover:bg-primary/5"}`}
              onClick={() => scrollTo(secondaryTarget)}
            >
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
