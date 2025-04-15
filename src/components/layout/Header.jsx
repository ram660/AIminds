import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: 'Technology', path: '/technology' },
    { name: 'Process & Pricing', path: '/pricing' },
    { name: 'About Us', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/assets/images/logo/aiminds-logo.svg" alt="AIminds Logo" className="h-28" />
            <span className="text-4xl font-heading font-bold -ml-6"><span className="text-secondary">AI</span><span className="text-primary">minds</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-body text-primary hover:text-secondary transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-secondary hover:bg-accent text-white px-4 py-2 rounded-md transition-colors duration-200 ml-4 font-heading font-medium"
          >
            Get Your Demo
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-primary hover:text-secondary"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="font-body text-primary hover:text-secondary transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-secondary hover:bg-accent text-white px-4 py-2 rounded-md transition-colors duration-200 font-heading font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Your Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;