import React from 'react';
import { DIVISIONS, PARTNERS, BRAND_NAME } from '../constants';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const scrollToEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-[0.2] contrast-[1.2]"
            alt="Industrial Backbone"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-blue-600"></span>
              <span className="text-xs font-black uppercase tracking-[0.5em] text-blue-500">Established 2005</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-8 leading-none tracking-tighter uppercase text-glow-blue font-majestic">
              {BRAND_NAME} <br/> <span className="text-blue-600 italic text-4xl md:text-6xl tracking-widest">Industrial Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-light">
              High-performance automation, HSE ecosystems, and strategic industrial supply for Saudi Arabia's infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={scrollToEnquiry}
                className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] rounded-sm shadow-[0_0_40px_rgba(0,112,255,0.4)] transition-all"
              >
                Inquiry Terminal
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('divisions-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-10 py-5 bg-white/5 border border-white/10 backdrop-blur-md text-white font-black uppercase tracking-[0.2em] rounded-sm hover:bg-white/10 transition-all text-center"
              >
                Our Divisions
              </button>
            </div>
          </motion.div>
        </div>

        {/* Vertical stats indicator */}
        <div className="absolute right-10 bottom-24 hidden lg:flex flex-col gap-12 items-end border-r border-blue-600/30 pr-6">
           <div className="text-right">
             <div className="text-4xl font-black text-blue-600 mb-1">18+</div>
             <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Operation Years</div>
           </div>
           <div className="text-right">
             <div className="text-4xl font-black text-blue-600 mb-1">100+</div>
             <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Global Partners</div>
           </div>
        </div>
      </section>

      {/* Division HUD Grid */}
      <section id="divisions-grid" className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10">
            <div>
              <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter text-glow-blue font-majestic">Operational <br/> Segments</h2>
              <p className="text-slate-500 text-lg max-w-xl">
                Vertical-specific engineering solutions designed for mission-critical industrial applications.
              </p>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-blue-500 border-b border-blue-600 pb-2">
              System Active
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {DIVISIONS.map((div) => (
              <a key={div.id} href="#/divisions" className="group relative block aspect-[4/5] overflow-hidden bg-slate-900 border border-white/5">
                <img 
                  src={div.image} 
                  alt={div.title} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 group-hover:translate-x-2 transition-transform">
                    {div.id}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter group-hover:text-glow-blue transition-all">{div.title}</h3>
                  <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {div.description}
                  </p>
                </div>
                {/* HUD Borders */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/20 opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-blue-600 opacity-0 group-hover:opacity-100 transition-all"></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Global Supply Matrix */}
      <section className="py-32 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
             <h2 className="text-3xl font-bold mb-4 uppercase tracking-[0.3em]">Network Intelligence</h2>
             <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-16 md:gap-32">
             {PARTNERS.map(p => (
               <div key={p.name} className="flex flex-col items-center opacity-40 hover:opacity-100 hover:text-blue-500 transition-all">
                 <span className="text-3xl font-black tracking-tighter uppercase">{p.name}</span>
                 <span className="text-[10px] font-bold uppercase tracking-[0.4em] mt-3">{p.origin}</span>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;