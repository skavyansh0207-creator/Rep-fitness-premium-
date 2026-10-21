import React, { useState } from 'react';
import { GYM_INFO } from '../data/gymData';
import { MessageCircle, Phone, X, Zap } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Mini tooltip popup on desktop */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#12141c] border border-amber-400/40 text-xs text-white shadow-2xl animate-fade-in">
          <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>Book Free Day Pass: <strong>{GYM_INFO.phone}</strong></span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-zinc-400 hover:text-white p-0.5 cursor-pointer ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2.5">
        {/* Quick Phone Call Button */}
        <a
          href={`tel:${GYM_INFO.phone}`}
          className="p-3.5 rounded-full bg-[#141722] hover:bg-[#1e2334] text-white border border-white/15 shadow-xl transition-transform hover:scale-110"
          title={`Call The Reps Fitness Premium (${GYM_INFO.phone})`}
          aria-label={`Call The Reps Fitness Premium at ${GYM_INFO.phone}`}
        >
          <Phone className="w-5 h-5 text-amber-400" />
        </a>

        {/* WhatsApp Floating Action Button */}
        <a
          href={GYM_INFO.freePassWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/70 transition-transform hover:scale-110 flex items-center justify-center group"
          title={`WhatsApp The Reps Fitness Premium (${GYM_INFO.phone})`}
          aria-label="Chat with The Reps Fitness Premium on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>
      </div>
    </div>
  );
};
