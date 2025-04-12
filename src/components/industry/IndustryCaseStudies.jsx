import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaCheckCircle } from 'react-icons/fa';

const IndustryCaseStudies = ({ caseStudy }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Success Stories
          </h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            Real results from businesses like yours
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-light rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex">
            <div className="md:w-2/5 bg-primary p-6 flex items-center justify-center">
              <div className="text-center text-white">
                <FaChartLine className="text-6xl mb-4 mx-auto text-secondary" />
                <h3 className="text-2xl font-heading font-bold mb-2">Case Study</h3>
                <p className="font-body">Measurable results and ROI</p>
              </div>
            </div>
            
            <div className="md:w-3/5 p-6">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                {caseStudy.title}
              </h3>
              <p className="text-gray-600 font-body mb-6">
                {caseStudy.description}
              </p>
              
              <h4 className="text-lg font-heading font-semibold text-primary mb-3">Key Results:</h4>
              <ul className="space-y-2">
                {caseStudy.results.map((result, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <FaCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                    <span className="font-body text-gray-700">{result}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryCaseStudies;
