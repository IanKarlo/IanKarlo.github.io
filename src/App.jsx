import React from 'react';
import { Navbar, Footer } from './components/layout';
import { Hero, Skills, Projects, Contact } from './components/sections';
import Background from './components/Background/Background';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 dark-theme relative">
      {/* Background animado para todo o site */}
      <div className="fixed inset-0 z-0">
        <Background
          hueShift={0}
          noiseIntensity={0.0}
          scanlineIntensity={0.0}
          speed={1.5}
          scanlineFrequency={0.5}
          warpAmount={0.02}
          resolutionScale={1.3}
        />
      </div>
      
      {/* Overlay escuro para manter legibilidade */}
      <div className="fixed inset-0 bg-slate-900/60 z-10"></div>
      
      {/* Conteúdo principal */}
      <div className="relative z-20">
        <Navbar />
        <div className="pt-4">
          <Hero />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
