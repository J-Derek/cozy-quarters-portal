
import React, { useState, useEffect } from 'react';
import { Property, formatPrice } from '@/utils/propertyData';
import { Bed, Bath, Home, MapPin, Mail, Phone, Heart } from 'lucide-react';
import Button from '../common/Button';

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail = ({ property }: PropertyDetailProps) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Property Header */}
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-real-900 mb-2 animate-fade-in">
              {property.title}
            </h1>
            <div className="flex items-center text-real-600 animate-fade-in">
              <MapPin className="w-5 h-5 mr-1" />
              <span>{property.address}</span>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="text-2xl md:text-3xl font-bold text-real-900">
              {formatPrice(property.price)}
            </div>
          </div>
        </div>
        
        {/* Property Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-12">
          <div className="md:col-span-8 relative overflow-hidden rounded-xl animate-fade-in">
            <img 
              src={property.images[activeImage]} 
              alt={property.title}
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 transform hover:scale-105"
            />
          </div>
          
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4 animate-fade-in">
            {property.images.slice(1, 3).map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-xl h-48 md:h-[240px] cursor-pointer"
                onClick={() => setActiveImage(index + 1)}
              >
                <img 
                  src={image} 
                  alt={`${property.title} ${index + 2}`}
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Thumbnail Selection */}
        <div className="flex space-x-2 mb-12 overflow-x-auto pb-2 animate-fade-in">
          {property.images.map((image, index) => (
            <div 
              key={index}
              className={`relative cursor-pointer overflow-hidden rounded-lg transition-all ${
                activeImage === index ? 'ring-2 ring-real-900' : 'opacity-70'
              }`}
              onClick={() => setActiveImage(index)}
            >
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`}
                className="w-24 h-16 object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 animate-fade-in">
            <h2 className="text-2xl font-bold text-real-900 mb-6">
              Property Details
            </h2>
            
            <div className="flex flex-wrap gap-6 mb-8 border-b border-real-200 pb-8">
              <div className="flex items-center">
                <Bed className="w-5 h-5 mr-2 text-real-500" />
                <div>
                  <div className="text-real-900 font-medium">{property.bedrooms}</div>
                  <div className="text-real-500 text-sm">Bedrooms</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Bath className="w-5 h-5 mr-2 text-real-500" />
                <div>
                  <div className="text-real-900 font-medium">{property.bathrooms}</div>
                  <div className="text-real-500 text-sm">Bathrooms</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Home className="w-5 h-5 mr-2 text-real-500" />
                <div>
                  <div className="text-real-900 font-medium">{property.squareFootage.toLocaleString()}</div>
                  <div className="text-real-500 text-sm">Sq Ft</div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-real-900 mb-4">
              Description
            </h3>
            <p className="text-real-600 mb-8 whitespace-pre-line">
              {property.description}
            </p>
            
            <h3 className="text-xl font-semibold text-real-900 mb-4">
              Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-8">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-real-900 rounded-full mr-2"></div>
                  <span className="text-real-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1 animate-fade-in">
            <div className="bg-real-50 rounded-xl p-6 border border-real-100 sticky top-24">
              <h3 className="text-xl font-semibold text-real-900 mb-4">
                Contact Agent
              </h3>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-real-200 mr-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=120&q=80"
                    alt="Agent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-real-900 font-medium">Sarah Johnson</div>
                  <div className="text-real-500 text-sm">Luxury Property Specialist</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-real-500" />
                  <a href="tel:+15555555555" className="text-real-600 hover:text-real-900">
                    (555) 555-5555
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-real-500" />
                  <a href="mailto:sarah@estate.com" className="text-real-600 hover:text-real-900">
                    sarah@estate.com
                  </a>
                </div>
              </div>
              
              {isContactFormVisible ? (
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-real-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="input-field w-full"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-real-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input-field w-full"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-real-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="input-field w-full"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-real-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="input-field w-full"
                      placeholder="I'm interested in this property..."
                      required
                    ></textarea>
                  </div>
                  
                  <Button variant="primary" className="w-full">
                    Send Message
                  </Button>
                </form>
              ) : (
                <div className="space-y-4">
                  <Button 
                    variant="primary" 
                    className="w-full"
                    onClick={() => setIsContactFormVisible(true)}
                  >
                    Request Information
                  </Button>
                  
                  <Button 
                    variant="secondary" 
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Heart className="w-4 h-4" />
                    Save Property
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
