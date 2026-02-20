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
                We do not just launch websites. We build digital command centers that power your entire business.
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
             
             {/* Lines */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <motion.path
                  d="M 100 300 Q 250 100 400 300 T 700 300"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                />
                <motion.path
                  d="M 100 300 Q 250 500 400 300 T 700 300"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.5 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="100%" stopColor="var(--secondary)" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--secondary)" />
                    <stop offset="100%" stopColor="var(--primary)" />
                  </linearGradient>
                </defs>
             </svg>

             {/* Nodes */}
             <div className="relative w-full h-full">
                {nodes.map((node, i) => {
                  const x = 10 + (i * 12);
                  const y = 20 + Math.random() * 60;
                  return (
                    <FloatingElement
                      key={node}
                      delay={i * 0.2}
                      duration={4 + (i % 3)}
                      yOffset={10}
                      className="absolute"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      <div className="relative group flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse" />
                        <div className="mt-2 px-3 py-1 rounded bg-black/80 border border-white/20 text-xs font-medium backdrop-blur-md whitespace-nowrap">
                          {node}
                        </div>
                      </div>
                    </FloatingElement>
                  );
                })}
                
                {/* Central Hub Node */}
                <FloatingElement delay={1} duration={5} yOffset={5} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                   <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary shadow-[0_0_30px_rgba(255,0,255,0.5)] flex items-center justify-center backdrop-blur-xl">
                      <div className="w-8 h-8 rounded-full bg-primary animate-ping opacity-50 absolute" />
                      <div className="w-4 h-4 rounded-full bg-white relative z-10" />
                   </div>
                   <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 text-lg font-bold text-white whitespace-nowrap bg-black/60 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
                     Command Center
                   </div>
                </FloatingElement>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
