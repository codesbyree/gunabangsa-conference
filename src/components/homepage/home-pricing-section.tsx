import { CheckCircle2Icon, CreditCardIcon } from "lucide-react";
import { useState } from "react";

const pricing = [
  {
    category: "IEEE Member",
    id: "ieee",
    prices: {
      IDR: [
        { label: "Members (Online/Onsite)", val: "4.000.000" },
        { label: "Student Members (Online/Onsite)", val: "3.500.000" },
      ],
      USD: [
        { label: "Members (Online/Onsite)", val: "250" },
        { label: "Student Members (Online/Onsite)", val: "225" },
      ],
    },
    benefits: [
      "Official Congress Documentation",
      "Digital Certificates of Attendance",
      "Conference Program eBook",
      "Abstract eBook",
      "Welcome Cocktail & Gala Dinner*",
      "Attendance at all Scientific Sessions",
      "Catering during Scheduled Breaks",
    ],
  },
  {
    category: "Non IEEE Member",
    id: "non-ieee",
    prices: {
      IDR: [
        { label: "Online Participation", val: "5.500.000" },
        { label: "Onsite Participation", val: "7.500.000" },
      ],
      USD: [
        { label: "Online Participation", val: "350" },
        { label: "Onsite Participation", val: "500" },
      ],
    },
    benefits: [
      "Official Congress Documentation",
      "Digital Certificates of Attendance",
      "Conference Program eBook",
      "Abstract eBook",
      "Onsite: 3-Night Stay (Deluxe Twin Sharing)",
      "Onsite: Full Dining Package (3B, 2L, 2D)",
      "Closing Dinner Included*",
    ],
  },
];

export default function HomePricingSection() {
  const [currencyToggle, setCurrencyToggle] = useState<"IDR" | "USD">("IDR");

  return (
    <section
      id="pricing"
      className="py-24 bg-white border-b border-slate-100 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-emerald-600 text-xs font-black uppercase tracking-[0.4em] mb-4">
              Investment
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#062C1B] leading-tight">
              Registration Fees
            </h2>
            <p className="mt-6 text-slate-500 font-medium leading-relaxed">
              Choose the registration tier that best suits your status and
              participation preference. Early registration ensures the best
              available rates.
            </p>
          </div>
          <div className="flex bg-slate-100 p-1.5 rounded-lg border border-slate-200">
            <button
              onClick={() => setCurrencyToggle("IDR")}
              className={`px-6 py-2 rounded-md text-[10px] font-black uppercase tracking-widest transition-all ${currencyToggle === "IDR" ? "bg-emerald-600 text-white shadow-lg" : "text-slate-500 hover:text-emerald-600"}`}
            >
              Indonesian (IDR)
            </button>
            <button
              onClick={() => setCurrencyToggle("USD")}
              className={`px-6 py-2 rounded-md text-[10px] font-black uppercase tracking-widest transition-all ${currencyToggle === "USD" ? "bg-emerald-600 text-white shadow-lg" : "text-slate-500 hover:text-emerald-600"}`}
            >
              International (USD)
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {pricing.map((tier) => (
            <div
              key={tier.id}
              className="bg-[#FDFDFD] border border-slate-100 rounded-4xl p-8 md:p-12 shadow-sm flex flex-col hover:shadow-xl transition-all duration-500 border-t-4 border-t-emerald-500"
            >
              <div className="mb-10">
                <span className="text-emerald-600 text-[10px] font-black uppercase tracking-widest block mb-4">
                  Participation Tier
                </span>
                <h3 className="text-3xl font-extrabold text-[#062C1B] mb-8">
                  {tier.category}
                </h3>
                <div className="space-y-6">
                  {tier.prices[currencyToggle].map((p, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-end border-b border-slate-100 pb-4 group"
                    >
                      <span className="text-sm font-bold text-slate-500 group-hover:text-emerald-600 transition-colors">
                        {p.label}
                      </span>
                      <div className="text-right text-nowrap">
                        <span className="text-[10px] font-black text-slate-400 mr-1">
                          {currencyToggle}
                        </span>
                        <span className="text-2xl font-black text-[#062C1B]">
                          {p.val}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 mb-6">
                  Standard Benefits
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                  {tier.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start text-xs font-medium text-slate-600"
                    >
                      <CheckCircle2Icon className="w-3 h-3 text-emerald-500 mr-2 mt-0.5 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-12 w-full py-5 bg-[#062C1B] text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition shadow-xl shadow-emerald-950/20 active:scale-95 flex items-center justify-center gap-3">
                Select {tier.category} <CreditCardIcon className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
