import React from 'react';

const StatusBadge = ({ status, className = "" }) => {
  return (
    <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm ${className}`}>
      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
      {status}
    </div>
  );
};

export default StatusBadge;
