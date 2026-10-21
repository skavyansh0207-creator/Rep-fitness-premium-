import React from 'react';
import { GYM_INFO, CORE_PROGRAM_CATEGORIES } from '../data/gymData';
import { PageId, NAV_ITEMS } from '../types/navigation';
import { MapPin, Phone, MessageCircle, Star, Clock, Zap, Crown } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (programName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-display font-extrabold text-lg shadow-md shadow-amber-500/20">
                <Crown className="w-5 h-5 text-black fill-black" />
              </span>
              <span className="font-display text-2xl font-black text-white tracking-tight uppercase">
                {GYM_INFO.name}
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed max-w-sm">
              {GYM_INFO.tagline}. Setting the standard in Amritsar for Olympic resistance training, CrossFit conditioning, boutique indoor cycling, licensed Zumba, and therapeutic cedarwood saunas.
            </p>
            <div className="flex items-center gap-2 text-zinc-300">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">{GYM_INFO.rating}★ Rated</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">{GYM_INFO.reviewCountExact}</span>
            </div>
          </div>

          {/* Col 2: Pages Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Explore Pages
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Disciplines */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Core Offerings
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNav('programs')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Strength &amp; Performance
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programs')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  CrossFit &amp; Sled Turf
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programs')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Indoor Cycling (Spin)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programs')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Luxury Saunas &amp; Steam
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('schedule-pricing')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Weekly Class Timetable
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Club Coordinates */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Ranjit Avenue Club
            </h4>
            <div className="space-y-2.5">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{GYM_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${GYM_INFO.phone}`} className="hover:text-white font-bold text-white tabular-nums">
                  {GYM_INFO.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={GYM_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-semibold text-emerald-400"
                >
                  WhatsApp: {GYM_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>6:00 AM – 10:00 PM (Mon–Sat)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-[11px]">
          <p>© {new Date().getFullYear()} The Reps Fitness Premium Amritsar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('home')} className="hover:text-zinc-200 cursor-pointer">Home</button>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <button onClick={() => handleNav('programs')} className="hover:text-zinc-200 cursor-pointer">Programs</button>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <button onClick={() => handleNav('facility')} className="hover:text-zinc-200 cursor-pointer">5th Floor Facility</button>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <button onClick={() => handleNav('contact')} className="hover:text-zinc-200 cursor-pointer">Location</button>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <a href={GYM_INFO.freePassWhatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 font-bold">
              Book Free Day Pass
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
