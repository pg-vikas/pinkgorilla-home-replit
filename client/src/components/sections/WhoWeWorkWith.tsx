import { motion } from "framer-motion";

export function WhoWeWorkWith() {
  const tiles = [
    "Want control",
    "Value long term systems",
    "Care about execution",
    "Serious about scaling"
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="who-we-work-with">
      {/* Marquee Text Strip */}
      <div className="w-full bg-primary/10 border-y border-primary/20 py-4 mb-20 overflow-hidden relative">
        <motion.div
          className="flex whitespace-nowrap gap-8"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {Array(10).fill("WORK WITH REAL PEOPLE, REAL RESULTS").map((text, i) => (
            <span key={i} className="text-2xl font-display font-bold text-primary tracking-widest uppercase">
              {text} •
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((tile, index) => (
            <motion.div
              key={tile}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="aspect-square bg-card/50 border border-white/10 rounded-3xl p-8 flex items-center justify-center text-center glass-panel group hover:border-primary/50 transition-all"
            >
              <h3 className="text-2xl lg:text-3xl font-bold font-display group-hover:text-primary transition-colors">
                {tile}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24 max-w-2xl mx-auto"
        >
           <h3 className="text-3xl md:text-5xl font-bold font-display text-white">
             If you are building something meaningful, we would love to talk.
           </h3>
        </motion.div>
      </div>
    </section>
  );
}
