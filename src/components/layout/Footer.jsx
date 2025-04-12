import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-heading font-bold flex items-center mb-4">
              <span className="text-secondary">AI</span>minds<span className="text-accent">.ai</span>
            </Link>
            <p className="font-body mb-4">
              Empowering local businesses with personalized AI assistants to boost productivity and enhance customer experience.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com/aiminds" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="w-6 h-6 text-secondary hover:text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/aiminds" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="w-6 h-6 text-secondary hover:text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://facebook.com/aiminds" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-6 h-6 text-secondary hover:text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body">
              <li><Link to="/" className="hover:text-secondary transition-colors duration-200">Home</Link></li>
              <li><Link to="/industries" className="hover:text-secondary transition-colors duration-200">Industries</Link></li>
              <li><Link to="/technology" className="hover:text-secondary transition-colors duration-200">Technology</Link></li>
              <li><Link to="/pricing" className="hover:text-secondary transition-colors duration-200">Process & Pricing</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors duration-200">About Us</Link></li>
              <li><Link to="/resources" className="hover:text-secondary transition-colors duration-200">Resources</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Industries</h3>
            <ul className="space-y-2 font-body">
              <li><Link to="/industries/real-estate" className="hover:text-secondary transition-colors duration-200">Real Estate</Link></li>
              <li><Link to="/industries/education" className="hover:text-secondary transition-colors duration-200">Education</Link></li>
              <li><Link to="/industries/coaching" className="hover:text-secondary transition-colors duration-200">Coaching</Link></li>
              <li><Link to="/industries/healthcare" className="hover:text-secondary transition-colors duration-200">Healthcare</Link></li>
              <li><Link to="/industries/food" className="hover:text-secondary transition-colors duration-200">Food Establishments</Link></li>
              <li><Link to="/industries/other" className="hover:text-secondary transition-colors duration-200">Other Professionals</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4">Contact Us</h3>
            <p className="font-body mb-2">Email: info@aiminds.ai</p>
            <p className="font-body mb-4">Phone: (555) 123-4567</p>
            <Link 
              to="/contact" 
              className="bg-secondary hover:bg-accent text-white px-4 py-2 rounded-md transition-colors duration-200 inline-block font-heading font-medium"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center font-body">
          <p>&copy; {currentYear} AIminds.ai. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-secondary transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-secondary transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;