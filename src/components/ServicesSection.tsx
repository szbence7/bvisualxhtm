import { Video, Camera, Clapperboard, Settings } from "lucide-react";
import { Card, CardBody } from "@heroui/react";

const services = [
  {
    icon: Video,
    label: "Cinematic videózás",
    description: "A reklámfilmektől a dinamikus rövid formátumú tartalmakig.",
  },
  {
    icon: Camera,
    label: "Profi fotográfia",
    description: "Mert tudjuk, hogyan mondjunk el egy történetet egyetlen képkockával.",
  },
  {
    icon: Clapperboard,
    label: "Post-production",
    description: "Vágás, sound design és az a bizonyos \"visual\" plusz, amitől egy videó életre kel.",
  },
  {
    icon: Settings,
    label: "Tech & Gear",
    description: "Megosztjuk tapasztalatainkat az eszközeinkről, hogy ti is a legjobbat hozhassátok ki magatokból.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" style={{ background: "hsl(0 0% 6%)" }}>
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        {/* Section header */}
        <div className="mb-12">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "hsl(4 75% 55%)", fontFamily: "'Barlow', sans-serif" }}
          >
            Szolgáltatások
          </p>
          <h2
            className="text-5xl md:text-7xl font-black uppercase text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Amivel foglalkozunk
          </h2>
        </div>

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
