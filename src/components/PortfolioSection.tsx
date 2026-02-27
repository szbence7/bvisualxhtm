import { useState } from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const categories = ["All", "Podcast", "Magazin műsor", "Cégbemutató", "Egyéb"];

const projects = [
  { 
    title: "Podcast 1", 
    category: "Podcast", 
    youtubeId: "XA_eayulQ5Y",
    thumbnailUrl: "https://img.youtube.com/vi/XA_eayulQ5Y/hqdefault.jpg",
    year: "2024" 
  },
  { 
    title: "Podcast 2", 
    category: "Podcast", 
    youtubeId: "hQe3OEn_ggk",
    thumbnailUrl: "https://img.youtube.com/vi/hQe3OEn_ggk/hqdefault.jpg",
    year: "2024" 
  },
  { 
    title: "Magazin műsor 1", 
    category: "Magazin műsor", 
    youtubeId: "aCZH0ZmEs-4",
    thumbnailUrl: "https://img.youtube.com/vi/aCZH0ZmEs-4/hqdefault.jpg",
    year: "2024" 
  },
  { 
    title: "Magazin műsor 2", 
    category: "Magazin műsor", 
    youtubeId: "mHQLBMlmrJY",
    thumbnailUrl: "https://img.youtube.com/vi/mHQLBMlmrJY/hqdefault.jpg",
    year: "2024" 
  },
  { 
    title: "Magazin műsor 3", 
    category: "Magazin műsor", 
    youtubeId: "H7CWSmaSO4E",
    thumbnailUrl: "https://img.youtube.com/vi/H7CWSmaSO4E/hqdefault.jpg",
    year: "2024" 
  },
  { 
    title: "Cégbemutató 1", 
    category: "Cégbemutató", 
    youtubeId: "zEGOdBUNEwE",
    thumbnailUrl: "https://img.youtube.com/vi/zEGOdBUNEwE/hqdefault.jpg",
    year: "2024" 
  },
  { 
    title: "Cégbemutató 2", 
    category: "Cégbemutató", 
    youtubeId: "FjRzF9btZP8",
    thumbnailUrl: "https://img.youtube.com/vi/FjRzF9btZP8/hqdefault.jpg",
    year: "2024" 
  },
  { 
    title: "Cégbemutató 3", 
    category: "Cégbemutató", 
    youtubeId: "OcouXI1sW1g",
    thumbnailUrl: "https://img.youtube.com/vi/OcouXI1sW1g/hqdefault.jpg",
    year: "2024" 
  },
  { 
    title: "Egyéb", 
    category: "Egyéb", 
    youtubeId: "6UGemqIXHYY",
    thumbnailUrl: "https://img.youtube.com/vi/6UGemqIXHYY/hqdefault.jpg",
    year: "2024" 
  },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.thumbnailUrl}
                alt={`${project.title} YouTube thumbnail`}
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

        {/* Video Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-5xl p-0 bg-black border-none overflow-hidden">
            {selectedProject && (
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1&rel=0`}
                  title={selectedProject.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PortfolioSection;
