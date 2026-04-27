import { Section } from "./Section";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About Tuku-Tuku"
      title="Built in Northern Uganda. Deployed across East Africa."
      description="Our origin is Northern Uganda, where constraints are real and execution quality matters. That foundation shaped our philosophy: we build what stays."
      className="bg-muted/30"
    >
      <div className="grid lg:grid-cols-3 gap-5">
        <article className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-lg font-bold text-primary mb-2">Origin Story</h3>
          <p className="text-sm text-muted-foreground">
            We started by working directly with local entrepreneurs and institutions in Gulu, building practical systems in high-constraint environments.
          </p>
        </article>
        <article className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-lg font-bold text-primary mb-2">Philosophy</h3>
          <p className="text-sm text-muted-foreground">
            We build what stays — systems partners can continue running long after project funding windows close.
          </p>
        </article>
        <article className="rounded-2xl border border-border bg-card p-6">
          <h3 className="text-lg font-bold text-primary mb-2">Long-Term Vision</h3>
          <p className="text-sm text-muted-foreground">
            Become a regional innovation infrastructure platform connecting talent, institutions, and capital across East Africa and beyond.
          </p>
        </article>
      </div>
    </Section>
  );
}
