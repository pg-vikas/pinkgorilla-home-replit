import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, X, Instagram, Youtube, Facebook, Music2, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

// Replace these URLs with your actual cinematic video sources
const VIDEOS = [
  {
    id: 1,
    url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    label: "Brand Film",
  },
  {
    id: 2,
    url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    label: "Social Reel",
  },
  {
    id: 3,
    url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    label: "Founder Story",
  },
  {
    id: 4,
    url: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    label: "Product Montage",
  },
  {
    id: 5,
    url: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    label: "UGC Cut",
  },
  {
    id: 6,
    url: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    label: "Campaign Teaser",
  }
];

type CopyMode = "direct" | "energetic" | "minimal";

const COPY_MODES: Record<CopyMode, { headline: string; body: string }> = {
  direct: {
    headline: "Gorilla Labs is the radical marketing arm of Pink Gorilla.",
    body: "A dedicated team of creators, designers, graphic artists, strategists, and social media operators focused on building authentic, high impact campaigns that move real audiences.\n\nWe do not manufacture content.\nWe create ecosystems.\n\nFrom concept to execution, Gorilla Labs brings structure, creativity, and consistency together into one unified marketing force."
  },
  energetic: {
    headline: "Gorilla Labs is where culture meets execution.",
    body: "It is our high impact marketing division built around authentic storytelling, social media dominance, and content that feels real, not staged.\n\nBehind every campaign is a coordinated team of creators, designers, editors, and organizers working in sync to build a living, breathing content ecosystem around your brand.\n\nThis is not random posting.\nThis is controlled momentum."
  },
  minimal: {
    headline: "Gorilla Labs is the marketing division of Pink Gorilla.",
    body: "A collaborative team of creators, designers, and social media specialists producing authentic content and coordinated campaigns that build real presence and sustained momentum.\n\nIt is marketing as an ecosystem, not isolated posts."
  }
};

export function GorillaLabs() {
  const [activeMode, setActiveMode] = useState<CopyMode>("direct");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Particle background effect
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; size: number; speedY: number; opacity: number }[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor(window.innerWidth / 15);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedY: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 0, 128, 0.5)"; // Pink gorilla accent
      
      particles.forEach(p => {
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.y -= p.speedY;
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", resize);
    resize();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeVideo]);

  return (
    <section 
      ref={containerRef}
      id="gorilla-labs" 
      className="relative min-h-[90vh] py-24 bg-background overflow-hidden border-y border-white/5"
    >
      {/* Background Effects */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none z-0"></div>
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Copy Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm mb-8 w-max">
              Gorilla Labs
            </div>

            {/* Toggle UI */}
            <div className="flex bg-card/50 p-1.5 rounded-full border border-white/10 mb-12 w-max backdrop-blur-md">
              {(Object.keys(COPY_MODES) as CopyMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setActiveMode(mode)}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize relative",
                    activeMode === mode ? "text-white" : "text-muted-foreground hover:text-white"
                  )}
                >
                  {activeMode === mode && (
                    <motion.div
                      layoutId="activeMode"
                      className="absolute inset-0 bg-primary/20 border border-primary/50 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{mode}</span>
                </button>
              ))}
            </div>

            {/* Dynamic Content */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMode}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-8">
                    {COPY_MODES[activeMode].headline}
                  </h2>
                  <div className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed whitespace-pre-line">
                    {COPY_MODES[activeMode].body}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-12">
              <Button size="lg" className="rounded-full px-8 font-bold shadow-[0_0_20px_rgba(255,0,128,0.3)] hover:shadow-[0_0_30px_rgba(255,0,128,0.5)] transition-all group overflow-hidden relative">
                <span className="relative z-10">Talk to Gorilla Labs</span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 font-bold border-white/20 hover:bg-white/5 transition-all group">
                See Campaign Samples
              </Button>
            </div>
          </motion.div>

          {/* Middle Column: Vertical Social Media Elevator */}
          <div className="hidden lg:flex flex-col items-center justify-center h-[600px] lg:h-[800px] overflow-hidden relative w-24 relative z-20">
            {/* Fade gradients top and bottom */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
            
            <motion.div 
              className="flex flex-col gap-10 py-10"
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...Array(3)].map((_, arrayIndex) => (
                <div key={arrayIndex} className="flex flex-col gap-10">
                  {[
                    { icon: Instagram, color: "text-[#E1306C]", glow: "bg-[#E1306C]" },
                    { icon: Youtube, color: "text-[#FF0000]", glow: "bg-[#FF0000]" },
                    { icon: Facebook, color: "text-[#1877F2]", glow: "bg-[#1877F2]" },
                    { icon: Music2, color: "text-[#fe0979]", glow: "bg-[#00f2fe]" },
                    { icon: Twitter, color: "text-[#1DA1F2]", glow: "bg-[#1DA1F2]" },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      className="relative group block mx-auto"
                      whileHover={{ scale: 1.15 }}
                    >
                      {/* Dynamic Light Trail/Glow */}
                      <motion.div
                        className={cn(
                          "absolute inset-0 rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500",
                          social.glow
                        )}
                        animate={{ 
                          scale: [1, 1.8, 1],
                          opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: i * 0.2
                        }}
                      />
                      
                      {/* Icon Container */}
                      <div className="relative z-10 bg-card/40 p-4 rounded-2xl border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 group-hover:bg-background/80 group-hover:border-white/30 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-full group-hover:translate-x-full" />
                        <social.icon size={36} className={cn("transition-colors duration-300 drop-shadow-[0_0_15px_currentColor]", social.color)} />
                      </div>
                    </motion.a>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Cinematic Media Wall */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[600px] lg:h-[800px] hidden md:block"
          >
            {/* Parallax Grid Container */}
            <motion.div style={{ y: y1 }} className="absolute right-0 top-0 w-full max-w-md space-y-6 z-10 pr-12">
              {[VIDEOS[0], VIDEOS[1], VIDEOS[2]].map((video) => (
                <VideoTile 
                  key={video.id} 
                  video={video} 
                  onClick={() => setActiveVideo(video.url)} 
                />
              ))}
            </motion.div>
            
            <motion.div style={{ y: y2 }} className="absolute right-0 top-40 w-full max-w-[280px] space-y-6 z-20 translate-x-12">
              {[VIDEOS[3], VIDEOS[4], VIDEOS[5]].map((video) => (
                <VideoTile 
                  key={video.id} 
                  video={video} 
                  onClick={() => setActiveVideo(video.url)} 
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile Media Wall (Stacked/Scrollable) */}
          <div className="md:hidden flex overflow-x-auto pb-8 -mx-4 px-4 gap-4 snap-x snap-mandatory hide-scrollbar mt-12">
            {VIDEOS.map((video) => (
              <div key={video.id} className="min-w-[280px] snap-center">
                <VideoTile 
                  video={video} 
                  onClick={() => setActiveVideo(video.url)} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-background/95 backdrop-blur-xl"
            onClick={() => setActiveVideo(null)}
          >
            <button 
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors text-white z-50"
              onClick={(e) => {
                e.stopPropagation();
                setActiveVideo(null);
              }}
            >
              <X size={24} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(255,0,128,0.2)] border border-white/10 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src={activeVideo}
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Sub-component for individual video tiles
function VideoTile({ video, onClick }: { video: any, onClick: () => void }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-card border border-white/10 hover:border-primary/50 transition-colors duration-500"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
      <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <video 
        src={video.url} 
        className="w-full h-full object-cover aspect-video md:aspect-[4/3] filter brightness-75 group-hover:brightness-100 transition-all duration-700"
        autoPlay 
        muted 
        loop 
        playsInline 
      />
      
      <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
        <div className="w-14 h-14 rounded-full bg-background/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,0,128,0.5)]">
          <Play className="ml-1" size={24} />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-bold font-display text-white mb-1 shadow-black drop-shadow-md">
          {video.label}
        </h3>
      </div>
    </motion.div>
  );
}