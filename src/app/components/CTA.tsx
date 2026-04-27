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
    <div className={`rounded-2xl border p-8 md:p-10 ${dark ? "bg-primary border-primary text-white" : "bg-card border-border"}`}>
      <h3 className={`text-2xl font-bold mb-3 ${dark ? "text-white" : "text-primary"}`}>{title}</h3>
      <p className={`${dark ? "text-white/85" : "text-muted-foreground"} mb-6`}>{description}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          className={dark ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/90"}
          onClick={() => scrollTo(primaryTarget)}
        >
          {primaryLabel}
        </Button>
        {secondaryLabel && secondaryTarget ? (
          <Button
            variant="outline"
            className={dark ? "border-white/40 text-white hover:bg-white/10" : "border-primary/40 text-primary hover:bg-primary/5"}
            onClick={() => scrollTo(secondaryTarget)}
          >
            {secondaryLabel}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
