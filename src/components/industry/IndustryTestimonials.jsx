import React from 'react';
import { motion } from 'framer-motion';

const testimonialsByIndustry = {
  'real-estate': [
    {
      quote: "The AI assistant has transformed how I manage client inquiries. I can now focus on high-value activities while the assistant handles routine questions and follow-ups.",
      name: "Sarah Johnson",
      title: "Real Estate Agent, Johnson Properties",
      image: "/assets/images/testimonials/real-estate-1.jpg"
    },
    {
      quote: "Property matching used to take hours of my time. Now the AI assistant automatically matches new listings with client preferences, saving me at least 15 hours per week.",
      name: "Michael Rodriguez",
      title: "Broker, Elite Realty",
      image: "/assets/images/testimonials/real-estate-2.jpg"
    }
  ],
  'education': [
    {
      quote: "Our enrollment process is now completely automated. The AI assistant answers prospective students' questions 24/7, which has significantly increased our application completion rate.",
      name: "Jennifer Lee",
      title: "Director, Bright Future Academy",
      image: "/assets/images/testimonials/education-1.jpg"
    },
    {
      quote: "The administrative time savings have been incredible. Our staff can now focus on curriculum development and student support rather than answering the same questions repeatedly.",
      name: "David Wilson",
      title: "Principal, Wilson Learning Center",
      image: "/assets/images/testimonials/education-2.jpg"
    }
  ],
  'coaching': [
    {
      quote: "Scheduling used to be my biggest headache. Now my AI assistant handles all bookings and sends reminders, which has virtually eliminated no-shows.",
      name: "Emma Thompson",
      title: "Life Coach, Transformative Coaching",
      image: "/assets/images/testimonials/coaching-1.jpg"
    },
    {
      quote: "The consistent follow-ups between sessions have dramatically improved client engagement and results. My clients love the personalized check-ins.",
      name: "James Parker",
      title: "Business Coach, Success Strategies",
      image: "/assets/images/testimonials/coaching-2.jpg"
    }
  ],
  'healthcare': [
    {
      quote: "Patient satisfaction has soared since implementing the AI assistant. Appointment scheduling is seamless, and patients appreciate the regular check-ins about their treatment plans.",
      name: "Dr. Lisa Chen",
      title: "Director, Wellness Clinic",
      image: "/assets/images/testimonials/healthcare-1.jpg"
    },
    {
      quote: "The reduction in administrative work has allowed our staff to spend more time on patient care. The ROI has been remarkable both financially and in terms of care quality.",
      name: "Dr. Robert Miller",
      title: "Physician, Family Health Center",
      image: "/assets/images/testimonials/healthcare-2.jpg"
    }
  ],
  'food': [
    {
      quote: "Our reservation system used to be chaotic, especially during peak hours. The AI assistant now manages all bookings flawlessly, optimizing our table utilization.",
      name: "Isabella Martinez",
      title: "Owner, Bella's Restaurant",
      image: "/assets/images/testimonials/food-1.jpg"
    },
    {
      quote: "Taking orders by phone used to result in errors and frustration. The AI assistant captures orders perfectly and has increased our takeout business by 35%.",
      name: "Thomas Kim",
      title: "Manager, Urban Bistro",
      image: "/assets/images/testimonials/food-2.jpg"
    }
  ],
  'other': [
    {
      quote: "The customized AI solution for my accounting firm has automated client onboarding and document collection, saving us countless hours during tax season.",
      name: "Patricia Garcia",
      title: "CPA, Garcia Accounting",
      image: "/assets/images/testimonials/other-1.jpg"
    },
    {
      quote: "As a fitness trainer, client engagement between sessions was always challenging. The AI assistant now sends workout reminders and checks in on progress, improving client results.",
      name: "Ryan Taylor",
      title: "Owner, Elite Fitness",
      image: "/assets/images/testimonials/other-2.jpg"
    }
  ]
};

const IndustryTestimonials = ({ industry }) => {
  const testimonials = testimonialsByIndustry[industry] || testimonialsByIndustry['other'];
  
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg font-body text-gray-600 max-w-3xl mx-auto">
            Hear from professionals who have transformed their businesses with our AI assistants
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
        
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600 font-body">
            Want to see more success stories? <a href="#" className="text-secondary hover:underline">View all case studies</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryTestimonials;
