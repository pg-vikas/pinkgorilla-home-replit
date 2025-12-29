import { FinalCTA } from "@/components/sections/FinalCTA";
import { Users, Target, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20 text-center container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
          The <span className="text-primary">Mission</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          We exist to kill the brochure website. We build digital infrastructure that actually generates revenue.
        </p>
      </section>

      <section className="py-20 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
           <div className="text-center">
             <div className="h-16 w-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
               <Target className="h-8 w-8" />
             </div>
             <h3 className="text-xl font-bold mb-4">Outcome Obsessed</h3>
             <p className="text-muted-foreground">We don't care about vanity metrics. We care about leads, bookings, and revenue. If it doesn't grow your business, we don't build it.</p>
           </div>
           <div className="text-center">
             <div className="h-16 w-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
               <Zap className="h-8 w-8" />
             </div>
             <h3 className="text-xl font-bold mb-4">Speed is Life</h3>
             <p className="text-muted-foreground">Slow websites kill conversions. Our stack is engineered for sub-second load times and instant interactions.</p>
           </div>
           <div className="text-center">
             <div className="h-16 w-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
               <Users className="h-8 w-8" />
             </div>
             <h3 className="text-xl font-bold mb-4">Partners, Not Vendors</h3>
             <p className="text-muted-foreground">We don't just hand you a website and disappear. We manage your infrastructure so you can manage your business.</p>
           </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card border border-white/5 p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-6">Our Ecosystem</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
               <h3 className="text-xl font-bold text-primary">Gorilla Core</h3>
               <p className="text-muted-foreground">The frontend foundation. Your public face to the world.</p>
            </div>
            <div className="space-y-4">
               <h3 className="text-xl font-bold text-secondary">Gorilla Apps</h3>
               <p className="text-muted-foreground">The backend operations. The tools that run the business.</p>
            </div>
            <div className="space-y-4">
               <h3 className="text-xl font-bold text-accent">Gorilla Hub</h3>
               <p className="text-muted-foreground">The central command center for clients to manage everything.</p>
            </div>
            <div className="space-y-4">
               <h3 className="text-xl font-bold text-white">Gorilla Launchpad</h3>
               <p className="text-muted-foreground">Our rapid deployment system that gets you live in days, not months.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
