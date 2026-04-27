import { Section } from "./Section";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

export function WhyChooseUs() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section
      id="why-choose"
      eyebrow="Why Choose Us"
      title="We provide the best service for your business"
      description="From local insights to global standards, we deliver innovation that works."
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-semibold">Local Expertise</h4>
              <span className="text-sm text-muted-foreground">95%</span>
            </div>
            <Progress value={95} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">
              Deep understanding of East African markets and communities.
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-semibold">Scalable Solutions</h4>
              <span className="text-sm text-muted-foreground">90%</span>
            </div>
            <Progress value={90} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">
              Systems designed to grow with your business needs.
            </p>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <Button
            size="lg"
            onClick={() => scrollTo("contact")}
            className="bg-primary hover:bg-primary/90"
          >
            Start Consultation
          </Button>
        </div>
      </div>
    </Section>
  );
}