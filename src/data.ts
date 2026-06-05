import { Branch, Trainer, FitnessClass, PricingPlan, Testimonial, FAQItem, GalleryItem } from './types';

import imgAerobics from './assets/images/image_one_1780593795752.png';
import imgCyberCardio from './assets/images/cyber_cardio_1780593825977.png';
import imgTrampoline from './assets/images/aero_trampoline_1780593846640.png';
import imgTreadmillMatrix from './assets/images/treadmill_matrix_1780593860654.png';
import imgNileCardio from './assets/images/nile_cardio_1780593877100.png';
import imgHeavyStack from './assets/images/heavy_stack_1780593895591.png';
import imgJacuzziSpa from './assets/images/jacuzzi_spa_1780593912331.png';
import imgAthleticComplex from './assets/images/athletic_complex_1780593927723.png';
import imgDumbbellSet from './assets/images/dumbbell_set_1780593943915.png';
import imgLegPress from './assets/images/leg_press_1780593959602.png';
import imgStrengthPavilion from './assets/images/strength_pavilion_1780593974369.png';

export const BRANCHES_DATA: Branch[] = [
  {
    id: 'b1',
    name: 'H2O New Cairo - Waterway',
    city: 'Cairo',
    district: 'New Cairo',
    address: 'The Waterway Compound, North Investors Area, New Cairo',
    phone: '+20 102 234 5678',
    hours: '24/7 Premium Access',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
    amenities: ['Olympic Pool', 'CrossFit Arena', 'Physiotherapy Suite', 'Steam & Sauna', 'Nutritional Cafe', 'Valet Parking'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.241517543265!2d31.488344576315895!3d30.029967774931885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822beeb691929%3A0xe104cf4c7d0d6fc4!2sWaterway%20Drive-In!5e0!3m2!1sen!2seg!4v1717511456000!5m2!1sen!2seg',
    isHotlineBranch: true
  },
  {
    id: 'b2',
    name: 'H2O Heliopolis - Almaza',
    city: 'Cairo',
    district: 'Heliopolis',
    address: '14 Thawra St, Next to Almaza City Centre, Heliopolis',
    phone: '+20 102 234 5679',
    hours: '05:00 AM - Midnight',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    amenities: ['MMA Cage', 'Spinning Theatre', 'Recovery Lounge', 'Cardio Deck', 'Kid Zone', 'Luxury Lockers'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.6545199672727!2d31.3533215763189!3d30.089921574901614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e2f9d6ae15f%3A0xb3debb9636ef7f53!2sAlmaza%20City%20Centre!5e0!3m2!1sen!2seg!4v1717511457000!5m2!1sen!2seg'
  },
  {
    id: 'b3',
    name: 'H2O Zamalek Island',
    city: 'Cairo',
    district: 'Zamalek',
    address: '6 Gezira Club St, Zamalek (Nile View Boulevard)',
    phone: '+20 102 234 5680',
    hours: '24/7 Access',
    imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800',
    amenities: ['Panoramic Nile View', 'Outdoor Workout Terrace', 'Juice Clinic', 'Steam Chambers', 'Personal Coaching'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.3082536830573!2d31.218321576317075!3d30.05691157491795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840effb46f5df%3A0x7ee9d34346adcb77!2sZamalek%20Island!5e0!3m2!1sen!2seg!4v1717511458000!5m2!1sen!2seg'
  },
  {
    id: 'b4',
    name: 'H2O Sheikh Zayed - Arkan',
    city: 'Giza',
    district: 'Sheikh Zayed',
    address: 'Arkan Plaza, Building 4, El Sheikh Zayed, Giza',
    phone: '+20 102 234 5681',
    hours: '05:00 AM - Midnight',
    imageUrl: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800',
    amenities: ['Altitude Training Room', 'Cryotherapy Chamber', 'Pilates Reformer Studio', 'Protein Bar', 'Sauna'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.512341257452!2d30.992231276315578!3d30.022131274935293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458ba6d573d42e7%3A0xc39116e75b9f71c!2sArkan%20Plaza!5e0!3m2!1sen!2seg!4v1717511459000!5m2!1sen!2seg'
  },
  {
    id: 'b5',
    name: 'H2O Maadi - Degla',
    city: 'Cairo',
    district: 'Maadi',
    address: 'Road 233, Sector 2, Degla, Maadi',
    phone: '+20 102 234 5682',
    hours: '24/7 Access',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
    amenities: ['Heavy Weight Barn', 'Outdoor Calisthenics', 'Massage Therapy', 'Express Lockers', 'Yoga Shala'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.4011241572917!2d31.278321576313465!3d29.96783127490458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458380e22ef72f9%3A0x66be7cd2fa281b37!2sDegla%2C%20Maadi!5e0!3m2!1sen!2seg!4v1717511460000!5m2!1sen!2seg'
  },
  {
    id: 'b6',
    name: 'H2O Semouha Premium',
    city: 'Alexandrina',
    district: 'Semouha',
    address: 'Albert Al Awal St, Semouha, Alexandria',
    phone: '+20 102 234 5683',
    hours: '06:00 AM - 11:00 PM',
    imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?auto=format&fit=crop&q=80&w=800',
    amenities: ['Heated Recovery Pool', 'Olympic Lifting Platforms', 'TRX Suspension Zone', 'Acai Cafe', 'Sauna'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.50151125745!2d29.953321576364426!3d31.20692157512165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4f2bbd63eff%3A0xb3debb9636ef7f53!2sSemouha%2C%20Alexandria!5e0!3m2!1sen!2seg!4v1717511461000!5m2!1sen!2seg'
  },
  {
    id: 'b7',
    name: 'H2O Kafr Abdo Heritage',
    city: 'Alexandrina',
    district: 'Kafr Abdo',
    address: 'Meno St, Kafr Abdo district, Alexandria',
    phone: '+20 102 234 5684',
    hours: '06:00 AM - 11:00 PM',
    imageUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
    amenities: ['Cozy Boutique Area', 'Pilates reformer Lounge', 'Personal training Hub', 'Sauna room', 'Juice station'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.308253683057!2d29.948321576364654!3d31.21191157512015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4faeeb63eff%3A0xb3debb9636ef7f53!2sKafr%20Abdou!5e0!3m2!1sen!2seg!4v1717511462000!5m2!1sen!2seg'
  },
  {
    id: 'b8',
    name: 'H2O Mansoura City',
    city: 'Delta & Coast',
    district: 'Mansoura',
    address: 'El-Gayeish St, Facing Mansoura University Portal, Mansoura',
    phone: '+20 102 234 5685',
    hours: '06:00 AM - 11:00 PM',
    imageUrl: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    amenities: ['Powerlifting Pit', 'Pro-Shop Accessories', 'Diet Plan Clinic', 'Showers & Steam', 'Functional Turf Grid'],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.51341257451!2d31.358231276357453!3d31.042131275035293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db0df6ae15f%3A0xb3debb9636ef7f53!2sMansoura%20University!5e0!3m2!1sen!2seg!4v1717511463000!5m2!1sen!2seg'
  }
];

export const TRAINERS_DATA: Trainer[] = [
  {
    id: 't1',
    name: 'Captain Aly Mazhar',
    role: 'Elite Head Trainer & Strength Architect',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=600',
    specializations: ['Pro Athlete Conditioning', 'High-Intensity Strength Training', 'Bio-Mechanic Restructuring'],
    experience: '12 Years',
    certifications: ['NASM Master Trainer', 'ISSA Sports Conditioning', 'UEFA Physical Coach'],
    bio: 'Aly Mazhar has designed physical blueprints for Egypt’s finest athletes. His system focuses on neurological adaptation, safety, and sustainable horsepower.'
  },
  {
    id: 't2',
    name: 'Coach Shady Sherif',
    role: 'CrossFit Specialist & Cardio Coordinator',
    image: 'https://images.unsplash.com/photo-1605013524856-59f8a846352c?auto=format&fit=crop&q=80&w=600',
    specializations: ['CrossFit Games Coach', 'Olympic Weightlifting', 'Functional Endurance'],
    experience: '9 Years',
    certifications: ['CrossFit Level 3', 'USAW Sports Performance Coach', 'FMS Level 2'],
    bio: 'Shady is known for building high-energy mental resilience. He thrives in helping individuals break personal barriers in high-intensity stamina sessions.'
  },
  {
    id: 't3',
    name: 'Nour El-Tantawy',
    role: 'Senior Yoga Master & Movement Analyst',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600',
    specializations: ['Vinyasa flow', 'Mobility Optimization', 'Breath Mastery & Wellness'],
    experience: '8 Years',
    certifications: ['RYT 500 Yoga Alliance', 'FMS Mobility Therapist', 'Pranayama Expert'],
    bio: 'Nour provides structural corrections that unite breathing rhythms with extreme physical control. Her classes restore postural wellness after heavy weightlifting.'
  },
  {
    id: 't4',
    name: 'Sherif Elwi',
    role: 'Hypertrophy & Bodybuilding Coach',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
    specializations: ['Hypertrophy Blueprinting', 'Contest Prep Dietetics', 'Injury-Free Heavy Lifting'],
    experience: '10 Years',
    certifications: ['IFBB Pro Card Coach', 'ISSA Sports Nutrition Specialist', 'NASM-CPT'],
    bio: 'Sherif specialized in custom body recomposition. He blends solid nutrition charts with precision load progression to sculpt classical aesthetics.'
  },
  {
    id: 't5',
    name: 'Farida Hegazi',
    role: 'HIIT & Group Fitness Director',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600',
    specializations: ['High Energy Zumba & Aerobics', 'Tabata & HIIT Circuit Styling', 'Pre & Post-Natal Safe Training'],
    experience: '7 Years',
    certifications: ['AFAA Group Exercise Leader', 'Zumba® Licensed Instructor', 'CPR/AED Qualified'],
    bio: 'Farida turns cardio routines into epic, beat-matching community powerhouses. Her relentless drive turns HIIT sessions into a highly addictive routine.'
  }
];

export const CLASSES_DATA: FitnessClass[] = [
  {
    id: 'c1',
    name: 'Zumba Core Beat',
    category: 'Zumba',
    description: 'An explosive, highly energizing dance aerobic block combining fast Latin and international rhythms. Perfect for cardio conditioning and endorphin release.',
    duration: '50 Mins',
    intensity: 'Medium',
    image: imgAerobics,
    fallbackUrl: 'https://images.unsplash.com/photo-1524594152303-9fd13543dd6e?auto=format&fit=crop&q=80&w=600',
    benefits: ['Full-body cardiovascular burn', 'Coordination & agile rhythm enhancement', 'Stress release & dynamic mood elevate'],
    schedule: [
      { day: 'Mo', time: '07:00 PM', trainer: 'Farida Hegazi' },
      { day: 'We', time: '07:00 PM', trainer: 'Farida Hegazi' },
      { day: 'Fr', time: '04:00 PM', trainer: 'Farida Hegazi' }
    ]
  },
  {
    id: 'c2',
    name: 'Belly Dance Sculpt',
    category: 'Belly Dance',
    description: 'Celebrate culture and movement in our specialized aesthetic belly dance class. Designed to lock key deep core sections, improve pelvic mobility, and tone lower-body lines.',
    duration: '55 Mins',
    intensity: 'Medium',
    image: imgCyberCardio,
    fallbackUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600',
    benefits: ['Deep abdominal isolate & core sculpting', 'Pelvic floor & lower-back flexibility', 'Elegant posture and musical alignment'],
    schedule: [
      { day: 'Su', time: '05:00 PM', trainer: 'Nour El-Tantawy' },
      { day: 'Tu', time: '06:00 PM', trainer: 'Nour El-Tantawy' }
    ]
  },
  {
    id: 'c3',
    name: 'Jumping Aero-Trampoline',
    category: 'Jumping',
    description: 'High-intensity, low-impact trampoline fitness workshop. Propels your cardiovascular stamina while protecting joints in a high-octane gravity-defying workout.',
    duration: '45 Mins',
    intensity: 'High',
    image: imgTrampoline,
    fallbackUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600',
    benefits: ['Extreme lymphatic system stimulation', 'Over 800+ calories burned per session', 'Exceptional lower-leg kinetic strength'],
    schedule: [
      { day: 'Su', time: '11:00 AM', trainer: 'Farida Hegazi' },
      { day: 'Tu', time: '08:00 PM', trainer: 'Farida Hegazi' },
      { day: 'Th', time: '06:00 PM', trainer: 'Coach Shady Sherif' }
    ]
  },
  {
    id: 'c4',
    name: 'Championship Kick Boxing',
    category: 'Kick Boxing',
    description: 'Unleash direct physical power on premium punching bags. Master clean jab-cross sequences, powerful roundhouse kicks, and elite footwork conditioning.',
    duration: '60 Mins',
    intensity: 'Elite',
    image: imgDumbbellSet,
    fallbackUrl: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=600',
    benefits: ['Explosive shoulder, chest, and hip output', 'Extreme cardiovascular endurance', 'Sharpened reflex and tactical self-defense'],
    schedule: [
      { day: 'Mon', time: '08:00 PM', trainer: 'Captain Aly Mazhar' },
      { day: 'We', time: '08:00 PM', trainer: 'Captain Aly Mazhar' },
      { day: 'Sa', time: '01:00 PM', trainer: 'Coach Shady Sherif' }
    ]
  },
  {
    id: 'c5',
    name: 'ABS & Core Destruction',
    category: 'ABS',
    description: 'A laser-focused isometric and isotonic core onslaught targeting the rectus abdominis, obliques, and deep transverse stabilizers for structural strength.',
    duration: '30 Mins',
    intensity: 'High',
    image: imgLegPress,
    fallbackUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
    benefits: ['Six-pack definition & core hardening', 'Substantial reduction in lower back strain', 'Enhanced loaded functional movement transfer'],
    schedule: [
      { day: 'Mo', time: '06:00 PM', trainer: 'Sherif Elwi' },
      { day: 'We', time: '06:00 PM', trainer: 'Sherif Elwi' },
      { day: 'Fr', time: '05:00 PM', trainer: 'Sherif Elwi' }
    ]
  },
  {
    id: 'c6',
    name: 'Elite Zen Vinyasa Yoga',
    category: 'Yoga',
    description: 'A harmonious connection of mindful fluid transitions, joint-alignment, postural flexibility, and pranayama breath control to restore somatic peace.',
    duration: '75 Mins',
    intensity: 'Beginner',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
    fallbackUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
    benefits: ['Spinal decompression & postural alignment', 'Parasympathetic calming of nervous system', 'Deep stabilizer core strength enhancement'],
    schedule: [
      { day: 'Mo', time: '05:00 PM', trainer: 'Nour El-Tantawy' },
      { day: 'We', time: '08:00 AM', trainer: 'Nour El-Tantawy' },
      { day: 'Sa', time: '04:00 PM', trainer: 'Nour El-Tantawy' }
    ]
  },
  {
    id: 'c7',
    name: 'Heavy Squatting & Glutes Clinic',
    category: 'Squatting',
    description: 'Elevate lower-body horsepower. Focuses on squat mechanic blueprints under direct supervision, building explosive quad, hamstring, and glute power.',
    duration: '60 Mins',
    intensity: 'High',
    image: imgHeavyStack,
    fallbackUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=600',
    benefits: ['Massive lower body hypertrophy & quad density', 'Improved hip and ankle kinetic mobility', 'Optimized CNS response for heavy load lifting'],
    schedule: [
      { day: 'Su', time: '06:00 PM', trainer: 'Sherif Elwi' },
      { day: 'Tu', time: '08:00 AM', trainer: 'Sherif Elwi' },
      { day: 'Th', time: '07:00 PM', trainer: 'Captain Aly Mazhar' }
    ]
  },
  {
    id: 'c8',
    name: 'Metabolic Cardio Burn',
    category: 'Cardio',
    description: 'A intense hybrid cardio workout blending sled pushes, rowing machines, and assault bikes to challenge aerobic and anaerobic energy limits.',
    duration: '45 Mins',
    intensity: 'Elite',
    image: imgTreadmillMatrix,
    fallbackUrl: 'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?auto=format&fit=crop&q=80&w=600',
    benefits: ['Exceptional lactic threshold elevation', 'Maximized post-exercise oxygen consumption (EPOC)', 'Optimized cardiovascular heart stroke volume'],
    schedule: [
      { day: 'Mo', time: '10:00 AM', trainer: 'Coach Shady Sherif' },
      { day: 'We', time: '05:00 PM', trainer: 'Coach Shady Sherif' },
      { day: 'Sa', time: '11:00 AM', trainer: 'Farida Hegazi' }
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'p1',
    name: 'Monthly Hydro Start',
    price: 1500,
    currency: 'EGP',
    billingPeriod: 'month',
    features: [
      'Access to any 2 chosen home branches',
      'Free body composition analysis (InBody)',
      'Cardio decks & free weight arena access',
      'Locker room & steam/sauna access',
      '3 trial sessions with personal trainer'
    ],
    unavailableFeatures: [
      'Multi-branch global hopping (Egypt-wide)',
      'Invitational VIP guest passes',
      'Outdoor Olympic Pool sessions',
      'Dedicated cryogenic treatments'
    ]
  },
  {
    id: 'p2',
    name: '3-Month Hydro Boost',
    price: 3800,
    currency: 'EGP',
    billingPeriod: '3 months',
    badge: 'Popular Pacing',
    features: [
      'Access to any 5 regional H2O branches',
      'Bi-weekly InBody diagnostic charts',
      'All general group fitness classes included',
      'Locker room & SPA access',
      '5 personal training introduction classes',
      '2 free VIP Guest passes'
    ],
    unavailableFeatures: [
      'Egypt-wide unrestricted access (25+ branches)',
      'Free Nutritionist personalized program',
      'Cryotherapy discounts'
    ]
  },
  {
    id: 'p3',
    name: '6-Month Core Blue',
    price: 6400,
    currency: 'EGP',
    billingPeriod: '6 months',
    badge: 'Best Value',
    isPopular: true,
    features: [
      'Unlimited access to ALL 25+ branches Egypt-wide',
      'Personalized monthly nutritional schedules',
      'All group classes + 2 CrossFit specialized camps',
      'Unlimited SPA, steam & recovery suite access',
      '8 personal training diagnostic sessions',
      '10 VIP Guest passes',
      '1 Month suspension option (Freeze)'
    ],
    unavailableFeatures: [
      'Dedicated premium coach assignment',
      'Free H2O VIP kit (Sports bag & shaker)'
    ]
  },
  {
    id: 'p4',
    name: 'Annual Olympic Elite',
    price: 9900,
    currency: 'EGP',
    billingPeriod: 'year',
    badge: 'Ultimate Athlete',
    features: [
      'Global H2O VIP All-Access (25+ Branches & International)',
      'Unlimited premium suspension freeze (3 Months total)',
      'Personalized premium nutritionist & body remodeling blueprint',
      'All CrossFit/HIIT/Zumba sessions fully unlimited',
      '15 One-on-one personal coaching target milestones',
      '24 Complimentary VIP guest cards',
      'Exclusive H2O Elite athletes kit (Free brand merch)',
      '15% discount at H2O Protein Bars & cafes'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'r1',
    name: 'Karim Abdel-Aziz',
    role: 'Managing Director & Triathlete',
    comment: 'The premium aesthetic, elite heavy weight arenas, and professional coaching completely elevated my standards. H2O New Cairo is by far Egypt’s most sophisticated sports compound.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    branch: 'New Cairo - Waterway'
  },
  {
    id: 'r2',
    name: 'Farida El-Gindi',
    role: 'Nutritionist & Fitness Influencer',
    comment: 'Heliopolis branch is incredible! The equipment is top tier and there is zero overcrowding. The steam recovery chamber operates like a high-end medical spa.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    branch: 'Heliopolis - Almaza'
  },
  {
    id: 'r3',
    name: 'Omar Sherif',
    role: 'Competitive Powerlifter',
    comment: 'Most commercial gyms complain when you slam heavy plates or lift heavy, but H2O has designated professional lifting platforms that are absolute perfection. Semouha branch is majestic!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    branch: 'Semouha Premium'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  { 
    id: 'g1', 
    title: 'Ladies Only - Reebok step aerobics studio', 
    category: 'Workouts', 
    imageUrl: imgAerobics,
    fallbackUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'g2', 
    title: 'Ladies Only - Neon cyber cardio zone', 
    category: 'Equipment', 
    imageUrl: imgCyberCardio,
    fallbackUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'g3', 
    title: 'Aero-Trampoline jumping fitness room', 
    category: 'Workouts', 
    imageUrl: imgTrampoline,
    fallbackUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'g4', 
    title: 'Consolidated treadmill matrix and terminal screens', 
    category: 'Equipment', 
    imageUrl: imgTreadmillMatrix,
    fallbackUrl: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'g5', 
    title: 'Scenic waterfront cardio facing Nile view', 
    category: 'Branches', 
    imageUrl: imgNileCardio,
    fallbackUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'g6', 
    title: 'Elite selectorized brick heavy stack station', 
    category: 'Equipment', 
    imageUrl: imgHeavyStack,
    fallbackUrl: 'https://images.unsplash.com/photo-1623874514711-0f321325f318?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'g7', 
    title: 'H2O Premium recovery Jacuzzi spa & hydro pool', 
    category: 'Branches', 
    imageUrl: imgJacuzziSpa,
    fallbackUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'g8', 
    title: 'Multi-level integrated elite athletic complex', 
    category: 'Branches', 
    imageUrl: imgAthleticComplex,
    fallbackUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'g9', 
    title: 'Heavy pro dumbbell set and industrial grid casing', 
    category: 'Equipment', 
    imageUrl: imgDumbbellSet,
    fallbackUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'g10', 
    title: 'Loaded plate leg press and motivational athletic quote section', 
    category: 'Workouts', 
    imageUrl: imgLegPress,
    fallbackUrl: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: 'g11', 
    title: 'Selectorized weight resistance machine pavilion', 
    category: 'Equipment', 
    imageUrl: imgStrengthPavilion,
    fallbackUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'f1',
    question: 'How do I access 25+ branches Egypt-wide?',
    answer: 'With our 6-Month Core Blue or Annual Olympic Elite memberships, you get unrestricted, cashless entry to every single H2O Gym branch in Egypt using our premium mobile app. Just scan your bar code at the gate.',
    category: 'Branches'
  },
  {
    id: 'f2',
    question: 'Can I freeze or suspend my membership?',
    answer: 'Yes! The 6-Month subscription allows up to 1 month of freezer flexibility, and our Annual Olympic subscription gives you up to 3 months of freeze allowance. Suspensions can be processed instantly in seconds via the membership portal or by contacting H2O WhatsApp.',
    category: 'Membership'
  },
  {
    id: 'f3',
    question: 'Are group classes included in the membership pricing?',
    answer: 'Absolutely. For our multi-month memberships, all general group fitness classes (HIIT, Cardio, Zumba, Yoga) are 100% free with unlimited booking. Ultra-elite specialty camps (such as exclusive athletic CrossFit invitationals) have tailored pathways but offer significant member discounts.',
    category: 'Classes'
  },
  {
    id: 'f4',
    question: 'What is the hotline number for corporate bookings or queries?',
    answer: 'Our main consolidated Egypt Hotline is 19420 (available 24/7 for support, branch directions, and membership setup). You can also hit the floating WhatsApp button to chat directly with our client success agents.',
    category: 'General'
  },
  {
    id: 'f5',
    question: 'Are the swimming pools available in all branches?',
    answer: 'Swimming pool arenas exist in major premium complexes including New Cairo, Zamalek Island, and Semouha. All members holding Egypt-wide multi-access cards can make bookings for lane swim slots, recovery therapies, and aquatics.',
    category: 'Branches'
  }
];
