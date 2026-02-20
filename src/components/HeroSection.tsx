import { Button } from "@/components/ui/button";
import Aurora from "@/components/Aurora/Aurora";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: "hsl(0 0% 5%)" }}
    >
      <Aurora className="absolute inset-0" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase mb-6"
          style={{ color: "hsl(4 75% 55%)", fontFamily: "'Barlow', sans-serif" }}>
          B Visual × HTM
        </p>

        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none mb-6 text-white"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
        >
          Professional
          <br />
          <span style={{ color: "hsl(4 75% 55%)" }}>Video</span>
          <br />
          Production
        </h1>

        <p className="text-base md:text-lg tracking-widest mb-12"
          style={{ color: "hsl(0 0% 65%)", fontFamily: "'Barlow', sans-serif" }}>
          Music Videos&nbsp;&nbsp;|&nbsp;&nbsp;Podcasts&nbsp;&nbsp;|&nbsp;&nbsp;Short Films&nbsp;&nbsp;|&nbsp;&nbsp;Commercials
        </p>

        <a href="#contact">
          <button
            className="px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase text-white transition-all duration-300 hover:brightness-110 active:scale-95"
            style={{
              background: "hsl(4 75% 42%)",
              fontFamily: "'Barlow', sans-serif",
              letterSpacing: "0.2em",
            }}
          >
            Get in Touch
          </button>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 animate-pulse" style={{ background: "hsl(0 0% 60%)" }} />
      </div>
    </section>
  );
};

export default HeroSection;
