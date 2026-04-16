import { FileCode, ShieldCheck, Download, Mail, UserCheck, Phone } from 'lucide-react';

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

export default function FinalCameraReadyInstructions() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-8">
          <FileCode className="w-8 h-8 text-emerald-600" />
          <h2 className="text-lg lg:text-xl font-black text-emerald-950 tracking-tighter uppercase leading-tight">
            Final Camera-Ready Submission Instructions
          </h2>
        </div>
        <div className="bg-emerald-100 p-8 rounded-3xl border border-emerald-200">
          <p className="text-slate-700 leading-relaxed font-medium mb-4">
            All manuscripts identified as requiring revision will undergo a subsequent review process. Authors are expected
            to prepare a clean <strong>Revised Manuscript</strong> and a separate <strong>Response to Reviewers</strong> document.
          </p>
          <p className="text-slate-700 leading-relaxed font-medium">
            After completing all revisions, all accepted papers must be prepared as a <strong>Final Camera-Ready Manuscript</strong>.
            This is the final step in the submission process, required after your paper has been officially accepted for publication.
          </p>
        </div>
      </section>

      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-8">
          <FileCode className="w-8 h-8 text-emerald-600" />
          <h3 className="text-2xl font-black text-emerald-950 tracking-tighter uppercase leading-tight">
            Important Notes for Authors
          </h3>
        </div>
        <p className="text-slate-600 leading-relaxed font-medium">
          In preparing the Final Camera-Ready Manuscript, please ensure the following:
        </p>
        <NumberedSteps items={[
          "The Final Camera-Ready Manuscript must include author names, affiliations, and email addresses (as required by the publisher's template).",
          "Strictly follow the writing instructions provided in the publisher's template (from title to references).",
          'Use clear and high-resolution figures; avoid or replace any blurred images.',
          'If figures are reproduced from other sources, the corresponding copyright permission form must be provided for each figure.',
          'Use a reference management tool (e.g., Mendeley, Zotero) to minimize formatting errors in the references section.',
          'The prepared Final Camera-Ready Manuscript, along with all required documents, must then be resubmitted through the IGERS system.',
        ]} />
      </section>

      <section className="space-y-12">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden">
          <div className="absolute right-0 bottom-0 p-10 opacity-5 pointer-events-none">
            <UserCheck className="w-48 h-48" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <h4 className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Assistance</h4>
              <p className="text-base font-bold mb-4 leading-tight">Manuscript Formatting and Editing Assistance</p>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">
                We understand that preparing the final camera-ready manuscript can be challenging. We offer a professional
                formatting and editing service through our trusted partner.
              </p>
            </div>
            <div className="flex flex-col gap-4 bg-white/10 p-8 rounded-3xl border border-white/10 w-full md:w-auto min-w-[300px]">
              <h5 className="font-bold text-white mb-2">Our Partner Contact</h5>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <a href="mailto:nutral@nusaputra.ac.id" className="text-sm hover:text-emerald-400 transition-colors font-medium">
                  nutral@nusaputra.ac.id
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">+628 111 884 108</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-10">
        <div className="flex items-center gap-4">
          <FileCode className="w-6 h-6 text-emerald-600" />
          <h3 className="text-base lg:text-lg font-black text-emerald-950 tracking-tighter uppercase leading-tight">Template Resources</h3>
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
      </div>
    </div>
  );
}
