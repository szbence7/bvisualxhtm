import aboutTeam from "@/assets/about-team.jpg";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Happy Clients" },
  { value: "12", label: "Industry Awards" },
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
          Who We Are
        </p>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left — text */}
          <div>
            <h2
              className="text-5xl md:text-7xl font-black uppercase text-white leading-none mb-8"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              About
              <br />
              <span style={{ color: "hsl(4 75% 55%)" }}>B Visual</span>
              <br />
              × HTM
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "hsl(0 0% 65%)", fontFamily: "'Barlow', sans-serif" }}
            >
              We are a creative video production studio passionate about telling stories that resonate. 
              Founded by filmmakers and visual artists, B Visual × HTM has grown into a full-service 
              production house trusted by artists, brands, and creators worldwide.
            </p>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "hsl(0 0% 55%)", fontFamily: "'Barlow', sans-serif" }}
            >
              From concept to final cut, we handle every stage of production — bringing your vision to life 
              with cinematic precision, bold aesthetics, and uncompromising quality.
            </p>

            {/* Red divider */}
            <div
              className="w-16 h-0.5 mb-10"
              style={{ background: "hsl(4 75% 42%)" }}
            />

            {/* Values */}
            <div className="flex flex-col gap-4">
              {["Cinematic quality in every frame", "Collaborative creative process", "On time, on budget, always"].map((v, i) => (
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
              className="absolute -top-4 -left-4 w-full h-full"
              style={{ border: "1px solid hsl(4 75% 42% / 0.3)" }}
            />
            <img
              src={aboutTeam}
              alt="B Visual HTM production team"
              className="relative w-full h-full object-cover"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-px"
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
