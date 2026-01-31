
import React from 'react';
import { BRAND_NAME, COMPANY_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Our Corporate Identity</h1>
          <p className="text-blue-400 text-xl font-medium max-w-2xl">
            Established in 2005, BGATE is built on a foundation of engineering excellence and unyielding commitment to client success.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-blue-900">Mission & Vision</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Our mission is to provide unparalleled services to the Air-Conditioning & Refrigeration industry through complete engineering solutions. Since its inception, BGATE has become synonymous with quality, timely performance, and complete customer satisfaction.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                We envision a future where Saudi industries operate with maximum efficiency, safety, and technological prowess, driven by the solutions we provide today.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Office" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-blue-600 p-8 text-white hidden lg:block">
                <span className="block text-4xl font-bold">18+</span>
                <span className="text-sm uppercase tracking-widest font-bold">Years of Industry Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Our Team Philosophy</h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-10"></div>
          <p className="text-xl text-slate-600 leading-relaxed italic">
            "BGATE possesses a high-caliber team of experienced technical and sales professionals. We focus on delivering guidance and economic solutions without compromising quality—navigating competitive markets with technical integrity."
          </p>
        </div>
      </section>
      
      {/* SEO Metadata Hint (rendered as invisible or comment-like for now as this is a SPA) */}
      <div className="hidden">
        <h3>SEO Metadata</h3>
        <p>Title: About BGATE | Ali Bin Qashash Al Omari General Contracting</p>
        <p>Description: Learn about BGATE's history, established in 2005, and our mission to lead the Saudi engineering and contracting market through technical expertise and quality solutions.</p>
      </div>
    </div>
  );
};

export default About;
