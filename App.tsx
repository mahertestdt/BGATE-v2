import React from 'react';
import * as FramerMotion from 'framer-motion';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Divisions from './pages/Divisions.tsx';
import Contact from './pages/Contact.tsx';
import Catalog from './pages/Catalog.tsx';

const App: React.FC = () => {
  const [path, setPath] = React.useState(window.location.hash || '#/');

  React.useEffect(() => {
    const handleHash = () => {
      setPath(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const renderContent = () => {
    if (path.startsWith('#/about')) return <About />;
    if (path.startsWith('#/divisions')) return <Divisions />;
    if (path.startsWith('#/contact')) return <Contact />;
    if (path.startsWith('#/catalog')) return <Catalog />;
    return <Home />;
  };

  return (
    <Layout showInquiry={!path.includes('contact')}>
      <FramerMotion.AnimatePresence mode="wait">
        <FramerMotion.motion.div 
          key={path}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </FramerMotion.motion.div>
      </FramerMotion.AnimatePresence>
    </Layout>
  );
};

export default App;