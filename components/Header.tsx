import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [_isScrolled, _setIsScrolled] = useState(false);


  // Handle scroll for header transparency/blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const _handleScroll = () => {
      _setIsScrolled(window.scrollY > 600);
    };
    window.addEventListener('scroll', _handleScroll);
    return () => window.removeEventListener('scroll', _handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${ _isScrolled ? 'py-8' : 'py-12'} ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md ' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative">
          {/* Logo - we position it absolutely so we can animate it from left to center */}
          <a
            href="#"
            className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-out z-50 ${isScrolled ? 'left-1/2 -translate-x-1/2' : 'left-4 -translate-x-0'}`}
            aria-label="Touche Finale - Accueil"
          >
            <Logo variant="dark" isScrolled={isScrolled} />
          </a>

          {/* Menu supprimé comme demandé */}
        </div>
      </div>
    </header>
  );
};