import React, { useState, useRef } from 'react';
import { X, Calendar, MapPin, Clock, Check, ArrowRight, ChevronLeft, MessageCircle, Home, Store } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../constants';

interface SubService {
  name: string;
  price: string;
}

interface Service {
  id: number;
  title: string;
  subServices: SubService[];
  icon?: any;
}

interface BookingModalProps {
  service: Service | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ service: initialService, onClose }) => {
  const [step, setStep] = useState(initialService ? 1 : 0);
  const [activeService, setActiveService] = useState<Service | null>(initialService);
  const [selectedSubService, setSelectedSubService] = useState<SubService | null>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState<'salon' | 'domicile'>('salon');
  const [address, setAddress] = useState('');

  const today = new Date().toISOString().split('T')[0];
  const dateInputRef = useRef<HTMLInputElement>(null);
  const timeInputRef = useRef<HTMLInputElement>(null);

  const handleServiceSelect = (service: any) => {
    setActiveService(service);
    setStep(1);
  };

  const handleNext = () => {
    if (step === 1 && selectedSubService) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 1 && !initialService) {
      setStep(0);
      setActiveService(null);
      setSelectedSubService(null);
    } else {
        onClose();
    }
  };

  const handleSendToWhatsApp = () => {
    if (!activeService || !selectedSubService || !date || !time) return;
    if (location === 'domicile' && !address.trim()) return;

    const locationText = location === 'domicile' 
      ? `À Domicile 🏠\n📍 Adresse : ${address}` 
      : 'Au Salon 💇‍♀️';

    const formattedDate = new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

    const message = `
👋 Bonjour Touche Finale,

Je souhaite réserver une prestation :
✨ *${selectedSubService.name}* (${activeService.title})
💰 Prix estimé : ${selectedSubService.price}

📅 Date : ${formattedDate}
⏰ Heure : ${time}
${locationText}

Merci de confirmer ma réservation !
    `.trim();

    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  const isStep2Valid = () => {
    if (!date || !time) return false;
    if (location === 'domicile' && !address.trim()) return false;
    return true;
  };

  const triggerPicker = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      try {
        if (typeof ref.current.showPicker === 'function') {
          ref.current.showPicker();
        } else {
          ref.current.focus();
        }
      } catch (e) {
        console.log('Picker open failed, focusing instead', e);
        ref.current.focus();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fade-in-up">
        
        <div className="bg-tf-purple p-6 text-white relative shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
          >
            <X size={20} />
          </button>
          <h3 className="text-2xl font-serif italic pr-8">
              {activeService ? activeService.title : "Réserver un soin"}
          </h3>
          <p className="text-purple-200 text-sm mt-1">
              {step === 0 ? "Choisissez une catégorie" : step === 1 ? "Choisissez une prestation" : "Vos coordonnées"}
          </p>
        </div>

        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
          
          {step === 0 && (
            <div className="grid grid-cols-2 gap-3 animate-fade-in">
                {SERVICES.map((srv) => (
                    <button
                        key={srv.id}
                        onClick={() => handleServiceSelect(srv)}
                        className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-tf-purple hover:bg-purple-50 transition-all group"
                    >
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-tf-purple group-hover:bg-white group-hover:shadow-sm transition-all">
                            <srv.icon size={24} strokeWidth={1.5} />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-tf-purple text-center">{srv.title}</span>
                    </button>
                ))}
            </div>
          )}

          {step === 1 && activeService && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Choisissez votre soin :</h4>
              <div className="space-y-3">
                {activeService.subServices.map((sub, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedSubService(sub)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex justify-between items-center group ${
                      selectedSubService?.name === sub.name 
                        ? 'border-tf-purple bg-purple-50' 
                        : 'border-gray-100 hover:border-purple-200 hover:bg-gray-50'
                    }`}
                  >
                    <div>
                      <p className={`font-medium ${selectedSubService?.name === sub.name ? 'text-tf-purple' : 'text-gray-700'}`}>
                        {sub.name}
                      </p>
                      <p className="text-sm text-gray-500">{sub.price}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                      selectedSubService?.name === sub.name ? 'border-tf-purple bg-tf-purple' : 'border-gray-300'
                    }`}>
                      {selectedSubService?.name === sub.name && <Check size={12} className="text-white" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && activeService && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 flex items-start gap-3">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-tf-purple shrink-0 border border-purple-100">
                    <Check size={20} />
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Prestation choisie</p>
                    <p className="font-serif font-medium text-lg text-gray-900 leading-tight">{selectedSubService?.name}</p>
                    <p className="text-sm text-tf-purple font-bold mt-1">{selectedSubService?.price}</p>
                 </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-serif font-bold text-gray-700 mb-3">Lieu du rendez-vous</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setLocation('salon')}
                      className={`flex flex-col items-center justify-center gap-2 py-3 px-2 rounded-xl border-2 transition-all ${
                        location === 'salon' 
                          ? 'bg-white border-tf-purple text-tf-purple shadow-sm' 
                          : 'bg-gray-50 border-transparent text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      <Store size={24} strokeWidth={1.5} /> 
                      <span className="text-sm font-medium">Au Salon</span>
                    </button>
                    <button
                      onClick={() => setLocation('domicile')}
                      className={`flex flex-col items-center justify-center gap-2 py-3 px-2 rounded-xl border-2 transition-all ${
                        location === 'domicile' 
                          ? 'bg-white border-tf-purple text-tf-purple shadow-sm' 
                          : 'bg-gray-50 border-transparent text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      <Home size={24} strokeWidth={1.5} /> 
                      <span className="text-sm font-medium">À Domicile</span>
                    </button>
                  </div>
                </div>

                {location === 'domicile' && (
                  <div className="animate-fade-in">
                    <label className="block text-sm font-serif font-bold text-gray-700 mb-2">Adresse complète</label>
                    <div className="relative group">
                      <MapPin className="absolute left-3 top-3 text-gray-400 group-focus-within:text-tf-purple transition-colors" size={18} />
                      <textarea 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Quartier, rue, numéro, point de repère..."
                        className="w-full pl-10 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-tf-purple/20 focus:border-tf-purple outline-none text-sm resize-none h-24 transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="block text-sm font-serif font-bold text-gray-700 mb-2">Date</label>
                    <div 
                      className="relative group cursor-pointer"
                      onClick={() => triggerPicker(dateInputRef)}
                    >
                        <div className={`absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center z-10 pointer-events-none transition-colors ${date ? 'text-tf-purple' : 'text-gray-400'}`}>
                            <Calendar size={18} />
                        </div>
                        <div className={`w-full h-11 bg-gray-50 border rounded-xl flex items-center overflow-hidden transition-all group-hover:bg-white group-hover:border-gray-300 ${date ? 'border-tf-purple/30 bg-purple-50/30' : 'border-gray-200'}`}>
                             <input 
                                ref={dateInputRef}
                                type="date"
                                min={today} 
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full h-full pl-10 pr-3 py-0 bg-transparent border-none focus:ring-0 outline-none text-gray-700 font-medium text-sm font-sans"
                            />
                        </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="block text-sm font-serif font-bold text-gray-700 mb-2">Heure</label>
                    <div 
                      className="relative group cursor-pointer"
                      onClick={() => triggerPicker(timeInputRef)}
                    >
                        <div className={`absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center z-10 pointer-events-none transition-colors ${time ? 'text-tf-purple' : 'text-gray-400'}`}>
                            <Clock size={18} />
                        </div>
                        <div className={`w-full h-11 bg-gray-50 border rounded-xl flex items-center overflow-hidden transition-all group-hover:bg-white group-hover:border-gray-300 ${time ? 'border-tf-purple/30 bg-purple-50/30' : 'border-gray-200'}`}>
                            <input 
                                ref={timeInputRef}
                                type="time" 
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="w-full h-full pl-10 pr-3 py-0 bg-transparent border-none focus:ring-0 outline-none text-gray-700 font-medium text-sm font-sans"
                            />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        <div className="p-6 border-t border-gray-100 bg-white shrink-0 z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          {step === 1 ? (
            <div className="flex gap-3">
                {(!initialService) && (
                    <button 
                        onClick={handleBack}
                        className="px-4 py-3 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                )}
                
                <button 
                    onClick={handleNext}
                    disabled={!selectedSubService}
                    className={`flex-1 py-3.5 px-4 rounded-full flex items-center justify-center gap-2 font-medium text-sm uppercase tracking-widest transition-all transform active:scale-[0.98] ${
                        selectedSubService 
                        ? 'bg-tf-purple text-white shadow-lg shadow-purple-900/20 hover:bg-[#5a2058]' 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                >
                    Continuer <ArrowRight size={18} />
                </button>
            </div>
          ) : step === 2 ? (
            <div className="flex gap-3">
              <button 
                onClick={handleBack}
                className="px-4 py-3 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleSendToWhatsApp}
                disabled={!isStep2Valid()}
                className={`flex-1 py-3.5 px-4 rounded-full flex items-center justify-center gap-2 font-medium text-sm transition-all transform active:scale-[0.98] ${
                  isStep2Valid() 
                    ? 'bg-[#25D366] text-white shadow-lg shadow-green-600/20 hover:bg-[#20bd5a]' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                <MessageCircle size={18} />
                Réserver sur WhatsApp
              </button>
            </div>
          ) : (
              <div className="text-center">
                  <p className="text-sm text-gray-400">Veuillez sélectionner une catégorie</p>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};
