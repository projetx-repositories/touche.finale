import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Bridal } from './components/Bridal';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<any>(null);

  const handleBook = (service: any = null) => {
    setBookingService(service);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-purple-100 selection:text-purple-900">
      <Header />
      
      <main>
        <Hero onBook={() => handleBook()} />
        <Services onBook={(s) => handleBook(s)} />
        <Bridal />
      </main>

      <Footer />
      
      {isBookingOpen && (
        <BookingModal 
            service={bookingService} 
            onClose={() => setIsBookingOpen(false)} 
        />
      )}
    </div>
  );
};

export default App;