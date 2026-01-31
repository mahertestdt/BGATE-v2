
import React from 'react';

const Divisions: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-black text-white">
      <section className="py-32 border-b border-white/5 bg-slate-900/20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter text-glow-blue font-majestic">Operational <br/> Intelligence</h1>
          <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
            Strategic engineering segments optimized for automation, protection, and mission-critical supply.
          </p>
        </div>
      </section>

      {/* Control Division */}
      <section id="control" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-1 bg-blue-600"></span>
                <span className="font-black text-blue-500 uppercase tracking-[0.3em] text-xs">Automation Protocol</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter font-majestic">Control Division</h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
                Engineering sophisticated Building Automation and Energy Management Systems (BMS/DDC). We create intelligent environments that optimize resource consumption through precise logic and hardware orchestration.
              </p>
              
              <div className="bg-white/5 p-10 border border-white/10 rounded-sm">
                <h4 className="font-black text-blue-500 mb-6 uppercase text-xs tracking-[0.4em]">Fabrication Matrix</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-bold uppercase tracking-widest text-slate-300">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> DDC PANELS
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> PLC CONTROL
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> LIGHTING SYSTEMS
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> MOTOR STARTERS
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4">
                 <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=600" className="rounded-sm grayscale brightness-50 border border-white/10 w-full h-64 object-cover" alt="Server Room" />
                 <img src="https://images.unsplash.com/photo-1597484662317-9bd77399169a?auto=format&fit=crop&q=80&w=600" className="rounded-sm border border-white/10 w-full h-80 object-cover" alt="Automation" />
               </div>
               <div className="space-y-4 pt-12">
                 <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600" className="rounded-sm border border-white/10 w-full h-80 object-cover" alt="Wires" />
                 <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600" className="rounded-sm grayscale brightness-50 border border-white/10 w-full h-64 object-cover" alt="Components" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Division */}
      <section id="safety" className="py-32 bg-slate-900/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-1 bg-blue-600"></span>
                <span className="font-black text-blue-500 uppercase tracking-[0.3em] text-xs">Protection Protocol</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter font-majestic">Safety Division</h2>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                Primary supplier of environmentally friendly, high-quality Personal Safety Products (PPE) in Saudi Arabia. We secure workforces with the industry's most reliable protection gear.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 rounded-sm">
              <h4 className="font-black mb-6 text-blue-500 uppercase text-xs tracking-[0.4em]">HSE SERVICES</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-slate-300">
                <li>• HSE CONSULTANCY</li>
                <li>• CERTIFIED TRAINING</li>
                <li>• SITE INSPECTIONS</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'HEAD & FACE', desc: 'HELMETS, GOGGLES, SHIELDS' },
              { title: 'RESPIRATORY', desc: 'MASKS, BREATHING APPARATUS' },
              { title: 'BODY & FALL', desc: 'COVERALLS, HARNESSES' },
              { title: 'ROAD & SIGNS', desc: 'BARRIERS, CUSTOM SIGNAGE' }
            ].map(item => (
              <div key={item.title} className="p-8 bg-black/50 border border-white/10 rounded-sm hover:border-blue-600 transition-all group">
                <h5 className="font-black text-white mb-3 tracking-widest group-hover:text-blue-500 transition-colors uppercase text-sm">{item.title}</h5>
                <p className="text-[10px] font-bold text-slate-500 tracking-[0.2em]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Divisions;
