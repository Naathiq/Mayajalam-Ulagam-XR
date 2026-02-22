import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const engagementData = [
  { name: 'Mon', value: 45 },
  { name: 'Tue', value: 52 },
  { name: 'Wed', value: 48 },
  { name: 'Thu', value: 61 },
  { name: 'Fri', value: 55 },
  { name: 'Sat', value: 67 },
  { name: 'Sun', value: 72 },
];

const completionData = [
  { name: 'Week 1', visual: 40, hearing: 35 },
  { name: 'Week 2', visual: 55, hearing: 48 },
  { name: 'Week 3', visual: 70, hearing: 62 },
  { name: 'Week 4', visual: 85, hearing: 78 },
];

export default function Analytics({ onNext }: SceneProps) {
  return (
    <div className="min-h-screen p-8 bg-deep-space overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold neon-text">Impact Analytics</h2>
            <p className="text-white/60">Real-time student engagement and learning metrics</p>
          </div>
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-neon-cyan text-deep-space font-bold rounded-full hover:scale-105 transition-all"
          >
            Restart Experience
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Active Students', value: '1,284', icon: Users, color: 'text-neon-cyan' },
            { label: 'Avg. Engagement', value: '84%', icon: TrendingUp, color: 'text-emerald-500' },
            { label: 'Learning Hours', value: '12.4k', icon: Clock, color: 'text-neon-magenta' },
            { label: 'Certifications', value: '452', icon: Award, color: 'text-amber-400' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 glass-panel rounded-2xl border-white/5"
            >
              <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <p className="text-sm text-white/40 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 glass-panel rounded-3xl h-[400px]"
          >
            <h3 className="text-lg font-bold mb-8">Weekly Engagement Trend</h3>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={engagementData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f2ff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00f2ff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#050b18', border: '1px solid #ffffff20', borderRadius: '12px' }}
                  itemStyle={{ color: '#00f2ff' }}
                />
                <Area type="monotone" dataKey="value" stroke="#00f2ff" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="p-8 glass-panel rounded-3xl h-[400px]"
          >
            <h3 className="text-lg font-bold mb-8">Completion Rates by Mode</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={completionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#050b18', border: '1px solid #ffffff20', borderRadius: '12px' }}
                />
                <Bar dataKey="visual" fill="#00f2ff" radius={[4, 4, 0, 0]} />
                <Bar dataKey="hearing" fill="#ff00e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-8 glass-panel rounded-3xl border-neon-cyan/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-full border border-emerald-500/20 uppercase tracking-widest">Niral Thiruvizha 3.0: Social Impact</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Accessibility Score: 98/100</h3>
              <p className="text-white/60 leading-relaxed">
                Mayajalam Olagam XR is currently outperforming traditional digital learning tools by 42% in retention rates for visually and hearing-impaired students. Our AI-driven multi-modal approach ensures no student is left behind, directly addressing the UN Sustainable Development Goal 4: Quality Education.
              </p>
            </div>
            <div className="w-32 h-32 rounded-full border-8 border-neon-cyan flex items-center justify-center shadow-[0_0_20px_rgba(0,242,255,0.3)]">
              <span className="text-3xl font-bold">98%</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
