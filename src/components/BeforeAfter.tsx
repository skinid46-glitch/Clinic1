import { useCallback, useEffect, useRef, useState } from 'react';
import { MoveHorizontal, Sparkles } from 'lucide-react';
import { IMAGES } from '@/data';
import { useReveal } from '@/hooks/useReveal';

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const [containerW, setContainerW] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);
  const { ref, visible } = useReveal<HTMLDivElement>();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerW(el.offsetWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <section id="results" className="relative bg-charcoal-800 py-20 sm:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl px-5 transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300">
            <Sparkles className="h-3.5 w-3.5" /> Real Patient Transformations
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-white sm:text-5xl">
            Drag to Reveal the <span className="gold-text">Difference</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/65 sm:text-base">
            Slide the handle left and right to compare a patient's scalp before and after a
            7-month PRP + Mesotherapy protocol.
          </p>
        </div>

        <div
          ref={containerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl border border-white/15 shadow-deep sm:aspect-[16/10]"
        >
          {/* After (full base layer) */}
          <img
            src={IMAGES.after}
            alt="After hair restoration"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
          <div className="absolute bottom-4 right-4 rounded-full bg-gold-400/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-royal-900">
            After
          </div>

          {/* Before (clipped overlay) */}
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img
              src={IMAGES.before}
              alt="Before hair restoration"
              className="absolute inset-0 h-full w-full max-w-none object-cover"
              style={{ width: containerW || '100%' }}
              draggable={false}
            />
            <div className="absolute bottom-4 left-4 rounded-full bg-royal-700/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Before
            </div>
          </div>

          {/* Handle */}
          <div
            className="pointer-events-none absolute top-0 bottom-0 z-10 w-0.5 bg-gold-400"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold-400 bg-white shadow-luxury">
              <MoveHorizontal className="h-5 w-5 text-royal-700" />
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-white/40">
          Individual results may vary. Photos shown are of models for demonstration purposes.
        </p>
      </div>
    </section>
  );
}
