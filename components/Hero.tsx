import React from 'react';
import Reveal from './Reveal';
import { Button } from './Button';
import { CONTACT_INFO } from '../constants';
import { Sparkle, Feather } from 'lucide-react';

export const Hero: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  return (
    <section className="relative min-h-screen flex items-center py-24 overflow-hidden bg-gradient-to-b from-violet-50 via-tf-light to-pink-100">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Content */}
            <Reveal className="reveal--slide-left delay-300">
            <div className="order-1 pt-8 lg:order-2 relative flex justify-center">
            {/* Floating Feathers */}
            <div className="absolute top-10 left-0 z-30 text-white/80 animate-float-slow">
                <Feather size={32} />
            </div>
            <div className="absolute bottom-20 right-10 z-30 text-white/60 animate-float-medium delay-700">
                <Feather size={24} className="rotate-45" />
            </div>
            <div className="absolute top-1/2 -right-4 z-30 text-white/90 animate-float-fast delay-200">
                <Feather size={40} className="-rotate-12" />
            </div>
            <div className="absolute top-0 right-20 z-30 text-white/50 animate-float-slow delay-[1500ms]">
                <Feather size={20} />
            </div>

            {/* 
              Using a high quality placeholder that represents the "Artistic/Vector" style 
              conceptually, but displayed as a photo for the website to look premium.
            */}
            <div className="relative z-10 w-full max-w-md aspect-[3/4] rounded-t-full rounded-b-full overflow-hidden border-8 border-white shadow-2xl">
               <img 
                src="../assets/tresse-5.jpeg" 
                alt="Coiffure artistique" 
                className="w-full h-full object-cover animate-breathe"
               />
            </div>
            
            {/* Floating graphic element to mimic the logo curves */}
            <svg className="absolute -bottom-10 -right-10 w-48 h-48 text-tf-purple opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,32.4C59,43.3,47.1,52.2,34.8,60.1C22.5,68,9.8,74.9,-1.9,78.2C-13.6,81.5,-24.3,81.2,-35.4,76.1C-46.5,71,-58,61.1,-67.6,49.1C-77.2,37.1,-84.9,23,-86.8,8.1C-88.7,-6.8,-84.8,-22.5,-75.7,-35.1C-66.6,-47.7,-52.3,-57.2,-38.8,-64.7C-25.3,-72.2,-12.7,-77.7,1.6,-80.5C15.9,-83.3,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
          </Reveal>

          {/* Text Content */}
          <Reveal className="reveal--slide-right delay-150">
                <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left relative z-10">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 bg-purple-100 text-tf-purple text-xs font-bold tracking-widest uppercase rounded-full mb-2">
                Bienvenue chez Touche Finale
              </span>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif text-gray-900 leading-tight">
                Révélez votre <br/>
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-tf-purple to-purple-400 italic">
                  Beauté Unique
                  {/* Sparkles Animations */}
                  <span className="absolute -top-4 -right-6 text-yellow-400 animate-twinkle delay-0">
                     <Sparkle size={24} fill="currentColor" />
                  </span>
                  <span className="absolute -bottom-2 -left-4 text-yellow-400 animate-twinkle delay-[1000ms]">
                     <Sparkle size={16} fill="currentColor" />
                  </span>
                  <span className="absolute top-1/2 -right-10 text-tf-gold animate-twinkle delay-[500ms] opacity-60">
                     <Sparkle size={12} fill="currentColor" />
                  </span>
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Plus qu'un salon, un lieu de transformation. Coiffure, esthétique et soins sur mesure pour sublimer chaque trait de votre personnalité.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={onBook}>
                Prendre Rendez-vous
              </Button>
              <Button variant="outline" href="#services">
                Découvrir nos services
              </Button>
            </div>
          </div>
          </Reveal>

          

        </div>
      </div>
    </section>
  );
};