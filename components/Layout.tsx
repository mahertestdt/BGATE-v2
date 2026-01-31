
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import QuickInquiry from './QuickInquiry';

interface LayoutProps {
  children: ReactNode;
  showInquiry?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showInquiry = true }) => {
  return (
    <div className="flex flex-col min-h-screen scanlines selection:bg-blue-600 selection:text-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      {showInquiry && <QuickInquiry />}
      <Footer />
    </div>
  );
};

export default Layout;
