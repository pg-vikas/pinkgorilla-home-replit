import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/toaster";
import { ModalLeadForm } from "@/components/ui/ModalLeadForm";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Mouse } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.1], [50, 0]);
  
  // Smooth out the scroll progress for the top bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Fade out the scroll indicator as user scrolls down
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20 relative">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-3 z-[100] bg-gradient-to-r from-primary via-cyan-400 to-primary origin-left shadow-[0_0_25px_rgba(255,0,255,1)]"
        style={{ scaleX }}
      />

      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <Toaster />

      {/* Global "Scroll Down" Indicator */}
      <motion.div 
        style={{ opacity: scrollIndicatorOpacity }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1 backdrop-blur-sm bg-black/20">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0, 1]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(255,0,255,0.8)]"
          />
        </div>
      </motion.div>

      {/* Sticky Bottom Right CTA */}
      <motion.div 
        style={{ opacity, y }}
        className="fixed bottom-8 right-8 z-50 pointer-events-none"
      >
        <div className="pointer-events-auto">
          <ModalLeadForm>
            <Button size="lg" className="rounded-full shadow-[0_10px_40px_rgba(255,0,255,0.4)] hover:shadow-[0_10px_50px_rgba(255,0,255,0.6)] hover:scale-105 transition-all font-bold text-lg px-8 h-14">
              Start a Build
            </Button>
          </ModalLeadForm>
        </div>
      </motion.div>
    </div>
  );
}
