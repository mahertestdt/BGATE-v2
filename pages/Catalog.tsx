import React from 'react';
import { TRADING_CATALOG } from '../constants';

const Catalog: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-black text-white">
      <section className="py-32 bg-slate-900/20 border-b border-white/5">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-glow-blue font-majestic">Supply <br/> Catalog</h1>
          <p className="text-xl text-slate-400 max-w-2xl font-light">
            Comprehensive inventory of mission-critical engineering components, specialized alloys, and high-performance consumables.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-20">
            {TRADING_CATALOG.map((category) => (
              <div key={category.category} className="border border-white/10 overflow-hidden rounded-sm bg-white/5 backdrop-blur-sm">
                <div className="p-8 bg-black/40 border-b border-white/10 flex justify-between items-center">
                  <h3 className="text-2xl font-bold uppercase tracking-tighter font-majestic">{category.category}</h3>
                  <div className="w-8 h-8 bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-[10px] font-bold text-blue-400">
                    ID
                  </div>
                </div>
                <div className="p-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {category.items.map(item => (
                       <div key={item} className="flex items-center gap-4 p-5 bg-black/40 border border-white/5 rounded-sm group hover:border-blue-500/50 transition-all">
                         <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(0,112,255,1)]"></span>
                         <span className="text-slate-400 font-bold uppercase text-[11px] tracking-widest">{item}</span>
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 bg-white/5 rounded-sm border border-white/10">
            <h3 className="text-3xl font-bold mb-12 uppercase tracking-tighter text-center font-majestic">Specialized Network Distribution</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left bg-black/40 rounded-sm overflow-hidden border border-white/5">
                <thead className="bg-blue-600/10 text-blue-500 border-b border-white/10">
                  <tr>
                    <th className="px-8 py-6 uppercase text-xs tracking-[0.3em] font-black">Brand Provider</th>
                    <th className="px-8 py-6 uppercase text-xs tracking-[0.3em] font-black">Specialization</th>
                    <th className="px-8 py-6 uppercase text-xs tracking-[0.3em] font-black">Segment Range</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400 text-xs font-bold tracking-widest uppercase">
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-8 py-6 font-black text-white">THERMOLEC</td>
                    <td className="px-8 py-6">ELECTRICAL HEATING</td>
                    <td className="px-8 py-6">DUCT HEATERS, SCR CONTROL</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-8 py-6 font-black text-white">TITUS</td>
                    <td className="px-8 py-6">AIR DISTRIBUTION</td>
                    <td className="px-8 py-6">VAV TERMINALS, DIFFUSERS</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-8 py-6 font-black text-white">PURE HUMIDIFIERS</td>
                    <td className="px-8 py-6">HUMIDIFICATION</td>
                    <td className="px-8 py-6">STEAM EXCHANGERS, GAS FIRED</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-8 py-6 font-black text-white">DEFIL INERTIAL</td>
                    <td className="px-8 py-6">FILTRATION SYSTEMS</td>
                    <td className="px-8 py-6">INERTIAL DUST CONTROL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;