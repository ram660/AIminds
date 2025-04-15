import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaClock, FaChartLine, FaRobot } from 'react-icons/fa';
import GlassCard from '../shared/GlassCard';

const stats = [
  {
    icon: <FaClock className="text-4xl mb-4 text-secondary" />,
    value: 70,
    suffix: '%',
    label: 'Reduction in Administrative Tasks',
    description: 'Our AI assistants automate routine tasks, freeing up your time for high-value activities.'
  },
  {
    icon: <FaChartLine className="text-4xl mb-4 text-secondary" />,
    value: 85,
    suffix: '%',
    label: 'Faster Lead Response Time',
    description: 'Instant responses to customer inquiries, even outside business hours.'
  },
  {
    icon: <FaRobot className="text-4xl mb-4 text-secondary" />,
    value: 5000,
    prefix: '$',
    label: 'Average Annual Savings',
    description: 'Reduce costs compared to hiring additional staff while improving efficiency.'
  }
];

const ValueProposition = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-light">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">The AIminds Advantage</h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            Our AI assistants deliver measurable results for local businesses across all industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-heading font-bold text-primary mb-2">
                  <span className="text-secondary">{stat.prefix}</span>
                  <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                  <span className="text-secondary">{stat.suffix}</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary">{stat.label}</h3>
                <p className="text-gray-600 font-body">{stat.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
