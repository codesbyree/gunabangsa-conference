import { MessageCircleQuestion, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How do I upload my Revised Manuscript or Final Camera-Ready Manuscript?',
    a: 'Please visit the Revised Submission Instructions and Final Camera-Ready Submission Instructions webpages for detailed step-by-step guidance. If you have questions, kindly review all information provided on these instruction pages as well as the FAQs below before contacting the Secretariat.',
  },
  {
    q: 'Can I submit my final manuscript by email?',
    a: 'All final manuscripts must be submitted through IGERS in Microsoft Word format before the submission deadline. If you are unable to do so, please review the FAQ section below for further support.',
  },
  {
    q: 'I need to register more than one paper. How can I do that?',
    a: 'Additional manuscripts may be submitted using the same account by selecting the New Submission option in the menu.',
  },
  {
    q: 'Do I need to pay the registration fee before I can upload my final manuscript?',
    a: 'No. However, please note that your paper will not proceed further in the review process nor continue to publisher processing until registration payment has been completed.',
  },
  {
    q: 'My submitted manuscript does not include author details due to the double-anonymized review process. How should I add the correct author information in the Final Camera-Ready version?',
    a: 'You must include complete and accurate author details (full names, affiliations, and emails) in the Final Camera-Ready version. Manuscripts missing proper author information will be considered incomplete.',
  },
  {
    q: 'I received a rejection notice for my paper without any review. What could be the reason?',
    a: 'The paper does not match the scope/topic of the conference, there are critical errors in the writing, it is a duplicate submission, or a paper that has already been published elsewhere.',
  },
];

export default function UploadFAQs() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 space-y-16">
      <div className="flex items-center gap-4 border-b border-slate-100 pb-8">
        <MessageCircleQuestion className="w-8 h-8 text-emerald-600" />
        <h2 className="text-3xl font-black text-emerald-950 tracking-tighter uppercase leading-tight">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-emerald-300 hover:shadow-xl transition-all group">
            <h3 className="text-xl font-bold text-emerald-950 mb-4 flex gap-4 items-start">
              <HelpCircle className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
              <span className="leading-tight">{faq.q}</span>
            </h3>
            <div className="pl-10">
              <p className="text-slate-600 leading-relaxed font-medium">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
