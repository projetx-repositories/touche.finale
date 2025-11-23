import React from 'react';
import { Logo } from './Logo';
import { MapPin, Phone, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-50 pt-20 pb-10 border-t border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-500 leading-relaxed">
              Votre destination beauté à Brazzaville. Nous révélons votre élégance naturelle avec des soins experts et une touche artistique unique.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-bold text-gray-900">Nous Contacter</h4>
            <div className="space-y-4">
              <a href={CONTACT_INFO.mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 text-gray-600 hover:text-tf-purple transition-colors">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-tf-purple" />
                <span>{CONTACT_INFO.address}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-600">
                <Phone className="w-5 h-5 flex-shrink-0 mt-1 text-tf-purple" />
                <div className="flex flex-col">
                  <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-tf-purple transition-colors">{CONTACT_INFO.displayPhone} (WhatsApp)</a>
                  <a href={`tel:${CONTACT_INFO.altPhone1.replace(/\s/g, '')}`} className="hover:text-tf-purple transition-colors">{CONTACT_INFO.altPhone1}</a>
                  <a href={`tel:${CONTACT_INFO.altPhone2.replace(/\s/g, '')}`} className="hover:text-tf-purple transition-colors">{CONTACT_INFO.altPhone2}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-bold text-gray-900">Horaires</h4>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between items-center border-b border-gray-200 py-2">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Lundi - Samedi</span>
                <span>09:00 - 19:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 py-2 text-gray-400">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Dimanche</span>
                <span>Sur RDV uniquement</span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Touche Finale. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};