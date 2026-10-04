import React from 'react';
import { X, Clock, Gauge, Check, ArrowRight, ShieldCheck, Flame, Dumbbell } from 'lucide-react';
import { Program } from '../types';
import { SafeImage } from './SafeImage';

interface ProgramDetailModalProps {
  program: Program | null;
  onClose: () => void;
  onBook: (programTitle: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onBook
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl max-h-[92dvh] flex flex-col bg-[#0B1218] border border-white/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 text-white my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white hover:bg-[#F5223A] hover:border-[#F5223A] flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] max-h-[220px] sm:max-h-[280px] w-full overflow-hidden bg-[#05090D] shrink-0">
          <SafeImage
            src={program.image}
            alt={program.title}
            fallbackText={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1218] via-transparent to-transparent opacity-90" />

          <div className="absolute bottom-4 left-5 sm:left-6 right-5 sm:right-6">
            <span className="text-[10px] font-display font-bold text-[#F5223A] uppercase tracking-widest block mb-0.5">
              Curriculum Specification
            </span>
            <h3 className="font-display font-extrabold text-xl sm:text-3xl text-white uppercase">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Content Body - Scrollable */}
        <div className="p-5">
          <p className="text-sm text-[#9AA3AB] leading-relaxed mb-6">
            {program.description}
          </p>

          {/* Quick Specifications */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#101820] border border-white/10 mb-6 text-center">
            <div>
              <div className="text-[10px] uppercase text-[#9AA3AB] font-bold">Category</div>
              <div className="text-xs font-bold text-white mt-0.5">{program.category}</div>
            </div>
            <div className="border-x border-white/10">
              <div className="text-[10px] uppercase text-[#9AA3AB] font-bold">Duration</div>
              <div className="text-xs font-bold text-white mt-0.5">{program.duration}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-[#9AA3AB] font-bold">Intensity</div>
              <div className="text-xs font-bold text-[#F5223A] mt-0.5">{program.intensity}</div>
            </div>
          </div>

          {/* Key Training Modules */}
          <div className="mb-6">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-3">
              Included Training Modules
            </h4>
            <div className="space-y-2.5">
              {program.benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 text-xs text-[#D9DEE3]">
                  <div className="w-4 h-4 rounded-full bg-[#F5223A]/15 border border-[#F5223A]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#F5223A]" />
                  </div>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
