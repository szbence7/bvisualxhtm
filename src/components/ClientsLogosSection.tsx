import rtllogo from "@/assets/rtllogo.webp";
import tv2logo from "@/assets/tv2logo.webp";
import aitlogo from "@/assets/aitlogo.webp";
import amtslogo from "@/assets/amtslogo.webp";
import oxygenlogo from "@/assets/oxygenlogo.webp";

const logos = [
  { src: rtllogo, alt: "RTL" },
  { src: tv2logo, alt: "TV2" },
  { src: aitlogo, alt: "Ait DESKS" },
  { src: amtslogo, alt: "AMTS Automobil & Tuning Show" },
  { src: oxygenlogo, alt: "OXYGEN wellness fitness" },
];

const ClientsLogosSection = () => {
  return (
    <section
      id="partnerek"
      className="py-16 md:py-20"
      style={{ background: "hsl(0 0% 5%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <p
          className="text-xs tracking-[0.4em] uppercase mb-4"
          style={{ color: "hsl(4 75% 55%)", fontFamily: "'Barlow', sans-serif" }}
        >
          Partnereink
        </p>
        <h2
          className="text-4xl md:text-6xl font-black uppercase text-white mb-12"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Ők is Minket Választottak
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 lg:gap-20">
          {logos.map(({ src, alt }) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              className="max-w-[120px] max-h-[120px] md:max-w-[150px] md:max-h-[150px] w-auto h-auto object-contain transition-opacity duration-300 hover:opacity-90"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsLogosSection;
