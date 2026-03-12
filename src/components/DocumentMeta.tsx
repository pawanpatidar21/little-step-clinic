import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeoForPath, getCanonicalUrl, getOgImageUrl, SEO_BASE_URL } from '../config/seo'
import { CLINIC, DOCTOR, PHONE, ADDRESS, EMAIL, OPD_TIMINGS, TESTIMONIALS } from '../config/clinic'

/**
 * Helper: upsert a <meta> tag in <head>.
 */
function setMeta(attr: string, key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

/**
 * Helper: upsert a <link> tag in <head>.
 */
function setLink(rel: string, href: string, extra?: Record<string, string>) {
  const selector = extra
    ? `link[rel="${rel}"][hreflang="${extra.hreflang || ''}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    if (extra) Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v))
    document.head.appendChild(el)
  }
  el.href = href
}

/**
 * Build JSON-LD BreadcrumbList for current path.
 */
function buildBreadcrumbLD(pathname: string) {
  const crumbs: { name: string; url: string }[] = [
    { name: 'Home', url: SEO_BASE_URL + '/' },
  ]
  const labels: Record<string, string> = {
    about: 'About Doctor',
    services: 'Services',
    contact: 'Contact',
    appointment: 'Book Appointment',
    breastfeeding: 'Breastfeeding',
    vaccination: 'Vaccination Schedule',
    'growth-charts': 'Growth Charts',
    'baby-food': 'Baby Food Guide',
    'for-parents': 'For Parents',
    milestones: 'Milestones',
    testimonials: 'Reviews',
  }
  const segments = pathname.split('/').filter(Boolean)
  segments.forEach((seg) => {
    if (labels[seg]) {
      crumbs.push({ name: labels[seg], url: `${SEO_BASE_URL}/${seg}/` })
    }
  })
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  }
}

/**
 * Build FAQ JSON-LD (only on home page).
 */
function buildFaqLD() {
  const faqs = [
    {
      q: 'Who is the best pediatrician in Mandsaur?',
      a: `${DOCTOR.name} (MD Pediatrics, NALS, PALS, PGPN Boston University) at ${CLINIC.name}, ${ADDRESS.en} is one of the top-rated pediatricians in Mandsaur with experience at AIIMS Bhopal and Aurobindo Hospital Indore.`,
    },
    {
      q: 'What are the OPD timings of Little Steps Child Care Clinic?',
      a: `${OPD_TIMINGS.morning.label}: ${OPD_TIMINGS.morning.time}, ${OPD_TIMINGS.evening.label}: ${OPD_TIMINGS.evening.time}. ${OPD_TIMINGS.emergency.label}: ${OPD_TIMINGS.emergency.time}.`,
    },
    {
      q: 'How to book an appointment with Dr. Rajat Patidar?',
      a: `Call Landline ${PHONE.landline}, Mobile ${PHONE.mobile1} or ${PHONE.mobile2}, or message on WhatsApp at ${PHONE.mobile1}. You can also visit the clinic at ${ADDRESS.en}.`,
    },
    {
      q: 'What services does Little Steps Child Care Clinic offer?',
      a: 'We offer complete child care from birth to 18 years including: newborn & neonatal care, vaccination (full IAP schedule), growth & development monitoring, breastfeeding support, child nutrition counseling, and 24/7 emergency care.',
    },
    {
      q: 'Where is Little Steps Child Care Clinic located?',
      a: `${ADDRESS.en}. You can find us on Google Maps. Landmark: Gol Chauraha / Gaul Chouraha.`,
    },
  ]
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

/**
 * Build AggregateRating + Review snippets from testimonials.
 */
function buildReviewLD() {
  const avg =
    TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length
  return {
    '@type': 'AggregateRating',
    ratingValue: avg.toFixed(1),
    bestRating: '5',
    worstRating: '1',
    ratingCount: String(TESTIMONIALS.length),
    reviewCount: String(TESTIMONIALS.length),
  }
}

/**
 * Build the full JSON-LD @graph for the current page.
 */
function buildPageLD(pathname: string) {
  const graph: Record<string, unknown>[] = []

  // BreadcrumbList on every page
  graph.push(buildBreadcrumbLD(pathname))

  // Home page gets extra schemas
  if (pathname === '/' || pathname === '') {
    // MedicalClinic with AggregateRating
    graph.push({
      '@type': ['MedicalClinic', 'MedicalBusiness'],
      '@id': `${SEO_BASE_URL}/#clinic`,
      name: CLINIC.name,
      alternateName: 'Little Steps Clinic',
      description: `Pediatric and neonatal care clinic in Mandsaur. ${DOCTOR.name}, MD Pediatrics, offers child care from birth to 18 years, vaccination, and breastfeeding support.`,
      url: SEO_BASE_URL,
      telephone: [`+91-${PHONE.landline}`, `+91-${PHONE.mobile1}`, `+91-${PHONE.mobile2}`],
      email: EMAIL,
      image: `${SEO_BASE_URL}/og-image.png`,
      logo: `${SEO_BASE_URL}/logo.png`,
      priceRange: '$$',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Pashupatinath Medical, Gol Chauraha',
        addressLocality: 'Mandsaur',
        addressRegion: 'Madhya Pradesh',
        postalCode: '458001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 24.0713,
        longitude: 75.0693,
      },
      hasMap: ADDRESS.mapsLink,
      areaServed: [
        { '@type': 'City', name: 'Mandsaur' },
        { '@type': 'State', name: 'Madhya Pradesh' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:30',
          closes: '15:30',
          description: 'Morning OPD',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '18:30',
          closes: '20:30',
          description: 'Evening OPD',
        },
      ],
      medicalSpecialty: ['Pediatrics', 'Neonatology'],
      availableService: [
        { '@type': 'MedicalProcedure', name: 'Child Vaccination', description: 'Complete IAP recommended vaccination schedule from birth to 18 years' },
        { '@type': 'MedicalProcedure', name: 'Newborn Care', description: 'Neonatal care and monitoring for newborn babies' },
        { '@type': 'MedicalProcedure', name: 'Growth Monitoring', description: 'Regular growth and development tracking using WHO charts' },
        { '@type': 'MedicalProcedure', name: 'Breastfeeding Support', description: 'Expert lactation and breastfeeding guidance for new mothers' },
        { '@type': 'MedicalProcedure', name: 'Child Nutrition Counseling', description: 'Age-appropriate nutrition and baby food introduction guidance' },
        { '@type': 'MedicalProcedure', name: 'Emergency Pediatric Care', description: '24/7 emergency care for children' },
      ],
      aggregateRating: buildReviewLD(),
      review: TESTIMONIALS.slice(0, 5).map((t) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: t.name },
        reviewRating: { '@type': 'Rating', ratingValue: String(t.rating), bestRating: '5' },
        reviewBody: t.text,
        datePublished: '2025-01-01',
      })),
    })

    // Physician
    graph.push({
      '@type': 'Physician',
      '@id': `${SEO_BASE_URL}/#physician`,
      name: DOCTOR.name,
      alternateName: DOCTOR.nameHi,
      jobTitle: DOCTOR.title,
      description: `MD Pediatrics, NALS, PALS, PGPN (Boston University). ${DOCTOR.bio}.`,
      url: `${SEO_BASE_URL}/about/`,
      telephone: `+91-${PHONE.mobile1}`,
      email: EMAIL,
      image: `${SEO_BASE_URL}${DOCTOR.photo}`,
      worksFor: { '@id': `${SEO_BASE_URL}/#clinic` },
      medicalSpecialty: ['Pediatrics', 'Neonatology'],
      knowsAbout: ['Pediatrics', 'Neonatology', 'Vaccination', 'Child Nutrition', 'Breastfeeding', 'Growth Monitoring', 'Developmental Milestones'],
      alumniOf: [
        { '@type': 'EducationalOrganization', name: 'AIIMS Bhopal' },
        { '@type': 'EducationalOrganization', name: 'Boston University — PGPN' },
      ],
    })

    // FAQPage
    graph.push(buildFaqLD())
  }

  return graph
}

/**
 * DocumentMeta — Updates all SEO-critical tags on every route change.
 * - <title>, <meta description>, <meta keywords>
 * - Open Graph (og:*) tags
 * - Twitter Card tags
 * - Canonical + hreflang links
 * - Dynamic JSON-LD structured data
 * Renders nothing; side effects only.
 */
export function DocumentMeta() {
  const location = useLocation()

  useEffect(() => {
    const { title, description, keywords } = getSeoForPath(location.pathname)
    const canonical = getCanonicalUrl(location.pathname)
    const ogImage = getOgImageUrl()

    // ── Core meta tags ──
    document.title = title
    setMeta('name', 'description', description)
    setMeta('name', 'keywords', keywords)
    setMeta('name', 'author', CLINIC.name)
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')

    // ── Canonical + hreflang ──
    setLink('canonical', canonical)
    setLink('alternate', canonical, { hreflang: 'en-IN' })
    setLink('alternate', canonical, { hreflang: 'hi-IN' })
    setLink('alternate', canonical, { hreflang: 'x-default' })

    // ── Open Graph ──
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:image', ogImage)
    setMeta('property', 'og:image:width', '1200')
    setMeta('property', 'og:image:height', '630')
    setMeta('property', 'og:image:alt', `${CLINIC.name} — ${DOCTOR.name}, ${DOCTOR.title}`)
    setMeta('property', 'og:locale', 'en_IN')
    setMeta('property', 'og:locale:alternate', 'hi_IN')
    setMeta('property', 'og:site_name', CLINIC.name)

    // ── Twitter Card ──
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', ogImage)
    setMeta('name', 'twitter:image:alt', `${CLINIC.name} — ${DOCTOR.name}`)

    // ── Dynamic JSON-LD ──
    const ldId = 'dynamic-jsonld'
    let ldScript = document.getElementById(ldId) as HTMLScriptElement | null
    if (!ldScript) {
      ldScript = document.createElement('script')
      ldScript.id = ldId
      ldScript.type = 'application/ld+json'
      document.head.appendChild(ldScript)
    }
    const graph = buildPageLD(location.pathname)
    ldScript.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })

  }, [location.pathname])

  return null
}
