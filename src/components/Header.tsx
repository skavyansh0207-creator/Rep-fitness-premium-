import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { PageId, NAV_ITEMS } from '../types/navigation';
import { Phone, Menu, X, Zap, Crown, Star } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (programName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#07080b]/95 backdrop-blur-md border-b border-white/10">
      {/* Top announcement & trust banner */}
      <div className="bg-[#10121a] border-b border-amber-500/20 py-1.5 px-4 text-center text-[11px] text-zinc-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 font-bold text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Rated {GYM_INFO.rating}★
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-300 hidden sm:inline">{GYM_INFO.reviewCountExact}</span>
            <span aria-hidden="true" className="text-zinc-600 hidden sm:inline">·</span>
            <span className="text-zinc-400">SCO 52-53, 5th Floor, D-Block, Ranjit Avenue, Amritsar</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-400 hidden md:inline">Open 6 AM – 10 PM</span>
            <a
              href={GYM_INFO.freePassWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-bold uppercase tracking-wider text-[10px] inline-flex items-center gap-1"
            >
              <Zap className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>Book Free Day Pass</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-display font-black text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Crown className="w-6 h-6 text-black fill-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors uppercase">
                THE REPS
              </span>
              <span className="text-[10px] tracking-[0.26em] uppercase text-amber-400 font-sans font-bold">
                FITNESS PREMIUM
              </span>
            </div>
          </button>

          {/* 5-Page Navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-semibold text-zinc-300">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-1.5 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-amber-400 font-black border-b-2 border-amber-400 pb-0.5'
                      : 'hover:text-amber-400 text-zinc-300'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${GYM_INFO.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-white bg-[#131620] hover:bg-[#1c2130] border border-white/10 hover:border-amber-400/40 rounded-xl transition-colors whitespace-nowrap shrink-0"
              title={`Call ${GYM_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="tabular-nums">{GYM_INFO.phone}</span>
            </a>
            <button
              onClick={() => onOpenBooking('Free Day Pass')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-black text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer uppercase tracking-wider"
            >
              <Zap className="w-3.5 h-3.5 fill-black" />
              <span>Book Free Day Pass</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking('Free Day Pass')}
              className="px-3 py-1.5 text-xs font-black text-black bg-amber-400 rounded-lg uppercase tracking-wide cursor-pointer"
            >
              Free Pass
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white rounded-lg bg-[#141720] border border-white/10 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0c12] border-b border-white/10 px-4 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1.5 text-xs uppercase tracking-wider font-semibold text-zinc-200">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3.5 py-2.5 rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-amber-400/15 text-amber-400 font-bold border border-amber-400/30'
                      : 'hover:bg-[#181b26] hover:text-amber-400 text-zinc-300'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={GYM_INFO.freePassWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 px-4 text-xs font-black rounded-xl bg-amber-400 hover:bg-amber-300 text-black uppercase tracking-wider shadow-lg shadow-amber-500/20"
            >
              Book Free Day Pass on WhatsApp
            </a>
            <a
              href={`tel:${GYM_INFO.phone}`}
              className="w-full text-center py-2.5 px-4 text-xs font-semibold rounded-xl bg-[#141720] text-zinc-300 border border-white/10"
            >
              Call Desk: {GYM_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
