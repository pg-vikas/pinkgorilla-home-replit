import { motion } from "framer-motion";

export function GorillaApps() {
  const cards = [
    { title: "CRM and lead tracking", color: "border-l-primary" },
    { title: "Broadcast and communication tools", color: "border-l-secondary" },
    { title: "Analytics dashboards", color: "border-l-accent" },
    { title: "Payment integrations", color: "border-l-primary" },
    { title: "Client portals", color: "border-l-secondary" }
  ];

  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden" id="apps">
      {/* Background dark grid or subtle pattern could go here */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-bold font-display mb-6 text-white"
           >
             Gorilla Apps
           </motion.h2>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-xl md:text-2xl text-white/90 leading-relaxed font-light"
           >
             These are our custom SaaS Products to help customize your backend of your business - we script and build this software to the specifications of your business and help you grow, scale and stabilize. Soon you will find it impossible how you used to run your business without your own custom software.
           </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Animated Dashboard Preview using divs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 bg-[#0a0a0c] rounded-3xl border border-white/10 p-6 overflow-hidden shadow-2xl relative"
          >
             {/* Dashboard Header */}
             <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="h-6 w-32 bg-white/5 rounded-md" />
             </div>

             {/* Dashboard Content */}
             <div className="grid grid-cols-3 gap-4 mb-6">
                {[1,2,3].map(i => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 flex flex-col gap-2">
                    <div className="h-4 w-16 bg-white/10 rounded" />
                    <div className="h-8 w-24 bg-white/20 rounded" />
                  </div>
                ))}
             </div>

             {/* Chart Area */}
             <div className="bg-white/5 rounded-xl p-6 h-64 flex items-end gap-2">
                {[40, 70, 45, 90, 65, 80, 50, 100, 75].map((h, i) => (
                  <motion.div 
                    key={i}
                    className="flex-1 bg-gradient-to-t from-secondary/50 to-primary/50 rounded-t-sm"
                    initial={{ height: "0%" }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                ))}
             </div>
          </motion.div>

          {/* Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
             {cards.map((card, index) => (
               <motion.div
                 key={card.title}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 whileHover={{ scale: 1.03 }}
                 className={`p-6 bg-white/5 border border-white/5 rounded-2xl border-l-4 ${card.color} hover:bg-white/10 transition-all cursor-default backdrop-blur-md`}
               >
                 <h3 className="text-lg font-bold text-white">{card.title}</h3>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
