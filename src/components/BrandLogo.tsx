import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', className = '' }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const subSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[10px] tracking-[0.3em]',
    lg: 'text-[12px] tracking-[0.35em]'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Original Dynamic Geometric Emblem: Shield polygon + Kinetic Red Angular V-Vector */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(245,34,58,0.45)]"
        >
          {/* Subtle outer dark polygon */}
          <polygon
            points="22,3 41,12 41,32 22,41 3,32 3,12"
            fill="#0B1218"
            stroke="#202A36"
            strokeWidth="1.5"
          />
          {/* Athletic red accent chevron / wing */}
          <path
            d="M9 13 L22 34 L35 13"
            stroke="#F5223A"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner silver blade */}
          <path
            d="M15 14 L22 26 L29 14"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Red power dot */}
          <circle cx="22" cy="9" r="2.5" fill="#F5223A" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-none">
        <span className={`font-display font-extrabold ${textSizes[size]} tracking-tight text-white`}>
          VALENCE
        </span>
        <span className={`font-semibold ${subSizes[size]} text-[#F5223A] uppercase mt-0.5`}>
          ATHLETIC CLUB
        </span>
      </div>
    </div>
  );
};
