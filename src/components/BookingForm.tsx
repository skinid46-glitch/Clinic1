import { useState } from 'react';
import { Calendar, User, Phone, CheckCircle2, AlertCircle, MessageCircle, ShieldCheck } from 'lucide-react';
import { CLINIC, IMAGES } from '@/data';
import { useReveal } from '@/hooks/useReveal';

type Errors = { name?: string; phone?: string; datetime?: string };

export default function BookingForm() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [datetime, setDatetime] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  const minDatetime = new Date().toISOString().slice(0, 16);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!name.trim() || name.trim().length < 2) e.name = 'Please enter your full name.';
    const clean = phone.replace(/[\s\-()]/g, '');
    if (!/^\+?\d{8,15}$/.test(clean)) e.phone = 'Enter a valid mobile number (8–15 digits).';
    if (!datetime) e.datetime = 'Please pick a preferred date & time.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const dt = new Date(datetime);
    const formatted = dt.toLocaleString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    const message = `Hi, I would like to book a Hair Restoration appointment. Name: ${name.trim()}, Mobile: ${phone.trim()}, Slot: ${formatted}`;
    const url = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;

    setSuccess(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const reset = () => {
    setName('');
    setPhone('');
    setDatetime('');
    setErrors({});
    setSuccess(false);
  };

  return (
    <section id="booking" className="relative overflow-hidden bg-royal-700 py-20 sm:py-28">
      {/* Decorative image */}
      <div className="absolute inset-0 opacity-20">
        <img src={IMAGES.consult} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-royal-700/60" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-xl px-5 transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="rounded-3xl border border-gold-400/20 bg-white p-6 shadow-deep sm:p-8">
          <div className="mb-6 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-700">
              <ShieldCheck className="h-3.5 w-3.5" /> Free Consultation
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-charcoal-800 sm:text-4xl">
              Book Your Appointment
            </h2>
            <p className="mt-2 text-sm text-charcoal-500">
              Fill in your details and confirm instantly via WhatsApp. Our team will revert within
              30 minutes during clinic hours.
            </p>
          </div>

          {success ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal-800">
                Booking Confirmed!
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-charcoal-500">
                Your WhatsApp window should have opened with a pre-filled message. Send it to lock
                in your slot. If it did not open, tap the button below.
              </p>
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#1da856] active:scale-95"
                >
                  <MessageCircle className="h-4 w-4" /> Open WhatsApp Again
                </button>
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center rounded-full border border-charcoal-200 px-6 py-3 text-sm font-semibold text-charcoal-600 transition-colors hover:bg-charcoal-50"
                >
                  New Booking
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="bk-name" className="mb-1.5 block text-sm font-semibold text-charcoal-700">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" />
                  <input
                    id="bk-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Aditya Sharma"
                    className={`w-full rounded-xl border bg-charcoal-50 py-3 pl-10 pr-4 text-sm text-charcoal-800 outline-none transition-all placeholder:text-charcoal-300 focus:bg-white focus:ring-2 ${
                      errors.name
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-charcoal-200 focus:border-royal-500 focus:ring-royal-200'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="bk-phone" className="mb-1.5 block text-sm font-semibold text-charcoal-700">
                  Active Mobile Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" />
                  <input
                    id="bk-phone"
                    type="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full rounded-xl border bg-charcoal-50 py-3 pl-10 pr-4 text-sm text-charcoal-800 outline-none transition-all placeholder:text-charcoal-300 focus:bg-white focus:ring-2 ${
                      errors.phone
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-charcoal-200 focus:border-royal-500 focus:ring-royal-200'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Datetime */}
              <div>
                <label htmlFor="bk-dt" className="mb-1.5 block text-sm font-semibold text-charcoal-700">
                  Preferred Appointment Date & Time
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400 z-10" />
                  <input
                    id="bk-dt"
                    type="datetime-local"
                    value={datetime}
                    min={minDatetime}
                    onChange={(e) => setDatetime(e.target.value)}
                    className={`w-full rounded-xl border bg-charcoal-50 py-3 pl-10 pr-4 text-sm text-charcoal-800 outline-none transition-all focus:bg-white focus:ring-2 ${
                      errors.datetime
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-charcoal-200 focus:border-royal-500 focus:ring-royal-200'
                    }`}
                  />
                </div>
                {errors.datetime && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.datetime}
                  </p>
                )}
                <p className="mt-1.5 text-xs text-charcoal-400">
                  Clinic hours: {CLINIC.hours}, Mon–Sat.
                </p>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-royal-700 py-4 text-sm font-bold text-white shadow-luxury transition-all hover:bg-royal-800 active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5" />
                Confirm Booking
              </button>
              <p className="text-center text-xs text-charcoal-400">
                Tapping confirm opens WhatsApp with your details pre-filled.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
