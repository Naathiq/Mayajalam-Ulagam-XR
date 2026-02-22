import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { SceneProps } from '../types';

export default function TeacherDashboard({ onNext }: SceneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleUpload = () => {
    setIsUploaded(true);
    setTimeout(() => {
      onNext();
    }, 2000);
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full"
      >
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-neon-cyan/10 text-neon-cyan text-[10px] font-bold rounded border border-neon-cyan/20 uppercase tracking-widest">Niral Thiruvizha 3.0</span>
            </div>
            <h2 className="text-3xl font-bold neon-text">Teacher Dashboard</h2>
            <p className="text-white/60">Upload content to generate XR experiences</p>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 glass-panel rounded-lg text-sm">
              <span className="text-neon-cyan">Active Lessons:</span> 12
            </div>
          </div>
        </div>

        <motion.div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => { e.preventDefault(); handleUpload(); }}
          onClick={handleUpload}
          className={`
            relative h-80 glass-panel rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all duration-500
            ${isDragging ? 'border-neon-cyan scale-[1.02] bg-neon-cyan/5' : 'border-white/10'}
          `}
        >
          <AnimatePresence mode="wait">
            {!isUploaded ? (
              <motion.div 
                key="upload"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-neon-cyan/10 rounded-full flex items-center justify-center mb-6 neon-border">
                  <Upload className="text-neon-cyan w-10 h-10" />
                </div>
                <p className="text-xl font-medium mb-2">Drag & Drop Lesson PDF</p>
                <p className="text-white/40 text-sm">Supported formats: PDF, DOCX, TXT</p>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center"
              >
                <motion.div 
                  initial={{ rotate: -45 }}
                  animate={{ rotate: 0 }}
                  className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 border border-emerald-500/50"
                >
                  <CheckCircle2 className="text-emerald-500 w-10 h-10" />
                </motion.div>
                <p className="text-xl font-medium mb-2">Lesson Uploaded Successfully</p>
                <div className="flex items-center gap-2 text-white/60">
                  <FileText size={16} />
                  <span>fractions_lesson_tamil.pdf</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Animated corner accents */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-neon-cyan/30" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-neon-cyan/30" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-neon-cyan/30" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-neon-cyan/30" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Auto-Captions', status: 'Ready' },
            { label: 'Sign Translation', status: 'Ready' },
            { label: 'AR Hotspots', status: 'Ready' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="p-4 glass-panel rounded-xl flex items-center justify-between"
            >
              <span className="text-white/60 text-sm">{item.label}</span>
              <span className="text-xs px-2 py-1 bg-neon-cyan/10 text-neon-cyan rounded">{item.status}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
