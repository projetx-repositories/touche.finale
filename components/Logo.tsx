import React, { useState, useEffect } from 'react';
import Reveal from './Reveal';


// Ce composant affiche le logo.
// J'ai configuré le code pour utiliser votre image "logo.png".
// Assurez-vous de placer votre image nommée "logo.png" dans le dossier public du projet.

export const Logo: React.FC<{ className?: string, variant?: 'dark' | 'light', isScrolled?: boolean }> = ({ className = "", variant = 'dark', isScrolled: isScrolledProp }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-tf-purple';
  const subTextColor = variant === 'light' ? 'text-gray-200' : 'text-gray-500';
  const [internalScrolled, setInternalScrolled] = useState(false);

  // If parent passes isScrolled prop, prefer it; otherwise fall back to internal listener
  useEffect(() => {
    if (typeof isScrolledProp !== 'undefined') return;
    const handleScroll = () => {
      setInternalScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolledProp]);
  const isScrolled = typeof isScrolledProp !== 'undefined' ? isScrolledProp : internalScrolled;

  // Conditional classes for smooth header transition
  // Animate gap/position smoothly and avoid removing the text element instantly (no `hidden`)
  const containerClasses = `flex items-center transition-all duration-700 ease-out ${isScrolled ? 'justify-center gap-0' : 'gap-2'} ${className}`;
  const imgClasses = `w-full h-full object-contain drop-shadow-sm transform transition-transform duration-700 ease-out ${isScrolled ? 'scale-125' : 'scale-105'}`;
  // Use opacity + transform for smooth hiding; avoid `hidden` which is abrupt
  const textWrapperClasses = `flex flex-col justify-center transform transition-opacity transition-transform duration-700 ease-out ${isScrolled ? 'opacity-0 -translate-y-2 hidden pointer-events-none' : 'opacity-100 translate-y-0'}`;

  return (
    <Reveal className={`delay-150 ${className}`}>
      <div className={containerClasses}>
        {/* Conteneur de l'image du logo */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          <img
            src="/logo-r.png"
            alt="Logo Touche Finale"
            className={imgClasses}
          />
        </div>
        <div className={textWrapperClasses} aria-hidden={isScrolled}>
          <span className={`font-serif text-xl leading-none tracking-wide uppercase ${textColor}`}>
            Touche <span className="font-bold">Finale</span>
          </span>
          <span className={`text-[10px] w-64 uppercase tracking-[0.2em] ${subTextColor} mt-1`}>
            Vous méritez un changement
          </span>
        </div>
      </div>
    </Reveal>
  );
};