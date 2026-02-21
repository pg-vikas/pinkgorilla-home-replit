import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FloatingElement } from "@/components/motion/FloatingElement";
import heroVideo from "@/assets/videos/hero-background.mp4";
import heroShape from "@/assets/images/hero-shape.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20" id="hero">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="container relative z-10 px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-8"
        >
          <h1 className="text-5xl lg:text-7xl font-bold font-display leading-tight tracking-tight">
            Build Your Business on Unshakable Digital Infrastructure
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Pink Gorilla designs, builds, and powers complete digital ecosystems for serious operators who want more than just a website.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-white text-black hover:bg-white/90">
              Build My Platform
            </Button>
            
            <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 border-white/20 hover:bg-white/10 backdrop-blur-sm">
              Book a Strategy Call
            </Button>
          </div>
        </motion.div>

        {/* Visual Content - Big image and badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[600px] w-full"
        >
           <div className="absolute inset-0 rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl bg-black/40 flex items-center justify-center">
             
             {/* Dynamic Light Show Behind the Tesseract */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
               {/* Deep Outer Nebula Glow */}
               <motion.div
                 animate={{ 
                   scale: [1, 1.8, 1],
                   rotate: [0, 180, 360],
                   opacity: [0.6, 1, 0.6]
                 }}
                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[600px] h-[600px] bg-primary/60 rounded-[40%_60%_70%_30%] blur-[100px] mix-blend-screen"
               />
               
               {/* High-Speed Cyan Energy Field */}
               <motion.div
                 animate={{ 
                   scale: [1.2, 0.9, 1.2],
                   rotate: [360, 180, 0],
                   opacity: [0.7, 1, 0.7]
                 }}
                 transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[550px] h-[550px] bg-cyan-400/60 rounded-[60%_40%_30%_70%] blur-[90px] mix-blend-screen"
               />

               {/* Intense Core Brightness */}
               <motion.div
                 animate={{ 
                   scale: [0.8, 1.6, 0.8],
                   opacity: [0.6, 1, 0.6]
                 }}
                 transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute w-80 h-80 bg-white/60 rounded-full blur-[50px] mix-blend-overlay"
               />

               {/* Rapid Pulsing Plasma Core */}
               <motion.div
                 animate={{ scale: [1, 3, 1], opacity: [1, 0, 1] }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                 className="absolute w-48 h-48 bg-primary rounded-full blur-[30px]"
               />

               {/* Hyper-Speed Rotating Radar/Energy Beam */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[1000px] h-[1000px] rounded-full opacity-80 mix-blend-screen"
                 style={{
                   background: "conic-gradient(from 0deg, transparent 0 340deg, rgba(0, 255, 255, 0.8) 360deg)"
                 }}
               />
               
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[900px] h-[900px] rounded-full opacity-80 mix-blend-screen"
                 style={{
                   background: "conic-gradient(from 0deg, transparent 0 340deg, rgba(255, 0, 255, 0.8) 360deg)"
                 }}
               />

               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                 className="absolute w-[1200px] h-[1200px] rounded-full opacity-40 mix-blend-screen"
                 style={{
                   background: "conic-gradient(from 180deg, transparent 0 350deg, rgba(255, 255, 255, 0.8) 360deg)"
                 }}
               />

               {/* Geometric Energy Rings */}
               <motion.div
                 animate={{ scale: [1, 2, 1], opacity: [1, 0, 1], rotate: [0, 90, 180] }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute w-96 h-96 border-2 border-primary/80 rounded-full blur-[2px]"
               />
               <motion.div
                 animate={{ scale: [2, 1, 2], opacity: [0, 1, 0], rotate: [360, 180, 0] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute w-[450px] h-[450px] border-4 border-cyan-400/60 rounded-full blur-[4px]"
               />
               
               {/* Strobe Flash */}
               <motion.div
                 animate={{ opacity: [0, 0.15, 0] }}
                 transition={{ duration: 0.1, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 bg-white mix-blend-overlay pointer-events-none"
               />
             </div>

             <FloatingElement delay={0} duration={8} yOffset={20} className="relative z-10 flex items-center justify-center w-full h-full">
               <motion.img 
                 src={heroShape} 
                 alt="Advanced Mathematical Structure" 
                 className="w-[80%] h-auto max-w-[500px] object-contain opacity-100 drop-shadow-[0_0_80px_rgba(255,255,255,0.6)]" 
                 animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                 transition={{ 
                   rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                   scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                 }}
               />
             </FloatingElement>
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 mix-blend-overlay pointer-events-none z-10"></div>
           </div>

          {/* Orbiting Badges */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 z-20 pointer-events-none"
          >
            <FloatingElement delay={0} duration={6} yOffset={-15} xOffset={10} className="top-5 -left-16">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-cyan-500/30 backdrop-blur-xl text-white font-bold shadow-[0_0_30px_rgba(0,255,255,0.2)] text-lg flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                      Websites
                    </div>
                 </div>
               </motion.div>
            </FloatingElement>

            <FloatingElement delay={1} duration={7} yOffset={15} xOffset={-10} className="top-40 -right-12">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-primary/30 backdrop-blur-xl text-primary font-bold shadow-[0_0_30px_rgba(255,0,255,0.2)] text-lg flex items-center gap-3 overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <div className="w-2 h-4 bg-primary/80 rounded-sm animate-bounce" />
                      CRM
                    </div>
                 </div>
               </motion.div>
            </FloatingElement>

            <FloatingElement delay={2} duration={8} yOffset={20} className="bottom-48 -left-20">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-green-400 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-secondary/30 backdrop-blur-xl text-secondary font-bold shadow-[0_0_30px_rgba(0,255,170,0.2)] text-lg flex items-center gap-3">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                      </div>
                      Payments
                    </div>
                 </div>
               </motion.div>
            </FloatingElement>

            <FloatingElement delay={1.5} duration={6.5} yOffset={-20} className="bottom-20 right-10">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-orange-500/30 backdrop-blur-xl text-white font-bold shadow-[0_0_30px_rgba(255,165,0,0.2)] text-lg flex items-center gap-3">
                       <div className="flex gap-1 h-3 items-end">
                         <motion.div className="w-1 bg-orange-400 rounded-full" animate={{ height: ["40%", "100%", "40%"] }} transition={{ duration: 1, repeat: Infinity }} />
                         <motion.div className="w-1 bg-orange-400 rounded-full" animate={{ height: ["70%", "30%", "70%"] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} />
                         <motion.div className="w-1 bg-orange-400 rounded-full" animate={{ height: ["100%", "50%", "100%"] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} />
                       </div>
                       Automation
                    </div>
                 </div>
               </motion.div>
            </FloatingElement>

            <FloatingElement delay={0.5} duration={5} yOffset={10} xOffset={20} className="top-[60%] left-[40%] -translate-x-1/2 -translate-y-1/2">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-yellow-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-accent/30 backdrop-blur-xl text-accent font-bold shadow-[0_0_30px_rgba(173,255,47,0.2)] text-lg flex items-center gap-3">
                      <div className="w-4 h-4 rounded border-2 border-accent flex items-center justify-center animate-[spin_3s_linear_infinite]">
                        <div className="w-1 h-1 bg-accent rounded-full" />
                      </div>
                      Analytics
                    </div>
                 </div>
               </motion.div>
            </FloatingElement>

            <FloatingElement delay={2.5} duration={9} yOffset={25} xOffset={-15} className="-top-8 right-16">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/10 rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="px-8 py-4 rounded-full bg-white/10 border-2 border-white/30 backdrop-blur-xl text-white font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] text-lg flex items-center gap-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite]" />
                      <span className="relative z-10 flex items-center gap-2">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-t-2 border-r-2 border-white rounded-full" />
                        AI Engine
                      </span>
                    </div>
                 </div>
               </motion.div>
            </FloatingElement>

            <FloatingElement delay={3} duration={10} yOffset={30} xOffset={-30} className="top-[30%] -left-24">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-emerald-500/30 backdrop-blur-xl text-emerald-400 font-bold shadow-[0_0_30px_rgba(16,185,129,0.2)] text-lg flex items-center gap-3">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                          />
                        ))}
                      </div>
                      Support
                    </div>
                 </div>
               </motion.div>
            </FloatingElement>

            <FloatingElement delay={4} duration={11} yOffset={-25} xOffset={25} className="bottom-[10%] left-[20%]">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-gray-200 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-slate-400/30 backdrop-blur-xl text-slate-300 font-bold shadow-[0_0_30px_rgba(148,163,184,0.2)] text-lg flex items-center gap-3">
                      <div className="w-4 h-4 border-2 border-slate-400 rounded-sm relative">
                        <motion.div 
                          className="absolute inset-0 bg-slate-400/50" 
                          animate={{ scaleY: [0, 1, 0], originY: "bottom" }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                      Stability
                    </div>
                 </div>
               </motion.div>
            </FloatingElement>

            <FloatingElement delay={1.8} duration={8.5} yOffset={35} xOffset={-20} className="top-[70%] right-[5%]">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-rose-500/30 backdrop-blur-xl text-rose-400 font-bold shadow-[0_0_30px_rgba(244,63,94,0.2)] text-lg flex items-center gap-3">
                      <motion.div 
                        className="w-5 h-5 flex items-center justify-center border border-rose-400 rounded-full"
                        animate={{ rotate: [0, 90, 180, 270, 360] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full absolute -top-1" />
                      </motion.div>
                      Control
                    </div>
                 </div>
               </motion.div>
            </FloatingElement>

            <FloatingElement delay={2.2} duration={7.5} yOffset={-15} xOffset={30} className="top-[15%] right-[25%]">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-sky-400/30 backdrop-blur-xl text-sky-300 font-bold shadow-[0_0_30px_rgba(56,189,248,0.2)] text-lg flex items-center gap-3">
                      <div className="relative w-5 h-5">
                        <motion.div 
                          className="absolute inset-0 border-2 border-sky-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <div className="absolute inset-1 bg-sky-400 rounded-full" />
                      </div>
                      Clarity
                    </div>
                 </div>
               </motion.div>
            </FloatingElement>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
