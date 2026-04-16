import { MapPin, PhoneIcon, MailIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import SubPageHeader from '../components/shared/SubPageHeader';

export default function VenuePage() {
  return (
    <>
      <SubPageHeader title="Venue" />
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Venue Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-4xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <img
              src="/assets/images/venue.png"
              alt="Conference Venue"
              className="relative rounded-3xl shadow-2xl shadow-emerald-950/20 w-full h-auto object-cover aspect-4/3 transform group-hover:-translate-y-2 transition-transform duration-500"
            />
          </motion.div>

          {/* Venue Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs tracking-widest uppercase mb-4">
                <MapPin className="w-4 h-4" />
                Event Location
              </div>
              <h2 className="text-xl md:text-2xl font-black text-emerald-950 mb-4 tracking-tighter leading-tight">
                İstanbul Gelişim Üniversitesi Tower
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Join us at the state-of-the-art İstanbul Gelişim Üniversitesi Tower, designed to inspire collaboration and
                innovation in medical sciences. The venue features modern auditoriums, interactive exhibition spaces, and
                comfortable networking areas.
              </p>
            </div>

            <div className="flex flex-col gap-6 bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-base font-bold text-emerald-950">Contact & Address</h3>

              {[
                {
                  Icon: MapPin,
                  label: 'Address',
                  content: (
                    <a
                      href="https://maps.app.goo.gl/UAv52MrqdmivzzHs5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-600 transition"
                    >
                      Cihangir, Petrol Ofisi Cd. No:5<br />
                      34310 Avcılar/İstanbul, Türkiye
                    </a>
                  ),
                },
                { Icon: PhoneIcon, label: 'Phone', content: <p>+1 (555) 123-4567</p> },
                {
                  Icon: MailIcon,
                  label: 'Email',
                  content: (
                    <a href="mailto:venue@healthmedic.com" className="hover:text-emerald-600 transition">
                      venue@healthmedic.com
                    </a>
                  ),
                },
              ].map(({ Icon, label, content }) => (
                <div key={label} className="flex items-start gap-4 text-slate-600">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-emerald-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-emerald-950 mb-1">{label}</strong>
                    {content}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
