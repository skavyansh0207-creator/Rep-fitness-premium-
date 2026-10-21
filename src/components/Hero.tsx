import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { Star, MapPin, Zap, Flame, ShieldCheck, Dumbbell, Phone, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (programName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/10">
      {/* Background ambient gold/amber luxury glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] bg-gradient-to-b from-amber-500/12 via-amber-600/5 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Brand Statement, High-Energy Value Proposition, Action CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Trust Indicator (Zero-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-zinc-300">
              <span className="flex items-center gap-1.5 font-bold text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                Rated 4.9★
              </span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-white font-medium">{GYM_INFO.reviewCountExact}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-amber-300/90 font-medium">5th Floor · Ranjit Avenue</span>
            </div>

            {/* Headline */}
            <div className="space-y-3.5">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.04] text-balance">
                Elevate Your Potential at{' '}
                <span className="gold-gradient-text">The Reps Fitness Premium</span>
              </h1>
              <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-light leading-relaxed">
                Amritsar's premier luxury fitness club situated high on the 5th floor in Ranjit Avenue. High-performance strength &amp; CrossFit turf, boutique indoor cycling theater, energizing Zumba &amp; yoga classes, and Nordic luxury saunas &amp; steam recovery suites.
              </p>
            </div>

            {/* Direct Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* WhatsApp Free Day Pass Button */}
              <a
                href={GYM_INFO.freePassWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-black uppercase tracking-wider rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black transition-all shadow-lg shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
              >
                <Zap className="w-4 h-4 fill-black text-black" />
                <span>Book Free Day Pass</span>
              </a>

              {/* Direct Booking Modal trigger */}
              <button
                onClick={() => onOpenBooking('Free Day Pass')}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#131620] hover:bg-[#1c2130] text-white border border-white/15 hover:border-amber-400/40 transition-all whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Dumbbell className="w-4 h-4 text-amber-400" />
                <span>Book Gym Tour</span>
              </button>

              {/* Phone Call */}
              <a
                href={`tel:${GYM_INFO.phone}`}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-semibold rounded-xl bg-[#0e1017] hover:bg-[#161a26] text-zinc-300 border border-white/10 hover:border-amber-400/40 transition-colors whitespace-nowrap shrink-0"
                title={`Call ${GYM_INFO.phone}`}
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="tabular-nums">Call {GYM_INFO.phone}</span>
              </a>
            </div>

            {/* Highlight bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-4 border-t border-white/10 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Luxury Saunas &amp; Steam</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                <span>CrossFit &amp; Indoor Cycling</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>5th Floor, Ranjit Avenue</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Canvas with User Image 1 */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-amber-400/30 shadow-2xl bg-[#10121a] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
              {/* Fallback container with luxury dark athletic gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#08090d] via-[#141724] to-[#1c1810] flex items-center justify-center p-6 text-center">
                <div className="space-y-2 opacity-60">
                  <span className="font-display text-2xl font-bold uppercase text-amber-400">The Reps Fitness Premium</span>
                  <p className="text-xs text-zinc-400">SCO 52-53, 5th Floor, D-Block, Ranjit Avenue, Amritsar</p>
                </div>
              </div>

              {/* Main Image 1 (Hero Banner / Facility Image) */}
              <img
                src={GYM_INFO.heroImage}
                alt="The Reps Fitness Premium SCO 52-53 5th Floor Ranjit Avenue Amritsar luxury gym interior and facility"
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                className={`relative z-10 w-full h-full object-cover transition-opacity duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Contrast Scrim */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

              {/* Floating Bottom Card Over Scrim */}
              <div className="absolute bottom-4 left-4 right-4 z-30 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-bold text-white uppercase tracking-wide">The Reps Fitness Premium</p>
                    <span className="text-[10px] text-amber-400 font-bold px-1.5 py-0.2 bg-amber-400/10 rounded border border-amber-400/30">5th Floor</span>
                  </div>
                  <p className="text-[11px] text-zinc-300">D-Block, Ranjit Avenue · Open 6:00 AM – 10:00 PM</p>
                </div>
                <a
                  href={GYM_INFO.freePassWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-bold bg-amber-400 text-black rounded-lg hover:bg-white transition-colors uppercase tracking-wider shrink-0"
                >
                  Free Pass
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Quick Metric & Assurance Strip (Full Width Row Below Split) */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-display text-amber-400 tabular-nums">
              4.9 ★
            </div>
            <p className="text-xs text-zinc-400">857+ Verified Google Reviews</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-display text-white uppercase">
              5th Floor View
            </div>
            <p className="text-xs text-zinc-400">SCO 52-53, D-Block, Ranjit Avenue</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-display text-white tabular-nums uppercase">
              6 AM – 10 PM
            </div>
            <p className="text-xs text-zinc-400">Open 7 Days a Week</p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-display text-amber-400 tabular-nums">
              9049291492
            </div>
            <p className="text-xs text-zinc-400">Direct WhatsApp &amp; Calls</p>
          </div>
        </div>
      </div>
    </section>
  );
};
