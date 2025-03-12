
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PropertyDetailComponent from '@/components/properties/PropertyDetail';
import PropertyCard from '@/components/properties/PropertyCard';
import { getPropertyById, properties } from '@/utils/propertyData';
import Button from '@/components/common/Button';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const property = getPropertyById(id || '');
  
  // Get similar properties (exclude current and limit to 3)
  const similarProperties = property
    ? properties
        .filter(p => p.id !== property.id && p.type === property.type)
        .slice(0, 3)
    : [];

  useEffect(() => {
    if (!property) {
      navigate('/properties');
    }
  }, [property, navigate]);

  useEffect(() => {
    // Initialize intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      // Clean up
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  if (!property) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <PropertyDetailComponent property={property} />
        
        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <section className="py-16 bg-real-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-real-900 mb-8 animate-on-scroll">
                Similar Properties
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {similarProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
              
              <div className="text-center animate-on-scroll">
                <Button
                  variant="secondary"
                  onClick={() => navigate('/properties')}
                >
                  View All Properties
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
