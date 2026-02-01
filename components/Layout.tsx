import React from 'react';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import QuickInquiry from './QuickInquiry.tsx';

interface LayoutProps {
  children: React.ReactNode;
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
      {/* Spacer to prevent content overlap with AI FAB on mobile */}
      <div className="h-24 md:hidden"></div>
    </div>
  );
};

export default Layout;