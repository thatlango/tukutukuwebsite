import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustSection } from "./components/TrustSection";
import { WhatWeDo } from "./components/WhatWeDo";
import { ImpactMetrics } from "./components/ImpactMetrics";
import { ProgramsSpotlight } from "./components/ProgramsSpotlight";
import { HackathonServices } from "./components/HackathonServices";
import { InnovationAsAService } from "./components/InnovationAsAService";
import { TechPlatforms } from "./components/TechPlatforms";
import { WhyTukuTuku } from "./components/WhyTukuTuku";
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
        <ImpactMetrics />
        <section id="programs">
          <ProgramsSpotlight />
        </section>
        <HackathonServices />
        <InnovationAsAService />
        <TechPlatforms />
        <WhyTukuTuku />
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
