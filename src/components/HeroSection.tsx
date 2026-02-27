import { useEffect, useRef, useState } from "react";
import Aurora from "@/components/Aurora/Aurora";
import heroVideo from "@/assets/AdobeStock_1226869912.mov";
import ShinyText from "@/components/ShinyText";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import logoImage from "@/assets/logo.png";

const HeroSection = () => {
  const useVideoHeroBg = true;
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setPrefersReducedMotion(reducedMotion);

    if (!videoRef.current) return;
    
    if (reducedMotion) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay failed:', err);
      });
    }
  }, [useVideoHeroBg]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const wrapperTop = rect.top;
      const wrapperHeight = rect.height;
      const viewportHeight = window.innerHeight;

      const scrollDistance = wrapperHeight - viewportHeight;
      const rawProgress = Math.max(0, -wrapperTop) / scrollDistance;
      const p = Math.min(1, Math.max(0, rawProgress));

      setScrollProgress(p);
    };

    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  // Sequential crossfade: logo fades out FIRST, then text fades in (LONGER)
  // Logo: 1 → 0.01 over p 0.00..0.60 (0.60 duration - longer!)
  const logoOpacity = prefersReducedMotion 
    ? 0 
    : Math.max(0.01, Math.min(1, 1 - (scrollProgress / 0.60)));
  
  // Text: 0 → 1 over p 0.58..1.00 (0.42 duration - as long as possible before release)
  const textOpacity = prefersReducedMotion 
    ? 1 
    : Math.max(0, Math.min(1, (scrollProgress - 0.58) / 0.42));

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'relative',
        height: prefersReducedMotion ? '100vh' : '250vh',
        width: '100%',
        overflow: 'visible'
      }}
    >
      <section
        id="home"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          background: "hsl(0 0% 5%)"
        }}
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

        {/* Content layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 10
          }}
        >
          {/* Logo stack - always mounted, opacity-controlled (LINEAR fade) */}
          <div
            style={{
              position: 'absolute',
              opacity: logoOpacity,
              pointerEvents: 'none'
            }}
          >
            <ScrollFloat>
              <img
                src={logoImage}
                alt="B Visual × HTM Logo"
                style={{
                  width: 'clamp(360px, 55vw, 820px)',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </ScrollFloat>
          </div>

          {/* Text stack - always mounted, opacity-controlled */}
          <div
            style={{
              position: 'absolute',
              opacity: textOpacity,
              pointerEvents: textOpacity >= 0.95 ? 'auto' : 'none'
            }}
            className="max-w-4xl mx-auto px-6"
          >
            <ScrollFloat>
              <div>
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
                  <ShinyText baseColor="hsl(4 75% 55%)">történetmesélés</ShinyText>
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
            </ScrollFloat>
          </div>
        </div>

        {/* Scroll indicator */}
        {!prefersReducedMotion && scrollProgress < 0.1 && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <div className="w-px h-12 animate-pulse" style={{ background: "hsl(0 0% 60%)" }} />
          </div>
        )}
      </section>
    </div>
  );
};

export default HeroSection;
