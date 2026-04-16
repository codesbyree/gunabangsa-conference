import { AlertTriangle, MonitorPlay, ListChecks, CalendarX } from 'lucide-react';

export default function PresentationInstructions() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-8">
          <AlertTriangle className="w-8 h-8 text-emerald-600" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-emerald-950 tracking-tighter uppercase leading-tight">
            Important Notice
          </h2>
        </div>
        <div className="bg-amber-50/80 p-8 rounded-3xl border border-amber-200">
          <p className="text-slate-700 leading-relaxed font-medium mb-4">
            All accepted papers are <strong className="text-amber-700">required to give an oral presentation</strong>.
          </p>
          <ul className="list-disc list-inside text-slate-700 leading-relaxed font-medium space-y-2">
            <li>The duration of each presentation is <strong>15 minutes</strong>, including the Q&A session.</li>
            <li>You will have <strong>10 minutes for your presentation</strong> and <strong>5 minutes for audience questions and discussion</strong>.</li>
            <li>An LCD projector and computer (Windows 10 or 11, MS PowerPoint, and Adobe Acrobat Reader) will be available in each session room.</li>
          </ul>
        </div>
      </section>

      <div className="grid lg:grid-cols-2 gap-4">
        <section className="flex flex-col gap-8 p-10 bg-slate-100 border border-slate-200 rounded-[2.5rem]">
          <div className="flex items-center gap-4 mb-4">
            <MonitorPlay className="w-7 h-7 text-emerald-600" />
            <h3 className="text-xl md:text-2xl font-extrabold text-emerald-950 uppercase tracking-tight">Visual Preparation</h3>
          </div>
          <div className="space-y-6">
            {[
              'To ensure efficient use of time, please upload your PPT or PDF file using the provided link.',
              'To avoid software compatibility issues, speakers are strongly advised to embed all fonts in their PowerPoint file and bring a backup version in PDF format.',
              'Speakers must arrive in the session room 30 minutes before the session starts to report to the session chair.',
            ].map((text, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-7 h-7 bg-emerald-500 rounded text-xs font-black text-white shrink-0 flex items-center justify-center">{i + 1}</div>
                <p className="text-slate-600 leading-relaxed font-medium">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-8 p-10 bg-slate-100 border border-slate-200 rounded-[2.5rem]">
          <div className="flex items-center gap-4 mb-4">
            <ListChecks className="w-7 h-7 text-emerald-600" />
            <h3 className="text-xl md:text-2xl font-extrabold text-emerald-950 uppercase tracking-tight">General Considerations</h3>
          </div>
          <div className="space-y-6">
            <p className="text-slate-600 text-sm font-medium">When preparing your presentation slides:</p>
            <ul className="space-y-4">
              {[
                'Limit the number of words per visual to no more than 20 words.',
                'Provide spacing between lines of text, at least the height of a capital letter.',
                'All fonts, including those on graphics, should be 18-point size or larger.',
                'Graphs and charts should have bold lines and symbols with sharp contrast against the background.',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <p className="text-slate-600 leading-relaxed font-medium">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-slate-100 pb-8">
          <CalendarX className="w-8 h-8 text-rose-600" />
          <h3 className="text-xl md:text-2xl font-extrabold text-emerald-950 uppercase tracking-tight">No-Show Policy</h3>
        </div>
        <div className="bg-rose-50/50 p-8 md:p-12 rounded-[3rem] border border-rose-100 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 p-10 opacity-5 pointer-events-none text-rose-500">
            <AlertTriangle className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-4xl">
            <p className="font-bold text-rose-950 mb-6 leading-relaxed">
              All accepted papers must be presented at the conference by at least one of the authors. A paper will be
              considered a <span className="bg-rose-200 px-2 py-1 rounded">no-show</span> if the author fails to present
              without prior approval.
            </p>
            <h4 className="font-bold text-rose-900 mb-4">Consequences of a no-show:</h4>
            <ul className="space-y-3 mb-8">
              {[
                'The paper will be removed from the conference proceedings.',
                'The authors will not receive a presentation certificate.',
                'Registration fees are non-refundable.',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-200 flex items-center justify-center shrink-0">
                    <span className="text-rose-600 text-xs font-black">X</span>
                  </div>
                  <span className="text-rose-950 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100 border-l-4 border-l-rose-500">
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                <strong>In case of emergency or force majeure:</strong> authors must inform the organizing committee in writing
                no later than <strong>1 day before the conference date</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
