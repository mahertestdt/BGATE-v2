
import React from 'react';
import { MAIN_OFFICE, JUBAIL_BRANCH } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 bg-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Connect with our engineering experts or safety specialists for your next major project.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form Placeholder UI */}
            <div className="bg-white p-10 shadow-2xl rounded-2xl border border-slate-100">
              <h2 className="text-3xl font-bold mb-8">Send an Inquiry</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                    <input type="text" className="w-full p-4 border border-slate-200 rounded focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                    <input type="email" className="w-full p-4 border border-slate-200 rounded focus:border-blue-500 outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Subject</label>
                  <select className="w-full p-4 border border-slate-200 rounded focus:border-blue-500 outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Control Division / Automation</option>
                    <option>Safety Equipment / HSE</option>
                    <option>Trading / Industrial Supply</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Message</label>
                  <textarea rows={5} className="w-full p-4 border border-slate-200 rounded focus:border-blue-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow-lg transition-all">
                  Submit Request
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs">1</span>
                  Main Office - Dammam
                </h3>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 space-y-4">
                  <p className="text-lg font-medium">{MAIN_OFFICE.address}</p>
                  <p className="text-slate-600">{MAIN_OFFICE.pobox}</p>
                  <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</span>
                      {MAIN_OFFICE.phone.map(p => <p key={p} className="text-sm font-bold">{p}</p>)}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Fax</span>
                      <p className="text-sm font-bold">{MAIN_OFFICE.fax}</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</span>
                    {MAIN_OFFICE.emails.map(e => <p key={e} className="text-sm font-bold text-blue-600">{e}</p>)}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center text-white text-xs">2</span>
                  Jubail Branch (Fire & Safety)
                </h3>
                <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 space-y-4">
                  <p className="text-lg font-medium">{JUBAIL_BRANCH.address}</p>
                  <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</span>
                      <p className="text-sm font-bold">{JUBAIL_BRANCH.phone[0]}</p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Fax</span>
                      <p className="text-sm font-bold">{JUBAIL_BRANCH.fax}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEO Metadata Hint */}
      <div className="hidden">
        <h3>SEO Metadata</h3>
        <p>Title: Contact BGATE | Offices in Dammam & Jubail</p>
        <p>Description: Get in touch with BGATE. Our main office is in Dammam with a dedicated Fire & Safety branch in Jubail. Contact us for engineering solutions in Saudi Arabia.</p>
      </div>
    </div>
  );
};

export default Contact;
