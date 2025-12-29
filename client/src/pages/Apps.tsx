import { apps } from "@/data/apps";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Check, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Apps() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = Array.from(new Set(apps.map(a => a.category)));
  
  const filteredApps = activeCategory 
    ? apps.filter(a => a.category === activeCategory)
    : apps;

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20 text-center container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
          Gorilla <span className="text-secondary">Apps</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          The operations layer for your business. CRM, dispatch, payments, and automation tools that integrate seamlessly.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="container mx-auto px-4 mb-12 overflow-x-auto">
        <div className="flex gap-2 min-w-max pb-4">
          <Button 
            variant={activeCategory === null ? "secondary" : "outline"}
            onClick={() => setActiveCategory(null)}
            className="rounded-full"
          >
            All Apps
          </Button>
          {categories.map(cat => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "secondary" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* App Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApps.map((app) => (
            <motion.div 
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={app.id} 
              className="group p-8 rounded-3xl bg-card border border-white/5 hover:border-secondary/30 transition-all hover:bg-card/80 flex flex-col"
            >
               <div className="mb-6 flex items-start justify-between">
                 <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                   <Zap className="h-6 w-6" />
                 </div>
                 <div className="text-lg font-bold">${app.startingPriceMonthly}<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
               </div>

               <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">{app.name}</h3>
               <p className="text-muted-foreground mb-6 flex-grow">{app.description}</p>

               <ul className="space-y-2 mb-8">
                 {app.keyFeatures.slice(0, 3).map(f => (
                   <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                     <Check className="h-4 w-4 text-secondary" /> {f}
                   </li>
                 ))}
               </ul>

               <Button className="w-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-black border border-secondary/20 hover:border-transparent">
                 View Details
               </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stack Builder (Simple Estimator) */}
      <section className="py-24 bg-black/40 border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Build Your Stack</h2>
          <p className="text-muted-foreground mb-8">Select apps to see an estimated monthly cost.</p>
          <div className="p-8 border border-white/10 rounded-2xl bg-card/50 max-w-2xl mx-auto">
             <div className="text-4xl font-mono font-bold text-secondary mb-2">$0<span className="text-lg text-muted-foreground">/mo</span></div>
             <p className="text-xs text-muted-foreground">Estimate only. Bundle discounts apply.</p>
             <div className="mt-8">
               <Button size="lg" className="rounded-full px-8">Get a Custom Quote</Button>
             </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
