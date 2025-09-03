import React from 'react';

const ScrollIndicator = ({ text, className = "" }) => {
  return (
    <div className={`flex flex-col items-center text-slate-400 animate-bounce ${className}`}>
      <span className="text-sm mb-2">{text}</span>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  );
};

export default ScrollIndicator;
