import React, { useState } from 'react';
import { PRICING } from '../../data/constants';
import { CheckCircle2, CreditCard } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [currencyToggle, setCurrencyToggle] = useState<'IDR' | 'USD'>('IDR');

  return (
    <section id="pricing" className="py-24 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-emerald-600 text-xs font-black uppercase tracking-[0.4em] mb-4">Investment</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#062C1B] leading-tight">Registration Fees</h2>
            <p className="mt-6 text-slate-500 font-medium leading-relaxed">Choose the registration tier that best suits your status and preference. Early registration ensures the best available rates.</p>
          </div>
          <div className="flex bg-slate-100 p-1.5 rounded-lg border border-slate-200">
            <button onClick={() => setCurrencyToggle('IDR')} className={`px-6 py-2 rounded-md text-[10px] font-black uppercase tracking-widest transition-all ${currencyToggle === 'IDR' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-emerald-600'}`}>IDR</button>
            <button onClick={() => setCurrencyToggle('USD')} className={`px-6 py-2 rounded-md text-[10px] font-black uppercase tracking-widest transition-all ${currencyToggle === 'USD' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-emerald-600'}`}>USD</button>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {PRICING.map((tier) => (
            <div key={tier.id} className="bg-[#FDFDFD] border border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-sm flex flex-col hover:shadow-xl transition-all duration-500 border-t-4 border-t-emerald-500">
              <div className="mb-10">
                <span className="text-emerald-600 text-[10px] font-black uppercase tracking-widest block mb-4">Tier</span>
                <h3 className="text-3xl font-extrabold text-[#062C1B] mb-8">{tier.category}</h3>
                <div className="space-y-6">
                  {tier.prices[currencyToggle].map((p, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-slate-100 pb-4 group">
                      <span className="text-sm font-bold text-slate-500 group-hover:text-emerald-600 transition-colors">{p.label}</span>
                      <div className="text-right text-nowrap"><span className="text-[10px] font-black text-slate-400 mr-1">{currencyToggle}</span><span className="text-2xl font-black text-[#062C1B]">{p.val}</span></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 mb-6">Benefits</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-xs font-medium text-slate-600"><CheckCircle2 className="w-3 h-3 text-emerald-500 mr-2 mt-0.5 shrink-0" />{benefit}</li>
                  ))}
                </ul>
              </div>
              <button className="mt-12 w-full py-5 bg-[#062C1B] text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition shadow-xl shadow-emerald-950/20 active:scale-95 flex items-center justify-center gap-3">Select <CreditCard className="w-4 h-4" /></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
