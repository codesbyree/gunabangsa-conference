import SubPageHeader from '../components/shared/SubPageHeader';

export default function PartnersPage() {
  return (
    <>
      <SubPageHeader title="Our Partners" />
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 mb-8 shadow-xl shadow-emerald-950/5">
          <h2 className="text-2xl font-bold text-emerald-950 mb-6 tracking-tight">Sponsors and Global Partners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-slate-100 flex items-center justify-center min-h-32 shadow-sm hover:-translate-y-1 transition-transform cursor-pointer"
              >
                <p className="text-slate-400 font-bold uppercase tracking-widest text-center text-xs">Partner Logo</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 mt-8 leading-relaxed text-sm font-medium">
            The HEALTHMED-IC 2026 conference is proudly supported by multiple academic institutions, healthcare organizations, and industry leaders. Detailed information about our partners and sponsorship opportunities will be announced soon.
          </p>
        </div>
      </section>
    </>
  );
}
