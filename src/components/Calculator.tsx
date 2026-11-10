import { useMemo, useState } from 'react';
import { Check, ChevronRight, RotateCcw, Stethoscope, Syringe, Scissors, Zap, Crown, BadgeAlert, Sparkles, TrendingDown } from 'lucide-react';
import { CONCERNS, TREATMENTS, type Concern, type Treatment } from '@/data';
import { useReveal } from '@/hooks/useReveal';

const CONCERN_ICONS = { recur: TrendingDown, patchy: BadgeAlert, fall: Sparkles, crown: Crown };
const TREATMENT_ICONS = { prp: Syringe, meso: Stethoscope, transplant: Scissors, laser: Zap };

export default function Calculator() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [concern, setConcern] = useState<Concern | null>(null);
  const [treatment, setTreatment] = useState<Treatment | null>(null);

  const estimate = useMemo(() => {
    if (!concern || !treatment) return null;
    const raw = concern.base * treatment.multiplier;
    // Round to nearest 500
    return Math.round(raw / 500) * 500;
  }, [concern, treatment]);

  const formatINR = (n: number) =>
    new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(n);

  const reset = () => {
    setConcern(null);
    setTreatment(null);
  };

  return (
    <section id="calculator" className="relative bg-white py-20 sm:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl px-5 transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-royal-200 bg-royal-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-royal-700">
            Transparent Pricing
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-charcoal-800 sm:text-5xl">
            Estimate Your <span className="text-royal-700">Treatment Cost</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-charcoal-500 sm:text-base">
            Select your hair concern and preferred treatment. We will instantly show an estimated
            price tier — no hidden charges, ever.
          </p>
        </div>

        {/* Step 1: Concern */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                concern ? 'bg-gold-400 text-royal-900' : 'bg-royal-100 text-royal-700'
              }`}
            >
              {concern ? <Check className="h-4 w-4" /> : '1'}
            </span>
            <h3 className="font-serif text-xl font-semibold text-charcoal-800 sm:text-2xl">
              What is your hair concern?
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CONCERNS.map((c) => {
              const Icon = CONCERN_ICONS[c.icon];
              const active = concern?.id === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setConcern(c)}
                  className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all ${
                    active
                      ? 'border-gold-400 bg-gold-50 shadow-gold-glow'
                      : 'border-charcoal-200 bg-white hover:border-royal-300 hover:shadow-luxury'
                  }`}
                >
                  <Icon
                    className={`mb-3 h-7 w-7 transition-colors ${
                      active ? 'text-gold-600' : 'text-royal-600 group-hover:text-royal-700'
                    }`}
                  />
                  <div className={`text-sm font-bold ${active ? 'text-gold-800' : 'text-charcoal-700'}`}>
                    {c.label}
                  </div>
                  <div className="mt-1 text-xs text-charcoal-400">{c.desc}</div>
                  {active && (
                    <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-gold-400 text-royal-900">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Treatment */}
        <div className={`mb-8 transition-all duration-300 ${concern ? 'opacity-100' : 'pointer-events-none opacity-40'}`}>
          <div className="mb-4 flex items-center gap-3">
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                treatment ? 'bg-gold-400 text-royal-900' : 'bg-royal-100 text-royal-700'
              }`}
            >
              {treatment ? <Check className="h-4 w-4" /> : '2'}
            </span>
            <h3 className="font-serif text-xl font-semibold text-charcoal-800 sm:text-2xl">
              Choose your preferred treatment
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TREATMENTS.map((t) => {
              const Icon = TREATMENT_ICONS[t.icon];
              const active = treatment?.id === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTreatment(t)}
                  className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all ${
                    active
                      ? 'border-royal-600 bg-royal-50 shadow-luxury'
                      : 'border-charcoal-200 bg-white hover:border-royal-300 hover:shadow-luxury'
                  }`}
                >
                  <Icon
                    className={`mb-3 h-7 w-7 transition-colors ${
                      active ? 'text-royal-700' : 'text-royal-600 group-hover:text-royal-700'
                    }`}
                  />
                  <div className={`text-sm font-bold ${active ? 'text-royal-800' : 'text-charcoal-700'}`}>
                    {t.label}
                  </div>
                  <div className="mt-1 text-xs text-charcoal-400">{t.desc}</div>
                  <div className="mt-2 text-[0.7rem] font-medium text-royal-500">{t.sessions}</div>
                  {active && (
                    <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-royal-600 text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Result */}
        <div
          className={`overflow-hidden rounded-3xl border transition-all duration-500 ${
            estimate
              ? 'border-royal-200 bg-gradient-to-br from-royal-50 to-white shadow-luxury'
              : 'border-dashed border-charcoal-200 bg-charcoal-50'
          }`}
        >
          {estimate && concern && treatment ? (
            <div className="flex flex-col items-center gap-6 p-6 sm:flex-row sm:justify-between sm:p-8">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-royal-500">
                  Estimated Price Tier
                </div>
                <div className="mt-1 font-serif text-4xl font-bold text-royal-700 sm:text-5xl">
                  ₹{formatINR(estimate)}
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-charcoal-500">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-charcoal-600 shadow-sm">
                    {concern.label}
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-charcoal-300" />
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-charcoal-600 shadow-sm">
                    {treatment.label}
                  </span>
                  <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-medium text-gold-700">
                    {treatment.sessions}
                  </span>
                </div>
                <p className="mt-2 text-xs text-charcoal-400">
                  Estimate includes consultation + full protocol. Final quote confirmed at visit.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 sm:items-end">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 rounded-full bg-royal-700 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-royal-800 active:scale-95"
                >
                  Confirm Booking <ChevronRight className="h-4 w-4" />
                </a>
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-charcoal-400 transition-colors hover:text-royal-600"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Start over
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-charcoal-100">
                <ChevronRight className="h-6 w-6 text-charcoal-300" />
              </div>
              <p className="text-sm text-charcoal-400">
                {concern
                  ? 'Now select a treatment to see your estimated price.'
                  : 'Select a hair concern above to get started.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
