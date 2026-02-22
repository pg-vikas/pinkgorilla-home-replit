import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Globe, Cloud, Play } from "lucide-react";
import { useRef } from "react";

import appSample1 from "@/assets/images/app-sample-1.png";
import saasSample1 from "@/assets/images/saas-sample-1.png";
import aiVideoSample from "@/assets/images/ai-video-sample.png";

const capabilities = [
  { name: "Websites", icon: Globe, desc: "High-performance digital experiences built for conversion and scale." },
  { name: "Apps", icon: Smartphone, desc: "Native and cross-platform mobile applications that users love." },
  { name: "Custom Software", icon: Code, desc: "Bespoke internal tools and platforms tailored to your operations." },
  { name: "SaaS Products", icon: Cloud, desc: "Scalable software-as-a-service architectures from ground up." },
  { name: "AI Video Generation", icon: Play, desc: "Cutting-edge AI integrations to automate media and content." }
];

const portfolioItems = [
  {
    title: "Mojo's Drive Thru Coffee",
    category: "Brand Identity, Website, CRM, App",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/09/30684.png",
    link: "https://www.pinkgorilla.agency/portfolio/mojos-drive-though-coffee/",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Enterprise SaaS Dashboard",
    category: "SaaS Products, Custom Software",
    image: saasSample1,
    link: "#",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Recloud",
    category: "Brand Identity, Website, CRM",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/09/30684-3.png",
    link: "https://www.pinkgorilla.agency/portfolio/recloud/",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Global FinTech App",
    category: "Apps, Custom Software",
    image: appSample1,
    link: "#",
    span: "md:col-span-2 md:row-span-1"
  },
  {
    title: "Seed Cabinet",
    category: "Brand Identity, Website, App",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/09/30684-9.png",
    link: "https://www.pinkgorilla.agency/portfolio/seed-cabinet/",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    title: "AI Video Generator",
    category: "AI Video Generation, SaaS",
    image: aiVideoSample,
    link: "#",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Website for Dr. Emily",
    category: "Brand Identity, Website",
    image: "https://www.pinkgorilla.agency/wp-content/uploads/2025/09/30684-2.png",
    link: "https://www.pinkgorilla.agency/portfolio/dr-emily/",
    span: "md:col-span-2 md:row-span-1"
  }
];

export function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="portfolio">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,0,255,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-start">
          
          {/* Left Column - Sticky */}
          <div className="xl:w-1/3 xl:sticky xl:top-32 space-y-8 z-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl xl:text-5xl 2xl:text-6xl font-bold font-display leading-tight"
            >
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary">Build</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              From compelling websites to complex enterprise software, we engineer digital solutions that scale.
            </motion.p>
            
            <div className="space-y-4 pt-4">
              {capabilities.map((cap, index) => (
                <motion.div 
                  key={cap.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex gap-4 items-start p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-black/60 transition-all duration-300 group"
                >
                  <div className="mt-1 bg-black/50 p-3 rounded-xl border border-white/10 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all">
                    <cap.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{cap.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Bento Grid */}
          <div className="xl:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 auto-rows-[350px] gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden bg-black/40 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 ${item.span}`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-black/50 border border-white/10 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-4 backdrop-blur-md group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-colors">
                    {item.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h3>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white mt-2 group/link opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                  >
                    View Project
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}