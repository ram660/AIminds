import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'How long does it take to implement an AI assistant?',
    answer: 'The implementation timeline typically ranges from 2-5 weeks, depending on the complexity of your requirements and the level of customization needed. Our standard implementation process includes consultation, requirements analysis, development, deployment, and training.'
  },
  {
    question: 'Can I customize my AI assistant to match my brand?',
    answer: 'Yes, all our plans include some level of customization. The Professional and Enterprise plans offer more extensive branding options, including custom responses, tone adjustments, and visual branding elements to match your company\'s identity.'
  },
  {
    question: 'What systems can the AI assistant integrate with?',
    answer: 'Our AI assistants can integrate with a wide range of business systems, including CRM platforms (Salesforce, HubSpot, Zoho), calendar applications (Google Calendar, Outlook), email systems, messaging platforms, accounting software, and e-commerce platforms. Custom integrations are available for the Professional and Enterprise plans.'
  },
  {
    question: 'Is there a limit to how many interactions my AI assistant can handle?',
    answer: 'The Starter plan includes up to 500 interactions per month, the Professional plan includes up to 2,000 interactions, and the Enterprise plan offers unlimited interactions. Additional interaction packages can be purchased if you exceed your plan\'s limit.'
  },
  {
    question: 'How secure is my business data with your AI assistant?',
    answer: 'We take data security very seriously. All plans include standard security features such as data encryption, secure authentication, and regular security updates. The Enterprise plan offers additional security features, including custom data retention policies, advanced access controls, and compliance with industry-specific regulations.'
  },
  {
    question: 'Can I change plans as my business grows?',
    answer: 'Absolutely! You can upgrade your plan at any time as your business needs evolve. When upgrading, you\'ll receive prorated credit for the unused portion of your current plan. Downgrading is also possible at the end of your billing cycle.'
  },
  {
    question: 'What kind of support is included with each plan?',
    answer: 'The Starter plan includes standard business hours support via email and chat. The Professional plan adds priority support with faster response times. The Enterprise plan includes 24/7 premium support with a dedicated account manager and phone support options.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'There is no setup fee for the Starter and Professional plans when using our standard implementation process. The Enterprise plan may include a one-time setup fee depending on the complexity of your requirements and customizations needed.'
  }
];

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our pricing and implementation process
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full text-left p-4 flex justify-between items-center bg-light hover:bg-light/80 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-heading font-medium text-primary">{faq.question}</span>
                {openIndex === index ? <FaChevronUp className="text-secondary" /> : <FaChevronDown className="text-secondary" />}
              </button>
              
              {openIndex === index && (
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="font-body text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-600 font-body">
            Have more questions? <a href="#contact" className="text-secondary hover:underline">Contact our team</a> for answers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingFAQ;
