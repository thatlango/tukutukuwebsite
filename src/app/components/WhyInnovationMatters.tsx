import { Section } from "./Section";

const reasons = [
  {
    title: "Local Context",
    description: "We understand East African markets, regulations, and cultural dynamics. Our solutions are built for the realities of operating in Northern Uganda and beyond.",
  },
  {
    title: "Proven Track Record",
    description: "Since 2016, we've supported 45+ programs, trained 1000+ entrepreneurs, and built systems that scale across the region.",
  },
  {
    title: "End-to-End Support",
    description: "From ideation to implementation, we provide the full spectrum of innovation support: training, funding, mentorship, and operational infrastructure.",
  },
];

export function WhyInnovationMatters() {
  return (
    <Section
      id="why"
      eyebrow="Why Innovation Matters"
      title="Why your business needs innovation"
      description="Innovation isn't optional—it's essential for growth in today's competitive landscape."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <div key={reason.title} className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">{index + 1}</span>
            </div>
            <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
            <p className="text-muted-foreground">{reason.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}