import React from 'react';
import AsciiArt from '../AsciiArt';

const Hero = () => {
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
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          
          {/* Conteúdo principal - Lado esquerdo */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            {/* Badge de status */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Disponível para novos projetos
            </div>

            {/* Título principal */}
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-100 mb-6 leading-tight">
              Olá, sou{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ian Torres
              </span>
            </h1>

            {/* Subtítulo */}
            <h2 className="text-2xl lg:text-3xl text-slate-300 mb-6 font-medium">
              Engenheiro de Software & DevOps
            </h2>

            {/* Descrição */}
            <p className="text-lg lg:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Construo sistemas robustos e escaláveis, simplifico processos de implantação e 
              garanto integração e desempenho contínuos. Apaixonado por tecnologia e sempre 
              em busca de novos desafios.
            </p>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-6 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">5+</div>
                <div className="text-sm text-slate-400">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">10+</div>
                <div className="text-sm text-slate-400">Tecnologias Dominadas</div>
              </div>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Ver Meus Projetos
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-lg font-semibold transition-all duration-300 border border-slate-600 hover:border-slate-500"
              >
                Vamos Conversar
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="hidden lg:block mt-16">
              <div className="flex flex-col items-center text-slate-400 animate-bounce">
                <span className="text-sm mb-2">Role para baixo</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Lado direito - ASCII Art e elementos visuais */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Container do ASCII Art com efeitos */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
                <AsciiArt
                  className="border-0 shadow-none bg-transparent"
                  fontSize="4px"
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