import { ClipboardListIcon, UserIcon, AlertTriangleIcon } from 'lucide-react';
import { REGULAR_PRICING, COMBINED_PRICING, NPU_PRICING } from '../data/constants';
import SubPageHeader from '../components/shared/SubPageHeader';
import PricingCard from '../components/shared/PricingCard';

function NumberedArticle({ items }: { items: Array<{ text: string; subitems?: string[] }> }) {
  return (
    <div className="space-y-6">
      {items.map((item, i) => (
        <div key={i} className="flex gap-5">
          <div className="w-7 h-7 bg-emerald-500 rounded text-xs font-black text-white shrink-0 flex items-center justify-center">
            {i + 1}
          </div>
          <div className="space-y-2">
            <p className="text-slate-600 leading-relaxed font-medium">{item.text}</p>
            {item.subitems && (
              <ul className="list-disc list-inside space-y-1 ml-4 text-slate-600 leading-relaxed font-medium">
                {item.subitems.map((sub, j) => <li key={j}>{sub}</li>)}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function RegistrationPage() {
  return (
    <>
      <SubPageHeader title="Registrations" />

      <section className="relative pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-emerald-100/80 p-8 rounded-3xl border border-emerald-200">
            <p className="text-slate-700 leading-relaxed font-medium">
              Join us at HEALTHMED-IC 2026 and be part of a vibrant international academic community! We provide two modes
              of participation — Online and Onsite — to accommodate scholars from around the world. Registration is carried
              out through the IGERS system. Information about IGERS and the registration procedures can be found at the
              following{' '}
              <a target="_blank" href="https://drive.google.com/drive/folders/1HasEzy_fLQbXA384PPI97qH0VVXMRdck" className="underline text-emerald-700">
                link.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Regular registrations */}
      <section className="pb-24 pt-12 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Registration Fees</div>
            <h2 className="text-xl md:text-2xl font-extrabold text-emerald-950 mb-4">Registration & Payment Information</h2>
          </div>
          <div className="space-y-10">
            {REGULAR_PRICING.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-sm font-bold text-emerald-900/80 mb-3 tracking-tight text-center">{section.title}</h3>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  {section.tiers.map((tier, tIdx) => (
                    <PricingCard
                      key={tIdx}
                      cardTitle={tier.name}
                      cardSubtitle={tier.subtitle}
                      cardEarlyBird={tier.earlyBird}
                      cardRegular={tier.regular}
                      cardDescription={(tier as any).description}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined registrations */}
      <section className="py-24 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Registration Fees</div>
            <h2 className="text-xl md:text-2xl font-extrabold text-emerald-950 mb-4">
              Combined Registration & Publication (Scopus Proceedings)
            </h2>
          </div>
          <div className="space-y-10">
            {COMBINED_PRICING.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-sm font-bold text-emerald-900/80 mb-3 tracking-tight text-center">{section.title}</h3>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto w-full">
                  {section.tiers.map((tier, tIdx) => (
                    <PricingCard
                      key={tIdx}
                      cardTitle={tier.name}
                      cardSubtitle={tier.subtitle}
                      cardEarlyBird={tier.earlyBird}
                      cardRegular={tier.regular}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NPU students */}
      <section className="py-24 bg-white relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Registration Fees</div>
            <h2 className="text-xl md:text-2xl font-extrabold text-emerald-950 mb-4">
              Nusa Putra University Member (Student / Lecturer)
            </h2>
          </div>
          <div className="space-y-10">
            {NPU_PRICING.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-sm font-bold text-emerald-900/80 mb-3 tracking-tight text-center">{section.title}</h3>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto w-full">
                  {section.tiers.map((tier, tIdx) => (
                    <PricingCard
                      key={tIdx}
                      cardTitle={tier.name}
                      cardSubtitle={tier.subtitle}
                      cardRegular={tier.regular}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes for Authors */}
      <section className="py-24 pb-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="flex items-center gap-4">
            <ClipboardListIcon className="w-8 h-8 text-emerald-600" />
            <h3 className="text-base md:text-lg font-black text-emerald-950 tracking-tighter uppercase leading-tight">
              Important Notes for Authors
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            <article className="flex flex-col gap-8 p-10 bg-slate-100 border border-slate-200 rounded-[2.5rem]">
              <div className="flex items-center gap-4 mb-4">
                <UserIcon className="w-7 h-7 text-emerald-600" />
                <h3 className="text-base md:text-lg font-extrabold text-emerald-950 uppercase tracking-tight">For Participants</h3>
              </div>
              <NumberedArticle items={[
                { text: 'Participants must complete account registration before proceeding.' },
                { text: 'After logging in, go to the Home Page and select the conference you wish to attend.' },
                { text: 'Click "Join as Participant" located at the bottom-left corner of the conference card.' },
                { text: 'Complete the participant form:', subitems: ['Select the conference', 'Choose the applicable participation category'] },
                { text: 'Review all submitted information carefully, then click Submit to confirm.' },
                { text: 'After submission, you may proceed directly to payment' },
                { text: 'You will be redirected to the Xendit payment page, where you can select your preferred payment method from the available options.' },
                { text: 'Complete the payment following the instructions provided by Xendit.' },
              ]} />
            </article>
            <article className="flex flex-col gap-8 p-10 bg-slate-100 border border-slate-200 rounded-[2.5rem]">
              <div className="flex items-center gap-4 mb-4">
                <UserIcon className="w-7 h-7 text-emerald-600" />
                <h3 className="text-base md:text-lg font-extrabold text-emerald-950 uppercase tracking-tight">For Presenters</h3>
              </div>
              <NumberedArticle items={[
                { text: 'All prospective presenters are required to complete the account registration process on the official portal before proceeding with the submission.' },
                { text: 'Upon successful login, please navigate to the Home Page and identify the specific conference you intend to participate in.' },
                { text: 'Locate the designated conference card and click the "Join as Author" button situated at the bottom-left corner to initiate your application.' },
                { text: 'Please complete the required conference fields by selecting the appropriate Conference Name and Submission Category from the provided menus.' },
                { text: 'Provide comprehensive details for all contributors, including Full Name, Email Address, Country, and Institutional Affiliation.' },
                { text: 'Enter the Paper Title and Abstract, select the most relevant Topic, and upload the manuscript file in the designated format.' },
                { text: 'After all required fields have been completed, please click Submit.' },
                { text: 'Your submission will then undergo an editorial and peer-review process.' },
                { text: 'If your paper is deemed eligible, you will receive an official email from the Conference Committee containing the Letter of Acceptance (LoA), Invoice, and paper revision notes (if any).' },
                { text: 'If your paper is accepted, please complete the payment according to the provided instructions and submit the proof of payment to the IGERS, as well as submit the revised version of the paper.' },
              ]} />
            </article>
          </div>
        </div>
      </section>

      {/* Registration Benefits */}
      <section className="py-12 bg-white border-b border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="flex items-center gap-4">
            <ClipboardListIcon className="w-8 h-8 text-emerald-600" />
            <h3 className="text-base md:text-lg font-black text-emerald-950 tracking-tighter uppercase leading-tight">
              Registrations Benefits
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            <article className="flex flex-col gap-8 p-10 bg-slate-100 border border-slate-200 rounded-[2.5rem]">
              <div className="flex items-center gap-4 mb-4">
                <UserIcon className="w-7 h-7 text-emerald-600" />
                <h3 className="text-sm font-extrabold text-emerald-950 uppercase tracking-tight">For onsite participants</h3>
              </div>
              <NumberedArticle items={[
                { text: 'Conference Program Book' },
                { text: 'Name Tag' },
                { text: 'Certificate of Participation' },
                { text: 'Goodie Bag (seminar kit and souvenir)' },
                { text: 'Conference Abstract e-Book' },
                { text: 'Coffee Break' },
              ]} />
            </article>
            <article className="flex flex-col gap-8 p-10 bg-slate-100 border border-slate-200 rounded-[2.5rem]">
              <div className="flex items-center gap-4 mb-4">
                <UserIcon className="w-7 h-7 text-emerald-600" />
                <h3 className="text-sm font-extrabold text-emerald-950 uppercase tracking-tight">For online participants</h3>
              </div>
              <NumberedArticle items={[
                { text: 'Conference Program e-Book' },
                { text: 'Conference Abstract e-Book' },
                { text: 'e-Certificate of Participation' },
              ]} />
            </article>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="flex items-center gap-4">
            <AlertTriangleIcon className="w-8 h-8 text-emerald-600" />
            <h3 className="text-base md:text-lg font-black text-emerald-950 tracking-tighter uppercase leading-tight">
              Important Notes
            </h3>
          </div>
          <div className="bg-amber-50/80 p-8 rounded-3xl border border-amber-200">
            <ul className="list-disc list-outside ml-5 space-y-4 text-amber-900/80 font-medium leading-relaxed">
              <li>
                <strong>Presenter (Online & Onsite):</strong> The registration fee does not cover the publication of accepted papers.
                <ul className="list-[circle] list-outside ml-5 mt-2 space-y-2">
                  <li><strong>Additional accepted papers:</strong> subject to an extra fee of USD 375 / IDR 5.750.000 each.</li>
                  <li><strong>Student Presenter:</strong> Must provide a valid student ID.</li>
                </ul>
              </li>
              <li>
                <strong>Participant (Non-Presenter):</strong> Entitled to full access to sessions and conference certificate.
                <ul className="list-[circle] list-outside ml-5 mt-2 space-y-2">
                  <li>Onsite participants additionally receive seminar kit, conference abstract e-book, coffee break and e-certificate of participation.</li>
                  <li><strong>Student Participant:</strong> Must provide a valid student ID.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
