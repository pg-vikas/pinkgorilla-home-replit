import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { GeometricShape } from "@/components/motion/GeometricShape";
import { useRef, useState } from "react";
import { Link } from "wouter";

export function UnifiedPlatform() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const circleTop = useTransform(scrollYProgress, [0, 1], ["0%", "85%"]);
  
  const [activeIndex, setActiveIndex] = useState(-1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.1) setActiveIndex(-1);
    else if (latest < 0.3) setActiveIndex(0);
    else if (latest < 0.5) setActiveIndex(1);
    else if (latest < 0.7) setActiveIndex(2);
    else if (latest < 0.9) setActiveIndex(3);
    else if (latest < 0.95) setActiveIndex(4);
    else setActiveIndex(5);
  });

  const coreFeatures = [
    { title: "Custom websites", desc: "High performance rendering" },
    { title: "Brand identity", desc: "Visual languages built to scale" },
    { title: "Domains & hosting", desc: "Enterprise infrastructure" },
    { title: "Email infrastructure", desc: "Secure, deliverable communication" },
    { title: "Security & speed", desc: "Continuous monitoring" }
  ];

  const appFeatures = [
    { title: "CRM & lead tracking", desc: "Manage client relationships" },
    { title: "Broadcast tools", desc: "Mass communication platforms" },
    { title: "Analytics dashboards", desc: "Real-time business insights" },
    { title: "Payment integrations", desc: "Seamless financial flows" },
    { title: "Client portals", desc: "Dedicated customer environments" }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="platform">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto space-y-6">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-bold font-display"
           >
             The Complete Ecosystem
           </motion.h2>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-xl text-muted-foreground"
           >
             Front-end presence and back-end operations working in perfect harmony. Decide if Gorilla Core is what your business needs or Gorilla Apps or Both for bundled value and super charging your entire business.
           </motion.p>
        </div>

        <div ref={containerRef} className="relative w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0 mt-16 pb-32 min-h-[1200px] md:min-h-[900px]">
          
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.05),transparent_70%)] pointer-events-none" />

          {/* Central Trunk / Core */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent hidden md:block" />

          {/* Mobile static circle */}
          <FloatingElement delay={0} duration={6} yOffset={10} className="md:hidden flex flex-col items-center mb-8">
            <div className="w-32 h-32 rounded-full border border-white/20 bg-black/80 backdrop-blur-xl flex items-center justify-center relative shadow-[0_0_50px_rgba(0,255,255,0.2)] overflow-hidden">
               {/* Neon racing light */}
               <div className="absolute inset-0 rounded-full">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%] -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(0,255,255,1)_360deg)] animate-[spin_3s_linear_infinite]" />
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%] -translate-y-1/2 bg-[conic-gradient(from_180deg,transparent_0_340deg,rgba(255,0,255,1)_360deg)] animate-[spin_3s_linear_infinite]" />
               </div>
               
               <div className="absolute inset-[2px] rounded-full bg-black flex items-center justify-center">
                 <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-[spin_4s_linear_infinite]" />
                 <div className="absolute inset-2 rounded-full border border-primary/30 animate-[spin_6s_linear_infinite_reverse]" />
                 <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl mix-blend-screen animate-pulse" />
                 <h3 className="text-2xl font-bold font-display text-white text-center leading-none z-10">Pink<br/>Gorilla</h3>
               </div>
            </div>
          </FloatingElement>

          {/* Desktop scrolling circle */}
          <motion.div 
            style={{ top: circleTop }} 
            className="absolute left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center pointer-events-none"
          >
            <div className="w-32 h-32 rounded-full border border-white/20 bg-black/80 backdrop-blur-xl flex items-center justify-center relative shadow-[0_0_50px_rgba(255,0,255,0.4)] overflow-hidden">
               {/* Neon racing light */}
               <div className="absolute inset-0 rounded-full">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%] -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(0,255,255,1)_360deg)] animate-[spin_3s_linear_infinite]" />
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%] -translate-y-1/2 bg-[conic-gradient(from_180deg,transparent_0_340deg,rgba(255,0,255,1)_360deg)] animate-[spin_3s_linear_infinite]" />
               </div>
               
               <div className="absolute inset-[2px] rounded-full bg-black flex items-center justify-center">
                 <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-[spin_4s_linear_infinite]" />
                 <div className="absolute inset-2 rounded-full border border-primary/30 animate-[spin_6s_linear_infinite_reverse]" />
                 <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl mix-blend-screen animate-pulse" />
                 <h3 className="text-2xl font-bold font-display text-white text-center leading-none z-10">Pink<br/>Gorilla</h3>
               </div>
            </div>
          </motion.div>

          {/* Left Branch - Gorilla Core (Front-end) */}
          <div className="flex-1 flex flex-col justify-between items-end relative z-20 md:pr-32 py-10">
             <div className="text-right mb-16 w-full md:w-auto">
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="inline-block px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-bold tracking-widest uppercase text-sm mb-6 backdrop-blur-md"
               >
                 Gorilla Core
               </motion.div>
               <h3 className="text-4xl font-bold text-white mb-4">Digital Presence</h3>
               <p className="text-lg text-muted-foreground max-w-md ml-auto">The front-facing architecture that drives your brand, captures attention, and builds trust.</p>
             </div>

             <div className="space-y-10 w-full max-w-md relative">
                {coreFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative group p-5 rounded-2xl bg-black/60 border transition-all duration-500 backdrop-blur-md text-right ${
                      activeIndex === i 
                        ? "border-cyan-500 shadow-[0_0_30px_rgba(0,255,255,0.2)] scale-[1.02] opacity-100" 
                        : "border-white/10 hover:border-cyan-500/50 opacity-60 hover:opacity-100 scale-100"
                    }`}
                  >
                     <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-10 h-px bg-cyan-500/30 hidden md:block" />
                     <div className={`absolute right-[-44px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-500 hidden md:block transition-all duration-500 ${activeIndex === i ? "shadow-[0_0_15px_cyan] scale-150" : "group-hover:shadow-[0_0_10px_cyan]"}`} />
                     
                     <h4 className={`text-lg font-bold mb-1 transition-colors duration-500 ${activeIndex === i ? "text-cyan-400" : "text-white group-hover:text-cyan-400"}`}>{feature.title}</h4>
                     <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </motion.div>
                ))}
             </div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex flex-wrap gap-4 mt-12 w-full max-w-md justify-end relative z-30"
             >
                <Link href="/core">
                  <a className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 text-white font-medium transition-colors">Explore More</a>
                </Link>
                <Link href="/pricing">
                  <a className="px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold transition-all shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]">Pricing</a>
                </Link>
             </motion.div>
          </div>

          {/* Right Branch - Gorilla Apps (Back-end) */}
          <div className="flex-1 flex flex-col justify-between items-start relative z-20 md:pl-32 py-10 mt-16 md:mt-0">
             <div className="text-left mb-16 w-full md:w-auto">
               <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="inline-block px-6 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-bold tracking-widest uppercase text-sm mb-6 backdrop-blur-md"
               >
                 Gorilla Apps
               </motion.div>
               <h3 className="text-4xl font-bold text-white mb-4">Company Operations</h3>
               <p className="text-lg text-muted-foreground max-w-md">The backend engines and internal tools that run your processes, manage data, and scale your operations.</p>
             </div>

             <div className="space-y-10 w-full max-w-md relative">
                {appFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative group p-5 rounded-2xl bg-black/60 border transition-all duration-500 backdrop-blur-md text-left ${
                      activeIndex === i 
                        ? "border-primary shadow-[0_0_30px_rgba(255,0,255,0.2)] scale-[1.02] opacity-100" 
                        : "border-white/10 hover:border-primary/50 opacity-60 hover:opacity-100 scale-100"
                    }`}
                  >
                     <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-10 h-px bg-primary/30 hidden md:block" />
                     <div className={`absolute left-[-44px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary hidden md:block transition-all duration-500 ${activeIndex === i ? "shadow-[0_0_15px_magenta] scale-150" : "group-hover:shadow-[0_0_10px_magenta]"}`} />
                     
                     <h4 className={`text-lg font-bold mb-1 transition-colors duration-500 ${activeIndex === i ? "text-primary" : "text-white group-hover:text-primary"}`}>{feature.title}</h4>
                     <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </motion.div>
                ))}
             </div>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex flex-wrap gap-4 mt-12 w-full max-w-md justify-start relative z-30"
             >
                <Link href="/apps">
                  <a className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-white font-medium transition-colors">Explore More</a>
                </Link>
                <Link href="/pricing">
                  <a className="px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-white font-bold transition-all shadow-[0_0_15px_rgba(255,0,255,0.2)] hover:shadow-[0_0_25px_rgba(255,0,255,0.5)]">Pricing</a>
                </Link>
             </motion.div>
          </div>

        </div>

        <motion.div 
          className={`mt-16 text-center max-w-4xl mx-auto px-8 py-10 rounded-3xl border transition-all duration-700 relative overflow-hidden ${
            activeIndex === 5 
              ? "border-cyan-500/50 bg-black/60 shadow-[0_0_50px_rgba(0,255,255,0.15)] scale-[1.02]" 
              : "border-transparent bg-transparent scale-100"
          }`}
        >
          {/* Top connecting line that lights up */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 transition-colors duration-700 ${activeIndex === 5 ? "bg-gradient-to-b from-cyan-400 to-transparent shadow-[0_0_15px_cyan]" : "bg-white/10"}`} />
          
          {/* Connecting glow on top edge */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px transition-all duration-700 ${activeIndex === 5 ? "bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-100 shadow-[0_0_20px_cyan]" : "opacity-0"}`} />

          <h3 className={`text-3xl md:text-5xl font-bold font-display mb-6 transition-colors duration-700 relative z-10 ${activeIndex === 5 ? "text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" : "text-white/70"}`}>
            A Full Digital Brand with Pink Gorilla
          </h3>
          <p className={`text-xl md:text-2xl leading-relaxed font-light transition-colors duration-700 relative z-10 ${activeIndex === 5 ? "text-white/90" : "text-muted-foreground"}`}>
            <span className={`font-medium transition-colors duration-700 ${activeIndex === 5 ? "text-cyan-400" : "text-white/80"}`}>How Businesses Are Changing How They Operate.</span> We don't just build websites; we architect complete digital ecosystems. By centralizing your front-end presence and back-end operations under one unified strategy, we eliminate friction, accelerate growth, and build unshakable infrastructure that scales with your ambition.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
