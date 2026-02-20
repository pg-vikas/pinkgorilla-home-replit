import { motion } from "framer-motion";

export function Process() {
  const steps = [
    { num: "01", title: "Alignment First" },
    { num: "02", title: "Architecture Before Aesthetics" },
    { num: "03", title: "Execution With Precision" },
    { num: "04", title: "Scale Without Chaos" }
  ];

  return (
    <section className="py-24 bg-card/20 border-y border-white/5 relative overflow-hidden" id="process">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-bold font-display"
          >
            The Process
          </motion.h2>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full overflow-hidden">
             <motion.div 
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
             />
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Node */}
                <div className="w-16 h-16 rounded-full bg-background border-4 border-primary shadow-[0_0_20px_rgba(255,0,255,0.3)] flex items-center justify-center text-xl font-bold mb-6 relative">
                   <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-50" />
                   {step.num}
                </div>
                
                {/* Content */}
                <div className="bg-card/80 border border-white/10 p-6 rounded-2xl backdrop-blur-md w-full glass-panel h-full flex items-center justify-center">
                   <h3 className="font-bold text-lg leading-tight text-white">{step.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
