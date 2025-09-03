import React from 'react';

const ProgressIndicator = ({ className = "" }) => {
  return (
    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-slate-700/30 ${className}`}>
      <div 
        className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300"
        style={{
          width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
        }}
      ></div>
    </div>
  );
};

export default ProgressIndicator;
