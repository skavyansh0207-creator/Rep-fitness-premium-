import React, { useState } from 'react';
import { CORE_PROGRAM_CATEGORIES, GymProgram, GYM_INFO } from '../data/gymData';
import { Search, Dumbbell, Flame, Sparkles, Clock, Zap, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForBooking: (programName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allPrograms: (GymProgram & { categoryTitle: string })[] = CORE_PROGRAM_CATEGORIES.flatMap((cat) =>
    cat.programs.map((p) => ({ ...p, categoryTitle: cat.name }))
  );

  const filteredPrograms = allPrograms.filter((program) => {
    const matchesCategory = activeCategoryId === 'all' || program.category === activeCategoryId;
    const matchesSearch =
      searchQuery.trim() === '' ||
      program.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'strength-performance':
        return <Dumbbell className="w-4 h-4 text-amber-400" />;
      case 'studio-classes':
        return <Flame className="w-4 h-4 text-orange-400" />;
      case 'recovery-wellness':
        return <Sparkles className="w-4 h-4 text-amber-300" />;
      default:
        return <Zap className="w-4 h-4 text-amber-400" />;
    }
  };

  const getIntensityBadgeClass = (intensity: string) => {
    switch (intensity) {
      case 'Extreme':
        return 'text-red-400 border-red-500/30 bg-red-950/30';
      case 'High':
        return 'text-amber-400 border-amber-500/30 bg-amber-950/30';
      case 'Medium':
        return 'text-yellow-300 border-yellow-400/30 bg-yellow-950/30';
      default:
        return 'text-emerald-400 border-emerald-500/30 bg-emerald-950/30';
    }
  };

  const getWhatsAppMessageUrl = (programName: string) => {
    const text = encodeURIComponent(
      `Hello The Reps Fitness Premium! I want to book a Free Day Pass or inquire about *${programName}* at your 5th floor Ranjit Avenue club in Amritsar.`
    );
    return `https://wa.me/919049291492?text=${text}`;
  };

  return (
    <section id="programs" className="py-16 lg:py-24 bg-[#090b10] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.24em] text-amber-400 font-bold">
              Core Disciplines &amp; Amenities
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
              Programs &amp; Specialized Zones
            </h2>
            <p className="text-sm sm:text-base text-zinc-300">
              Meticulously curated fitness and wellness offerings at The Reps Fitness Premium: heavy iron &amp; CrossFit turf, boutique indoor cycling, energetic group dance, restorative yoga, and Nordic saunas.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programs (CrossFit, Cycling, Saunas)..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#12141c] border border-white/10 focus:border-amber-400 rounded-xl text-xs text-zinc-200 placeholder-zinc-500 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Interactive Category Segmented Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/10 mb-8">
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer uppercase tracking-wider ${
              activeCategoryId === 'all'
                ? 'bg-amber-400 text-black shadow-md font-black'
                : 'text-zinc-400 hover:text-white bg-[#12141c]'
            }`}
          >
            All Disciplines ({allPrograms.length})
          </button>

          {CORE_PROGRAM_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategoryId(category.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer uppercase tracking-wider ${
                activeCategoryId === category.id
                  ? 'bg-amber-400 text-black shadow-md font-black'
                  : 'text-zinc-400 hover:text-white bg-[#12141c]'
              }`}
            >
              {getCategoryIcon(category.id)}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Description Note */}
        {activeCategoryId !== 'all' && (
          <div className="mb-6 p-4 rounded-xl bg-[#12141c] border border-amber-400/20 text-xs text-zinc-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-bold text-amber-400 uppercase tracking-wide">
                {CORE_PROGRAM_CATEGORIES.find((c) => c.id === activeCategoryId)?.name}
              </span>
              <span className="hidden sm:inline mx-2 text-zinc-600">·</span>
              <span className="text-zinc-400">
                {CORE_PROGRAM_CATEGORIES.find((c) => c.id === activeCategoryId)?.description}
              </span>
            </div>
            <a
              href={GYM_INFO.freePassWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline shrink-0 font-bold uppercase tracking-wider"
            >
              Book Free Day Pass
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Programs Grid */}
        {filteredPrograms.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#10121a] border border-white/10 space-y-3">
            <p className="text-zinc-400 text-sm">No workout or recovery program matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategoryId('all');
              }}
              className="text-xs text-amber-400 hover:underline uppercase font-bold"
            >
              Reset filters &amp; view all 3 core disciplines
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="luxury-card rounded-2xl p-6 flex flex-col justify-between group"
              >
                <div className="space-y-3.5">
                  {/* Category kicker & intensity */}
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-zinc-400 uppercase tracking-wider">
                      {program.categoryTitle}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${getIntensityBadgeClass(
                        program.intensity
                      )}`}
                    >
                      {program.intensity}
                    </span>
                  </div>

                  {/* Program Title */}
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-amber-400 transition-colors uppercase">
                      {program.name}
                    </h3>
                    <p className="text-xs text-amber-400/90 font-medium mt-0.5">{program.tagline}</p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="pt-2 border-t border-white/10 space-y-1.5">
                    {program.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[11px] text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer details & Action CTAs */}
                <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1 text-[11px] text-zinc-400">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{program.duration}</span>
                    </div>
                    <span className="text-[10px] text-zinc-500 block truncate max-w-[130px]">
                      {program.trainerSpecialty}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectServiceForBooking(program.name)}
                      className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#191c28] hover:bg-[#252b3d] text-white border border-white/10 hover:border-amber-400/40 transition-colors cursor-pointer"
                    >
                      Book Pass
                    </button>

                    <a
                      href={getWhatsAppMessageUrl(program.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-colors"
                      title={`WhatsApp booking for ${program.name}`}
                      aria-label={`WhatsApp booking for ${program.name}`}
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Consultation Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#11131a] via-[#1a1710] to-[#11131a] border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-xl font-bold uppercase text-white">
              Ready to experience The Reps Fitness Premium?
            </h4>
            <p className="text-xs text-zinc-300">
              Claim your Free Day Pass and tour our 5th floor Ranjit Avenue club today.
            </p>
          </div>
          <a
            href={GYM_INFO.freePassWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 text-xs font-black uppercase tracking-wider rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black transition-all shadow-md shadow-amber-500/20 whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <Zap className="w-4 h-4 fill-black text-black" />
            <span>Book Free Day Pass ({GYM_INFO.phone})</span>
          </a>
        </div>
      </div>
    </section>
  );
};
