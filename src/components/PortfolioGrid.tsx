import heroMusic from "@/assets/hero-music.jpg";
import heroCamera from "@/assets/hero-camera.jpg";
import heroPodcast from "@/assets/hero-podcast.jpg";
import heroStorytelling from "@/assets/hero-storytelling.jpg";

const PortfolioGrid = () => {
  return (
    <section id="portfolio" className="w-full" style={{ background: "hsl(0 0% 5%)" }}>
      {/* Top 3-column grid */}
      <div className="grid grid-cols-3 gap-1 px-1">
        {[heroMusic, heroCamera, heroPodcast].map((src, i) => (
          <div key={i} className="relative overflow-hidden group" style={{ height: "340px" }}>
            <img
              src={src}
              alt={["Music Video", "Film Production", "Podcast"][i]}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "hsl(4 75% 42% / 0.25)" }}
            />
          </div>
        ))}
      </div>

      {/* Wide storytelling section */}
      <div className="relative mt-1 mx-1 overflow-hidden" style={{ height: "480px" }}>
        <img
          src={heroStorytelling}
          alt="Creative Visual Storytelling"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, hsl(0 0% 0% / 0.1) 0%, hsl(0 0% 0% / 0.55) 50%, hsl(0 0% 0% / 0.75) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-end pr-12 md:pr-20">
          <div className="max-w-md text-right">
            <h2
              className="text-5xl md:text-6xl font-black text-white uppercase leading-tight mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Kreatív vizuális
              <br />
              történetmesélés
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "hsl(0 0% 75%)", fontFamily: "'Barlow', sans-serif" }}>
              Átlépni a képernyő korlátain és olyan vizuális élményt nyújtani, ami megragad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
