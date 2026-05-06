import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=600&q=80",
    alt: "Entrepreneurs in a workshop session",
    label: "Entrepreneurs",
    className: "col-span-1 row-span-2 h-full min-h-[280px]",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
    alt: "Team collaboration meeting",
    label: "Innovation",
    className: "col-span-1 h-[150px]",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
    alt: "Community members collaborating",
    label: "Community",
    className: "col-span-1 h-[150px]",
  },
];

export function Hero() {
  return (
    <section className="bg-gradient-hero pt-0 pb-16 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              African Innovation Hub · Gulu, Uganda
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-black text-gray-900 leading-[1.05] mb-6">
              Empowering<br />
              <span className="text-primary">Bold Ideas.</span><br />
              Lasting Impact.
            </h1>

            <p className="text-lg leading-relaxed mb-8 max-w-[440px]" style={{ color: "var(--muted-foreground)" }}>
              We design and implement innovation systems that build ventures and unlock economic opportunity across East Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-lg hover:bg-primary-light transition-colors duration-200 text-base"
              >
                Explore Programs
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-bold px-7 py-3.5 rounded-lg hover:border-primary hover:text-primary transition-colors duration-200 text-base"
              >
                View Our Work
              </Link>
            </div>

            {/* Micro stats */}
            <div className="mt-10 flex items-center gap-8 pt-10 border-t border-gray-100">
              {[
                { value: "1,200+", label: "Entrepreneurs" },
                { value: "50+", label: "Programs" },
                { value: "80+", label: "Communities" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Photo collage */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Decorative badge */}
            <div className="absolute -top-4 -left-4 z-20 bg-accent text-accent-foreground font-black text-xs px-3 py-1.5 rounded-full shadow-md">
              Est. 2016 · Gulu, Uganda
            </div>

            <div className="grid grid-cols-2 gap-3 h-[480px]">
              {/* Tall image left */}
              <motion.div
                className="relative rounded-2xl overflow-hidden h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <p className="text-xs font-bold text-primary">{heroImages[0].label}</p>
                </div>
              </motion.div>

              {/* Right column — two stacked images */}
              <div className="flex flex-col gap-3 h-full">
                <motion.div
                  className="relative rounded-2xl overflow-hidden flex-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={heroImages[1].src}
                    alt={heroImages[1].alt}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <p className="text-xs font-bold text-primary">{heroImages[1].label}</p>
                  </div>
                </motion.div>

                {/* Green accent card */}
                <div className="rounded-2xl bg-primary p-5 flex flex-col justify-between" style={{ flex: "0 0 auto", height: "140px" }}>
                  <p className="text-accent font-black text-sm uppercase tracking-wide">Our Impact</p>
                  <div>
                    <p className="text-white font-black text-3xl">16+</p>
                    <p className="text-white/70 text-sm font-medium">Years of operation</p>
                  </div>
                </div>

                <motion.div
                  className="relative rounded-2xl overflow-hidden flex-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={heroImages[2].src}
                    alt={heroImages[2].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                    <p className="text-xs font-bold text-primary">{heroImages[2].label}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
