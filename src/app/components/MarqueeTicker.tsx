const items = [
  "Program Design",
  "Venture Building",
  "Innovation Systems",
  "Investment Readiness",
  "MSME Training",
  "Hackathons",
  "Partner Delivery",
  "Startup Incubation",
  "Ecosystem Development",
  "Community Innovation",
];

const separator = (
  <span className="mx-6 text-accent font-black text-lg select-none">✦</span>
);

export function MarqueeTicker() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-white font-bold text-sm uppercase tracking-widest">
              {item}
            </span>
            {separator}
          </span>
        ))}
      </div>
    </div>
  );
}
