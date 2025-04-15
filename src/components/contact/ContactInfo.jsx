import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <motion.div
      className="bg-light rounded-lg shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl font-heading font-bold text-primary mb-6">Contact Information</h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
            <FaEnvelope className="text-secondary" />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-primary">Email</h3>
            <p className="font-body text-gray-600">ram.malineni@outlook.com</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
            <FaPhone className="text-secondary" />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-primary">Phone</h3>
            <p className="font-body text-gray-600">(905) 329-2291</p>
            <p className="font-body text-gray-600">(289) 823-2849</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
            <FaMapMarkerAlt className="text-secondary" />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-primary">Address</h3>
            <p className="font-body text-gray-600">
              20420 91b Ave<br />
              Langley Township<br />
              BC, V1M 1B5
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
            <FaClock className="text-secondary" />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-primary">Business Hours</h3>
            <p className="font-body text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 2:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-heading font-semibold text-primary mb-2">Connect With Us</h3>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/aiminds"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary transition-colors duration-200"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/company/aiminds"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://facebook.com/aiminds"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary transition-colors duration-200"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/aiminds"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-secondary transition-colors duration-200"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
