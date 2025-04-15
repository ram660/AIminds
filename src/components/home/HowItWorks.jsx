import React from 'react';
import { motion } from 'framer-motion';
import { FaComments, FaTools, FaPlug, FaHeadset } from 'react-icons/fa';
import GlassCard from '../shared/GlassCard';

const steps = [
  {
    icon: <FaComments className="text-4xl text-secondary" />,
    title: 'Consultation',
    description: 'We start with a detailed consultation to understand your business needs and challenges.'
  },
  {
    icon: <FaTools className="text-4xl text-secondary" />,
    title: 'Customization',
    description: 'Our team designs a personalized AI assistant tailored to your specific industry requirements.'
  },
  {
    icon: <FaPlug className="text-4xl text-secondary" />,
    title: 'Integration',
    description: 'We seamlessly integrate the AI assistant with your existing systems and workflows.'
  },
  {
    icon: <FaHeadset className="text-4xl text-secondary" />,
    title: 'Support',
    description: 'Ongoing support and optimization to ensure your AI assistant evolves with your business.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-24 h-24 bg-white/5 rounded-full blur-md"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-md"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How It Works</h2>
          <p className="text-lg font-body max-w-3xl mx-auto">
            Our streamlined process makes implementing AI in your business simple and effective
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center items-center w-16 h-16 bg-primary/80 rounded-full mb-4 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-center">{step.title}</h3>
                <p className="text-white/80 font-body text-center">{step.description}</p>
              </GlassCard>

              {/* Arrow connecting steps (except for the last one) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
