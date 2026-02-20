import { Button } from "@/components/ui/button";
import Aurora from "@/components/Aurora/Aurora";
import { useEffect, useRef } from "react";
import heroVideo from "@/assets/AdobeStock_1226869912.mov";

const HeroSection = () => {
  // Toggle flag: set to false to revert to aurora background
  const useVideoHeroBg = true;
  
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay failed:', err);
      });
    }
  }, [useVideoHeroBg]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ background: "hsl(0 0% 5%)" }}
    >
      {/* Aurora background (hidden when video is enabled) */}
      <Aurora 
        className="absolute inset-0" 
        style={{ 
          opacity: useVideoHeroBg ? 0 : 1,
          visibility: useVideoHeroBg ? 'hidden' : 'visible',
          pointerEvents: 'none'
        }} 
      />

      {/* Video background layer */}
      {useVideoHeroBg && (
        <>
          {/* Video element */}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover hero-video"
            style={{ 
              pointerEvents: 'none',
              zIndex: 0
            }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Color grading overlay: dark scrim + purple/blue tint */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(180deg, 
                  hsla(270, 60%, 20%, 0.4) 0%, 
                  hsla(260, 50%, 15%, 0.5) 50%, 
                  hsla(4, 75%, 25%, 0.3) 100%
                ),
                radial-gradient(circle at 50% 40%, 
                  hsla(260, 70%, 30%, 0.3) 0%, 
                  transparent 60%
                ),
                linear-gradient(180deg, 
                  hsla(0, 0%, 0%, 0.6) 0%, 
                  hsla(0, 0%, 0%, 0.75) 100%
                )
              `,
              pointerEvents: 'none',
              zIndex: 1
            }}
          />
        </>
      )}

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase mb-6"
          style={{ color: "hsl(4 75% 55%)", fontFamily: "'Barlow', sans-serif" }}>
          B Visual × HTM
        </p>

        <h1
          className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none mb-6 text-white"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
        >
          A vizuális
          <br />
          <span style={{ color: "hsl(4 75% 55%)" }}>történetmesélés</span>
          <br />
          mesterfokon
        </h1>

        <p className="text-base md:text-lg tracking-wide mb-12"
          style={{ color: "hsl(0 0% 65%)", fontFamily: "'Barlow', sans-serif", lineHeight: "1.8" }}>
          Nálunk a pixel nem csak egy pont, a fény nem csak világítás, a vágás pedig nem csak olló.<br />
          Üdvözlünk a bvisual x htm világában, ahol a technikai precizitás és a határtalan kreativitás egy közös pontban találkozik.
        </p>

        <a href="#contact">
          <button
            className="px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase text-white transition-all duration-300 hover:brightness-110 active:scale-95 rounded-lg"
            style={{
              background: "hsl(4 75% 42%)",
              fontFamily: "'Barlow', sans-serif",
              letterSpacing: "0.2em",
            }}
          >
            Dolgozzunk együtt!
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
