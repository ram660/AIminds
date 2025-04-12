import React from 'react';
import { motion } from 'framer-motion';

const demoContent = {
  'real-estate': {
    title: 'AI Assistant for Real Estate',
    description: 'See how our AI assistant can qualify leads, match properties, and schedule viewings automatically.',
    demoType: 'chat',
    sampleConversation: [
      { role: 'assistant', message: 'Hello! I\'m your AI assistant from Smith Realty. How can I help you today?' },
      { role: 'user', message: 'I\'m looking for a 3-bedroom house in the downtown area.' },
      { role: 'assistant', message: 'Great! I can help with that. What\'s your budget range and do you have any specific requirements like garage or garden?' },
      { role: 'user', message: 'My budget is around $500,000 and I\'d like to have a garden.' },
      { role: 'assistant', message: 'Thank you for the details. I\'ve found 5 properties matching your criteria. Would you like me to send you the listings or schedule viewings for any of them?' }
    ]
  },
  'education': {
    title: 'AI Assistant for Education',
    description: 'Experience how our AI assistant can handle enrollment inquiries, schedule classes, and provide course information.',
    demoType: 'chat',
    sampleConversation: [
      { role: 'assistant', message: 'Welcome to Bright Future Academy! I\'m your AI assistant. How can I help you today?' },
      { role: 'user', message: 'I\'m interested in your web development course. When does it start?' },
      { role: 'assistant', message: 'Our next Web Development Bootcamp starts on September 15th. It\'s a 12-week program with both part-time and full-time options. Would you like more details about the curriculum or pricing?' },
      { role: 'user', message: 'Yes, please tell me about the pricing.' },
      { role: 'assistant', message: 'The full-time program is $8,500 and the part-time program is $5,500. Both include all course materials and career services. We also offer payment plans and scholarships. Would you like to schedule a call with an advisor to discuss your options?' }
    ]
  },
  'coaching': {
    title: 'AI Assistant for Coaching',
    description: 'Discover how our AI assistant can schedule sessions, follow up with clients, and provide resources.',
    demoType: 'chat',
    sampleConversation: [
      { role: 'assistant', message: 'Hello! I\'m the AI assistant for Life Coach Jane. How can I help you today?' },
      { role: 'user', message: 'I\'d like to schedule a coaching session next week.' },
      { role: 'assistant', message: 'I\'d be happy to help you schedule a session with Jane. She has availability on Tuesday at 2pm, Wednesday at 10am, or Thursday at 4pm. Which would work best for you?' },
      { role: 'user', message: 'Wednesday at 10am works for me.' },
      { role: 'assistant', message: 'Perfect! I\'ve scheduled your session for Wednesday at 10am. You\'ll receive a confirmation email with the Zoom link. Is there anything specific you\'d like to focus on in this session so Jane can prepare?' }
    ]
  },
  'healthcare': {
    title: 'AI Assistant for Healthcare',
    description: 'See how our AI assistant can manage appointments, follow up with patients, and provide care information.',
    demoType: 'chat',
    sampleConversation: [
      { role: 'assistant', message: 'Hello! I\'m the AI assistant for Wellness Clinic. How can I assist you today?' },
      { role: 'user', message: 'I need to schedule a check-up appointment.' },
      { role: 'assistant', message: 'I\'d be happy to help you schedule a check-up. Do you have a preferred doctor at our clinic?' },
      { role: 'user', message: 'Yes, Dr. Johnson.' },
      { role: 'assistant', message: 'Dr. Johnson has availability next Monday at 9am, Tuesday at 2pm, or Thursday at 11am. Which would you prefer? Also, have there been any changes to your insurance since your last visit?' }
    ]
  },
  'food': {
    title: 'AI Assistant for Restaurants',
    description: 'Experience how our AI assistant can handle reservations, take orders, and manage customer preferences.',
    demoType: 'chat',
    sampleConversation: [
      { role: 'assistant', message: 'Welcome to Bella\'s Restaurant! I\'m your AI assistant. How can I help you today?' },
      { role: 'user', message: 'I\'d like to make a reservation for dinner on Friday.' },
      { role: 'assistant', message: 'I\'d be happy to help with that. How many people will be in your party and what time would you prefer?' },
      { role: 'user', message: 'Table for 4 at 7:30pm.' },
      { role: 'assistant', message: 'Let me check availability... We have a table available at 7:30pm on Friday. Would you like me to reserve it for you? Also, do you have any special requests or dietary restrictions we should know about?' }
    ]
  },
  'other': {
    title: 'AI Assistant for Your Business',
    description: 'See how our customizable AI assistant can be tailored to your specific business needs.',
    demoType: 'chat',
    sampleConversation: [
      { role: 'assistant', message: 'Hello! I\'m your AI assistant. How can I help you today?' },
      { role: 'user', message: 'What services do you offer?' },
      { role: 'assistant', message: 'We offer a range of services including appointment scheduling, client follow-ups, document processing, and custom workflows tailored to your business needs. What type of business do you operate?' },
      { role: 'user', message: 'I run a small accounting firm.' },
      { role: 'assistant', message: 'For accounting firms, our AI assistants can help with client onboarding, document collection, appointment scheduling, and even basic tax deadline reminders. Would you like to schedule a consultation to discuss how we can customize an AI solution for your specific needs?' }
    ]
  }
};

const IndustryDemo = ({ industry }) => {
  const demo = demoContent[industry] || demoContent['other'];

  return (
    <section id="demo" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            {demo.title}
          </h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            {demo.description}
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-primary text-white p-4">
            <h3 className="font-heading font-medium">Interactive Demo</h3>
          </div>

          <div className="p-4 max-h-96 overflow-y-auto">
            {demo.sampleConversation.map((message, index) => (
              <motion.div
                key={index}
                className={`mb-4 ${message.role === 'assistant' ? 'flex' : 'flex justify-end'}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div
                  className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                    message.role === 'assistant'
                      ? 'bg-light text-gray-800'
                      : 'bg-secondary text-white'
                  }`}
                >
                  {message.message}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t p-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="bg-secondary text-white px-4 py-2 rounded-r-md hover:bg-secondary/90 transition-colors duration-200">
                Send
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              This is a demo. In a real implementation, you would be able to interact with the AI assistant.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryDemo;
