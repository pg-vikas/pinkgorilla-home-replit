import { industries } from "@/data/industries";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Search, Package } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Industries() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIndustries = industries.filter((ind) =>
    ind.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20 text-center container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
          Industries We <span className="text-accent">Power</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Tailored digital infrastructure for service businesses. Find your trade below.
        </p>

        <div className="max-w-md mx-auto relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search industries..."
              className="pl-12 h-14 rounded-full bg-white/5 border-white/10 focus:border-accent/50 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIndustries.map((ind) => (
            <div key={ind.id} className="group p-8 rounded-3xl bg-card border border-white/5 hover:border-accent/30 transition-all hover:bg-card/80">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{ind.name}</h3>
                <Package className="h-6 w-6 text-accent opacity-50" />
              </div>
              
              <div className="space-y-6 mb-8">
                <div>
                   <h4 className="text-xs font-bold uppercase text-muted-foreground mb-2">Recommended Core</h4>
                   <div className="font-medium text-white px-3 py-1 rounded bg-white/5 inline-block">{ind.recommendedCoreTier}</div>
                </div>
                <div>
                   <h4 className="text-xs font-bold uppercase text-muted-foreground mb-2">Essential Apps</h4>
                   <div className="flex flex-wrap gap-2">
                     {ind.recommendedBundles.map(b => (
                       <span key={b} className="text-xs px-2 py-1 rounded bg-accent/10 text-accent border border-accent/20">{b}</span>
                     ))}
                   </div>
                </div>
                <div>
                   <h4 className="text-xs font-bold uppercase text-muted-foreground mb-2">Typical Outcomes</h4>
                   <ul className="list-disc list-inside text-sm text-muted-foreground">
                     {ind.typicalOutcomes.map(o => <li key={o}>{o}</li>)}
                   </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                 <div className="text-lg font-bold text-accent">{ind.estimatedMonthlyRange}</div>
                 <Button variant="ghost" className="hover:bg-accent hover:text-black">
                   View Bundle <ArrowRight className="ml-2 h-4 w-4" />
                 </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
