import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/toaster";
import { ModalLeadForm } from "@/components/ui/ModalLeadForm";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.1], [50, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20 relative">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <Toaster />

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
