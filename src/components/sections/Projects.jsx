import React, { useState, useEffect } from 'react';
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

const Projects = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isVisible, setIsVisible] = useState(false);
  const [isTabChanging, setIsTabChanging] = useState(false);

  const { translations } = useLanguage();
  const t = translations.projects;

  // Projetos pessoais que você desenvolveu
  const personalProjects = [
    {
      projectKey: 'yourtale',
      technologies: ["Nextjs", "Nestjs", "PostgreSQL", "Docker", "AI"],
      link: "https://github.com/IanKarlo/your-tale",
      status: "in-progress",
      icon: "🎲"
    },
    {
      projectKey: 'asciffier',
      technologies: ["Zig", "C++", "OpenCV"],
      link: "https://github.com/IanKarlo/asciffier",
      status: "completed",
      icon: "🖼️"
    },
    {
      projectKey: 'sshHelper',
      technologies: ["Rust", "Github Actions"],
      link: "https://github.com/IanKarlo/ssh-helper",
      status: "in-progress",
      icon: "🔑"
    },
    {
      projectKey: 'musyc',
      technologies: ["Python", "Discord.py", "MongoDB", "Youtube-dl", "Youtube Data API", "Sentence Transformers"],
      link: "https://github.com/IanKarlo/musyc",
      status: "completed",
      icon: "📊"
    }
  ];

  // Projetos para a comunidade/open source
  const communityProjects = [
    {
      projectKey: 'components',
      technologies: ["Node.js", "Rust", "Docker"],
      link: "https://github.com/IanKarlo/node-ts-napi-rs-boilerplate",
      status: "in-progress",
      icon: "🧩"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const activeProjects = activeTab === 'personal' ? personalProjects : communityProjects;

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setIsTabChanging(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsTabChanging(false);
      }, 300);
    }
  };

  return (
    <section className="bg-transparent py-16" id="projects">
      <div style={{ width: '100px', height: '100px' }}>
        <DynamicCard
          name="Javi A. Torres"
          title="Software Engineer"
          handle="javicodes"
          status="Online"
          contactText="Contact Me"
          avatarUrl="https://png.pngtree.com/png-clipart/20230921/original/pngtree-bearded-man-face-male-generic-profile-picture-isolated-retro-character-vector-png-image_12644436.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log('Contact clicked')}
        />
      </div>
      <div className="container mx-auto px-6">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">{t.title}</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Tabs de navegação */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 rounded-xl p-2 border border-slate-700 relative">
            <div className="flex space-x-2 relative">
              {/* Background deslizante */}
              <div 
                className={`absolute top-0 left-2 w-48 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out ${
                  activeTab === 'personal' 
                    ? 'translate-x-0' 
                    : 'translate-x-[calc(100%+8px)]'
                }`}
              />
              
              <button
                onClick={() => handleTabChange('personal')}
                className={`relative px-6 py-4 rounded-lg font-medium transition-all duration-300 z-10 w-48 h-12 flex items-center justify-center ${
                  activeTab === 'personal'
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {t.tabs.personal}
              </button>
              <button
                onClick={() => handleTabChange('community')}
                className={`relative px-6 py-4 rounded-lg font-medium transition-all duration-300 z-10 w-48 h-12 flex items-center justify-center ${
                  activeTab === 'community'
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {t.tabs.community}
              </button>
            </div>
          </div>
        </div>

        {/* Grid de projetos com animação */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {activeProjects.map((project, index) => (
            <ProjectCard 
              key={`${activeTab}-${index}`} 
              {...project} 
              index={index}
              isVisible={isVisible && !isTabChanging}
            />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-4">{t.cta.text}</p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
          >
            {t.cta.button}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 