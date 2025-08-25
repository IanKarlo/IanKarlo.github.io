import React from 'react';
import DynamicCard from '../DynamicCard/DynamicCard';
import { useLanguage } from '../../hooks/useLanguage';

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
                className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-medium hover:bg-slate-600/70 transition-colors duration-200 border border-slate-600/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </DynamicCard>
  );
};

const Skills = () => {
  const { translations } = useLanguage();
  const t = translations.skills;

  const skills = [
    {
      title: t.softwareEngineer?.title || 'Engenheiro de Software',
      description: t.softwareEngineer?.description || 'Construo sistemas robustos e escaláveis, garantindo eficiência, segurança e performance. Especializado em arquitetura de sistemas e desenvolvimento de APIs.',
      skills: t.softwareEngineer?.skills || ['Backend Development', 'API Design', 'Database Design', 'System Architecture', 'Code Quality'],
      technologies: t.softwareEngineer?.technologies || ['Node.js', 'Python', 'React', 'React Native', 'SQL', 'PostgreSQL', 'MongoDB'],
      icon: '💻'
    },
    {
      title: t.devopsEngineer?.title || 'Engenheiro de DevOps',
      description: t.devopsEngineer?.description || 'Implemento pipelines eficientes de CI/CD e garanto a disponibilidade contínua de aplicações. Especializado em automação e infraestrutura como código.',
      skills: t.devopsEngineer?.skills || ['CI/CD Pipelines', 'Cloud Infrastructure', 'Container Orchestration', 'Monitoring', 'Automation'],
      technologies: t.devopsEngineer?.technologies || ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Jenkins', 'Terraform', 'Prometheus'],
      icon: '🚀'
    }
  ];

  return (
    <section className="py-16 bg-transparent" id="skills">
      <div className="container mx-auto px-6">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">{t.title}</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Grid de habilidades */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        {/* Seção adicional de competências */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-100 mb-8">{t.generalCompetencies}</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {t.competencies.map((competency, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 border border-slate-700 hover:border-blue-500"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 