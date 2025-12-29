import { caseStudies } from "@/data/caseStudies";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, TrendingUp } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20 text-center container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
          Case <span className="text-accent">Studies</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          See how we've transformed businesses across different industries. Real data, real growth.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="space-y-24">
          {caseStudies.map((study, i) => (
            <div key={study.id} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Side */}
              <div className="w-full lg:w-1/2 h-[400px] rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/5 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                 {/* Placeholder for actual case study screenshot */}
                 <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-display text-4xl opacity-10 rotate-12">
                   {study.client}
                 </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                 <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                   {study.industry}
                 </div>
                 <h2 className="text-4xl font-bold">{study.title}</h2>
                 <h3 className="text-xl text-muted-foreground">Client: <span className="text-white">{study.client}</span></h3>
                 
                 <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/10">
                    {study.metrics.map(m => (
                      <div key={m.label}>
                        <div className="text-3xl font-bold text-white mb-1">{m.value}</div>
                        <div className="text-sm text-muted-foreground">{m.label}</div>
                      </div>
                    ))}
                 </div>

                 <div className="space-y-4">
                   <div>
                     <h4 className="font-bold mb-2 text-destructive/80">The Problem</h4>
                     <p className="text-muted-foreground text-sm">{study.before}</p>
                   </div>
                   <div>
                     <h4 className="font-bold mb-2 text-accent">The Solution</h4>
                     <p className="text-muted-foreground text-sm">{study.after}</p>
                   </div>
                 </div>

                 <Button variant="outline" className="mt-4">Read Full Story <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
