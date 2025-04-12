import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses just getting started with AI',
    monthlyPrice: 299,
    annualPrice: 249,
    features: [
      'Basic AI assistant capabilities',
      'Up to 500 interactions per month',
      'Email and calendar integration',
      'Business hours support',
      '1 industry-specific workflow',
      'Basic analytics dashboard'
    ],
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses with moderate automation needs',
    monthlyPrice: 599,
    annualPrice: 499,
    popular: true,
    features: [
      'Advanced AI assistant capabilities',
      'Up to 2,000 interactions per month',
      'Full CRM integration',
      'Email, calendar, and messaging integration',
      '3 industry-specific workflows',
      'Advanced analytics dashboard',
      'Priority support',
      'Custom responses and branding'
    ],
    cta: 'Get Started'
  },
  {
    name: 'Enterprise',
    description: 'Comprehensive solution for businesses with complex needs',
    monthlyPrice: 1299,
    annualPrice: 999,
    features: [
      'Full-featured AI assistant',
      'Unlimited interactions',
      'Complete system integrations',
      'Custom workflows and automations',
      'Dedicated account manager',
      '24/7 premium support',
      'Custom AI training',
      'White-labeled solution',
      'Advanced security features'
    ],
    cta: 'Contact Sales'
  }
];

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Pricing Plans</h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that best fits your business needs and scale as you grow
          </p>
          
          <div className="inline-flex items-center bg-white rounded-full p-1 border border-gray-200 mb-8">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                billingCycle === 'monthly' 
                  ? 'bg-secondary text-white' 
                  : 'text-gray-600 hover:text-primary'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly Billing
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                billingCycle === 'annual' 
                  ? 'bg-secondary text-white' 
                  : 'text-gray-600 hover:text-primary'
              }`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual Billing <span className="text-xs text-accent">Save 20%</span>
            </button>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              className={`rounded-lg overflow-hidden ${
                plan.popular 
                  ? 'shadow-xl border-2 border-secondary relative' 
                  : 'shadow-md border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="bg-secondary text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="bg-white p-6">
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-gray-600 font-body mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold text-primary">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="text-gray-600 font-body">/month</span>
                  
                  {billingCycle === 'annual' && (
                    <div className="text-accent text-sm mt-1">
                      Billed annually (${plan.annualPrice * 12}/year)
                    </div>
                  )}
                </div>
                
                <button className={`w-full py-3 rounded-md transition-colors duration-200 font-heading font-medium mb-6 ${
                  plan.popular 
                    ? 'bg-accent hover:bg-accent/90 text-white' 
                    : 'bg-secondary hover:bg-secondary/90 text-white'
                }`}>
                  {plan.cta}
                </button>
                
                <div className="border-t pt-6">
                  <h4 className="font-heading font-medium text-primary mb-4">Features</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-secondary mt-1 mr-2 flex-shrink-0" />
                        <span className="font-body text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12 text-gray-600 font-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>
            Need a custom solution? <a href="#contact" className="text-secondary hover:underline">Contact our sales team</a> for a tailored quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
