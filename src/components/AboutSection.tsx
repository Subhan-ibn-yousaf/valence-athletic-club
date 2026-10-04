import React from 'react';
import { ArrowRight, ShieldCheck, UserCheck, Activity, Target, Sparkles } from 'lucide-react';
import { ABOUT_IMAGE } from '../data/gymData';
import { SafeImage } from './SafeImage';

interface AboutSectionProps {
  onOpenBooking: (purpose?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#F5223A]" />,
      title: "Premium Equipment",
      description: "Competition-spec Eleiko barbells, calibrated steel plates, custom power cages, and turf tracks."
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#F5223A]" />,
      title: "Certified Coaches",
      description: "Degree-qualified CSCS physiologists who guide technique, track progression, and optimize mechanics."
    },
    {
      icon: <Activity className="w-5 h-5 text-[#F5223A]" />,
      title: "Personal Guidance",
      description: "Every member receives structured movement assessments, customized splits, and real-time form checks."
    },
    {
      icon: <Target className="w-5 h-5 text-[#F5223A]" />,
      title: "Results Focused",
      description: "Bi-weekly InBody 3D scans, power output tracking, and measurable physical transformation metrics."
    }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#05090D] text-white overflow-hidden">
      {/* Subtle background red glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#F5223A]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Cinematic Visual & Athletic Overlays */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B1218] group">
              <div className="aspect-[4/3] sm:aspect-[1/1] max-h-[580px] overflow-hidden">
                <SafeImage
                  src={ABOUT_IMAGE}
                  alt="Athlete performing intense training at Valence"
                  fallbackText="Valence Athletic Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05090D] via-transparent to-transparent opacity-80" />

              {/* Floating Badge Overlay */}
              <div className="absolute top-6 left-6 p-4 rounded-2xl bg-[#071016]/85 border border-white/15 backdrop-blur-md max-w-xs shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-[#F5223A]" />
                  <span className="text-[11px] font-display font-bold tracking-widest text-[#F5223A] uppercase">
                    Precision Protocol
                  </span>
                </div>
                <p className="text-xs text-white/90 font-medium">
                  "Progress is not an accident. It is the calculated result of discipline and recovery."
                </p>
              </div>

              {/* Bottom Stat Card */}
              <div className="absolute bottom-6 right-6 left-6 p-4 rounded-xl bg-[#0B1218]/90 border border-white/10 backdrop-blur-md flex items-center justify-between">
                <div>
                  <div className="text-xl font-display font-extrabold text-white">98.4%</div>
                  <div className="text-[11px] text-[#9AA3AB]">Member Goal Achievement Rate</div>
                </div>
                <div className="h-8 w-[1px] bg-white/10" />
                <div>
                  <div className="text-xl font-display font-extrabold text-[#F5223A]">1-on-1</div>
                  <div className="text-[11px] text-[#9AA3AB]">Movement Baseline Audit</div>
                </div>
              </div>
            </div>

            {/* Red Geometric Diagonal Accent */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-28 h-28 border-l-2 border-b-2 border-[#F5223A] rounded-bl-3xl -z-10 opacity-70" />
          </div>

          {/* Right Column: Narrative & 2x2 Feature Grid */}
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2px] bg-[#F5223A]" />
              <span className="text-xs font-display font-bold tracking-[0.25em] text-[#F5223A] uppercase">
                MORE THAN A GYM
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.08] mb-6 uppercase">
              Training Built Around You.
            </h2>

            {/* Philosophy Paragraph */}
            <p className="text-sm sm:text-base text-[#9AA3AB] leading-relaxed mb-8">
              We reject one-size-fits-all fitness. At Valence, every athlete follows an intentional,
              progressive arc. Whether you are training for raw strength, metabolic agility, or lifelong
              resilience, our space is engineered to eliminate friction between your current state
              and peak athletic performance.
            </p>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-4 sm:p-5 rounded-2xl bg-[#0B1218] border border-white/5 hover:border-white/20 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#151D24] border border-white/10 flex items-center justify-center mb-3">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-white uppercase mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#9AA3AB] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
