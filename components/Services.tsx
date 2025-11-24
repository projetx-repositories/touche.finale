import React, { useState, useEffect } from 'react';
import { SERVICES } from '../constants';
import Reveal from './Reveal';

export const Services: React.FC<{ onBook: (service: any) => void }> = ({ onBook }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000); // Change every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="services" className="py-20 bg-pink-100 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="reveal--slide-up delay-150">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-tf-gold text-sm tracking-[0.3em] uppercase mb-4 block font-medium">Notre Savoir-Faire</span>
            <h3 className="text-5xl font-serif italic text-gray-900 mb-6">Carte des Soins</h3>
            <div className="w-24 h-px bg-tf-purple mx-auto mb-6"></div>
            <p className="text-gray-500 font-light leading-relaxed">
              Une expérience beauté unique. Cliquez sur une prestation pour réserver.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => {
            return (
              <Reveal key={service.id} delay={index * 120} className="reveal--zoom">
                <div 
                  onClick={() => onBook(service)}
                  className="group relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl border-4 border-white bg-gray-100 cursor-pointer"
                >
                {/* Images Layer with Crossfade */}
                {service.images.map((img, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img 
                            src={`../${img}`} 
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                        />
                        {/* Fine overlay specifically for the image to harmonize colors */}
                        <div className="absolute inset-0 bg-tf-purple/10 mix-blend-overlay"></div>
                    </div>
                ))}

                {/* Artistic "Inner Frame" Border - gives the gallery look */}
                <div className="absolute inset-3 border border-white/40 rounded-[2rem] z-10 pointer-events-none"></div>

                {/* Content Overlay - Glassmorphism style */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20">
                    <div className="absolute bottom-0 left-0 w-full p-6 pb-8 flex flex-col items-center text-center">
                        
                        {/* Icon Circle */}
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white mb-4 shadow-lg transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:bg-tf-gold/80">
                            <service.icon size={22} strokeWidth={1} />
                        </div>

                        {/* Title & Line */}
                        <h4 className="text-3xl font-serif italic text-white mb-2 drop-shadow-md">
                            {service.title}
                        </h4>
                        <div className="w-8 h-0.5 bg-tf-gold mb-4 opacity-90"></div>

                        {/* Description */}
                        <p className="text-gray-200 text-sm mb-5 font-light px-4 line-clamp-2">
                            {service.description}
                        </p>

                        {/* Action hint - Always visible now */}
                        <div className="transition-opacity duration-300">
                            <span className="px-10 py-3 bg-white backdrop-blur-md text-tf-purple font-semibold text-xs uppercase tracking-widest rounded-full border border-white/30 hover:bg-tf-purple hover:text-white transition-colors">
                                Réserver
                            </span>
                        </div>
                    </div>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
