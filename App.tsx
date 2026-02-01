import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Divisions from './pages/Divisions.tsx';
import Contact from './pages/Contact.tsx';
import Catalog from './pages/Catalog.tsx';

const App: React.FC = () => {
  const [path, setPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHash = () => {
      setPath(window.location.hash || '#/');
      // Smooth scroll to top on every navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const renderContent = () => {
    // Basic Hash Router logic
    if (path.startsWith('#/about')) return <About />;
    if (path.startsWith('#/divisions')) return <Divisions />;
    if (path.startsWith('#/contact')) return <Contact />;
    if (path.startsWith('#/catalog')) return <Catalog />;
    return <Home />;
  };

  return (
    <Layout showInquiry={!path.includes('contact')}>
      <AnimatePresence mode="wait">
        <div key={path}>
          {renderContent()}
        </div>
      </AnimatePresence>
    </Layout>
  );
};

export default App;