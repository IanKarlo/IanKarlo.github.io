import React from 'react';

const NavigationLink = ({ href, children, className = "" }) => {
  return (
    <a 
      href={href} 
      className={`text-slate-300 hover:text-white transition-all duration-300 font-medium relative group ${className}`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

export default NavigationLink;
