import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustSection } from "./components/TrustSection";
import { AboutSection } from "./components/AboutSection";
import { UserSegmentation } from "./components/UserSegmentation";
import { ServicesOverview } from "./components/ServicesOverview";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { ProgramsProductsSection } from "./components/ProgramsProductsSection";
import { ImpactMetrics } from "./components/ImpactMetrics";
import { HowWeBuildInnovation } from "./components/HowWeBuildInnovation";
import { PipelineSection } from "./components/PipelineSection";
import { InvestorsHighlight } from "./components/InvestorsHighlight";
import { CTA } from "./components/CTA";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
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
            primaryTarget="contact"
            secondaryLabel="Partner"
            secondaryTarget="contact"
          />
        </div>
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
