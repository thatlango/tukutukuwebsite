import { CaseStudiesSection } from "../components/CaseStudiesSection";
import { CTA } from "../components/CTA";

export default function CaseStudiesPage() {
  return (
    <main>
      <CaseStudiesSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CTA
          title="Want outcomes like these?"
          description="Partner with us to design and execute systems that produce measurable, repeatable impact."
          primaryLabel="Partner With Us"
          primaryTarget="/contact"
          secondaryLabel="View Programs"
          secondaryTarget="/programs"
        />
      </div>
    </main>
  );
}
