import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModalLeadForm } from "@/components/ui/ModalLeadForm";

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-background border-t border-white/10">
      {/* Animated Background Gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary),transparent_60%)] pointer-events-none blur-[100px]" 
      />
      <motion.div 
        animate={{ 
          rotate: [0, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(0,255,255,0.15)_360deg)] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          rotate: [360, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-[conic-gradient(from_180deg,transparent_0_300deg,rgba(255,0,255,0.15)_360deg)] pointer-events-none" 
      />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl mx-auto flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full flex flex-col items-center"
          >
            <h2 className="text-5xl md:text-8xl font-bold font-display leading-none mb-8 tracking-tighter text-white">
              Successful brands are not accidents. <br />
              <motion.span 
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary bg-[length:200%_auto] inline-block mt-4"
              >
                They are structured.
              </motion.span>
            </h2>
            
            <p className="text-2xl text-muted-foreground mb-12 font-medium">
              Pink Gorilla builds the structure.
            </p>
            
            <ModalLeadForm>
              <Button size="lg" className="rounded-full px-12 text-xl h-16 bg-white text-black hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all">
                Book a Strategy Call
              </Button>
            </ModalLeadForm>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
