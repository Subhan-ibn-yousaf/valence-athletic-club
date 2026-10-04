import React from 'react';
import { ArrowRight, Calendar, ShieldCheck, Flame } from 'lucide-react';
import { CTA_IMAGE } from '../data/gymData';
import { SafeImage } from './SafeImage';

interface CtaSectionProps {
  onOpenBooking: (planOrTour?: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#05090D] text-white overflow-hidden">
      {/* Background Image Container with layered dark and red overlays */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={CTA_IMAGE}
          alt="Athlete focused before training session"
          fallbackText="Valence Final Call"
          className="w-full h-full object-cover object-center opacity-45 scale-105"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05090D] via-[#05090D]/80 to-[#05090D]/90" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#05090D]/70 to-[#05090D]" />

        {/* Ambient Red Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F5223A]/15 blur-[160px] rounded-full pointer-events-none" />

        {/* Decorative Red Slash */}
        <div className="hidden lg:block absolute -top-12 right-1/4 w-72 h-[3px] bg-gradient-to-r from-transparent via-[#F5223A] to-transparent transform -rotate-12 opacity-60" />
      </div>

      <div className="content-container max-w-5xl mx-auto relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 mb-4">
          <span className="w-6 h-[2px] bg-[#F5223A]" />
          <span className="text-xs sm:text-sm font-display font-bold tracking-[0.25em] text-[#F5223A] uppercase">
            READY TO LEVEL UP?
          </span>
          <span className="w-6 h-[2px] bg-[#F5223A]" />
        </div>

        {/* Headline */}
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[1.02] mb-6 uppercase text-balance">
          Your Stronger Chapter <br />
          <span className="text-[#F5223A] red-text-glow">Starts Now.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base md:text-lg text-[#9AA3AB] max-w-2xl mx-auto leading-relaxed mb-10">
          Train with purpose, build confidence, and become stronger with a coaching team
          and facility engineered to keep you moving forward every single day.
        </p>

        {/* Single Focused Action */}
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={() => onOpenBooking('Performance')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-white bg-[#F5223A] hover:bg-[#D4142B] rounded-full transition-all duration-300 shadow-[0_0_35px_rgba(245,34,58,0.5)] hover:shadow-[0_0_50px_rgba(245,34,58,0.8)] hover:-translate-y-0.5 cursor-pointer active:scale-95"
          >
            <span>Join Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Reassurance line */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#9AA3AB]">
          <ShieldCheck className="w-4 h-4 text-[#F5223A]" />
          <span>No long-term lock-in commitment required to get started.</span>
        </div>
      </div>
    </section>
  );
};
