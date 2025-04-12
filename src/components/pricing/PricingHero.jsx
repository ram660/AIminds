import React from 'react';
import { motion } from 'framer-motion';

const PricingHero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Process & Pricing
        </motion.h1>
        <motion.p 
          className="text-xl font-body mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Transparent pricing and a streamlined process for implementing your personalized AI assistant
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#calculator" 
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-md transition-colors duration-200 inline-block font-heading font-medium text-lg"
          >
            Calculate Your ROI
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;
