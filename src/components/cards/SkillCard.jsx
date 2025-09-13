import React from 'react';
import DynamicCard from '../DynamicCard/DynamicCard';
import { useLanguage } from '../../hooks/useLanguage';
import TechnologyLogo from '../TechnologyLogo';

const SkillCard = ({ title, description, skills, technologies, icon }) => {
  const { translations } = useLanguage();
  const t = translations.skills;

  return (
    <DynamicCard
      className="w-full h-full"
      enableTilt={true}
      enableMobileTilt={false}
    >
      <div className="bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-slate-700 hover:border-blue-500 group h-full">
        {/* Header do card */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-3xl">{icon}</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-100 mb-3 group-hover:text-blue-300 transition-colors duration-200">
            {title}
          </h3>
        </div>

        {/* Descrição */}
        <p className="text-slate-300 mb-6 leading-relaxed text-center">{description}</p>

        {/* Habilidades */}
        <div className="text-center mb-6">
          <h4 className="text-lg font-semibold text-slate-100 mb-3">{t.skillsTitle || 'Habilidades'}</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-medium hover:bg-slate-600/70 transition-colors duration-200 border border-slate-600/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tecnologias */}
        <div className="text-center">
          <h4 className="text-lg font-semibold text-slate-100 mb-3">{t.technologiesTitle || 'Tecnologias'}</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-medium hover:bg-slate-600/70 transition-colors duration-200 border border-slate-600/50 flex items-center gap-2"
              >
                <TechnologyLogo technology={tech} className="w-4 h-4" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </DynamicCard>
  );
};

export default SkillCard;
