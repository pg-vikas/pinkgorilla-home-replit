import { motion } from "framer-motion";
import { FloatingElement } from "@/components/motion/FloatingElement";

export function WhatWeDo() {
  const nodes = ["Brand", "Website", "CRM", "Payments", "Automation", "Analytics", "AI"];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="what-we-do">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight">
              Most agencies design. We engineer.
            </h2>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                We do not just launch award winning websites, mobile apps and custom enterprise software. We build digital command centers that power your entire business.
              </p>
              <p>
                Think of us as part of your company, not just someone you are in business with. We operate alongside you, helping guide the full circle of your technology from the simple foundational pieces to the most advanced systems as your growth demands it.
              </p>
              <p>
                From brand identity and websites to CRM, payments, automation, analytics, and AI integrations, we architect the backbone that keeps everything connected and moving forward.
              </p>
              <p>
                Whether you need clean basics or complex infrastructure, we scale with you.
              </p>
              <p className="font-bold text-foreground text-2xl pt-4">
                This is long term digital partnership.
              </p>
            </div>
          </motion.div>

          {/* Visual Content - Command Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-3xl border border-white/10 bg-black/40 glass-panel p-8 flex items-center justify-center overflow-hidden"
          >
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,255,0.15),transparent_70%)] pointer-events-none" />
             
             {/* Nodes */}
             <div className="absolute inset-0 flex items-center justify-center">
                {/* Central Hub Node */}
                <FloatingElement delay={1} duration={5} yOffset={5} className="absolute z-20 flex flex-col items-center">
                   <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary shadow-[0_0_30px_rgba(255,0,255,0.5)] flex items-center justify-center backdrop-blur-xl relative">
                      <div className="w-full h-full rounded-full bg-primary animate-ping opacity-50 absolute inset-0" />
                      <div className="w-4 h-4 rounded-full bg-white relative z-10 shadow-[0_0_15px_white]" />
                   </div>
                   <div className="mt-4 text-lg font-bold text-white whitespace-nowrap bg-black/60 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
                     Command Center
                   </div>
                </FloatingElement>

                {nodes.map((node, i) => {
                  // Distribute nodes in a circle around the center
                  const angle = (i / nodes.length) * Math.PI * 2;
                  const radius = 180; // Distance from center
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div key={node} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {/* Connection Line */}
                      <svg className="absolute inset-0 w-full h-full z-0 overflow-visible" style={{ pointerEvents: 'none' }}>
                         <motion.line
                           x1="50%"
                           y1="50%"
                           x2={`calc(50% + ${x}px)`}
                           y2={`calc(50% + ${y}px)`}
                           stroke="var(--primary)"
                           strokeWidth="2"
                           strokeOpacity="0.3"
                           initial={{ pathLength: 0 }}
                           whileInView={{ pathLength: 1 }}
                           viewport={{ once: true }}
                           transition={{ duration: 1.5, delay: i * 0.1 }}
                           strokeDasharray="4 4"
                         />
                      </svg>

                      {/* Node */}
                      <div className="absolute z-10 pointer-events-auto" style={{ transform: `translate(${x}px, ${y}px)` }}>
                        <FloatingElement
                          delay={i * 0.2}
                          duration={4 + (i % 3)}
                          yOffset={10}
                        >
                          <div className="relative group flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.8)] animate-pulse" />
                            <div className="absolute top-6 px-3 py-1.5 rounded bg-black/80 border border-white/20 text-xs font-medium backdrop-blur-md whitespace-nowrap text-white group-hover:border-cyan-400 transition-colors">
                              {node}
                            </div>
                          </div>
                        </FloatingElement>
                      </div>
                    </div>
                  );
                })}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
