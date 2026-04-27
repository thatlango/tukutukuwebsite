import { Hero } from "./components/Hero";
import { TrustSection } from "./components/TrustSection";
import { ServicesOverview } from "./components/ServicesOverview";
import { Pipeline } from "./components/Pipeline";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { CTA } from "./components/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <ServicesOverview />
      <Pipeline />
      <CaseStudiesSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <CTA
          title="Ready to transform your innovation pipeline?"
          description="Partner with us to build scalable solutions that drive real impact across East Africa."
          primaryLabel="Partner With Us"
          primaryTarget="/contact"
          secondaryLabel="Explore Our Work"
          secondaryTarget="/case-studies"
        />
      </div>
    </main>
  );
}
