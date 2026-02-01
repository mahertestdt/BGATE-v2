import React, { useEffect } from 'react';
import { DIVISIONS } from '../constants.tsx';

const Divisions: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const fullHash = window.location.hash;
      if (fullHash.includes('#')) {
        const parts = fullHash.split('#');
        const targetId = parts[parts.length - 1];
        const element = document.getElementById(targetId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    handleScroll();
    window.addEventListener('hashchange', handleScroll);
    return () => window.removeEventListener('hashchange', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="pt-48 pb-24 border-b border-white/5 bg-slate-900/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter text-glow-blue font-majestic">
              Operational <br/> Units
            </h1>
            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
              BGATE operates strategic engineering divisions, each optimized for mission-critical industrial applications and high-performance infrastructure.
            </p>
          </div>
        </div>
      </section>

      <div className="divide-y divide-white/5">
        {DIVISIONS.map((div, index) => (
          <section key={div.id} id={div.id} className="py-32 overflow-hidden scroll-mt-24">
            <div className="container mx-auto px-6">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''} relative group top-0 lg:sticky lg:top-32`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10 shadow-2xl bg-slate-900">
                    <img 
                      src={div.image} 
                      alt={div.title} 
                      className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 px-8 py-4 hidden md:block z-10 shadow-xl">
                    <span className="text-xs font-black uppercase tracking-[0.4em]">UNIT ID: 0{index + 1}</span>
                  </div>
                </div>

                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="w-12 h-[2px] bg-blue-600"></span>
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-500">{div.tagline}</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tighter font-majestic">{div.title}</h2>
                  <p className="text-lg text-slate-300 mb-12 leading-relaxed font-light">
                    {div.description}
                  </p>
                  
                  {div.details ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {div.details.map((detail) => (
                        <div key={detail.label} className="p-8 bg-white/5 border border-white/10 rounded-sm">
                          <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-6 border-b border-white/10 pb-4">{detail.label}</h4>
                          <ul className="text-[11px] font-bold text-slate-400 space-y-3 uppercase tracking-widest">
                            {detail.items.map(item => (
                              <li key={item} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-blue-600 mt-1 shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                        <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3">Capabilities</h4>
                        <ul className="text-[10px] font-bold text-slate-300 space-y-2 uppercase tracking-widest">
                          <li>• Engineering Design</li>
                          <li>• Strategic Sourcing</li>
                          <li>• Field Commissioning</li>
                        </ul>
                      </div>
                      <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                        <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3">Compliance</h4>
                        <ul className="text-[10px] font-bold text-slate-300 space-y-2 uppercase tracking-widest">
                          <li>• ISO Certified Protocols</li>
                          <li>• Saudi Aramco Standards</li>
                          <li>• 24/7 Support Protocol</li>
                        </ul>
                      </div>
                    </div>
                  )}
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