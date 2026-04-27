import { ProgramsProductsSection } from "../components/ProgramsProductsSection";
import { CTA } from "../components/CTA";

export default function ProgramsPage() {
  return (
    <main>
      <ProgramsProductsSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CTA
          title="Ready to apply or co-deliver a program?"
          description="We run practical, productized programs for founders, MSMEs, and institutions."
          primaryLabel="Apply"
          primaryTarget="/contact"
          secondaryLabel="Partner"
          secondaryTarget="/contact"
        />
      </div>
    </main>
  );
}
