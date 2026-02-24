import { useState } from "react";
import { motion } from "framer-motion";

import appsCrm from "@/assets/images/apps-crm.png";
import appsDocsign from "@/assets/images/apps-docsign.png";
import appsBroadcast from "@/assets/images/apps-broadcast.png";
import appsAnalytics from "@/assets/images/apps-analytics.png";

const APP_IMAGES: Record<string, string> = {
  crm: appsCrm,
  docsign: appsDocsign,
  broadcast: appsBroadcast,
  analytics: appsAnalytics,
};

export function GorillaApps() {
  const [active, setActive] = useState<string>("docsign");

  const cards = [
    {
      title: "Document signing",
      desc: "Fast approvals and clean audit trails",
      imageKey: "docsign",
      color: "border-l-primary",
    },
    {
      title: "Broadcasting tools",
      desc: "Campaigns, segments, and scheduled sends",
      imageKey: "broadcast",
      color: "border-l-secondary",
    },
    {
      title: "CRM and lead tracking",
      desc: "Pipelines, follow ups, and deal velocity",
      imageKey: "crm",
      color: "border-l-accent",
    },
    {
      title: "Analytics and growth tracking",
      desc: "Dashboards that keep you moving",
      imageKey: "analytics",
      color: "border-l-primary",
    },
    {
      title: "Integrated telephone system",
      desc: "Calls, routing, and recordings in one place",
      imageKey: "phone",
      color: "border-l-secondary",
    },
    {
      title: "Scheduled texting and emailing",
      desc: "Automated follow ups that run on schedule",
      imageKey: "scheduler",
      color: "border-l-accent",
    },
    {
      title: "Payments with Visa, Zelle, and Venmo",
      desc: "Unified checkout and clean reconciliation",
      imageKey: "payments",
      color: "border-l-primary",
    },
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
             Pink Gorilla works closely with you to understand your workflows and build custom SaaS products that truly fit how you run your business. We design, script, and ship software to your specifications so you can grow, scale, and stabilize with systems that work every day.
           </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Product Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative bg-[#0a0a0c]"
            data-testid="panel-apps-preview"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/20 blur-[80px] rounded-full" />
              <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary/20 blur-[90px] rounded-full" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
            </div>

            <div className="relative p-6 md:p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <div className="text-white/60 text-xs font-semibold uppercase tracking-[0.22em]" data-testid="text-apps-preview-kicker">
                  Example product screens
                </div>
                <div className="text-white text-2xl md:text-3xl font-black font-display" data-testid="text-apps-preview-title">
                  Custom SaaS built around your workflows
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
                {cards.map((card, i) => (
                  <button
                    key={card.imageKey}
                    type="button"
                    className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-semibold hover:bg-white/10 hover:text-white transition-all"
                    data-testid={`button-apps-preview-tab-${card.imageKey}`}
                    onClick={() => setActive(card.imageKey)}
                  >
                    {card.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative p-4 md:p-6">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40"
                data-testid="card-apps-preview-image"
              >
                <img
                  src={APP_IMAGES[active]}
                  alt=""
                  className="w-full h-auto block"
                  loading="lazy"
                  data-testid="img-apps-preview"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
             {cards.map((card, index) => {
               const isActive = active === card.imageKey;

               return (
                 <motion.button
                   key={card.title}
                   type="button"
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   whileHover={{ scale: 1.02 }}
                   onClick={() => setActive(card.imageKey)}
                   className={`group p-6 text-left bg-white/5 border border-white/10 rounded-2xl border-l-4 ${card.color} transition-all cursor-pointer backdrop-blur-md hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 ${
                     isActive ? "ring-1 ring-cyan-400/40 shadow-[0_0_30px_rgba(0,255,255,0.12)]" : ""
                   }`}
                   data-testid={`button-apps-card-${card.imageKey}`}
                 >
                   <div className="flex items-start justify-between gap-4">
                     <div className="space-y-1">
                       <h3 className="text-lg font-bold text-white group-hover:text-white" data-testid={`text-apps-card-title-${card.imageKey}`}>{card.title}</h3>
                       <p className="text-sm text-white/60 leading-relaxed" data-testid={`text-apps-card-desc-${card.imageKey}`}>{card.desc}</p>
                     </div>

                     <div
                       className={`mt-0.5 h-2.5 w-2.5 rounded-full ${
                         isActive ? "bg-cyan-400 shadow-[0_0_12px_rgba(0,255,255,0.55)]" : "bg-white/20"
                       }`}
                       data-testid={`status-apps-card-active-${card.imageKey}`}
                     />
                   </div>
                 </motion.button>
               );
             })}
          </div>

        </div>
      </div>
    </section>
  );
}
