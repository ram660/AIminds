import React, { useState } from 'react';
import { motion } from 'framer-motion';

const industries = [
  'Real Estate',
  'Education',
  'Coaching',
  'Healthcare',
  'Food Establishment',
  'Other'
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
    consent: false
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! Our team will contact you shortly.'
    });
    
    // In a real implementation, you would send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      message: '',
      consent: false
    });
  };
  
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-heading font-bold text-primary mb-6">Get in Touch</h2>
      
      {formStatus.submitted ? (
        <motion.div 
          className={`p-4 rounded-md mb-6 ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {formStatus.message}
        </motion.div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-body mb-1">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-body mb-1">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-body mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          
          <div>
            <label htmlFor="company" className="block text-gray-700 font-body mb-1">Company/Business Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="industry" className="block text-gray-700 font-body mb-1">Industry *</label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value="">Select your industry</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-body mb-1">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Tell us about your business needs and challenges..."
          ></textarea>
        </div>
        
        <div className="mb-6">
          <label className="flex items-start">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mt-1 mr-2"
            />
            <span className="text-gray-700 font-body text-sm">
              I consent to AIminds.ai collecting and processing my data in accordance with the <a href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</a>. *
            </span>
          </label>
        </div>
        
        <button
          type="submit"
          className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md transition-colors duration-200 font-heading font-medium"
        >
          Submit Request
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
