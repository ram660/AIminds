import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ChatbotWidget from '../shared/ChatbotWidget';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Layout;