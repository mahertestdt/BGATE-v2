import React from 'react';
import { DIVISIONS, PARTNERS, BRAND_NAME } from '../constants.tsx';
import { motion, Variants } from 'framer-motion';

const Home: React.FC = () => {
  const scrollToEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="bg-black">
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-[0.45] contrast-[1.1] opacity-95 scale-[1.02]"
            alt="Industrial Backbone"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-4 mb-8">
              <span className="w-12 h-[2px] bg-blue-600 shadow-[0_0_10px_rgba(0,112,255,1)]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500">Established 2005</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="flex flex-col font-black tracking-tighter uppercase text-glow-blue font-majestic mb-10">
              <span className="text-7xl md:text-[10rem] lg:text-[11rem] leading-[0.8] block">
                {BRAND_NAME}
              </span>
              <span className="flex flex-col mt-4">
                <span className="text-blue-600 italic text-xl md:text-5xl tracking-[0.2em] leading-none block">
                  Industrial
                </span>
                <span className="text-blue-600 italic text-xl md:text-5xl tracking-[0.2em] leading-none block mt-2">
                  Excellence
                </span>
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-200 mb-14 leading-relaxed max-w-2xl font-light border-l border-blue-600/30 pl-8">
              Pioneering high-performance building automation, thermal insulation solutions, and strategic industrial supply for Saudi Arabia's infrastructure.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={scrollToEnquiry}
                className="px-14 py-6 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.25em] rounded-sm shadow-[0_0_40px_rgba(0,112,255,0.4)] transition-all active:scale-95"
              >
                Inquiry
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('divisions-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-14 py-6 bg-white/5 border border-white/20 backdrop-blur-md text-white font-black uppercase tracking-[0.25em] rounded-sm hover:bg-white/10 transition-all text-center active:scale-95"
              >
                Divisions
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 group cursor-pointer" onClick={() => document.getElementById('divisions-grid')?.scrollIntoView({ behavior: 'smooth'})}>
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60 group-hover:text-blue-400 transition-colors">Discover Operations</span>
          <div className="animate-bounce-subtle flex flex-col items-center">
            <div className="w-5 h-5 border-b-2 border-r-2 border-blue-500 rotate-45 mb-[-10px]"></div>
            <div className="w-5 h-5 border-b-2 border-r-2 border-blue-500/50 rotate-45"></div>
          </div>
        </div>
      </section>

      <section id="divisions-grid" className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10">
            <div>
              <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter text-glow-blue font-majestic">Operational <br/> Segments</h2>
              <p className="text-slate-500 text-lg max-w-xl">
                Vertical-specific engineering solutions designed for mission-critical industrial applications across the Kingdom.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {DIVISIONS.map((div) => (
              <a 
                key={div.id} 
                href={`#/divisions#${div.id}`} 
                className="group relative block aspect-[4/5] overflow-hidden bg-slate-900 border border-white/5"
              >
                <img 
                  src={div.image} 
                  alt={div.title} 
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-blue-900/10 transition-colors"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 group-hover:translate-x-2 transition-transform">
                    {div.id}
                  </div>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter group-hover:text-glow-blue transition-all">{div.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
