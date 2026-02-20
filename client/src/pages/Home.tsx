import { HeroSection } from "@/components/sections/HeroSection";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { GorillaCore } from "@/components/sections/GorillaCore";
import { GorillaApps } from "@/components/sections/GorillaApps";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <HeroSection />
      <WhatWeDo />
      <GorillaCore />
      <GorillaApps />
      <WhoWeWorkWith />
      <Process />
      <FinalCTA />
    </div>
  );
}
