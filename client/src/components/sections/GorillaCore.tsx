import { motion } from "framer-motion";
import { GeometricShape } from "@/components/motion/GeometricShape";
import { FloatingElement } from "@/components/motion/FloatingElement";

export function GorillaCore() {
  const cards = [
    { title: "Custom websites", desc: "High performance rendering and headless architecture." },
    { title: "Brand identity systems", desc: "Visual languages built to scale across all mediums." },
    { title: "Domains and hosting", desc: "Enterprise grade infrastructure that never goes down." },
    { title: "Email infrastructure", desc: "Secure, deliverable, and branded communication." },
    { title: "Security and optimization", desc: "Continuous monitoring and speed enhancements." }
  ];

  return (
    <section className="py-24 bg-card/20 border-y border-white/5 relative overflow-hidden" id="core">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] flex items-center justify-center"
          >
             <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
             <div className="relative w-full h-full flex items-center justify-center">
                {/* Abstract structural shapes representing "Core" */}
                <FloatingElement delay={0} duration={8} yOffset={20} rotate={10} className="absolute z-10">
                  <GeometricShape type="hexagon" color="primary" variant="glass" size="w-64 h-64" />
                </FloatingElement>
                <FloatingElement delay={1} duration={10} yOffset={-30} rotate={-15} className="absolute z-20">
                  <GeometricShape type="square" color="white" variant="outline" size="w-48 h-48" />
                </FloatingElement>
                <FloatingElement delay={2} duration={6} scale={1.1} className="absolute z-30">
                  <GeometricShape type="circle" color="secondary" variant="solid" size="w-32 h-32" />
                </FloatingElement>
             </div>
          </motion.div>

          {/* Right: Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-8">Gorilla Core</h2>
            </motion.div>

            <div className="space-y-4">
              {cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="p-6 rounded-2xl bg-black/40 border border-white/5 hover:border-primary/50 transition-all cursor-default glass-panel group"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-muted-foreground">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
