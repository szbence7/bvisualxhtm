import { Film, Mic, Video, Megaphone } from "lucide-react";

const services = [
  {
    icon: Film,
    label: "Music Videos",
    description: "Cinematic productions that amplify your sound and artistic vision.",
  },
  {
    icon: Mic,
    label: "Podcasts",
    description: "Professional studio-quality podcast recording and production.",
  },
  {
    icon: Video,
    label: "Short Films",
    description: "Narrative storytelling crafted with precision and creativity.",
  },
  {
    icon: Megaphone,
    label: "Commercials",
    description: "Impactful commercial content that drives engagement.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" style={{ background: "hsl(0 0% 6%)" }}>
      {/* Service icon grid */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {services.map(({ icon: Icon, label, description }, i) => (
          <div
            key={i}
            className="service-card flex flex-col items-center gap-5 px-6 py-12 text-center group cursor-default"
          >
            <div
              className="w-20 h-20 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                border: "1px solid hsl(0 0% 30%)",
                borderRadius: "2px",
              }}
            >
              <Icon
                size={32}
                strokeWidth={1.25}
                className="transition-colors duration-300 group-hover:text-primary"
                style={{ color: "hsl(0 0% 85%)" }}
              />
            </div>
            <div>
              <p
                className="text-base font-semibold tracking-wider uppercase text-white mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}
              >
                {label}
              </p>
              <p
                className="text-sm leading-relaxed hidden md:block"
                style={{ color: "hsl(0 0% 55%)", fontFamily: "'Barlow', sans-serif" }}
              >
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
