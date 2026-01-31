
import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { BRAND_NAME } from '../constants';

const navItems: NavItem[] = [
  { label: 'Intelligence', href: '#/about' },
  { label: 'Divisions', href: '#/divisions' },
  { label: 'Catalog', href: '#/catalog' },
  { label: 'Network', href: '#/contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('enquiry-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#/';
      setTimeout(() => {
         document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-white/10 py-4' : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-sm flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(0,112,255,0.5)] transition-transform group-hover:scale-110">
            B
          </div>
          <span className="text-2xl font-bold tracking-tighter text-glow-blue uppercase">
            {BRAND_NAME}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-blue-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={scrollToEnquiry}
            className="px-6 py-2.5 bg-blue-600/10 border border-blue-500/50 text-blue-400 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_20px_rgba(0,112,255,0.1)]"
          >
            Enquiry
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-4 h-0.5 bg-blue-500"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 p-10 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-8 text-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-bold uppercase tracking-[0.3em] text-slate-300 border-b border-white/5 pb-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={scrollToEnquiry}
              className="py-5 bg-blue-600 text-white font-bold uppercase tracking-widest"
            >
              Start Enquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
