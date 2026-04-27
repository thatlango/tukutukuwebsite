import { ServicesOverview } from "../components/ServicesOverview";
import { CTA } from "../components/CTA";

export default function ServicesPage() {
  return (
    <main>
      <ServicesOverview />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <CTA
          title="Need scoped service delivery?"
          description="Tell us the challenge and we will propose a clear delivery pathway with measurable outputs."
          primaryLabel="Start a Project"
          primaryTarget="/contact"
          secondaryLabel="Partner"
          secondaryTarget="/contact"
        />
      </div>
    </main>
  );
}
