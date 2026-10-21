export interface GymProgram {
  id: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  intensity: 'Medium' | 'High' | 'Extreme' | 'All Levels';
  category: 'strength-performance' | 'studio-classes' | 'recovery-wellness';
  features: string[];
  trainerSpecialty: string;
}

export interface ProgramCategory {
  id: 'strength-performance' | 'studio-classes' | 'recovery-wellness';
  name: string;
  subtitle: string;
  description: string;
  programs: GymProgram[];
}

export interface ClassScheduleItem {
  id: string;
  time: string;
  className: string;
  trainer: string;
  category: 'Strength' | 'Cycling' | 'CrossFit' | 'Zumba' | 'Yoga' | 'Recovery';
  intensity: string;
  duration: string;
  days: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  price: string;
  billingText: string;
  popular?: boolean;
  features: string[];
}

export const GYM_INFO = {
  name: "The Reps Fitness Premium",
  shortName: "The Reps",
  category: "Premium Fitness Club & Gym",
  tagline: "Amritsar's Premier Luxury Fitness Club, Performance Studio & Spa",
  rating: "4.9",
  reviewCount: "857+",
  reviewCountExact: "857+ Google Reviews",
  phone: "9049291492",
  phoneFormatted: "+91 90492 91492",
  whatsappUrl: "https://wa.me/919049291492",
  freePassWhatsappUrl: "https://wa.me/919049291492?text=Hello%20The%20Reps%20Fitness%20Premium!%20I%20would%20like%20to%20book%20my%20Free%20Day%20Pass%20at%20SCO%2052-53,%205th%20Floor,%20D-Block,%20Ranjit%20Avenue,%20Amritsar.",
  address: "SCO 52-53, 5th Floor, Gumtala Sub Urban, D-Block, Ranjit Avenue, Amritsar, Punjab - 143001",
  addressShort: "SCO 52-53, 5th Floor, D-Block, Ranjit Avenue, Amritsar",
  floor: "5th Floor Panoramic View",
  city: "Amritsar",
  state: "Punjab",
  pincode: "143001",
  hoursWeekday: "Monday – Saturday: 6:00 AM – 10:00 PM",
  hoursSunday: "Sunday: 8:00 AM – 2:00 PM",
  googleMapsUrl: "https://maps.google.com/?q=SCO+52-53+5th+Floor+Gumtala+Sub+Urban+D-Block+Ranjit+Avenue+Amritsar+Punjab+143001",
  heroImage: "https://i.ibb.co/23hmV8Gp/Screenshot-2026-10-21-16-16-08-102-com-android-chrome-edit.jpg",
  facilityImage: "https://i.ibb.co/Mx6Q5cW3/Screenshot-2026-10-21-16-16-34-171-com-android-chrome-edit.jpg",
};

export const CORE_PROGRAM_CATEGORIES: ProgramCategory[] = [
  {
    id: "strength-performance",
    name: "Strength & Performance",
    subtitle: "Heavy Iron, Functional Power & Elite Biomechanics",
    description: "World-class strength infrastructure featuring Olympic lifting platforms, heavy dumbbell suites up to 50kg, precision plate-loaded machines, and dedicated CrossFit training turf.",
    programs: [
      {
        id: "weight-training",
        name: "Weight Training",
        tagline: "Progressive Hypertrophy & Biomechanics",
        description: "Engineered resistance training utilizing competition-grade Olympic bars, calibrated bumper plates, power cages, and isolated pin-loaded stations designed for peak muscle growth and postural integrity.",
        duration: "60 mins",
        intensity: "High",
        category: "strength-performance",
        features: [
          "Commercial grade dumbbells (2.5kg to 50kg)",
          "Multi-station Olympic squat cages & deadlift platforms",
          "Pin-selected & plate-loaded isolation biomechanic stations",
          "Form correction & active spotters on floor"
        ],
        trainerSpecialty: "Biomechanics & Hypertrophy Coach"
      },
      {
        id: "crossfit-performance",
        name: "CrossFit",
        tagline: "Metabolic Conditioning & Functional Power",
        description: "Constantly varied high-intensity functional training featuring turf sprint tracks, sled pushes, Concept2 rowers, assault air bikes, battle ropes, and kettlebells.",
        duration: "50 mins",
        intensity: "Extreme",
        category: "strength-performance",
        features: [
          "Indoor synthetic sprint turf & prowler sled lane",
          "Concept2 rowers & high-watt assault air bikes",
          "Plyo jump boxes, slam balls & battle ropes",
          "Daily WODs with scaled modifications for all fitness levels"
        ],
        trainerSpecialty: "Certified CrossFit Level 2 Coach"
      },
      {
        id: "elite-personal-training",
        name: "Elite Personal Training",
        tagline: "Bespoke 1-on-1 Transformation",
        description: "Dedicated 1-on-1 private coaching designed around your biometric profile, movement screening, periodized progression cycles, and full nutritional accountability.",
        duration: "60 mins",
        intensity: "High",
        category: "strength-performance",
        features: [
          "InBody multi-frequency body composition scans",
          "Tailored periodized training program updated weekly",
          "Postural alignment & injury prevention protocols",
          "Direct WhatsApp coach communication & accountability"
        ],
        trainerSpecialty: "Master Strength & Conditioning Coach"
      }
    ]
  },
  {
    id: "studio-classes",
    name: "Studio & Group Classes",
    subtitle: "Indoor Cycling, High-Energy Dance & Mind-Body Flow",
    description: "Immerse yourself in high-energy boutique group fitness led by Amritsar's top certified instructors with concert sound, dynamic lighting, and electric community motivation.",
    programs: [
      {
        id: "indoor-cycling",
        name: "Indoor Cycling",
        tagline: "Rhythm Spin & High-Calorie Burn",
        description: "Pulsating cardiovascular workout on magnetic resistance spin bikes set to high-tempo playlists with simulated hill climbs, sprint intervals, and endurance surges.",
        duration: "45 mins",
        intensity: "High",
        category: "studio-classes",
        features: [
          "State-of-the-art magnetic resistance studio bikes",
          "Rhythm-synchronized interval sprints & cadence climbs",
          "Immersive acoustic sound & mood club lighting",
          "Torch 500–750 calories per high-octane session"
        ],
        trainerSpecialty: "Certified Indoor Cycling Master"
      },
      {
        id: "dance-fitness-classes",
        name: "Dance Fitness Classes",
        tagline: "Rhythm Conditioning & Total-Body Sculpt",
        description: "Dynamic full-body workout fusing energetic choreography with bodyweight sculpting moves, core activation, and agility drills set to chart-topping hits.",
        duration: "50 mins",
        intensity: "Medium",
        category: "studio-classes",
        features: [
          "Non-stop full body cardio conditioning",
          "Glute, core, and posture targeted movement sequences",
          "Joyful community atmosphere with beginner variations",
          "Elevates cardiovascular health while toning muscle"
        ],
        trainerSpecialty: "Choreography & Cardio Lead"
      },
      {
        id: "zumba-classes",
        name: "Zumba",
        tagline: "Latin Beats & Global Dance Party",
        description: "An exhilarating dance fiesta blending Latin, pop, and Punjabi rhythms into an easy-to-follow cardio party that burns fat while keeping energy sky-high.",
        duration: "55 mins",
        intensity: "Medium",
        category: "studio-classes",
        features: [
          "Led by licensed Zumba® instructor",
          "High-energy international & Punjabi party playlists",
          "Boosts endorphins, coordination, and stamina",
          "All fitness backgrounds welcome"
        ],
        trainerSpecialty: "Licensed Zumba® Fitness Coach"
      },
      {
        id: "yoga-classes",
        name: "Yoga Classes",
        tagline: "Vinyasa Flow, Hatha & Deep Mobility",
        description: "Harmonize strength, mobility, and mindfulness through mindful breathwork (Pranayama), restorative flows, and deep spinal decompression in a serene ambient studio.",
        duration: "60 mins",
        intensity: "All Levels",
        category: "studio-classes",
        features: [
          "Morning Sunrise Vinyasa & Evening Restorative flows",
          "Deep joint mobility & hamstring flexibility drills",
          "Essential recovery balance for heavy lifters & runners",
          "Stress relief & guided relaxation meditation"
        ],
        trainerSpecialty: "Certified Ashtanga & Vinyasa Yogi"
      }
    ]
  },
  {
    id: "recovery-wellness",
    name: "Recovery & Wellness",
    subtitle: "Luxury Saunas, Steam & Post-Workout Regeneration",
    description: "Elevate your physical longevity and recharge tired muscles in our dedicated spa-grade recovery suite featuring Nordic saunas, therapeutic steam, and relaxation zones.",
    programs: [
      {
        id: "luxury-saunas",
        name: "Luxury Saunas",
        tagline: "Nordic Dry Heat & Detoxification",
        description: "Finely crafted cedarwood dry saunas engineered to elevate core body temperature, flush out toxins, accelerate cardiovascular conditioning, and induce deep muscular relaxation.",
        duration: "20–30 mins",
        intensity: "All Levels",
        category: "recovery-wellness",
        features: [
          "Premium Nordic timber dry sauna cabins",
          "Promotes deep tissue recovery & reduced muscle soreness (DOMS)",
          "Improves vascular health and cellular regeneration",
          "Private, serene post-workout sanctuary"
        ],
        trainerSpecialty: "Thermal Recovery Specialist"
      },
      {
        id: "steam-therapy",
        name: "Steam & Hydrotherapy",
        tagline: "Eucalyptus Infused Respiratory Healing",
        description: "High-humidity steam therapy rooms infused with calming botanicals to open respiratory passages, hydrate skin, and melt away joint stiffness after grueling training sessions.",
        duration: "20 mins",
        intensity: "All Levels",
        category: "recovery-wellness",
        features: [
          "Eucalyptus-infused therapeutic steam suites",
          "Relieves bronchial congestion & enhances lung capacity",
          "Promotes deep skin detoxification and relaxation",
          "High-pressure hot & cold hydro-showers"
        ],
        trainerSpecialty: "Spa & Hydrotherapy Lead"
      },
      {
        id: "post-workout-recovery",
        name: "Post-Workout Recovery",
        tagline: "Assisted Mobility & Percussive Therapy",
        description: "Dedicated recovery deck equipped with commercial percussive massage tools, high-density foam rollers, resistance stretch bands, and guided post-workout mobility routines.",
        duration: "30 mins",
        intensity: "All Levels",
        category: "recovery-wellness",
        features: [
          "Theragun® / percussive massage guns available",
          "Spacious stretch matting & assisted mobility guides",
          "Spinal decompression & hip flexor release stations",
          "Enhances next-day athletic performance"
        ],
        trainerSpecialty: "Mobility & Recovery Specialist"
      }
    ]
  }
];

export const WEEKLY_SCHEDULE: ClassScheduleItem[] = [
  {
    id: "sch-1",
    time: "06:30 AM – 07:15 AM",
    className: "Sunrise Indoor Cycling",
    trainer: "Coach Harpreet",
    category: "Cycling",
    intensity: "High",
    duration: "45 mins",
    days: ["Mon", "Wed", "Fri"]
  },
  {
    id: "sch-2",
    time: "07:30 AM – 08:30 AM",
    className: "CrossFit Power & Functional WOD",
    trainer: "Coach Gurkirat",
    category: "CrossFit",
    intensity: "Extreme",
    duration: "60 mins",
    days: ["Mon", "Tue", "Thu", "Sat"]
  },
  {
    id: "sch-3",
    time: "08:30 AM – 09:30 AM",
    className: "Zumba Dance Energy",
    trainer: "Simran Kaur",
    category: "Zumba",
    intensity: "Medium",
    duration: "60 mins",
    days: ["Mon", "Wed", "Fri"]
  },
  {
    id: "sch-4",
    time: "09:30 AM – 10:30 AM",
    className: "Vinyasa Mobility & Flow",
    trainer: "Yogi Manpreet",
    category: "Yoga",
    intensity: "All Levels",
    duration: "60 mins",
    days: ["Tue", "Thu", "Sat"]
  },
  {
    id: "sch-5",
    time: "05:15 PM – 06:00 PM",
    className: "Sunset Rhythm Spin",
    trainer: "Coach Harpreet",
    category: "Cycling",
    intensity: "High",
    duration: "45 mins",
    days: ["Mon", "Wed", "Fri"]
  },
  {
    id: "sch-6",
    time: "06:15 PM – 07:15 PM",
    className: "Evening Dance Fitness Class",
    trainer: "Simran Kaur",
    category: "Zumba",
    intensity: "Medium",
    duration: "60 mins",
    days: ["Mon", "Tue", "Thu", "Fri"]
  },
  {
    id: "sch-7",
    time: "07:30 PM – 08:30 PM",
    className: "Olympic Weight Training & Hypertrophy",
    trainer: "Coach Gurkirat",
    category: "Strength",
    intensity: "High",
    duration: "60 mins",
    days: ["Mon", "Wed", "Fri"]
  },
  {
    id: "sch-8",
    time: "08:30 PM – 09:15 PM",
    className: "Thermal Sauna & Recovery Session",
    trainer: "Wellness Concierge",
    category: "Recovery",
    intensity: "All Levels",
    duration: "45 mins",
    days: ["Tue", "Thu", "Sat"]
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "starter-1m",
    name: "1-Month Club Pass",
    tagline: "Flexible Luxury Experience",
    duration: "1 Month",
    price: "₹3,499",
    billingText: "Billed monthly · No long-term lock-in",
    popular: false,
    features: [
      "Full access to 5th floor panoramic gym floor",
      "Free weights, Olympic platforms & machine suite",
      "Unlimited group classes (Cycling, Zumba, Yoga)",
      "Access to luxury saunas & steam rooms",
      "Locker room & high-pressure shower facilities",
      "Complimentary high-speed Wi-Fi & valet parking"
    ]
  },
  {
    id: "popular-3m",
    name: "3-Month Elite Transformation",
    tagline: "Our Most Popular Membership",
    duration: "3 Months",
    price: "₹8,499",
    billingText: "Equivalent to ₹2,833 / month · Great Value",
    popular: true,
    features: [
      "All 1-Month privileges included",
      "Unlimited CrossFit turf & functional zone access",
      "Unlimited Indoor Cycling studio batches",
      "1x InBody body composition scan & fitness evaluation",
      "1x Complimentary 1-on-1 Elite Personal Training trial",
      "Unlimited luxury sauna & steam therapy sessions",
      "Dedicated member towel & locker service"
    ]
  },
  {
    id: "pro-6m",
    name: "6-Month Performance",
    tagline: "Sustained Athletic Conditioning",
    duration: "6 Months",
    price: "₹14,999",
    billingText: "Equivalent to ₹2,499 / month",
    popular: false,
    features: [
      "All 3-Month Elite benefits with priority class booking",
      "2x Comprehensive InBody biometric scans",
      "2x Private 1-on-1 Personal Training coaching sessions",
      "Personalized macro nutrition & workout split roadmap",
      "1x Free Guest Day Pass per month for friends or family",
      "15-day membership freeze option for business or travel"
    ]
  },
  {
    id: "vip-12m",
    name: "12-Month Annual Black Card",
    tagline: "Ultimate Luxury & Maximum Privileges",
    duration: "12 Months",
    price: "₹24,999",
    billingText: "Equivalent to ₹2,083 / month · Best Annual Value",
    popular: false,
    features: [
      "Unlimited 365-day access to all club facilities",
      "Unlimited Indoor Cycling, CrossFit, Zumba & Yoga classes",
      "Unlimited luxury sauna, steam & recovery amenities",
      "4x Quarterly InBody scans with progress reports",
      "4x 1-on-1 Personal Training sessions with master coach",
      "Complete custom sports diet plan & monthly adjustments",
      "30-day membership freeze allowance",
      "4x Free VIP Guest Day Passes included"
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Harpreet Singh Sandhu",
    role: "Verified Google Reviewer",
    rating: 5,
    date: "1 week ago",
    comment: "The Reps Fitness Premium is easily the most luxurious gym in Amritsar! Situated on the 5th floor in Ranjit Avenue with huge glass windows, world-class equipment, and a phenomenal CrossFit turf. Worth every rupee.",
    highlight: "Most luxurious gym in Amritsar",
    tag: "Luxury Facility & Ambience"
  },
  {
    id: "2",
    name: "Dr. Prabhjot Kaur",
    role: "Verified Google Reviewer",
    rating: 5,
    date: "2 weeks ago",
    comment: "Rated 4.9★ for a reason. The indoor cycling spin studio and evening Zumba sessions are super energetic. The luxury sauna and steam rooms after an intense workout make it feel like a 5-star hotel spa.",
    highlight: "Luxury sauna & indoor cycling",
    tag: "Group Classes & Spa"
  },
  {
    id: "3",
    name: "Manav Arora",
    role: "Verified Google Reviewer",
    rating: 5,
    date: "3 weeks ago",
    comment: "Serious lifter's paradise on D-Block Ranjit Avenue. Dumbbells up to 50kg, multiple Olympic power cages, calibrated bumper plates, and coaches who actually correct your deadlift form. Outstanding hygiene.",
    highlight: "Heavy iron & expert coaches",
    tag: "Strength & Conditioning"
  },
  {
    id: "4",
    name: "Gurleen Chahal",
    role: "Verified Google Reviewer",
    rating: 5,
    date: "1 month ago",
    comment: "I took the 1-Day Free Pass via WhatsApp and signed up for the 12-month membership the very next day. Clean locker rooms, eucalyptus steam, and supportive trainers who respect female members.",
    highlight: "Safe, pristine & friendly",
    tag: "Hygiene & Safety"
  },
  {
    id: "5",
    name: "Vikramjit Singh",
    role: "Verified Google Reviewer",
    rating: 5,
    date: "1 month ago",
    comment: "The 5th floor view over Ranjit Avenue during morning workouts is unmatched in Punjab. Personal training with Coach Gurkirat helped me shed 7kg while building noticeable strength in 8 weeks.",
    highlight: "5th floor views & real results",
    tag: "Personal Training"
  },
  {
    id: "6",
    name: "Jasleen Grover",
    role: "Verified Google Reviewer",
    rating: 5,
    date: "2 months ago",
    comment: "The yoga classes and post-workout recovery deck are game-changers for my mental stress and posture. Professional front desk, seamless WhatsApp support, and hassle-free parking right in Ranjit Avenue.",
    highlight: "Yoga & seamless WhatsApp booking",
    tag: "Wellness & Recovery"
  }
];

export const GYM_FAQS = [
  {
    q: "How do I book my Free Day Pass at The Reps Fitness Premium?",
    a: "Booking your Free Day Pass is fast and effortless! Simply tap any 'Book Free Day Pass' button on this page or send a message directly on WhatsApp to +91 9049291492. Our front desk concierge will confirm your date, reserve your guest locker, and welcome you on the 5th floor."
  },
  {
    q: "Where is The Reps Fitness Premium located in Amritsar?",
    a: "We are located at SCO 52-53, 5th Floor, Gumtala Sub Urban, D-Block, Ranjit Avenue, Amritsar, Punjab - 143001. We are in the prime commercial hub of Ranjit Avenue with high-speed elevator access to the 5th floor and ample street & basement parking."
  },
  {
    q: "What are the club operating hours?",
    a: "The Reps Fitness Premium is open 7 days a week: Monday to Saturday from 6:00 AM to 10:00 PM, and Sunday from 8:00 AM to 2:00 PM."
  },
  {
    q: "Are the Luxury Saunas and Steam rooms included in the membership?",
    a: "Yes! Access to our handcrafted Nordic dry saunas and eucalyptus-infused steam therapy suites is included with our memberships, providing an elite recovery and spa-like experience after your workout."
  },
  {
    q: "What group fitness classes are included?",
    a: "Members enjoy full access to our comprehensive schedule: Indoor Cycling (Spin), CrossFit functional conditioning, Dance Fitness classes, Zumba, and restorative Yoga classes led by certified master instructors."
  },
  {
    q: "Do you offer 1-on-1 Personal Training?",
    a: "Yes! Our certified master strength coaches provide bespoke 1-on-1 coaching, periodic InBody body composition scans, customized workout splits, and nutrition guidance tailored to your fitness objectives."
  }
];

export const FACILITY_HIGHLIGHTS = [
  {
    title: "5th Floor Panoramic Floor",
    desc: "Breathtaking natural daylight and expansive city views of Ranjit Avenue from our high-ceiling workout arena.",
    icon: "Building"
  },
  {
    title: "Heavy Iron & Olympic Platforms",
    desc: "Commercial dumbbells up to 50kg, multiple power cages, deadlift platforms, and competition-spec barbells.",
    icon: "Dumbbell"
  },
  {
    title: "Indoor Cycling Theater",
    desc: "Boutique spin studio featuring magnetic resistance bikes, concert acoustic audio, and synchronized cadence lighting.",
    icon: "Flame"
  },
  {
    title: "Functional CrossFit Turf",
    desc: "Indoor sprint turf track, prowler sleds, Concept2 rowers, assault bikes, battle ropes, and kettlebells.",
    icon: "Activity"
  },
  {
    title: "Luxury Saunas & Steam Suites",
    desc: "Nordic cedarwood dry heat saunas and eucalyptus steam rooms for deep post-workout muscular recovery and detox.",
    icon: "Sparkles"
  },
  {
    title: "Certified Master Coaches",
    desc: "Kinesiology-certified personal trainers dedicated to movement mechanics, progressive overload, and body transformations.",
    icon: "Award"
  }
];
