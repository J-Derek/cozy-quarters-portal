
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedProperties from '@/components/home/FeaturedProperties';
import AboutSection from '@/components/home/AboutSection';

const Index = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProperties />
        <AboutSection />
        
        {/* Call-to-Action Section */}
        <section className="py-20 bg-real-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Ready to Find Your Dream Home?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-real-300 animate-on-scroll">
              Let us guide you through the process and find the perfect property that meets all your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
              <a 
                href="/properties" 
                className="inline-flex h-12 items-center justify-center rounded-md bg-white text-real-900 px-8 text-sm font-medium shadow hover:bg-real-100 transition-colors"
              >
                Browse Properties
              </a>
              <a 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 bg-transparent px-8 text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
