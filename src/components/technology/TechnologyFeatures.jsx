import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaBrain, FaLock, FaPlug, FaChartLine, FaMicrochip } from 'react-icons/fa';

const features = [
  {
    icon: <FaRobot className="text-4xl mb-4 text-secondary" />,
    title: 'Natural Language Processing',
    description: 'Our AI assistants understand and respond to natural language, making interactions feel human-like and intuitive.'
  },
  {
    icon: <FaBrain className="text-4xl mb-4 text-secondary" />,
    title: 'Machine Learning',
    description: 'Continuously improving performance by learning from interactions and adapting to your business needs.'
  },
  {
    icon: <FaLock className="text-4xl mb-4 text-secondary" />,
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption and security protocols to keep your business data safe and confidential.'
  },
  {
    icon: <FaPlug className="text-4xl mb-4 text-secondary" />,
    title: 'Seamless Integration',
    description: 'Easily connects with your existing tools and software, including CRMs, calendars, and communication platforms.'
  },
  {
    icon: <FaChartLine className="text-4xl mb-4 text-secondary" />,
    title: 'Analytics Dashboard',
    description: 'Comprehensive insights into your AI assistant\'s performance and impact on your business operations.'
  },
  {
    icon: <FaMicrochip className="text-4xl mb-4 text-secondary" />,
    title: 'Customizable AI Engine',
    description: 'Tailor the AI\'s capabilities, knowledge base, and responses to match your specific business requirements.'
  }
];

const TechnologyFeatures = () => {
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Key Technology Features</h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            Our AI assistants are powered by cutting-edge technology designed for performance, security, and ease of use
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-lg shadow-md p-6 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center">
                {feature.icon}
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600 font-body">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyFeatures;
