import React from 'react';

const HeroStats = ({ stats, className = "" }) => {
  return (
    <div className={`grid grid-cols-2 gap-6 max-w-md mx-auto xl:mx-0 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
          <div className="text-sm text-slate-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
