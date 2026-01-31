
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
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Simulate industrial boot sequence
    const timer = setTimeout(() => setIsBooting(false), 2500);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(timer);
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
      {isBooting ? (
        <motion.div 
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono text-blue-500"
        >
          <div className="w-64 h-1 bg-white/10 mb-8 overflow-hidden relative">
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-blue-600"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 1] }}
            transition={{ duration: 0.5, times: [0, 0.2, 0.4, 1], repeat: 2 }}
            className="text-xs tracking-[0.4em] uppercase font-bold"
          >
            System Loading: BGATE Core v2.5
          </motion.div>
          <div className="mt-4 text-[10px] opacity-40 uppercase tracking-widest">
            Initializing industrial excellence protocols...
          </div>
        </motion.div>
      ) : (
        <motion.div 
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Layout showInquiry={showInquiry}>
            {renderContent()}
          </Layout>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
