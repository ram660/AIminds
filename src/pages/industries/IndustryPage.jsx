import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import IndustryHeader from '../../components/industry/IndustryHeader';
import IndustryPainPoints from '../../components/industry/IndustryPainPoints';
import IndustrySolutions from '../../components/industry/IndustrySolutions';
import IndustryDemo from '../../components/industry/IndustryDemo';
import IndustryCaseStudies from '../../components/industry/IndustryCaseStudies';
import IndustryTestimonials from '../../components/industry/IndustryTestimonials';
import IndustryCTA from '../../components/industry/IndustryCTA';

// Industry data mapping
const industryData = {
  'real-estate': {
    title: 'AI Assistants Tailored for Real Estate Agents',
    subtitle: 'Automate client follow-ups, property matching, and administrative tasks',
    painPoints: [
      { title: 'Time-Consuming Follow-ups', description: 'Manually following up with leads and clients takes hours away from closing deals' },
      { title: 'Missed Opportunities', description: 'Delayed responses to inquiries often result in lost clients' },
      { title: 'Administrative Burden', description: 'Paperwork and scheduling consume valuable time that could be spent with clients' }
    ],
    solutions: [
      { title: 'Automated Lead Qualification', description: 'AI assistant pre-qualifies leads and schedules appointments with promising prospects' },
      { title: 'Instant Property Matching', description: 'Automatically match new listings with client preferences and notify them immediately' },
      { title: 'Document Processing', description: 'Extract and organize key information from contracts and forms' }
    ],
    caseStudy: {
      title: 'How Smith Realty Increased Closings by 35%',
      description: 'Smith Realty implemented our AI assistant to handle initial client inquiries and follow-ups, resulting in faster response times and more closed deals.',
      results: ['35% increase in closings', '70% reduction in administrative tasks', '90% faster response to client inquiries']
    }
  },
  'education': {
    title: 'AI Assistants Tailored for Education Providers',
    subtitle: 'Streamline enrollment, answer student inquiries, and automate administrative tasks',
    painPoints: [
      { title: 'Repetitive Student Inquiries', description: 'Staff spend hours answering the same questions about courses and enrollment' },
      { title: 'Complex Scheduling', description: 'Coordinating classes, rooms, and instructors is time-consuming and error-prone' },
      { title: 'Enrollment Bottlenecks', description: 'Manual processing of applications creates delays and frustration' }
    ],
    solutions: [
      { title: 'Intelligent FAQ Responder', description: 'AI assistant answers common questions instantly, 24/7' },
      { title: 'Automated Enrollment', description: 'Streamline the application process and follow up with incomplete applications' },
      { title: 'Smart Scheduling', description: 'Optimize class schedules and automatically notify students of changes' }
    ],
    caseStudy: {
      title: 'How Bright Future Academy Improved Enrollment by 50%',
      description: 'Bright Future Academy implemented our AI assistant to handle enrollment inquiries and application processing, resulting in a smoother experience for prospective students.',
      results: ['50% increase in completed applications', '80% reduction in inquiry response time', '40% staff time saved on administrative tasks']
    }
  },
  'coaching': {
    title: 'AI Assistants Tailored for Coaches and Consultants',
    subtitle: 'Enhance client engagement, streamline scheduling, and automate follow-ups',
    painPoints: [
      { title: 'Scheduling Challenges', description: 'Coordinating sessions across time zones and managing cancellations is complex' },
      { title: 'Inconsistent Follow-ups', description: 'Maintaining regular contact with clients between sessions is difficult' },
      { title: 'Resource Management', description: 'Manually sending relevant materials and exercises to clients is time-consuming' }
    ],
    solutions: [
      { title: 'Intelligent Scheduling', description: 'AI assistant manages your calendar and handles booking, rescheduling, and reminders' },
      { title: 'Automated Check-ins', description: 'Regular, personalized check-ins with clients to maintain engagement' },
      { title: 'Smart Resource Delivery', description: 'Automatically send relevant materials based on client progress and needs' }
    ],
    caseStudy: {
      title: 'How Life Coach Jane Doubled Her Client Base',
      description: 'Life Coach Jane implemented our AI assistant to handle scheduling and client follow-ups, allowing her to focus on delivering high-quality coaching sessions.',
      results: ['100% increase in client capacity', '90% reduction in scheduling conflicts', '75% improvement in client engagement between sessions']
    }
  },
  'healthcare': {
    title: 'AI Assistants Tailored for Healthcare Providers',
    subtitle: 'Streamline appointment booking, patient follow-ups, and administrative tasks',
    painPoints: [
      { title: 'Appointment Management', description: 'Managing bookings, cancellations, and rescheduling consumes staff time' },
      { title: 'Patient Follow-ups', description: 'Ensuring patients follow treatment plans and medication schedules is challenging' },
      { title: 'Administrative Overload', description: 'Paperwork and insurance processing take time away from patient care' }
    ],
    solutions: [
      { title: 'Intelligent Scheduling', description: 'AI assistant manages appointments, sends reminders, and handles rescheduling' },
      { title: 'Treatment Plan Monitoring', description: 'Automated check-ins with patients to monitor adherence to treatment plans' },
      { title: 'Documentation Assistance', description: 'Help with organizing and processing patient records and insurance forms' }
    ],
    caseStudy: {
      title: 'How Wellness Clinic Improved Patient Satisfaction by 60%',
      description: 'Wellness Clinic implemented our AI assistant to handle appointment scheduling and patient follow-ups, resulting in a better experience for both staff and patients.',
      results: ['60% increase in patient satisfaction', '40% reduction in missed appointments', '30% more time for direct patient care']
    }
  },
  'food': {
    title: 'AI Assistants Tailored for Food Establishments',
    subtitle: 'Optimize ordering, reservation management, and customer engagement',
    painPoints: [
      { title: 'Reservation Chaos', description: 'Managing bookings, especially during peak times, is stressful and error-prone' },
      { title: 'Order Processing', description: 'Taking orders by phone or online can be time-consuming and lead to mistakes' },
      { title: 'Customer Engagement', description: 'Maintaining regular communication with customers is difficult but essential' }
    ],
    solutions: [
      { title: 'Intelligent Reservation System', description: 'AI assistant handles bookings, optimizes table allocation, and sends confirmations' },
      { title: 'Automated Order Processing', description: 'Take orders accurately via phone or online with natural language understanding' },
      { title: 'Customer Relationship Management', description: 'Remember customer preferences and send personalized promotions' }
    ],
    caseStudy: {
      title: 'How Bella\'s Restaurant Increased Revenue by 40%',
      description: 'Bella\'s Restaurant implemented our AI assistant to handle reservations and takeout orders, allowing staff to focus on creating a great dining experience.',
      results: ['40% increase in revenue', '70% reduction in reservation errors', '50% increase in repeat customers']
    }
  },
  'other': {
    title: 'AI Assistants Tailored for Your Profession',
    subtitle: 'Custom solutions designed for your specific business needs',
    painPoints: [
      { title: 'Time-Consuming Administrative Tasks', description: 'Routine tasks take time away from your core business activities' },
      { title: 'Client Communication Challenges', description: 'Maintaining consistent, timely communication with clients is difficult' },
      { title: 'Scaling Limitations', description: 'Growing your business is constrained by your personal bandwidth' }
    ],
    solutions: [
      { title: 'Custom Task Automation', description: 'AI assistant tailored to automate your specific administrative workflows' },
      { title: 'Intelligent Client Engagement', description: 'Maintain consistent communication and follow-ups with clients' },
      { title: 'Business Growth Support', description: 'Scale your operations without proportionally increasing staff' }
    ],
    caseStudy: {
      title: 'How Professionals Across Industries Have Transformed Their Businesses',
      description: 'From accountants to fitness trainers, professionals in various fields have implemented our AI assistants to automate routine tasks and enhance client experiences.',
      results: ['Average 45% increase in productivity', '60% reduction in administrative work', '50% more time for high-value activities']
    }
  }
};

const IndustryPage = () => {
  const { industry } = useParams();
  const data = industryData[industry] || industryData['other'];

  return (
    <Layout>
      <IndustryHeader title={data.title} subtitle={data.subtitle} industry={industry} />
      <IndustryPainPoints painPoints={data.painPoints} />
      <IndustrySolutions solutions={data.solutions} />
      <IndustryDemo industry={industry} />
      <IndustryCaseStudies caseStudy={data.caseStudy} />
      <IndustryTestimonials industry={industry} />
      <IndustryCTA industry={industry} />
    </Layout>
  );
};

export default IndustryPage;
