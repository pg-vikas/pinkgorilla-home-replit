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
      <AboutPreview />
      <WhatWeDo />

      <section className="py-24 md:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute -bottom-24 left-1/3 w-[700px] h-[450px] bg-cyan-500/15 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-white/70 text-xs md:text-sm font-semibold uppercase tracking-[0.28em] mb-5" data-testid="text-bottom-cta-kicker">
                WE ARE WAITING TO MEET YOU
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white" data-testid="text-bottom-cta-title">
                Contact us
              </h2>
              <p className="mt-4 text-lg md:text-xl text-white/70 max-w-3xl mx-auto" data-testid="text-bottom-cta-subtitle">
                Tell us what you’re building. We’ll reply fast with next steps and a clear plan.
              </p>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] items-start">
              <form
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10 backdrop-blur-md shadow-[0_0_80px_rgba(0,0,0,0.35)]"
                data-testid="form-home-contact"
                onSubmit={(e) => {
                  e.preventDefault();
                  // mock submit
                  alert("Thanks — we’ll reach out shortly.");
                }}
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-semibold" htmlFor="home-name" data-testid="label-home-name">Name</label>
                    <input
                      id="home-name"
                      name="name"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-white/30 outline-none focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/20"
                      placeholder="Your name"
                      data-testid="input-home-name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-semibold" htmlFor="home-email" data-testid="label-home-email">Email</label>
                    <input
                      id="home-email"
                      name="email"
                      type="email"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-white/30 outline-none focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/20"
                      placeholder="you@company.com"
                      data-testid="input-home-email"
                      required
                    />
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-semibold" htmlFor="home-phone" data-testid="label-home-phone">Phone</label>
                    <input
                      id="home-phone"
                      name="phone"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white placeholder:text-white/30 outline-none focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/20"
                      placeholder="(562) 284-6463"
                      data-testid="input-home-phone"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white/80 text-sm font-semibold" htmlFor="home-service" data-testid="label-home-service">What do you need?</label>
                    <select
                      id="home-service"
                      name="service"
                      className="h-12 w-full rounded-2xl border border-white/10 bg-black/30 px-4 text-white outline-none focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/20"
                      data-testid="select-home-service"
                      defaultValue="website"
                    >
                      <option value="website">Website</option>
                      <option value="automation">Automation</option>
                      <option value="crm">CRM / Pipeline</option>
                      <option value="apps">Gorilla Apps</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <label className="text-white/80 text-sm font-semibold" htmlFor="home-message" data-testid="label-home-message">Message</label>
                  <textarea
                    id="home-message"
                    name="message"
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/20"
                    placeholder="Tell us what you’re trying to accomplish…"
                    data-testid="textarea-home-message"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-300 via-emerald-200 to-lime-200 text-black font-black font-display tracking-tight text-lg shadow-[0_0_70px_rgba(16,185,129,0.18)]"
                  data-testid="button-home-submit"
                >
                  Send message
                </button>

                <p className="mt-4 text-center text-white/50 text-sm" data-testid="text-home-form-disclaimer">
                  No spam. Just a quick reply with next steps.
                </p>
              </form>

              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md" data-testid="card-home-contact-direct">
                  <div className="text-white/70 text-xs font-semibold uppercase tracking-[0.28em]" data-testid="text-home-direct-kicker">Direct</div>
                  <div className="mt-3 text-2xl font-black font-display text-white" data-testid="text-home-direct-title">Call or text</div>
                  <a
                    href="tel:15622846463"
                    className="mt-4 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-emerald-200 font-black tracking-tight"
                    data-testid="link-home-direct-phone"
                  >
                    <span className="text-white/80" data-testid="text-home-direct-phone-label">562 284 6463</span>
                    <span className="text-white/50" data-testid="text-home-direct-phone-anytime">anytime</span>
                  </a>

                  <a
                    href="https://pinkgorilla.online"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 block text-white/70 hover:text-white transition-colors"
                    data-testid="link-home-direct-chat"
                  >
                    Chat: pinkgorilla.online
                  </a>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md" data-testid="card-home-contact-what-happens">
                  <div className="text-white/70 text-xs font-semibold uppercase tracking-[0.28em]" data-testid="text-home-steps-kicker">What happens next</div>
                  <ul className="mt-4 space-y-3 text-white/70" data-testid="list-home-steps">
                    <li data-testid="item-home-step-1">1) We read your message (same day)</li>
                    <li data-testid="item-home-step-2">2) We ask 2–3 quick questions</li>
                    <li data-testid="item-home-step-3">3) You get a clear plan + timeline</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
