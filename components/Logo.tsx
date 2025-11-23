import React from 'react';
import Reveal from './Reveal';


// Ce composant affiche le logo.
// J'ai configuré le code pour utiliser votre image "logo.png".
// Assurez-vous de placer votre image nommée "logo.png" dans le dossier public du projet.

export const Logo: React.FC<{ className?: string, variant?: 'dark' | 'light' }> = ({ className = "", variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-tf-purple';
  const subTextColor = variant === 'light' ? 'text-gray-200' : 'text-gray-500';

  return (
    <Reveal className={`delay-150 ${className}`}>{
      <div className={`flex items-center gap-2`}>
         {/* Conteneur de l'image du logo */}
        <div className="relative w-20 h-20 flex items-center justify-center">
           <img 
              src="logo-r.png" 
              alt="Logo Touche Finale"
              className="w-full h-full object-contain drop-shadow-sm"
           />
        </div>
        
        <div className="flex flex-col justify-center">
          <span className={`font-serif text-xl leading-none tracking-wide uppercase ${textColor}`}>
            Touche <span className="font-bold">Finale</span>
          </span>
          <span className={`text-[10px] uppercase tracking-[0.2em] ${subTextColor} mt-1`}>
            Vous méritez un changement
          </span>
        </div>
      </div>
    }</Reveal>
  );
};