import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Trajectory } from './components/Trajectory';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { CallToAction } from './components/CallToAction';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'portfolio'>('home');

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Noise Filter Overlay */}
        <div className="absolute inset-0 bg-noise mix-blend-multiply opacity-50"></div>
        
        {/* Gradient Blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] mix-blend-multiply animate-fade-in"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] mix-blend-multiply"></div>
      </div>

      <Header onNavigate={setView} currentPage={view} />
      
      <main className="relative z-10">
        {view === 'home' ? (
          <>
            <Hero />
            <Trajectory />
            <Education />
            <Skills />
            <CallToAction onViewResume={() => {
                setView('portfolio');
                window.scrollTo(0, 0);
            }} />
          </>
        ) : (
          <Portfolio />
        )}
      </main>
    </div>
  );
};

export default App;