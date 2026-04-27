import { Section } from "./Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "How does Tuku-Tuku work?",
    answer: "We partner with institutions and donors to design and execute innovation programs. Our team handles everything from program design to participant support, using our proprietary digital platforms and local network.",
  },
  {
    question: "Who can participate in your programs?",
    answer: "Our programs are open to entrepreneurs, students, and innovators across East Africa. We focus on early-stage founders, MSMEs, and youth-led initiatives in sectors like agriculture, technology, and social enterprise.",
  },
  {
    question: "Do you provide funding?",
    answer: "We connect participants with funding opportunities through our partner network, including grants, competitions, and investor introductions. We don't provide direct funding but facilitate access to capital.",
  },
];

export function FAQSection() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ's"
      title="General Questions"
      description="Common questions about our programs and services."
    >
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}