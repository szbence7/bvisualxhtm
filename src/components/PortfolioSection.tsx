import { useState } from "react";
import heroMusic from "@/assets/hero-music.jpg";
import heroCamera from "@/assets/hero-camera.jpg";
import heroPodcast from "@/assets/hero-podcast.jpg";
import heroStorytelling from "@/assets/hero-storytelling.jpg";
import portfolioShortfilm from "@/assets/portfolio-shortfilm.jpg";
import portfolioCommercial from "@/assets/portfolio-commercial.jpg";
import portfolioMusicvideo2 from "@/assets/portfolio-musicvideo2.jpg";
import portfolioPodcast2 from "@/assets/portfolio-podcast2.jpg";
import { Play } from "lucide-react";

const categories = ["All", "Music Videos", "Podcasts", "Short Films", "Commercials"];

const projects = [
  { title: "Neon Nights", category: "Music Videos", img: heroMusic, year: "2024" },
  { title: "Red Light Sessions", category: "Music Videos", img: portfolioMusicvideo2, year: "2024" },
  { title: "The Interview", category: "Podcasts", img: heroPodcast, year: "2023" },
  { title: "Deep Conversations", category: "Podcasts", img: portfolioPodcast2, year: "2024" },
  { title: "After Dark", category: "Short Films", img: portfolioShortfilm, year: "2023" },
  { title: "Between Frames", category: "Short Films", img: heroStorytelling, year: "2024" },
  { title: "Behind the Lens", category: "Short Films", img: heroCamera, year: "2023" },
  { title: "Drive Forward", category: "Commercials", img: portfolioCommercial, year: "2024" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio-work" className="py-24" style={{ background: "hsl(0 0% 5%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "hsl(4 75% 55%)", fontFamily: "'Barlow', sans-serif" }}
          >
            Munkáink
          </p>
          <h2
            className="text-5xl md:text-7xl font-black uppercase text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Portfólió
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-200 rounded-lg"
              style={{
                fontFamily: "'Barlow', sans-serif",
                background: active === cat ? "hsl(4 75% 42%)" : "hsl(0 0% 10%)",
                color: active === cat ? "hsl(0 0% 100%)" : "hsl(0 0% 60%)",
                border: `1px solid ${active === cat ? "hsl(4 75% 42%)" : "hsl(0 0% 18%)"}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
          {filtered.map((project, i) => (
            <div
              key={`${project.title}-${i}`}
              className="relative overflow-hidden group cursor-pointer rounded-2xl"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-5 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(0deg, hsl(0 0% 0% / 0.85) 0%, hsl(0 0% 0% / 0.3) 50%, transparent 100%)",
                  opacity: 0,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0")}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase mb-1"
                      style={{ color: "hsl(4 75% 55%)", fontFamily: "'Barlow', sans-serif" }}
                    >
                      {project.category}
                    </p>
                    <h3
                      className="text-lg font-bold uppercase text-white"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "hsl(4 75% 42%)",
                      borderRadius: "50%",
                    }}
                  >
                    <Play size={14} fill="white" color="white" />
                  </div>
                </div>
              </div>

              {/* Always-visible overlay on mobile */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-5 sm:hidden"
                style={{
                  background:
                    "linear-gradient(0deg, hsl(0 0% 0% / 0.8) 0%, transparent 60%)",
                }}
              >
                <p
                  className="text-xs tracking-widest uppercase mb-1"
                  style={{ color: "hsl(4 75% 55%)", fontFamily: "'Barlow', sans-serif" }}
                >
                  {project.category}
                </p>
                <h3
                  className="text-base font-bold uppercase text-white"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
