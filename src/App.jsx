import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import IndustryPage from './pages/industries/IndustryPage';
import ContactPage from './pages/contact/ContactPage';
import TechnologyPage from './pages/technology/TechnologyPage';
import PricingPage from './pages/pricing/PricingPage';
import AboutPage from './pages/about/AboutPage';
import ResourcesPage from './pages/resources/ResourcesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/industries/:industry" element={<IndustryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      {/* Add more routes as they are developed */}
      <Route path="*" element={<HomePage />} /> {/* Fallback route */}
    </Routes>
  );
}

export default App;
