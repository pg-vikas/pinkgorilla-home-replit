import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductSplit } from "@/components/sections/ProductSplit";
import { IndustrySearchPreview } from "@/components/sections/IndustrySearchPreview";
import { AppsPreview } from "@/components/sections/AppsPreview";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProductSplit />
      <IndustrySearchPreview />
      <AppsPreview />
      <PricingPreview />
      <CaseStudiesPreview />
      
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="h-20 w-20 bg-white/10 rounded-full mx-auto mb-6 overflow-hidden">
            {/* Founder Avatar Placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-primary to-secondary opacity-50" />
          </div>
          <h3 className="text-2xl font-bold mb-4">"We don't do fluff."</h3>
          <p className="text-xl text-muted-foreground italic mb-8">
            "Most agencies want to sell you a pretty picture. We want to build you a machine. 
            Pink Gorilla exists because business owners deserve digital tools that actually work as hard as they do."
          </p>
          <div className="font-bold text-primary">— The Founder</div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
