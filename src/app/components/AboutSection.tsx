import { Section } from "./Section";

export function AboutSection() {
  const progressItems = [
    { label: "Marketing & Business Growth", value: 85 },
    { label: "Creativity & Innovation", value: 80 },
    { label: "Business & Financial Management", value: 95 },
  ];

  return (
    <Section
      id="about"
      eyebrow="About Us"
      title="We are the best innovation partner in town"
      description="Our origin is Northern Uganda, where constraints are real and execution quality matters. That foundation shaped our philosophy: we build what stays."
      className="bg-[#ecf6eb]"
    >
      <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="grid gap-5 sm:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Innovation team workshop"
            className="h-full w-full rounded-[2rem] object-cover shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1531497865146-0c3cabbcf0f7?auto=format&fit=crop&w=800&q=80"
            alt="Team reviewing strategy"
            className="h-full w-full rounded-[2rem] object-cover shadow-lg"
          />
        </div>

        <div className="space-y-8">
          <div className="rounded-[2rem] border border-border bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">Origin Story</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We started by working directly with local entrepreneurs and institutions in Gulu, building practical systems in high-constraint environments.
            </p>
            <div className="mt-8 grid gap-4">
              {progressItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm font-semibold text-foreground mb-2">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="rounded-[2rem] border border-border bg-white p-6 shadow-sm">
              <h4 className="text-base font-bold text-primary mb-3">Philosophy</h4>
              <p className="text-sm text-muted-foreground">
                We build what stays — systems partners can continue running long after project funding windows close.
              </p>
            </article>
            <article className="rounded-[2rem] border border-border bg-white p-6 shadow-sm">
              <h4 className="text-base font-bold text-primary mb-3">Long-Term Vision</h4>
              <p className="text-sm text-muted-foreground">
                Become a regional innovation infrastructure platform connecting talent, institutions, and capital across East Africa and beyond.
              </p>
            </article>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "3k+", label: "Successful Projects" },
              { value: "200+", label: "Expert Team" },
              { value: "350+", label: "Happy Customers" },
              { value: "16+", label: "Years of Experience" },
            ].map((metric) => (
              <div key={metric.label} className="rounded-[1.5rem] bg-primary/10 p-5 text-center">
                <p className="text-3xl font-bold text-primary">{metric.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
