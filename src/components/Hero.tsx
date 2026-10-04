import React from 'react';
import {
  ArrowRight,
  Play,
  Shield,
  Award,
  Sparkles,
  Users,
} from 'lucide-react';

import { HERO_IMAGE } from '../data/gymData';

interface HeroProps {
  onOpenBooking: (planOrTour?: string) => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
                                            onOpenBooking,
                                            onOpenVideo,
                                          }) => {
  return (
      <section
          id="hero"
          className="relative min-h-[720px] lg:min-h-[860px] w-full flex flex-col justify-between pt-24 sm:pt-28 lg:pt-36 pb-8 sm:pb-12 overflow-hidden bg-[#05090D]"
      >
        {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0 z-0">
          <img
              src={HERO_IMAGE}
              alt="Elite athlete training at Valence Athletic Club"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-right lg:object-center opacity-65 scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Left Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05090D] via-[#05090D]/90 to-transparent" />

          {/* Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05090D] via-[#05090D]/50 to-transparent" />

          {/* Top Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#05090D]/90 via-transparent to-transparent h-28" />

          {/* Red Ambient Glow */}
          <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#F5223A]/20 blur-[130px] rounded-full pointer-events-none" />

          <div className="absolute bottom-32 right-12 w-80 h-80 bg-[#F5223A]/15 blur-[120px] rounded-full pointer-events-none" />

          {/* Decorative Slash */}
          <div className="hidden xl:block absolute right-[28%] top-1/3 w-32 h-[3px] bg-gradient-to-r from-[#F5223A] to-transparent transform -rotate-45 opacity-70 pointer-events-none" />

          <div className="hidden xl:block absolute right-[26%] top-[37%] w-16 h-[2px] bg-[#F5223A]/60 transform -rotate-45 pointer-events-none" />
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="relative z-10 content-container w-full flex-1 flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 xl:gap-16 items-center">

            {/* ================= LEFT CONTENT ================= */}
            <div className="max-w-3xl xl:max-w-4xl pt-4">

              {/* Heading */}
              <h1 className="font-display font-extrabold text-6xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[0.98] mb-6 text-balance">
                BUILD YOUR <br />

                <span className="relative inline-block text-[#F5223A] red-text-glow">
                STRONGEST

                <span className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#F5223A] -skew-x-12" />
              </span>

                <br />

                SELF.
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-[#9AA3AB] max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
                Valence Athletic Club merges biomechanically engineered strength
                facilities, elite coaching methodologies, and a relentlessly
                dedicated community to turn ambition into measurable physical power.
              </p>

              {/* ================= CTAs ================= */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">

                {/* Primary CTA */}
                <button
                    onClick={() => onOpenBooking('Performance')}
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-bold text-white bg-[#F5223A] hover:bg-[#D4142B] rounded-full transition-all duration-300 shadow-[0_0_35px_rgba(245,34,58,0.45)] hover:shadow-[0_0_45px_rgba(245,34,58,0.7)] hover:-translate-y-0.5 cursor-pointer active:scale-95 text-center"
                >
                  <span>Start Your Journey</span>

                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>

                {/* Secondary CTA */}
                <a
                    href="#programs"
                    className="inline-flex items-center justify-center px-7 py-4 text-sm sm:text-base font-semibold text-white hover:text-white border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200 backdrop-blur-sm text-center"
                >
                  Explore Programs
                </a>

                {/* Watch Story */}
                {/*<button*/}
                {/*    onClick={onOpenVideo}*/}
                {/*    className="inline-flex items-center justify-center sm:justify-start gap-3 text-xs sm:text-sm font-semibold text-white/80 hover:text-white group cursor-pointer transition-colors py-2"*/}
                {/*    aria-label="Watch our club story video"*/}
                {/*>*/}
                {/*  <div className="w-11 h-11 rounded-full bg-[#101820]/90 border border-white/20 flex items-center justify-center group-hover:border-[#F5223A] group-hover:bg-[#F5223A]/10 transition-all duration-300 shadow-md shadow-black/60 group-hover:scale-105">*/}
                {/*    <Play className="w-4 h-4 text-[#F5223A] fill-[#F5223A] translate-x-0.5" />*/}
                {/*  </div>*/}

                {/*  <span className="font-medium">*/}
                {/*  Watch Story*/}
                {/*</span>*/}
                {/*</button>*/}
              </div>
            </div>

            {/* ================= RIGHT VIDEO ================= */}
            <div className="relative w-full max-w-xl lg:ml-auto">

              {/* Red Glow Behind Video */}
              <div className="absolute -inset-6 bg-[#F5223A]/20 blur-[70px] rounded-full pointer-events-none" />

              {/* Video Button */}
              <button
                  type="button"
                  onClick={onOpenVideo}
                  className="group relative block w-full aspect-video overflow-hidden h-[500px] rounded-2xl sm:rounded-3xl border border-white/20 bg-[#071016] shadow-2xl cursor-pointer text-left"
                  aria-label="Watch Valence club story"
              >
                {/* ================= VIDEO ================= */}
                <video
                    src="/videos/valence-demo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Video Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Center Play Button */}
                {/*<div className="absolute inset-0 flex items-center justify-center pointer-events-none">*/}
                {/*  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#F5223A]/90 border-4 border-white/20 flex items-center justify-center shadow-[0_0_40px_rgba(245,34,58,0.6)] group-hover:scale-110 group-hover:bg-[#F5223A] transition-all duration-300">*/}
                {/*    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white translate-x-0.5" />*/}
                {/*  </div>*/}
                {/*</div>*/}

                {/* Video Information */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between pointer-events-none">

                  <div>
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#F5223A] mb-1">
                      The Valence Manifesto
                    </p>

                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      We Raise The Standard.
                    </h3>
                  </div>

                  <span className="hidden sm:block text-[10px] font-bold text-white/70 tracking-wider">
                  WATCH
                </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ================= FEATURE STRIP ================= */}
        <div className="relative z-10 content-container w-full mt-10 sm:mt-14 lg:mt-16">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#0B1218]/90 border border-white/10 backdrop-blur-md shadow-2xl">

            {/* ================= PILLAR 1 ================= */}
            <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#151D24] border border-white/10 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-[#F5223A]" />
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  Elite Equipment
                </h4>

                <p className="text-[11px] sm:text-xs text-[#9AA3AB]">
                  Eleiko & Prime platforms
                </p>
              </div>
            </div>

            {/* ================= PILLAR 2 ================= */}
            <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 border-l-0 sm:border-l border-white/10">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#151D24] border border-white/10 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#F5223A]" />
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  Expert Coaches
                </h4>

                <p className="text-[11px] sm:text-xs text-[#9AA3AB]">
                  CSCS & Olympic veterans
                </p>
              </div>
            </div>

            {/* ================= PILLAR 3 ================= */}
            <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 border-t lg:border-t-0 sm:border-l-0 lg:border-l border-white/10">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#151D24] border border-white/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-[#F5223A]" />
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  Personalized Plans
                </h4>

                <p className="text-[11px] sm:text-xs text-[#9AA3AB]">
                  Periodized progression
                </p>
              </div>
            </div>

            {/* ================= PILLAR 4 ================= */}
            <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 border-t lg:border-t-0 border-l-0 sm:border-l border-white/10">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#151D24] border border-white/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#F5223A]" />
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  Motivating Community
                </h4>

                <p className="text-[11px] sm:text-xs text-[#9AA3AB]">
                  Driven fellow members
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
};
