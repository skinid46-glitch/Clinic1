import { useEffect, useState } from 'react';
import { CalendarCheck, MessageCircle, X } from 'lucide-react';

/** Floating sticky CTA that appears after scrolling past the hero. */
export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-400 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      }`}
    >
      <div className="mx-auto max-w-2xl px-4 pb-4">
        <div className="flex items-center gap-3 rounded-2xl border border-gold-400/30 bg-royal-800/95 p-2.5 shadow-deep backdrop-blur-md">
          <div className="hidden flex-col pl-2 sm:flex">
            <span className="text-xs font-medium text-white/60">Free first consultation</span>
            <span className="text-sm font-bold text-white">Instant WhatsApp Booking</span>
          </div>
          <a
            href="#booking"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gold-400 px-5 py-3 text-sm font-bold text-royal-900 transition-all hover:bg-gold-300 active:scale-95 animate-float-cta"
          >
            <CalendarCheck className="h-5 w-5" />
            Book Instant Consultation
          </a>
          <a
            href="https://wa.me/919000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white transition-all hover:bg-[#1da856] active:scale-95"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white/40 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
