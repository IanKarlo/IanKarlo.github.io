import React from 'react';

const ActionButtons = ({ buttons, className = "" }) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center xl:justify-start ${className}`}>
      {buttons.map((button, index) => (
        <a 
          key={index}
          href={button.href} 
          className={`inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 ${button.className}`}
        >
          {button.text}
          {button.icon && (
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={button.iconPath} />
            </svg>
          )}
        </a>
      ))}
    </div>
  );
};

export default ActionButtons;
