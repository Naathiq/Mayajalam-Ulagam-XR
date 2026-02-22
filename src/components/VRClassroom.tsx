import { motion } from 'motion/react';
import { SceneProps } from '../types';
import { Box, User, Compass, Layers } from 'lucide-react';

export default function VRClassroom({ onNext }: SceneProps) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center">
      {/* Immersive Grid Background */}
      <div className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, #00f2ff 1px, transparent 1px), linear-gradient(to bottom, #00f2ff 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          transform: 'perspective(1000px) rotateX(60deg) translateY(200px) scale(2)',
        }} 
      />

      {/* Floating 3D Elements Simulation */}
      <motion.div 
        className="relative z-10 w-full max-w-6xl h-[600px] glass-panel rounded-[40px] overflow-hidden border-neon-cyan/30"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* VR HUD Overlay */}
        <div className="absolute inset-0 pointer-events-none border-[20px] border-white/5 rounded-[40px]" />
        
        <div className="absolute top-10 left-10 flex items-center gap-4">
          <div className="p-3 glass-panel rounded-full text-neon-cyan neon-border">
            <Compass className="animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-1.5 py-0.5 bg-neon-cyan/10 text-neon-cyan text-[8px] font-bold rounded border border-neon-cyan/20 uppercase tracking-widest">Niral Thiruvizha 3.0</span>
            </div>
            <p className="text-xs text-white/40 font-mono">VR_MODE_ACTIVE</p>
            <p className="text-sm font-bold">Classroom 402 - Immersive</p>
          </div>
        </div>

        <div className="absolute top-10 right-10 flex gap-4">
          <div className="px-4 py-2 glass-panel rounded-full text-xs flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Latency: 12ms
          </div>
        </div>

        {/* Central 3D Object Simulation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ 
              rotateY: 360,
              rotateX: [0, 10, -10, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
              rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative"
          >
            {/* Multi-layered Geometry */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-neon-cyan/30 rounded-full animate-pulse" />
              <div className="absolute inset-4 border border-neon-cyan/20 rounded-full rotate-45" />
              <div className="absolute inset-8 border border-neon-cyan/10 rounded-full -rotate-45" />
              
              <div className="w-48 h-48 border-2 border-neon-cyan/50 rounded-2xl flex items-center justify-center bg-neon-cyan/5 backdrop-blur-sm shadow-[0_0_50px_rgba(0,242,255,0.15)]">
                <Box size={80} className="text-neon-cyan opacity-80" />
                
                {/* Floating Data Labels */}
                <motion.div 
                  className="absolute -top-12 -right-24 glass-panel p-3 rounded-lg border-neon-cyan/50 backdrop-blur-md"
                  animate={{ x: [0, 15, 0], y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <p className="text-[10px] text-neon-cyan font-bold font-mono">GEOMETRY: COMPLEX</p>
                  <p className="text-[10px] text-white/60 font-mono">VERTICES: 12,402</p>
                  <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-neon-cyan"
                      animate={{ width: ["0%", "100%", "0%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-12 -left-24 glass-panel p-3 rounded-lg border-neon-magenta/50 backdrop-blur-md"
                  animate={{ x: [0, -15, 0], y: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <p className="text-[10px] text-neon-magenta font-bold font-mono">AI_ANALYSIS: ACTIVE</p>
                  <p className="text-[10px] text-white/60 font-mono">ACCURACY: 99.8%</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sign Avatar in Corner */}
        <div className="absolute bottom-10 right-10 w-64 h-80 glass-panel rounded-3xl border-neon-magenta/30 flex flex-col items-center justify-center">
          <div className="w-24 h-24 bg-neon-magenta/10 rounded-full flex items-center justify-center mb-4 border border-neon-magenta/30">
            <User size={48} className="text-neon-magenta" />
          </div>
          <p className="text-xs text-white/40 uppercase tracking-widest mb-2">AI Interpreter</p>
          <div className="flex gap-2">
            <motion.div animate={{ height: [4, 12, 4] }} className="w-1 bg-neon-magenta rounded-full" />
            <motion.div animate={{ height: [8, 16, 8] }} className="w-1 bg-neon-magenta rounded-full" />
            <motion.div animate={{ height: [4, 10, 4] }} className="w-1 bg-neon-magenta rounded-full" />
          </div>
        </div>

        {/* VR Controls Footer */}
        <div className="absolute bottom-10 left-10 flex gap-4">
          <button className="p-4 glass-panel rounded-2xl hover:bg-neon-cyan/20 transition-all">
            <Layers className="text-neon-cyan" />
          </button>
          <button 
            onClick={onNext}
            className="px-8 py-4 bg-neon-cyan text-deep-space font-bold rounded-2xl hover:scale-105 transition-all"
          >
            Exit VR Scene
          </button>
        </div>
      </motion.div>

      {/* Particle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan/30 rounded-full"
            initial={{ x: Math.random() * 100 + "%", y: "100%" }}
            animate={{ y: "-10%" }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 5 }}
          />
        ))}
      </div>
    </div>
  );
}
