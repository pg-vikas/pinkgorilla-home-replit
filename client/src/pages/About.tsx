import { FinalCTA } from "@/components/sections/FinalCTA";
import { Users, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GeometricShape } from "@/components/motion/GeometricShape";

const team = [
  {
    name: "Chayan Alavi",
    role: "Founder, CEO",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/06/chayan.jpg"
  },
  {
    name: "Vinayak Sharma",
    role: "Co-Founder, COO",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/07/photo-Vinayak.png"
  },
  {
    name: "Vikas Sharma",
    role: "Technical Director",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/09/Vikas_sharma.png"
  },
  {
    name: "Milhan Farooque",
    role: "Design Director",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/07/photo-Milhan.png"
  },
  {
    name: "Angelic Cuevas",
    role: "Media Director",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/07/photo-angelic.png"
  },
  {
    name: "Jitander Mandhotra",
    role: "Software Developer",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/11/photo-jatinder.png.png"
  },
  {
    name: "Neeraj Kumar",
    role: "Frontend Developer",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/11/photo-neeraj.png.png"
  },
  {
    name: "Razel Haze Bernate",
    role: "Growth Advisor",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/11/photo-angelic.png.png"
  },
  {
    name: "Abriel Lobo",
    role: "Growth Advisor",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/11/photo-abrial.png.png"
  },
  {
    name: "Danica Rose Mantes",
    role: "Growth Advisor",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2026/01/Gemini_Generated_Image_wmeixvwmeixvwmei-1-1.png"
  },
  {
    name: "Maria Christina",
    role: "Growth Advisor",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2026/01/Screenshot-2026-01-29-041411-1-1.png"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-20 overflow-hidden relative">
      <GeometricShape color="primary" size="600px" delay={0} />
      <GeometricShape color="secondary" size="500px" delay={2} />
      
      {/* Hero Section */}
      <section className="py-20 text-center container mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight">
          Your All-In-One <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Growth Buddy</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Pink Gorilla is your all-in-one growth buddy that helps you from establishing your business online to maintaining it and helping your business grow. We are the most creative people out there, and providing you unique and helpful support. We are based in California, USA.
        </p>
      </section>

      {/* Founders Notes */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* CEO Note */}
            <Card className="bg-card/40 backdrop-blur-md border-white/10 hover:border-primary/50 transition-colors duration-500 overflow-hidden group">
              <CardContent className="p-10 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 group-hover:bg-primary/20 transition-colors duration-500" />
                <h3 className="text-2xl font-bold font-display mb-6 text-primary">Founder's Note</h3>
                <blockquote className="text-xl italic mb-6 text-foreground/90 leading-relaxed">
                  "We Don't Blend in. We Build what breaks through."
                </blockquote>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  At our core, Pink Gorilla exists to help bold brands stand out, scale with purpose, and connect deeply with their audiences. Whether we're crafting your identity, building powerful tools, or shaping your story, our mission is always the same: to fuel your growth with creativity, clarity, and conviction. We don't take your trust lightly–and we're just getting started. Let's keep building something extraordinary together.
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://www.pinkgorilla.agency/wp-content/uploads/2025/06/chayan.jpg" 
                    alt="Chayan Alavi" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/50"
                  />
                  <div>
                    <p className="font-bold text-lg">Chayan Alavi</p>
                    <p className="text-primary/80">Founder & CEO</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* COO Note */}
            <Card className="bg-card/40 backdrop-blur-md border-white/10 hover:border-secondary/50 transition-colors duration-500 overflow-hidden group">
              <CardContent className="p-10 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -z-10 group-hover:bg-secondary/20 transition-colors duration-500" />
                <h3 className="text-2xl font-bold font-display mb-6 text-secondary">Co-Founder's Note</h3>
                <blockquote className="text-xl italic mb-6 text-foreground/90 leading-relaxed">
                  "Every brand has a heartbeat, our job is to make the world hear it."
                </blockquote>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  As Co-Founder of Pink Gorilla, I've always believed that building digital experiences is not just about code or design it's about creating tools and stories that give people and businesses real momentum. When we started this agency, the vision was simple: help entrepreneurs and organizations move faster, think bigger, and scale with confidence.
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://www.pinkgorilla.agency/wp-content/uploads/2025/07/photo-Vinayak.png" 
                    alt="Vinayak Sharma" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-secondary/50"
                  />
                  <div>
                    <p className="font-bold text-lg">Vinayak Sharma</p>
                    <p className="text-secondary/80">Co-Founder & COO</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-card/20 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Meet the <span className="text-primary">Team</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The creative minds and technical wizards building extraordinary digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <div 
                key={i} 
                className="group relative rounded-2xl overflow-hidden bg-card border border-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold font-display text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4">Why Choose Us?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
           <div className="text-center bg-card/30 p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
             <div className="h-16 w-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
               <Target className="h-8 w-8" />
             </div>
             <h3 className="text-xl font-bold mb-4">Unforgettable Branding</h3>
             <p className="text-muted-foreground">We craft bold, strategic identities that cut through the noise and stick.</p>
           </div>
           <div className="text-center bg-card/30 p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
             <div className="h-16 w-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
               <Zap className="h-8 w-8" />
             </div>
             <h3 className="text-xl font-bold mb-4">All-in-One Solutions</h3>
             <p className="text-muted-foreground">From creative to tech, we integrate tools that help you scale, sell, and simplify.</p>
           </div>
           <div className="text-center bg-card/30 p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
             <div className="h-16 w-16 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
               <Users className="h-8 w-8" />
             </div>
             <h3 className="text-xl font-bold mb-4">Authentic Growth</h3>
             <p className="text-muted-foreground">We don't just chase trends, we build brands with soul, story, and staying power.</p>
           </div>
           <div className="text-center bg-card/30 p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
             <div className="h-16 w-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
               <Target className="h-8 w-8" />
             </div>
             <h3 className="text-xl font-bold mb-4">Obsessed With Success</h3>
             <p className="text-muted-foreground">We treat your business like our own, showing up with passion, precision, and purpose.</p>
           </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
