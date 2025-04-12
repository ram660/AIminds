import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaGraduationCap, FaUserTie, FaHeartbeat, FaUtensils, FaBriefcase } from 'react-icons/fa';

const industries = [
  {
    name: 'Real Estate',
    icon: <FaHome className="text-4xl mb-4 text-secondary" />,
    path: '/industries/real-estate',
    description: 'Automate client follow-ups and property matching'
  },
  {
    name: 'Education',
    icon: <FaGraduationCap className="text-4xl mb-4 text-secondary" />,
    path: '/industries/education',
    description: 'Streamline student inquiries and administrative tasks'
  },
  {
    name: 'Coaching',
    icon: <FaUserTie className="text-4xl mb-4 text-secondary" />,
    path: '/industries/coaching',
    description: 'Enhance client engagement and session scheduling'
  },
  {
    name: 'Healthcare',
    icon: <FaHeartbeat className="text-4xl mb-4 text-secondary" />,
    path: '/industries/healthcare',
    description: 'Simplify appointment booking and patient follow-ups'
  },
  {
    name: 'Food Establishments',
    icon: <FaUtensils className="text-4xl mb-4 text-secondary" />,
    path: '/industries/food',
    description: 'Optimize ordering and reservation management'
  },
  {
    name: 'Other Professionals',
    icon: <FaBriefcase className="text-4xl mb-4 text-secondary" />,
    path: '/industries/other',
    description: 'Custom solutions for your specific business needs'
  }
];

const IndustryQuickSelect = () => {
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">AI Solutions for Your Industry</h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            Discover how our personalized AI assistants can transform operations in your specific industry
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div 
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                to={industry.path} 
                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full"
              >
                <div className="text-center">
                  {industry.icon}
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">{industry.name}</h3>
                  <p className="text-gray-600 font-body">{industry.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryQuickSelect;
