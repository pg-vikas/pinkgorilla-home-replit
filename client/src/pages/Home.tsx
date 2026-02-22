import { HeroSection } from "@/components/sections/HeroSection";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { UnifiedPlatform } from "@/components/sections/UnifiedPlatform";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { Process } from "@/components/sections/Process";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { GorillaLabs } from "@/components/sections/GorillaLabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <HeroSection />
      <UnifiedPlatform />
      <FinalCTA />
      <WhoWeWorkWith />
      <Process />
      <GorillaLabs />
      <AboutPreview />
      <WhatWeDo />
    </div>
  );
}
