import React, { useState, useEffect } from 'react';
import DynamicCard from '../DynamicCard/DynamicCard';
import { useLanguage } from '../../hooks/useLanguage';
import { ProjectCard } from '../cards';
import { TabNavigation } from '../ui';



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
        <TabNavigation 
          tabs={[
            { key: 'personal', label: t.tabs.personal },
            { key: 'community', label: t.tabs.community }
          ]}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          className="mb-12"
        />

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