import React from 'react';
import { Button } from './Button';
import { CONTACT_INFO } from '../constants';

export const Bridal: React.FC = () => {
  const message = encodeURIComponent("Bonjour, je souhaite des informations pour un mariage.");
  
  return (
    <section id="mariage" className="py-24 bg-purple-900/85 text-white overflow-hidden relative scroll-mt-20">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 bg-black/45">
             <img 
                src="./assets/mariage.jpeg"
                alt="Mariage"
                className="w-full h-full object-cover opacity-20 bg-black mix-blend-overlay"
             />
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-serif mb-6">
              Sublimez votre <br/> Jour J
            </h2>
            <p className="text-purple-100 text-lg mb-8 leading-relaxed">
              Pour votre mariage ou vos grandes cérémonies, nous créons un look sur mesure qui vous ressemble. De la préparation de votre peau jusqu'à la touche finale de votre coiffure et maquillage.
            </p>
            <div className="flex flex-col gap-4 text-left mb-8">
                <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-lg">1</div>
                    <div>
                        <h4 className="font-serif text-xl mb-1">Essai Coiffure & Maquillage</h4>
                        <p className="text-sm text-purple-200">Pour garantir votre tranquillité d'esprit.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-lg">2</div>
                    <div>
                        <h4 className="font-serif text-xl mb-1">Accompagnement Complet</h4>
                        <p className="text-sm text-purple-200">Nous nous déplaçons ou privatisons l'espace.</p>
                    </div>
                </div>
            </div>
            <Button variant="white" href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`}>
              Devis Personnalisé
            </Button>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img 
                src="assets/manucure-1.jpeg" 
                alt="Maquillage mariée" 
                className="rounded-2xl translate-y-8 ratio shadow-2xl"
            />
            <img 
                src="assets/tresse-2.jpeg" 
                alt="Coiffure mariée" 
                className="rounded-2xl -translate-y-8 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};