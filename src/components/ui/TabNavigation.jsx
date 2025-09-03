import React from 'react';

const TabNavigation = ({ tabs, activeTab, onTabChange, className = "" }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="bg-slate-800 rounded-xl p-2 border border-slate-700 relative">
        <div className="flex space-x-2 relative">
          {/* Background deslizante */}
          <div 
            className={`absolute top-0 left-2 w-48 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out ${
              activeTab === tabs[0].key 
                ? 'translate-x-0' 
                : 'translate-x-[calc(100%+8px)]'
            }`}
          />
          
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`relative px-6 py-4 rounded-lg font-medium transition-all duration-300 z-10 w-48 h-12 flex items-center justify-center ${
                activeTab === tab.key
                  ? 'text-white'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
