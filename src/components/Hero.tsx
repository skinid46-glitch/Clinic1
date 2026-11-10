import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { IMAGES, STATS } from '@/data';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroBg}
          alt="Luxury clinic interior"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-royal-900/70 via-royal-800/60 to-royal-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-900/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pt-24 pb-32 sm:pb-28">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-white/5 px-4 py-1.5 backdrop-blur-sm animate-fade-in">
            <ShieldCheck className="h-4 w-4 text-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
              ISO-Certified Trichology Centre
            </span>
          </div>

          <h1 className="font-serif text-[2.5rem] font-semibold leading-[1.08] text-white text-balance animate-fade-up sm:text-6xl lg:text-7xl">
            Advanced Hair Restoration.
            <span className="block gold-text">Scientifically Proven Results.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 animate-fade-up sm:text-lg">
            Regain your confidence with precision diagnostics, regenerative therapies, and
            surgical-grade transplants — delivered by board-certified trichologists in a setting
            designed for comfort and discretion.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up">
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-bold text-royal-900 shadow-gold-glow transition-all hover:bg-gold-300 hover:shadow-lg active:scale-95"
            >
              Book Instant Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              View Before / After
            </a>
          </div>

          {/* Rating badge */}
          <div className="mt-6 flex items-center gap-3 animate-fade-up">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-sm text-white/75">
              4.9/5 from 2,300+ verified patient reviews
            </span>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md sm:grid-cols-4 animate-fade-up">
          {STATS.map((s) => (
            <div key={s.label} className="px-4 py-4 text-center sm:px-6 sm:py-5">
              <div className="font-serif text-2xl font-bold text-gold-300 sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-[0.7rem] font-medium uppercase tracking-wider text-white/60 sm:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
