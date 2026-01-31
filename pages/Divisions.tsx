
import React, { useEffect } from 'react';
import { DIVISIONS } from '../constants';

const Divisions: React.FC = () => {
  useEffect(() => {
    // Check for hash fragment on load (e.g., #/divisions#control)
    const handleScroll = () => {
      const fullHash = window.location.hash;
      if (fullHash.includes('#')) {
        const parts = fullHash.split('#');
        // The last part should be our target ID (e.g., 'control')
        const targetId = parts[parts.length - 1];
        const element = document.getElementById(targetId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100); // Small delay to ensure render is complete
        }
      }
    };

    handleScroll();
    // Also listen for hash changes in case user clicks multiple divisions while on this page
    window.addEventListener('hashchange', handleScroll);
    return () => window.removeEventListener('hashchange', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Page Header */}
      <section className="pt-48 pb-24 border-b border-white/5 bg-slate-900/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter text-glow-blue font-majestic">
              Operational <br/> Units
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
              BGATE operates four strategic engineering divisions, each optimized for mission-critical industrial applications and high-performance infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Alternating Divisions List */}
      <div className="divide-y divide-white/5">
        {DIVISIONS.map((div, index) => (
          <section key={div.id} id={div.id} className="py-32 overflow-hidden scroll-mt-24">
            <div className="container mx-auto px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''} relative group`}>
                  <div className="absolute -inset-4 bg-blue-600/10 rounded-sm blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10 shadow-2xl bg-slate-900">
                    <img 
                      src={div.image} 
                      alt={div.title} 
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  {/* Technical Overlay */}
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 px-8 py-4 hidden md:block z-10">
                    <span className="text-xs font-black uppercase tracking-[0.4em]">UNIT: 0{index + 1}</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="w-12 h-[2px] bg-blue-600"></span>
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-500">{div.tagline}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tighter font-majestic">{div.title}</h2>
                  <p className="text-lg text-slate-400 mb-12 leading-relaxed font-light">
                    {div.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                      <h4 className="text-xs font-black text-blue-500 uppercase tracking-widest mb-3">Capabilities</h4>
                      <ul className="text-[10px] font-bold text-slate-300 space-y-2 uppercase tracking-widest">
                        <li>• Engineering Design</li>
                        <li>• Strategic Sourcing</li>
                        <li>• Field Commissioning</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                      <h4 className="text-xs font-black text-blue-500 uppercase tracking-widest mb-3">Compliance</h4>
                      <ul className="text-[10px] font-bold text-slate-300 space-y-2 uppercase tracking-widest">
                        <li>• ISO Certified Protocols</li>
                        <li>• Saudi Aramco Standards</li>
                        <li>• 24/7 Support Matrix</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Divisions;
