import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Partner {
  name: string;
  logo: string;
  initials: string;
}

const row1: Partner[] = [
  { name: "USAID", logo: "https://logo.clearbit.com/usaid.gov", initials: "US" },
  { name: "UNICEF", logo: "https://logo.clearbit.com/unicef.org", initials: "UN" },
  { name: "GIZ", logo: "https://logo.clearbit.com/giz.de", initials: "GIZ" },
  { name: "UNDP", logo: "https://logo.clearbit.com/undp.org", initials: "UN" },
  { name: "Mastercard Foundation", logo: "https://logo.clearbit.com/mastercardfdn.org", initials: "MC" },
  { name: "Aga Khan Foundation", logo: "https://logo.clearbit.com/akdn.org", initials: "AK" },
  { name: "World Bank", logo: "https://logo.clearbit.com/worldbank.org", initials: "WB" },
  { name: "European Union", logo: "https://logo.clearbit.com/europa.eu", initials: "EU" },
];

const row2: Partner[] = [
  { name: "Tony Elumelu Foundation", logo: "https://logo.clearbit.com/tonyelumelufoundation.org", initials: "TE" },
  { name: "African Development Bank", logo: "https://logo.clearbit.com/afdb.org", initials: "AfDB" },
  { name: "IFC", logo: "https://logo.clearbit.com/ifc.org", initials: "IFC" },
  { name: "IRC", logo: "https://logo.clearbit.com/rescue.org", initials: "IRC" },
  { name: "Makerere University", logo: "https://logo.clearbit.com/mak.ac.ug", initials: "MAK" },
  { name: "Gulu University", logo: "https://logo.clearbit.com/gu.ac.ug", initials: "GU" },
  { name: "Ministry of ICT Uganda", logo: "https://logo.clearbit.com/ict.go.ug", initials: "ICT" },
  { name: "Stanbic Bank Uganda", logo: "https://logo.clearbit.com/stanbicbank.co.ug", initials: "SB" },
];

function LogoCard({ partner }: { partner: Partner }) {
  return (
    <div className="flex-shrink-0 mx-3 flex flex-col items-center gap-2 group">
      <div className="w-28 h-16 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center justify-center px-4 group-hover:shadow-md group-hover:border-primary/20 transition-all duration-200">
        <LogoImage partner={partner} />
      </div>
      <span className="text-[10px] text-gray-400 font-medium text-center whitespace-nowrap max-w-[112px] leading-tight">
        {partner.name}
      </span>
    </div>
  );
}

function LogoImage({ partner }: { partner: Partner }) {
  return (
    <ImageWithFallback
      src={partner.logo}
      alt={partner.name}
      className="max-h-8 max-w-[88px] w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
      onError={(e) => {
        // Replace with initials badge on error
        const el = e.currentTarget;
        el.style.display = "none";
        const parent = el.parentElement;
        if (parent && !parent.querySelector(".initials-badge")) {
          const badge = document.createElement("span");
          badge.className =
            "initials-badge text-sm font-black text-primary/60 group-hover:text-primary transition-colors";
          badge.textContent = partner.initials;
          parent.appendChild(badge);
        }
      }}
    />
  );
}

function ScrollRow({
  partners,
  reverse = false,
}: {
  partners: Partner[];
  reverse?: boolean;
}) {
  // Duplicate for seamless loop
  const doubled = [...partners, ...partners];
  return (
    <div className="overflow-hidden">
      <div
        className="flex"
        style={{
          animation: `marquee ${reverse ? "35s" : "30s"} linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        {doubled.map((p, i) => (
          <LogoCard key={`${p.name}-${i}`} partner={p} />
        ))}
      </div>
    </div>
  );
}

export function PartnersSection() {
  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-2">
          Partners & Clients
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
          We Have Innovated With
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-base">
          Trusted by governments, development organisations, universities, and
          foundations across East Africa and beyond.
        </p>
      </div>

      <div className="space-y-5">
        <ScrollRow partners={row1} />
        <ScrollRow partners={row2} reverse />
      </div>
    </section>
  );
}
