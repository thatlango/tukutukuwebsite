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
import { ProgramsSpotlight } from "./components/ProgramsSpotlight";
import { HackathonServices } from "./components/HackathonServices";
import { InnovationAsAService } from "./components/InnovationAsAService";
import { TechPlatforms } from "./components/TechPlatforms";
import { WhyTukuTuku } from "./components/WhyTukuTuku";
import { InvestorsHighlight } from "./components/InvestorsHighlight";
import { Testimonials } from "./components/Testimonials";
import { StoriesSection } from "./components/StoriesSection";
import { PartnershipSection } from "./components/PartnershipSection";
import { FinalCTA } from "./components/FinalCTA";
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
        <section id="about">
          <WhatWeDo />
        </section>
        <HowWeBuildInnovation />
        <PipelineSection />
        <ImpactMetrics />
        <section id="programs">
          <ProgramsSpotlight />
        </section>
        <HackathonServices />
        <InnovationAsAService />
        <TechPlatforms />
        <WhyTukuTuku />
        <InvestorsHighlight />
        <Testimonials />
        <StoriesSection />
        <section id="consulting">
          <PartnershipSection />
        </section>
        <section id="contact">
          <FinalCTA />
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
