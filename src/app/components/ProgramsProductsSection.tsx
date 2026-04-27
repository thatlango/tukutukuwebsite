import { Section } from "./Section";
import { Button } from "./ui/button";

const programs = [
  {
    name: "Venture Launch Sprint",
    duration: "12 weeks",
    audience: "Early-stage founders and student entrepreneurs",
    outcomes: "Validated opportunity, go-to-market roadmap, and operating plan.",
  },
  {
    name: "MSME Growth Pipeline",
    duration: "16 weeks",
    audience: "Growth-stage MSMEs and women-led enterprises",
    outcomes: "Operational upgrades, sales systems, and financing readiness.",
  },
  {
    name: "Institution Innovation Lab",
    duration: "6-12 months",
    audience: "Universities, local government, and partner institutions",
    outcomes: "Embedded innovation curriculum, facilitator teams, and tracking systems.",
  },
];

export function ProgramsProductsSection() {
  const goToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <Section
      id="programs"
      eyebrow="Programs"
      title="Programs designed like products"
      description="Each program has a clear duration, target audience, and concrete outcomes."
    >
      <div className="grid lg:grid-cols-3 gap-5 mb-8">
        {programs.map((program) => (
          <article key={program.name} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl font-bold text-primary mb-3">{program.name}</h3>
            <p className="text-sm mb-2"><span className="font-semibold">Duration:</span> {program.duration}</p>
            <p className="text-sm mb-2"><span className="font-semibold">Target audience:</span> {program.audience}</p>
            <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Outcomes:</span> {program.outcomes}</p>
          </article>
        ))}
      </div>
      <Button
        className="bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={goToContact}
      >
        Apply to a Program
      </Button>
    </Section>
  );
}
