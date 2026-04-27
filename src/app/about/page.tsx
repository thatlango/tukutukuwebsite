import { AboutSection } from "../components/AboutSection";
import { CTA } from "../components/CTA";

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CTA
          title="Build long-term systems with us"
          description="If you need a dependable East Africa implementation partner, we can co-design and deploy with you."
          primaryLabel="Work With Us"
          primaryTarget="/contact"
          secondaryLabel="View Services"
          secondaryTarget="/services"
        />
      </div>
    </main>
  );
}
