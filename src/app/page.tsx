import { Hero } from "./components/Hero";
import { WhyInnovationMatters } from "./components/WhyInnovationMatters";
import { AboutSection } from "./components/AboutSection";
import { ServicesOverview } from "./components/ServicesOverview";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { FAQSection } from "./components/FAQSection";
import { Testimonials } from "./components/Testimonials";
import { StoriesSection } from "./components/StoriesSection";
import { CTA } from "./components/CTA";

export default function HomePage() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      <WhyInnovationMatters />
      <AboutSection />
      <ServicesOverview />
      <WhyChooseUs />
      <FAQSection />
      <Testimonials />
      <StoriesSection />
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
