import React from 'react';
import { Navbar, Footer } from './components/layout';
import { Hero, Skills, Projects, Contact } from './components/sections';
import './App.css';
function App() {
  return (
    <div className="min-h-screen bg-slate-900 dark-theme">
      <Navbar />
      <div className="pt-4">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
