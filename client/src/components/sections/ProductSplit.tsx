import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check, Layers, Zap, ArrowRight } from "lucide-react";
import { FloatingElement } from "@/components/motion/FloatingElement";
import { GeometricShape } from "@/components/motion/GeometricShape";

export function ProductSplit() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Motion */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         <FloatingElement delay={0} duration={15} yOffset={100} xOffset={-50} className="top-20 -left-20 opacity-20">
            <GeometricShape type="circle" color="primary" variant="glow" size="w-[500px] h-[500px]" />
         </FloatingElement>
         <FloatingElement delay={5} duration={18} yOffset={-80} xOffset={50} className="bottom-20 -right-20 opacity-20">
            <GeometricShape type="circle" color="secondary" variant="glow" size="w-[500px] h-[500px]" />
         </FloatingElement>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <FloatingElement delay={0} duration={4} yOffset={5} className="relative inline-block">
             <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">The Dual System</h2>
          </FloatingElement>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete digital dominance requires two layers. A rock-solid foundation to capture attention, and an operations layer to deliver on promises.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Card A: Core */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl p-8 lg:p-12 border border-white/5 bg-card/40 hover:bg-card/60 transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-32 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />
            
            {/* Floating Badge */}
            <FloatingElement delay={1} duration={4} yOffset={-5} className="absolute top-8 right-8 z-20">
               <GeometricShape type="circle" color="primary" variant="outline" size="w-8 h-8" className="opacity-50" />
            </FloatingElement>

            <div className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20">
                <Layers className="h-7 w-7" />
              </div>
              
              <h3 className="text-3xl font-bold mb-2">Gorilla Core</h3>
              <p className="text-lg text-primary mb-6">Your Online Foundation</p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                The public face of your brand. High-performance website, SEO dominance, and security that never sleeps.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Custom Next.js Website",
                  "Local SEO Domination",
                  "Reputation Management",
                  "Managed Hosting & Updates",
                  "Daily Security Backups"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant="outline" className="w-full h-12 rounded-xl border-primary/30 hover:bg-primary/10 hover:text-primary transition-all group-hover:border-primary/50">
                <Link href="/core">
                  Explore Core <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Card B: Apps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl p-8 lg:p-12 border border-white/5 bg-card/40 hover:bg-card/60 transition-all overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-32 bg-secondary/10 blur-[100px] rounded-full group-hover:bg-secondary/20 transition-all duration-700" />
            
             {/* Floating Badge */}
            <FloatingElement delay={2} duration={5} yOffset={5} className="absolute top-8 right-8 z-20">
               <GeometricShape type="hexagon" color="secondary" variant="outline" size="w-10 h-10" className="opacity-50" />
            </FloatingElement>

            <div className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 border border-secondary/20">
                <Zap className="h-7 w-7" />
              </div>
              
              <h3 className="text-3xl font-bold mb-2">Gorilla Apps</h3>
              <p className="text-lg text-secondary mb-6">Your Operations Layer</p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                The engine room of your business. CRM, dispatching, payments, and automation that saves 20+ hours a week.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Sales & CRM Pipelines",
                  "Dispatch & Routing",
                  "Invoicing & Payments",
                  "Marketing Automation",
                  "Review Generation"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-secondary" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant="outline" className="w-full h-12 rounded-xl border-secondary/30 hover:bg-secondary/10 hover:text-secondary transition-all group-hover:border-secondary/50">
                <Link href="/apps">
                  View Apps <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
