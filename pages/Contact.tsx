
import React from 'react';
import { MAIN_OFFICE, JUBAIL_BRANCH } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="pt-48 pb-24 border-b border-white/5 bg-slate-900/10">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter text-glow-blue font-majestic">
            Network <br/> Access
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl font-light">
            Connect with our engineering specialists or safety consultants via our Saudi Arabia headquarters and regional branches.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Contact Form */}
            <div id="enquiry-section" className="bg-white/5 p-12 border border-white/10 rounded-sm relative overflow-hidden scroll-mt-32">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 blur-3xl"></div>
              <h2 className="text-3xl font-bold mb-12 uppercase tracking-tighter font-majestic">Inquiry Center</h2>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Full Identity</label>
                    <input type="text" className="w-full bg-black/40 border-b border-white/20 p-4 outline-none focus:border-blue-600 transition-all text-white" placeholder="NAME" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Email Node</label>
                    <input type="email" className="w-full bg-black/40 border-b border-white/20 p-4 outline-none focus:border-blue-600 transition-all text-white" placeholder="EMAIL" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Target Division</label>
                  <select className="w-full bg-black/40 border-b border-white/20 p-4 outline-none focus:border-blue-600 transition-all text-white/50">
                    <option>General Support</option>
                    <option>Control & Automation</option>
                    <option>Industrial Insulation</option>
                    <option>Safety & PPE</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Message Payload</label>
                  <textarea rows={4} className="w-full bg-black/40 border-b border-white/20 p-4 outline-none focus:border-blue-600 transition-all text-white resize-none" placeholder="DESCRIBE YOUR REQUIREMENTS..."></textarea>
                </div>
                <button type="button" className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest shadow-[0_0_30px_rgba(0,112,255,0.3)] transition-all">
                  Submit Transmission
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div className="space-y-16">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-8 h-8 bg-blue-600 flex items-center justify-center text-xs font-black">01</span>
                  <h3 className="text-2xl font-bold uppercase tracking-widest">Dammam HQ</h3>
                </div>
                <div className="space-y-6 text-slate-400 font-light border-l border-white/10 pl-8 ml-4">
                  <p className="text-xl text-white">{MAIN_OFFICE.address}</p>
                  <p>{MAIN_OFFICE.pobox}</p>
                  <div className="grid grid-cols-2 gap-8 pt-4">
                    <div className="space-y-2">
                      <span className="block text-[10px] font-black text-blue-500 uppercase tracking-widest">Telecommunication</span>
                      <p className="text-white text-sm font-bold">{MAIN_OFFICE.phone[0]}</p>
                    </div>
                    <div className="space-y-2">
                      <span className="block text-[10px] font-black text-blue-500 uppercase tracking-widest">Digital Mail</span>
                      <p className="text-white text-sm font-bold">{MAIN_OFFICE.emails[0]}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-8 h-8 bg-slate-800 flex items-center justify-center text-xs font-black">02</span>
                  <h3 className="text-2xl font-bold uppercase tracking-widest">Jubail Operations</h3>
                </div>
                <div className="space-y-6 text-slate-400 font-light border-l border-white/10 pl-8 ml-4">
                  <p className="text-xl text-white">{JUBAIL_BRANCH.address}</p>
                  <div className="space-y-2 pt-4">
                    <span className="block text-[10px] font-black text-blue-500 uppercase tracking-widest">Direct Line</span>
                    <p className="text-white text-sm font-bold">{JUBAIL_BRANCH.phone[0]}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
