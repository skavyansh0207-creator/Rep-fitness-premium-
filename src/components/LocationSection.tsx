import React, { useState } from 'react';
import { GYM_INFO, GYM_FAQS } from '../data/gymData';
import { MapPin, Phone, MessageCircle, Clock, ChevronDown, ChevronUp, Navigation, Car, Zap, Building } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="location" className="py-16 lg:py-24 bg-[#07080b] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.24em] text-amber-400 font-bold">
            Prime Ranjit Avenue Location
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Location, Hours &amp; Directions
          </h2>
          <p className="text-sm text-zinc-300">
            Situated on the prestigious 5th floor in D-Block, Ranjit Avenue, Amritsar. Featuring high-speed elevator access, panoramic glass facade, and ample street &amp; commercial parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Card & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="luxury-card rounded-2xl p-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-bold tracking-wider uppercase text-amber-400">
                  Club Coordinates
                </span>
                <h3 className="font-display text-3xl font-black text-white uppercase">
                  The Reps Fitness Premium
                </h3>
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
                    <span>5th Floor (High-Speed Dual Elevators &amp; Dedicated Stairwell)</span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#181b26] flex items-center justify-center text-amber-400 shrink-0 mt-0.5 border border-white/10">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold mb-0.5 uppercase tracking-wide">
                      Direct Phone:
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
                      Club Timings:
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
                      Parking &amp; Valet:
                    </strong>
                    <span>Dedicated front service parking on D-Block Ranjit Avenue with ample space for four-wheelers and two-wheelers.</span>
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
                  <span>Get Directions</span>
                </a>

                <a
                  href={GYM_INFO.freePassWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#1a1e2a] hover:bg-[#252b3d] text-white border border-white/10 font-bold uppercase tracking-wider text-xs transition-colors"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Book Free Day Pass</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & FAQs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Embedded Map Frame for SCO 52-53 5th Floor Ranjit Avenue Amritsar */}
            <div className="rounded-2xl overflow-hidden border border-amber-400/20 bg-[#12141c] h-72 sm:h-80 relative shadow-xl">
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

            {/* FAQs Accordion */}
            <div className="space-y-3">
              <h4 className="font-display text-xl font-bold uppercase text-white mb-2">
                Frequently Asked Questions
              </h4>

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
    </section>
  );
};
