import React, { useState, useEffect } from 'react';

// --- Constants & Types ---
const BRAND_NAME = "BGATE";
const COMPANY_NAME = "Ali Bin Qashash Al Omari General Contracting Co.";

const DIVISIONS = [
  {
    id: 'control',
    title: 'Control Division',
    tagline: 'Precision Automation & BMS',
    description: 'Engineering sophisticated Building Automation and Energy Management Systems (BMS). We design and assemble mission-critical control panels.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'insulation',
    title: 'Industrial Insulation',
    tagline: 'Thermal & Acoustic Solutions',
    description: 'Premier provider of industrial-grade insulation. High-performance Saudi Rockwool and polyurethane systems for complex thermal barriers.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'trading',
    title: 'Trading Division',
    tagline: 'Global Industrial Supply',
    description: 'Strategic supply chain management for specialized alloys, industrial valves, and heavy vibration control systems.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'safety',
    title: 'Safety Equipment',
    tagline: 'HSE & Workforce Protection',
    description: 'Leading provider of certified Personal Protection Equipment (PPE). Securing industrial workforces with premium safety gear.',
    image: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&q=80&w=1200'
  }
];

// --- Sub-Components ---

const BackLink = () => (
  <a href="#/" className="inline-flex items-center gap-2 text-blue-500 hover:text-white transition-all mb-12 group">
    <span className="text-xl group-hover:-translate-x-2 transition-transform duration-300">←</span>
    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back to Hub</span>
  </a>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
      isScrolled ? 'bg-black/95 backdrop-blur-xl border-white/10 py-3 shadow-2xl' : 'bg-transparent border-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-sm flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(0,112,255,0.5)] transition-all group-hover:scale-105">
            B
          </div>
          <span className="text-2xl font-bold tracking-tighter text-glow-blue uppercase">{BRAND_NAME}</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {['Intelligence', 'Divisions', 'Network'].map((item) => (
            <a 
              key={item}
              href={`#/${item === 'Network' ? 'contact' : item.toLowerCase()}`} 
              className="px-3 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-500 hover:bg-white/5 rounded transition-all"
            >
              {item}
            </a>
          ))}
          <a href="#/contact" className="ml-4 px-8 py-3 bg-blue-600 text-white rounded-sm font-bold text-[11px] uppercase tracking-widest hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(0,112,255,0.4)] transition-all">
            Inquiry
          </a>
        </nav>
      </div>
    </header>
  );
};

// --- Page Views ---

const Home = () => (
  <div className="bg-black">
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover brightness-[0.35] contrast-[1.1] opacity-90"
          alt="Industrial Core"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,112,255,0.15),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[2px] bg-blue-600 shadow-[0_0_10px_rgba(0,112,255,1)]"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500">Established 2005</span>
          </div>
          <h1 className="font-black tracking-tighter uppercase text-glow-blue font-majestic mb-8">
            <span className="text-7xl md:text-[10rem] leading-[0.85] block transform transition-all duration-700">{BRAND_NAME}</span>
            <div className="mt-4">
               <span className="text-blue-600 italic text-2xl md:text-5xl block leading-none tracking-widest">Industrial</span>
               <span className="text-blue-600 italic text-2xl md:text-5xl block leading-none mt-2 tracking-widest">Excellence</span>
            </div>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl font-light border-l border-blue-600/30 pl-8 leading-relaxed">
            Precision building automation, high-heat thermal barriers, and specialized industrial supply for Saudi Arabia's growing infrastructure node.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#/divisions" className="group relative px-12 py-5 bg-blue-600 text-white font-black uppercase tracking-[0.2em] rounded-sm overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(0,112,255,0.5)]">
              <span className="relative z-10">Divisions</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a href="#/contact" className="px-12 py-5 bg-white/10 border border-white/20 text-white font-black uppercase tracking-[0.2em] rounded-sm hover:bg-blue-600 hover:border-blue-600 transition-all">
              Contact and Inquire
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth'})}>
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60 group-hover:text-blue-400 transition-colors">Discover Operations</span>
        <div className="animate-bounce-subtle flex flex-col items-center">
          <div className="w-5 h-5 border-b-2 border-r-2 border-blue-500 rotate-45 mb-[-10px]"></div>
          <div className="w-5 h-5 border-b-2 border-r-2 border-blue-500/50 rotate-45"></div>
        </div>
      </div>
    </section>

    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-24">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-glow-blue font-majestic">Operational Segments</h2>
          <span className="text-[10px] font-black text-blue-600/50 uppercase tracking-[0.4em]">Vertical Units Active</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {DIVISIONS.map(div => (
            <a key={div.id} href="#/divisions" className="group relative block aspect-[4/5] bg-slate-900 overflow-hidden border border-white/5">
              <img src={div.image} className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out" alt={div.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-blue-950/20 transition-all duration-700"></div>
              <div className="absolute bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-blue-500 text-[10px] font-black mb-4 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">{div.id}</div>
                <h3 className="text-xl font-bold uppercase tracking-tighter group-hover:text-glow-blue transition-all">{div.title}</h3>
                <div className="w-0 group-hover:w-full h-[1px] bg-blue-600 mt-4 transition-all duration-700"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const About = () => (
  <div className="pt-48 pb-32 bg-black min-h-screen">
    <div className="container mx-auto px-6">
      <BackLink />
      <h1 className="text-7xl font-black mb-12 uppercase tracking-tighter text-glow-blue font-majestic">Intelligence</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="animate-in slide-in-from-left duration-700">
          <p className="text-2xl text-blue-400 font-light leading-relaxed mb-12">
            Established in 2005, BGATE is built on a foundation of engineering excellence and technical integrity.
          </p>
          <div className="space-y-8 text-slate-400 text-lg leading-relaxed font-light">
            <p>Our mission is to provide unparalleled services to the Air-Conditioning, Refrigeration, and Safety industries through complete engineering solutions.</p>
            <p>Since its inception, BGATE has become synonymous with quality and timely performance across the Kingdom, partnering with global leaders like SAUTER and TITUS.</p>
          </div>
        </div>
        <div className="border border-white/10 p-1 bg-slate-900/50 relative overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="BMS Engineering" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </div>
    </div>
  </div>
);

const Divisions = () => (
  <div className="pt-48 pb-32 bg-black min-h-screen">
    <div className="container mx-auto px-6">
      <BackLink />
      <h1 className="text-7xl font-black mb-24 uppercase tracking-tighter text-glow-blue font-majestic">Operational Units</h1>
      <div className="space-y-32">
        {DIVISIONS.map((div, i) => (
          <div key={div.id} className={`flex flex-col lg:flex-row gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1 group relative overflow-hidden border border-white/5 bg-slate-900">
              <img src={div.image} className="w-full h-[500px] object-cover rounded-sm grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={div.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="flex-1 p-8">
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block">{div.tagline}</span>
              <h2 className="text-5xl font-bold my-6 uppercase tracking-tighter font-majestic border-l-4 border-blue-600 pl-8">{div.title}</h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light">{div.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [status, setStatus] = useState('idle');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <div className="pt-48 pb-32 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <BackLink />
        <h1 className="text-7xl font-black mb-24 uppercase tracking-tighter text-glow-blue font-majestic">Global Network</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="bg-white/5 p-12 border border-white/10 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 blur-3xl"></div>
            {status === 'success' ? (
              <div className="text-center py-20 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-[0_0_40px_rgba(0,112,255,0.4)]">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-blue-500 mb-4 uppercase tracking-widest font-majestic">Transferred</h2>
                <p className="text-slate-400 uppercase text-xs tracking-widest">Our engineers will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Identification</label>
                  <input required className="w-full bg-black/50 border-b border-white/20 p-4 outline-none focus:border-blue-600 text-white transition-all" placeholder="NAME / COMPANY" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Node Address</label>
                  <input required type="email" className="w-full bg-black/50 border-b border-white/20 p-4 outline-none focus:border-blue-600 text-white transition-all" placeholder="EMAIL" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Inquiry Data</label>
                  <textarea required rows={4} className="w-full bg-black/50 border-b border-white/20 p-4 outline-none focus:border-blue-600 text-white resize-none transition-all" placeholder="DESCRIBE YOUR PROJECT REQUIREMENTS..."></textarea>
                </div>
                <button className="w-full py-5 bg-blue-600 text-white font-black uppercase tracking-widest shadow-lg hover:shadow-[0_0_30px_rgba(0,112,255,0.4)] transition-all">Submit Transmission</button>
              </form>
            )}
          </div>
          <div className="space-y-16">
            <div className="border-l border-blue-600 pl-8">
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 font-majestic text-glow-blue">Dammam HQ</h3>
              <p className="text-slate-400 leading-relaxed uppercase tracking-wider text-sm">King Khalid Street, Dammam<br/>P.O. Box 35449<br/>+966 3 833 4699</p>
            </div>
            <div className="border-l border-slate-700 pl-8">
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-6 font-majestic">Jubail Branch</h3>
              <p className="text-slate-400 leading-relaxed uppercase tracking-wider text-sm">Madina Munawarah St.<br/>+966 013 363 5156</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-black py-20 border-t border-white/5 text-center">
    <div className="container mx-auto px-6">
      <h3 className="text-2xl font-black text-glow-blue mb-4 tracking-tighter">{BRAND_NAME}</h3>
      <p className="text-[10px] text-slate-600 uppercase tracking-[0.5em] mb-4">© {new Date().getFullYear()} {COMPANY_NAME}</p>
      <div className="flex justify-center gap-10 mt-10 text-[9px] font-black uppercase tracking-widest text-slate-700">
        <a href="#" className="hover:text-blue-500 transition-colors">Legal & Compliance</a>
        <a href="#" className="hover:text-blue-500 transition-colors">Privacy Protocol</a>
        <a href="#" className="hover:text-blue-500 transition-colors">HSE Statement</a>
      </div>
    </div>
  </footer>
);

// --- Main Entry ---

const App: React.FC = () => {
  const [path, setPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHash = () => {
      setPath(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const render = () => {
    switch (path) {
      case '#/about': return <About />;
      case '#/divisions': return <Divisions />;
      case '#/contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col scanlines">
      <Header />
      <main className="flex-grow">{render()}</main>
      <Footer />
    </div>
  );
};

export default App;