import React, { useState, useEffect } from 'react';
import LanguageSwitcher from '../LanguageSwitcher';
import { useLanguage } from '../../hooks/useLanguage';
import { NavigationLink } from '../navigation';
import { ProgressIndicator } from '../ui';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { translations } = useLanguage();
  const t = translations.navigation;
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Controla visibilidade da navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Controla mudança de aparência ao rolar
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      
      {/* Background com gradiente sutil quando não rolado */}
      {!isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-slate-800/20 to-slate-900/20 backdrop-blur-sm"></div>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo/Nome */}
          <div className="flex items-center">
            <a 
              href="#" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300"
            >
              Ian Torres
            </a>
          </div>
          
          {/* Links de navegação - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationLink href="#hero">{t.home}</NavigationLink>
            <NavigationLink href="#skills">{t.skills}</NavigationLink>
            <NavigationLink href="#projects">{t.projects}</NavigationLink>
            <NavigationLink href="#contact">{t.contact}</NavigationLink>
          </div>
          
          {/* Botão de contato destacado */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 border border-blue-500/30"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {t.letsTalk}
            </a>
          </div>

          {/* Language Switcher - Extrema direita */}
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Indicador de progresso da página */}
      <ProgressIndicator />
    </nav>
  );
};

export default Navbar; 