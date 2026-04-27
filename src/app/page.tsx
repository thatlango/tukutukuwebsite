import { Hero } from "./components/Hero";
import { TrustSection } from "./components/TrustSection";
import { UserSegmentation } from "./components/UserSegmentation";
import { ServicesOverview } from "./components/ServicesOverview";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { ProgramsProductsSection } from "./components/ProgramsProductsSection";
import { HowWeBuildInnovation } from "./components/HowWeBuildInnovation";
import { PipelineSection } from "./components/PipelineSection";
import { ImpactMetrics } from "./components/ImpactMetrics";
import { AboutSection } from "./components/AboutSection";
import { InvestorsHighlight } from "./components/InvestorsHighlight";
import { CTA } from "./components/CTA";

export default function HomePage() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <TrustSection />
      <UserSegmentation />
      <ServicesOverview />
      <CaseStudiesSection />
      <ProgramsProductsSection />
      <HowWeBuildInnovation />
      <PipelineSection />
      <ImpactMetrics />
      <AboutSection />
      <InvestorsHighlight />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <CTA
          title="Need a trusted execution partner for East Africa?"
          description="From discovery to delivery, we help institutions and partners run high-quality programs and systems with measurable outcomes."
          primaryLabel="Work With Us"
          primaryTarget="/contact"
          secondaryLabel="Partner"
          secondaryTarget="/contact"
        />
      </div>
    </main>
  );
}
