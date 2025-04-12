import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m the AIminds.ai assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I'd be happy to help with that! Could you provide more details about your business needs?",
        "That's a great question. Our AI assistants can be customized for your specific industry requirements.",
        "We have solutions for that! Would you like to schedule a demo to see how it works?",
        "Many of our clients have similar challenges. Our AI assistants have helped them save up to 70% on administrative tasks.",
        "I can connect you with one of our specialists who can provide more information about that."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
    }, 1000);
    
    setInput('');
  };
  
  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-secondary text-white shadow-lg flex items-center justify-center z-50"
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes size={20} /> : <FaRobot size={20} />}
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl overflow-hidden z-50 flex flex-col"
            style={{ height: '500px', maxHeight: '70vh' }}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Chat header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <FaRobot className="mr-2" />
                <h3 className="font-heading font-medium">AIminds.ai Assistant</h3>
              </div>
              <button 
                onClick={toggleChat}
                className="text-white/80 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>
            
            {/* Chat messages */}
            <div className="flex-grow p-4 overflow-y-auto">
              {messages.map((message, index) => (
                <div 
                  key={index}
                  className={`mb-4 ${message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}`}
                >
                  <div 
                    className={`max-w-xs rounded-lg p-3 ${
                      message.role === 'user' 
                        ? 'bg-secondary text-white' 
                        : 'bg-light text-gray-800'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Chat input */}
            <form onSubmit={handleSubmit} className="border-t p-4">
              <div className="flex">
                <input 
                  type="text" 
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Type your message..." 
                  className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button 
                  type="submit"
                  className="bg-secondary text-white px-4 py-2 rounded-r-md hover:bg-secondary/90 transition-colors duration-200"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;
