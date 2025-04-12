import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PricingCTA = () => {
  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl font-body text-white/90 max-w-3xl mx-auto mb-8">
            Contact our team to discuss your specific requirements and find the perfect AI solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md transition-colors duration-200 inline-block font-heading font-medium text-lg"
            >
              Schedule a Consultation
            </Link>
            <a 
              href="#calculator" 
              className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-md transition-colors duration-200 inline-block font-heading font-medium text-lg"
            >
              Calculate Your ROI
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCTA;
