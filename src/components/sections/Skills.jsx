import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { SkillCard } from '../cards';



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