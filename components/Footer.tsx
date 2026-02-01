import React from 'react';
import { BRAND_NAME, COMPANY_NAME, MAIN_OFFICE } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-8 text-glow-blue uppercase tracking-tighter">{BRAND_NAME}</h3>
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm font-medium uppercase tracking-wider">
              {COMPANY_NAME}
            </p>
            <p className="text-slate-600 mt-6 text-sm max-w-md">
              A strategic infrastructure hub established in 2005. Engineering high-performance solutions for Saudi Arabia's industrial future.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black mb-8 uppercase tracking-[0.4em] text-blue-500">Navigation</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              <li><a href="#/" className="hover:text-white transition-colors">Home Base</a></li>
              <li><a href="#/about" className="hover:text-white transition-colors">Intelligence</a></li>
              <li><a href="#/divisions" className="hover:text-white transition-colors">Operational Units</a></li>
              <li><a href="#/catalog" className="hover:text-white transition-colors">Supply Catalog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black mb-8 uppercase tracking-[0.4em] text-blue-500">HQ Protocol</h4>
            <address className="not-italic text-xs font-bold uppercase tracking-widest text-slate-400 space-y-4">
              <p className="leading-relaxed">{MAIN_OFFICE.address}</p>
              <p className="text-blue-400 font-bold">{MAIN_OFFICE.phone[0]}</p>
              <p className="text-blue-400 font-bold">{MAIN_OFFICE.emails[0]}</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">
          <p>© {new Date().getFullYear()} BGATE CORE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Legal Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;