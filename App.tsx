
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
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '#/':
        return <Home />;
      case '#/about':
        return <About />;
      case '#/divisions':
        return <Divisions />;
      case '#/catalog':
        return <Catalog />;
      case '#/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const showInquiry = currentPath !== '#/contact';

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={currentPath}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Layout showInquiry={showInquiry}>
          {renderContent()}
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
