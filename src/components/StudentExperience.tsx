import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Ear, Play, Volume2, Maximize2, MessageSquare, User, Sparkles, Hand } from 'lucide-react';
import { SceneProps } from '../types';

const GESTURES = [
  { id: 'hello', label: 'Hello', tamil: 'வணக்கம்', color: 'bg-blue-500' },
  { id: 'thankyou', label: 'Thank You', tamil: 'நன்றி', color: 'bg-green-500' },
  { id: 'question', label: 'Question', tamil: 'கேள்வி', color: 'bg-yellow-500' },
  { id: 'explain', label: 'Explain', tamil: 'விளக்கம்', color: 'bg-purple-500' },
  { id: 'correct', label: 'Correct', tamil: 'சரி', color: 'bg-emerald-500' },
];

export default function StudentExperience({ onNext }: SceneProps) {
  const [mode, setMode] = useState<'visual' | 'hearing'>('visual');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentGesture, setCurrentGesture] = useState<string | null>(null);
  const [isAiMode, setIsAiMode] = useState(false);

  // AI Simulation: Randomly trigger gestures when AI mode is on
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAiMode && mode === 'hearing') {
      interval = setInterval(() => {
        const randomGesture = GESTURES[Math.floor(Math.random() * GESTURES.length)];
        setCurrentGesture(randomGesture.id);
        setTimeout(() => setCurrentGesture(null), 2000);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAiMode, mode]);

  const triggerGesture = (id: string) => {
    setCurrentGesture(id);
    setTimeout(() => setCurrentGesture(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-deep-space">
      {/* Top Navigation */}
      <div className="p-6 flex items-center justify-between glass-panel border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-neon-cyan/20 rounded-lg flex items-center justify-center neon-border">
            <span className="font-bold text-neon-cyan">M</span>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Student Portal</h1>
            <p className="text-[10px] text-neon-cyan uppercase tracking-widest font-bold">Niral Thiruvizha 3.0</p>
          </div>
        </div>

        <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
          <button
            onClick={() => setMode('visual')}
            className={`px-6 py-2 rounded-full flex items-center gap-2 transition-all ${mode === 'visual' ? 'bg-neon-cyan text-deep-space font-bold' : 'text-white/60'}`}
          >
            <Eye size={18} /> Visual Mode
          </button>
          <button
            onClick={() => setMode('hearing')}
            className={`px-6 py-2 rounded-full flex items-center gap-2 transition-all ${mode === 'hearing' ? 'bg-neon-magenta text-white font-bold' : 'text-white/60'}`}
          >
            <Ear size={18} /> Hearing Mode
          </button>
        </div>

        <button 
          onClick={onNext}
          className="px-4 py-2 glass-panel rounded-lg text-sm hover:bg-white/10 transition-colors"
        >
          Next Scene
        </button>
      </div>

      <main className="flex-1 relative overflow-hidden flex flex-col md:flex-row">
        {/* Main Content Area */}
        <div className="flex-1 relative p-8">
          <AnimatePresence mode="wait">
            {mode === 'visual' ? (
              <motion.div
                key="visual-mode"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="h-full relative rounded-3xl overflow-hidden border border-white/10"
              >
                {/* Simulated AR Camera View */}
                <div className="absolute inset-0">
                  <img 
                    src="https://picsum.photos/seed/classroom/1200/800" 
                    className="w-full h-full object-cover opacity-40 grayscale-[0.3]"
                    alt="Classroom AR View"
                  />
                  {/* Immersive HUD Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-b from-deep-space/40 via-transparent to-deep-space/60" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
                  
                  {/* Scanning Line Effect */}
                  <motion.div 
                    className="absolute left-0 right-0 h-[2px] bg-neon-cyan/20 shadow-[0_0_15px_rgba(0,242,255,0.3)] z-10"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />

                  {/* HUD Corners */}
                  <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-neon-cyan/40 rounded-tl-lg" />
                  <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-neon-cyan/40 rounded-tr-lg" />
                  <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-neon-cyan/40 rounded-bl-lg" />
                  <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-neon-cyan/40 rounded-br-lg" />
                </div>
                
                {/* AR Hotspots */}
                {[
                  { id: 1, top: '33%', left: '25%', title: 'FRACTION: 1/2', desc: 'ஒன்றில் பாதி (One half of a whole)' },
                  { id: 2, top: '45%', left: '60%', title: 'FRACTION: 1/4', desc: 'நான்கில் ஒன்று (One quarter)' },
                  { id: 3, top: '20%', left: '75%', title: 'FRACTION: 3/4', desc: 'முக்கால் பங்கு (Three quarters)' }
                ].map((hotspot) => (
                  <motion.div 
                    key={hotspot.id}
                    className="absolute group"
                    style={{ top: hotspot.top, left: hotspot.left }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + hotspot.id * 0.2 }}
                  >
                    {/* Multi-layered Neon Glow Effect */}
                    <motion.div
                      className="absolute -inset-6 bg-neon-cyan/10 rounded-full blur-2xl"
                      animate={{ 
                        scale: [1, 1.4, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute -inset-2 bg-neon-cyan/30 rounded-full blur-md"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    <div className="relative w-10 h-10 rounded-full bg-neon-cyan/20 border-2 border-neon-cyan flex items-center justify-center cursor-pointer transition-all group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,242,255,0.6)]">
                      <div className="w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_15px_#00f2ff]" />
                      <div className="absolute inset-0 rounded-full border-2 border-neon-cyan animate-ping opacity-30" />
                    </div>

                    {/* Tooltip on Hover */}
                    <motion.div 
                      className="absolute top-12 left-1/2 -translate-x-1/2 glass-panel p-3 rounded-xl w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      <p className="text-xs font-bold text-neon-cyan mb-1">{hotspot.title}</p>
                      <p className="text-[10px] text-white/80">{hotspot.desc}</p>
                      
                      {/* Tooltip Arrow */}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/5 border-t border-l border-white/10 rotate-45" />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Audio Controls Overlay */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass-panel px-8 py-4 rounded-2xl flex items-center gap-6">
                  <button onClick={() => setIsPlaying(!isPlaying)} className="w-12 h-12 bg-neon-cyan rounded-full flex items-center justify-center text-deep-space">
                    {isPlaying ? <span className="font-bold">||</span> : <Play fill="currentColor" size={20} />}
                  </button>
                  <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-neon-cyan"
                      animate={{ width: isPlaying ? "100%" : "30%" }}
                      transition={{ duration: 10, ease: "linear" }}
                    />
                  </div>
                  <Volume2 size={20} className="text-white/60" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="hearing-mode"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="h-full flex flex-col gap-6"
              >
                {/* Sign Language Avatar Simulation */}
                <div className="flex-1 glass-panel rounded-3xl relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-neon-magenta/5 to-transparent" />
                  
                  {/* Audio Waveform Simulation */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 flex items-end gap-1 h-12">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-neon-magenta/40 rounded-full"
                        animate={{ 
                          height: (isPlaying || currentGesture) ? [10, Math.random() * 40 + 10, 10] : 4 
                        }}
                        transition={{ 
                          duration: 0.5, 
                          repeat: Infinity, 
                          delay: i * 0.05 
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      animate={{ 
                        y: (isPlaying || currentGesture) ? [0, -5, 0] : 0,
                        rotate: (isPlaying || currentGesture) ? [0, 1, -1, 0] : 0
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="relative"
                    >
                      {/* Avatar Head/Body */}
                      <div className="w-48 h-48 bg-white/10 rounded-full border-4 border-neon-magenta/30 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,0,229,0.1)]">
                         <User size={80} className="text-neon-magenta" />
                      </div>

                      {/* Animated Hands for Signing */}
                      <AnimatePresence>
                        {(isPlaying || currentGesture) && (
                          <>
                            {/* Left Hand */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ 
                                opacity: 1, 
                                scale: 1,
                                x: currentGesture === 'hello' ? [-40, -60, -40] : [-60, -80, -50, -70, -60],
                                y: currentGesture === 'question' ? [-40, -60, -40] : [-20, -40, -10, -30, -20],
                                rotate: [0, 45, -20, 30, 0]
                              }}
                              exit={{ opacity: 0, scale: 0 }}
                              transition={{ duration: currentGesture ? 1 : 3, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute top-20 -left-10 w-12 h-12 bg-neon-magenta/20 rounded-full border border-neon-magenta/40 backdrop-blur-sm flex items-center justify-center"
                            >
                              <div className="w-4 h-4 bg-neon-magenta rounded-full blur-[2px]" />
                            </motion.div>

                            {/* Right Hand */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ 
                                opacity: 1, 
                                scale: 1,
                                x: currentGesture === 'hello' ? [40, 60, 40] : [60, 80, 50, 70, 60],
                                y: currentGesture === 'question' ? [-40, -60, -40] : [-20, -40, -10, -30, -20],
                                rotate: [0, -45, 20, -30, 0]
                              }}
                              exit={{ opacity: 0, scale: 0 }}
                              transition={{ duration: currentGesture ? 1.2 : 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                              className="absolute top-20 -right-10 w-12 h-12 bg-neon-magenta/20 rounded-full border border-neon-magenta/40 backdrop-blur-sm flex items-center justify-center"
                            >
                              <div className="w-4 h-4 bg-neon-magenta rounded-full blur-[2px]" />
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <div className="flex gap-4 mt-4">
                      <motion.div 
                        animate={{ 
                          scaleX: (isPlaying || currentGesture) ? [1, 1.5, 1] : 1,
                          opacity: (isPlaying || currentGesture) ? [0.4, 0.8, 0.4] : 0.4
                        }} 
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-12 h-2 bg-neon-magenta rounded-full" 
                      />
                      <motion.div 
                        animate={{ 
                          scaleX: (isPlaying || currentGesture) ? [1, 1.8, 1] : 1,
                          opacity: (isPlaying || currentGesture) ? [0.4, 0.8, 0.4] : 0.4
                        }} 
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="w-16 h-2 bg-neon-magenta rounded-full" 
                      />
                    </div>
                  </div>

                  {/* Gesture Indicator Overlay */}
                  <AnimatePresence>
                    {currentGesture && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-24 glass-panel px-4 py-2 rounded-full border border-neon-magenta/30 flex items-center gap-2"
                      >
                        <Hand size={14} className="text-neon-magenta" />
                        <span className="text-xs font-bold uppercase tracking-widest text-white">
                          Gesture: {GESTURES.find(g => g.id === currentGesture)?.label}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Controls Overlay for Hearing Mode */}
                  <div className="absolute bottom-24 left-1/2 -translate-x-1/2 glass-panel px-6 py-3 rounded-2xl flex items-center gap-4 z-20">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)} 
                      className="w-10 h-10 bg-neon-magenta rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,0,229,0.4)]"
                    >
                      {isPlaying ? <span className="font-bold">||</span> : <Play fill="currentColor" size={18} />}
                    </button>
                    <div className="text-xs font-bold tracking-widest text-neon-magenta uppercase">
                      {isPlaying ? 'Signing in Progress...' : 'Click to Start Narration'}
                    </div>
                    <div className="h-6 w-[1px] bg-white/10 mx-2" />
                    <button
                      onClick={() => setIsAiMode(!isAiMode)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${isAiMode ? 'bg-neon-magenta text-white' : 'bg-white/5 text-white/40'}`}
                    >
                      <Sparkles size={14} />
                      <span className="text-[10px] font-bold uppercase tracking-tighter">AI Mode</span>
                    </button>
                  </div>

                  {/* Captions Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-deep-space to-transparent">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-2xl font-medium text-center leading-relaxed"
                    >
                      <AnimatePresence mode="wait">
                        {currentGesture ? (
                          <motion.span
                            key="gesture-text"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            className="text-neon-magenta font-bold"
                          >
                            "{GESTURES.find(g => g.id === currentGesture)?.tamil}"
                          </motion.span>
                        ) : isPlaying ? (
                          <motion.span
                            key="tamil-text"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            "ஒரு பாகு முழுவதின் ஒரு பகுதியாகும்."
                          </motion.span>
                        ) : (
                          <span className="text-white/20 italic">Waiting for input...</span>
                        )}
                      </AnimatePresence>
                      <br />
                      <span className="text-white/40 text-lg">
                        {currentGesture 
                          ? `(${GESTURES.find(g => g.id === currentGesture)?.label})`
                          : '(A fraction is a part of a whole.)'
                        }
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar / Info Panel */}
        <div className="w-full md:w-80 p-8 glass-panel border-l border-white/10 overflow-y-auto">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <MessageSquare size={20} className="text-neon-cyan" />
            Lesson Details
          </h3>
          <div className="space-y-6">
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Topic</p>
              <p className="font-medium">Introduction to Fractions</p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-2">Language</p>
              <p className="font-medium">Tamil (தமிழ்)</p>
            </div>

            {mode === 'hearing' && (
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-4">Gesture Library</p>
                <div className="grid grid-cols-1 gap-2">
                  {GESTURES.map((gesture) => (
                    <button
                      key={gesture.id}
                      onClick={() => triggerGesture(gesture.id)}
                      className={`p-3 rounded-xl border border-white/5 hover:border-neon-magenta/50 transition-all flex items-center justify-between group ${currentGesture === gesture.id ? 'bg-neon-magenta/10 border-neon-magenta' : 'bg-white/5'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${gesture.color}`} />
                        <span className="text-sm font-medium">{gesture.label}</span>
                      </div>
                      <span className="text-[10px] text-white/40 group-hover:text-neon-magenta transition-colors">{gesture.tamil}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-4">Learning Progress</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Module 1</span>
                <span className="text-sm text-neon-cyan">85%</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-neon-cyan" />
              </div>
            </div>
          </div>

          <button className="w-full mt-12 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            <Maximize2 size={18} /> Open in VR
          </button>
        </div>
      </main>
    </div>
  );
}
