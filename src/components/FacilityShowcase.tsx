import React, { useState, useEffect, useRef } from 'react';
import { Shield, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { FACILITY_IMAGE, FACILITY_STATS } from '../data/gymData';
import { SafeImage } from './SafeImage';

export const FacilityShowcase: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="facility"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#05090D] text-white overflow-hidden"
    >
      {/* Background Cinematic Facility Image */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={FACILITY_IMAGE}
          alt="Valence Athletic Club facility architecture"
          fallbackText="Valence Facility"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05090D] via-[#05090D]/85 to-[#05090D]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05090D] via-transparent to-[#05090D]" />

        {/* Ambient Red Glow Accents */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#F5223A]/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="content-container relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-6 h-[2px] bg-[#F5223A]" />
            <span className="text-xs font-display font-bold tracking-[0.25em] text-[#F5223A] uppercase">
              WORLD-CLASS INFRASTRUCTURE
            </span>
            <span className="w-6 h-[2px] bg-[#F5223A]" />
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.08] mb-4 uppercase">
            Built for Better Performance.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#9AA3AB] leading-relaxed">
            Every square foot is engineered with acoustic dampening, custom-milled steel,
            turf sprint tracks, and climate-controlled micro-zones for maximum output.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FACILITY_STATS.map((stat) => (
            <div
              key={stat.label}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#0B1218]/90 border border-white/10 backdrop-blur-md hover:border-[#F5223A]/50 transition-all duration-300 group hover:-translate-y-1.5 shadow-2xl"
            >
              {/* Top red indicator dot */}
              <div className="w-2.5 h-2.5 rounded-full bg-[#F5223A] mb-4 group-hover:scale-125 transition-transform" />

              <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight tabular-nums mb-2 flex items-baseline">
                <span>{inView ? stat.value : '0'}</span>
                <span className="text-[#F5223A] text-3xl sm:text-4xl lg:text-5xl">{stat.suffix}</span>
              </div>

              <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-wide uppercase mb-1.5">
                {stat.label}
              </h3>

              <p className="text-xs text-[#9AA3AB] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Amenity Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs text-[#D9DEE3]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#F5223A] shrink-0" />
            <span>Infrared Cedar Dry Saunas</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#F5223A] shrink-0" />
            <span>48°F Cold Immersion Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#F5223A] shrink-0" />
            <span>Normatec Recovery Sleeves</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#F5223A] shrink-0" />
            <span>Organic Fuel Bar & Smoothies</span>
          </div>
        </div>
      </div>
    </section>
  );
};
