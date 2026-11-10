import { Microscope, HeartPulse, Award, Users } from 'lucide-react';
import { IMAGES } from '@/data';
import { useReveal } from '@/hooks/useReveal';

const PILLARS = [
  {
    icon: Microscope,
    title: 'Precision Diagnostics',
    desc: 'AI-assisted trichoscopy maps follicle density and miniaturization at 200x magnification.',
  },
  {
    icon: HeartPulse,
    title: 'Regenerative Medicine',
    desc: 'PRP, exosomes, and mesotherapy protocols backed by peer-reviewed clinical evidence.',
  },
  {
    icon: Award,
    title: 'Surgical Excellence',
    desc: 'FUE & DHI transplants performed by board-certified surgeons with 98% graft survival.',
  },
  {
    icon: Users,
    title: 'Personalized Protocols',
    desc: 'Every treatment plan is tailored to your genetics, scalp health, and lifestyle.',
  },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative bg-white py-20 sm:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-5 transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Images */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <img
                  src={IMAGES.laser}
                  alt="Clinical laser equipment"
                  className="h-44 w-full rounded-2xl object-cover shadow-luxury sm:h-56"
                  loading="lazy"
                />
                <img
                  src={IMAGES.follicle}
                  alt="Healthy hair follicle close-up"
                  className="h-32 w-full rounded-2xl object-cover shadow-luxury sm:h-40"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3 pt-8">
                <img
                  src={IMAGES.reception}
                  alt="Luxury clinic reception"
                  className="h-32 w-full rounded-2xl object-cover shadow-luxury sm:h-40"
                  loading="lazy"
                />
                <img
                  src={IMAGES.consult2}
                  alt="Doctor consultation"
                  className="h-44 w-full rounded-2xl object-cover shadow-luxury sm:h-56"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border border-gold-200 bg-white px-5 py-3 shadow-deep">
              <div className="font-serif text-2xl font-bold text-royal-700">15+ Years</div>
              <div className="text-[0.7rem] uppercase tracking-wider text-charcoal-400">of Trichology Excellence</div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-royal-200 bg-royal-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-royal-700">
              About The Clinic
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-charcoal-800 sm:text-4xl lg:text-5xl">
              Where Science Meets <span className="text-royal-700">Restoration</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal-500">
              Our Expert Trichologist (MD) leads a multidisciplinary team combining dermatological
              science, regenerative medicine, and aesthetic artistry. Every protocol begins with a
              comprehensive scalp diagnosis and ends with measurable, photographable results.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {PILLARS.map((p) => (
                <div key={p.title} className="flex gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-royal-50 text-royal-700">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-charcoal-800">{p.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-charcoal-500">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#booking"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-royal-700 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-royal-800 active:scale-95"
            >
              Schedule Your Diagnosis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
