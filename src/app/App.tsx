import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustSection } from "./components/TrustSection";
import { WhatWeDo } from "./components/WhatWeDo";
import { ImpactMetrics } from "./components/ImpactMetrics";
import { ProgramsSpotlight } from "./components/ProgramsSpotlight";
import { WhyTukuTuku } from "./components/WhyTukuTuku";
import { StoriesSection } from "./components/StoriesSection";
import { PartnershipSection } from "./components/PartnershipSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <WhatWeDo />
        <ImpactMetrics />
        <ProgramsSpotlight />
        <WhyTukuTuku />
        <StoriesSection />
        <PartnershipSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
