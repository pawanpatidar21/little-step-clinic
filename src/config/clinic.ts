/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  CENTRALIZED CLINIC CONFIGURATION                           ║
 * ║  Update ANY data HERE — changes reflect everywhere           ║
 * ║  on the website automatically.                               ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

// ─────────────────────────────────────────────
// 1. CLINIC BRANDING
// ─────────────────────────────────────────────
export const CLINIC = {
  name: 'Little Steps Child Care Clinic',
  shortName: 'Little Steps',
  tagline: 'Dedicating To Kids Care...',
  registration: 'MP-17283',
} as const

// ─────────────────────────────────────────────
// 2. DOCTOR PROFILE
// ─────────────────────────────────────────────
export const DOCTOR = {
  name: 'Dr. Rajat Patidar',
  nameHi: 'डॉ. रजत पाटीदार',
  title: 'Consulting Pediatrician & Neonatologist',
  titleHi: 'नवजात शिशु एवं बाल रोग विशेषज्ञ (जन्म से लेकर 18 वर्ष तक)',
  titleHiShort: 'नवजात शिशु एवं बाल रोग विशेषज्ञ',
  bio: 'Newborn and Child Disease Specialist (from birth to 18 years)',
  photo: '/images/dr-rajat-patidar.png',
  qualifications: [
    'MBBS',
    'MD (PEDIATRIC MEDICINE)',
    'NALS (Neonatal Advanced Life Support)',
    'PALS (Pediatric Advanced Life Support)',
    'PGPN (Post Graduate Program in Pediatric Nutrition — Boston University)',
  ],
  experience: [
    'Former Resident: Eggs Hospital, Bhopal',
    'Shri Aurobindo Hospital, Indore (M.P.)',
    'AIIMS Hospital, Bhopal',
    'District Hospital, Mandsaur',
  ],
} as const

// ─────────────────────────────────────────────
// 3. CONTACT INFORMATION
// ─────────────────────────────────────────────
export const PHONE = {
  landline: '07422-357700',
  landlineHref: 'tel:07422357700',
  mobile1: '8770264384',
  mobile1Href: 'tel:+918770264384',
  mobile2: '9713101626',
  mobile2Href: 'tel:+919713101626',
  whatsapp: '918770264384',
  whatsappLink: 'https://wa.me/918770264384?text=Hello%20Dr.%20Rajat%2C%20I%20would%20like%20to%20book%20an%20appointment.',
} as const

export const ADDRESS = {
  en: 'Pashupatinath Medical, Gol Chauraha, Mandsaur (M.P.)',
  hi: 'पशुपतिनाथ मेडिकल, गोल चौराहा, मन्दसौर (म.प्र.)',
  mapsLink: 'https://www.google.com/maps/search/Pashupatinath+Medical+Gol+Chauraha+Mandsaur+Madhya+Pradesh',
} as const

export const EMAIL = 'rajatpatel2@gmail.com'

// ─────────────────────────────────────────────
// 4. OPD TIMINGS
// ─────────────────────────────────────────────
export const OPD_TIMINGS = {
  morning: {
    label: 'Morning OPD',
    labelHi: 'सुबह का ओपीडी',
    time: '10:30 AM – 3:30 PM',
  },
  evening: {
    label: 'Evening OPD',
    labelHi: 'शाम का ओपीडी',
    time: '6:30 PM – 8:30 PM',
  },
  emergency: {
    label: 'Emergency',
    labelHi: 'आपातकालीन सेवा',
    time: '24/7 On Call',
  },
} as const

// ─────────────────────────────────────────────
// 5. TESTIMONIALS
// ─────────────────────────────────────────────
export interface Testimonial {
  id: number
  name: string
  nameHi?: string
  relation: string
  childAge: string
  rating: number
  text: string
  textHi?: string
  highlight?: string
  avatar: string
  color: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    nameHi: 'प्रिया शर्मा',
    relation: 'Mother',
    childAge: '8 months',
    rating: 5,
    text: 'Dr. Rajat is extremely patient and thorough. He explained every vaccination in detail and always makes my baby feel comfortable. The clinic is very clean and the staff is so friendly!',
    textHi: 'डॉ. रजत बहुत ही धैर्यवान और विस्तृत हैं। उन्होंने हर टीके के बारे में विस्तार से बताया। क्लिनिक बहुत साफ है और स्टाफ बहुत अच्छा है!',
    highlight: 'Extremely patient and thorough',
    avatar: '👩',
    color: 'from-pink-400 to-rose-500',
  },
  {
    id: 2,
    name: 'Rahul Patel',
    nameHi: 'राहुल पटेल',
    relation: 'Father',
    childAge: '2 years',
    rating: 5,
    text: 'We have been visiting Little Steps since our son was born. Dr. Patidar is very knowledgeable about child nutrition and guided us perfectly on breastfeeding and baby food introduction. Highly recommended!',
    textHi: 'हम अपने बेटे के जन्म से ही लिटिल स्टेप्स आ रहे हैं। डॉ. पाटीदार बच्चों के पोषण के बारे में बहुत जानकार हैं।',
    highlight: 'Very knowledgeable about child nutrition',
    avatar: '👨',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    id: 3,
    name: 'Sunita Verma',
    nameHi: 'सुनीता वर्मा',
    relation: 'Mother',
    childAge: '1 year',
    rating: 5,
    text: 'My daughter had a high fever at night and Dr. Rajat was available on emergency call. He guided us step by step over the phone and saw us first thing in the morning. We feel very safe with him as our pediatrician.',
    textHi: 'मेरी बेटी को रात में तेज बुखार था और डॉ. रजत आपातकालीन कॉल पर उपलब्ध थे। हम उनसे बहुत सुरक्षित महसूस करते हैं।',
    highlight: 'Available on emergency — feels very safe',
    avatar: '👩',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    id: 4,
    name: 'Amit Joshi',
    nameHi: 'अमित जोशी',
    relation: 'Father',
    childAge: '5 years',
    rating: 5,
    text: 'The growth chart tracking feature on the website is so helpful! Dr. Patidar monitors our child\'s development milestones at every visit. His PGPN nutrition qualification from Boston University really shows in his advice.',
    highlight: 'Monitors development milestones perfectly',
    avatar: '👨',
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 5,
    name: 'Kavita Singh',
    nameHi: 'कविता सिंह',
    relation: 'Mother',
    childAge: '6 months',
    rating: 5,
    text: 'As a first-time mom, I had so many questions about breastfeeding and my baby\'s health. Dr. Rajat never rushed and answered everything patiently. The OPD timing is very convenient for working parents.',
    textHi: 'पहली बार माँ बनने पर मेरे बहुत सारे सवाल थे। डॉ. रजत ने कभी जल्दबाजी नहीं की और सब कुछ धैर्य से बताया।',
    highlight: 'Never rushes — answers everything patiently',
    avatar: '👩',
    color: 'from-purple-400 to-violet-500',
  },
  {
    id: 6,
    name: 'Deepak Yadav',
    nameHi: 'दीपक यादव',
    relation: 'Father',
    childAge: '3 years',
    rating: 5,
    text: 'Dr. Patidar diagnosed my son\'s allergy issue that two other doctors missed. His experience at AIIMS and Aurobindo Hospital really makes a difference. Best pediatrician in Mandsaur without a doubt.',
    highlight: 'Best pediatrician in Mandsaur',
    avatar: '👨',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 7,
    name: 'Meena Agarwal',
    nameHi: 'मीना अग्रवाल',
    relation: 'Grandmother',
    childAge: '4 months',
    rating: 5,
    text: 'I bring my grandson here. The clinic atmosphere is very child-friendly and welcoming. Dr. Rajat treats every child like his own. He even follows up on WhatsApp after visits to check on the baby.',
    textHi: 'मैं अपने पोते को यहाँ लाती हूँ। क्लिनिक का माहौल बच्चों के अनुकूल है। डॉ. रजत हर बच्चे को अपना मानते हैं।',
    highlight: 'Follows up on WhatsApp after visits',
    avatar: '👵',
    color: 'from-rose-400 to-pink-500',
  },
  {
    id: 8,
    name: 'Rakesh Gupta',
    nameHi: 'राकेश गुप्ता',
    relation: 'Father',
    childAge: '10 years',
    rating: 5,
    text: 'We have been with Dr. Rajat for all three of our children. He keeps complete vaccination records and reminds us about upcoming doses. The appointment system is well-organized and we never have to wait long.',
    highlight: 'Well-organized — never have to wait long',
    avatar: '👨',
    color: 'from-lime-400 to-green-500',
  },
]

// ─────────────────────────────────────────────
// 6. WARNING SIGNS (medical emergency)
// ─────────────────────────────────────────────
export const WARNING_SIGNS = [
  { hi: 'तेज-तेज सांस लेना', en: 'Rapid breathing' },
  { hi: 'बच्चे का सुस्त रहना एवं दुध ना पीना', en: 'Lethargy or not drinking milk' },
  { hi: 'समय पर वजन ना बड़ना', en: 'Not gaining weight on time' },
  { hi: 'झटके आना', en: 'Convulsions' },
  { hi: 'पतली पतली दस्त करना', en: 'Frequent loose motions' },
  { hi: 'समय पर चलना वा बोलना ना सीखना', en: 'Not walking or speaking on time' },
  { hi: 'शरीर का नीला पड़ना', en: 'Bluish discoloration of the body' },
] as const

// ─────────────────────────────────────────────
// 7. MEDICATION DOSAGE TABLE
// ─────────────────────────────────────────────
export const DOSAGE_TABLE = [
  { ml: 10, tsp: '2 tsp', drops: '200', measure: '10 ml', equivalent: '2 teaspoons' },
  { ml: 5, tsp: '1 tsp', drops: '100', measure: '5 ml', equivalent: '1 teaspoon' },
  { ml: 2.5, tsp: '½ tsp', drops: '50', measure: '2.5 ml', equivalent: '½ teaspoon' },
  { ml: 1, tsp: '—', drops: '20', measure: '1 ml', equivalent: '20 drops' },
  { ml: 0.5, tsp: '—', drops: '10', measure: '0.5 ml', equivalent: '10 drops' },
  { ml: 0.25, tsp: '—', drops: '5', measure: '0.25 ml', equivalent: '5 drops' },
] as const

// ─────────────────────────────────────────────
// 8. GROWTH REFERENCE DATA
// ─────────────────────────────────────────────
export const GROWTH_REFERENCE: Record<string, { boys: { weight: number; length: number }; girls: { weight: number; length: number } }> = {
  'Birth': { boys: { weight: 3.3, length: 50.63 }, girls: { weight: 3.2, length: 49.9 } },
  '3 months': { boys: { weight: 6.0, length: 61.16 }, girls: { weight: 5.4, length: 60.2 } },
  '6 months': { boys: { weight: 7.8, length: 67.89 }, girls: { weight: 7.2, length: 66.6 } },
  '9 months': { boys: { weight: 9.2, length: 72.3 }, girls: { weight: 8.6, length: 71.7 } },
  '1 year': { boys: { weight: 10.2, length: 76.1 }, girls: { weight: 9.5, length: 75.0 } },
  '2 years': { boys: { weight: 12.3, length: 85.6 }, girls: { weight: 11.8, length: 84.5 } },
  '3 years': { boys: { weight: 14.8, length: 94.5 }, girls: { weight: 14.1, length: 93.8 } },
  '4 years': { boys: { weight: 16.7, length: 102.6 }, girls: { weight: 16.0, length: 101.6 } },
  '5 years': { boys: { weight: 18.7, length: 109.9 }, girls: { weight: 17.7, length: 108.4 } },
  '6 years': { boys: { weight: 20.7, length: 116.1 }, girls: { weight: 19.5, length: 114.5 } },
  '8 years': { boys: { weight: 25.3, length: 127.0 }, girls: { weight: 24.8, length: 126.4 } },
  '10 years': { boys: { weight: 31.4, length: 137.6 }, girls: { weight: 32.5, length: 138.3 } },
  '12 years': { boys: { weight: 37.0, length: 147.0 }, girls: { weight: 38.7, length: 148.0 } },
  '14 years': { boys: { weight: 47.0, length: 160.0 }, girls: { weight: 48.0, length: 155.0 } },
  '16 years': { boys: { weight: 58.0, length: 171.0 }, girls: { weight: 53.0, length: 162.0 } },
}

// ─────────────────────────────────────────────
// 9. VACCINATION BY AGE (quick lookup)
// ─────────────────────────────────────────────
export const VACCINATION_BY_AGE: Record<string, string> = {
  'At Birth': 'BCG, OPV',
  '6 Weeks': 'Hep-B (1st), DTwP/DTaP (1st), IPV/OPV (1st), Hib (1st), Rotavirus (1st), PCV (1st)',
  '10 Weeks': 'DTwP/DTaP (2nd), IPV/OPV (2nd), Hib (2nd), Hep-B (3rd), Rotavirus (2nd), PCV (2nd)',
  '14 Weeks': 'DTwP/DTaP (3rd), IPV/OPV (3rd), Hib (3rd), Hep-B (4th), Rotavirus (3rd), PCV (3rd)',
  '6 Months': 'TCV',
  '9 Months': 'MMR, Vitamin A (1st), FIPV, MCV (1st)',
  '12 Months': 'Hep A (1st), MCV (2nd), JE (1st)',
  '15 Months': 'MMR, Vitamin A (2nd), Varicella (1st), PCV Booster, Cholera',
  '16-18 Months': 'DTwP/DTaP Booster, IPV Booster, Hib Booster',
  '18 Months': 'Hep A (2nd)',
  '2 Years': 'MCV/TCV Booster',
  '4-6 Years': 'DTwP/DTaP (B2), IPV Booster, MMR (3rd)',
  '9-14 Years': 'Tdap, HPV (1 & 2), PCV (high risk)',
  '15-18 Years': 'Td, HPV (1,2,3)',
}

// ─────────────────────────────────────────────
// 10. BABY FOOD BY STAGE
// ─────────────────────────────────────────────
export const BABY_FOOD_BY_STAGE: Record<string, string[]> = {
  '6 months': ['Fruit juice & soup (tomato, carrot, spinach, moong dal)', 'Mashed banana, chikoo, apple', 'Suji halwa, daliya, ragi, rice flour'],
  '6-9 months': ['Egg yolk (then whole egg after 4 weeks)', 'Cooked mashed vegetables (potato, pumpkin, carrot, peas)', 'Curd/yogurt', 'Rice, dal, khichdi with ghee'],
  '9-12 months': ['Finger foods', 'More variety in vegetables & fruits', 'Soft chapati, idli'],
  '12+ months': ['Family foods (mashed as needed)', 'Full range of grains, pulses, vegetables', 'Milk as drink (after 1 year)'],
}
