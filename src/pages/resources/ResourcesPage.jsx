import React from 'react';
import Layout from '../../components/layout/Layout';

const ResourcesPage = () => {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: '5 Ways AI Assistants Are Transforming Real Estate Agencies',
      excerpt: 'Discover how AI assistants are helping real estate agents save time, improve client relationships, and close more deals.',
      category: 'Industry Insights',
      date: 'June 15, 2023',
      image: '/assets/images/blog/blog-1.jpg'
    },
    {
      id: 2,
      title: 'The ROI of Implementing an AI Assistant in Your Small Business',
      excerpt: 'A detailed analysis of the return on investment when implementing AI assistants in small businesses across different industries.',
      category: 'Business',
      date: 'May 28, 2023',
      image: '/assets/images/blog/blog-2.jpg'
    },
    {
      id: 3,
      title: 'AI Ethics: Ensuring Your Business Uses AI Responsibly',
      excerpt: 'Learn about the ethical considerations of implementing AI in your business and how to ensure responsible use.',
      category: 'AI Ethics',
      date: 'May 10, 2023',
      image: '/assets/images/blog/blog-3.jpg'
    },
    {
      id: 4,
      title: 'How Educational Institutions Are Using AI to Improve Student Experiences',
      excerpt: 'Explore how schools and universities are implementing AI assistants to streamline administrative tasks and enhance student support.',
      category: 'Industry Insights',
      date: 'April 22, 2023',
      image: '/assets/images/blog/blog-4.jpg'
    },
    {
      id: 5,
      title: 'The Future of AI in Local Businesses: Trends to Watch',
      excerpt: 'A look at emerging AI trends and how they will impact local businesses in the coming years.',
      category: 'Technology Trends',
      date: 'April 5, 2023',
      image: '/assets/images/blog/blog-5.jpg'
    },
    {
      id: 6,
      title: 'Case Study: How a Small Restaurant Chain Increased Revenue by 40% with AI',
      excerpt: 'A detailed case study of how a restaurant chain implemented AI assistants to improve operations and boost revenue.',
      category: 'Case Studies',
      date: 'March 18, 2023',
      image: '/assets/images/blog/blog-6.jpg'
    }
  ];

  // Sample resources
  const resources = [
    {
      id: 1,
      title: 'AI Implementation Guide',
      description: 'A comprehensive guide to implementing AI assistants in your business.',
      type: 'PDF Guide',
      link: '#'
    },
    {
      id: 2,
      title: 'AI ROI Calculator',
      description: 'Calculate the potential return on investment for your AI implementation.',
      type: 'Interactive Tool',
      link: '/pricing#calculator'
    },
    {
      id: 3,
      title: 'AI for Small Businesses Webinar',
      description: 'Watch our recorded webinar on how small businesses can leverage AI technology.',
      type: 'Video',
      link: '#'
    },
    {
      id: 4,
      title: 'Industry-Specific AI Solutions',
      description: 'Explore AI solutions tailored for different industries.',
      type: 'Interactive Guide',
      link: '/industries'
    }
  ];

  return (
    <Layout>
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Resources</h1>
          <p className="text-xl font-body max-w-3xl mx-auto">
            Explore our collection of articles, guides, and tools to help you understand and implement AI in your business.
          </p>
        </div>
      </div>
      
      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-light rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-secondary">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-secondary font-medium hover:underline">Read More</a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-md transition-colors duration-200 font-heading font-medium">
              View All Articles
            </button>
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">Helpful Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-primary mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <a href={resource.link} className="text-secondary font-medium hover:underline">Access Resource</a>
                  </div>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                    {resource.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl font-body text-white/90 max-w-3xl mx-auto mb-8">
            Subscribe to our newsletter to receive the latest articles, resources, and AI insights.
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow p-3 rounded-l-md focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-r-md transition-colors duration-200 font-heading font-medium"
              >
                Subscribe
              </button>
            </div>
            <p className="text-white/70 text-sm mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage;
