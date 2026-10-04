import { Program, PricingPlan, Coach, Testimonial, FacilityStat } from '../types';

export const BRAND_NAME = "VALENCE";
export const BRAND_SUBTITLE = "ATHLETIC CLUB";
export const BRAND_TAGLINE = "Built for Uncompromising Performance";

export const HERO_IMAGE = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85";
export const ABOUT_IMAGE = "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85";
export const FACILITY_IMAGE = "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=85";
export const CTA_IMAGE = "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1600&q=85";

export const PROGRAMS: Program[] = [
  {
    id: "strength-hypertrophy",
    title: "Strength & Hypertrophy",
    subtitle: "Heavy compound mastery & muscle architecture",
    description: "Progressive overload protocols using competition-grade barbells, racks, and specialized mechanical machines.",
    category: "Strength",
    duration: "60 mins",
    intensity: "High",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Targeted periodized lifting cycles",
      "Power racks & calibrated Olympic plates",
      "Biomechanical form analysis with senior coaches"
    ]
  },
  {
    id: "hiit-conditioning",
    title: "HIIT & Conditioning",
    subtitle: "Aerobic threshold & explosive work capacity",
    description: "High-output metabolic intervals combining assault runners, SkiErgs, kettlebells, and battle ropes for total conditioning.",
    category: "Metabolic",
    duration: "45 mins",
    intensity: "Elite",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Maximum cardiovascular endurance and VO2 max",
      "Heart-rate synced telemetry tracking",
      "Dynamic team energy with targeted work-to-rest ratios"
    ]
  },
  {
    id: "mobility-recovery",
    title: "Yoga & Athletic Mobility",
    subtitle: "Joint resilience & active decompression",
    description: "Deep myofascial release, end-range joint control, and breathwork engineered specifically for high-load athletes.",
    category: "Mobility",
    duration: "50 mins",
    intensity: "Medium",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Restore nervous system and accelerate tissue repair",
      "Improve thoracic, hip, and ankle mobility",
      "Infrared sauna and recovery plunge access"
    ]
  },
  {
    id: "boxing-combat",
    title: "Boxing & Combat Dynamics",
    subtitle: "Kinetic striking & reactive agility",
    description: "Heavy bag sequences, precision mitt work, and defensive footwork drills that burn calories while building genuine striking prowess.",
    category: "Combat",
    duration: "55 mins",
    intensity: "High",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Full-body rotational power & core velocity",
      "Reflex, timing, and defensive hand-eye coordination",
      "Custom leather bags and professional sparring ring"
    ]
  },
  {
    id: "personal-training",
    title: "1-on-1 Performance Coaching",
    subtitle: "Bespoke blueprint engineered around your physiology",
    description: "Dedicated mentorship with certified exercise physiologists including nutrition guidance and daily accountability.",
    category: "Personalized",
    duration: "60 mins",
    intensity: "Elite",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    benefits: [
      "In-depth 3D InBody body composition scans",
      "Periodized nutrition & recovery schedule",
      "Custom app access with daily coach messaging"
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Foundational access for self-directed athletes",
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      "Unlimited club access during standard hours (5am–10pm)",
      "Full main strength floor & cardio zone",
      "Locker room, towel service & rain showers",
      "1 Complimentary coach assessment session",
      "Valence mobile companion app"
    ],
    notIncluded: [
      "Unlimited group studio classes",
      "Recovery lounge & infrared sauna",
      "Weekly private coaching check-in"
    ],
    ctaText: "Start Starter Plan"
  },
  {
    id: "performance",
    name: "Performance",
    tagline: "Our benchmark plan for serious training progress",
    monthlyPrice: 89,
    annualPrice: 71,
    popular: true,
    features: [
      "Full 24/7 biometric club access",
      "Unlimited group studio classes (HIIT, Strength, Mobility)",
      "Comprehensive monthly InBody 3D body composition scan",
      "Full recovery lounge access (sauna & contrast plunge)",
      "Priority class reservations (7-day advance booking)",
      "Valence nutrition framework & macro guides"
    ],
    ctaText: "Join Performance"
  },
  {
    id: "elite",
    name: "Elite",
    tagline: "Total immersion with private dedicated coaching",
    monthlyPrice: 159,
    annualPrice: 129,
    features: [
      "All Performance tier privileges included",
      "4 Monthly 1-on-1 private coaching sessions included",
      "Personalized periodized training program updated weekly",
      "Direct WhatsApp/SMS channel with your designated coach",
      "Free guest pass (2 per month)",
      "Complimentary Valence training apparel pack upon sign-up"
    ],
    ctaText: "Join Elite Club"
  },
  {
    id: "flex",
    name: "Flex Pass",
    tagline: "Class-based membership tailored for traveling athletes",
    monthlyPrice: 65,
    annualPrice: 52,
    features: [
      "10 Class credits per month (rollover allowed for 60 days)",
      "Open gym floor access on class booking days",
      "Mobile class booking and waitlist priority",
      "Shower, sauna & locker amenities included",
      "Zero cancellation or freeze penalties"
    ],
    notIncluded: [
      "24/7 unlimited facility access",
      "Private 1-on-1 coaching sessions"
    ],
    ctaText: "Get Flex Pass"
  }
];

export const COACHES: Coach[] = [
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "Head of Strength & Conditioning",
    experience: "11+ Years Coaching",
    specialty: "Olympic Weightlifting & Biomechanical Power",
    bio: "Former collegiate strength coach and CSCS specialist. Marcus architects progressive overload cycles that build bulletproof spines, explosive hip drive, and clean lifting mechanics.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80",
    socials: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Director of Mobility & Athletic Recovery",
    experience: "9+ Years Coaching",
    specialty: "Active Myofascial Release & Joint Kinematics",
    bio: "Ex-gymnast and sports physiotherapist specializing in restoring joint ranges of motion under load, breath-regulated tissue down-regulation, and rotational power recovery.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80",
    socials: {
      instagram: "#",
      linkedin: "#"
    }
  },
  {
    id: "damon-cross",
    name: "Damon Cross",
    role: "Combat Dynamics & Striking Coach",
    experience: "12+ Years Coaching",
    specialty: "Heavy Bag Rotational Conditioning & Footwork",
    bio: "Golden Gloves finalist and certified combat conditioning coach. Damon fuses rhythm, explosive hand speed, and relentless cardiovascular grit into structured 55-minute sessions.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    socials: {
      instagram: "#",
      twitter: "#"
    }
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Head of HIIT & Metabolic Conditioning",
    experience: "8+ Years Coaching",
    specialty: "VO2 Max Optimization & Functional Intervals",
    bio: "Ironman finisher and Master Trainer known for engineering heart-rate guided intervals that push athletes past mental barriers without joint breakdown or overtraining.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    socials: {
      instagram: "#",
      linkedin: "#"
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Julian Rivera",
    role: "Tech Executive & Competitive Triathlete",
    membership: "Elite Member · 18 Months",
    quote: "The atmosphere here is completely unlike commercial chain gyms. Every piece of equipment is tuned for performance. Under Marcus's programming, my deadlift jumped 65 lbs while my chronic lower back stiffness disappeared completely.",
    stats: "+65 lbs Compound Strength · Zero Joint Pain",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t2",
    name: "Camille Laurent",
    role: "Architect & Daily 6AM Conditioning Member",
    membership: "Performance Member · 12 Months",
    quote: "The HIIT and boxing classes are brutal in the best way possible. The coaches remember your name, track your rep weights, and constantly refine your technique. Valence is the anchor of my morning routine.",
    stats: "-14% Body Fat · Doubled VO2 Threshold",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t3",
    name: "David Chen",
    role: "Product Designer & Functional Fitness Enthusiast",
    membership: "Performance Member · 8 Months",
    quote: "Finding a facility with competition-spec barbell bars, turf sprint lanes, and a legitimate recovery sauna under one roof seemed impossible until Valence opened. It sets a new standard for fitness.",
    stats: "Sub-20 Min 5K · +18kg Squat PR",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

export const FACILITY_STATS: FacilityStat[] = [
  {
    value: 14,
    suffix: "k+",
    label: "Sq. Ft. Training Floor",
    description: "Custom turf lanes, Olympic platforms, and free weights"
  },
  {
    value: 36,
    suffix: "+",
    label: "Weekly Group Classes",
    description: "Metabolic HIIT, boxing combat, strength & mobility"
  },
  {
    value: 12,
    suffix: "",
    label: "Certified Master Coaches",
    description: "CSCS, Olympic weightlifting & sports physiotherapists"
  },
  {
    value: 24,
    suffix: "/7",
    label: "Biometric Keyless Access",
    description: "Train on your schedule with round-the-clock entry"
  }
];

export const GOAL_RECOMMENDATIONS = [
  {
    goal: "Maximum Strength & Muscle",
    tagline: "Hypertrophy & raw compound power",
    split: "4x Weekly Heavy Compound / 1x Mobility",
    recommendedProgram: "Strength & Hypertrophy",
    recommendedCoach: "Marcus Vance",
    focus: ["Barbell compound progression", "Mechanical tension overload", "Optimal 48-hr recovery cadence"]
  },
  {
    goal: "Fat Loss & Athletic Conditioning",
    tagline: "High caloric burn & cardiovascular power",
    split: "3x HIIT Intervals / 2x Combat Conditioning",
    recommendedProgram: "HIIT & Conditioning",
    recommendedCoach: "Sarah Jenkins",
    focus: ["VO2 max elevation", "EPOC afterburn stimulation", "Agile kettlebell and sprint work"]
  },
  {
    goal: "Mobility, Spine & Longevity",
    tagline: "Joint resilience & total pain-free movement",
    split: "3x Mobility Flow / 2x Controlled Hypertrophy",
    recommendedProgram: "Yoga & Athletic Mobility",
    recommendedCoach: "Elena Rostova",
    focus: ["Full-range connective tissue health", "Thoracic and hip decompression", "Contrast thermal sauna recovery"]
  },
  {
    goal: "Explosive Striking & Agility",
    tagline: "Rotational combat velocity & fast reflexes",
    split: "3x Boxing Dynamics / 2x Core & Strength",
    recommendedProgram: "Boxing & Combat Dynamics",
    recommendedCoach: "Damon Cross",
    focus: ["Footwork kinetic energy", "Heavy bag cadence endurance", "Multi-planar rotational speed"]
  }
];

export const FAQS = [
  {
    q: "How does the free club tour work?",
    a: "You'll be paired with one of our coaches for a 30-minute private walkthrough of the facility, including a movement assessment and an overview of our equipment, recovery suites, and program schedules."
  },
  {
    q: "Can I freeze or cancel my membership?",
    a: "Yes. All our plans come with zero cancellation fees. You can freeze your account for up to 60 days per calendar year directly through the member portal or at the concierge desk."
  },
  {
    q: "Are group classes suitable for beginners?",
    a: "Every class is structured with scalable regressions and progressions. Our coaches actively adjust weights, pacing, and movement complexity to match your current training age."
  },
  {
    q: "What recovery amenities are included?",
    a: "Performance and Elite tiers enjoy unlimited access to our custom Cedar infrared dry saunas, cold plunge baths (maintained at 48°F), Normatec compression sleeves, and private rain showers."
  }
];
