import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft, FaCheck } from 'react-icons/fa';

const industries = [
  'Real Estate',
  'Education',
  'Coaching',
  'Healthcare',
  'Food Establishment',
  'Other'
];

const capabilities = [
  { id: 'scheduling', label: 'Appointment Scheduling', description: 'Handle booking, rescheduling, and reminders' },
  { id: 'customer_service', label: 'Customer Service', description: 'Answer FAQs and handle common inquiries' },
  { id: 'lead_qualification', label: 'Lead Qualification', description: 'Pre-qualify leads and collect relevant information' },
  { id: 'document_processing', label: 'Document Processing', description: 'Extract and organize information from documents' },
  { id: 'follow_ups', label: 'Automated Follow-ups', description: 'Send timely follow-up messages to clients' },
  { id: 'data_analysis', label: 'Data Analysis', description: 'Analyze business data and provide insights' },
  { id: 'content_creation', label: 'Content Creation', description: 'Generate emails, social posts, and other content' },
  { id: 'inventory', label: 'Inventory Management', description: 'Track inventory and send reorder notifications' }
];

const integrations = [
  { id: 'crm', label: 'CRM Systems', examples: 'Salesforce, HubSpot, Zoho' },
  { id: 'calendar', label: 'Calendar Apps', examples: 'Google Calendar, Outlook, Apple Calendar' },
  { id: 'email', label: 'Email Platforms', examples: 'Gmail, Outlook, Custom Email' },
  { id: 'messaging', label: 'Messaging Platforms', examples: 'SMS, WhatsApp, Slack' },
  { id: 'accounting', label: 'Accounting Software', examples: 'QuickBooks, Xero, FreshBooks' },
  { id: 'ecommerce', label: 'E-commerce Platforms', examples: 'Shopify, WooCommerce, Magento' }
];

const steps = [
  { id: 'industry', title: 'Select Your Industry' },
  { id: 'capabilities', title: 'Choose Capabilities' },
  { id: 'integrations', title: 'Select Integrations' },
  { id: 'summary', title: 'Review Your Assistant' }
];

const BuildAssistantWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({
    industry: '',
    capabilities: [],
    integrations: []
  });
  
  const handleIndustrySelect = (industry) => {
    setSelections(prev => ({ ...prev, industry }));
  };
  
  const handleCapabilityToggle = (capabilityId) => {
    setSelections(prev => {
      const capabilities = [...prev.capabilities];
      if (capabilities.includes(capabilityId)) {
        return { ...prev, capabilities: capabilities.filter(id => id !== capabilityId) };
      } else {
        return { ...prev, capabilities: [...capabilities, capabilityId] };
      }
    });
  };
  
  const handleIntegrationToggle = (integrationId) => {
    setSelections(prev => {
      const integrations = [...prev.integrations];
      if (integrations.includes(integrationId)) {
        return { ...prev, integrations: integrations.filter(id => id !== integrationId) };
      } else {
        return { ...prev, integrations: [...integrations, integrationId] };
      }
    });
  };
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const isNextDisabled = () => {
    if (currentStep === 0 && !selections.industry) return true;
    if (currentStep === 1 && selections.capabilities.length === 0) return true;
    return false;
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                className={`p-4 rounded-lg border-2 transition-colors duration-200 ${
                  selections.industry === industry 
                    ? 'border-secondary bg-secondary/10 text-primary' 
                    : 'border-gray-200 hover:border-secondary/50'
                }`}
                onClick={() => handleIndustrySelect(industry)}
              >
                <div className="text-center">
                  <h3 className="font-heading font-medium">{industry}</h3>
                </div>
              </button>
            ))}
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((capability) => (
              <button
                key={capability.id}
                className={`p-4 rounded-lg border-2 text-left transition-colors duration-200 ${
                  selections.capabilities.includes(capability.id) 
                    ? 'border-secondary bg-secondary/10 text-primary' 
                    : 'border-gray-200 hover:border-secondary/50'
                }`}
                onClick={() => handleCapabilityToggle(capability.id)}
              >
                <div className="flex items-start">
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 mr-3 flex items-center justify-center ${
                    selections.capabilities.includes(capability.id) 
                      ? 'bg-secondary text-white' 
                      : 'bg-gray-200'
                  }`}>
                    {selections.capabilities.includes(capability.id) && <FaCheck size={12} />}
                  </div>
                  <div>
                    <h3 className="font-heading font-medium">{capability.label}</h3>
                    <p className="text-sm text-gray-600">{capability.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {integrations.map((integration) => (
              <button
                key={integration.id}
                className={`p-4 rounded-lg border-2 text-left transition-colors duration-200 ${
                  selections.integrations.includes(integration.id) 
                    ? 'border-secondary bg-secondary/10 text-primary' 
                    : 'border-gray-200 hover:border-secondary/50'
                }`}
                onClick={() => handleIntegrationToggle(integration.id)}
              >
                <div className="flex items-start">
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 mr-3 flex items-center justify-center ${
                    selections.integrations.includes(integration.id) 
                      ? 'bg-secondary text-white' 
                      : 'bg-gray-200'
                  }`}>
                    {selections.integrations.includes(integration.id) && <FaCheck size={12} />}
                  </div>
                  <div>
                    <h3 className="font-heading font-medium">{integration.label}</h3>
                    <p className="text-sm text-gray-600">Examples: {integration.examples}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        );
      case 3:
        return (
          <div className="bg-light rounded-lg p-6">
            <h3 className="text-xl font-heading font-bold text-primary mb-4">Your Custom AI Assistant</h3>
            
            <div className="mb-6">
              <h4 className="font-heading font-medium text-gray-700 mb-2">Industry</h4>
              <p className="bg-white p-3 rounded-md border border-gray-200">{selections.industry}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-heading font-medium text-gray-700 mb-2">Selected Capabilities</h4>
              {selections.capabilities.length > 0 ? (
                <ul className="bg-white p-3 rounded-md border border-gray-200 space-y-2">
                  {selections.capabilities.map(capId => {
                    const capability = capabilities.find(c => c.id === capId);
                    return (
                      <li key={capId} className="flex items-center">
                        <FaCheck className="text-secondary mr-2" />
                        <span>{capability?.label}</span>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-gray-500 italic">No capabilities selected</p>
              )}
            </div>
            
            <div className="mb-6">
              <h4 className="font-heading font-medium text-gray-700 mb-2">Selected Integrations</h4>
              {selections.integrations.length > 0 ? (
                <ul className="bg-white p-3 rounded-md border border-gray-200 space-y-2">
                  {selections.integrations.map(intId => {
                    const integration = integrations.find(i => i.id === intId);
                    return (
                      <li key={intId} className="flex items-center">
                        <FaCheck className="text-secondary mr-2" />
                        <span>{integration?.label}</span>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-gray-500 italic">No integrations selected</p>
              )}
            </div>
            
            <div className="bg-secondary/10 p-4 rounded-md border border-secondary/30">
              <h4 className="font-heading font-medium text-primary mb-2">Estimated Monthly Cost</h4>
              <p className="text-2xl font-heading font-bold text-secondary">$499 - $799</p>
              <p className="text-sm text-gray-600 mt-1">Final pricing depends on usage volume and specific customizations</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Build Your AI Assistant</h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            Customize your AI assistant to match your specific business needs
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  index <= currentStep 
                    ? 'bg-secondary text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {index < currentStep ? (
                    <FaCheck />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span className={`text-sm mt-2 text-center ${
                  index <= currentStep 
                    ? 'text-primary font-medium' 
                    : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          
          {/* Step Content */}
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 mb-6"
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-heading font-bold text-primary mb-6">{steps[currentStep].title}</h3>
            {renderStepContent()}
          </motion.div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              className={`flex items-center px-6 py-2 rounded-md transition-colors duration-200 ${
                currentStep === 0 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              disabled={currentStep === 0}
            >
              <FaArrowLeft className="mr-2" />
              Back
            </button>
            
            {currentStep < steps.length - 1 ? (
              <button
                onClick={nextStep}
                className={`flex items-center px-6 py-2 rounded-md transition-colors duration-200 ${
                  isNextDisabled() 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-secondary text-white hover:bg-secondary/90'
                }`}
                disabled={isNextDisabled()}
              >
                Next
                <FaArrowRight className="ml-2" />
              </button>
            ) : (
              <button
                className="flex items-center px-6 py-2 rounded-md bg-accent text-white hover:bg-accent/90 transition-colors duration-200"
              >
                Get Your Custom Quote
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildAssistantWizard;
