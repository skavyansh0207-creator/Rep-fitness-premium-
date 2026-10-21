import React, { useState } from 'react';
import { GYM_INFO, FACILITY_HIGHLIGHTS } from '../data/gymData';
import { Eye, X, Zap, MapPin, Building, Dumbbell, Flame, Sparkles, Activity, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FacilityPageProps {
  onOpenBooking: (programName?: string) => void;
}

export const FacilityPage: React.FC<FacilityPageProps> = ({ onOpenBooking }) => {
  const [activeImage, setActiveImage] = useState<{ url: string; title: string; desc: string; tag: string } | null>(null);

  const galleryItems = [
    {
      id: 'main-facility',
      url: GYM_INFO.heroImage,
      title: '5th Floor Luxury Training Arena & Main Gym Floor',
      desc: 'Spacious high-ceiling facility with natural daylight over Ranjit Avenue. Outfitted with commercial plate-loaded machines, Olympic power racks, and deadlift stations.',
      tag: '5th Floor · Main Gym Floor',
      span: 'lg:col-span-2'
    },
    {
      id: 'workout-zone',
      url: GYM_INFO.facilityImage,
      title: 'Free Weight Zone & Functional CrossFit Area',
      desc: 'Dedicated heavy iron floor with commercial dumbbells up to 50kg, calibrated plates, sled push turf track, assault bikes, and battle ropes.',
      tag: 'Workout Floor · Training Zone',
      span: 'lg:col-span-1'
    }
  ];

  const facilityZones = [
    {
      zone: '5th Floor Panoramic Glass Floor',
      specs: 'High-speed dual elevator access, high-capacity central air purification, and panoramic views of Ranjit Avenue commercial hub.',
      icon: Building
    },
    {
      zone: 'Heavy Iron & Olympic Platforms',
      specs: 'Commercial dumbbells from 2.5kg to 50kg, multiple power cages, calibrated bumper plates, and vibration-damped deadlift platforms.',
      icon: Dumbbell
    },
    {
      zone: 'Functional CrossFit Sprint Turf',
      specs: 'Synthetic turf sprint lane, prowler sled, Concept2 rowers, assault air bikes, plyometric jump boxes, and battle ropes.',
      icon: Activity
    },
    {
      zone: 'Indoor Cycling (Spin) Theater',
      specs: 'Soundproofed spin studio with magnetic resistance studio cycles, club-grade sound setup, and rhythm-synchronized lighting.',
      icon: Flame
    },
    {
      zone: 'Luxury Cedarwood Saunas & Steam',
      specs: 'Nordic dry heat cedarwood saunas and eucalyptus-infused therapeutic steam suites for cellular detox and rapid DOMS muscle recovery.',
      icon: Sparkles
    },
    {
      zone: 'Locker Rooms & Shower Amenities',
      specs: 'Keyed security lockers, sanitized private shower suites, grooming mirrors, power outlets, and continuous housekeeping.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="py-10 lg:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-3 mb-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-amber-400 font-bold">
            <span>The Reps Fitness Premium</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Infrastructure &amp; Floor Tour</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            5th Floor Facility &amp; Equipment
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
            Located at SCO 52-53, 5th Floor, D-Block, Ranjit Avenue, Amritsar. Designed from the ground up for serious athletes, fitness enthusiasts, and recovery seekers.
          </p>
        </div>

        {/* Gallery Showcase Cards featuring both user photos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className={`group relative rounded-2xl overflow-hidden bg-[#12141c] border border-amber-400/30 hover:border-amber-400 transition-all cursor-pointer aspect-[16/10] flex flex-col justify-end ${item.span}`}
            >
              <img
                src={item.url}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

              <div className="relative z-10 p-5 space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                  {item.tag}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors flex items-center justify-between uppercase">
                  <span>{item.title}</span>
                  <Eye className="w-5 h-5 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Zone Specifications */}
        <div className="space-y-6 mb-12">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.22em] text-amber-400 font-bold">
              Zone by Zone Breakdown
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-white uppercase">
              Club Zones &amp; Technical Specifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilityZones.map((z, idx) => {
              const Icon = z.icon;
              return (
                <div key={idx} className="luxury-card rounded-xl p-5 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white uppercase">{z.zone}</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">{z.specs}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hygiene, Climate & Standards */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1118] border border-white/10 space-y-4">
          <h3 className="font-display text-xl font-bold text-white uppercase">
            Hygiene &amp; Operational Standards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-300">
            <div className="space-y-1">
              <span className="font-bold text-amber-400 uppercase block">Continuous Cleaning</span>
              <p className="text-zinc-400">Equipment wiped and sanitized continually throughout operating hours with hospital-grade disinfectant.</p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-amber-400 uppercase block">HVAC Air Filtration</span>
              <p className="text-zinc-400">High-volume ventilation exchange maintaining crisp oxygen levels on the 5th floor during peak workout hours.</p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-amber-400 uppercase block">Certified Floor Staff</span>
              <p className="text-zinc-400">Kinesiology and CPR-certified trainers always stationed on the floor for spotting and technique guidance.</p>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#10121a] via-[#1a1710] to-[#10121a] border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <h3 className="font-display text-xl font-bold uppercase text-white">Experience The 5th Floor in Person</h3>
            <p className="text-zinc-300">SCO 52-53, D-Block, Ranjit Avenue, Amritsar. Elevator to the 5th floor.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={GYM_INFO.freePassWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-black uppercase tracking-wider transition-all shadow-md shadow-amber-500/20"
            >
              Book Free Day Pass
            </a>
            <button
              onClick={() => onOpenBooking('Facility Tour')}
              className="px-4 py-3 rounded-xl bg-[#141720] hover:bg-[#1f2434] text-white border border-white/15 font-bold uppercase tracking-wider cursor-pointer"
            >
              Schedule Tour
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#12141c] rounded-2xl overflow-hidden border border-amber-400/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-black">
              <img
                src={activeImage.url}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 space-y-2 bg-[#12141c]">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                {activeImage.tag}
              </span>
              <h3 className="font-display text-2xl font-bold text-white uppercase">{activeImage.title}</h3>
              <p className="text-sm text-zinc-300">{activeImage.desc}</p>
              <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10 mt-3">
                <span className="text-xs text-zinc-400">{GYM_INFO.addressShort}</span>
                <a
                  href={GYM_INFO.freePassWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-amber-400 text-black rounded-lg hover:bg-white transition-colors text-center"
                >
                  Book Free Day Pass (WhatsApp)
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
