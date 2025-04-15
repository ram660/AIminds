import React from 'react';

const BlurredBackground = ({ children, className }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blurred logo background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute -top-20 -left-20 w-96 h-96">
          <img 
            src="/assets/images/logo/aiminds-logo.svg" 
            alt="" 
            className="w-full h-full object-contain filter blur-2xl"
          />
        </div>
        <div className="absolute top-1/4 right-0 w-96 h-96 transform rotate-45">
          <img 
            src="/assets/images/logo/aiminds-logo.svg" 
            alt="" 
            className="w-full h-full object-contain filter blur-2xl"
          />
        </div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 transform -rotate-12">
          <img 
            src="/assets/images/logo/aiminds-logo.svg" 
            alt="" 
            className="w-full h-full object-contain filter blur-2xl"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BlurredBackground;
