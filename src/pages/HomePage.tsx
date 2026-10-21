import React from 'react';
import { GYM_INFO, TESTIMONIALS } from '../data/gymData';
import { PageId } from '../types/navigation';
import { Star, Zap, Phone, Dumbbell, Flame, Sparkles, MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (programName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:pt-14 lg:pb-18 border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] bg-gradient-to-b from-amber-500/12 via-amber-600/5 to-transparent pointer-events-none blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Tag */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-zinc-300">
                <span className="flex items-center gap-1.5 font-bold text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  Rated {GYM_INFO.rating}★
                </span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span className="text-white font-medium">{GYM_INFO.reviewCountExact}</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span className="text-amber-300/90 font-medium">SCO 52-53, 5th Floor, Ranjit Avenue</span>
              </div>

              {/* Title */}
              <div className="space-y-3">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.05]">
                  <span className="gold-gradient-text">{GYM_INFO.name}</span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl text-zinc-300 font-bold mt-1">
                    Amritsar's Premier Luxury Gym &amp; Club
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-zinc-300 max-w-2xl font-normal leading-relaxed">
                  Located on the 5th floor in D-Block, Ranjit Avenue. Comprehensive facilities for Olympic weight training, CrossFit functional fitness, indoor cycling spin classes, Zumba, yoga, and Nordic luxury saunas.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={GYM_INFO.freePassWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-black uppercase tracking-wider rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
                >
                  <Zap className="w-4 h-4 fill-black text-black" />
                  <span>Book Free Day Pass</span>
                </a>

                <button
                  onClick={() => onNavigate('programs')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#141722] hover:bg-[#1d2232] text-white border border-white/15 hover:border-amber-400/40 transition-all shrink-0 cursor-pointer"
                >
                  <Dumbbell className="w-4 h-4 text-amber-400" />
                  <span>Explore Programs</span>
                </button>

                <a
                  href={`tel:${GYM_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-semibold rounded-xl bg-[#0f1118] hover:bg-[#171b26] text-zinc-300 border border-white/10 hover:border-amber-400/40 transition-colors shrink-0"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span className="tabular-nums">Call {GYM_INFO.phone}</span>
                </a>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs text-zinc-300">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 block">Location</span>
                  <span>5th Floor, Ranjit Ave</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 block">Timings</span>
                  <span>Mon–Sat: 6 AM – 10 PM</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400 block">Amenities</span>
                  <span>Sauna &amp; Steam Included</span>
                </div>
              </div>
            </div>

            {/* Right Image 1: Hero Banner */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-amber-400/30 shadow-2xl bg-[#10121a] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
                <img
                  src={GYM_INFO.heroImage}
                  alt="The Reps Fitness Premium 5th Floor Gym Floor Ranjit Avenue Amritsar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wide">The Reps Fitness Premium</p>
                    <p className="text-[11px] text-zinc-300">SCO 52-53, 5th Floor · Ranjit Avenue, Amritsar</p>
                  </div>
                  <button
                    onClick={() => onNavigate('facility')}
                    className="px-3 py-1.5 text-xs font-bold bg-amber-400 text-black rounded-lg hover:bg-white transition-colors uppercase tracking-wider shrink-0 cursor-pointer"
                  >
                    View Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.24em] text-amber-400 font-bold block mb-1">
              Core Disciplines
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Services &amp; Programs Provided
            </h2>
          </div>
          <button
            onClick={() => onNavigate('programs')}
            className="text-xs text-amber-400 hover:text-amber-300 font-bold uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>View Full Program Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="luxury-card rounded-2xl p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white uppercase">Strength &amp; Performance</h3>
                <p className="text-xs text-amber-400 mt-0.5 font-medium">Power, Hypertrophy &amp; Athleticism</p>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Olympic lifting platforms, dumbbells up to 50kg, precision plate-loaded machines, synthetic CrossFit sprint turf, and 1-on-1 personal coaching.
              </p>
              <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>CrossFit &amp; Sled Push Turf</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Weight Training (Free Weights &amp; Racks)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Elite 1-on-1 Personal Training</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('programs')}
              className="w-full py-2.5 rounded-xl bg-[#161922] hover:bg-[#202534] text-xs font-bold text-white uppercase tracking-wider border border-white/10 hover:border-amber-400/40 transition-colors cursor-pointer text-center"
            >
              Learn More →
            </button>
          </div>

          {/* Pillar 2 */}
          <div className="luxury-card rounded-2xl p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-400/10 border border-orange-400/30 flex items-center justify-center text-orange-400">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white uppercase">Studio &amp; Group Classes</h3>
                <p className="text-xs text-orange-400 mt-0.5 font-medium">Boutique Group Workouts</p>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                High-energy classes led by certified instructors in our dedicated sound-isolated studio with concert audio and mood lighting.
              </p>
              <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>Indoor Cycling (Spin Theater)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>Dance Fitness Classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>Licensed Zumba® &amp; Yoga Classes</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('programs')}
              className="w-full py-2.5 rounded-xl bg-[#161922] hover:bg-[#202534] text-xs font-bold text-white uppercase tracking-wider border border-white/10 hover:border-orange-400/40 transition-colors cursor-pointer text-center"
            >
              Learn More →
            </button>
          </div>

          {/* Pillar 3 */}
          <div className="luxury-card rounded-2xl p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-300/10 border border-amber-300/30 flex items-center justify-center text-amber-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white uppercase">Recovery &amp; Wellness</h3>
                <p className="text-xs text-amber-300 mt-0.5 font-medium">Thermal Spa &amp; Muscle Repair</p>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Recharge tired muscles with therapeutic dry heat and steam recovery. Included in all regular gym memberships.
              </p>
              <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Luxury Nordic Cedarwood Saunas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Eucalyptus Steam &amp; Hydro-Showers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Post-Workout Percussive &amp; Foam Recovery</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('programs')}
              className="w-full py-2.5 rounded-xl bg-[#161922] hover:bg-[#202534] text-xs font-bold text-white uppercase tracking-wider border border-white/10 hover:border-amber-300/40 transition-colors cursor-pointer text-center"
            >
              Learn More →
            </button>
          </div>
        </div>
      </section>

      {/* Visual Training Floor Spotlight (Featuring Image 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-amber-400/25 bg-[#0f1118] grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[300px]">
            <img
              src={GYM_INFO.facilityImage}
              alt="The Reps Fitness Premium Workout Floor and Training Zone"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
          </div>
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-400">
                Workout Floor &amp; Training Zone
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase">
                World-Class Gym Equipment
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Step onto our 5th floor floor plan featuring heavy iron dumbbells up to 50kg, multiple Olympic squat and bench stations, commercial pin-loaded isolation machines, and a dedicated CrossFit turf track.
              </p>
              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>5th Floor high-ceiling layout with expansive natural daylight</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Continuous sanitation, air handling &amp; climate control</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Certified floor coaches on duty for form corrections</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <button
                onClick={() => onNavigate('facility')}
                className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
              >
                Tour 5th Floor Facility
              </button>
              <a
                href={GYM_INFO.freePassWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#161922] hover:bg-[#222736] text-white border border-white/15 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Book Free Day Pass
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Member Trust Badge & Selected Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-400 mb-1">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Verified Google Trust</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-white uppercase">
              Rated 4.9★ ({GYM_INFO.reviewCountExact})
            </h2>
          </div>
          <a
            href={GYM_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-amber-400 hover:underline font-bold uppercase tracking-wider"
          >
            Review us on Google / WhatsApp →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <div key={t.id} className="luxury-card rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-zinc-200 leading-relaxed">"{t.comment}"</p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                <span className="font-bold text-white uppercase">{t.name}</span>
                <span className="text-amber-400 font-semibold">{t.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Location & Direct Pass CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#10121a] via-[#1a1710] to-[#10121a] border border-amber-400/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 flex items-center justify-center md:justify-start gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Ranjit Avenue, Amritsar
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase">
              Claim Your 1-Day Free Pass Today
            </h3>
            <p className="text-xs text-zinc-300 max-w-xl">
              Visit SCO 52-53, 5th Floor, D-Block, Ranjit Avenue. Workout on the gym floor, join an indoor cycling or Zumba class, and relax in the luxury sauna.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={GYM_INFO.freePassWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-black uppercase tracking-wider text-xs shadow-lg shadow-amber-500/25 transition-all"
            >
              Book Free Day Pass (WhatsApp)
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-3.5 rounded-xl bg-[#141720] hover:bg-[#1e2332] text-white border border-white/15 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Directions &amp; Map
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
