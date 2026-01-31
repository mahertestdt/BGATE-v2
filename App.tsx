
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Divisions from './pages/Divisions';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash || '#/';
      setCurrentPath(newPath);
      
      // Only scroll to top if there isn't a specific element ID target in the hash
      // This allows internal section scrolling (like Divisions) to work.
      const hasSectionTarget = newPath.split('#').length > 2;
      if (!hasSectionTarget) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    if (currentPath === '#/' || currentPath === '') return <Home />;
    if (currentPath.startsWith('#/about')) return <About />;
    if (currentPath.startsWith('#/divisions')) return <Divisions />;
    if (currentPath.startsWith('#/catalog')) return <Catalog />;
    if (currentPath.startsWith('#/contact')) return <Contact />;
    return <Home />;
  };

  const showInquiry = !currentPath.startsWith('#/contact');

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={currentPath.split('#')[1] || 'root'} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Layout showInquiry={showInquiry}>
          {renderContent()}
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
