import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  ArrowRight, Code, Smartphone, Globe, Cloud, Play, Database, CreditCard, LayoutTemplate,
  Webhook, Phone, MessageSquare, PenTool, Mail, Calendar, BarChart, Repeat, Server, FolderSync, MessageCircle
} from "lucide-react";
import { useRef } from "react";

import appSample1 from "@/assets/images/app-sample-1.png";
import saasSample1 from "@/assets/images/saas-sample-1.png";
import aiVideoSample from "@/assets/images/ai-video-sample.png";

const capabilities = [
  { name: "Websites", icon: Globe, desc: "High-performance digital experiences built for conversion and scale." },
  { name: "Apps", icon: Smartphone, desc: "Native and cross-platform mobile applications that users love." },
  { name: "Custom Software", icon: Code, desc: "Bespoke internal tools and platforms tailored to your operations." },
  { name: "SaaS Products", icon: Cloud, desc: "Scalable software-as-a-service architectures from ground up." },
  { name: "AI Video Generation", icon: Play, desc: "Cutting-edge AI integrations to automate media and content." },
  { name: "CRM Platforms", icon: Database, desc: "Tailored customer relationship management systems for your workflows." },
  { name: "Client Portals", icon: LayoutTemplate, desc: "Dedicated secure environments for your customers to interact." },
  { name: "Payment & Billing", icon: CreditCard, desc: "Seamless financial flows and subscription management engines." },
  { name: "API Integrations", icon: Webhook, desc: "Connecting your disparate tools into a single, cohesive ecosystem." },
  { name: "Phone & Texting Systems", icon: Phone, desc: "Automated call routing and two-way SMS architectures." },
  { name: "Communication Tech", icon: MessageSquare, desc: "Omnichannel messaging solutions for internal and external chat." },
  { name: "Signature Technology", icon: PenTool, desc: "Legally binding e-signature flows built directly into your apps." },
  { name: "Email Automation Sequences", icon: Mail, desc: "Complex lifecycle marketing and transactional email systems." },
  { name: "Appointment Booking Tools", icon: Calendar, desc: "Custom scheduling engines with integrated availability." },
  { name: "Reporting & Analytics", icon: BarChart, desc: "Real-time data visualization and KPI tracking dashboards." },
  { name: "Subscription Systems", icon: Repeat, desc: "Recurring revenue models with automated dunning management." },
  { name: "Hosting Configuration", icon: Server, desc: "Enterprise-grade infrastructure deployment and management." },
  { name: "File Sharing Systems", icon: FolderSync, desc: "Secure document storage, transfer, and permission management." },
  { name: "Twilio Integrations", icon: MessageCircle, desc: "Advanced voice, video, and messaging API implementations." }
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

          {/* Right Column */}
          <div className="xl:w-2/3 w-full flex flex-col gap-12">
            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[350px] gap-6">
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

            {/* Bottom Right CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 text-center md:text-right flex flex-col items-center md:items-end justify-center py-20 px-8 md:px-12 rounded-3xl bg-black border border-white/10 relative overflow-hidden group min-h-[450px]"
            >
              {/* Dynamic looping glowing gradient */}
              <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen bg-[linear-gradient(45deg,transparent,rgba(0,255,255,0.15),rgba(255,0,255,0.15),transparent)] bg-[size:200%_200%] animate-[gradient_8s_linear_infinite]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary),transparent_60%)] opacity-10 group-hover:opacity-30 transition-opacity duration-700 z-0" />
              
              {/* Massive animated background marks */}
              <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
                {[...Array(40)].map((_, i) => {
                  const type = i % 3 === 0 ? 'face' : i % 3 === 1 ? 'foot' : 'hand';
                  const size = 60 + Math.random() * 80;
                  const left = Math.random() * 100;
                  const top = Math.random() * 100;
                  const delay = Math.random() * 5;
                  const duration = 4 + Math.random() * 4;
                  const rotation = Math.random() * 360;
                  const color = ['text-primary', 'text-cyan-500', 'text-white/40'][i % 3];

                  return (
                    <motion.div 
                      key={i}
                      className={`absolute ${color}`}
                      style={{ 
                        left: `${left}%`, 
                        top: `${top}%`,
                        width: size,
                        height: size,
                        rotate: rotation
                      }}
                      animate={{ 
                        opacity: [0, 0.4, 0],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{ 
                        duration, 
                        repeat: Infinity,
                        delay,
                        ease: "easeInOut"
                      }}
                    >
                      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        {type === 'hand' && (
                          <>
                            <path d="M45,20 C42,10 35,5 25,10 C15,15 15,25 20,35 C23,40 30,45 35,45 C45,45 48,30 45,20 Z" />
                            <path d="M60,15 C55,5 45,0 35,5 C25,10 25,20 30,30 C35,35 45,40 55,35 C65,30 65,20 60,15 Z" />
                            <path d="M75,25 C70,15 60,10 50,15 C40,20 40,30 45,40 C50,45 60,50 70,45 C80,40 80,30 75,25 Z" />
                            <path d="M85,45 C80,35 70,30 60,35 C50,40 50,50 55,60 C60,65 70,70 80,65 C90,60 90,50 85,45 Z" />
                            <path d="M40,55 C30,50 20,55 15,65 C10,75 15,90 30,95 C45,100 60,95 70,85 C80,75 75,60 65,55 C55,50 45,60 40,55 Z" />
                          </>
                        )}
                        {type === 'foot' && (
                          <>
                            <path d="M40 10 C30 10 25 20 30 30 C35 40 45 40 45 30 C45 20 45 10 40 10 Z" />
                            <path d="M60 10 C60 10 55 20 55 30 C55 40 65 40 70 30 C75 20 70 10 60 10 Z" />
                            <path d="M20 35 C10 35 10 45 15 50 C20 55 30 50 25 45 C20 40 20 35 20 35 Z" />
                            <path d="M80 35 C80 35 80 40 75 45 C70 50 80 55 85 50 C90 45 90 35 80 35 Z" />
                            <path d="M50 50 C30 50 20 70 30 85 C40 100 60 100 70 85 C80 70 70 50 50 50 Z" />
                          </>
                        )}
                        {type === 'face' && (
                          <path d="M50 10 C30 10 15 25 15 45 C15 50 12 55 10 60 C8 65 15 75 25 80 C25 85 30 90 40 90 L60 90 C70 90 75 85 75 80 C85 75 92 65 90 60 C88 55 85 50 85 45 C85 25 70 10 50 10 Z M35 45 C35 40 40 35 45 40 C45 45 40 50 35 45 Z M65 45 C65 50 60 45 55 40 C60 35 65 40 65 45 Z M50 75 C40 75 35 70 35 65 L65 65 C65 70 60 75 50 75 Z" />
                        )}
                      </svg>
                    </motion.div>
                  );
                })}
              </div>

              <h3 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-8 relative z-10 text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                Want to see <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary">more of our Work?</span>
              </h3>
              <Link href="/contact">
                <a className="inline-block px-12 py-6 rounded-full bg-white text-black font-bold text-2xl transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] hover:scale-105 relative z-10">
                  Contact us today!
                </a>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}