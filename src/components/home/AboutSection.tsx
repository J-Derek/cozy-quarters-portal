
import React, { useEffect, useRef } from 'react';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    if (elements) {
      elements.forEach(el => observer.observe(el));
    }

    return () => {
      if (elements) {
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury Property" 
                className="rounded-xl w-full h-auto max-w-lg object-cover shadow-xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 z-0 w-full h-full border-2 border-real-200 rounded-xl animate-on-scroll"></div>
            
            <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg max-w-xs animate-on-scroll">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-real-600 text-sm">Since 2005</span>
              </div>
              <h3 className="text-real-900 font-bold text-xl mb-1">$2.5B+</h3>
              <p className="text-real-600 text-sm">Properties sold across California</p>
            </div>
          </div>
          
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-real-100 text-real-900 text-xs font-medium tracking-wide mb-4 animate-on-scroll">
              ABOUT ESTATE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-real-900 leading-tight mb-5 animate-on-scroll">
              We're Setting New Standards in Luxury Real Estate
            </h2>
            <p className="text-real-600 mb-5 animate-on-scroll">
              With over 20 years of experience in the luxury real estate market, ESTATE has established itself as the premier agency for discerning clients seeking exceptional properties. Our dedicated team combines deep local knowledge with a global perspective to deliver unmatched service.
            </p>

            <div className="grid grid-cols-2 gap-6 my-8 animate-on-scroll">
              <div className="border-l-2 border-real-900 pl-4">
                <h3 className="text-real-900 font-bold text-xl mb-1">300+</h3>
                <p className="text-real-600">Happy Clients</p>
              </div>
              <div className="border-l-2 border-real-900 pl-4">
                <h3 className="text-real-900 font-bold text-xl mb-1">150+</h3>
                <p className="text-real-600">Properties Sold</p>
              </div>
              <div className="border-l-2 border-real-900 pl-4">
                <h3 className="text-real-900 font-bold text-xl mb-1">15+</h3>
                <p className="text-real-600">Years Experience</p>
              </div>
              <div className="border-l-2 border-real-900 pl-4">
                <h3 className="text-real-900 font-bold text-xl mb-1">24/7</h3>
                <p className="text-real-600">Client Support</p>
              </div>
            </div>
            
            <Button 
              variant="primary" 
              onClick={() => navigate('/about')}
              className="animate-on-scroll"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
