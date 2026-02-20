import { Film, Mic, Video, Megaphone } from "lucide-react";
import { Card, CardBody } from "@heroui/react";

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
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, label, description }, i) => (
            <Card
              key={i}
              isPressable
              className="bg-[hsl(0_0%_9%)] border border-[hsl(0_0%_16%)] hover:border-[hsl(4_75%_42%_/_0.5)] transition-all duration-300 hover:shadow-[0_0_40px_hsl(4_75%_42%_/_0.3)] group"
            >
              <CardBody className="flex flex-col items-center gap-5 p-8 text-center">
                <div
                  className="w-20 h-20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-[hsl(0_0%_30%)] rounded-sm"
                >
                  <Icon
                    size={32}
                    strokeWidth={1.25}
                    className="transition-colors duration-300 group-hover:text-[hsl(4_75%_42%)]"
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
                    className="text-sm leading-relaxed"
                    style={{ color: "hsl(0 0% 55%)", fontFamily: "'Barlow', sans-serif" }}
                  >
                    {description}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
