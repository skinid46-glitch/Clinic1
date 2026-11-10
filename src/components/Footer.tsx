import { Phone, MapPin, Clock, Mail, MessageCircle, Activity, Navigation } from 'lucide-react';
import { CLINIC } from '@/data';

export default function Footer() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${CLINIC.mapsQuery}`;
  const whatsappUrl = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(
    'Hi, I would like to know more about your hair restoration treatments.',
  )}`;

  return (
    <footer id="contact" className="bg-charcoal-900 text-white">
      {/* Contact action bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-3">
          <a
            href={`tel:${CLINIC.phone}`}
            className="group flex items-center gap-4 border-b border-white/10 px-6 py-6 transition-colors hover:bg-white/5 sm:border-b-0 sm:border-r"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-royal-700 transition-colors group-hover:bg-royal-600">
              <Phone className="h-5 w-5 text-gold-300" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider text-white/50">Call Us</div>
              <div className="text-sm font-semibold text-white">{CLINIC.phone}</div>
            </div>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 border-b border-white/10 px-6 py-6 transition-colors hover:bg-white/5 sm:border-b-0 sm:border-r"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/20 transition-colors group-hover:bg-[#25D366]/30">
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider text-white/50">WhatsApp</div>
              <div className="text-sm font-semibold text-white">Chat with our team</div>
            </div>
          </a>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-6 py-6 transition-colors hover:bg-white/5"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-400/15 transition-colors group-hover:bg-gold-400/25">
              <Navigation className="h-5 w-5 text-gold-300" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider text-white/50">Get Directions</div>
              <div className="text-sm font-semibold text-white">Open in Google Maps</div>
            </div>
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/40 bg-white/5">
                <Activity className="h-5 w-5 text-gold-400" strokeWidth={2.2} />
              </span>
              <span className="font-serif text-2xl font-semibold tracking-wide text-white">
                The Clinic
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
              A premium hair restoration and aesthetics centre combining advanced trichology,
              regenerative medicine, and surgical precision in a setting of absolute comfort and
              discretion.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
              <Mail className="h-4 w-4 text-gold-400" />
              {CLINIC.email}
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 font-serif text-lg font-semibold text-gold-300">
              <MapPin className="h-5 w-5" /> Location
            </h4>
            <p className="text-sm leading-relaxed text-white/60">{CLINIC.address}</p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-300 transition-colors hover:text-gold-300"
            >
              View on map <Navigation className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 flex items-center gap-2 font-serif text-lg font-semibold text-gold-300">
              <Clock className="h-5 w-5" /> Clinic Hours
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex justify-between"><span>Mon – Fri</span><span className="text-white/80">{CLINIC.hours}</span></li>
              <li className="flex justify-between"><span>Saturday</span><span className="text-white/80">{CLINIC.hours}</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="text-white/50">Closed</span></li>
            </ul>
            <a
              href="#booking"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-2.5 text-xs font-bold text-royal-900 transition-all hover:bg-gold-300 active:scale-95"
            >
              Book Consultation
            </a>
          </div>
        </div>

        {/* Map embed */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="Clinic location map"
            src={`https://maps.google.com/maps?q=${CLINIC.mapsQuery}&z=14&output=embed`}
            className="h-56 w-full grayscale-[0.3] sm:h-64"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} The Clinic. A demo sales website — all content is illustrative.
          </p>
          <p className="text-xs text-white/40">
            Crafted for demonstration · Not a real medical provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
