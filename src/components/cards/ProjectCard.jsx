import React from 'react';
import DynamicCard from '../DynamicCard/DynamicCard';
import { useLanguage } from '../../hooks/useLanguage';

const ProjectCard = ({ projectKey, technologies, link, status, icon, index, isVisible }) => {
  const { translations } = useLanguage();
  const t = translations.projects;

  // Determina se é projeto pessoal ou da comunidade
  const isPersonal = ['yourtale', 'asciffier', 'sshHelper', 'musyc'].includes(projectKey);
  const projectData = isPersonal ? t.personalProjects[projectKey] : t.communityProjects[projectKey];

  return (
    <DynamicCard
      className="w-full h-full"
      enableTilt={true}
      enableMobileTilt={false}
    >
      <div 
        className={`bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-700 hover:border-blue-500 group h-full transform transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}
        style={{
          transitionDelay: `${index * 100}ms`
        }}
      >
        {/* Header do card */}
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
            <span className="text-xl text-white">{icon}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-300 transition-colors duration-200">
              {projectData.title}
            </h3>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
              status === 'completed' ? 'bg-green-900/50 text-green-300 border border-green-700/50' :
              status === 'in-progress' ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-700/50' :
              'bg-gradient-to-r from-blue-600 to-purple-600 text-white border border-blue-500/50'
            }`}>
              {status === 'completed' ? t.status.completed : 
               status === 'in-progress' ? t.status.inProgress : t.status.planned}
            </span>
          </div>
        </div>

        {/* Descrição */}
        <p className="text-slate-300 mb-4 leading-relaxed">{projectData.description}</p>

        {/* Tecnologias */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-400 mb-2">{t.technologies}</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-medium border border-slate-600/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Link do projeto */}
        <div className="mt-auto">
          <a 
            href={link} 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium group/link"
            target="_blank"
          >
            {t.viewProject}
            <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </DynamicCard>
  );
};

export default ProjectCard;
