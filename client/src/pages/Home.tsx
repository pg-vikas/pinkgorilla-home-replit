import { HeroSection } from "@/components/sections/HeroSection";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { UnifiedPlatform } from "@/components/sections/UnifiedPlatform";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { GorillaLabs } from "@/components/sections/GorillaLabs";
import { GorillaApps } from "@/components/sections/GorillaApps";
import { Portfolio } from "@/components/sections/Portfolio";
import { ComparisonTool } from "@/components/sections/ComparisonTool";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <HeroSection />
      <ComparisonTool />
      <FinalCTA />
      <UnifiedPlatform />
      <Portfolio />
      <WhoWeWorkWith />
      <GorillaLabs />
      <GorillaApps />
      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute -bottom-24 left-1/3 w-[700px] h-[450px] bg-cyan-500/15 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="text-white/70 text-xs md:text-sm font-semibold uppercase tracking-[0.28em] mb-5" data-testid="text-bottom-cta-kicker">
              WE ARE WAITING TO MEET YOU
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white" data-testid="text-bottom-cta-title">
              Contact us form
            </h2>

            <div className="mt-10">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center w-full rounded-[2.25rem] bg-white text-black font-black font-display text-2xl md:text-3xl h-20 md:h-24 px-10 shadow-[0_0_70px_rgba(255,255,255,0.18)] hover:shadow-[0_0_90px_rgba(0,255,255,0.25)] transition-all hover:scale-[1.01]"
                data-testid="button-bottom-contact"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>
      <AboutPreview />
      <WhatWeDo />
    </div>
  );
}
