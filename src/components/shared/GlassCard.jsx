import React from 'react';

const GlassCard = ({ children, className }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
