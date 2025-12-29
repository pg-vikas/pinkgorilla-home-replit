import { apps } from "@/data/apps";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Grid3X3 } from "lucide-react";
import { motion } from "framer-motion";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { GeometricShape } from "@/components/motion/GeometricShape";

export function AppsPreview() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Motion */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <FloatingElement delay={1} duration={12} yOffset={20} rotate={-10} className="top-20 left-[40%] opacity-10">
            <GeometricShape type="pill" color="secondary" variant="glass" size="w-32 h-12" />
         </FloatingElement>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Gorilla Apps Catalog</h2>
            <p className="text-muted-foreground">
              Powerful, modular software to run every part of your operation. Use them standalone or bundled with Core.
            </p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex">
             <Link href="/apps">
               View All Apps <Grid3X3 className="ml-2 h-4 w-4" />
             </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.slice(0, 6).map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-white/5 hover:border-secondary/30 transition-all hover:bg-card/80 z-10"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-medium px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20">
                  {app.category}
                </span>
                {app.bundleEligible && (
                  <span className="text-[10px] text-muted-foreground bg-white/5 px-2 py-1 rounded">Bundle Ready</span>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{app.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                {app.oneLiner}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-sm font-bold">${app.startingPriceMonthly}<span className="text-muted-foreground font-normal">/mo</span></span>
                <Button size="sm" variant="ghost" className="hover:text-secondary hover:bg-secondary/10 p-0 h-auto font-medium">
                  Details <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="outline" className="w-full">
            <Link href="/apps">
               View All Apps <Grid3X3 className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
