import React from 'react';
import { TESTIMONIALS, GYM_INFO } from '../data/gymData';
import { Star, ShieldCheck, MessageSquare, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-[#090b10] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-amber-400">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Verified Google Trust &amp; Excellence</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
              Rated 4.9★ ({GYM_INFO.reviewCountExact})
            </h2>
            <p className="text-sm text-zinc-300 max-w-2xl">
              Authentic member testimonials from athletes, lifters, and wellness members who train at The Reps Fitness Premium on the 5th floor in Ranjit Avenue, Amritsar.
            </p>
          </div>

          {/* Google Scorecard Box */}
          <div className="p-5 rounded-2xl bg-[#12141c] border border-amber-400/25 flex items-center gap-5 shrink-0 shadow-xl shadow-amber-500/5">
            <div className="text-center">
              <span className="font-display text-5xl font-black text-amber-400 tabular-nums">4.9</span>
              <div className="flex items-center justify-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
            </div>
            <div className="border-l border-zinc-800 pl-5 text-xs">
              <p className="font-bold text-white uppercase tracking-wide">Google Reviews</p>
              <p className="text-zinc-300 font-semibold">{GYM_INFO.reviewCountExact}</p>
              <p className="text-[11px] text-amber-400 mt-0.5 font-bold uppercase">SCO 52-53, Ranjit Avenue</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="luxury-card rounded-2xl p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating stars & date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-400 font-medium">{t.date}</span>
                </div>

                {/* Comment */}
                <p className="text-sm text-zinc-200 leading-relaxed font-normal">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide">{t.name}</h4>
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1 mt-0.5 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    {t.role}
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400/90 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp & Review CTA */}
        <div className="mt-12 text-center text-xs text-zinc-400 flex flex-wrap items-center justify-center gap-4">
          <span>Trained with us at The Reps Fitness Premium Ranjit Avenue?</span>
          <a
            href={GYM_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
          >
            <MessageSquare className="w-4 h-4" />
            Share feedback or member review on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
