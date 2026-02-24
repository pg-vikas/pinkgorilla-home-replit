import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";

type ProjectType = "Basic Website" | "Five Page WordPress" | "Custom Website" | "Enterprise Platform";

const AGENCY_DATA: Record<ProjectType, { build: number; maintenance: number; discovery: number }> = {
  "Basic Website": { build: 6500, maintenance: 250, discovery: 500 },
  "Five Page WordPress": { build: 8500, maintenance: 350, discovery: 750 },
  "Custom Website": { build: 20000, maintenance: 800, discovery: 2000 },
  "Enterprise Platform": { build: 120000, maintenance: 2500, discovery: 8000 },
};

const PROJECT_TYPES: ProjectType[] = [
  "Basic Website",
  "Five Page WordPress",
  "Custom Website",
  "Enterprise Platform"
];

export function ComparisonTool() {
  const [projectType, setProjectType] = useState<ProjectType>("Basic Website");
  const [months, setMonths] = useState<number>(24);
  const [pgMonthlyFee, setPgMonthlyFee] = useState<number>(299);
  const [pgSetupFee, setPgSetupFee] = useState<number>(0);
  const [includeMaintenance, setIncludeMaintenance] = useState<boolean>(true);

  // Calculations
  const data = AGENCY_DATA[projectType];
  
  const agencyTotal = useMemo(() => {
    const maintenanceTotal = includeMaintenance ? data.maintenance * months : 0;
    return data.discovery + data.build + maintenanceTotal;
  }, [data, months, includeMaintenance]);

  const pgTotal = useMemo(() => {
    return pgSetupFee + (pgMonthlyFee * months);
  }, [pgSetupFee, pgMonthlyFee, months]);

  const savings = agencyTotal - pgTotal;
  const savingsPercent = agencyTotal > 0 ? Math.round((savings / agencyTotal) * 100) : 0;

  // Chart Data
  const chartData = useMemo(() => {
    const result = [];
    // Calculate data points every 3 months or so to keep chart clean, plus month 1 and final month
    const step = Math.max(1, Math.floor(months / 12));
    
    for (let m = 1; m <= months; m += step) {
      const agencyCost = data.discovery + data.build + (includeMaintenance ? data.maintenance * m : 0);
      const pgCost = pgSetupFee + (pgMonthlyFee * m);
      result.push({
        month: `Month ${m}`,
        Agency: agencyCost,
        "Pink Gorilla": pgCost
      });
    }
    
    // Ensure the last month is exactly included
    if (months > 1 && (months - 1) % step !== 0) {
      result.push({
        month: `Month ${months}`,
        Agency: agencyTotal,
        "Pink Gorilla": pgTotal
      });
    }
    
    return result;
  }, [months, data, includeMaintenance, pgSetupFee, pgMonthlyFee, agencyTotal, pgTotal]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-primary/20 pointer-events-none" />
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white tracking-tight">
            Traditional agencies charge upfront fees and then charge again for maintenance.
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
            Pink Gorilla stays with you on a low monthly model so your digital systems keep improving without surprise costs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Controls Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-8 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl"
          >
            {/* Project Type Selector */}
            <div className="space-y-4">
              <Label className="text-white text-lg">Project Type</Label>
              <div className="flex flex-col gap-2">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => setProjectType(type)}
                    className={`px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      projectType === type 
                        ? "bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,255,255,0.4)]" 
                        : "bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/10 w-full" />

            {/* Timeline Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label className="text-white text-lg">Timeline</Label>
                <span className="text-cyan-400 font-bold">{months} Months</span>
              </div>
              <Slider
                value={[months]}
                onValueChange={(val) => setMonths(val[0])}
                max={60}
                min={1}
                step={1}
                className="py-4"
              />
            </div>

            <div className="h-px bg-white/10 w-full" />

            {/* Pink Gorilla Inputs */}
            <div className="space-y-4">
              <Label className="text-white text-lg">Pink Gorilla Terms</Label>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-white/60 text-xs uppercase tracking-wider">Monthly Fee</Label>
                  <Input 
                    type="number" 
                    value={pgMonthlyFee}
                    onChange={(e) => setPgMonthlyFee(Number(e.target.value))}
                    className="bg-black/50 border-white/20 text-white font-mono text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/60 text-xs uppercase tracking-wider">Setup Fee</Label>
                  <Input 
                    type="number" 
                    value={pgSetupFee}
                    onChange={(e) => setPgSetupFee(Number(e.target.value))}
                    className="bg-black/50 border-white/20 text-white font-mono text-lg"
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10 w-full" />

            {/* Agency Maintenance Toggle */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-white text-base">Agency Maintenance</Label>
                <p className="text-sm text-white/50">Include monthly retainer</p>
              </div>
              <Switch 
                checked={includeMaintenance}
                onCheckedChange={setIncludeMaintenance}
                className="data-[state=checked]:bg-primary"
              />
            </div>
            
          </motion.div>

          {/* Results Panel */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Totals Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h4 className="text-white/60 text-sm font-bold uppercase tracking-widest mb-2 relative z-10">Traditional Agency</h4>
                <div className="text-4xl md:text-5xl font-mono font-bold text-white mb-6 relative z-10">
                  {formatCurrency(agencyTotal)}
                </div>
                
                <div className="space-y-2 text-sm text-white/70 relative z-10">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Discovery</span>
                    <span>{formatCurrency(data.discovery)}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Build</span>
                    <span>{formatCurrency(data.build)}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Maintenance ({months} mo)</span>
                    <span>{formatCurrency(includeMaintenance ? data.maintenance * months : 0)}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-cyan-950/40 border border-cyan-500/50 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[50px] rounded-full" />
                
                <h4 className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-2 relative z-10">Pink Gorilla</h4>
                <div className="text-4xl md:text-5xl font-mono font-bold text-cyan-400 mb-6 relative z-10 drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                  {formatCurrency(pgTotal)}
                </div>
                
                <div className="space-y-2 text-sm text-cyan-100/70 relative z-10">
                  <div className="flex justify-between border-b border-cyan-500/20 pb-2">
                    <span>Setup</span>
                    <span>{formatCurrency(pgSetupFee)}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Monthly ({months} mo)</span>
                    <span>{formatCurrency(pgMonthlyFee * months)}</span>
                  </div>
                </div>

                {savings > 0 && (
                  <div className="mt-8 pt-4 border-t border-cyan-500/30">
                    <div className="text-green-400 font-bold flex items-baseline gap-2">
                      <span className="text-lg">Save</span>
                      <span className="text-2xl">{formatCurrency(savings)}</span>
                      <span className="text-sm bg-green-500/20 px-2 py-0.5 rounded ml-auto">
                        {savingsPercent}% less
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Chart */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md flex-1 min-h-[350px]"
            >
              <h4 className="text-white font-bold mb-6">Cumulative Cost Over Time</h4>
              <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                    <XAxis 
                      dataKey="month" 
                      stroke="rgba(255,255,255,0.5)" 
                      fontSize={12}
                      tickMargin={10}
                    />
                    <YAxis 
                      stroke="rgba(255,255,255,0.5)" 
                      fontSize={12}
                      tickFormatter={(val) => `$${val / 1000}k`}
                      width={60}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      itemStyle={{ fontWeight: 'bold' }}
                      formatter={(value: number) => formatCurrency(value)}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    <Line 
                      type="monotone" 
                      dataKey="Agency" 
                      stroke="#888888" 
                      strokeWidth={3} 
                      dot={false}
                      activeDot={{ r: 6, fill: '#888888' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Pink Gorilla" 
                      stroke="#00ffff" 
                      strokeWidth={4}
                      dot={false}
                      activeDot={{ r: 8, fill: '#00ffff', stroke: '#000', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-center text-xs text-white/40 mt-4">
                These are typical market estimates and vary by scope.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
