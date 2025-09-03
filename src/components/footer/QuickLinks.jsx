import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

const QuickLinks = ({ className = "" }) => {
  const { translations } = useLanguage();
  const t_links = translations.navigation;

  const links = [
    { href: '#hero', label: t_links.home },
    { href: '#skills', label: t_links.skills },
    { href: '#projects', label: t_links.projects },
    { href: '#contact', label: t_links.contact }
  ];

  return (
    <div className={`text-center md:text-left ${className}`}>
      <h3 className="text-xl font-bold text-slate-100 mb-4">Links Rápidos</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
