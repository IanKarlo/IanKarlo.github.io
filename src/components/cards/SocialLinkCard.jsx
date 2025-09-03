import React from 'react';

const SocialLinkCard = ({ name, url, icon, description, color, className = "" }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group bg-slate-800 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl border border-slate-700 hover:border-slate-500 h-full flex flex-col items-center justify-center ${color} ${className}`}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <div className="text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors duration-200">
        {name}
      </h3>
      <p className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors duration-200 leading-relaxed">
        {description}
      </p>
    </a>
  );
};

export default SocialLinkCard;
