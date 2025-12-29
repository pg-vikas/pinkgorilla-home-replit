import { caseStudies } from "@/data/caseStudies";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function CaseStudiesPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Real Results</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't just build websites. We build growth engines. Here's the proof.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden border border-white/5 bg-card/40 hover:bg-card/60 transition-all"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-white/5 to-white/10 w-full group-hover:scale-105 transition-transform duration-700" />
              
              <div className="p-8 relative">
                 <div className="absolute -top-6 right-8 bg-accent text-black font-bold px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                   <TrendingUp className="h-4 w-4" />
                   {study.metrics[0].value}
                 </div>

                 <div className="text-xs text-primary font-medium mb-2 uppercase tracking-wider">{study.industry}</div>
                 <h3 className="text-2xl font-bold mb-1">{study.client}</h3>
                 <p className="text-muted-foreground mb-6">{study.title}</p>

                 <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-white/5">
                   {study.metrics.map((metric) => (
                     <div key={metric.label}>
                       <div className="text-lg font-bold text-white">{metric.value}</div>
                       <div className="text-xs text-muted-foreground">{metric.label}</div>
                     </div>
                   ))}
                 </div>

                 <Button asChild variant="link" className="p-0 h-auto text-white hover:text-accent">
                   <Link href="/case-studies">
                     Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                   </Link>
                 </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
