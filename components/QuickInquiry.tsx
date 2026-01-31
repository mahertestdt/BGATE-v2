
import React from 'react';

const QuickInquiry: React.FC = () => {
  return (
    <section id="enquiry-section" className="bg-black py-32 relative">
      {/* Decorative side line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600/30"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-bold mb-6 text-glow-blue font-majestic uppercase tracking-tighter">Direct <br/> Inquiry</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Connect with the engineering matrix. Our consultants are standing by for project validation and technical support.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  Official Request Channel
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <form className="bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-14 rounded-sm shadow-2xl" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                  <div className="relative group">
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">Contact Identity</label>
                    <input 
                      type="text" 
                      className="w-full bg-black/40 border-b-2 border-white/10 p-4 focus:border-blue-600 outline-none transition-all text-white placeholder-white/20" 
                      placeholder="NAME / CORPORATE TITLE" 
                    />
                  </div>
                  <div className="relative group">
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">Data Destination</label>
                    <input 
                      type="email" 
                      className="w-full bg-black/40 border-b-2 border-white/10 p-4 focus:border-blue-600 outline-none transition-all text-white placeholder-white/20" 
                      placeholder="EMAIL@DOMAIN.COM" 
                    />
                  </div>
                </div>
                
                <div className="mb-12 relative">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">Inquiry Details</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-black/40 border-b-2 border-white/10 p-4 focus:border-blue-600 outline-none transition-all text-white placeholder-white/20 resize-none" 
                    placeholder="DESCRIBE PROJECT PARAMETERS OR PRODUCT REQUIREMENTS..."
                  ></textarea>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <button 
                    type="submit" 
                    className="w-full md:w-auto px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.2em] rounded-sm shadow-[0_0_30px_rgba(0,112,255,0.3)] transition-all transform hover:-translate-y-1"
                  >
                    Submit Inquiry
                  </button>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed text-center md:text-left">
                    Response time: <br/> &lt; 24 Hours
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickInquiry;
