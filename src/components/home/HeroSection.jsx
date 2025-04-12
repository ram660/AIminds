import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              AIminds.ai: Empowering Local Businesses with Personalized AI Assistants
            </motion.h1>
            <motion.p 
              className="text-xl font-body mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Boost productivity, enhance customer experience, and grow your business with custom AI solutions designed specifically for your industry needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                to="/contact" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md transition-colors duration-200 inline-block font-heading font-medium text-lg"
              >
                Get Your Custom AI Demo
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div 
              className="bg-secondary/10 rounded-lg p-8 flex items-center justify-center h-80"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Placeholder for abstract AI animation */}
              <div className="text-center">
                <div className="w-40 h-40 mx-auto bg-secondary/30 rounded-full flex items-center justify-center">
                  <span className="text-5xl font-bold">AI</span>
                </div>
                <p className="mt-4 text-secondary font-medium">Intelligent. Personalized. Efficient.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
