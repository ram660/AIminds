import React from 'react';
import Layout from '../../components/layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About AIminds.ai</h1>
          <p className="text-xl font-body max-w-3xl mx-auto">
            Learn about our mission to democratize AI for local businesses and our team of experts.
          </p>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6 text-center">Our Story</h2>
            <p className="text-lg font-body text-gray-600 mb-6">
              AIminds.ai was founded with a clear mission: to make advanced AI technology accessible and practical for local businesses and professionals. We recognized that while large corporations had the resources to implement sophisticated AI solutions, smaller businesses were often left behind in the AI revolution.
            </p>
            <p className="text-lg font-body text-gray-600 mb-6">
              Our team of AI experts, software developers, and business consultants came together to create personalized AI assistants that address the specific challenges faced by local businesses across various industries. We believe that AI should not just be a competitive advantage for tech giants but a tool that empowers businesses of all sizes.
            </p>
            <p className="text-lg font-body text-gray-600">
              Today, AIminds.ai is helping hundreds of local businesses automate routine tasks, enhance customer experiences, and focus on what they do best. Our AI assistants are continuously evolving, learning from each interaction to become more effective and valuable to the businesses we serve.
            </p>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6 text-center">Our Team</h2>
            <p className="text-lg font-body text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Meet the experts behind AIminds.ai who are passionate about bringing AI innovation to local businesses.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Team member placeholders */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-40 h-40 rounded-full bg-light mx-auto mb-4"></div>
                  <h3 className="text-xl font-heading font-bold text-primary">Team Member {i}</h3>
                  <p className="text-secondary font-medium">Position</p>
                  <p className="text-gray-600 mt-2">
                    Brief bio about the team member and their expertise.
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-light p-6 rounded-lg">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We continuously push the boundaries of what AI can do for local businesses, staying at the forefront of technological advancements.
                </p>
              </div>
              
              <div className="bg-light p-6 rounded-lg">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">Accessibility</h3>
                <p className="text-gray-600">
                  We believe advanced AI should be accessible to businesses of all sizes, not just large corporations with extensive resources.
                </p>
              </div>
              
              <div className="bg-light p-6 rounded-lg">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">Ethics</h3>
                <p className="text-gray-600">
                  We are committed to developing AI that is ethical, transparent, and respects user privacy and data security.
                </p>
              </div>
              
              <div className="bg-light p-6 rounded-lg">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">Partnership</h3>
                <p className="text-gray-600">
                  We view our relationship with clients as a partnership, working closely with them to ensure their success with our AI solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl font-body text-white/90 max-w-3xl mx-auto mb-8">
            Be part of the AI revolution that's transforming local businesses across industries.
          </p>
          <a 
            href="/contact" 
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md transition-colors duration-200 inline-block font-heading font-medium text-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
