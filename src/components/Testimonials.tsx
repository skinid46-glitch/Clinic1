import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data';
import { useReveal } from '@/hooks/useReveal';

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="mx-3 w-[300px] shrink-0 rounded-2xl border border-charcoal-100 bg-white p-5 shadow-luxury sm:w-[360px]">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-royal-600 to-royal-800 text-sm font-bold text-gold-300">
            {t.initials}
          </div>
          <div>
            <div className="text-sm font-bold text-charcoal-800">{t.name}</div>
            <div className="text-xs text-royal-600">{t.treatment}</div>
          </div>
        </div>
        <Quote className="h-6 w-6 text-gold-300" />
      </div>
      <div className="mb-2 flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < t.rating ? 'fill-gold-400 text-gold-400' : 'text-charcoal-200'}`}
          />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-charcoal-600">{t.text}</p>
    </div>
  );
}

export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="reviews" className="relative overflow-hidden bg-gradient-to-b from-royal-50 to-white py-20 sm:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-700">
            Live Patient Reviews
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-charcoal-800 sm:text-5xl">
            What Our <span className="text-royal-700">Patients Say</span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-charcoal-600">4.9 / 5 · 2,300+ reviews</span>
          </div>
        </div>
      </div>

      <div className="marquee-pause relative">
        <div className="marquee-track flex w-max animate-marquee">
          {loop.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-royal-50 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent sm:w-24" />
      </div>
    </section>
  );
}
