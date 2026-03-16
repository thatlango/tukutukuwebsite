import { motion } from "motion/react";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-primary text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Big change starts with small brave steps.
            </h2>
            <p className="text-lg sm:text-xl mb-10 leading-relaxed text-white/90 max-w-2xl mx-auto">
              Got an idea? Looking for a partner? Curious about our work?
              <br />
              Let's talk.
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}