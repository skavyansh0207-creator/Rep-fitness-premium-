import React, { useState } from 'react';
import { CORE_PROGRAM_CATEGORIES, GymProgram, GYM_INFO } from '../data/gymData';
import { Search, Dumbbell, Flame, Sparkles, Clock, Zap, MessageCircle, CheckCircle2 } from 'lucide-react';

interface ProgramsPageProps {
  onOpenBooking: (programName?: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onOpenBooking }) => {
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

  const getWhatsAppUrl = (programName: string) => {
    const text = encodeURIComponent(
      `Hello The Reps Fitness Premium! I want to book a Free Day Pass for *${programName}* at your 5th floor Ranjit Avenue club in Amritsar.`
    );
    return `https://wa.me/919049291492?text=${text}`;
  };

  return (
    <div className="py-10 lg:py-16 space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-amber-400 font-bold">
            <span>The Reps Fitness Premium</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Services &amp; Programs Guide</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Gym Programs &amp; Club Amenities
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
            All services offered at our SCO 52-53, 5th Floor, Ranjit Avenue facility. Structured into Strength &amp; Performance, Boutique Studio &amp; Group Classes, and Recovery &amp; Thermal Wellness.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <button
              onClick={() => setActiveCategoryId('all')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer uppercase tracking-wider ${
                activeCategoryId === 'all'
                  ? 'bg-amber-400 text-black shadow-md font-black'
                  : 'text-zinc-400 hover:text-white bg-[#12141c]'
              }`}
            >
              All Services ({allPrograms.length})
            </button>
            {CORE_PROGRAM_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer uppercase tracking-wider ${
                  activeCategoryId === cat.id
                    ? 'bg-amber-400 text-black shadow-md font-black'
                    : 'text-zinc-400 hover:text-white bg-[#12141c]'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (CrossFit, Cycling, Saunas)..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#12141c] border border-white/10 focus:border-amber-400 rounded-xl text-xs text-zinc-200 placeholder-zinc-500 outline-none transition-colors"
            />
          </div>
        </div>

        {/* 3 Pillar Summary Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="p-4 rounded-xl bg-[#10121a] border border-amber-400/20 text-xs space-y-1">
            <span className="font-bold text-amber-400 uppercase tracking-wide block">1. Strength &amp; Performance</span>
            <p className="text-zinc-400">Olympic weightlifting, CrossFit turf, commercial dumbbells (2.5–50kg), 1-on-1 personal training.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#10121a] border border-orange-400/20 text-xs space-y-1">
            <span className="font-bold text-orange-400 uppercase tracking-wide block">2. Studio &amp; Group Classes</span>
            <p className="text-zinc-400">Indoor Cycling spin theater, Dance Fitness, licensed Zumba®, and mobility Yoga classes.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#10121a] border border-amber-300/20 text-xs space-y-1">
            <span className="font-bold text-amber-300 uppercase tracking-wide block">3. Recovery &amp; Wellness</span>
            <p className="text-zinc-400">Handcrafted Nordic cedar saunas, eucalyptus steam rooms, percussive massage tools.</p>
          </div>
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#10121a] border border-white/10 space-y-3">
            <p className="text-zinc-400 text-sm">No gym service found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategoryId('all');
              }}
              className="text-xs text-amber-400 hover:underline uppercase font-bold cursor-pointer"
            >
              Reset search &amp; show all services
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
                  {/* Category & Intensity */}
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

                  {/* Title */}
                  <div>
                    <h2 className="font-display text-2xl font-bold text-white group-hover:text-amber-400 transition-colors uppercase">
                      {program.name}
                    </h2>
                    <p className="text-xs text-amber-400/90 font-medium mt-0.5">{program.tagline}</p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Equipment & Features list */}
                  <div className="pt-2 border-t border-white/10 space-y-1.5">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider block mb-1">
                      Included Amenities &amp; Gear:
                    </span>
                    {program.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-[11px] text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer details & CTAs */}
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
                      onClick={() => onOpenBooking(program.name)}
                      className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#191c28] hover:bg-[#252b3d] text-white border border-white/10 hover:border-amber-400/40 transition-colors cursor-pointer"
                    >
                      Book Pass
                    </button>

                    <a
                      href={getWhatsAppUrl(program.name)}
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

        {/* Free Day Pass Callout Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0f1118] border border-amber-400/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <h3 className="font-display text-xl font-bold uppercase text-white">Experience All 3 Disciplines with a Free Day Pass</h3>
            <p className="text-zinc-400">Test our workout equipment, take a cycling batch, and relax in the sauna at no cost.</p>
          </div>
          <a
            href={GYM_INFO.freePassWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-black uppercase tracking-wider transition-all shadow-md shadow-amber-500/20 shrink-0"
          >
            Claim Free Day Pass (WhatsApp)
          </a>
        </div>
      </div>
    </div>
  );
};
