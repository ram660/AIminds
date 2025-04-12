import React from 'react';
import { motion } from 'framer-motion';
import { FaComments, FaClipboardCheck, FaCogs, FaRocket, FaChartLine } from 'react-icons/fa';

const processSteps = [
  {
    icon: <FaComments className="text-4xl text-secondary" />,
    title: 'Initial Consultation',
    description: 'We start with a detailed consultation to understand your business needs, challenges, and goals.',
    timeframe: 'Week 1'
  },
  {
    icon: <FaClipboardCheck className="text-4xl text-secondary" />,
    title: 'Requirements Analysis',
    description: 'Our team analyzes your requirements and designs a customized AI solution for your business.',
    timeframe: 'Week 1-2'
  },
  {
    icon: <FaCogs className="text-4xl text-secondary" />,
    title: 'Development & Customization',
    description: 'We develop and customize your AI assistant, integrating it with your existing systems.',
    timeframe: 'Week 2-4'
  },
  {
    icon: <FaRocket className="text-4xl text-secondary" />,
    title: 'Deployment & Training',
    description: 'We deploy your AI assistant and provide training for your team on how to use and manage it.',
    timeframe: 'Week 4-5'
  },
  {
    icon: <FaChartLine className="text-4xl text-secondary" />,
    title: 'Ongoing Support & Optimization',
    description: 'We provide ongoing support and continuously optimize your AI assistant based on performance data.',
    timeframe: 'Ongoing'
  }
];

const PricingProcess = () => {
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Implementation Process</h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            A streamlined approach to getting your AI assistant up and running quickly
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.title}
              className="flex flex-col md:flex-row items-center md:items-start mb-12 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="md:w-1/4 flex flex-col items-center mb-4 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-light flex items-center justify-center mb-2">
                  {step.icon}
                </div>
                <div className="bg-secondary text-white text-sm font-medium px-3 py-1 rounded-full">
                  {step.timeframe}
                </div>
              </div>
              
              <div className="md:w-3/4 md:pl-6">
                <h3 className="text-xl font-heading font-bold text-primary mb-2 text-center md:text-left">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-body text-center md:text-left">
                  {step.description}
                </p>
              </div>
              
              {/* Connector line */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute left-1/4 transform -translate-x-1/2 mt-16 h-12 border-l-2 border-dashed border-gray-300"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingProcess;
