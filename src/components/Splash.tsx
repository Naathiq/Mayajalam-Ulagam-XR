import { motion } from 'motion/react';
import { SceneProps } from '../types';

export default function Splash({ onNext }: SceneProps) {
  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-deep-space overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Central Glow Effect */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
        className="absolute w-[400px] h-[400px] bg-neon-magenta/10 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Background Particles Simulation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-neon-cyan font-bold text-2xl select-none whitespace-nowrap"
            style={{ left: `${(i * 7) + 2}%` }}
            initial={{ y: -100 }}
            animate={{ y: window.innerHeight + 100 }}
            transition={{ 
              duration: 10 + Math.random() * 15, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
          >
            {['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ'].map((char, j) => (
              <div key={j} className="my-2">{char}</div>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {/* Ambient Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`ambient-${i}`}
            className={`absolute rounded-full ${i % 2 === 0 ? 'bg-neon-cyan' : 'bg-neon-magenta'}`}
            style={{ 
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
            }}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-20%"],
              opacity: [0, 0.4, 0],
              scale: [1, 2, 1]
            }}
            transition={{ 
              duration: 4 + Math.random() * 4, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}

        {/* Logo Reveal Explosion Particles */}
        {[...Array(40)].map((_, i) => {
          const angle = (i / 40) * Math.PI * 2;
          const distance = 100 + Math.random() * 300;
          return (
            <motion.div
              key={`reveal-${i}`}
              className={`absolute left-1/2 top-1/2 w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-neon-cyan' : 'bg-neon-magenta'}`}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              animate={{ 
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{ 
                duration: 1.5 + Math.random(),
                delay: 0.5,
                ease: "easeOut"
              }}
            />
          );
        })}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8 inline-block px-4 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-xs tracking-[0.4em] uppercase font-bold shadow-[0_0_15px_rgba(0,242,255,0.2)]"
        >
          Niral Thiruvizha 3.0
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-4"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          <motion.span 
            className="text-white inline-block"
            animate={{ textShadow: ["0 0 0px #fff", "0 0 10px #fff", "0 0 0px #fff"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            MAYAJALAM
          </motion.span>
          <br />
          <motion.span 
            className="neon-text inline-block"
            animate={{ 
              filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
              scale: [1, 1.01, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            OLAGAM XR
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-white/60 font-light tracking-widest uppercase mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          AI-Powered Inclusive Learning
        </motion.p>

        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,242,255,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-neon-cyan text-deep-space font-bold rounded-full transition-all"
        >
          ENTER EXPERIENCE
        </motion.button>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 text-white/20 text-sm tracking-[0.3em] uppercase"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Niral Thiruvizha 3.0 Edition
      </motion.div>
    </motion.div>
  );
}
