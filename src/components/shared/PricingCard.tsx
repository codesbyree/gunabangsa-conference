import { ArrowRight } from "lucide-react";

interface PricingTier {
  date?: string;
  price: string;
}

interface PricingCardProps {
  cardTitle?: string;
  cardSubtitle?: string;
  cardEarlyBird?: PricingTier;
  cardRegular?: PricingTier;
  cardDescription?: string;
}

export default function PricingCard({
  cardTitle = "",
  cardSubtitle,
  cardEarlyBird,
  cardRegular,
  cardDescription,
}: PricingCardProps) {
  return (
    <div className="p-4 rounded-3xl bg-radial from-slate-200 to-slate-100 space-y-4 border border-slate-300 shadow-inner">
      <div className="border border-slate-200 rounded-xl p-4 flex flex-col flex-1 bg-slate-50 shadow-xs">
        <div className="h-10">
          <h4 className="text-lg font-semibold text-slate-900">{cardTitle}</h4>
          {cardSubtitle && (
            <p className="text-xs font-medium text-slate-600 mt-1 px-2 py-1 bg-emerald-500/30 rounded-full w-max">
              {cardSubtitle}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-5 bg-white/10 p-2 rounded-lg mt-10">
          {cardEarlyBird && (
            <div>
              <p className="text-xs font-medium text-slate-600 mb-2">
                Early Bird ({cardEarlyBird.date})
              </p>
              <p className="font-bold text-slate-900">{cardEarlyBird.price}</p>
            </div>
          )}
          {cardRegular && (
            <div>
              <p className="text-xs font-medium text-slate-600 mb-2">{`Regular ${cardRegular.date ? `(${cardRegular.date})` : ""}`}</p>
              <p className="font-bold text-slate-900">{cardRegular.price}</p>
            </div>
          )}
        </div>

        {cardDescription && (
          <p className="text-xs font-bold text-slate-900 mt-2 mb-4">
            {cardDescription}
          </p>
        )}
      </div>

      <a
        href="https://igers.org"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-left flex items-center gap-4 justify-between text-sm bg-linear-to-br from-emerald-800 via-emerald-900 to-emerald-950 text-emerald-50 rounded-xl p-2 cursor-pointer border border-dashed border-emerald-500 hover:opacity-90 transition-opacity shadow-md"
      >
        <span>Register Here</span>
        <ArrowRight />
      </a>
    </div>
  );
}
