
import React, { useState } from 'react';

const QuickInquiry: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  // LIVE FORMSPREE ENDPOINT
  const FORMSPREE_URL = "https://formspree.io/f/xgozenab";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="enquiry-section" className="bg-black py-32 relative scroll-mt-32">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center py-20 bg-white/5 border border-blue-500/30 rounded-sm backdrop-blur-xl animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-[0_0_50px_rgba(0,112,255,0.5)]">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-glow-blue font-majestic">Transmission Success</h2>
            <p className="text-slate-400 uppercase tracking-[0.2em] text-sm mb-10">Inquiry Logged into BGATE Core Systems</p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] hover:text-white transition-colors"
            >
              [ Send New Transmission ]
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="enquiry-section" className="bg-black py-32 relative scroll-mt-32">
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
              <form 
                className="bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-14 rounded-sm shadow-2xl" 
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                  <div className="relative group">
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">Contact Identity</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      className="w-full bg-black/40 border-b-2 border-white/10 p-4 focus:border-blue-600 outline-none transition-all text-white placeholder-white/20" 
                      placeholder="NAME / CORPORATE TITLE" 
                    />
                  </div>
                  <div className="relative group">
                    <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">Data Destination</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      className="w-full bg-black/40 border-b-2 border-white/10 p-4 focus:border-blue-600 outline-none transition-all text-white placeholder-white/20" 
                      placeholder="EMAIL@DOMAIN.COM" 
                    />
                  </div>
                </div>
                
                <div className="mb-12 relative">
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">Inquiry Details</label>
                  <textarea 
                    required
                    name="message"
                    rows={4} 
                    className="w-full bg-black/40 border-b-2 border-white/10 p-4 focus:border-blue-600 outline-none transition-all text-white placeholder-white/20 resize-none" 
                    placeholder="DESCRIBE YOUR REQUIREMENTS..."
                  ></textarea>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className={`w-full md:w-auto px-12 py-5 font-black uppercase tracking-[0.2em] rounded-sm transition-all transform hover:-translate-y-1 ${
                      status === 'submitting' 
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(0,112,255,0.3)]'
                    }`}
                  >
                    {status === 'submitting' ? 'Transmitting...' : 'Submit Inquiry'}
                  </button>
                  {status === 'error' && (
                    <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">
                      Transmission Failed. <br/> Please check connection.
                    </span>
                  )}
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed text-center md:text-left">
                    Response time: <br/> &lt; 24 Hours
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default QuickInquiry;
