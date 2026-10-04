import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackText?: string;
  className?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackText,
  className = '',
  ...props
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#101820] to-[#05090D] border border-white/10 text-white/70 p-6 text-center select-none ${className}`}
      >
        <div className="w-12 h-12 rounded-full bg-[#F5223A]/10 border border-[#F5223A]/30 flex items-center justify-center mb-3">
          <Dumbbell className="w-6 h-6 text-[#F5223A]" />
        </div>
        <span className="text-sm font-semibold tracking-wide text-white">
          {fallbackText || alt}
        </span>
        <span className="text-xs text-white/40 mt-1">Valence Athletic Club</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-[#0B1218] animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </div>
  );
};
