import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true }) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-1 ${className}`}>
      {/* SVG Logo Block */}
      <svg 
        viewBox="0 0 100 130" 
        className="h-full w-auto drop-shadow-[0_0_8px_rgba(0,112,255,0.4)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bgateGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00AEEF" />
            <stop offset="100%" stopColor="#0054A6" />
          </linearGradient>
        </defs>
        
        {/* The Blue Block */}
        <rect width="100" height="130" fill="url(#bgateGradient)" />
        
        {/* Circuit Lines (Simplified and stylized as per the provided image) */}
        <g stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9">
          {/* Vertical Lines with Offsets */}
          <path d="M20 0 V60 L10 80 V130" />
          <path d="M35 0 V65 L25 85 V130" />
          <path d="M50 0 V70 L40 90 V130" />
          <path d="M65 0 V75 L55 95 V130" />
          <path d="M80 0 V80 L70 100 V130" />
          
          {/* Right side straight lines */}
          <path d="M92 0 V130" strokeWidth="1.5" opacity="0.5" />
        </g>
      </svg>
      
      {/* BGATE Text below the block */}
      {showText && (
        <span className="text-white font-black tracking-[0.2em] text-[1.2em] mt-1 leading-none uppercase">
          BGATE
        </span>
      )}
    </div>
  );
};

export default Logo;