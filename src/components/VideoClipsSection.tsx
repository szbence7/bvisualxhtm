import * as React from "react";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type VideoClip = {
  youtubeId: string;
  title: string;
};

const videoClips: VideoClip[] = [
  {
    youtubeId: "7DsmlLveeC8",
    title: "Videoklip 1",
  },
  {
    youtubeId: "k5iQSWw__m4",
    title: "Videoklip 2",
  },
];

const VideoClipsSection = () => {
  const [api, setApi] = React.useState<CarouselApi | undefined>();
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => setActiveIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section id="videoklipek" className="py-14" style={{ background: "hsl(0 0% 5%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "hsl(4 75% 55%)", fontFamily: "'Barlow', sans-serif" }}
          >
            Videók
          </p>
          <h2
            className="text-5xl md:text-7xl font-black uppercase text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Videoklipek
          </h2>
        </div>

        <Carousel
          opts={{ align: "center", containScroll: "trimSnaps" }}
          className="w-full max-w-4xl mx-auto"
          setApi={setApi}
        >
          <CarouselContent>
            {videoClips.map((clip) => (
              <CarouselItem key={clip.youtubeId} className="basis-full">
                <div className="w-full flex justify-center">
                  <div className="w-full max-w-3xl overflow-hidden rounded-2xl border" style={{ borderColor: "hsl(0 0% 18%)" }}>
                    <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${clip.youtubeId}?rel=0`}
                        title={clip.title}
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="hidden md:flex"
            style={{
              background: "hsl(0 0% 10%)",
              borderColor: "hsl(0 0% 18%)",
              color: "hsl(0 0% 85%)",
            }}
          />
          <CarouselNext
            className="hidden md:flex"
            style={{
              background: "hsl(0 0% 10%)",
              borderColor: "hsl(0 0% 18%)",
              color: "hsl(0 0% 85%)",
            }}
          />
        </Carousel>

        <div className="mt-8 flex justify-center">
          <div className="flex flex-wrap justify-center gap-3 max-w-6xl">
            {videoClips.map((clip, idx) => {
              const isActive = idx === activeIndex;
              const thumbUrl = `https://img.youtube.com/vi/${clip.youtubeId}/hqdefault.jpg`;

              return (
                <button
                  key={`${clip.youtubeId}-thumb`}
                  type="button"
                  onClick={() => api?.scrollTo(idx)}
                  className="group relative overflow-hidden rounded-xl border transition-all duration-200"
                  style={{
                    borderColor: isActive ? "hsl(4 75% 42%)" : "hsl(0 0% 18%)",
                    background: "hsl(0 0% 10%)",
                    width: 96,
                    aspectRatio: "16/9",
                    opacity: isActive ? 1 : 0.7,
                  }}
                  aria-label={`Ugrás erre a videóra: ${idx + 1}`}
                >
                  <img src={thumbUrl} alt={`Videó előnézet ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  <div
                    className="absolute inset-0 transition-opacity duration-200"
                    style={{
                      background: isActive ? "hsl(4 75% 42% / 0.18)" : "hsl(0 0% 0% / 0.15)",
                      opacity: isActive ? 1 : 0,
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoClipsSection;

