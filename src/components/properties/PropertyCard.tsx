
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Property, formatPrice } from '@/utils/propertyData';
import { Bed, Bath, Home, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
  className?: string;
}

const PropertyCard = ({ property, featured = false, className }: PropertyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        'property-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 animate-on-scroll',
        featured ? 'md:col-span-2' : '',
        className
      )}
    >
      <Link to={`/property/${property.id}`} className="block">
        <div className="property-image-container relative">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="property-image w-full h-64 object-cover"
          />
          
          {/* Property Type Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-real-900">
            {property.type}
          </div>
          
          {/* New Tag */}
          {property.isNew && (
            <div className="absolute top-4 right-4 bg-real-900 text-white rounded-full px-3 py-1 text-xs font-medium">
              New
            </div>
          )}
          
          {/* Price Tag */}
          <div className="absolute bottom-4 left-4 bg-white rounded-lg px-4 py-2 text-real-900 font-semibold shadow-sm">
            {formatPrice(property.price)}
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="text-xl font-semibold text-real-900 mb-1 line-clamp-1">
            {property.title}
          </h3>
          
          <div className="flex items-center text-real-500 mb-3">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="text-sm truncate">{property.address}</span>
          </div>
          
          <div className="flex flex-wrap gap-4 text-real-600 text-sm mt-4">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1 text-real-500" />
              <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
            </div>
            
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1 text-real-500" />
              <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
            </div>
            
            <div className="flex items-center">
              <Home className="w-4 h-4 mr-1 text-real-500" />
              <span>{property.squareFootage.toLocaleString()} sq ft</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
