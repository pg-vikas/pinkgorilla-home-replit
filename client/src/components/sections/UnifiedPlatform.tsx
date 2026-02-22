import { motion } from "framer-motion";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { GeometricShape } from "@/components/motion/GeometricShape";

export function UnifiedPlatform() {
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
             Front-end presence and back-end operations working in perfect harmony.
           </motion.p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0 mt-10 min-h-[800px] md:min-h-[600px]">
          
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.1),transparent_70%)] pointer-events-none" />

          {/* Central Trunk / Core */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent hidden md:block" />

          <FloatingElement delay={0} duration={6} yOffset={10} className="md:absolute left-1/2 md:-translate-x-1/2 top-1/2 md:-translate-y-1/2 z-30 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border border-white/20 bg-black/80 backdrop-blur-xl flex items-center justify-center relative shadow-[0_0_50px_rgba(0,255,255,0.2)]">
               <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-[spin_4s_linear_infinite]" />
               <div className="absolute inset-2 rounded-full border border-primary/50 animate-[spin_6s_linear_infinite_reverse]" />
               <h3 className="text-2xl font-bold font-display text-white text-center leading-none">Pink<br/>Gorilla</h3>
            </div>
          </FloatingElement>

          {/* Left Branch - Gorilla Core (Front-end) */}
          <div className="flex-1 flex flex-col justify-between items-end relative z-20 md:pr-32 py-10">
             <div className="text-right mb-12 w-full md:w-auto">
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="inline-block px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4 backdrop-blur-md"
               >
                 Gorilla Core
               </motion.div>
               <h3 className="text-3xl font-bold text-white mb-2">Digital Presence</h3>
               <p className="text-muted-foreground max-w-sm ml-auto">The front-facing architecture that drives your brand, captures attention, and builds trust.</p>
             </div>

             <div className="space-y-6 w-full max-w-sm relative">
                {coreFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative group p-5 rounded-2xl bg-black/60 border border-white/10 hover:border-cyan-500/50 transition-colors backdrop-blur-md text-right"
                  >
                     <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-10 h-px bg-cyan-500/30 hidden md:block" />
                     <div className="absolute right-[-44px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-500 hidden md:block group-hover:shadow-[0_0_10px_cyan] transition-shadow" />
                     
                     <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{feature.title}</h4>
                     <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Right Branch - Gorilla Apps (Back-end) */}
          <div className="flex-1 flex flex-col justify-between items-start relative z-20 md:pl-32 py-10 mt-16 md:mt-0">
             <div className="text-left mb-12 w-full md:w-auto">
               <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="inline-block px-6 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-bold tracking-widest uppercase text-sm mb-4 backdrop-blur-md"
               >
                 Gorilla Apps
               </motion.div>
               <h3 className="text-3xl font-bold text-white mb-2">Company Operations</h3>
               <p className="text-muted-foreground max-w-sm">The backend engines and internal tools that run your processes, manage data, and scale your operations.</p>
             </div>

             <div className="space-y-6 w-full max-w-sm relative">
                {appFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative group p-5 rounded-2xl bg-black/60 border border-white/10 hover:border-primary/50 transition-colors backdrop-blur-md text-left"
                  >
                     <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-10 h-px bg-primary/30 hidden md:block" />
                     <div className="absolute left-[-44px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary hidden md:block group-hover:shadow-[0_0_10px_magenta] transition-shadow" />
                     
                     <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{feature.title}</h4>
                     <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
