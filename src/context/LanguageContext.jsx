import React, { createContext, useState, useEffect } from 'react';
import ptBR from '../locales/pt-BR';
import enUS from '../locales/en-US';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt-BR');
  const [translations, setTranslations] = useState(ptBR);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'pt-BR';
    setLanguage(savedLang);
    setTranslations(savedLang === 'pt-BR' ? ptBR : enUS);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setTranslations(lang === 'pt-BR' ? ptBR : enUS);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
