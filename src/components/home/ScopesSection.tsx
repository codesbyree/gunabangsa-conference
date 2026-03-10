import React, { useState } from 'react';
import { SCOPES } from '../../data/constants';
import { CheckCircle2, ChevronDown } from 'lucide-react';

const ScopesSection: React.FC = () => {
  const [activeScope, setActiveScope] = useState<number | null>(null);

  return (
    <section id="scopes" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-8">
            <div className="text-emerald-600 text-xs font-black uppercase tracking-[0.4em] mb-4">Our Focus</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 leading-tight">Comprehensive Research Tracks</h2>
          </div>
          <div className="lg:col-span-4 text-slate-500 text-sm font-medium leading-relaxed">
            We cover the full spectrum of modern health sciences, from foundational clinical practice to the cutting-edge of biomedical engineering.
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-100">
          {SCOPES.map(scope => (
            <ScopeCard key={scope.id} scope={scope} activeScope={activeScope} setActiveScope={setActiveScope} />
          ))}
        </div>
      </div>
    </section>
  );
};

type Scope = {
   id: number,
    title: string,
    icon: React.ReactNode,
    items: string[]
}

type ScopeCardProps = {
  scope: Scope;
  activeScope: number | null;
  setActiveScope: (id: number | null) => void;
}

function ScopeCard({ scope, activeScope, setActiveScope }: ScopeCardProps) {
  return (
    <div key={scope.id} className={`group p-8 border-r border-b border-slate-100 transition-all duration-300 relative overflow-hidden cursor-pointer flex flex-col justify-between ${activeScope === scope.id ? 'bg-emerald-950' : 'hover:bg-slate-50'}`} onClick={() => setActiveScope(activeScope === scope.id ? null : scope.id)}>
      <div>
        <div className={`mb-6 transition-colors ${activeScope === scope.id ? 'text-emerald-400' : 'text-emerald-600'}`}>{scope.icon}</div>
        <h3 className={`text-lg font-extrabold mb-4 leading-snug transition-colors ${activeScope === scope.id ? 'text-white' : 'text-emerald-950'}`}>{scope.title}</h3>
        
        <div className={`overflow-hidden transition-all duration-500 ${activeScope === scope.id ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="space-y-3 mt-4">
              {scope.items.map((item, idx) => (
                <li key={idx} className="flex items-start text-xs font-medium text-emerald-100/60"><CheckCircle2 className="w-3 h-3 mr-2 mt-0.5 text-emerald-500" />{item}</li>
              ))}
          </ul>
        </div>
      </div>
              
      <div className={`mt-6 inline-flex items-center text-[10px] font-black uppercase tracking-widest ${activeScope === scope.id ? 'text-emerald-400' : 'text-emerald-600'}`}>{activeScope === scope.id ? 'Collapse' : 'Learn More'}<ChevronDown className={`ml-2 w-3 h-3 transition-transform ${activeScope === scope.id ? 'rotate-180' : ''}`} /></div>
  </div>
  )
}

export default ScopesSection;
