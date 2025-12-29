import { useState } from "react";
import { industries } from "@/data/industries";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function IndustrySearchPreview() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIndustries = industries.filter((ind) =>
    ind.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-24 bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Built for Your Industry</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We've pre-built bundles and workflows for specific trades. See what we recommend for your business.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search your industry (e.g., Landscaping)..."
              className="pl-12 h-14 rounded-full bg-white/5 border-white/10 focus:border-primary/50 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredIndustries.slice(0, 6).map((industry) => (
              <motion.div
                key={industry.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative p-6 rounded-2xl bg-card border border-white/5 hover:border-accent/50 transition-all hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{industry.name}</h3>
                    <p className="text-xs text-accent font-medium">{industry.estimatedMonthlyRange} / mo</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Package className="h-4 w-4" />
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Recommended Core</span>
                    <p className="font-medium">{industry.recommendedCoreTier}</p>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Top Apps</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {industry.recommendedBundles.slice(0, 2).map((bundle) => (
                        <span key={bundle} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">
                          {bundle}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-white/5 hover:bg-accent hover:text-black border border-white/10 hover:border-transparent transition-all">
                  View Bundle
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredIndustries.length === 0 && (
          <div className="text-center text-muted-foreground py-12">
            No specific industry found. <a href="#" className="text-primary underline">Contact us</a> for a custom build.
          </div>
        )}
        
        <div className="text-center mt-12">
           <Button variant="link" className="text-muted-foreground hover:text-white">
             View All Industries <ArrowRight className="ml-2 h-4 w-4" />
           </Button>
        </div>
      </div>
    </section>
  );
}
