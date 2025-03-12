
import React, { useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import Button from '../common/Button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      const heroImg = heroRef.current.querySelector('.hero-bg') as HTMLElement;
      const heroContent = heroRef.current.querySelector('.hero-content') as HTMLElement;
      
      if (heroImg && scrolled < window.innerHeight) {
        heroImg.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
      
      if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
        heroContent.style.opacity = `${1 - (scrolled * 1.5) / window.innerHeight}`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const propertyTypes = ['Apartment', 'House', 'Villa', 'Commercial'];

  return (
    <div 
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-real-900"
    >
      {/* Hero Background */}
      <div 
        className="hero-bg absolute inset-0 w-full h-full bg-cover bg-center opacity-60 image-mask"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80)' 
        }}
      />
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 relative h-full flex flex-col justify-center items-center text-center hero-content pt-16">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-medium tracking-wide mb-4 animate-fade-in">
          REDEFINING LUXURY LIVING
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mb-5 animate-fade-in">
          Find Your Dream Home in Perfect Location
        </h1>
        <p className="text-white/80 max-w-2xl mb-8 text-lg md:text-xl animate-fade-in">
          Discover exceptional properties curated for the most discerning clients, combining premium locations with unmatched architectural design.
        </p>
        
        {/* Search Box */}
        <div className="w-full max-w-4xl bg-white rounded-lg p-1 mt-6 shadow-xl animate-fade-in">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-3">
              <div className="text-left mb-1 text-xs font-medium text-real-500">Location</div>
              <input 
                type="text" 
                placeholder="City, neighborhood or address"
                className="w-full outline-none text-real-900 text-lg placeholder:text-real-300"
              />
            </div>
            
            <div className="flex-1 p-3 border-t md:border-t-0 md:border-l border-real-100">
              <div className="text-left mb-1 text-xs font-medium text-real-500">Property Type</div>
              <select className="w-full outline-none text-real-900 text-lg appearance-none bg-transparent">
                <option value="">Any Type</option>
                {propertyTypes.map(type => (
                  <option key={type} value={type.toLowerCase()}>{type}</option>
                ))}
              </select>
            </div>
            
            <div className="p-1 self-center mt-2 md:mt-0">
              <Button 
                className="!rounded-md !py-4 !px-10 flex items-center gap-2 bg-real-900 hover:bg-real-800"
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-xs mb-2 opacity-80">Scroll Down</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-white to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
