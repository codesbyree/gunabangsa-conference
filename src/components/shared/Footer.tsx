import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, PhoneIcon, MailIcon } from 'lucide-react';
import HomeMarquee from '../home/HomeMarquee';

export default function Footer() {
  return (
    <>
      <HomeMarquee />
      <footer id="footer" className="bg-emerald-950 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-emerald-900 rounded flex items-center justify-center font-bold text-white italic">H</div>
                <span className="font-extrabold text-white tracking-tighter text-2xl">HEALTHMED-IC</span>
              </div>
              <p className="text-emerald-100/70 text-sm font-medium leading-relaxed max-w-sm mb-10">
                The definitive international summit for medical excellence and technological advancement in life sciences. Facilitating global scientific dialogue.
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, label: 'Facebook', fill: true },
                  { Icon: Twitter, label: 'Twitter', fill: true },
                  { Icon: Instagram, label: 'Instagram', fill: false },
                  { Icon: Youtube, label: 'Youtube', fill: false },
                ].map(({ Icon, label, fill }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-[42px] h-[42px] bg-emerald-500 rounded-full flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer"
                  >
                    <Icon className="w-[18px] h-[18px] text-emerald-950" fill={fill ? 'currentColor' : 'none'} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-50 mb-8 tracking-tight">Quick Actions</h4>
              <ul className="space-y-5 text-[15px] font-medium">
                <li><Link to="/" className="text-emerald-100/70 hover:text-emerald-100 transition">Abstract Submission</Link></li>
                <li><Link to="/program" className="text-emerald-100/70 hover:text-emerald-100 transition">Conference Program</Link></li>
                <li><Link to="/" className="text-emerald-100/70 hover:text-emerald-100 transition">Ethical Guidelines</Link></li>
                <li><Link to="/committee" className="text-emerald-100/70 hover:text-emerald-100 transition">Committees</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-50 mb-8 tracking-tight">Contact</h4>
              <div className="space-y-5 text-[15px] font-medium">
                <a href="tel:0000000000" className="flex items-center gap-4 text-emerald-100/70 hover:text-emerald-100 transition">
                  <PhoneIcon className="w-4 h-4 text-emerald-800" />
                  <span>(000) 000-0000</span>
                </a>
                <a href="mailto:info@healthmed-ic.org" className="flex items-center gap-4 text-emerald-100/70 hover:text-emerald-100 transition">
                  <MailIcon className="w-4 h-4 text-emerald-800" />
                  <span>info@healthmed-ic.org</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-emerald-100/70 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-300">
            <p>© 2026 HEALTHMED-IC Scientific Committee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
