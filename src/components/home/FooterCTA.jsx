import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FooterCTA = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl font-body text-white/90 max-w-3xl mx-auto mb-8">
            Take the first step toward automating your business operations and enhancing customer experience with a personalized AI assistant.
          </p>
          <Link 
            to="/contact" 
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md transition-colors duration-200 inline-block font-heading font-medium text-lg"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterCTA;
