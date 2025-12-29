import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Zap } from "lucide-react";
import heroBg from "@assets/generated_images/futuristic_abstract_background_with_dark_glass_and_neon_accents.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
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
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 z-20"
          >
            <div className="w-64 glass-panel p-6 rounded-2xl border-l-4 border-l-primary bg-black/40">
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
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-10 z-30"
          >
            <div className="w-64 glass-panel p-6 rounded-2xl border-l-4 border-l-secondary bg-black/40">
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
          </motion.div>

          {/* Central Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 blur-3xl rounded-full opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
