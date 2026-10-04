import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Calendar,
  User,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  Dumbbell,
  Sparkles,
  Award,
  Flame,
  Wind,
  Swords,
  ChevronDown,
  Check,
  Zap
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlanOrTour?: string;
}

type IconType =
  | 'calendar'
  | 'sparkles'
  | 'award'
  | 'shield'
  | 'zap'
  | 'dumbbell'
  | 'flame'
  | 'swords'
  | 'wind';

interface DropdownOption {
  id: string;
  category: 'Membership Plans' | 'Club Tours' | 'Training Disciplines';
  label: string;
  subtext: string;
  badge?: string;
  badgeType?: 'red' | 'green' | 'amber';
  iconType: IconType;
}

const DROPDOWN_OPTIONS: DropdownOption[] = [
  // Club Tours
  {
    id: 'Free Club Tour',
    category: 'Club Tours',
    label: 'Complimentary 1-on-1 Club Tour',
    subtext: '30-minute private walkthrough & movement screen',
    badge: 'FREE VIP PASS',
    badgeType: 'green',
    iconType: 'calendar'
  },
  // Membership Plans
  {
    id: 'Performance',
    category: 'Membership Plans',
    label: 'Performance Membership',
    subtext: '$89/mo · 24/7 Access, Unlimited Classes, Saunas',
    badge: 'MOST POPULAR',
    badgeType: 'red',
    iconType: 'sparkles'
  },
  {
    id: 'Elite',
    category: 'Membership Plans',
    label: 'Elite VIP Tier',
    subtext: '$159/mo · 4 Private PT Sessions, Custom Program',
    badge: 'DEDICATED COACH',
    badgeType: 'amber',
    iconType: 'award'
  },
  {
    id: 'Starter',
    category: 'Membership Plans',
    label: 'Starter Membership',
    subtext: '$49/mo · Standard Hours Gym Floor & Lockers',
    iconType: 'shield'
  },
  {
    id: 'Flex',
    category: 'Membership Plans',
    label: 'Flex 10-Class Pack',
    subtext: '$65/mo · 10 Class Credits, Rollover Allowed',
    iconType: 'zap'
  },
  // Training Disciplines
  {
    id: 'Strength & Hypertrophy',
    category: 'Training Disciplines',
    label: 'Strength & Hypertrophy',
    subtext: 'Heavy compound periodization & biomechanics',
    iconType: 'dumbbell'
  },
  {
    id: 'HIIT & Conditioning',
    category: 'Training Disciplines',
    label: 'HIIT & Conditioning',
    subtext: 'High-output metabolic work & assault cardio',
    iconType: 'flame'
  },
  {
    id: 'Boxing & Combat Dynamics',
    category: 'Training Disciplines',
    label: 'Boxing & Combat Dynamics',
    subtext: 'Heavy bag power striking & agile footwork',
    iconType: 'swords'
  },
  {
    id: 'Yoga & Athletic Mobility',
    category: 'Training Disciplines',
    label: 'Athletic Mobility & Recovery',
    subtext: 'Active joint decompression & myofascial flow',
    iconType: 'wind'
  }
];

// Helper to render high-contrast, always-visible icons
const renderOptionIcon = (type: IconType, isSelected: boolean) => {
  const baseClass = "w-4 h-4 transition-transform";
  switch (type) {
    case 'calendar':
      return <Calendar className={`${baseClass} text-emerald-400`} />;
    case 'sparkles':
      return <Sparkles className={`${baseClass} text-[#F5223A] drop-shadow-[0_0_8px_rgba(245,34,58,0.5)]`} />;
    case 'award':
      return <Award className={`${baseClass} text-amber-400`} />;
    case 'shield':
      return <ShieldCheck className={`${baseClass} text-slate-300`} />;
    case 'zap':
      return <Zap className={`${baseClass} text-[#F5223A]`} />;
    case 'dumbbell':
      return <Dumbbell className={`${baseClass} text-slate-200`} />;
    case 'flame':
      return <Flame className={`${baseClass} text-[#F5223A]`} />;
    case 'swords':
      return <Swords className={`${baseClass} text-slate-200`} />;
    case 'wind':
      return <Wind className={`${baseClass} text-cyan-400`} />;
    default:
      return <Sparkles className={`${baseClass} text-[#F5223A]`} />;
  }
};

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultPlanOrTour = 'Performance'
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedPlanId, setSelectedPlanId] = useState(defaultPlanOrTour);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [preferredTime, setPreferredTime] = useState('Morning (6am–9am)');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync default selection if prop changes
  useEffect(() => {
    if (defaultPlanOrTour) {
      const matched = DROPDOWN_OPTIONS.find(
        (o) =>
          o.id.toLowerCase() === defaultPlanOrTour.toLowerCase() ||
          defaultPlanOrTour.toLowerCase().includes(o.id.toLowerCase())
      );
      if (matched) {
        setSelectedPlanId(matched.id);
      } else {
        setSelectedPlanId(defaultPlanOrTour);
      }
    }
  }, [defaultPlanOrTour]);

  // Click outside listener for custom dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  if (!isOpen) return null;

  const currentOption = DROPDOWN_OPTIONS.find((o) => o.id === selectedPlanId) || DROPDOWN_OPTIONS[1];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email is required';
    if (!phone.trim() || phone.length < 7) errs.phone = 'Phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setIsDropdownOpen(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg max-h-[92dvh] flex flex-col bg-[#0B1218] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl text-white z-10 my-auto overflow-hidden">
        {/* Ambient Red Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#F5223A]/15 rounded-full blur-2xl pointer-events-none" />

        {/* Modal Sticky Header with Close Button */}
        <div className="flex items-center justify-between p-5 sm:p-7 pb-3 sm:pb-4 border-b border-white/10 shrink-0">
          <div>
            <span className="text-[10px] sm:text-[11px] font-display font-bold text-[#F5223A] uppercase tracking-widest block mb-0.5">
              VALENCE ATHLETIC CLUB
            </span>
            <h3 className="font-display font-extrabold text-lg sm:text-2xl uppercase tracking-tight text-white">
              Begin Your Progression
            </h3>
          </div>

          <button
            onClick={handleReset}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F5223A] text-white/80 hover:text-white flex items-center justify-center transition-all cursor-pointer shrink-0 ml-3"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 pt-4 sm:pt-5">
          {!submitted ? (
            <div>
              <p className="text-xs text-[#9AA3AB] mb-5 leading-relaxed">
                Lock in your VIP guest trial pass or schedule an in-person facility walkthrough with a senior coach.
              </p>

              <form onSubmit={handleNext} className="space-y-4">
                {/* Custom Brand-Matching Select Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <label className="block text-xs font-semibold text-white/90 mb-1.5">
                    Select Program, Plan, or Tour
                  </label>

                  {/* Dropdown Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full p-3 sm:p-3.5 rounded-xl bg-[#101820] border transition-all text-left flex items-center justify-between gap-3 cursor-pointer ${
                      isDropdownOpen
                        ? 'border-[#F5223A] shadow-[0_0_15px_rgba(245,34,58,0.35)] ring-1 ring-[#F5223A]'
                        : 'border-white/15 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-[#0B1218] border border-white/10 flex items-center justify-center shrink-0">
                        {renderOptionIcon(currentOption.iconType, false)}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-display font-bold text-xs sm:text-sm text-white uppercase truncate">
                            {currentOption.label}
                          </span>
                          {currentOption.badge && (
                            <span
                              className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0 ${
                                currentOption.badgeType === 'red'
                                  ? 'bg-[#F5223A] text-white'
                                  : currentOption.badgeType === 'green'
                                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                              }`}
                            >
                              {currentOption.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#9AA3AB] truncate">
                          {currentOption.subtext}
                        </p>
                      </div>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 text-white/70 transition-transform duration-200 shrink-0 ${
                        isDropdownOpen ? 'transform rotate-180 text-[#F5223A]' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu Overlay */}
                  {isDropdownOpen && (
                    <div className="absolute left-0 right-0 mt-2 z-50 bg-[#0E1720] border border-white/15 rounded-2xl shadow-2xl overflow-hidden max-h-64 sm:max-h-72 overflow-y-auto divide-y divide-white/5 animate-in fade-in zoom-in-95 duration-150">
                      {DROPDOWN_OPTIONS.map((option) => {
                        const isSelected = option.id === selectedPlanId;
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => {
                              setSelectedPlanId(option.id);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full p-3 text-left flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-[#F5223A]/15 border-l-4 border-[#F5223A]'
                                : 'hover:bg-white/5'
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              {/* Icon Container: Dark background with subtle border, NEVER solid red hiding the icon */}
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                                  isSelected
                                    ? 'bg-[#151D24] border-[#F5223A] shadow-[0_0_10px_rgba(245,34,58,0.4)]'
                                    : 'bg-[#101820] border-white/10'
                                }`}
                              >
                                {renderOptionIcon(option.iconType, isSelected)}
                              </div>

                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span
                                    className={`font-display font-bold text-xs uppercase truncate ${
                                      isSelected ? 'text-[#F5223A]' : 'text-white'
                                    }`}
                                  >
                                    {option.label}
                                  </span>
                                  {option.badge && (
                                    <span
                                      className={`text-[8px] font-bold px-1.5 py-0.5 rounded uppercase shrink-0 ${
                                        option.badgeType === 'red'
                                          ? 'bg-[#F5223A] text-white'
                                          : option.badgeType === 'green'
                                          ? 'bg-emerald-500/20 text-emerald-400'
                                          : 'bg-amber-500/20 text-amber-300'
                                      }`}
                                    >
                                      {option.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[10px] text-[#9AA3AB] truncate">
                                  {option.subtext}
                                </p>
                              </div>
                            </div>

                            {isSelected && (
                              <Check className="w-4 h-4 text-[#F5223A] shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Marcus Sterling"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#101820] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#F5223A] transition-colors"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-[#F5223A] mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="marcus@example.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#101820] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#F5223A] transition-colors"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-[#F5223A] mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1.5">
                    Mobile Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-white/40" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 234-5678"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#101820] border border-white/10 text-white placeholder-white/30 text-xs sm:text-sm focus:outline-none focus:border-[#F5223A] transition-colors"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-[#F5223A] mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Preferred Time Slot */}
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1.5">
                    Preferred Training Window
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      'Morning (6am–9am)',
                      'Mid-Day (11am–2pm)',
                      'Evening (5pm–9pm)'
                    ].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setPreferredTime(time)}
                        className={`p-2.5 rounded-xl text-xs font-medium border transition-all text-center cursor-pointer ${
                          preferredTime === time
                            ? 'bg-[#F5223A]/15 border-[#F5223A] text-white font-bold shadow-[0_0_10px_rgba(245,34,58,0.3)]'
                            : 'bg-[#101820] border-white/10 text-[#9AA3AB] hover:text-white hover:border-white/20'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 px-6 rounded-full bg-[#F5223A] hover:bg-[#D4142B] text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(245,34,58,0.45)] flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Confirm & Reserve Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#9AA3AB] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Zero spam guarantee. 100% confidential.</span>
                </div>
              </form>
            </div>
          ) : (
            /* Confirmation Success State */
            <div className="py-4 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>

              <span className="text-[11px] font-display font-bold text-[#F5223A] tracking-widest uppercase block mb-1">
                RESERVATION CONFIRMED
              </span>

              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-2 uppercase">
                Welcome, {fullName.split(' ')[0]}.
              </h3>

              <p className="text-xs sm:text-sm text-[#9AA3AB] leading-relaxed max-w-sm mx-auto mb-6">
                Your pass for <strong className="text-white">{currentOption.label}</strong> has been created.
                Our concierge will contact you at <strong className="text-white">{phone}</strong> within 30 minutes.
              </p>

              {/* Digital Pass Card */}
              <div className="p-4 rounded-2xl bg-[#101820] border border-white/10 max-w-xs mx-auto mb-6 text-left">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                  <span className="text-[10px] text-white/50 tracking-wider uppercase font-bold">Pass ID</span>
                  <span className="text-xs font-mono font-bold text-[#F5223A]">#VAL-9842</span>
                </div>
                <div className="text-xs font-bold text-white uppercase">{fullName}</div>
                <div className="text-[11px] text-[#F5223A] font-semibold">{currentOption.label}</div>
                <div className="text-[11px] text-[#9AA3AB]">{preferredTime}</div>
              </div>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Return to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
