import { HowWeBuildInnovation } from "../components/HowWeBuildInnovation";
import { PipelineSection } from "../components/PipelineSection";
import { Section } from "../components/Section";
import { CTA } from "../components/CTA";

export default function InnovationPage() {
  return (
    <main>
      <Section
        eyebrow="Innovation"
        title="What innovation means here"
        description="For Tuku-Tuku, innovation means building practical systems that keep producing outcomes long after a project ends."
      >
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          <article className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-primary mb-2">Innovation as Systems Design</h3>
            <p className="text-sm text-muted-foreground">We treat innovation as infrastructure: repeatable processes, scalable platforms, and sustainable models that outlast individual projects.</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-primary mb-2">Importance of Local Infrastructure</h3>
            <p className="text-sm text-muted-foreground">Without strong local systems, imported models fail. We build the foundational infrastructure that enables sustainable innovation ecosystems.</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-primary mb-2">The Tuku-Tuku Model</h3>
            <p className="text-sm text-muted-foreground">Source, train, validate, build, prepare, connect. Our 6-stage pipeline transforms raw potential into investment-ready ventures.</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold text-primary mb-2">Ecosystem Transformation Vision</h3>
            <p className="text-sm text-muted-foreground">Become a regional innovation infrastructure platform connecting talent, institutions, and capital across East Africa and beyond.</p>
          </article>
        </div>
      </Section>
      <HowWeBuildInnovation />
      <PipelineSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CTA
          title="Design innovation systems with us"
          description="If you are building ecosystem infrastructure in East Africa, we can help design and deploy with implementation rigor."
          primaryLabel="Work With Us"
          primaryTarget="/contact"
          secondaryLabel="Partner"
          secondaryTarget="/contact"
        />
      </div>
    </main>
  );
}
