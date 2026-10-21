import React, { useState } from 'react';
import { WEEKLY_SCHEDULE, MEMBERSHIP_PLANS, GYM_INFO } from '../data/gymData';
import { Clock, User, Zap, ArrowRight, CheckCircle2, Flame, Crown } from 'lucide-react';

interface SchedulePricingPageProps {
  onOpenBooking: (title?: string) => void;
}

export const SchedulePricingPage: React.FC<SchedulePricingPageProps> = ({ onOpenBooking }) => {
  const [selectedDay, setSelectedDay] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const daysList = ['All', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const categoryList = ['All', 'Cycling', 'CrossFit', 'Zumba', 'Strength', 'Yoga', 'Recovery'];

  const filteredSchedule = WEEKLY_SCHEDULE.filter((item) => {
    const matchesDay = selectedDay === 'All' || item.days.includes(selectedDay);
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesDay && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Cycling':
        return 'text-amber-400 bg-amber-950/40 border-amber-500/30';
      case 'CrossFit':
        return 'text-red-400 bg-red-950/40 border-red-500/30';
      case 'Zumba':
        return 'text-pink-400 bg-pink-950/40 border-pink-500/30';
      case 'Yoga':
        return 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30';
      case 'Recovery':
        return 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30';
      default:
        return 'text-amber-400 bg-amber-400/10 border-amber-400/30';
    }
  };

  const getReserveWhatsappUrl = (className: string, time: string) => {
    const text = encodeURIComponent(
      `Hello The Reps Fitness Premium! I would like to reserve a slot for *${className}* (${time}) at SCO 52-53, 5th Floor, Ranjit Avenue, Amritsar.`
    );
    return `https://wa.me/919049291492?text=${text}`;
  };

  return (
    <div className="py-10 lg:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: Weekly Class Schedule */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-amber-400 font-bold">
                <span>The Reps Fitness Premium</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>Timetable</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
                Weekly Class Timetable
              </h1>
              <p className="text-sm text-zinc-300 max-w-2xl">
                Daily scheduled batches for Indoor Cycling, CrossFit WODs, Zumba, Yoga, and Thermal Recovery. All group classes are included in club memberships.
              </p>
            </div>

            <a
              href={GYM_INFO.freePassWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-black uppercase tracking-wider transition-colors shrink-0 shadow-md shadow-amber-500/20"
            >
              <Zap className="w-3.5 h-3.5 fill-black text-black" />
              <span>Book Free Class Pass</span>
            </a>
          </div>

          {/* Filters */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mr-2 shrink-0">
                Day:
              </span>
              {daysList.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer uppercase ${
                    selectedDay === day
                      ? 'bg-amber-400 text-black shadow-sm font-black'
                      : 'bg-[#12141c] text-zinc-400 hover:text-white border border-white/10'
                  }`}
                >
                  {day === 'All' ? 'All Days' : day}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mr-2 shrink-0">
                Discipline:
              </span>
              {categoryList.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-white text-black font-bold'
                      : 'bg-[#161822] text-zinc-400 hover:text-zinc-200 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Timetable Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredSchedule.map((item) => (
              <div
                key={item.id}
                className="luxury-card rounded-2xl p-5 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${getCategoryColor(
                        item.category
                      )}`}
                    >
                      {item.category}
                    </span>
                    <span className="text-[11px] text-zinc-400 font-medium">
                      {item.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-400 transition-colors uppercase">
                      {item.className}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mt-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="tabular-nums">{item.time}</span>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs text-zinc-400 pt-1">
                    <p className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{item.trainer}</span>
                    </p>
                    <p className="text-[11px] text-zinc-500">
                      Days: <span className="text-zinc-300 font-medium">{item.days.join(', ')}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onOpenBooking(item.className)}
                    className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#181b26] hover:bg-[#252b3d] text-white rounded-lg transition-colors cursor-pointer"
                  >
                    Book Slot
                  </button>
                  <a
                    href={getReserveWhatsappUrl(item.className, item.time)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors flex items-center gap-1"
                    title="Reserve on WhatsApp"
                  >
                    <span>WhatsApp</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Membership Plans & Rates */}
        <section className="space-y-8 pt-8 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.24em] text-amber-400 font-bold">
              Membership Tiers
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
              Transparent Membership Rates
            </h2>
            <p className="text-sm text-zinc-300">
              Clear terms with zero hidden fees. Includes full 5th floor fitness arena, group classes, luxury saunas, and steam rooms in Ranjit Avenue, Amritsar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEMBERSHIP_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`luxury-card rounded-2xl p-6 flex flex-col justify-between relative ${
                  plan.popular
                    ? 'border-2 border-amber-400 bg-gradient-to-b from-[#181510] to-[#0c0e14] shadow-xl shadow-amber-500/15'
                    : 'bg-[#0f1118]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">
                      {plan.duration}
                    </span>
                    {plan.popular ? (
                      <Flame className="w-5 h-5 text-amber-400" />
                    ) : (
                      <Crown className="w-5 h-5 text-zinc-600" />
                    )}
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-white uppercase">{plan.name}</h3>
                    <p className="text-xs text-amber-400 font-medium mt-0.5">{plan.tagline}</p>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-3xl sm:text-4xl font-black text-white tabular-nums">
                        {plan.price}
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">/ duration</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1">{plan.billingText}</p>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-zinc-300">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 space-y-2.5">
                  <button
                    onClick={() => onOpenBooking(plan.name)}
                    className={`w-full py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-all cursor-pointer ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-black shadow-md shadow-amber-500/20'
                        : 'bg-[#181b26] hover:bg-[#232738] text-white border border-white/10 hover:border-amber-400/40'
                    }`}
                  >
                    Join / Book Day Pass
                  </button>

                  <a
                    href={`https://wa.me/919049291492?text=Hello%20The%20Reps%20Fitness%20Premium!%20I%20am%20interested%20in%20the%20*${encodeURIComponent(
                      plan.name
                    )}*%20(${encodeURIComponent(plan.price)})%20plan%20at%20Ranjit%20Avenue%20Amritsar.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[11px] text-zinc-400 hover:text-amber-400 transition-colors"
                  >
                    Inquire on WhatsApp →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
