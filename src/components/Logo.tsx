import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = '', iconOnly = false }: LogoProps) {
  const heightClass = iconOnly ? "h-10" : "h-12 sm:h-14 md:h-16";

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/logo.png"
        alt="H2O GYM"
        className={`${heightClass} w-auto object-contain transition-all duration-300`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

