
import React, { useEffect, useRef } from 'react';
import { getFeaturedProperties } from '@/utils/propertyData';
import PropertyCard from '../properties/PropertyCard';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

const FeaturedProperties = () => {
  const featuredProperties = getFeaturedProperties();
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

    const titleElement = sectionRef.current?.querySelector('.section-title');
    if (titleElement) {
      observer.observe(titleElement);
    }

    return () => {
      if (titleElement) {
        observer.unobserve(titleElement);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-real-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-real-100 text-real-900 text-xs font-medium tracking-wide mb-4 animate-on-scroll section-title">
            FEATURED PROPERTIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-real-900 leading-tight animate-on-scroll section-title">
            Our Handpicked Properties
          </h2>
          <p className="max-w-2xl mx-auto text-real-600 mt-4 animate-on-scroll section-title">
            Discover exceptional properties selected for their premium locations, innovative design, and remarkable features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              featured={property.id === '1'}
            />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => navigate('/properties')}
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
