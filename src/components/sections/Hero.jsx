import React from 'react';
import AsciiArt from '../AsciiArt';
import { useLanguage } from '../../hooks/useLanguage';
import { StatusBadge, HeroStats, ActionButtons, ScrollIndicator } from '../ui';

const Hero = () => {
  const { translations } = useLanguage();
  const t = translations.hero;

  return (
    <section className="min-h-screen bg-transparent relative overflow-hidden" id="hero">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 z-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 opacity-5 z-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-30 container mx-auto px-6 py-16">
        <div className="flex flex-col xl:flex-row items-center justify-between min-h-screen">
          
          {/* Conteúdo principal - Lado esquerdo */}
          <div className="w-full xl:w-2/5 text-center xl:text-left mb-12 xl:mb-0">
            {/* Badge de status */}
            <StatusBadge status={t.status} className="mb-6" />

            {/* Título principal */}
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-100 mb-6 leading-tight">
              {t.greeting}{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ian Torres
              </span>
            </h1>

            {/* Subtítulo */}
            <h2 className="text-2xl lg:text-3xl text-slate-300 mb-6 font-medium">
              {t.title}
            </h2>

            {/* Descrição */}
            <p className="text-lg lg:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl xl:max-w-xl mx-auto xl:mx-0">
              {t.description}
            </p>

            {/* Estatísticas */}
            <HeroStats 
              stats={[
                { value: "5+", label: t.stats.experience },
                { value: "10+", label: t.stats.technologies }
              ]} 
              className="mb-8" 
            />

            {/* Botões de ação */}
            <ActionButtons 
              buttons={[
                {
                  href: "#projects",
                  text: t.buttons.projects,
                  className: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
                  iconPath: "M17 8l4 4m0 0l-4 4m4-4H3"
                },
                {
                  href: "#contact",
                  text: t.buttons.contact,
                  className: "bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600 hover:border-slate-500",
                  iconPath: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                }
              ]}
            />

            {/* Scroll indicator */}
            <div className="hidden xl:block mt-16">
              <ScrollIndicator text={t.scrollIndicator} />
            </div>
          </div>

          {/* Lado direito - ASCII Art e elementos visuais */}
          <div className="w-full xl:w-3/5 flex justify-center xl:justify-end hidden sm:flex">
            <div className="relative">
              {/* Container do ASCII Art com efeitos */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
                <AsciiArt
                  className="border-0 shadow-none bg-transparent"
                  fontSize="4px"
                  mobileFontSize="0.8px"
                  color="#e2e8f0"
                />
                
                {/* Overlay de gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl pointer-events-none"></div>
              </div>

              {/* Elementos flutuantes decorativos */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 to-pink-500 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-400 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 