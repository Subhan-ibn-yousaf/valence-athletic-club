import React, { useState } from 'react';
import { Check, X, ArrowRight, Sparkles, Zap, Shield, Dumbbell, Award, Flame } from 'lucide-react';
import { PRICING_PLANS } from '../data/gymData';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan, isAnnual: boolean) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const getTierBadge = (planId: string) => {
    switch (planId) {
      case 'starter':
        return { label: 'FOUNDATIONAL ACCESS', icon: Dumbbell };
      case 'performance':
        return { label: 'BENCHMARK CHOICE', icon: Zap };
      case 'elite':
        return { label: 'TOTAL IMMERSION', icon: Award };
      case 'flex':
        return { label: 'FLEXIBLE CREDITS', icon: Flame };
      default:
        return { label: 'ATHLETIC TIER', icon: Sparkles };
    }
  };

  const getTierHighlight = (planId: string) => {
    switch (planId) {
      case 'starter':
        return 'Standard Floor & Free Weights';
      case 'performance':
        return '24/7 Biometric Access + Sauna & Plunge';
      case 'elite':
        return 'Includes 4x Monthly 1-on-1 Coaching';
      case 'flex':
        return '10 Credits with 60-Day Rollover';
      default:
        return 'Full Club Privileges';
    }
  };

  return (
    <section id="membership" className="relative py-20 lg:py-28 bg-[#F4F6F9] text-[#101820] overflow-hidden">
      {/* Background Soft Kinetic Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="content-container relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-3 px-3.5 py-1 rounded-full bg-white border border-[#E2E6EA] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F5223A] animate-pulse" />
            <span className="text-xs font-display font-bold tracking-[0.2em] text-[#F5223A] uppercase">
              TRANSPARENT MEMBERSHIP
            </span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#0B1218] leading-[1.06] mb-4 uppercase">
            Membership Built for Progress.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#525E6A] leading-relaxed max-w-2xl mx-auto">
            Choose the tier matching your schedule, training volume, and coaching goals.
            All tiers feature towel service, rain showers, and zero long-term cancellation lock-ins.
          </p>

          {/* Billing Cadence Toggle */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 bg-white border border-[#DCE2E8] rounded-full shadow-sm">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-display font-bold rounded-full transition-all duration-200 cursor-pointer ${
                !isAnnual
                  ? 'bg-[#101820] text-white shadow-md'
                  : 'text-[#606E7B] hover:text-[#101820]'
              }`}
            >
              MONTHLY BILLING
            </button>

            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-display font-bold rounded-full transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isAnnual
                  ? 'bg-[#101820] text-white shadow-md'
                  : 'text-[#606E7B] hover:text-[#101820]'
              }`}
            >
              <span>ANNUAL BILLING</span>
              <span className="px-2 py-0.5 text-[10px] font-black bg-[#F5223A] text-white rounded-full shadow-xs">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* 4 Upgraded Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-7 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.popular;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const badge = getTierBadge(plan.id);
            const BadgeIcon = badge.icon;
            const highlightText = getTierHighlight(plan.id);

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#070D13] text-white border-2 border-[#F5223A] shadow-[0_20px_50px_rgba(245,34,58,0.2)] xl:-translate-y-3 z-10 ring-1 ring-[#F5223A]/40'
                    : 'bg-white text-[#101820] border border-[#E0E5EA] shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1'
                }`}
              >
                {/* Popular Floating Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F5223A] via-[#E0182F] to-[#D4142B] text-white text-[11px] font-display font-black tracking-widest uppercase shadow-[0_0_20px_rgba(245,34,58,0.6)] flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    MOST POPULAR • BEST VALUE
                  </div>
                )}

                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-display font-bold uppercase tracking-wider ${
                        isFeatured
                          ? 'bg-[#F5223A]/15 text-[#FF4D61] border border-[#F5223A]/30'
                          : 'bg-slate-100 text-[#556370] border border-slate-200'
                      }`}
                    >
                      <BadgeIcon className="w-3 h-3" />
                      <span>{badge.label}</span>
                    </div>

                    {isFeatured && (
                      <span className="w-2 h-2 rounded-full bg-[#F5223A] animate-ping" />
                    )}
                  </div>

                  {/* Card Title & Tagline */}
                  <div className="mb-5 pb-5 border-b border-black/5 dark:border-white/10">
                    <h3
                      className={`font-display font-black text-2xl sm:text-3xl uppercase tracking-tight mb-1 ${
                        isFeatured ? 'text-white' : 'text-[#0B1218]'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-xs leading-relaxed min-h-[34px] ${
                        isFeatured ? 'text-[#9AA3AB]' : 'text-[#5C6A78]'
                      }`}
                    >
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-display font-bold text-[#F5223A]">$</span>
                      <span
                        className={`text-5xl sm:text-6xl font-display font-black tabular-nums tracking-tight ${
                          isFeatured ? 'text-white' : 'text-[#0B1218]'
                        }`}
                      >
                        {price}
                      </span>
                      <div className="flex flex-col ml-1">
                        <span
                          className={`text-xs font-bold uppercase ${
                            isFeatured ? 'text-[#9AA3AB]' : 'text-[#7A8793]'
                          }`}
                        >
                          / Month
                        </span>
                        {isAnnual ? (
                          <span className="text-[10px] text-emerald-500 font-bold">
                            Billed Annually
                          </span>
                        ) : (
                          <span className="text-[10px] text-[#808D99] font-medium">
                            No Lock-in
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Key Highlight Banner */}
                    <div
                      className={`mt-3 px-3 py-2 rounded-xl text-[11px] font-semibold flex items-center gap-2 ${
                        isFeatured
                          ? 'bg-[#121B24] text-white/90 border border-white/10'
                          : 'bg-slate-50 text-[#1F2937] border border-slate-200'
                      }`}
                    >
                      <Shield className="w-3.5 h-3.5 text-[#F5223A] shrink-0" />
                      <span className="truncate">{highlightText}</span>
                    </div>
                  </div>

                  {/* Included Privileges */}
                  <div className="space-y-3 mb-8 pt-2">
                    <div
                      className={`text-[11px] font-display font-bold uppercase tracking-wider ${
                        isFeatured ? 'text-[#F5223A]' : 'text-[#101820]'
                      }`}
                    >
                      Included Privileges
                    </div>

                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs leading-snug">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isFeatured
                              ? 'bg-[#F5223A] text-white shadow-[0_0_8px_rgba(245,34,58,0.5)]'
                              : 'bg-[#101820] text-white'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className={isFeatured ? 'text-[#D9DEE3]' : 'text-[#424F5C]'}>
                          {feature}
                        </span>
                      </div>
                    ))}

                    {/* Not included items */}
                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-2 border-t border-black/5 dark:border-white/5 space-y-2.5">
                        {plan.notIncluded.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-2.5 text-xs leading-snug opacity-40"
                          >
                            <div className="w-4 h-4 rounded-full bg-black/10 flex items-center justify-center shrink-0 mt-0.5">
                              <X className="w-2.5 h-2.5 text-gray-400" />
                            </div>
                            <span className={isFeatured ? 'text-gray-400 line-through' : 'text-gray-500 line-through'}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card CTA & Micro Reassurance */}
                <div>
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan, isAnnual)}
                    className={`w-full py-4 px-5 rounded-full font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                      isFeatured
                        ? 'bg-[#F5223A] hover:bg-[#D4142B] text-white shadow-[0_0_30px_rgba(245,34,58,0.5)] hover:shadow-[0_0_40px_rgba(245,34,58,0.7)]'
                        : 'bg-[#101820] hover:bg-[#202A36] text-white shadow-sm'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p
                    className={`text-[10px] text-center mt-2.5 ${
                      isFeatured ? 'text-[#7D8B96]' : 'text-[#8795A1]'
                    }`}
                  >
                    Zero initiation fee · Cancel anytime
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
