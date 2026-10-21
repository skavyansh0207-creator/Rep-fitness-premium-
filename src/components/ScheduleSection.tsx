import React, { useState } from 'react';
import { WEEKLY_SCHEDULE, GYM_INFO } from '../data/gymData';
import { Clock, Zap, User, ArrowRight } from 'lucide-react';

interface ScheduleSectionProps {
  onOpenBooking: (className?: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onOpenBooking }) => {
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
      `Hello The Reps Fitness Premium! I would like to reserve a spot for the *${className}* (${time}) session on the 5th Floor, Ranjit Avenue, Amritsar.`
    );
    return `https://wa.me/919049291492?text=${text}`;
  };

  return (
    <section id="schedule" className="py-16 lg:py-24 bg-[#090b10] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.24em] text-amber-400 font-bold">
              Weekly Timetable
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
              Class Schedule &amp; Batches
            </h2>
            <p className="text-sm text-zinc-300">
              Join sunrise cycling sessions, lunchtime recovery saunas, or high-octane evening CrossFit and Zumba batches. All included in your membership!
            </p>
          </div>

          <a
            href={GYM_INFO.freePassWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black text-xs font-black uppercase tracking-wider transition-colors shrink-0 shadow-md shadow-amber-500/20"
          >
            <Zap className="w-3.5 h-3.5 fill-black text-black" />
            <span>Book Free Day Pass</span>
          </a>
        </div>

        {/* Day Selector Tabs */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mr-2 shrink-0">
              Select Day:
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

          {/* Discipline Selector */}
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

        {/* Schedule Footer Note */}
        <div className="mt-8 text-center text-xs text-zinc-400">
          <span>Need customized personal training timings or private spin batches? </span>
          <a
            href={GYM_INFO.freePassWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline font-bold uppercase tracking-wide inline-flex items-center gap-1 ml-1"
          >
            Inquire on WhatsApp ({GYM_INFO.phone})
          </a>
        </div>
      </div>
    </section>
  );
};
