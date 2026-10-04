import React, { useState } from 'react';
import {
  Flame,
  Calendar,
  CheckCircle2,
  Dumbbell,
  Wind,
  Swords,
  Sparkles,
  Zap,
  Clock,
  Gauge,
  Activity,
  Award
} from 'lucide-react';
import { SafeImage } from './SafeImage';

interface InteractiveGoalFinderProps {
  onSelectProtocol?: (goalTitle: string) => void;
}

interface WeeklyDayPlan {
  day: string;
  type: 'train' | 'recovery' | 'rest';
  session: string;
  duration: string;
}

interface GoalProtocol {
  id: string;
  trackNum: string;
  goal: string;
  tagline: string;
  icon: 'dumbbell' | 'flame' | 'wind' | 'swords';
  split: string;
  recommendedProgram: string;
  frequency: string;
  intensity: string;
  recommendedCoach: {
    name: string;
    role: string;
    experience: string;
    image: string;
    quote: string;
  };
  focus: string[];
  modalities: string[];
  metrics: {
    label: string;
    value: number;
  }[];
  schedule: WeeklyDayPlan[];
}

const ENHANCED_PROTOCOLS: GoalProtocol[] = [
  {
    id: 'strength',
    trackNum: 'TRACK 01',
    goal: 'Maximum Strength & Muscle',
    tagline: 'Hypertrophy & raw compound power',
    icon: 'dumbbell',
    split: '4x Weekly Heavy Compound / 1x Mobility',
    recommendedProgram: 'Strength & Hypertrophy',
    frequency: '5 Days / Week',
    intensity: 'High Neural Load',
    recommendedCoach: {
      name: 'Marcus Vance',
      role: 'Head of Strength & Conditioning',
      experience: '11+ Years Coaching · CSCS',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80',
      quote: 'Mechanical tension over time is non-negotiable. We engineer structured barbell loads with deliberate recovery windows.'
    },
    focus: [
      'Barbell compound linear & undulating progression',
      'Mechanical tension overload in 5–8 and 8–12 rep ranges',
      'Controlled eccentric tempo to maximize myofibrillar hypertrophy',
      'Optimal 48-hour inter-session muscle group recovery cadence'
    ],
    modalities: ['Eleiko Competition Plates', 'Custom Power Racks', 'Glute-Ham Developer', 'Infrared Sauna Flushes'],
    metrics: [
      { label: 'Strength Output & Neural Drive', value: 98 },
      { label: 'Hypertrophy Potential', value: 94 },
      { label: 'Connective Tissue Load', value: 85 },
      { label: 'Recovery Demand', value: 88 }
    ],
    schedule: [
      { day: 'MON', type: 'train', session: 'Upper Heavy A (Bench & Rows)', duration: '70 min' },
      { day: 'TUE', type: 'train', session: 'Lower Heavy A (Squats & Chain Work)', duration: '75 min' },
      { day: 'WED', type: 'recovery', session: 'Active Mobility & Infrared Sauna', duration: '45 min' },
      { day: 'THU', type: 'train', session: 'Upper Hypertrophy B (Overhead & Pulls)', duration: '65 min' },
      { day: 'FRI', type: 'train', session: 'Lower Posterior B (Deadlifts & Hamstrings)', duration: '75 min' },
      { day: 'SAT', type: 'recovery', session: 'Cold Plunge & Myofascial Release', duration: '30 min' },
      { day: 'SUN', type: 'rest', session: 'Rest & Neuromuscular Regeneration', duration: 'Full Rest' }
    ]
  },
  {
    id: 'conditioning',
    trackNum: 'TRACK 02',
    goal: 'Fat Loss & Athletic Conditioning',
    tagline: 'High caloric burn & cardiovascular power',
    icon: 'flame',
    split: '3x HIIT Intervals / 2x Functional Density',
    recommendedProgram: 'HIIT & Conditioning',
    frequency: '5 Days / Week',
    intensity: 'Peak Metabolic Output',
    recommendedCoach: {
      name: 'Sarah Jenkins',
      role: 'Head of HIIT & Metabolic Conditioning',
      experience: '8+ Years Coaching · Master Trainer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      quote: 'We push into anaerobic thresholds with heart-rate precision so your body continues burning fuel hours after class.'
    },
    focus: [
      'VO2 Max elevation through programmed interval cascades',
      'EPOC stimulation sustaining post-workout caloric expenditure',
      'Functional kettlebell complexes and explosive turf sprints',
      'Lactate threshold buffering with short recovery bouts'
    ],
    modalities: ['Curved Motorless Sprints', 'Assault AirBikes', 'Competition Kettlebells', 'SkiErg Cadence'],
    metrics: [
      { label: 'Metabolic & Caloric Burn', value: 99 },
      { label: 'Cardiovascular VO2 Capacity', value: 95 },
      { label: 'Agility & Work Capacity', value: 90 },
      { label: 'Recovery Turnover Rate', value: 76 }
    ],
    schedule: [
      { day: 'MON', type: 'train', session: 'High-Output Sprint Intervals', duration: '50 min' },
      { day: 'TUE', type: 'train', session: 'Metabolic Kettlebell Complexes', duration: '55 min' },
      { day: 'WED', type: 'train', session: 'Assault Bike & Turf Sprint Rounds', duration: '50 min' },
      { day: 'THU', type: 'recovery', session: 'Sauna Flush & Breath Downregulation', duration: '40 min' },
      { day: 'FRI', type: 'train', session: 'Team Conditioning & Agility Flow', duration: '60 min' },
      { day: 'SAT', type: 'recovery', session: 'Zone 2 Outdoor Aerobic Walk', duration: '45 min' },
      { day: 'SUN', type: 'rest', session: 'Complete Metabolic Restoration', duration: 'Full Rest' }
    ]
  },
  {
    id: 'mobility',
    trackNum: 'TRACK 03',
    goal: 'Mobility, Spine & Longevity',
    tagline: 'Joint resilience & total pain-free movement',
    icon: 'wind',
    split: '3x Mobility Flow / 2x Controlled Hypertrophy',
    recommendedProgram: 'Yoga & Athletic Mobility',
    frequency: '4–5 Days / Week',
    intensity: 'Low Impact / High Precision',
    recommendedCoach: {
      name: 'Elena Rostova',
      role: 'Director of Mobility & Athletic Recovery',
      experience: '9+ Years Coaching · Physiotherapist',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80',
      quote: 'Strength without end-range joint mobility is a ticking clock. True longevity comes from opening the kinetic chain.'
    },
    focus: [
      'Full-range connective tissue remodel and tendon health',
      'Thoracic and hip capsule decompression under breathwork',
      'End-range isometric control (FRC joint conditioning)',
      'Contrast thermal sauna & 48°F plunge vascular flushing'
    ],
    modalities: ['Custom Spine Stretches', 'Banded Joint Distraction', '48°F Cold Plunges', 'Cedar Dry Saunas'],
    metrics: [
      { label: 'Joint Range of Motion', value: 98 },
      { label: 'Tissue Longevity & Health', value: 96 },
      { label: 'Parasympathetic Nervous Activation', value: 93 },
      { label: 'Recovery Efficiency', value: 95 }
    ],
    schedule: [
      { day: 'MON', type: 'train', session: 'Spine & Pelvic Capsule Mobilization', duration: '55 min' },
      { day: 'TUE', type: 'train', session: 'Controlled Functional Tension & Core', duration: '50 min' },
      { day: 'WED', type: 'recovery', session: 'Sauna & 48°F Contrast Plunge Suite', duration: '60 min' },
      { day: 'THU', type: 'train', session: 'Thoracic Extension & Shoulder Health', duration: '55 min' },
      { day: 'FRI', type: 'train', session: 'Athletic Flow & Myofascial Release', duration: '50 min' },
      { day: 'SAT', type: 'recovery', session: 'Breathing Mechanics & Gentle Mobility', duration: '40 min' },
      { day: 'SUN', type: 'rest', session: 'Total Body Restoration', duration: 'Full Rest' }
    ]
  },
  {
    id: 'striking',
    trackNum: 'TRACK 04',
    goal: 'Explosive Striking & Agility',
    tagline: 'Rotational combat velocity & fast reflexes',
    icon: 'swords',
    split: '3x Boxing Dynamics / 2x Core & Strength',
    recommendedProgram: 'Boxing & Combat Dynamics',
    frequency: '5 Days / Week',
    intensity: 'High Anaerobic Explosiveness',
    recommendedCoach: {
      name: 'Damon Cross',
      role: 'Combat Dynamics & Striking Coach',
      experience: '12+ Years Coaching · Golden Gloves',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      quote: 'Combat conditioning teaches rotational torque that transfers to every sport. Speed, footwork, and ruthless stamina.'
    },
    focus: [
      'Kinetic chain force transfer from footwork to hand impact',
      'Rotational torque and anti-rotational core stabilization',
      'Anaerobic lactic endurance across 3-minute combat rounds',
      'Rapid reactive footwork and multi-planar agility drills'
    ],
    modalities: ['Hydro-Filled Heavy Aqua Bags', 'Agility Speed Ladders', 'Slam Medicine Balls', 'Leather Hand Mitts'],
    metrics: [
      { label: 'Rotational Power & Velocity', value: 97 },
      { label: 'Reflex & Hand-Eye Agility', value: 95 },
      { label: 'Lactic Acid Endurance', value: 91 },
      { label: 'Recovery Demand', value: 84 }
    ],
    schedule: [
      { day: 'MON', type: 'train', session: 'Heavy Bag Velocity & Combination Cadence', duration: '60 min' },
      { day: 'TUE', type: 'train', session: 'Rotational Core & Plyometric Power', duration: '55 min' },
      { day: 'WED', type: 'train', session: 'Mitt Speed Work & Kinetic Footwork', duration: '60 min' },
      { day: 'THU', type: 'recovery', session: 'Wrist & Shoulder Joint Decompression', duration: '40 min' },
      { day: 'FRI', type: 'train', session: 'Combat Interval Rounds & Conditioning', duration: '60 min' },
      { day: 'SAT', type: 'recovery', session: 'Aerobic Flush & Sauna Thermal Bath', duration: '45 min' },
      { day: 'SUN', type: 'rest', session: 'Complete Neuromuscular Rest', duration: 'Full Rest' }
    ]
  }
];

export const InteractiveGoalFinder: React.FC<InteractiveGoalFinderProps> = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activePlan = ENHANCED_PROTOCOLS[selectedIdx];

  const renderTrackIcon = (iconName: 'dumbbell' | 'flame' | 'wind' | 'swords', isSelected: boolean) => {
    const iconClass = `w-5 h-5 transition-transform ${isSelected ? 'text-[#F5223A] scale-110' : 'text-[#9AA3AB]'}`;
    switch (iconName) {
      case 'dumbbell':
        return <Dumbbell className={iconClass} />;
      case 'flame':
        return <Flame className={iconClass} />;
      case 'wind':
        return <Wind className={iconClass} />;
      case 'swords':
        return <Swords className={iconClass} />;
    }
  };

  return (
    <div className="relative my-8 sm:my-14 p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#090F15] border border-white/12 shadow-2xl overflow-hidden">
      {/* Dynamic background ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5223A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F5223A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5223A]/15 border border-[#F5223A]/30 mb-3">
              <Flame className="w-3.5 h-3.5 text-[#F5223A] animate-pulse" />
              <span className="text-[11px] font-display font-bold tracking-widest text-[#F5223A] uppercase">
                Interactive Training Architect
              </span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight">
              Discover Your Optimal Weekly Split
            </h3>
            <p className="text-xs sm:text-sm text-[#9AA3AB] mt-1.5 max-w-2xl leading-relaxed">
              Select your primary athletic priority to see our recommended periodization model, daily split architecture, and physiological adaptations.
            </p>
          </div>

          {/* Active Track Status Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#101820] border border-white/10 self-start lg:self-auto shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5223A] shadow-[0_0_8px_#F5223A]" />
            <span className="text-xs font-display font-bold uppercase tracking-wider text-white">
              Active Model: <span className="text-[#F5223A]">{activePlan.trackNum}</span>
            </span>
          </div>
        </div>

        {/* 4 Interactive Track Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {ENHANCED_PROTOCOLS.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`relative p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[140px] sm:min-h-[160px] ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#162029] via-[#101820] to-[#0A1017] border-[#F5223A] shadow-[0_0_30px_rgba(245,34,58,0.3)] ring-1 ring-[#F5223A]'
                    : 'bg-[#0B131A] border-white/10 hover:border-white/25 hover:bg-[#101820] text-[#9AA3AB]'
                }`}
              >
                {/* Top Row: Track Badge + Icon */}
                <div className="flex items-center justify-between mb-3 w-full">
                  <span
                    className={`text-[10px] font-display font-black tracking-wider uppercase px-2.5 py-1 rounded-md transition-colors ${
                      isSelected
                        ? 'bg-[#F5223A] text-white shadow-[0_0_10px_rgba(245,34,58,0.5)]'
                        : 'bg-white/5 text-[#9AA3AB] group-hover:text-white'
                    }`}
                  >
                    {item.trackNum}
                  </span>

                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
                      isSelected
                        ? 'bg-[#F5223A]/15 border-[#F5223A] shadow-[0_0_12px_rgba(245,34,58,0.35)]'
                        : 'bg-[#151D24] border-white/10 group-hover:border-white/20'
                    }`}
                  >
                    {renderTrackIcon(item.icon, isSelected)}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h4
                    className={`font-display font-black text-sm sm:text-base uppercase tracking-tight mb-1 transition-colors ${
                      isSelected ? 'text-white' : 'text-white/90 group-hover:text-white'
                    }`}
                  >
                    {item.goal}
                  </h4>
                  <p className="text-xs text-[#9AA3AB] leading-relaxed line-clamp-2">
                    {item.tagline}
                  </p>
                </div>

                {/* Glowing bottom active border bar */}
                {isSelected && (
                  <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#F5223A] to-transparent shadow-[0_0_8px_#F5223A]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Architectural Periodization Breakdown */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#070D12] border border-white/12 p-5 sm:p-7 lg:p-8 shadow-2xl">
          {/* Top Periodization Specs Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="px-3 py-1.5 rounded-lg bg-[#F5223A]/20 text-[#F5223A] font-display font-black text-xs uppercase tracking-wider border border-[#F5223A]/40 shadow-[0_0_15px_rgba(245,34,58,0.25)] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F5223A]" />
                Recommended: {activePlan.recommendedProgram}
              </span>

              <span className="px-3 py-1.5 rounded-lg bg-[#121A22] text-[#D9DEE3] text-xs font-semibold border border-white/10 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#F5223A]" />
                {activePlan.split}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#9AA3AB]">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                <Clock className="w-3.5 h-3.5 text-[#F5223A]" />
                {activePlan.frequency}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F5223A]/10 text-[#FF4D61] border border-[#F5223A]/20 font-semibold">
                <Zap className="w-3.5 h-3.5 text-[#F5223A]" />
                {activePlan.intensity}
              </span>
            </div>
          </div>

          {/* 7-Day Interactive Periodization Matrix */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display font-black text-xs sm:text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#F5223A]" />
                7-Day Periodization Schedule Matrix
              </h4>
              <span className="text-[11px] text-[#9AA3AB]">High Precision Micro-Cycle</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-2.5">
              {activePlan.schedule.map((dayPlan) => {
                const isTrain = dayPlan.type === 'train';
                const isRecovery = dayPlan.type === 'recovery';

                return (
                  <div
                    key={dayPlan.day}
                    className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all ${
                      isTrain
                        ? 'bg-[#101820] border-white/15 hover:border-[#F5223A]/50'
                        : isRecovery
                        ? 'bg-[#0B1A22] border-cyan-500/25 hover:border-cyan-400/50'
                        : 'bg-[#0A1016] border-white/5 opacity-75'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display font-black text-xs sm:text-sm text-white tracking-wider">
                        {dayPlan.day}
                      </span>
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                          isTrain
                            ? 'bg-[#F5223A]/20 text-[#FF4D61] border border-[#F5223A]/40'
                            : isRecovery
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                            : 'bg-white/10 text-white/60'
                        }`}
                      >
                        {isTrain ? 'TRAIN' : isRecovery ? 'RECOVER' : 'REST'}
                      </span>
                    </div>

                    <p className="text-[11px] font-medium text-white/90 leading-tight mb-2 min-h-[32px]">
                      {dayPlan.session}
                    </p>

                    <div className="text-[10px] text-[#9AA3AB] pt-1.5 border-t border-white/10 flex items-center justify-between">
                      <span>Duration</span>
                      <span className="font-semibold text-white/80">{dayPlan.duration}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lower 2-Column Split: Objectives & Modalities vs Coach Profile & Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left: Core Physiological Objectives (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h4 className="font-display font-black text-sm sm:text-base text-white mb-3.5 uppercase tracking-wide flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-[#F5223A]" />
                  Core Physiological Adaptations:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                  {activePlan.focus.map((item) => (
                    <div
                      key={item}
                      className="p-3 rounded-xl bg-[#0E161E] border border-white/10 flex items-start gap-2.5 text-xs text-[#D9DEE3] hover:border-white/20 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#F5223A] shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modalities & Equipment Pills */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[#9AA3AB] block mb-2">
                  Key Modalities & Infrastructure
                </span>
                <div className="flex flex-wrap gap-2">
                  {activePlan.modalities.map((modality) => (
                    <span
                      key={modality}
                      className="px-2.5 py-1 rounded-md bg-[#121A22] border border-white/10 text-white/80 text-[11px] font-medium"
                    >
                      {modality}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Coach Oversight Spotlight & Physiological Gauges (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-5 bg-[#0C141C] border border-white/10 rounded-2xl p-5">
              {/* Supervising Coach Profile */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-display font-bold uppercase tracking-wider text-[#F5223A]">
                    Supervising Head Coach
                  </span>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <Award className="w-3 h-3 text-emerald-400" />
                    Verified Master Coach
                  </span>
                </div>

                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#F5223A] shadow-[0_0_15px_rgba(245,34,58,0.4)] shrink-0">
                    <SafeImage
                      src={activePlan.recommendedCoach.image}
                      alt={activePlan.recommendedCoach.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-display font-black text-base text-white uppercase tracking-tight">
                      {activePlan.recommendedCoach.name}
                    </h5>
                    <p className="text-xs text-[#FF4D61] font-semibold">
                      {activePlan.recommendedCoach.role}
                    </p>
                    <p className="text-[11px] text-[#9AA3AB] mt-0.5">
                      {activePlan.recommendedCoach.experience}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#9AA3AB] italic bg-[#070D12] p-3 rounded-xl border border-white/5 leading-relaxed">
                  &ldquo;{activePlan.recommendedCoach.quote}&rdquo;
                </p>
              </div>

              {/* Physiological Metrics Progress Bars */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-display font-bold uppercase tracking-wider text-white/70 block mb-2.5">
                  Adaptation Load Profile
                </span>
                <div className="space-y-2.5">
                  {activePlan.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="text-[#D9DEE3] font-medium">{metric.label}</span>
                        <span className="text-white font-mono font-bold">{metric.value}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#D4142B] to-[#F5223A] rounded-full transition-all duration-500 shadow-[0_0_6px_#F5223A]"
                          style={{ width: `${metric.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
