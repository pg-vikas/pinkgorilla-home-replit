import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { cn } from "@/lib/utils";
import { Command, Figma, Slack, Trello, Hexagon, Layers, Box, Database, Chrome, Cloud, Layout, Globe, Briefcase, Building2, Shield, Lock, Fingerprint, Activity } from "lucide-react";

const heroKeyframes = `
@keyframes pg-blob {
  0% { transform: translate3d(0,-50%,0) scale(1); }
  33% { transform: translate3d(38px,-65%,0) scale(1.08); }
  66% { transform: translate3d(86px,-38%,0) scale(0.94); }
  100% { transform: translate3d(0,-50%,0) scale(1); }
}
`;

function LiquidOrb({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 flex items-center justify-center", className)}>
      <motion.div 
        className="w-full h-full relative flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[120%] h-[120%] absolute blur-xl opacity-60">
          <motion.path 
            fill="url(#grad1)" 
            animate={{
              d: [
                "M42,-65C54.4,-57.4,64.2,-44.6,71.2,-30.3C78.2,-16,82.4,-0.2,79.5,14C76.6,28.2,66.6,40.8,54.7,51.8C42.8,62.8,29,72.2,13.6,76.5C-1.8,80.8,-18.8,80,-33.1,73.4C-47.4,66.8,-59.1,54.4,-67.2,40.5C-75.3,26.6,-79.8,11.2,-78.5,-3.7C-77.2,-18.6,-70.1,-33,-60.1,-44.8C-50.1,-56.6,-37.2,-65.8,-23.3,-69.5C-9.4,-73.2,5.5,-71.4,19.8,-69.5C34.1,-67.6,47.8,-65.6,42,-65Z",
                "M39.6,-59.5C53,-50.2,66.7,-42.6,73.1,-30.7C79.5,-18.8,78.6,-2.6,73.8,11.8C69,26.2,60.3,38.8,49.8,49.8C39.3,60.8,27,70.2,11.7,73.8C-3.6,77.4,-21.9,75.2,-37.6,67.6C-53.3,60,-66.4,47,-72.9,31.5C-79.4,16,-79.3,-2,-74.6,-18.4C-69.9,-34.8,-60.6,-49.6,-48,-59C-35.4,-68.4,-19.5,-72.4,-4.1,-69.9C11.3,-67.4,26.2,-68.8,39.6,-59.5Z",
                "M46.7,-64.1C60.1,-55.8,70.3,-42.2,75.7,-27.1C81.1,-12,81.7,4.6,77.1,19.6C72.5,34.6,62.7,48,50.1,58.3C37.5,68.6,22,76.5,4.7,74.9C-12.6,73.3,-31.7,62.2,-46.8,50.3C-61.9,38.4,-73,25.7,-78.1,11.1C-83.2,-3.5,-82.3,-20,-75.1,-34.2C-67.9,-48.4,-54.4,-60.3,-40,-67.8C-25.6,-75.3,-10.3,-78.4,3.7,-78.1C17.7,-77.8,33.3,-72.4,46.7,-64.1Z",
                "M42,-65C54.4,-57.4,64.2,-44.6,71.2,-30.3C78.2,-16,82.4,-0.2,79.5,14C76.6,28.2,66.6,40.8,54.7,51.8C42.8,62.8,29,72.2,13.6,76.5C-1.8,80.8,-18.8,80,-33.1,73.4C-47.4,66.8,-59.1,54.4,-67.2,40.5C-75.3,26.6,-79.8,11.2,-78.5,-3.7C-77.2,-18.6,-70.1,-33,-60.1,-44.8C-50.1,-56.6,-37.2,-65.8,-23.3,-69.5C-9.4,-73.2,5.5,-71.4,19.8,-69.5C34.1,-67.6,47.8,-65.6,42,-65Z"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            transform="translate(100 100)" 
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 255, 255, 1)" />
              <stop offset="50%" stopColor="rgba(255, 0, 255, 0.8)" />
              <stop offset="100%" stopColor="rgba(0, 255, 170, 0.6)" />
            </linearGradient>
          </defs>
        </svg>

        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute">
          <motion.path 
            fill="url(#grad2)" 
            animate={{
              d: [
                "M39.6,-59.5C53,-50.2,66.7,-42.6,73.1,-30.7C79.5,-18.8,78.6,-2.6,73.8,11.8C69,26.2,60.3,38.8,49.8,49.8C39.3,60.8,27,70.2,11.7,73.8C-3.6,77.4,-21.9,75.2,-37.6,67.6C-53.3,60,-66.4,47,-72.9,31.5C-79.4,16,-79.3,-2,-74.6,-18.4C-69.9,-34.8,-60.6,-49.6,-48,-59C-35.4,-68.4,-19.5,-72.4,-4.1,-69.9C11.3,-67.4,26.2,-68.8,39.6,-59.5Z",
                "M46.7,-64.1C60.1,-55.8,70.3,-42.2,75.7,-27.1C81.1,-12,81.7,4.6,77.1,19.6C72.5,34.6,62.7,48,50.1,58.3C37.5,68.6,22,76.5,4.7,74.9C-12.6,73.3,-31.7,62.2,-46.8,50.3C-61.9,38.4,-73,25.7,-78.1,11.1C-83.2,-3.5,-82.3,-20,-75.1,-34.2C-67.9,-48.4,-54.4,-60.3,-40,-67.8C-25.6,-75.3,-10.3,-78.4,3.7,-78.1C17.7,-77.8,33.3,-72.4,46.7,-64.1Z",
                "M42,-65C54.4,-57.4,64.2,-44.6,71.2,-30.3C78.2,-16,82.4,-0.2,79.5,14C76.6,28.2,66.6,40.8,54.7,51.8C42.8,62.8,29,72.2,13.6,76.5C-1.8,80.8,-18.8,80,-33.1,73.4C-47.4,66.8,-59.1,54.4,-67.2,40.5C-75.3,26.6,-79.8,11.2,-78.5,-3.7C-77.2,-18.6,-70.1,-33,-60.1,-44.8C-50.1,-56.6,-37.2,-65.8,-23.3,-69.5C-9.4,-73.2,5.5,-71.4,19.8,-69.5C34.1,-67.6,47.8,-65.6,42,-65Z",
                "M39.6,-59.5C53,-50.2,66.7,-42.6,73.1,-30.7C79.5,-18.8,78.6,-2.6,73.8,11.8C69,26.2,60.3,38.8,49.8,49.8C39.3,60.8,27,70.2,11.7,73.8C-3.6,77.4,-21.9,75.2,-37.6,67.6C-53.3,60,-66.4,47,-72.9,31.5C-79.4,16,-79.3,-2,-74.6,-18.4C-69.9,-34.8,-60.6,-49.6,-48,-59C-35.4,-68.4,-19.5,-72.4,-4.1,-69.9C11.3,-67.4,26.2,-68.8,39.6,-59.5Z"
              ]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            transform="translate(100 100)" 
          />
          <defs>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 0, 255, 1)" />
              <stop offset="50%" stopColor="rgba(0, 255, 255, 0.7)" />
              <stop offset="100%" stopColor="rgba(173, 255, 47, 0.5)" />
            </linearGradient>
          </defs>
        </svg>

        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[80%] h-[80%] absolute mix-blend-overlay">
          <motion.path 
            fill="url(#grad3)" 
            animate={{
              d: [
                "M46.7,-64.1C60.1,-55.8,70.3,-42.2,75.7,-27.1C81.1,-12,81.7,4.6,77.1,19.6C72.5,34.6,62.7,48,50.1,58.3C37.5,68.6,22,76.5,4.7,74.9C-12.6,73.3,-31.7,62.2,-46.8,50.3C-61.9,38.4,-73,25.7,-78.1,11.1C-83.2,-3.5,-82.3,-20,-75.1,-34.2C-67.9,-48.4,-54.4,-60.3,-40,-67.8C-25.6,-75.3,-10.3,-78.4,3.7,-78.1C17.7,-77.8,33.3,-72.4,46.7,-64.1Z",
                "M42,-65C54.4,-57.4,64.2,-44.6,71.2,-30.3C78.2,-16,82.4,-0.2,79.5,14C76.6,28.2,66.6,40.8,54.7,51.8C42.8,62.8,29,72.2,13.6,76.5C-1.8,80.8,-18.8,80,-33.1,73.4C-47.4,66.8,-59.1,54.4,-67.2,40.5C-75.3,26.6,-79.8,11.2,-78.5,-3.7C-77.2,-18.6,-70.1,-33,-60.1,-44.8C-50.1,-56.6,-37.2,-65.8,-23.3,-69.5C-9.4,-73.2,5.5,-71.4,19.8,-69.5C34.1,-67.6,47.8,-65.6,42,-65Z",
                "M39.6,-59.5C53,-50.2,66.7,-42.6,73.1,-30.7C79.5,-18.8,78.6,-2.6,73.8,11.8C69,26.2,60.3,38.8,49.8,49.8C39.3,60.8,27,70.2,11.7,73.8C-3.6,77.4,-21.9,75.2,-37.6,67.6C-53.3,60,-66.4,47,-72.9,31.5C-79.4,16,-79.3,-2,-74.6,-18.4C-69.9,-34.8,-60.6,-49.6,-48,-59C-35.4,-68.4,-19.5,-72.4,-4.1,-69.9C11.3,-67.4,26.2,-68.8,39.6,-59.5Z",
                "M46.7,-64.1C60.1,-55.8,70.3,-42.2,75.7,-27.1C81.1,-12,81.7,4.6,77.1,19.6C72.5,34.6,62.7,48,50.1,58.3C37.5,68.6,22,76.5,4.7,74.9C-12.6,73.3,-31.7,62.2,-46.8,50.3C-61.9,38.4,-73,25.7,-78.1,11.1C-83.2,-3.5,-82.3,-20,-75.1,-34.2C-67.9,-48.4,-54.4,-60.3,-40,-67.8C-25.6,-75.3,-10.3,-78.4,3.7,-78.1C17.7,-77.8,33.3,-72.4,46.7,-64.1Z"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            transform="translate(100 100)" 
          />
          <defs>
            <linearGradient id="grad3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
              <stop offset="50%" stopColor="rgba(0, 255, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(255, 0, 255, 0.6)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Inner glow and highlight */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-magenta-500/20 mix-blend-screen filter blur-md animate-pulse" />
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-background" id="hero">
      <style>{heroKeyframes}</style>
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
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

          <div className="flex flex-col gap-4 justify-center lg:justify-start">
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <button
                type="button"
                className="group relative inline-flex h-14 items-center justify-center rounded-full px-8 text-lg font-black font-display tracking-tight text-black transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 active:scale-[0.99]"
                data-testid="button-chat-now"
                onClick={() => window.open("https://pinkgorilla.online", "_blank", "noopener,noreferrer")}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 via-white to-emerald-300" aria-hidden="true" />
                <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),transparent_60%)] opacity-80" aria-hidden="true" />
                <span className="absolute inset-0 rounded-full opacity-70 bg-[conic-gradient(from_90deg,rgba(0,255,255,0.0),rgba(0,255,255,0.35),rgba(255,255,255,0.0),rgba(34,197,94,0.28),rgba(0,255,255,0.0))] animate-[spin_4.5s_linear_infinite]" aria-hidden="true" />
                <span className="relative">Chat now</span>
              </button>

              <button
                type="button"
                className="group relative inline-flex h-14 items-center justify-center rounded-full px-8 text-lg font-black font-display tracking-tight text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60 active:scale-[0.99]"
                data-testid="button-book-call"
                onClick={() => window.open("/contact", "_self")}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-primary to-violet-500" aria-hidden="true" />
                <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_62%)] opacity-70" aria-hidden="true" />
                <span className="absolute inset-0 rounded-full opacity-60 bg-[conic-gradient(from_90deg,rgba(255,0,255,0.0),rgba(255,0,255,0.32),rgba(255,255,255,0.0),rgba(139,92,246,0.26),rgba(255,0,255,0.0))] animate-[spin_4.5s_linear_infinite]" aria-hidden="true" />
                <span className="relative">Book a call</span>
              </button>

              <button
                type="button"
                className="group relative inline-flex h-14 items-center justify-center rounded-full px-8 text-lg font-black font-display tracking-tight text-black transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 active:scale-[0.99]"
                data-testid="button-pick-package"
                onClick={() => window.open("/pricing", "_self")}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300" aria-hidden="true" />
                <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),transparent_60%)] opacity-75" aria-hidden="true" />
                <span className="absolute inset-0 rounded-full opacity-65 bg-[conic-gradient(from_90deg,rgba(251,191,36,0.0),rgba(251,191,36,0.38),rgba(255,255,255,0.0),rgba(249,115,22,0.28),rgba(251,191,36,0.0))] animate-[spin_4.5s_linear_infinite]" aria-hidden="true" />
                <span className="relative">Pick your package</span>
              </button>
            </div>

            <a
              href="tel:15622846463"
              className="mx-auto lg:mx-0 inline-flex w-full max-w-[520px] items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-4 backdrop-blur-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
              data-testid="link-phone-number"
            >
              <span className="text-cyan-200 text-sm md:text-base font-bold" data-testid="text-phone-cta-label">Call or text</span>
              <span className="text-white text-xl md:text-3xl font-black font-display tracking-tight" data-testid="text-phone-cta-number">
                562 284 6463
              </span>
              <span className="text-white/60 text-sm md:text-base font-semibold" data-testid="text-phone-cta-anytime">anytime</span>
            </a>
          </div>
        </motion.div>

        {/* Visual Content - Big image and badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[600px] w-full"
        >
           <div className="absolute inset-0 flex items-center justify-center">
             <FloatingElement delay={0} duration={8} yOffset={20} className="relative z-10 flex items-center justify-center w-full h-full perspective-[1000px]">
               {/* Dark Background behind Galaxy - Made much more transparent */}
               <div className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] bg-black/30 rounded-full blur-[80px] z-0 pointer-events-none" />
               
               {/* Morphing Holographic Container */}
               <div className="relative w-[90%] max-w-[600px] aspect-square flex items-center justify-center" style={{ transformStyle: "preserve-3d" }}>
                 
                 <LiquidOrb />
                 
               </div>
             </FloatingElement>
           </div>

          {/* Orbiting Badges */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 z-20 pointer-events-none"
          >
            <FloatingElement delay={0} duration={6} yOffset={-15} xOffset={10} className="top-5 -left-16">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
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
                 <div className="relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
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
                 <div className="relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
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
                 <div className="relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
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
                 <div className="relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
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
                 <div className="relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
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
                 <div className="relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
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
                 <div className="relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
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
                 <div className="relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
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
                 <div className="relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
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

            {/* New Words */}
            <FloatingElement delay={0.8} duration={8} yOffset={25} xOffset={-25} className="bottom-[5%] right-[15%]">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-fuchsia-500/30 backdrop-blur-xl text-fuchsia-400 font-bold shadow-[0_0_30px_rgba(217,70,239,0.2)] text-lg flex items-center gap-3">
                      <div className="w-2 h-2 rounded-sm bg-fuchsia-400 animate-ping" />
                      Custom Software
                    </div>
                 </div>
               </motion.div>
            </FloatingElement>

            <FloatingElement delay={3.5} duration={9} yOffset={-30} xOffset={20} className="top-[45%] -right-16">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-amber-500/30 backdrop-blur-xl text-amber-400 font-bold shadow-[0_0_30px_rgba(245,158,11,0.2)] text-lg flex items-center gap-3">
                      <div className="flex gap-0.5">
                        <motion.div animate={{ height: ["4px", "12px", "4px"] }} transition={{ duration: 1, repeat: Infinity }} className="w-1 bg-amber-400 rounded-full" />
                        <motion.div animate={{ height: ["12px", "4px", "12px"] }} transition={{ duration: 1, repeat: Infinity }} className="w-1 bg-amber-400 rounded-full" />
                      </div>
                      Employee Tracking
                    </div>
                 </div>
               </motion.div>
            </FloatingElement>

            <FloatingElement delay={1.2} duration={7} yOffset={20} xOffset={-10} className="bottom-[35%] -left-32">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-green-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-lime-400/30 backdrop-blur-xl text-lime-400 font-bold shadow-[0_0_30px_rgba(163,230,53,0.2)] text-lg flex items-center gap-3">
                      <motion.div animate={{ rotate: 180 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-lime-400 border-t-transparent rounded-full" />
                      Reporting
                    </div>
                 </div>
               </motion.div>
            </FloatingElement>

            <FloatingElement delay={4.5} duration={10} yOffset={-20} xOffset={30} className="-top-12 left-[20%]">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-blue-400/30 backdrop-blur-xl text-blue-400 font-bold shadow-[0_0_30px_rgba(96,165,250,0.2)] text-lg flex items-center gap-3">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                      Communication
                    </div>
                 </div>
               </motion.div>
            </FloatingElement>

            <FloatingElement delay={2.8} duration={8.5} yOffset={25} xOffset={-15} className="top-[85%] left-[10%]">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-400 to-neutral-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-stone-400/30 backdrop-blur-xl text-stone-300 font-bold shadow-[0_0_30px_rgba(168,162,158,0.2)] text-lg flex items-center gap-3">
                      <div className="relative w-4 h-4 border-2 border-stone-400 rounded-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-stone-400 rounded-full" />
                      </div>
                      Compliance
                    </div>
                 </div>
               </motion.div>
            </FloatingElement>

            <FloatingElement delay={0.2} duration={6} yOffset={-10} xOffset={20} className="bottom-[45%] right-[8%]">
               <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="pointer-events-auto">
                 <div className="relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="px-8 py-4 rounded-full bg-black/80 border-2 border-emerald-400/30 backdrop-blur-xl text-emerald-400 font-bold shadow-[0_0_30px_rgba(52,211,153,0.2)] text-lg flex items-center gap-3">
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-0 h-0 border-l-[6px] border-l-emerald-400 border-y-[4px] border-y-transparent" />
                      Growth
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
