import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModalLeadForm } from "@/components/ui/ModalLeadForm";

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-primary/10 border-t border-primary/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary),transparent_80%)] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl mx-auto flex flex-col items-center justify-center"
        >
          <h2 className="text-5xl md:text-8xl font-bold font-display leading-none mb-8 tracking-tighter text-white">
            Strong brands are not loud. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
              They are structured.
            </span>
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
      </div>
    </section>
  );
}
