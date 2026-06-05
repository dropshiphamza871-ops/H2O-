import React, { useState, useEffect } from 'react';

interface GymImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  overlayGradient?: boolean;
}

export default function GymImage({
  src,
  fallback,
  alt,
  className = '',
  overlayGradient = false,
  ...props
}: GymImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasFailed, setHasFailed] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setImgSrc(src);
    setHasFailed(false);
  }, [src]);

  const handleError = () => {
    if (!hasFailed) {
      setHasFailed(true);
      setImgSrc(fallback);
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#050B14]">
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        referrerPolicy="no-referrer"
        {...props}
      />
      
      {overlayGradient && (
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050B14] via-[#050B14]/40 to-transparent pointer-events-none" />
      )}
      
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900 border border-slate-800 animate-pulse">
          <span className="text-[10px] font-mono uppercase tracking-[3px] text-[#00AEEF]">H₂O LOADING</span>
        </div>
      )}
    </div>
  );
}
