import React from 'react';
import Layout from '../../components/layout/Layout';
import PricingHero from '../../components/pricing/PricingHero';
import PricingPlans from '../../components/pricing/PricingPlans';
import PricingProcess from '../../components/pricing/PricingProcess';
import ROICalculator from '../../components/pricing/ROICalculator';
import PricingFAQ from '../../components/pricing/PricingFAQ';
import PricingCTA from '../../components/pricing/PricingCTA';

const PricingPage = () => {
  return (
    <Layout>
      <PricingHero />
      <PricingPlans />
      <PricingProcess />
      <ROICalculator />
      <PricingFAQ />
      <PricingCTA />
    </Layout>
  );
};

export default PricingPage;
