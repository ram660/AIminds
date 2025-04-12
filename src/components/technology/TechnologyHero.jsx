import React from 'react';
import { motion } from 'framer-motion';

const TechnologyHero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our AI Technology
            </motion.h1>
            <motion.p 
              className="text-xl font-body mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover the cutting-edge AI technology behind our personalized assistants that's transforming how local businesses operate.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="#showcase" 
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-md transition-colors duration-200 inline-block font-heading font-medium text-lg"
              >
                See Technology in Action
              </a>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div 
              className="bg-white/10 rounded-lg p-8 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Placeholder for technology visualization */}
              <div className="w-full h-64 bg-primary/40 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-secondary/30 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold">AI</span>
                  </div>
                  <p className="text-xl font-heading font-bold">Advanced Natural Language Processing</p>
                  <p className="mt-2 text-white/80">Powered by state-of-the-art machine learning</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyHero;
