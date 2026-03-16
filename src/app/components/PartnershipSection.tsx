import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Building2, Mail } from "lucide-react";

export function PartnershipSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-8">
              <Building2 className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's Build Something Together
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              Governments, NGOs, development agencies, and companies partner
              with <strong>Tuku-Tuku Innovation Labs</strong> to design
              entrepreneurship programs, support innovators, and unlock economic
              opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                Start a Partnership
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}