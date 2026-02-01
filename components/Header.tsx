import React from 'react';
import { NavItem } from '../types.ts';
import { BRAND_NAME } from '../constants.tsx';
import Logo from './Logo.tsx';

const navItems: NavItem[] = [
  { label: 'Intelligence', href: '#/about' },
  { label: 'Divisions', href: '#/divisions' },
  { label: 'Catalog', href: '#/catalog' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToInquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('enquiry-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#/contact';
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled ? 'bg-black/90 backdrop-blur-xl border-white/10 py-3' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#/" className="flex items-center gap-4 group">
          <Logo className={isScrolled ? "h-10" : "h-14"} />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold tracking-tighter text-glow-blue uppercase leading-none">
              {BRAND_NAME}
            </span>
            <span className="text-[8px] tracking-[0.3em] text-blue-500 font-black uppercase mt-1 opacity-70">
              Contracting Co.
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-500 hover:bg-white/5 rounded-sm transition-all active:scale-95"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#/contact"
            className="px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-500 hover:bg-white/5 rounded-sm transition-all active:scale-95"
          >
            Network
          </a>
          <button
            onClick={scrollToInquiry}
            className="ml-4 px-8 py-3 bg-blue-600 text-white rounded-sm font-bold text-[11px] uppercase tracking-widest hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(0,112,255,0.2)] active:scale-95"
          >
            Inquiry
          </button>
        </nav>

        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-4 h-0.5 bg-blue-500"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

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
            <a
              href="#/contact"
              className="text-lg font-bold uppercase tracking-[0.3em] text-slate-300 border-b border-white/5 pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Network
            </a>
            <button
              onClick={scrollToInquiry}
              className="py-5 bg-blue-600 text-white font-bold uppercase tracking-widest"
            >
              Direct Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;