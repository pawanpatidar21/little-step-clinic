/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  SEO CONFIGURATION — Search Engine Optimization              ║
 * ║  Page-specific titles, descriptions, keywords, and OG data   ║
 * ║  Update BASE_URL before deploying to production              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */
import { CLINIC, DOCTOR, PHONE, ADDRESS, EMAIL } from './clinic'

// ── Base URL (update to your actual domain) ──
export const SEO_BASE_URL = 'https://littlestepsclinic.in'

// ── Default / fallback SEO data ──
export const SEO_DEFAULT = {
  title: `${CLINIC.name} — Best Pediatrician in Mandsaur | ${DOCTOR.name}`,
  description: `${CLINIC.name}, Mandsaur — ${DOCTOR.name}, ${DOCTOR.title}. Expert child care from birth to 18 years, vaccination, neonatal care, breastfeeding support. ${ADDRESS.en}. Book: ${PHONE.landline}.`,
  keywords: 'pediatrician Mandsaur, child doctor Mandsaur, baby doctor Mandsaur, neonatologist Mandsaur, vaccination Mandsaur, Dr Rajat Patidar, Little Steps Child Care, best child specialist Mandsaur, बाल रोग विशेषज्ञ मन्दसौर, शिशु रोग विशेषज्ञ',
}

export type SeoEntry = {
  title: string
  description: string
  keywords: string
}

// ── Per-page SEO configuration ──
export const SEO_BY_PATH: Record<string, SeoEntry> = {
  '/': {
    title: `${CLINIC.name} — Best Pediatrician & Neonatologist in Mandsaur | ${DOCTOR.name}`,
    description: `${CLINIC.name} — ${DOCTOR.name}, MD Pediatrics. Best child specialist in Mandsaur for newborn care, vaccination, growth monitoring, breastfeeding. ${ADDRESS.en}. OPD: 10:30 AM–3:30 PM & 6:30–8:30 PM. Call ${PHONE.landline}.`,
    keywords: 'best pediatrician Mandsaur, child doctor Mandsaur, baby doctor near me, neonatologist Mandsaur, child specialist Mandsaur, Dr Rajat Patidar pediatrician, Little Steps clinic, बाल रोग विशेषज्ञ मन्दसौर, शिशु चिकित्सक, best child doctor Mandsaur MP',
  },
  '/about': {
    title: `About ${DOCTOR.name} — MD Pediatrics, NALS, PALS | Best Child Specialist Mandsaur`,
    description: `${DOCTOR.name}, MD Pediatrics, NALS, PALS, PGPN (Boston University). ${DOCTOR.title} at ${CLINIC.name}, Mandsaur. Former resident AIIMS Bhopal, Aurobindo Hospital Indore. Registration ${CLINIC.registration}.`,
    keywords: 'Dr Rajat Patidar, pediatrician Mandsaur qualifications, MD pediatrics Mandsaur, child specialist credentials, AIIMS trained pediatrician, best baby doctor Mandsaur, डॉ रजत पाटीदार',
  },
  '/services': {
    title: 'Pediatric Services — Newborn Care, Vaccination, Child Health | Mandsaur',
    description: `Complete pediatric services at ${CLINIC.name}: newborn care, immunization, growth monitoring, nutrition counseling, emergency care, development milestones. ${DOCTOR.name}, Mandsaur.`,
    keywords: 'child care services Mandsaur, pediatric services, newborn care, baby vaccination Mandsaur, child health checkup, neonatal care Mandsaur, growth monitoring, nutrition counseling',
  },
  '/contact': {
    title: `Contact ${CLINIC.name} — Address, Phone, OPD Timings | Mandsaur`,
    description: `Visit ${CLINIC.name} at ${ADDRESS.en}. Landline: ${PHONE.landline}, Mobile: ${PHONE.mobile1}, ${PHONE.mobile2}. Email: ${EMAIL}. OPD: Morning 10:30 AM–3:30 PM, Evening 6:30–8:30 PM. 24/7 Emergency.`,
    keywords: 'Little Steps clinic address, pediatrician Mandsaur contact, Gol Chauraha clinic, Pashupatinath Medical Mandsaur, child doctor phone number, OPD timing Mandsaur',
  },
  '/appointment': {
    title: `Book Appointment — ${DOCTOR.name} | ${CLINIC.name} Mandsaur`,
    description: `Book appointment with ${DOCTOR.name}, ${DOCTOR.title}. Call ${PHONE.landline}, ${PHONE.mobile1}, or ${PHONE.mobile2}. ${ADDRESS.en}. WhatsApp available.`,
    keywords: 'book appointment pediatrician Mandsaur, child doctor appointment, Dr Rajat Patidar appointment, Little Steps clinic booking',
  },
  '/breastfeeding': {
    title: 'Breastfeeding Support & Expert Tips — Pediatrician Mandsaur | Little Steps Clinic',
    description: `Expert breastfeeding guidance from ${DOCTOR.name}. Lactation support, common problems, positioning tips, breastfeeding benefits for newborns. ${CLINIC.name}, Mandsaur.`,
    keywords: 'breastfeeding support Mandsaur, lactation consultant, breastfeeding tips, newborn feeding, स्तनपान सहायता, mother milk guide, breastfeeding problems solution',
  },
  '/vaccination': {
    title: 'Complete Child Vaccination Schedule India — Pediatrician Mandsaur | Little Steps',
    description: `Complete vaccination schedule for children from birth to 18 years. IAP recommended immunization chart. BCG, DPT, MMR, Hepatitis, Rotavirus & more. ${DOCTOR.name}, ${CLINIC.name}.`,
    keywords: 'child vaccination schedule India, baby vaccination chart, immunization schedule, vaccine for babies, टीकाकरण सूची, BCG vaccine, DPT vaccine, MMR vaccine Mandsaur, pediatrician vaccination',
  },
  '/growth-charts': {
    title: 'Child Growth Charts — Weight & Height Tracker by Age | Pediatrician Mandsaur',
    description: `Track your child's growth with WHO reference charts. Weight and height by age for boys and girls, birth to 16 years. Growth monitoring by ${DOCTOR.name}, Mandsaur.`,
    keywords: 'child growth chart, baby weight chart by age, child height chart, WHO growth standards, बच्चों का वजन चार्ट, growth tracker, pediatric growth monitoring Mandsaur',
  },
  '/baby-food': {
    title: 'Baby Food Introduction Guide by Age — 6 Months to 1 Year | Pediatrician Mandsaur',
    description: `Age-wise baby food introduction guide: 6 months weaning foods, homemade recipes, Indian baby food chart. Expert nutrition guidance by ${DOCTOR.name}, PGPN Boston University.`,
    keywords: 'baby food chart by age, 6 month baby food, Indian baby food, weaning guide, शिशु आहार, complementary feeding, baby food recipes, first foods for baby',
  },
  '/for-parents': {
    title: 'For Parents — Child Health Tips, Warning Signs & Medication Guide | Mandsaur',
    description: `Essential child health resources for parents: warning signs, medication dosage guide, when to see doctor. ${DOCTOR.name}, ${CLINIC.name}, Mandsaur.`,
    keywords: 'child health tips, when to see pediatrician, baby warning signs, medication dosage children, बच्चों की दवा, parenting health guide, child emergency signs',
  },
  '/milestones': {
    title: 'Child Development Milestones — Month by Month Guide | Pediatrician Mandsaur',
    description: `Track your child's developmental milestones from birth to 5 years. Motor skills, language, social development guide. Expert monitoring by ${DOCTOR.name}, Mandsaur.`,
    keywords: 'child development milestones, baby milestones by month, motor development chart, बच्चों का विकास, when baby walks talks, developmental delay signs, pediatric milestones',
  },
  '/testimonials': {
    title: `Patient Reviews — ${CLINIC.name} | Best Rated Pediatrician Mandsaur`,
    description: `Read parent reviews of ${DOCTOR.name} at ${CLINIC.name}, Mandsaur. 5-star rated pediatrician. Trusted by hundreds of families for child care and vaccination.`,
    keywords: 'Little Steps clinic reviews, Dr Rajat Patidar reviews, best pediatrician Mandsaur reviews, child doctor reviews, patient testimonials Mandsaur',
  },
}

// ── Helper: get SEO data for a given route ──
export function getSeoForPath(pathname: string): SeoEntry {
  const normalized = pathname.replace(/\/$/, '') || '/'
  return SEO_BY_PATH[normalized] ?? SEO_DEFAULT
}

// ── Helper: canonical URL for a given route ──
export function getCanonicalUrl(pathname: string): string {
  const normalized = pathname.replace(/\/$/, '') || '/'
  return `${SEO_BASE_URL}${normalized === '/' ? '/' : `${normalized}/`}`
}

// ── Helper: full OG image URL ──
export function getOgImageUrl(): string {
  return `${SEO_BASE_URL}/og-image.png`
}
