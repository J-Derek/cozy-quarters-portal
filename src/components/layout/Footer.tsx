
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-real-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1">
            <h2 className="text-xl font-medium mb-4">ESTATE<span className="text-real-400">.</span></h2>
            <p className="text-real-300 mb-6 max-w-xs">
              Premium real estate services with a focus on luxury properties and exceptional client experience.
            </p>
            <div className="flex items-center space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href={`https://${social}.com`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-real-800 flex items-center justify-center transition-colors hover:bg-real-700"
                >
                  <span className="sr-only">{social}</span>
                  {/* Simplified social icon */}
                  <div className="w-4 h-4 bg-white/80 rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-medium uppercase tracking-wide mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Properties', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-real-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-medium uppercase tracking-wide mb-4">Explore</h3>
            <ul className="space-y-3">
              {[
                'Privacy Policy', 
                'Terms of Service', 
                'Careers', 
                'Blog'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    to="#"
                    className="text-real-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-medium uppercase tracking-wide mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-real-400 mr-3 mt-0.5" />
                <span className="text-real-300">123 Luxury Lane, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-real-400 mr-3" />
                <a href="tel:+15555555555" className="text-real-300 hover:text-white transition-colors">
                  +1 (555) 555-5555
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-real-400 mr-3" />
                <a href="mailto:info@estate.com" className="text-real-300 hover:text-white transition-colors">
                  info@estate.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-real-800 text-center">
          <p className="text-real-400 text-sm">
            © {new Date().getFullYear()} ESTATE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
