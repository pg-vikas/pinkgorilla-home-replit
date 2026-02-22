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
  }
];

export function AboutPreview() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-card/20 border-y border-white/5">
      <GeometricShape color="primary" size="400px" delay={0} />
      <GeometricShape color="secondary" size="300px" delay={2} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-8">
              About <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Pink Gorilla</span>
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              <p className="font-medium text-foreground text-lg md:text-xl">
                Most agencies focus on appearance.<br/>
                We focus on structure.
              </p>
              
              <p>
                Pink Gorilla was created for founders who are serious about what they are building. Not temporary campaigns. Not surface level solutions. Real companies with long horizons.
              </p>
              
              <p>
                We believe technology should feel controlled, aligned, and intentional. Your brand, your systems, your customer experience, your internal operations. All connected. All working together. Nothing scattered.
              </p>
              
              <p className="font-medium text-foreground text-lg md:text-xl">
                We do not operate outside your business.<br/>
                We operate alongside it.
              </p>
              
              <p>
                Our role is simple. Bring clarity where there is chaos. Structure where there is fragmentation. Strength where there are weak points.
              </p>
              
              <p className="font-medium text-foreground text-lg md:text-xl">
                Pink Gorilla is not a vendor.<br/>
                It is a long term digital partner.
              </p>
              
              <p>
                We think like owners.<br/>
                We move with precision.<br/>
                We build foundations strong enough to grow on.
              </p>
              
              <p className="font-bold text-primary text-lg md:text-xl">
                If you are building something meaningful, you will feel the difference.
              </p>
            </div>

            <a href="/about" className="inline-flex items-center text-primary font-bold hover:text-white transition-colors gap-2 group">
              Meet the full team
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {team.map((member, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-white/10"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-sm font-bold font-display text-white mb-1">{member.name}</h3>
                  <p className="text-xs text-primary font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
