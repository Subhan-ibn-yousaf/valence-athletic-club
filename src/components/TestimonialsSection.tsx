import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';
import { SafeImage } from './SafeImage';

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="relative py-20 lg:py-28 bg-[#F5F6F8] text-[#101820] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="content-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2px] bg-[#F5223A]" />
              <span className="text-xs font-display font-bold tracking-[0.25em] text-[#F5223A] uppercase">
                REAL MEMBERS. REAL PROGRESS.
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#0B1218] leading-[1.08] uppercase">
              Built Around Results.
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-[#525E6A] leading-relaxed">
              Real stories from athletes, professionals, and dedicated individuals who made Valence
              their competitive advantage.
            </p>
          </div>
        </div>

        {/* Testimonials Grid (Desktop 3 cards, Mobile active slide or stack) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className={`relative bg-white rounded-3xl p-7 sm:p-8 border border-[#E5E9EE] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                idx === activeIdx ? 'ring-2 ring-[#F5223A]/30 lg:ring-0' : 'hidden lg:flex'
              }`}
            >
              {/* Top Row: Stars & Quote Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F5223A] text-[#F5223A]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#F5223A]/20" />
                </div>

                {/* Measurable Result Metric Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F5223A]/10 text-[#F5223A] text-xs font-bold mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.stats}</span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base text-[#424F5C] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#F0F2F5]">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md bg-[#101820]">
                  <SafeImage
                    src={t.avatar}
                    alt={t.name}
                    fallbackText={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#0B1218]">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#606E7B]">{t.role}</p>
                  <p className="text-[11px] font-semibold text-[#F5223A]">{t.membership}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex lg:hidden items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === activeIdx ? 'w-6 bg-[#F5223A]' : 'w-2 bg-[#D1D5DB]'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
