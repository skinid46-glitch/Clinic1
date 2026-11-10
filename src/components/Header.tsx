import { useEffect, useState } from 'react';
import { Menu, X, Activity, Phone } from 'lucide-react';
import { CLINIC } from '@/data';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#results', label: 'Results' },
  { href: '#calculator', label: 'Pricing' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-royal-700/95 backdrop-blur-md shadow-deep' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/50 bg-royal-800/40">
            <Activity className="h-5 w-5 text-gold-400" strokeWidth={2.2} />
          </span>
          <span className="font-serif text-xl font-semibold tracking-wide text-white">
            The Clinic
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${CLINIC.phone}`}
            className="hidden items-center gap-1.5 rounded-full border border-gold-400/40 px-4 py-2 text-sm font-semibold text-gold-300 transition-colors hover:bg-gold-400/10 sm:flex"
          >
            <Phone className="h-3.5 w-3.5" />
            Call Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-royal-800/98 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? 'max-h-96 border-t border-white/10' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${CLINIC.phone}`}
            className="mt-2 flex items-center gap-2 rounded-lg bg-gold-400/15 px-3 py-2.5 text-base font-semibold text-gold-300"
          >
            <Phone className="h-4 w-4" /> {CLINIC.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
