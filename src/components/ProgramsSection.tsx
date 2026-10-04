import React from 'react';
import {
  ArrowUpRight,
  Flame,
  Dumbbell,
  Wind,
  Swords,
  UserCheck,
  Clock,
  Gauge,
  Plus,
} from 'lucide-react';

import { PROGRAMS } from '../data/gymData';
import { Program } from '../types';
import { SafeImage } from './SafeImage';

interface ProgramsSectionProps {
  onSelectProgram: (program: Program) => void;
  onOpenBooking: (programName?: string) => void;
}

export class ProgramsSection extends React.Component<ProgramsSectionProps> {
  render() {
    let {
      onSelectProgram,
      onOpenBooking,
    } = this.props;
    const getCategoryIcon = (category: string) => {
      switch (category) {
        case 'Strength':
          return <Dumbbell className="w-4 h-4"/>;
        case 'Metabolic':
          return <Flame className="w-4 h-4"/>;
        case 'Mobility':
          return <Wind className="w-4 h-4"/>;
        case 'Combat':
          return <Swords className="w-4 h-4"/>;
        case 'Personalized':
        default:
          return <UserCheck className="w-4 h-4"/>;
      }
    };

    return (
        <section
            id="programs"
            className="relative overflow-hidden bg-[#F3F4F5] py-24 sm:py-28 lg:py-36"
        >
          {/* =========================================================
          BACKGROUND
      ========================================================= */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#F5223A]/8 blur-[140px]"/>

            <div className="absolute bottom-0 -left-40 w-[450px] h-[450px] rounded-full bg-[#101820]/5 blur-[130px]"/>

            <div
                className="absolute top-1/3 right-0 w-px h-72 bg-gradient-to-b from-transparent via-[#101820]/10 to-transparent"/>

            <div className="absolute left-8 top-40 hidden xl:block">
          <span
              className="text-[9px] font-bold tracking-[0.5em] uppercase text-[#101820]/20 [writing-mode:vertical-rl]">
            PERFORMANCE / DISCIPLINE / POWER
          </span>
            </div>
          </div>

          <div className="content-container relative z-10">
            {/* =========================================================
            SECTION HEADER
        ========================================================= */}
            <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end mb-16 lg:mb-20">
              <div className="max-w-5xl">


                {/* Main heading + description */}
                <div className="relative">
                  {/* Large decorative number */}
                  <span
                      className="absolute -top-10 -left-4 lg:-left-8 font-display text-[7rem] sm:text-[9rem] lg:text-[11rem] font-black leading-none text-[#101820]/[0.035] select-none pointer-events-none">
      05
    </span>

                  <div className="relative flex flex-col xl:flex-row xl:items-end xl:gap-14">
                    {/* Heading */}
                    <div className="shrink-0">
                      <h2 className="font-display font-extrabold uppercase text-[#0B1218] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.82] tracking-[-0.045em]">
                        Choose
                        <br/>

                        <span className="relative inline-block text-[#F5223A]">
            Your
            <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-[#F5223A] -skew-x-12"/>
          </span>{' '}
                        Training.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================
            PROGRAM GRID
        ========================================================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-6">
              {PROGRAMS.map((program, index) => {
                /*
                 * First two cards are larger.
                 * Remaining three create a more editorial 3-card row.
                 */
                const isLarge = index < 2;

                return (
                    <article
                        key={program.id}
                        onClick={() => onSelectProgram(program)}
                        className={`
                  group relative cursor-pointer overflow-hidden rounded-[1.5rem]
                  bg-[#0B1218] min-h-[430px] sm:min-h-[470px]
                  ${
                            isLarge
                                ? 'md:col-span-1 lg:col-span-3'
                                : 'md:col-span-1 lg:col-span-2'
                        }
                `}
                    >
                      {/* =================================================
                    IMAGE
                ================================================= */}
                      <div className="absolute inset-0">
                        <SafeImage
                            src={program.image}
                            alt={program.title}
                            fallbackText={program.title}
                            className="
                      w-full h-full object-cover
                      scale-100
                      group-hover:scale-110
                      transition-transform duration-[1200ms] ease-out
                    "
                        />

                        {/* Dark cinematic overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#05090D] via-[#05090D]/55 to-black/5"/>

                        <div
                            className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent"/>

                        {/* Hover red wash */}
                        <div
                            className="absolute inset-0 bg-[#F5223A]/0 group-hover:bg-[#F5223A]/10 transition-colors duration-700"/>
                      </div>

                      {/* =================================================
                    TOP META
                ================================================= */}
                      <div className="absolute top-5 left-5 right-5 flex items-start justify-between z-10">
                        <div className="flex items-center gap-2">
                          <div
                              className="w-9 h-9 rounded-full bg-[#F5223A] text-white flex items-center justify-center shadow-[0_0_25px_rgba(245,34,58,0.35)]">
                            {getCategoryIcon(program.category)}
                          </div>

                          <div className="px-3 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/90">
                        {program.category}
                      </span>
                          </div>
                        </div>

                        <div className="px-3 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/80">
                      {program.intensity}
                    </span>
                        </div>
                      </div>

                      {/* =================================================
                    NUMBER
                ================================================= */}
                      <div className="absolute top-24 right-6 z-10">
                  <span
                      className="font-display text-5xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                      </div>

                      {/* =================================================
                    BOTTOM CONTENT
                ================================================= */}
                      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-7 lg:p-8">
                        {/* Duration / category */}
                        <div className="flex items-center gap-4 mb-4 text-white/60">
                          <div className="flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-[#F5223A]"/>
                            <span className="text-[10px] font-semibold uppercase tracking-wider">
                        {program.duration}
                      </span>
                          </div>

                          <span className="w-1 h-1 rounded-full bg-white/30"/>

                          <div className="flex items-center gap-2">
                            <Gauge className="w-3.5 h-3.5 text-[#F5223A]"/>
                            <span className="text-[10px] font-semibold uppercase tracking-wider">
                        {program.intensity}
                      </span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3
                            className={`
                      font-display font-extrabold uppercase text-white
                      leading-[0.95] tracking-[-0.02em]
                      ${
                                isLarge
                                    ? 'text-3xl sm:text-4xl lg:text-5xl'
                                    : 'text-2xl sm:text-3xl'
                            }
                    `}
                        >
                          {program.title}
                        </h3>

                        {/* Description */}
                        <p className="max-w-xl mt-3 text-xs sm:text-sm text-white/60 leading-relaxed line-clamp-2">
                          {program.description}
                        </p>

                        {/* Bottom action */}
                        <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/15">
                    <span
                        className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors">
                      Explore Program
                    </span>

                          <div
                              className="relative w-10 h-10 rounded-full border border-white/25 overflow-hidden group-hover:border-[#F5223A] transition-colors">
                            <div
                                className="absolute inset-0 bg-[#F5223A] translate-y-full group-hover:translate-y-0 transition-transform duration-300"/>

                            <ArrowUpRight
                                className="relative z-10 w-4 h-4 text-white absolute inset-0 m-auto mt-2.5 group-hover:rotate-45 transition-transform duration-300"/>
                          </div>
                        </div>
                      </div>

                      {/* =================================================
                    HOVER FRAME
                ================================================= */}
                      <div
                          className="absolute inset-3 rounded-[1.2rem] border border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none"/>
                    </article>
                );
              })}
            </div>
          </div>
        </section>
    );
  }
}
