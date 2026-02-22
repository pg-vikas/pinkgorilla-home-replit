import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    title: "Mojo's Drive Thru Coffee",
    category: "Brand Identity, website, CRM, App",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/09/30684.png",
    link: "https://www.pinkgorilla.agency/portfolio/mojos-drive-though-coffee/"
  },
  {
    title: "Website for Dr. Emily",
    category: "Brand Identity, website, CRM, App",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/09/30684-2.png",
    link: "https://www.pinkgorilla.agency/portfolio/dr-emily/"
  },
  {
    title: "Recloud",
    category: "Brand Identity, website, CRM, App",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/09/30684-3.png",
    link: "https://www.pinkgorilla.agency/portfolio/recloud/"
  },
  {
    title: "Seed Cabinet",
    category: "Brand Identity, website, CRM, App",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/09/30684-9.png",
    link: "https://www.pinkgorilla.agency/portfolio/seed-cabinet/"
  },
  {
    title: "Tourvia",
    category: "Brand Identity, website, CRM, App",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/09/30684-10.png",
    link: "https://www.pinkgorilla.agency/portfolio/tourvia/"
  }
];

export function Portfolio() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="portfolio">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display"
          >
            The Projects We've Done
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Each case study reflects our commitment to solving real business challenges with creativity, technology, and strategy. Take a closer look at how we help brands grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black/50">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 space-y-2 relative bg-black/60 backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-sm text-cyan-500/70 uppercase tracking-wider font-semibold">{item.category}</p>
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white mt-4 group/link"
                >
                  View Case Study 
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}