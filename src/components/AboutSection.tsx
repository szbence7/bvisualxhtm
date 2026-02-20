import aboutTeam from "@/assets/about-team.jpg";

const stats = [
  { value: "150+", label: "Elkészült projekt" },
  { value: "8+", label: "Év tapasztalat" },
  { value: "50+", label: "Elégedett ügyfél" },
  { value: "12", label: "Szakmai díj" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 overflow-hidden"
      style={{ background: "hsl(0 0% 6%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top label */}
        <p
          className="text-xs tracking-[0.4em] uppercase mb-4"
          style={{ color: "hsl(4 75% 55%)", fontFamily: "'Barlow', sans-serif" }}
        >
          Rólunk
        </p>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left — text */}
          <div>
            <h2
              className="text-5xl md:text-7xl font-black uppercase text-white leading-none mb-8"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              bvisual
              <br />
              <span style={{ color: "hsl(4 75% 55%)" }}>×</span>
              <br />
              HTM
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "hsl(0 0% 65%)", fontFamily: "'Barlow', sans-serif" }}
            >
              Profi videósokból és fotósokból álló csapatként abban hiszünk, hogy minden pillanat megérdemli a tökéletes kompozíciót. Legyen szó cinematic videógyártásról, precíz utómunkáról, fényelésről vagy technikai setupokról – mi azért vagyunk itt, hogy szintet lépjünk a tartalomgyártásban.
            </p>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "hsl(0 0% 55%)", fontFamily: "'Barlow', sans-serif" }}
            >
              A technikai tudás és a tiszta látvány találkozása minden projektünkben.
            </p>

            {/* Red divider */}
            <div
              className="w-16 h-0.5 mb-10"
              style={{ background: "hsl(4 75% 42%)" }}
            />

            {/* Values */}
            <div className="flex flex-col gap-4">
              {["Cinematic storytelling", "Technikai precizitás", "Kreatív szabadság minden pillanatban"].map((v, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-1.5 h-1.5 flex-shrink-0"
                    style={{ background: "hsl(4 75% 55%)" }}
                  />
                  <p
                    className="text-sm tracking-wide"
                    style={{ color: "hsl(0 0% 70%)", fontFamily: "'Barlow', sans-serif" }}
                  >
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
              style={{ border: "1px solid hsl(4 75% 42% / 0.3)" }}
            />
            <img
              src={aboutTeam}
              alt="B Visual HTM production team"
              className="relative w-full h-full object-cover rounded-2xl overflow-hidden"
              style={{ maxHeight: "500px" }}
            />
            {/* Red accent corner */}
            <div
              className="absolute bottom-0 right-0 w-24 h-1"
              style={{ background: "hsl(4 75% 42%)" }}
            />
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden"
          style={{ border: "1px solid hsl(0 0% 14%)" }}
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-12 px-6 text-center group transition-all duration-300"
              style={{ background: "hsl(0 0% 8%)" }}
            >
              <span
                className="text-5xl md:text-6xl font-black text-white mb-2 leading-none"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: "hsl(4 75% 55%)",
                }}
              >
                {value}
              </span>
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "hsl(0 0% 50%)", fontFamily: "'Barlow', sans-serif" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
