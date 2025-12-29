import { Button } from "@/components/ui/button";
import { Check, Shield, Globe, Zap, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Core() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="py-20 text-center container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
          Gorilla <span className="text-primary">Core</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          The foundation of your digital existence. A high-performance website, managed hosting, and aggressive SEO strategy bundled into one service.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-8 bg-white text-black hover:bg-white/90">
            <Link href="/pricing">
              View Plans
            </Link>
          </Button>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-black/40 border border-white/5">
            <Globe className="h-10 w-10 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-4">High-Performance Web</h3>
            <p className="text-muted-foreground">
              Built on Next.js/React. No clunky Wordpress plugins. Blazing fast load times that Google loves.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-black/40 border border-white/5">
            <Shield className="h-10 w-10 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-4">Managed Security</h3>
            <p className="text-muted-foreground">
              Daily backups, SSL encryption, and 24/7 monitoring. We handle the technical headaches so you don't have to.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-black/40 border border-white/5">
            <Zap className="h-10 w-10 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-4">Aggressive SEO</h3>
            <p className="text-muted-foreground">
              Dominating local search results. We optimize your content, meta tags, and Google Business Profile continuously.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Core Wins</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 text-left font-bold text-lg">Feature</th>
                <th className="py-4 text-center font-bold text-lg text-primary">Gorilla Core</th>
                <th className="py-4 text-center font-bold text-lg text-muted-foreground">Typical Agency</th>
                <th className="py-4 text-center font-bold text-lg text-muted-foreground">DIY Builders</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Speed Score", "95-100", "50-70", "30-50"],
                ["Technology", "React & Next.js", "Wordpress", "Drag & Drop"],
                ["Security", "Enterprise Grade", "Vulnerable Plugins", "Basic"],
                ["SEO Updates", "Continuous", "One-time Setup", "None"],
                ["Support", "Dedicated Team", "Hourly Billing", "Forums"],
              ].map(([feature, core, agency, diy], i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02]">
                  <td className="py-4 px-4 font-medium">{feature}</td>
                  <td className="py-4 px-4 text-center font-bold text-white">{core}</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">{agency}</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">{diy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
