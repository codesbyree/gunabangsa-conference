import { FileCode, ShieldCheck, Download } from 'lucide-react';

function NumberedSteps({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((text, i) => (
        <div key={i} className="flex gap-5">
          <div className="w-7 h-7 bg-emerald-500 rounded text-xs font-black text-white shrink-0 flex items-center justify-center">
            {i + 1}
          </div>
          <p className="text-slate-600 leading-relaxed font-medium">{text}</p>
        </div>
      ))}
    </div>
  );
}

export default function RevisedSubmissionInstructions() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-10">
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-8">
          <FileCode className="w-8 h-8 text-emerald-600" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-emerald-950 tracking-tighter uppercase leading-tight">
            Revised Submission Instructions
          </h2>
        </div>
        <div className="bg-emerald-100/80 p-8 rounded-3xl border border-emerald-200">
          <p className="text-slate-700 leading-relaxed font-medium">
            All manuscripts identified as requiring revision will undergo a subsequent review process. Authors are expected
            to prepare a clean <strong>Revised Manuscript</strong> and a separate <strong>Response to Reviewers</strong> document,
            clearly outlining how each reviewer's comment has been addressed.
          </p>
        </div>
      </section>

      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-8">
          <FileCode className="w-8 h-8 text-emerald-600" />
          <h3 className="text-xl lg:text-2xl font-black text-emerald-950 tracking-tighter uppercase leading-tight">
            Preparing the Revised Manuscript
          </h3>
        </div>
        <p className="text-slate-600 leading-relaxed font-medium">
          When preparing your revised submission for the final review, please ensure the following:
        </p>
        <NumberedSteps items={[
          'Two files must be submitted through the IGERS system: The Final Camera-Ready Manuscript (revised article) in .doc format and the Response to Reviewers document in .pdf format.',
          'Instructions for preparing the final camera-ready manuscript can be found in the Final Camera-Ready Guidelines.',
          'Respond directly to reviewer comments in the comment field of the IGERS system.',
          'Carefully proofread your manuscript for spelling, grammar, and formatting errors before submission.',
        ]} />
      </section>

      <div className="space-y-10">
        <div className="flex items-center gap-4">
          <FileCode className="w-6 h-6 text-emerald-600" />
          <h3 className="text-xl lg:text-2xl font-black text-emerald-950 tracking-tighter uppercase leading-tight">
            Template Resources
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'IEEE MS Word Template', subtitle: 'Standard .docx format' },
            { title: 'IEEE LaTeX Template', subtitle: 'Source / Overleaf' },
          ].map((tmpl) => (
            <a
              key={tmpl.title}
              href="#"
              className="flex items-center justify-between p-8 bg-white border border-slate-200 rounded-3xl hover:border-emerald-500 hover:shadow-xl transition-all group"
            >
              <div>
                <h4 className="font-bold text-emerald-950 mb-1">{tmpl.title}</h4>
                <p className="text-xs text-slate-400">{tmpl.subtitle}</p>
              </div>
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <Download className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden">
          <div className="absolute right-0 bottom-0 p-10 opacity-5 pointer-events-none">
            <ShieldCheck className="w-48 h-48" />
          </div>
          <div className="relative z-10">
            <h4 className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Submission Ethics</h4>
            <p className="text-2xl font-bold mb-6 leading-tight max-w-2xl">
              Double-blind peer review is mandatory for all tracks.
            </p>
            <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-xl">
              Ensure all identifiers, including author names and affiliations, are removed from the document metadata and the body text for evaluation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
