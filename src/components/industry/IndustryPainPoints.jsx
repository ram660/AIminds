import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';

const IndustryPainPoints = ({ painPoints }) => {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Common Challenges in Your Industry
          </h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            These pain points are holding back your business growth and efficiency
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div 
              key={point.title}
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                  <FaExclamationTriangle className="text-red-500" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary">{point.title}</h3>
              </div>
              <p className="text-gray-600 font-body">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryPainPoints;
