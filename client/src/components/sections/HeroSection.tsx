import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FloatingElement } from "@/components/motion/FloatingElement";
import heroVideo from "@/assets/videos/hero-background.mp4";

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
           <div className="absolute inset-0 rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl">
             <img src="https://picsum.photos/id/2/800/800" alt="Platform Preview" className="w-full h-full object-cover opacity-60" />
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 mix-blend-overlay"></div>
           </div>

          {/* Floating Badges */}
          <FloatingElement delay={0} duration={6} yOffset={-15} xOffset={10} className="top-10 -left-10 z-20">
             <div className="px-6 py-3 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-white font-medium shadow-xl">
               Websites
             </div>
          </FloatingElement>

          <FloatingElement delay={1} duration={7} yOffset={15} xOffset={-10} className="top-32 -right-5 z-20">
             <div className="px-6 py-3 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md text-primary font-medium shadow-xl">
               CRM
             </div>
          </FloatingElement>

          <FloatingElement delay={2} duration={8} yOffset={20} className="bottom-40 -left-12 z-20">
             <div className="px-6 py-3 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-md text-secondary font-medium shadow-xl">
               Payments
             </div>
          </FloatingElement>

          <FloatingElement delay={1.5} duration={6.5} yOffset={-20} className="bottom-20 right-10 z-20">
             <div className="px-6 py-3 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-white font-medium shadow-xl">
               Automation
             </div>
          </FloatingElement>

          <FloatingElement delay={0.5} duration={5} yOffset={10} xOffset={20} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             <div className="px-6 py-3 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-md text-accent font-medium shadow-xl">
               Analytics
             </div>
          </FloatingElement>

          <FloatingElement delay={2.5} duration={9} yOffset={25} xOffset={-15} className="-top-5 right-20 z-20">
             <div className="px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-medium shadow-xl">
               AI
             </div>
          </FloatingElement>
        </motion.div>
      </div>
    </section>
  );
}
