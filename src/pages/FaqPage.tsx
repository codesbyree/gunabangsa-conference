import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SubPageHeader from '../components/shared/SubPageHeader';

const faqs = [
  {
    q: 'When will I be able to register for the conference?',
    a: 'Registration is now open for participants, while presenters can register after receiving notification of paper acceptance. Please visit the HEALTHMED-IC 2026 Registration Page for full details on fees and policies.',
    link: null,
  },
  {
    q: 'What do I need to submit during the registration process?',
    a: 'If you do not intend to publish your research, you may submit an abstract only. Otherwise, you are required to submit a full paper from the outset. For more detailed information, see:',
    links: [
      { label: 'Initial Submission Instructions', to: '/initial-submission' },
      { label: 'Final Camera-Ready Instructions', to: '/final-camera-ready' },
    ],
  },
  {
    q: 'How do I view the program online?',
    a: 'The program will be updated on the conference website as it is confirmed. This will be closer to the conference, after the Final Camera-Ready Submission deadline.',
    link: null,
  },
  {
    q: 'How do I get to the conference?',
    a: 'Details on how to travel to the conference are available on the Venue & Accommodations page.',
    link: { label: 'Venue & Accommodations', to: '/venue' },
  },
  {
    q: 'When is the early registration deadline?',
    a: 'The early registration deadline is 15 March 2026.',
    link: null,
  },
  {
    q: 'Do I have to pay by credit card online or can I be invoiced?',
    a: 'All registrations are paid for online. However, if this is not possible, please contact the HEALTHMED-IC 2026 Conference Manager directly.',
    link: null,
  },
  {
    q: 'Can I pay in my local currency?',
    a: 'All payments must be made in either USD or IDR to ensure that the full amount is received. Detailed information can be seen in the Registration page.',
    link: { label: 'Registration Page', to: '/registrations' },
  },
  {
    q: 'Can I get a receipt for my payment to attend the conference?',
    a: 'Receipts will be issued electronically via email and this will be the only form of receipt.',
    link: null,
  },
  {
    q: 'How can I receive an invitation letter to the conference for my VISA application?',
    a: 'We only provide information confirming that you are listed as an attendee of the conference. We cannot guarantee that it can be used for a VISA application.',
    link: null,
  },
];

export default function FaqPage() {
  return (
    <>
      <SubPageHeader title="Frequently Asked Questions" />
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-4">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-emerald-950 font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                Q
              </span>
              <h3 className="text-sm font-bold text-emerald-950 leading-snug">{faq.q}</h3>
            </div>
            <div className="ml-8 space-y-2">
              <p className="text-slate-500 leading-relaxed font-medium">{faq.a}</p>
              {/* Multiple links (bullet list) */}
              {'links' in faq && faq.links && (
                <ul className="mt-2 space-y-1">
                  {faq.links.map((l) => (
                    <li key={l.to} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                      <Link
                        to={l.to}
                        className="text-emerald-600 font-bold hover:text-emerald-800 underline underline-offset-2 transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {/* Single link */}
              {'link' in faq && faq.link && (
                <Link
                  to={faq.link.to}
                  className="inline-block mt-1 text-emerald-600 font-bold hover:text-emerald-800 underline underline-offset-2 transition-colors"
                >
                  {faq.link.label} →
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
}
