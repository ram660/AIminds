import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaComments, FaFileAlt, FaDatabase } from 'react-icons/fa';

const showcaseItems = [
  {
    id: 'scheduling',
    icon: <FaCalendarAlt className="text-3xl text-secondary" />,
    title: 'Intelligent Scheduling',
    description: 'Watch how our AI assistant handles appointment scheduling, rescheduling, and reminders.',
    demo: {
      type: 'chat',
      conversation: [
        { role: 'user', message: 'I need to schedule a meeting with Sarah next week.' },
        { role: 'assistant', message: 'I\'ll help you schedule that meeting. Sarah has availability on Tuesday at 2pm, Wednesday at 10am, or Thursday at 4pm. Which would work best for you?' },
        { role: 'user', message: 'Wednesday at 10am works for me.' },
        { role: 'assistant', message: 'Great! I\'ve scheduled your meeting with Sarah for Wednesday at 10am. I\'ve sent calendar invites to both of you with the details. Would you like me to add any specific agenda items to the invitation?' }
      ]
    }
  },
  {
    id: 'customer-service',
    icon: <FaComments className="text-3xl text-secondary" />,
    title: 'Customer Service',
    description: 'See how our AI assistant handles customer inquiries and provides helpful information.',
    demo: {
      type: 'chat',
      conversation: [
        { role: 'user', message: 'What are your business hours?' },
        { role: 'assistant', message: 'Our business hours are Monday through Friday from 9am to 6pm, and Saturday from 10am to 2pm. We are closed on Sundays. Is there something specific you\'d like assistance with today?' },
        { role: 'user', message: 'Do you offer refunds?' },
        { role: 'assistant', message: 'Yes, we offer refunds within 30 days of purchase if you\'re not satisfied with your product. Would you like me to help you initiate a refund or provide more information about our refund policy?' }
      ]
    }
  },
  {
    id: 'document-processing',
    icon: <FaFileAlt className="text-3xl text-secondary" />,
    title: 'Document Processing',
    description: 'Observe how our AI assistant extracts and organizes information from documents.',
    demo: {
      type: 'text',
      content: `
Document Processing Demo:

Input: Invoice #12345 from ABC Supplies
AI Analysis:
- Vendor: ABC Supplies
- Invoice Number: 12345
- Date: May 15, 2023
- Amount: $1,250.00
- Items: Office supplies (5), Printer ink (2)
- Payment Terms: Net 30

Action: Invoice categorized, payment scheduled for June 14, 2023, and filed under "Office Expenses" category.
      `
    }
  },
  {
    id: 'data-analysis',
    icon: <FaDatabase className="text-3xl text-secondary" />,
    title: 'Data Analysis',
    description: 'Discover how our AI assistant analyzes business data to provide actionable insights.',
    demo: {
      type: 'text',
      content: `
Data Analysis Demo:

Input: "Analyze our sales data for the last quarter"
AI Analysis:
- Total Sales: $125,450 (↑12% from previous quarter)
- Top Performing Product: Product X ($45,200)
- Customer Acquisition Cost: $32 (↓5% from previous quarter)
- Customer Retention Rate: 78% (↑3% from previous quarter)
- Recommended Action: Increase marketing budget for Product X by 10% to capitalize on growth trend.

Additional Insights:
- Sales peak on Thursdays and Fridays
- 65% of new customers came from social media campaigns
- Customer satisfaction score improved by 8 points
      `
    }
  }
];

const TechnologyShowcase = () => {
  const [activeDemo, setActiveDemo] = useState(showcaseItems[0]);
  
  return (
    <section id="showcase" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Technology Showcase</h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            See our AI technology in action with these interactive demonstrations
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Demo Selection Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-light rounded-lg p-4">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Select a Demo</h3>
              <div className="space-y-2">
                {showcaseItems.map((item) => (
                  <button
                    key={item.id}
                    className={`w-full text-left p-3 rounded-md transition-colors duration-200 flex items-center ${
                      activeDemo.id === item.id 
                        ? 'bg-secondary text-white' 
                        : 'bg-white text-primary hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveDemo(item)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span className="font-heading font-medium">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Demo Display Area */}
          <div className="lg:w-2/3">
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              key={activeDemo.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-primary text-white p-4">
                <h3 className="font-heading font-medium text-lg flex items-center">
                  {activeDemo.icon}
                  <span className="ml-2">{activeDemo.title}</span>
                </h3>
              </div>
              
              <div className="p-4">
                <p className="text-gray-600 font-body mb-6">{activeDemo.description}</p>
                
                <div className="bg-light rounded-lg p-4">
                  {activeDemo.demo.type === 'chat' ? (
                    <div className="space-y-4">
                      {activeDemo.demo.conversation.map((message, index) => (
                        <div 
                          key={index}
                          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                              message.role === 'user' 
                                ? 'bg-secondary text-white' 
                                : 'bg-gray-200 text-gray-800'
                            }`}
                          >
                            {message.message}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">
                      {activeDemo.demo.content}
                    </pre>
                  )}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 border-t">
                <p className="text-sm text-gray-500">
                  This is a demonstration of our AI technology. In a real implementation, you would be able to interact with the AI assistant directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;
