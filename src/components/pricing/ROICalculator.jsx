import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaArrowRight } from 'react-icons/fa';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    industry: '',
    employeeCount: 1,
    adminHours: 10,
    hourlyRate: 25,
    leadResponse: 24,
    leadConversion: 10
  });
  
  const [results, setResults] = useState({
    monthlySavings: 0,
    annualSavings: 0,
    timeReduction: 0,
    responseImprovement: 0,
    conversionIncrease: 0,
    roi: 0
  });
  
  const [showResults, setShowResults] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateROI();
    setShowResults(true);
  };
  
  const calculateROI = () => {
    // This is a simplified calculation for demonstration purposes
    const hoursSaved = formData.adminHours * 0.7; // Assume 70% reduction in admin time
    const monthlySavings = hoursSaved * 4 * formData.hourlyRate * formData.employeeCount;
    const annualSavings = monthlySavings * 12;
    
    const responseImprovement = formData.leadResponse * 0.9; // 90% faster response time
    const conversionIncrease = formData.leadConversion * 0.3; // 30% increase in conversion
    
    // Assume monthly cost based on employee count
    let monthlyCost = 299; // Starter plan
    if (formData.employeeCount > 10) {
      monthlyCost = 1299; // Enterprise plan
    } else if (formData.employeeCount > 3) {
      monthlyCost = 599; // Professional plan
    }
    
    const roi = ((annualSavings - (monthlyCost * 12)) / (monthlyCost * 12)) * 100;
    
    setResults({
      monthlySavings,
      annualSavings,
      timeReduction: 70, // 70% time reduction
      responseImprovement: 90, // 90% faster response
      conversionIncrease: 30, // 30% increase in conversion
      roi: roi > 0 ? roi : 0
    });
  };
  
  return (
    <section id="calculator" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">ROI Calculator</h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            Estimate the return on investment for implementing an AI assistant in your business
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary text-white p-4 flex items-center">
            <FaCalculator className="mr-2" />
            <h3 className="font-heading font-medium">Calculate Your Potential Savings</h3>
          </div>
          
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="industry" className="block text-gray-700 font-body mb-2">Industry</label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  >
                    <option value="">Select your industry</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="education">Education</option>
                    <option value="coaching">Coaching</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="food">Food Establishment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="employeeCount" className="block text-gray-700 font-body mb-2">Number of Employees</label>
                  <input
                    type="number"
                    id="employeeCount"
                    name="employeeCount"
                    min="1"
                    max="100"
                    value={formData.employeeCount}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="adminHours" className="block text-gray-700 font-body mb-2">Weekly Hours Spent on Administrative Tasks</label>
                  <input
                    type="number"
                    id="adminHours"
                    name="adminHours"
                    min="1"
                    max="100"
                    value={formData.adminHours}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="hourlyRate" className="block text-gray-700 font-body mb-2">Average Hourly Rate ($)</label>
                  <input
                    type="number"
                    id="hourlyRate"
                    name="hourlyRate"
                    min="1"
                    max="1000"
                    value={formData.hourlyRate}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="leadResponse" className="block text-gray-700 font-body mb-2">Average Lead Response Time (hours)</label>
                  <input
                    type="number"
                    id="leadResponse"
                    name="leadResponse"
                    min="1"
                    max="72"
                    value={formData.leadResponse}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="leadConversion" className="block text-gray-700 font-body mb-2">Current Lead Conversion Rate (%)</label>
                  <input
                    type="number"
                    id="leadConversion"
                    name="leadConversion"
                    min="1"
                    max="100"
                    value={formData.leadConversion}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md transition-colors duration-200 font-heading font-medium inline-flex items-center"
                >
                  Calculate ROI
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </form>
            
            {showResults && (
              <motion.div 
                className="mt-8 border-t pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-heading font-bold text-primary mb-6 text-center">Your Potential ROI</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-light rounded-lg p-4 text-center">
                    <h4 className="font-heading font-medium text-gray-700 mb-2">Monthly Savings</h4>
                    <p className="text-2xl font-heading font-bold text-secondary">${results.monthlySavings.toFixed(2)}</p>
                  </div>
                  
                  <div className="bg-light rounded-lg p-4 text-center">
                    <h4 className="font-heading font-medium text-gray-700 mb-2">Annual Savings</h4>
                    <p className="text-2xl font-heading font-bold text-secondary">${results.annualSavings.toFixed(2)}</p>
                  </div>
                  
                  <div className="bg-light rounded-lg p-4 text-center">
                    <h4 className="font-heading font-medium text-gray-700 mb-2">ROI</h4>
                    <p className="text-2xl font-heading font-bold text-secondary">{results.roi.toFixed(0)}%</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-light rounded-lg p-4 text-center">
                    <h4 className="font-heading font-medium text-gray-700 mb-2">Admin Time Reduction</h4>
                    <p className="text-2xl font-heading font-bold text-secondary">{results.timeReduction}%</p>
                  </div>
                  
                  <div className="bg-light rounded-lg p-4 text-center">
                    <h4 className="font-heading font-medium text-gray-700 mb-2">Response Time Improvement</h4>
                    <p className="text-2xl font-heading font-bold text-secondary">{results.responseImprovement}%</p>
                  </div>
                  
                  <div className="bg-light rounded-lg p-4 text-center">
                    <h4 className="font-heading font-medium text-gray-700 mb-2">Conversion Rate Increase</h4>
                    <p className="text-2xl font-heading font-bold text-secondary">{results.conversionIncrease}%</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-600 font-body mb-4">
                    These calculations are estimates based on typical results. Your actual results may vary.
                  </p>
                  <a 
                    href="#contact" 
                    className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md transition-colors duration-200 inline-block font-heading font-medium"
                  >
                    Discuss These Results With Us
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
