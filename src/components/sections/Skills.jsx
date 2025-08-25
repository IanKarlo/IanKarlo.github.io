import React from 'react';

const SkillCard = ({ title, description, skills, technologies, icon }) => (
  <div className="bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-slate-700 hover:border-blue-500">
    {/* Header do card */}
    <div className="text-center mb-6">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl text-white">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold text-slate-100 mb-2">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>

    {/* Habilidades principais */}
    <div className="mb-6">
      <h4 className="text-lg font-semibold text-slate-100 mb-3 text-center">Habilidades Principais</h4>
      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-blue-900/50 text-blue-200 rounded-full text-sm font-medium hover:bg-blue-800/70 transition-colors duration-200 border border-blue-700/50"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Tecnologias */}
    <div className="text-center">
      <h4 className="text-lg font-semibold text-slate-100 mb-3">Tecnologias</h4>
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
);

const Skills = () => {
  const skills = [
    {
      title: 'Engenheiro de Software',
      description: 'Construo sistemas robustos e escaláveis, garantindo eficiência, segurança e performance. Especializado em arquitetura de sistemas e desenvolvimento de APIs.',
      skills: ['Backend Development', 'API Design', 'Database Design', 'System Architecture', 'Code Quality'],
      technologies: ['Node.js', 'Python', 'React', 'React Native', 'SQL', 'PostgreSQL', 'MongoDB'],
      icon: '💻'
    },
    {
      title: 'Engenheiro de DevOps',
      description: 'Implemento pipelines eficientes de CI/CD e garanto a disponibilidade contínua de aplicações. Especializado em automação e infraestrutura como código.',
      skills: ['CI/CD Pipelines', 'Cloud Infrastructure', 'Container Orchestration', 'Monitoring', 'Automation'],
      technologies: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Jenkins', 'Terraform', 'Prometheus'],
      icon: '🚀'
    }
  ];

  return (
    <section className="py-20 bg-slate-900" id="skills">
      <div className="container mx-auto px-6">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">Minhas Habilidades</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Como desenvolvedor full-stack, combino conhecimentos em desenvolvimento de software e DevOps 
            para criar soluções completas e escaláveis.
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
          <h3 className="text-2xl font-bold text-slate-100 mb-8">Competências Gerais</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'Desenvolvimento Ágil', 'Trabalho em Equipe', 'Resolução de Problemas',
              'Comunicação Técnica', 'Aprendizado Contínuo', 'Gestão de Projetos'
            ].map((competency, index) => (
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