import { coreTiers, launchPackages } from "@/data/pricing";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20 text-center container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
          Simple <span className="text-primary">Pricing</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Choose the right foundation for your stage of growth. Scale up whenever you need.
        </p>
      </section>

      {/* Core Tiers */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreTiers.map((tier) => (
            <div 
              key={tier.id} 
              className={`p-6 rounded-2xl bg-card border flex flex-col ${tier.isPopular ? 'border-primary/50 shadow-[0_0_20px_rgba(255,0,255,0.15)]' : 'border-white/5'}`}
            >
              {tier.isPopular && (
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Most Popular</div>
              )}
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold mb-4">{tier.price}</div>
              <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">{tier.description}</p>
              
              <Button className={`w-full mb-8 ${tier.isPopular ? 'bg-primary text-black hover:bg-primary/90' : 'bg-white/10 hover:bg-white/20'}`}>
                {tier.price === "Custom" ? "Contact Sales" : "Choose Plan"}
              </Button>

              <div className="space-y-3 flex-grow">
                {tier.features.map(f => (
                  <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Launch Packages */}
      <section className="py-20 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">One-Time Launch Implementation</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {launchPackages.map((pkg) => (
              <div key={pkg.name} className="p-8 rounded-2xl bg-black/40 border border-white/5 text-center">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-accent mb-4">{pkg.price}</div>
                <p className="text-muted-foreground text-sm">{pkg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-white/10">
            <AccordionTrigger>Do I have to buy Core to get Apps?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              No! You can purchase Gorilla Apps standalone. However, you get the best performance and unified support when you run your entire infrastructure on Pink Gorilla.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-white/10">
            <AccordionTrigger>What is included in the Launch fee?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              The launch fee covers the initial build, content migration, SEO setup, and domain configuration. It's a one-time cost to get your new digital infrastructure live.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-white/10">
            <AccordionTrigger>Can I upgrade my plan later?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Absolutely. Most clients start on Growth and move to Pro as their lead volume increases. It's a simple switch.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <FinalCTA />
    </div>
  );
}
