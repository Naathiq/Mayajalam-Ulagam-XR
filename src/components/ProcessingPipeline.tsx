import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, MessageSquare, Volume2, User, MapPin, Check } from 'lucide-react';
import { SceneProps } from '../types';

const steps = [
  { id: 'captions', label: 'Generating Captions', icon: MessageSquare, sub: 'captions.vtt' },
  { id: 'audio', label: 'Tamil Narration', icon: Volume2, sub: 'narration_female.mp3' },
  { id: 'sign', label: 'Sign Language Avatar', icon: User, sub: 'avatar_anim.glb' },
  { id: 'ar', label: 'AR Hotspot Mapping', icon: MapPin, sub: 'scene_metadata.json' }
];

export default function ProcessingPipeline({ onNext }: SceneProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    if (activeStep < steps.length) {
      const timer = setTimeout(() => {
        setCompleted(prev => [...prev, steps[activeStep].id]);
        setActiveStep(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onNext, 2000);
      return () => clearTimeout(timer);
    }
  }, [activeStep, onNext]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-neon-magenta/20 rounded-xl flex items-center justify-center neon-border border-neon-magenta">
            <Cpu className="text-neon-magenta animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 bg-neon-magenta/10 text-neon-magenta text-[10px] font-bold rounded border border-neon-magenta/20 uppercase tracking-widest">Niral Thiruvizha 3.0</span>
            </div>
            <h2 className="text-2xl font-bold">AI Processing Pipeline</h2>
            <p className="text-white/40">Transforming content into multi-modal assets</p>
          </div>
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => {
            const isCompleted = completed.includes(step.id);
            const isActive = activeStep === i;
            
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isActive || isCompleted ? 1 : 0.3,
                  x: 0,
                  scale: isActive ? 1.02 : 1
                }}
                className={`
                  p-6 rounded-2xl flex items-center justify-between transition-all duration-500
                  ${isActive ? 'glass-panel border-neon-cyan/50' : 'bg-white/5 border border-transparent'}
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    ${isCompleted ? 'bg-emerald-500/20 text-emerald-500' : isActive ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-white/10 text-white/40'}
                  `}>
                    {isCompleted ? <Check size={24} /> : <step.icon size={24} />}
                  </div>
                  <div>
                    <p className="font-medium">{step.label}</p>
                    <p className="text-xs text-white/40 font-mono">{step.sub}</p>
                  </div>
                </div>

                {isActive && (
                  <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-neon-cyan"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "linear" }}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {activeStep === steps.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center text-emerald-500"
            >
              All assets generated successfully! Preparing Student Experience...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
