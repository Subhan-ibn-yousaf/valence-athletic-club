import React, { useState } from 'react';
import { Instagram, Linkedin, Twitter, ArrowRight, Award, User, X } from 'lucide-react';
import { COACHES } from '../data/gymData';
import { Coach } from '../types';
import { SafeImage } from './SafeImage';

interface CoachesSectionProps {
  onOpenBooking: (coachName?: string) => void;
}

export const CoachesSection: React.FC<CoachesSectionProps> = ({ onOpenBooking }) => {
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

  return (
    <section id="coaches" className="relative py-20 lg:py-28 bg-[#05090D] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-[#F5223A]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="content-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2px] bg-[#F5223A]" />
              <span className="text-xs font-display font-bold tracking-[0.25em] text-[#F5223A] uppercase">
                EXPERT FACULTY
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.08] uppercase">
              Meet Your Coaches.
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-[#9AA3AB] leading-relaxed">
              Experienced exercise physiologists, strength coaches, and combat instructors dedicated to
              helping you train smarter, prevent injury, and perform at your highest level.
            </p>
          </div>
        </div>

        {/* 4 Coach Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COACHES.map((coach) => (
            <div
              key={coach.id}
              className="group relative rounded-3xl bg-[#0B1218] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#F5223A]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl"
            >
              {/* Image Container with 3:4 portrait ratio */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#101820]">
                <SafeImage
                  src={coach.image}
                  alt={coach.name}
                  fallbackText={coach.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1218] via-[#0B1218]/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                {/* Subtle red rim tint on hover */}
                <div className="absolute inset-0 bg-[#F5223A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Experience Badge */}
                <div className="absolute top-3 left-3 bg-[#05090D]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[10px] font-display font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#F5223A]" />
                  <span>{coach.experience}</span>
                </div>

                {/* Social icons overlay (floats on hover) */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <a
                    href="#social"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Opening ${coach.name}'s verified Instagram profile.`);
                    }}
                    className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[#F5223A] hover:border-[#F5223A] transition-all"
                    aria-label={`${coach.name} Instagram`}
                  >
                    <Instagram className="w-3.5 h-3.5 text-white" />
                  </a>
                  <a
                    href="#social"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Opening ${coach.name}'s verified LinkedIn credentials.`);
                    }}
                    className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-[#F5223A] hover:border-[#F5223A] transition-all"
                    aria-label={`${coach.name} LinkedIn`}
                  >
                    <Linkedin className="w-3.5 h-3.5 text-white" />
                  </a>
                </div>

                {/* Info Overlay at bottom of image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display font-extrabold text-xl text-white group-hover:text-[#F5223A] transition-colors mb-0.5 uppercase">
                    {coach.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#F5223A] tracking-wide mb-1">
                    {coach.role}
                  </div>
                </div>
              </div>

              {/* Bio & Specialty */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="mb-4">
                  <span className="text-[10px] font-display font-bold uppercase tracking-wider text-[#9AA3AB] block mb-1">
                    Specialty
                  </span>
                  <div className="text-xs font-medium text-white/90 mb-2">
                    {coach.specialty}
                  </div>
                  <p className="text-xs text-[#9AA3AB] leading-relaxed line-clamp-3">
                    {coach.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
