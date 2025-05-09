import React from 'react';
import Layout from '../../components/layout/Layout';
import HeroSection from '../../components/home/HeroSection';
import IndustryQuickSelect from '../../components/home/IndustryQuickSelect';
import ValueProposition from '../../components/home/ValueProposition';
import HowItWorks from '../../components/home/HowItWorks';
import Testimonials from '../../components/home/Testimonials';
import FooterCTA from '../../components/home/FooterCTA';
import BlurredBackground from '../../components/shared/BlurredBackground';

const HomePage = () => {
  return (
    <Layout>
      <BlurredBackground className="min-h-screen">
        <HeroSection />
        <IndustryQuickSelect />
        <ValueProposition />
        <HowItWorks />
        <Testimonials />
        <FooterCTA />
      </BlurredBackground>
    </Layout>
  );
};

export default HomePage;
