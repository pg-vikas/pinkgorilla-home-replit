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
             <FloatingElement delay={0} duration={12} yOffset={20} rotate={15}>
               <img src={heroShape} alt="Advanced Mathematical Structure" className="w-[80%] h-auto max-w-[500px] object-contain opacity-90 drop-shadow-[0_0_30px_rgba(255,0,255,0.4)]" />
             </FloatingElement>
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 mix-blend-overlay pointer-events-none"></div>
           </div>

          {/* Floating Badges */}
          <FloatingElement delay={0} duration={6} yOffset={-15} xOffset={10} className="top-5 -left-16 z-20">
             <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-cyan-500/30 backdrop-blur-xl text-white font-bold shadow-[0_0_30px_rgba(0,255,255,0.2)] text-lg flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                  Websites
                </div>
             </div>
          </FloatingElement>

          <FloatingElement delay={1} duration={7} yOffset={15} xOffset={-10} className="top-40 -right-12 z-20">
             <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-primary/30 backdrop-blur-xl text-primary font-bold shadow-[0_0_30px_rgba(255,0,255,0.2)] text-lg flex items-center gap-3 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="w-2 h-4 bg-primary/80 rounded-sm animate-bounce" />
                  CRM
                </div>
             </div>
          </FloatingElement>

          <FloatingElement delay={2} duration={8} yOffset={20} className="bottom-48 -left-20 z-20">
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
          </FloatingElement>

          <FloatingElement delay={1.5} duration={6.5} yOffset={-20} className="bottom-20 right-10 z-20">
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
          </FloatingElement>

          <FloatingElement delay={0.5} duration={5} yOffset={10} xOffset={20} className="top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-yellow-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-accent/30 backdrop-blur-xl text-accent font-bold shadow-[0_0_30px_rgba(173,255,47,0.2)] text-lg flex items-center gap-3">
                  <div className="w-4 h-4 rounded border-2 border-accent flex items-center justify-center animate-[spin_3s_linear_infinite]">
                    <div className="w-1 h-1 bg-accent rounded-full" />
                  </div>
                  Analytics
                </div>
             </div>
          </FloatingElement>

          <FloatingElement delay={2.5} duration={9} yOffset={25} xOffset={-15} className="-top-8 right-16 z-20">
             <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/10 rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="px-8 py-4 rounded-full bg-white/10 border-2 border-white/30 backdrop-blur-xl text-white font-bold shadow-[0_0_40px_rgba(255,255,255,0.3)] text-lg flex items-center gap-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite]" />
                  <span className="relative z-10">AI Engine</span>
                </div>
             </div>
          </FloatingElement>
        </motion.div>
      </div>
    </section>
  );
}
