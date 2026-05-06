import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { IconVaccine, IconBreastfeeding, IconAlert, IconArrowRight, IconHeartBaby, IconStethoscope, IconCalendar, IconGrowth, IconBabyFood } from '../components/Icons'
import { TESTIMONIALS, GROWTH_REFERENCE, VACCINATION_BY_AGE, BABY_FOOD_BY_STAGE, DOSAGE_TABLE, WARNING_SIGNS, DOCTOR, CLINIC } from '../config/clinic'

const growthReference = GROWTH_REFERENCE
const vaccinationByAge = VACCINATION_BY_AGE
const babyFoodByStage = BABY_FOOD_BY_STAGE
const dosageTable = DOSAGE_TABLE
const warningSigns = WARNING_SIGNS
const testimonials = TESTIMONIALS

const quickStats = [
  { icon: IconStethoscope, label: 'Expert Care', sub: 'Birth to 18 years' },
  { icon: IconVaccine, label: 'Full Vaccination', sub: 'On-time schedule' },
  { icon: IconCalendar, label: 'Easy Booking', sub: 'Prior appointment' },
]

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)
  const warningRef = useRef<HTMLElement>(null)
  const toolsRef = useRef<HTMLElement>(null)

  const [heroInView, setHeroInView] = useState(true)
  const [cardsInView, setCardsInView] = useState(false)
  const [statsInView, setStatsInView] = useState(false)
  const [warningInView, setWarningInView] = useState(false)
  const [toolsInView, setToolsInView] = useState(false)

  const [growthAge, setGrowthAge] = useState('1 year')
  const [growthGender, setGrowthGender] = useState<'boys' | 'girls'>('boys')
  const [growthWeight, setGrowthWeight] = useState('')
  const [growthLength, setGrowthLength] = useState('')
  const [vaccineAge, setVaccineAge] = useState('6 Weeks')
  const [foodStage, setFoodStage] = useState('6 months')
  const [dosageMl, setDosageMl] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.target === heroRef.current) setHeroInView(e.isIntersecting)
          if (e.target === cardsRef.current) setCardsInView(e.isIntersecting)
          if (e.target === statsRef.current) setStatsInView(e.isIntersecting)
          if (e.target === warningRef.current) setWarningInView(e.isIntersecting)
          if (e.target === toolsRef.current) setToolsInView(e.isIntersecting)
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    if (cardsRef.current) observer.observe(cardsRef.current)
    if (statsRef.current) observer.observe(statsRef.current)
    if (warningRef.current) observer.observe(warningRef.current)
    if (toolsRef.current) observer.observe(toolsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="space-y-20 md:space-y-28">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden rounded-[2rem] shadow-premium-lg border border-white/60"
        style={{
          background: 'linear-gradient(135deg, #fff 0%, #fdf2e9 25%, #fadbd8 50%, #aed6f1 75%, #e8f8f5 100%)',
        }}
      >
        {/* Animated background blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-clinic-pink/30 blur-3xl animate-ghibli-glow pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-clinic-sky/25 blur-3xl animate-ghibli-glow pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-clinic-orange/10 blur-2xl animate-ghibli-glow pointer-events-none" style={{ animationDelay: '1s' }} />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 pattern-footprints opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none" />

        <div className="relative grid md:grid-cols-2 gap-6 md:gap-10 items-center min-h-[380px] md:min-h-[460px] p-8 md:p-12 lg:p-16">
          {/* Text content */}
          <div className="order-2 md:order-1 space-y-5 md:space-y-6">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm text-clinic-red text-sm font-bold shadow-sm border border-clinic-pink/30 transition-all duration-700 ${
                heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              <IconHeartBaby size="sm" className="text-clinic-red animate-pulse-soft" />
              नवजात शिशु एवं बाल रोग विशेषज्ञ
            </div>

            {/* Heading with gradient */}
            <h1
              className={`text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight tracking-tight transition-all duration-700 ${
                heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <span className="bg-gradient-to-r from-clinic-red via-clinic-red-dark to-clinic-red bg-clip-text text-transparent">
                {CLINIC.shortName}
              </span>
              <br />
              <span className="text-gray-800">Child Care Clinic</span>
            </h1>

            {/* Tagline */}
            <p
              className={`text-clinic-orange text-lg md:text-xl font-bold italic transition-all duration-700 ${
                heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              "{CLINIC.tagline}"
            </p>

            {/* Description */}
            <p
              className={`text-gray-600 max-w-lg text-[15px] md:text-base leading-relaxed transition-all duration-700 ${
                heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              Complete child care, vaccination, and neonatal care from birth to 18 years — by <span className="font-semibold text-gray-800">{DOCTOR.name}</span>, Mandsaur.
            </p>

            {/* Quick trust badges */}
            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 ${
                heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.45s' }}
            >
              {[
                { icon: '🎓', text: 'MD Pediatrics' },
                { icon: '🏥', text: 'AIIMS Trained' },
                { icon: '💉', text: 'Full Vaccination' },
              ].map(({ icon, text }) => (
                <span key={text} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/60 backdrop-blur-sm text-xs font-semibold text-gray-700 border border-white/80 shadow-sm">
                  {icon} {text}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className={`flex flex-wrap gap-4 pt-2 transition-all duration-700 ${
                heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <Link to="/appointment" className="btn-primary group shadow-xl shadow-clinic-red/20">
                Book Appointment
                <IconArrowRight size="sm" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Hero illustration */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div
              className={`relative transition-all duration-1000 ${heroInView ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              {/* Glowing ring behind image */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-clinic-pink/40 via-clinic-sky/30 to-clinic-cream/40 blur-xl animate-ghibli-glow pointer-events-none" />

              {/* Main image container */}
              <div
                className={`relative w-full max-w-[22rem] md:max-w-[24rem] aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-2xl ring-4 ring-white/80 ring-offset-2 ring-offset-transparent ${heroInView ? 'animate-ghibli-float' : ''}`}
              >
                <picture>
                  <source srcSet="/images/hero-pediatric.webp" type="image/webp" />
                  <img
                    src="/images/hero-pediatric.png"
                    alt="Pediatric care — doctor with happy child in a warm clinic"
                    width={800}
                    height={446}
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                      const next = (e.target as HTMLImageElement).parentElement?.nextElementSibling as HTMLElement
                      if (next) next.classList.remove('hidden')
                    }}
                  />
                </picture>
                <div className="hidden absolute inset-0 bg-gradient-to-br from-clinic-pink/40 to-clinic-sky/30 flex items-center justify-center" aria-hidden>
                  <IconHeartBaby className="w-32 h-32 text-clinic-red/40" size="lg" />
                </div>
                {/* Soft overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
              </div>

              {/* Floating mini cards */}
              <div
                className={`absolute -bottom-3 -left-3 md:-left-6 px-3 py-2 bg-white rounded-xl shadow-lg border border-gray-100/80 flex items-center gap-2 transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0 animate-float' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.7s', animationDelay: '0.5s' }}
              >
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-sm">✅</div>
                <div>
                  <p className="text-xs font-bold text-gray-800">Trusted Care</p>
                  <p className="text-[10px] text-gray-500">Birth to 18 years</p>
                </div>
              </div>
              {/* <div
                className={`absolute -top-2 -right-2 md:-right-5 px-3 py-2 bg-white rounded-xl shadow-lg border border-gray-100/80 flex items-center gap-2 transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0 animate-float' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.8s', animationDelay: '1s' }}
              >
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-sm">⭐</div>
                <div>
                  <p className="text-xs font-bold text-gray-800">5.0 Rating</p>
                  <p className="text-[10px] text-gray-500">Happy parents</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats strip */}
      <section
        ref={statsRef}
        className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-700 ${
          statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {quickStats.map(({ icon: Icon, label, sub }, i) => (
          <div
            key={label}
            className="card-premium p-5 md:p-6 flex items-center gap-4"
            style={{
              transitionDelay: statsInView ? `${i * 100}ms` : '0ms',
            }}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clinic-pink to-clinic-red/30 flex items-center justify-center text-white shadow-card-soft shrink-0">
              <Icon size="lg" />
            </div>
            <div>
              <p className="font-bold text-gray-900">{label}</p>
              <p className="text-sm text-gray-500">{sub}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Health & monitoring tools */}
      <section
        ref={toolsRef}
        className={`transition-all duration-700 ${toolsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="rounded-3xl bg-gradient-to-br from-white via-clinic-cream/30 to-clinic-pink/20 border border-clinic-pink/30 shadow-premium overflow-hidden">
          <div className="p-6 md:p-8 border-b border-gray-100/80 bg-white/50">
            <span className="inline-block px-3 py-1 rounded-full bg-clinic-red/10 text-clinic-red text-xs font-bold uppercase tracking-wider mb-3">
              Tools
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Baby health & monitoring
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl">
              Quick reference for growth, vaccination, feeding and medicine dosage. Always confirm with your doctor.
            </p>
          </div>
          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Growth checker */}
            <div className="card-premium border-l-4 border-l-clinic-sky-dark">
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clinic-sky to-clinic-sky-dark flex items-center justify-center text-white shadow-sm">
                    <IconGrowth size="lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Growth checker</h3>
                    <p className="text-sm text-gray-500">Compare with reference average</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2 flex-wrap">
                    <select
                      value={growthAge}
                      onChange={(e) => setGrowthAge(e.target.value)}
                      className="flex-1 min-w-[100px] px-4 py-2.5 bg-gray-50 border-0 rounded-xl text-sm font-medium text-gray-800 focus:ring-2 focus:ring-clinic-red/40 focus:bg-white transition"
                    >
                      {Object.keys(growthReference).map((age) => (
                        <option key={age} value={age}>{age}</option>
                      ))}
                    </select>
                    <select
                      value={growthGender}
                      onChange={(e) => setGrowthGender(e.target.value as 'boys' | 'girls')}
                      className="flex-1 min-w-[90px] px-4 py-2.5 bg-gray-50 border-0 rounded-xl text-sm font-medium text-gray-800 focus:ring-2 focus:ring-clinic-red/40 focus:bg-white transition"
                    >
                      <option value="boys">Boy</option>
                      <option value="girls">Girl</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      step="0.1"
                      placeholder="Weight (kg)"
                      value={growthWeight}
                      onChange={(e) => setGrowthWeight(e.target.value)}
                      className="px-4 py-2.5 bg-gray-50 border-0 rounded-xl text-sm font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-clinic-red/40 focus:bg-white transition"
                    />
                    <input
                      type="number"
                      step="0.1"
                      placeholder="Length (cm)"
                      value={growthLength}
                      onChange={(e) => setGrowthLength(e.target.value)}
                      className="px-4 py-2.5 bg-gray-50 border-0 rounded-xl text-sm font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-clinic-red/40 focus:bg-white transition"
                    />
                  </div>
                  {growthReference[growthAge] && (
                    <div className="rounded-xl bg-clinic-sky/15 p-4 border border-clinic-sky/30">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Reference for {growthAge}</p>
                      <p className="text-gray-800 font-semibold">{growthReference[growthAge][growthGender].weight} kg · {growthReference[growthAge][growthGender].length} cm</p>
                      {(growthWeight || growthLength) && (
                        <p className="text-xs text-gray-500 mt-2">Discuss any concern with your doctor.</p>
                      )}
                    </div>
                  )}
                </div>
                <Link to="/growth-charts" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-clinic-red hover:gap-3 transition-all">
                  Full growth charts <IconArrowRight size="sm" className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Vaccination due */}
            <div className="card-premium border-l-4 border-l-clinic-red">
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clinic-red to-clinic-red-dark flex items-center justify-center text-white shadow-sm">
                    <IconVaccine size="lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Vaccines by age</h3>
                    <p className="text-sm text-gray-500">What’s due at this age?</p>
                  </div>
                </div>
                <select
                  value={vaccineAge}
                  onChange={(e) => setVaccineAge(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border-0 rounded-xl text-sm font-medium text-gray-800 focus:ring-2 focus:ring-clinic-red/40 focus:bg-white transition mb-4"
                >
                  {Object.keys(vaccinationByAge).map((age) => (
                    <option key={age} value={age}>{age}</option>
                  ))}
                </select>
                <div className="rounded-xl bg-clinic-pink/15 p-4 border border-clinic-pink/30">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Due at {vaccineAge}</p>
                  <p className="text-gray-800 text-sm leading-relaxed">{vaccinationByAge[vaccineAge]}</p>
                </div>
                <Link to="/vaccination" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-clinic-red hover:gap-3 transition-all">
                  Full schedule <IconArrowRight size="sm" className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Baby food guide */}
            <div className="card-premium border-l-4 border-l-clinic-orange">
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clinic-orange to-clinic-orange-light flex items-center justify-center text-white shadow-sm">
                    <IconBabyFood size="lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Baby food introduction</h3>
                    <p className="text-sm text-gray-500">What to offer by stage</p>
                  </div>
                </div>
                <select
                  value={foodStage}
                  onChange={(e) => setFoodStage(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border-0 rounded-xl text-sm font-medium text-gray-800 focus:ring-2 focus:ring-clinic-red/40 focus:bg-white transition mb-4"
                >
                  {Object.keys(babyFoodByStage).map((stage) => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </select>
                <ul className="rounded-xl bg-clinic-cream/50 p-4 border border-clinic-orange/20 space-y-2">
                  {babyFoodByStage[foodStage].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-clinic-orange font-bold">·</span> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/baby-food" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-clinic-red hover:gap-3 transition-all">
                  Full food guide <IconArrowRight size="sm" className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Dosage converter */}
            <div className="card-premium border-l-4 border-l-clinic-green">
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clinic-green to-emerald-400 flex items-center justify-center text-white shadow-sm">
                    <IconBabyFood size="lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Medication dosage</h3>
                    <p className="text-sm text-gray-500">ml → tsp & drops</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="number"
                    step="0.25"
                    min="0"
                    placeholder="0"
                    value={dosageMl}
                    onChange={(e) => setDosageMl(e.target.value)}
                    className="w-24 px-4 py-3 bg-gray-50 border-0 rounded-xl text-lg font-bold text-gray-800 focus:ring-2 focus:ring-clinic-red/40 focus:bg-white transition text-center"
                  />
                  <span className="text-sm font-medium text-gray-500">ml</span>
                </div>
                {dosageMl !== '' && !Number.isNaN(parseFloat(dosageMl)) && parseFloat(dosageMl) >= 0 && (
                  <div className="rounded-xl bg-clinic-green/15 p-4 border border-clinic-green/30 mb-4">
                    <p className="text-2xl font-bold text-gray-800">≈ {(parseFloat(dosageMl) / 5).toFixed(1)} tsp · {Math.round(parseFloat(dosageMl) * 20)} drops</p>
                    <p className="text-xs text-gray-500 mt-1">Approximate. Follow doctor’s instructions.</p>
                  </div>
                )}
                <div className="rounded-xl bg-gray-50/80 p-3 text-xs text-gray-600 space-y-1">
                  <p className="font-semibold text-gray-700 mb-2">Quick reference</p>
                  {dosageTable.map((row) => (
                    <div key={row.ml} className="flex justify-between">{row.ml} ml → {row.tsp !== '—' ? row.tsp : ''} {row.drops} drops</div>
                  ))}
                </div>
                <Link to="/for-parents" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-clinic-red hover:gap-3 transition-all">
                  More for parents <IconArrowRight size="sm" className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section ref={cardsRef} className="grid md:grid-cols-2 gap-6">
        <Link
          to="/vaccination"
          className={`card-premium p-6 md:p-8 group transition-all duration-500 ${
            cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: cardsInView ? '0.1s' : '0ms' }}
        >
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-clinic-sky to-clinic-sky-dark flex items-center justify-center text-white shadow-card-soft group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300 shrink-0">
              <IconVaccine size="lg" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="section-heading mb-2">5 साल 7 बार — छूटे न टीका एक भी बार</h2>
              <p className="text-gray-600 text-sm mb-2">5 years, 7 times — don’t miss a single vaccine.</p>
              <p className="text-clinic-red font-semibold text-sm mb-3">
                अपने शिशु का टीकाकरण समय पर कराएं, यह शिशु को गंभीर बीमारियों से बचाता है।
              </p>
              <span className="link-arrow inline-flex items-center gap-1 group/link">
                View vaccination schedule
                <IconArrowRight size="sm" className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>

        <Link
          to="/breastfeeding"
          className={`card-premium p-6 md:p-8 group transition-all duration-500 ${
            cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: cardsInView ? '0.2s' : '0ms' }}
        >
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-clinic-pink to-clinic-red/40 flex items-center justify-center text-white shadow-card-soft group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-300 shrink-0">
              <IconBreastfeeding size="lg" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="section-heading mb-2">याद रखें</h2>
              <p className="text-clinic-red font-semibold mb-2">
                माँ का दूध आपके शिशु के लिए सर्वोत्तम व सर्वाधिक किफायती आहार है!
              </p>
              <p className="text-gray-600 text-sm mb-3">Mother's milk is the best and most affordable food for your baby.</p>
              <span className="link-arrow inline-flex items-center gap-1 group/link">
                Why breastfeeding is best
                <IconArrowRight size="sm" className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      {/* Testimonials marquee */}
      <section className="overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
              Testimonials
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">What parents say about us</h2>
          </div>
          <Link to="/testimonials" className="link-arrow hidden sm:inline-flex items-center gap-1 group shrink-0">
            View all
            <IconArrowRight size="sm" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        {/* Auto-scrolling marquee — duplicate for seamless loop */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-clinic-beige to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-clinic-beige to-transparent z-10 pointer-events-none" />
          <div className="flex gap-5 animate-marquee hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="card-premium flex-shrink-0 w-[320px] sm:w-[360px] flex flex-col"
              >
                <div className={`h-1 bg-gradient-to-r ${t.color}`} />
                <div className="p-5 flex flex-col flex-1">
                  <svg className="w-6 h-6 text-clinic-pink/50 mb-2 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                  </svg>
                  {t.highlight && (
                    <span className={`inline-block self-start px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white bg-gradient-to-r ${t.color} mb-2`}>
                      ⭐ {t.highlight}
                    </span>
                  )}
                  <p className="text-sm text-gray-700 leading-relaxed line-clamp-4 flex-1">{t.text}</p>
                  <div className="flex gap-0.5 mt-3">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} className={`w-3.5 h-3.5 ${s <= t.rating ? 'text-amber-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="flex items-center gap-2.5 mt-3 pt-3 border-t border-gray-100">
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-sm shadow-sm`}>
                      {t.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-gray-900 text-xs">{t.name}</p>
                      <p className="text-[11px] text-gray-500">{t.relation} · {t.childAge}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link to="/testimonials" className="link-arrow mt-5 inline-flex sm:hidden items-center gap-1 group">
          View all reviews
          <IconArrowRight size="sm" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </section>

      {/* Warning signs — different card design */}
      <section
        ref={warningRef}
        className={`overflow-hidden rounded-[1.25rem] transition-all duration-700 ${
          warningInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="bg-white shadow-card border border-gray-100/80 rounded-[1.25rem] overflow-hidden">
          {/* Header strip */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-5 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/25 flex items-center justify-center text-white shrink-0">
              <IconAlert size="lg" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">When to see the doctor immediately</h2>
              <p className="text-white/95 text-sm font-hindi mt-0.5">शिशु में इनमें से कोई भी लक्षण दिखने पर तुरन्त डॉक्टर को दिखायें....</p>
            </div>
          </div>
          {/* List */}
          <div className="p-5 md:p-6">
            <ul className="space-y-2">
              {warningSigns.map(({ hi, en }, i) => (
                <li
                  key={hi}
                  className={`flex items-start gap-3 p-4 rounded-xl bg-amber-50/60 border border-amber-100 transition-all duration-500 ${
                    warningInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
                  }`}
                  style={{ transitionDelay: warningInView ? `${0.1 + i * 0.04}s` : '0ms' }}
                >
                  <span className="w-8 h-8 rounded-lg bg-amber-200/80 flex items-center justify-center text-amber-700 text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="font-hindi text-gray-800 font-medium">{hi}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{en}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/for-parents" className="link-arrow mt-5 inline-flex items-center gap-1 group">
              More for parents
              <IconArrowRight size="sm" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
