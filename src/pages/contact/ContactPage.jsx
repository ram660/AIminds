import React from 'react';
import Layout from '../../components/layout/Layout';
import ContactForm from '../../components/contact/ContactForm';
import ContactInfo from '../../components/contact/ContactInfo';

const ContactPage = () => {
  return (
    <Layout>
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-xl font-body max-w-3xl mx-auto">
            Ready to transform your business with a personalized AI assistant? Get in touch with our team to schedule a consultation.
          </p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <ContactForm />
            </div>
            <div className="md:w-1/3">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
