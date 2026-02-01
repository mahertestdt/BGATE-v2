import React from 'react';
import { BRAND_NAME, COMPANY_NAME } from '../constants.tsx';

const About: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="pt-48 pb-24 border-b border-white/5 bg-slate-900/10">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter text-glow-blue font-majestic">
            Corporate <br/> Intelligence
          </h1>
          <p className="text-xl text-blue-400 font-medium max-w-2xl leading-relaxed">
            Established in 2005, BGATE is built on a foundation of engineering excellence and an unyielding commitment to Saudi Arabia's industrial expansion.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[2px] bg-blue-600"></span>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-blue-500">Mission Parameters</span>
              </div>
              <h2 className="text-4xl font-bold mb-8 uppercase tracking-tighter font-majestic">Mission & Vision</h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 font-light">
                Our mission is to provide unparalleled services to the Air-Conditioning, Refrigeration, and Safety industries through complete engineering solutions. Since its inception, BGATE has become synonymous with quality, timely performance, and complete customer satisfaction.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed font-light">
                We envision a future where Saudi industries operate with maximum efficiency and safety, driven by the technical integrity of the solutions we deploy today.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/10 blur-2xl opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Industrial Architecture" 
                className="relative rounded-sm border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-10 -left-10 bg-blue-600 p-10 hidden lg:block">
                <span className="block text-5xl font-black tracking-tighter">18+</span>
                <span className="text-[10px] uppercase tracking-[0.4em] font-black">Years of Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900/20 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-12 uppercase tracking-[0.3em] text-blue-500">Core Philosophy</h2>
          <p className="text-3xl text-white leading-tight font-light italic font-majestic">
            "We focus on delivering high-caliber guidance and economic solutions without compromising quality—navigating competitive markets with technical integrity."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;