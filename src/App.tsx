import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Splash from './components/Splash';
import TeacherDashboard from './components/TeacherDashboard';
import ProcessingPipeline from './components/ProcessingPipeline';
import StudentExperience from './components/StudentExperience';
import VRClassroom from './components/VRClassroom';
import Analytics from './components/Analytics';
import { SceneId } from './types';

export default function App() {
  const [currentScene, setCurrentScene] = useState<SceneId>('splash');

  const scenes: Record<SceneId, SceneId> = {
    splash: 'dashboard',
    dashboard: 'pipeline',
    pipeline: 'student',
    student: 'vr',
    vr: 'analytics',
    analytics: 'splash'
  };

  const nextScene = () => {
    setCurrentScene(scenes[currentScene]);
  };

  return (
    <div className="min-h-screen bg-deep-space text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {currentScene === 'splash' && (
          <Splash key="splash" onNext={nextScene} />
        )}
        {currentScene === 'dashboard' && (
          <TeacherDashboard key="dashboard" onNext={nextScene} />
        )}
        {currentScene === 'pipeline' && (
          <ProcessingPipeline key="pipeline" onNext={nextScene} />
        )}
        {currentScene === 'student' && (
          <StudentExperience key="student" onNext={nextScene} />
        )}
        {currentScene === 'vr' && (
          <VRClassroom key="vr" onNext={nextScene} />
        )}
        {currentScene === 'analytics' && (
          <Analytics key="analytics" onNext={nextScene} />
        )}
      </AnimatePresence>

      {/* Hackathon Mode Indicator */}
      <div className="fixed top-4 left-4 z-50 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
          <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_8px_#00f2ff]" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">Niral Thiruvizha 3.0</span>
        </div>
      </div>

      {/* Global Navigation Hint */}
      <div className="fixed bottom-4 right-4 z-50 flex gap-2 opacity-20 hover:opacity-100 transition-opacity">
        <button 
          onClick={() => setCurrentScene('splash')}
          className="w-2 h-2 rounded-full bg-white/50"
        />
        <button 
          onClick={() => setCurrentScene('dashboard')}
          className="w-2 h-2 rounded-full bg-white/50"
        />
        <button 
          onClick={() => setCurrentScene('student')}
          className="w-2 h-2 rounded-full bg-white/50"
        />
        <button 
          onClick={() => setCurrentScene('analytics')}
          className="w-2 h-2 rounded-full bg-white/50"
        />
      </div>
    </div>
  );
}
