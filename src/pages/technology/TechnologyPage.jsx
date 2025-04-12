import React from 'react';
import Layout from '../../components/layout/Layout';
import TechnologyHero from '../../components/technology/TechnologyHero';
import TechnologyFeatures from '../../components/technology/TechnologyFeatures';
import TechnologyShowcase from '../../components/technology/TechnologyShowcase';
import BuildAssistantWizard from '../../components/technology/BuildAssistantWizard';
import TechnologyCTA from '../../components/technology/TechnologyCTA';

const TechnologyPage = () => {
  return (
    <Layout>
      <TechnologyHero />
      <TechnologyFeatures />
      <TechnologyShowcase />
      <BuildAssistantWizard />
      <TechnologyCTA />
    </Layout>
  );
};

export default TechnologyPage;
