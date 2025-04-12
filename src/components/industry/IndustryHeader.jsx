import React from 'react';
import { motion } from 'framer-motion';

const industryImages = {
  'real-estate': '/assets/images/industries/real-estate.jpg',
  'education': '/assets/images/industries/education.jpg',
  'coaching': '/assets/images/industries/coaching.jpg',
  'healthcare': '/assets/images/industries/healthcare.jpg',
  'food': '/assets/images/industries/food.jpg',
  'other': '/assets/images/industries/other.jpg'
};

const IndustryHeader = ({ title, subtitle, industry }) => {
  const bgImage = industryImages[industry] || industryImages['other'];
  
  return (
    <section className="relative py-20 bg-primary">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 z-10"></div>
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          className="text-center text-white max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl font-body mb-8 text-white/90">
            {subtitle}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="#demo" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md transition-colors duration-200 inline-block font-heading font-medium text-lg mr-4"
            >
              See Demo
            </a>
            <a 
              href="#contact" 
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-md transition-colors duration-200 inline-block font-heading font-medium text-lg"
            >
              Get Started
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryHeader;
