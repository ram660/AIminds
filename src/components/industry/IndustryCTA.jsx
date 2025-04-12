import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ctaContent = {
  'real-estate': {
    headline: 'Ready to Transform Your Real Estate Business?',
    subheadline: 'Get a personalized AI assistant that handles lead qualification, property matching, and administrative tasks.',
    buttonText: 'Get Your Real Estate AI Assistant'
  },
  'education': {
    headline: 'Ready to Streamline Your Educational Institution?',
    subheadline: 'Get a personalized AI assistant that handles enrollment inquiries, scheduling, and administrative tasks.',
    buttonText: 'Get Your Education AI Assistant'
  },
  'coaching': {
    headline: 'Ready to Enhance Your Coaching Practice?',
    subheadline: 'Get a personalized AI assistant that handles scheduling, client follow-ups, and resource delivery.',
    buttonText: 'Get Your Coaching AI Assistant'
  },
  'healthcare': {
    headline: 'Ready to Optimize Your Healthcare Practice?',
    subheadline: 'Get a personalized AI assistant that handles appointments, patient follow-ups, and administrative tasks.',
    buttonText: 'Get Your Healthcare AI Assistant'
  },
  'food': {
    headline: 'Ready to Elevate Your Food Establishment?',
    subheadline: 'Get a personalized AI assistant that handles reservations, orders, and customer engagement.',
    buttonText: 'Get Your Restaurant AI Assistant'
  },
  'other': {
    headline: 'Ready to Transform Your Business?',
    subheadline: 'Get a personalized AI assistant tailored to your specific business needs and challenges.',
    buttonText: 'Get Your Custom AI Assistant'
  }
};

const IndustryCTA = ({ industry }) => {
  const content = ctaContent[industry] || ctaContent['other'];
  
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
            {content.headline}
          </h2>
          <p className="text-xl font-body text-white/90 max-w-3xl mx-auto mb-8">
            {content.subheadline}
          </p>
          <Link 
            to="/contact" 
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md transition-colors duration-200 inline-block font-heading font-medium text-lg"
          >
            {content.buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryCTA;
