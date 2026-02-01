import React, { useState, useEffect } from 'react';

// --- Constants & Types ---
const BRAND_NAME = "BGATE";
const COMPANY_NAME = "Ali Bin Qashash Al Omari General Contracting Co.";

const DIVISIONS = [
  {
    id: 'control',
    title: 'Control Division',
    tagline: 'Precision Automation & BMS',
    description: 'Engineering sophisticated Building Automation and Energy Management Systems. We design and assemble high-performance control panels.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'insulation',
    title: 'Industrial Insulation',
    tagline: 'Thermal & Acoustic Solutions',
    description: 'Premier supplier of high-performance Saudi Rockwool and polyurethane systems. Critical thermal barriers for extreme environments.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'trading',
    title: 'Trading Division',
    tagline: 'Global Industrial Supply',
    description: 'Strategic supply chain management for specialized alloys, HVAC consumables, and vibration control systems.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'safety',
    title: 'Safety Equipment',
    tagline: 'HSE & Workforce Protection',
    description: 'Leading provider of certified Personal Protection Equipment (PPE). Securing industrial workforces with high-quality safety ecosystems.',
    image: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&q=80&w=1200'
  }
];

// --- Components ---

const BackLink = () => (
  <a href="#/" className="inline-flex items-center gap-2 text-blue-500 hover:text-white transition-colors mb-12 group">
    <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back to Core</span>
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
      isScrolled ? 'bg-black/90 backdrop-blur-xl border-white/10 py-4' : 'bg-transparent border-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-sm flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(0,112,255,0.5)] transition-transform group-hover:scale-110">
            B
          </div>
          <span className="text-2xl font-bold tracking-tighter text-glow-blue uppercase">{BRAND_NAME}</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          <a href="#/about" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-500 transition-colors">Intelligence</a>
          <a href="#/divisions" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-500 transition-colors">Divisions</a>
          <a href="#/contact" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-500 transition-colors">Network</a>
          <a href="#/contact" className="px-6 py-2 bg-blue-600/10 border border-blue-500/50 text-blue-400 rounded-sm font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
            Inquiry
          </a>
        </nav>
      </div>
    </header>
  );
};

const Home = () => (
  <div className="bg-black">
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover brightness-[0.12] contrast-[1.2] opacity-80"
          alt="Industrial"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[2px] bg-blue-600"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500">Established 2005</span>
          </div>
          <h1 className="font-black tracking-tighter uppercase text-glow-blue font-majestic mb-8">
            <span className="text-7xl md:text-[10rem] leading-[0.85] block">{BRAND_NAME}</span>
            <span className="text-blue-600 italic text-2xl md:text-5xl mt-4 block leading-none tracking-widest">Industrial</span>
            <span className="text-blue-600 italic text-2xl md:text-5xl block leading-none mt-2 tracking-widest">Excellence</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl font-light">
            Precision automation, thermal barriers, and strategic supply for Saudi Arabia's infrastructure.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#/divisions" className="px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-[0.2em] rounded-sm shadow-[0_0_40px_rgba(0,112,255,0.4)] hover:bg-blue-700 transition-all">
              Divisions
            </a>
            <a href="#/contact" className="px-10 py-5 bg-white/5 border border-white/20 text-white font-black uppercase tracking-[0.2em] rounded-sm hover:bg-white/10 transition-all">
              Contact and Inquire
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black mb-24 uppercase tracking-tighter text-glow-blue font-majestic">Segments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {DIVISIONS.map(div => (
            <a key={div.id} href="#/divisions" className="group relative block aspect-[4/5] bg-slate-900 border border-white/5 overflow-hidden">
              <img src={div.image} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" alt={div.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 p-8">
                <div className="text-blue-500 text-[10px] font-black mb-4 tracking-widest uppercase">{div.id}</div>
                <h3 className="text-xl font-bold uppercase tracking-tighter">{div.title}</h3>
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
        <div>
          <p className="text-2xl text-blue-400 font-light leading-relaxed mb-12">
            Established in 2005, BGATE is built on a foundation of engineering excellence and technical integrity.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Our mission is to provide unparalleled services to the Air-Conditioning, Refrigeration, and Safety industries through complete engineering solutions. 
            Since its inception, BGATE has become synonymous with quality and timely performance across the Kingdom.
          </p>
        </div>
        <div className="border border-white/10 p-1 bg-slate-900/50">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale" alt="HQ" />
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
            <div className="flex-1">
              <img src={div.image} className="w-full h-[400px] object-cover rounded-sm border border-white/10" alt={div.title} />
            </div>
            <div className="flex-1">
              <span className="text-blue-500 font-black uppercase tracking-widest text-xs">{div.tagline}</span>
              <h2 className="text-5xl font-bold my-6 uppercase tracking-tighter font-majestic">{div.title}</h2>
              <p className="text-slate-400 text-lg leading-relaxed">{div.description}</p>
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
        <h1 className="text-7xl font-black mb-24 uppercase tracking-tighter text-glow-blue font-majestic">Network</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="bg-white/5 p-12 border border-white/10">
            {status === 'success' ? (
              <div className="text-center py-20">
                <h2 className="text-3xl font-bold text-blue-500 mb-4 uppercase tracking-widest font-majestic">Transferred</h2>
                <p className="text-slate-400 uppercase text-xs tracking-widest">Our engineers will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <input required className="w-full bg-black border-b border-white/20 p-4 outline-none focus:border-blue-600 text-white" placeholder="NAME" />
                <input required type="email" className="w-full bg-black border-b border-white/20 p-4 outline-none focus:border-blue-600 text-white" placeholder="EMAIL" />
                <textarea required rows={4} className="w-full bg-black border-b border-white/20 p-4 outline-none focus:border-blue-600 text-white resize-none" placeholder="MESSAGE"></textarea>
                <button className="w-full py-5 bg-blue-600 text-white font-black uppercase tracking-widest shadow-lg">Submit Transmission</button>
              </form>
            )}
          </div>
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-6">Dammam HQ</h3>
              <p className="text-slate-400 leading-relaxed uppercase tracking-wider text-sm">King Khalid Street, Dammam<br/>P.O. Box 35449<br/>+966 3 833 4699</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-6">Jubail Branch</h3>
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
      <h3 className="text-2xl font-black text-glow-blue mb-4">{BRAND_NAME}</h3>
      <p className="text-[10px] text-slate-600 uppercase tracking-[0.5em]">© {new Date().getFullYear()} {COMPANY_NAME}</p>
    </div>
  </footer>
);

// --- Main App ---

const App: React.FC = () => {
  const [path, setPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHash = () => {
      setPath(window.location.hash || '#/');
      window.scrollTo(0, 0); // Ensure page starts at top on nav
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