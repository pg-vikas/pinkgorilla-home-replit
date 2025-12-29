import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Zap, Hexagon, Circle } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_abstract_background_with_dark_glass_and_neon_accents.png";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { GeometricShape } from "@/components/motion/GeometricShape";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroBg}
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        
        {/* Floating Background Elements */}
        <FloatingElement delay={0} duration={8} yOffset={40} xOffset={20} className="top-[10%] left-[5%] opacity-30">
          <GeometricShape type="circle" color="primary" variant="glow" size="w-64 h-64" />
        </FloatingElement>
        
        <FloatingElement delay={2} duration={10} yOffset={-30} rotate={10} className="bottom-[20%] right-[10%] opacity-20">
           <GeometricShape type="square" color="secondary" variant="glow" size="w-96 h-96" />
        </FloatingElement>

        <FloatingElement delay={1} duration={12} xOffset={-50} className="top-[40%] right-[30%] opacity-10">
           <GeometricShape type="triangle" color="white" variant="outline" size="w-40 h-40" />
        </FloatingElement>
      </div>

      <div className="container relative z-10 px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now accepting new enterprise clients
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold font-display leading-tight tracking-tight">
            Build your business on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
              real digital infrastructure.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Web, SEO, reputation, and custom software that actually runs the operation.
            Stop renting your future. Build it.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="rounded-full px-8 text-lg h-14 bg-white text-black hover:bg-white/90">
              <Link href="/contact">
                Book a Call <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 border-white/20 hover:bg-white/10 backdrop-blur-sm">
              <Link href="/core">
                Explore Core
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Visual Content - Glass Stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[600px] w-full"
        >
          {/* Floating Elements - Replaced custom motion divs with FloatingElement system */}
          
          {/* Card 1: Core */}
          <FloatingElement delay={0} duration={6} yOffset={-20} xOffset={10} rotate={2} className="top-10 right-10 z-20">
            <div className="w-64 glass-panel p-6 rounded-2xl border-l-4 border-l-primary bg-black/40 hover:bg-black/60 transition-colors cursor-default">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Gorilla Core</h3>
                  <p className="text-xs text-muted-foreground">Foundation Layer</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-white/10 rounded w-3/4"></div>
                <div className="h-2 bg-white/10 rounded w-1/2"></div>
              </div>
            </div>
          </FloatingElement>

          {/* Card 2: Apps */}
          <FloatingElement delay={1} duration={7} yOffset={20} xOffset={-5} rotate={-2} className="bottom-20 left-10 z-30">
            <div className="w-64 glass-panel p-6 rounded-2xl border-l-4 border-l-secondary bg-black/40 hover:bg-black/60 transition-colors cursor-default">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-secondary/20 rounded-lg text-secondary">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Gorilla Apps</h3>
                  <p className="text-xs text-muted-foreground">Operations Layer</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="px-2 py-1 rounded bg-secondary/10 text-[10px] text-secondary border border-secondary/20">CRM</span>
                <span className="px-2 py-1 rounded bg-secondary/10 text-[10px] text-secondary border border-secondary/20">Dispatch</span>
              </div>
            </div>
          </FloatingElement>
          
          {/* Decorative shapes around the product stack */}
          <FloatingElement delay={2} duration={5} scale={1.2} className="top-0 left-20 z-10 opacity-60">
             <GeometricShape type="circle" color="primary" variant="glass" size="w-20 h-20" className="rounded-full" />
          </FloatingElement>
          
          <FloatingElement delay={3} duration={8} rotate={45} className="bottom-40 right-20 z-10 opacity-60">
             <GeometricShape type="hexagon" color="secondary" variant="outline" size="w-24 h-24" />
          </FloatingElement>

          {/* Central Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 blur-3xl rounded-full opacity-50 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
