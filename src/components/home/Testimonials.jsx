import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The AI assistant from AIminds.ai has transformed how I manage client inquiries. It's like having a full-time assistant at a fraction of the cost.",
    name: "Sarah Johnson",
    title: "Real Estate Agent",
    image: "/assets/images/testimonial-1.jpg" // Placeholder image path
  },
  {
    quote: "Our student enrollment process is now completely automated thanks to AIminds.ai. We've seen a 40% increase in efficiency and our staff can focus on what really matters.",
    name: "Michael Chen",
    title: "Education Center Director",
    image: "/assets/images/testimonial-2.jpg" // Placeholder image path
  }
];

const Testimonials = () => {
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            Hear from businesses that have transformed their operations with our AI assistants
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name}
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                  {/* Placeholder for testimonial image */}
                  <div className="w-full h-full flex items-center justify-center bg-secondary/20 text-secondary font-bold text-xl">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 font-body italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-heading font-bold text-primary">{testimonial.name}</p>
                    <p className="text-secondary">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
