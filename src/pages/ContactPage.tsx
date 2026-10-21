import React, { useState } from 'react';
import { GYM_INFO, GYM_FAQS } from '../data/gymData';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Car, Building, ChevronDown, ChevronUp, Zap, Dumbbell, User, Calendar } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Free Day Pass');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [slot, setSlot] = useState('06:30 AM – 08:00 AM (Morning Batch)');

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = [
      `*New Free Day Pass Request - The Reps Fitness Premium*`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${name || 'Fitness Guest'}`,
      `📞 *Phone:* ${phone || 'Not specified'}`,
      `🎫 *Service:* ${service}`,
      `📅 *Date:* ${date}`,
      `⏰ *Preferred Slot:* ${slot}`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `📍 *Location:* SCO 52-53, 5th Floor, D-Block, Ranjit Avenue, Amritsar`,
    ].join('\n');

    window.location.href = `https://wa.me/919049291492?text=${encodeURIComponent(formatted)}`;
  };

  return (
    <div className="py-10 lg:py-16 space-y-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-amber-400 font-bold">
            <span>The Reps Fitness Premium</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Location &amp; Desk</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Location, Hours &amp; Booking
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
            SCO 52-53, 5th Floor, Gumtala Sub Urban, D-Block, Ranjit Avenue, Amritsar, Punjab - 143001. Direct elevator access, dedicated parking, and instant WhatsApp support.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="luxury-card rounded-2xl p-7 space-y-6">
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold tracking-wider uppercase text-amber-400">
                  Club Coordinates
                </span>
                <h2 className="font-display text-3xl font-black text-white uppercase">
                  {GYM_INFO.name}
                </h2>
                <p className="text-xs text-zinc-400">
                  {GYM_INFO.address}
                </p>
              </div>

              <div className="space-y-4 text-xs text-zinc-300">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#181b26] flex items-center justify-center text-amber-400 shrink-0 mt-0.5 border border-white/10">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold mb-0.5 uppercase tracking-wide">
                      Exact Address:
                    </strong>
                    <span>SCO 52-53, 5th Floor, Gumtala Sub Urban, D-Block, Ranjit Avenue, Amritsar, Punjab - 143001</span>
                  </div>
                </div>

                {/* Floor Access */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#181b26] flex items-center justify-center text-amber-400 shrink-0 mt-0.5 border border-white/10">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold mb-0.5 uppercase tracking-wide">
                      Floor &amp; Access:
                    </strong>
                    <span>5th Floor (Dual high-speed elevators &amp; wide stairwell)</span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#181b26] flex items-center justify-center text-amber-400 shrink-0 mt-0.5 border border-white/10">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold mb-0.5 uppercase tracking-wide">
                      Phone Number:
                    </strong>
                    <a href={`tel:${GYM_INFO.phone}`} className="text-amber-400 hover:underline font-bold text-sm tabular-nums">
                      {GYM_INFO.phoneFormatted} ({GYM_INFO.phone})
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#181b26] flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 border border-white/10">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold mb-0.5 uppercase tracking-wide">
                      Direct WhatsApp:
                    </strong>
                    <a
                      href={GYM_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-semibold"
                    >
                      wa.me/919049291492
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#181b26] flex items-center justify-center text-amber-400 shrink-0 mt-0.5 border border-white/10">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold mb-0.5 uppercase tracking-wide">
                      Operating Timings:
                    </strong>
                    <span className="block text-zinc-300 font-medium">{GYM_INFO.hoursWeekday}</span>
                    <span className="block text-zinc-400 font-medium">{GYM_INFO.hoursSunday}</span>
                  </div>
                </div>

                {/* Parking */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#181b26] flex items-center justify-center text-amber-400 shrink-0 mt-0.5 border border-white/10">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold mb-0.5 uppercase tracking-wide">
                      Parking:
                    </strong>
                    <span>Dedicated front service road parking on D-Block Ranjit Avenue with ample spots for cars and two-wheelers.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-black uppercase tracking-wider text-xs transition-colors shadow-md shadow-amber-500/20"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href={`tel:${GYM_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1a1e2a] hover:bg-[#252b3d] text-white border border-white/10 font-bold uppercase tracking-wider text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call {GYM_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Free Day Pass Form */}
          <div className="lg:col-span-6">
            <div className="luxury-card rounded-2xl p-7 space-y-5 border border-amber-400/30">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                  Instant WhatsApp Booking
                </span>
                <h3 className="font-display text-2xl font-black text-white uppercase">
                  Book Your Free Day Pass
                </h3>
                <p className="text-xs text-zinc-400">
                  Receive an instant WhatsApp confirmation for your 5th floor visit at Ranjit Avenue.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div className="space-y-1.5">
                  <label className="text-zinc-300 font-semibold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jaspreet Singh"
                    className="w-full px-3.5 py-2.5 bg-[#181a24] border border-white/15 rounded-xl text-white placeholder-zinc-500 outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-300 font-semibold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9049291492"
                    className="w-full px-3.5 py-2.5 bg-[#181a24] border border-white/15 rounded-xl text-white placeholder-zinc-500 outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-zinc-300 font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      Visit Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#181a24] border border-white/15 rounded-xl text-white outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-zinc-300 font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      Workout Slot
                    </label>
                    <select
                      value={slot}
                      onChange={(e) => setSlot(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#181a24] border border-white/15 rounded-xl text-white outline-none focus:border-amber-400"
                    >
                      <option value="06:30 AM – 08:00 AM (Morning Batch)">06:30 AM – 08:00 AM</option>
                      <option value="08:00 AM – 09:30 AM (Morning Peak)">08:00 AM – 09:30 AM</option>
                      <option value="05:00 PM – 06:30 PM (Evening Batch)">05:00 PM – 06:30 PM</option>
                      <option value="06:30 PM – 08:00 PM (Evening Peak)">06:30 PM – 08:00 PM</option>
                      <option value="08:00 PM – 09:30 PM (Night Lifters)">08:00 PM – 09:30 PM</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-zinc-300 font-semibold flex items-center gap-1.5">
                    <Dumbbell className="w-3.5 h-3.5 text-amber-400" />
                    Interested Program
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#181a24] border border-white/15 rounded-xl text-white outline-none focus:border-amber-400"
                  >
                    <option value="Weight Training & Gym Floor">Weight Training &amp; Gym Floor</option>
                    <option value="CrossFit & Functional Turf">CrossFit &amp; Functional Turf</option>
                    <option value="Indoor Cycling (Spin)">Indoor Cycling (Spin)</option>
                    <option value="Zumba & Dance Fitness">Zumba &amp; Dance Fitness</option>
                    <option value="Yoga Classes">Yoga Classes</option>
                    <option value="Luxury Saunas & Steam Recovery">Luxury Saunas &amp; Steam Recovery</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-black uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
                >
                  <Zap className="w-4 h-4 fill-black text-black" />
                  <span>Send Request to WhatsApp ({GYM_INFO.phone})</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="rounded-2xl overflow-hidden border border-amber-400/20 bg-[#12141c] h-80 relative shadow-xl">
          <iframe
            title="The Reps Fitness Premium SCO 52-53 5th Floor D-Block Ranjit Avenue Amritsar Map"
            src="https://maps.google.com/maps?q=SCO%2052-53,%205th%20Floor,%20D-Block,%20Ranjit%20Avenue,%20Amritsar,%20Punjab%20143001&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale contrast-125 opacity-90 hover:opacity-100 transition-opacity"
          />
          <div className="absolute bottom-3 left-3 bg-[#0a0c12]/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-amber-400/20 text-[11px] text-zinc-200 pointer-events-none font-medium flex items-center gap-1.5">
            <span className="text-amber-400">📍</span>
            <span>SCO 52-53, 5th Floor, D-Block, Ranjit Avenue, Amritsar</span>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-bold uppercase text-white">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {GYM_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#0f1118] border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-3.5 text-left text-xs font-bold text-white flex items-center justify-between hover:text-amber-400 transition-colors cursor-pointer uppercase tracking-wide"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-4 text-xs text-zinc-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
