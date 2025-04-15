import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary/90 text-white py-24 relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-md animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full blur-md animate-float-medium"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-accent/20 rounded-full blur-sm animate-float-fast"></div>
      <div className="absolute bottom-1/3 left-1/4 w-10 h-10 bg-white/10 rounded-full blur-sm animate-float-medium"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              AIminds: Empowering Local Businesses with Personalized AI Assistants
            </motion.h1>
            <motion.p
              className="text-xl font-body mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Boost productivity, enhance customer experience, and grow your business with custom AI solutions designed specifically for your industry needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md transition-colors duration-200 inline-block font-heading font-medium text-lg"
              >
                Get Your Custom AI Demo
              </Link>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center h-96 border border-white/20 shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Modern AI visualization */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/30 rounded-full blur-2xl"></div>

              <div className="relative z-10 text-center">
                <img src="/assets/images/logo/aiminds-logo.svg" alt="AIminds Logo" className="w-48 h-48 mx-auto mb-6" />
                <div className="glass-card bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <p className="text-xl font-medium">Intelligent. Personalized. Efficient.</p>
                  <p className="mt-2">Powered by advanced AI technology</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
