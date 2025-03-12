
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PropertyCard from '@/components/properties/PropertyCard';
import { properties, Property } from '@/utils/propertyData';
import { Search, Filter } from 'lucide-react';
import Button from '@/components/common/Button';

const Properties = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
  });
  const [isFilterVisible, setIsFilterVisible] = useState(false);

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

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let result = [...properties];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (property) =>
          property.title.toLowerCase().includes(searchLower) ||
          property.address.toLowerCase().includes(searchLower) ||
          property.description.toLowerCase().includes(searchLower)
      );
    }

    // Type filter
    if (filters.type) {
      result = result.filter((property) => property.type === filters.type);
    }

    // Price range
    if (filters.minPrice) {
      result = result.filter(
        (property) => property.price >= parseInt(filters.minPrice)
      );
    }
    if (filters.maxPrice) {
      result = result.filter(
        (property) => property.price <= parseInt(filters.maxPrice)
      );
    }

    // Bedrooms
    if (filters.bedrooms) {
      result = result.filter(
        (property) => property.bedrooms >= parseInt(filters.bedrooms)
      );
    }

    // Bathrooms
    if (filters.bathrooms) {
      result = result.filter(
        (property) => property.bathrooms >= parseInt(filters.bathrooms)
      );
    }

    setFilteredProperties(result);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setFilters({
      search: '',
      type: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      bathrooms: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-real-900 mb-4 animate-fade-in">
              Browse Properties
            </h1>
            <p className="max-w-xl mx-auto text-real-600 animate-fade-in">
              Explore our carefully curated selection of premium properties available for sale.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-12 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <input
                  type="text"
                  name="search"
                  value={filters.search}
                  onChange={handleFilterChange}
                  placeholder="Search by location, property name, or features..."
                  className="input-field pl-10 w-full"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-real-400 w-5 h-5" />
              </div>
              
              <Button
                variant="secondary"
                className="md:w-auto"
                onClick={() => setIsFilterVisible(!isFilterVisible)}
              >
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </Button>
            </div>
            
            {/* Advanced Filters */}
            <div className={`bg-white border border-real-200 rounded-lg p-6 mb-6 transition-all duration-300 ${
              isFilterVisible ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-real-700 mb-1">
                    Property Type
                  </label>
                  <select
                    name="type"
                    value={filters.type}
                    onChange={handleFilterChange}
                    className="input-field w-full"
                  >
                    <option value="">Any Type</option>
                    {['Apartment', 'House', 'Villa', 'Commercial'].map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-real-700 mb-1">
                    Price Range
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      name="minPrice"
                      value={filters.minPrice}
                      onChange={handleFilterChange}
                      placeholder="Min"
                      className="input-field w-full"
                    />
                    <span className="text-real-500">-</span>
                    <input
                      type="number"
                      name="maxPrice"
                      value={filters.maxPrice}
                      onChange={handleFilterChange}
                      placeholder="Max"
                      className="input-field w-full"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-real-700 mb-1">
                      Bedrooms
                    </label>
                    <select
                      name="bedrooms"
                      value={filters.bedrooms}
                      onChange={handleFilterChange}
                      className="input-field w-full"
                    >
                      <option value="">Any</option>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num}+
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-real-700 mb-1">
                      Bathrooms
                    </label>
                    <select
                      name="bathrooms"
                      value={filters.bathrooms}
                      onChange={handleFilterChange}
                      className="input-field w-full"
                    >
                      <option value="">Any</option>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}+
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <Button
                  variant="secondary"
                  className="mr-2"
                  onClick={resetFilters}
                >
                  Reset
                </Button>
                <Button
                  variant="primary"
                  onClick={applyFilters}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
            
            {/* Results Count */}
            <div className="text-real-600">
              Showing {filteredProperties.length} properties
            </div>
          </div>
          
          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <div className="text-real-400 text-4xl mb-4">¯\_(ツ)_/¯</div>
                <h3 className="text-xl font-medium text-real-800 mb-2">No properties found</h3>
                <p className="text-real-600 mb-6">
                  Try adjusting your search criteria to find more properties.
                </p>
                <Button variant="secondary" onClick={resetFilters}>
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Properties;
