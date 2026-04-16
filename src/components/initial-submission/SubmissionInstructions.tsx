import { FileCode, UserPlus, LogIn, UserCheck, Search, Download, ShieldCheck } from 'lucide-react';

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

export default function SubmissionInstructions() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-10">
      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-8">
          <FileCode className="w-8 h-8 text-emerald-600" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-emerald-950 tracking-tighter uppercase">
            Preparing Article Submission
          </h2>
        </div>
        <NumberedSteps items={[
          'Ensure that the manuscript aligns with the scope and topics of the conference.',
          'Titles must be representative of the article content and should not exceed 18 words.',
          'Abstracts should be between 150 and 250 words.',
          'The manuscript should include: Introduction, Methods, Results, Discussion, Conclusion, and References.',
          'Submissions must be anonymous for the blind review process (no author names, email addresses, or institutional affiliations in the manuscript).',
          'No specific template format is required for the initial submission. However, files must be prepared and submitted in .doc format.',
          'Manuscripts will be evaluated based on technical rigor, methodology soundness, clarity of results, and validity of conclusions.',
          'Submissions must present original research not previously published. Plagiarism is strictly prohibited. All manuscripts must have a similarity index of no more than 20% as verified by Turnitin or equivalent.',
        ]} />
      </section>

      <div className="grid lg:grid-cols-2 gap-4">
        <section className="flex flex-col gap-8 p-10 bg-slate-100 border border-slate-200 rounded-[2.5rem]">
          <div className="flex items-center gap-4 mb-4">
            <UserPlus className="w-7 h-7 text-emerald-600" />
            <h3 className="text-base md:text-lg font-extrabold text-emerald-950 uppercase tracking-tight">Creating an Account</h3>
          </div>
          <NumberedSteps items={[
            "Go to the portal login page or click the 'Login' button in the top-right corner of the homepage.",
            "On the login page, click the 'Create Account' button to proceed.",
            "Fill out the required registration fields, then click 'Continue'.",
            'After creating your account, you will be prompted to verify your email address.',
          ]} />
        </section>

        <section className="flex flex-col gap-8 p-10 bg-slate-100 border border-slate-200 rounded-[2.5rem]">
          <div className="flex items-center gap-4 mb-4">
            <LogIn className="w-7 h-7 text-emerald-600" />
            <h3 className="text-base md:text-lg font-extrabold text-emerald-950 uppercase tracking-tight">Login to Your Account</h3>
          </div>
          <NumberedSteps items={[
            'Navigate to the official submission portal login page.',
            "Enter your registered email address and password in the respective fields, then click 'Login'.",
            "If your credentials are valid, you will be redirected to your dashboard; otherwise, an error message will appear.",
          ]} />
        </section>
      </div>

      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-8">
          <UserCheck className="w-8 h-8 text-emerald-600" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-emerald-950 tracking-tighter uppercase">
            Join a Conference as an Author
          </h2>
        </div>
        <div className="bg-emerald-950 text-white rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute right-0 top-0 p-20 opacity-5 pointer-events-none"><Search className="w-96 h-96" /></div>
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              'Click the Acronym of the conference you wish to participate in from the list.',
              "Click the 'Join as Author' button on the conference detail page.",
              'On the New Submission page, fill in metadata: category, author info, title, and abstract.',
              "Upload your paper in the required format and click the 'Submit' button.",
              'The conference team will contact you regarding your submission via your registered email.',
            ].map((text, i) => (
              <div key={i} className="space-y-4">
                <div className="text-emerald-500 font-black text-4xl opacity-30">0{i + 1}</div>
                <p className="text-sm font-medium leading-relaxed text-emerald-100/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="space-y-10">
        <div className="flex items-center gap-4">
          <FileCode className="w-6 h-6 text-emerald-600" />
          <h3 className="text-base md:text-lg font-black text-emerald-950 tracking-tighter uppercase">Template Resources</h3>
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
            <p className="text-base font-bold mb-4 leading-tight max-w-2xl">
              Double-blind peer review is mandatory for all tracks.
            </p>
            <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-xl">
              Ensure all identifiers, including author names and affiliations, are removed from the document metadata and the body text for initial evaluation. Manuscripts failing this check will be returned for revision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
