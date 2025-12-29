import { useState } from "react";
import { coreTiers, launchPackages } from "@/data/pricing";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function PricingPreview() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-24 bg-black/40 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            No hidden fees. No long-term contracts. Just results.
          </p>

          <div className="flex items-center justify-center gap-4">
             <span className={cn("text-sm", !annual && "text-white font-medium")}>Monthly</span>
             <Switch checked={annual} onCheckedChange={setAnnual} />
             <span className={cn("text-sm", annual && "text-white font-medium")}>
               Annual <span className="text-xs text-primary font-bold ml-1">(Save 20%)</span>
             </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreTiers.map((tier) => (
            <motion.div
              key={tier.id}
              whileHover={{ y: -5 }}
              className={cn(
                "relative flex flex-col p-6 rounded-2xl bg-card border transition-all",
                tier.isPopular ? "border-primary/50 shadow-[0_0_30px_rgba(255,0,255,0.1)]" : "border-white/5 hover:border-white/10"
              )}
            >
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-3 w-3 fill-black" /> Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tight">
                    {annual && tier.price.includes("/mo") ? 
                      // Simple fake calc for demo
                       tier.price.replace("99", "79") 
                      : tier.price}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2 min-h-[40px]">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className={cn("w-full", tier.isPopular ? "bg-primary hover:bg-primary/90 text-black" : "bg-white/10 hover:bg-white/20")}>
                {tier.price === "Custom" ? "Contact Us" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>
        
        {/* Launch Packages */}
        <div className="mt-16 p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
          <h3 className="text-xl font-bold mb-6 text-center">One-Time Launch & Implementation</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {launchPackages.map((pkg) => (
              <div key={pkg.name} className="flex justify-between items-center p-4 rounded-lg bg-black/20 border border-white/5">
                <div>
                  <h4 className="font-bold">{pkg.name}</h4>
                  <p className="text-xs text-muted-foreground">{pkg.description}</p>
                </div>
                <div className="text-lg font-mono font-bold text-accent">{pkg.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
