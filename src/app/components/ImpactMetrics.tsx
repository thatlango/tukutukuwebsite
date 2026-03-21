import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

interface MetricProps {
  end: number;
  label: string;
  suffix?: string;
}

function AnimatedCounter({ end, label, suffix = "" }: MetricProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-lg text-muted-foreground">{label}</div>
    </motion.div>
  );
}

export function ImpactMetrics() {
  const metrics = [
    { end: 1200, label: "Entrepreneurs supported", suffix: "+" },
    { end: 45, label: "Programs delivered", suffix: "+" },
    { end: 80, label: "Communities reached", suffix: "+" },
    { end: 30, label: "Innovation initiatives launched", suffix: "+" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Innovation That Starts Local
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Since 2016, we've been on the ground in Northern Uganda — unlocking
            the talent, creativity, and resilience that was always here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {metrics.map((metric, index) => (
            <AnimatedCounter
              key={metric.label}
              end={metric.end}
              label={metric.label}
              suffix={metric.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}