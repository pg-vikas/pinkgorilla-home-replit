import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-background z-0" />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 tracking-tight">
          Ready to upgrade your<br />business infrastructure?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Join the businesses that have stopped renting their future and started building it with Pink Gorilla.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg bg-primary text-black hover:bg-primary/90 shadow-[0_0_30px_rgba(255,0,255,0.4)]">
            <Link href="/contact">
              Book a Strategy Call
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-white/20 hover:bg-white/10 backdrop-blur-sm">
            <Link href="/pricing">
              View Pricing
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
