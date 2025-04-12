import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TechnologyCTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl font-body text-white/90 max-w-3xl mx-auto mb-8">
            Our team of AI experts will help you design and implement the perfect AI assistant for your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md transition-colors duration-200 inline-block font-heading font-medium text-lg"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/pricing" 
              className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-md transition-colors duration-200 inline-block font-heading font-medium text-lg"
            >
              View Pricing Options
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyCTA;
