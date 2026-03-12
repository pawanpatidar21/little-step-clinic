import { useState, useEffect, useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { IconFootprint, IconLocation, IconPhone, IconMail, IconCalendar } from './Icons'
import { Logo } from './Logo'
import { DocumentMeta } from './DocumentMeta'
import { FloatingButtons } from './FloatingButtons'
import { OPD_TIMINGS, PHONE, ADDRESS, EMAIL, CLINIC, DOCTOR } from '../config/clinic'
// import { useLanguage } from '../context/LanguageContext'

const mainLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Reviews' },
]

const resourceLinks = [
  { to: '/breastfeeding', label: 'Breastfeeding' },
  { to: '/vaccination', label: 'Vaccination' },
  { to: '/growth-charts', label: 'Growth Charts' },
  { to: '/baby-food', label: 'Baby Food' },
  { to: '/for-parents', label: 'For Parents' },
  { to: '/milestones', label: 'Milestones' },
]

function NavLink({
  to,
  label,
  onClick,
  isActive,
}: {
  to: string
  label: string
  onClick?: () => void
  isActive: boolean
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative inline-flex items-center py-2.5 px-1 text-[15px] font-semibold transition-all duration-200 rounded-lg group ${
        isActive ? 'text-clinic-red' : 'text-gray-600 hover:text-clinic-red'
      }`}
    >
      <span>{label}</span>
      <span
        className={`absolute bottom-1 left-0 right-0 h-0.5 rounded-full bg-clinic-red transition-transform duration-300 ease-out origin-left ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />
      {isActive && (
        <span className="absolute inset-0 rounded-lg bg-clinic-pink/15 -z-10" aria-hidden />
      )}
    </Link>
  )
}

export default function Layout() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setResourcesOpen(false)
  }, [location.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close mobile menu on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    if (menuOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [menuOpen])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isResourceActive = resourceLinks.some((l) => l.to === location.pathname)
  // const { cycleLanguage, label: langLabel } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col">
      <DocumentMeta />
      <header
        className={`sticky top-0 z-50 transition-all duration-300
          bg-white/95 backdrop-blur-md
          border-b ${scrolled ? 'border-gray-200/80 shadow-lg shadow-gray-200/30' : 'border-transparent shadow-sm'}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-[4.25rem]">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
              className="flex items-center shrink-0 group transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              aria-label="Little Steps Child Care Clinic - Home"
            >
              <picture>
                <source srcSet="/logo.webp" type="image/webp" />
                <img
                  src="/logo.png"
                  alt="Little Steps Child Care Clinic"
                  width={133}
                  height={64}
                  fetchPriority="high"
                  decoding="async"
                  className="h-16 w-auto sm:h-16 md:h-16 object-contain object-left"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const fallback = target.parentElement?.nextElementSibling as HTMLElement
                    if (fallback) fallback.classList.remove('hidden')
                  }}
                />
              </picture>
              <Logo variant="compact" className="h-14 w-auto sm:h-14 md:h-14 hidden" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {mainLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  label={label}
                  isActive={location.pathname === to}
                />
              ))}

              {/* Resources dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setResourcesOpen((o) => !o)}
                  className={`relative inline-flex items-center gap-1.5 py-2.5 px-1 text-[15px] font-semibold transition-all duration-200 rounded-lg group ${
                    isResourceActive || resourcesOpen ? 'text-clinic-red' : 'text-gray-600 hover:text-clinic-red'
                  }`}
                >
                  Resources
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ease-out ${resourcesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span
                    className={`absolute bottom-1 left-0 right-0 h-0.5 rounded-full bg-clinic-red transition-transform duration-300 origin-left ${
                      isResourceActive || resourcesOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                  {(isResourceActive || resourcesOpen) && (
                    <span className="absolute inset-0 rounded-lg bg-clinic-pink/15 -z-10" aria-hidden />
                  )}
                </button>
                <div
                  className={`absolute top-full left-0 pt-2 transition-all duration-200 ease-out origin-top ${
                    resourcesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-card-hover border border-gray-100/90 py-1.5 min-w-[220px] overflow-hidden">
                    <p className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-gray-400">Resources</p>
                    {resourceLinks.map(({ to, label }) => (
                      <Link
                        key={to}
                        to={to}
                        className={`block px-4 py-2.5 text-[15px] font-medium transition-colors rounded-lg mx-1.5 ${
                          location.pathname === to
                            ? 'bg-clinic-pink/30 text-clinic-red'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-clinic-red'
                        }`}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <NavLink to="/contact" label="Contact" isActive={location.pathname === '/contact'} />

              <div className="ml-4 pl-4 border-l border-gray-200/80 flex items-center gap-2">
                {/* <button
                  type="button"
                  onClick={cycleLanguage}
                  className="inline-flex items-center justify-center px-3 py-2 rounded-xl border border-gray-200 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:text-clinic-red hover:border-clinic-red/30 transition-all duration-200"
                  aria-label="Toggle language"
                  title="Switch language: English / हिंदी / Both"
                >
                  <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                  {langLabel}
                </button> */}
                <Link
                  to="/appointment"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-clinic-red text-white text-sm font-bold shadow-lg shadow-clinic-red/25 hover:bg-clinic-red-dark hover:shadow-xl hover:shadow-clinic-red/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>

            {/* Mobile: CTA + menu toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                to="/appointment"
                className="px-4 py-2.5 rounded-xl bg-clinic-red text-white text-sm font-bold shadow-md hover:bg-clinic-red-dark active:opacity-90 transition-colors"
              >
                Book
              </Link>
              <button
                type="button"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-gray-600 hover:bg-gray-100 hover:text-clinic-red transition-colors duration-200 touch-manipulation"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((o) => !o)}
              >
                <span className="relative flex w-6 h-5 flex-col justify-center gap-1">
                  <span
                    className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out ${
                      menuOpen ? 'translate-y-2 rotate-45' : ''
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out ${
                      menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-out ${
                      menuOpen ? '-translate-y-2 -rotate-45' : ''
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay + panel (outside header so z-index stacks above everything) */}
      <div
        role="button"
        tabIndex={-1}
        aria-label="Close menu"
        className={`fixed inset-0 z-[100] lg:hidden bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ touchAction: 'manipulation' }}
        onClick={() => setMenuOpen(false)}
        onKeyDown={(e) => e.key === 'Escape' && setMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 z-[110] h-full w-[min(100vw,20rem)] max-w-[20rem] lg:hidden transition-transform duration-300 ease-out will-change-transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-modal="true"
        aria-hidden={!menuOpen}
        role="dialog"
        style={{ touchAction: 'manipulation' }}
      >
        <div className="h-full flex flex-col bg-white shadow-2xl overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-clinic-red to-clinic-orange shrink-0" />
          <div className="flex items-center justify-between h-16 px-5 border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-2">
              <IconFootprint size="sm" className="text-clinic-red" />
              <span className="font-bold text-gray-900">Menu</span>
            </div>
            <button
              type="button"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-gray-500 hover:bg-gray-100 hover:text-clinic-red transition-colors touch-manipulation"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="pt-5 pb-8 px-4 overflow-y-auto flex-1 overscroll-contain">
            <nav className="flex flex-col gap-1" onClick={(e) => e.stopPropagation()}>
              <p className="px-3 mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Main</p>
              {mainLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3.5 px-4 rounded-xl text-[15px] font-semibold transition-colors touch-manipulation ${
                    location.pathname === to
                      ? 'bg-clinic-red text-white'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-clinic-red active:bg-gray-100'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={`py-3.5 px-4 rounded-xl text-[15px] font-semibold transition-colors touch-manipulation ${
                  location.pathname === '/contact'
                    ? 'bg-clinic-red text-white'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-clinic-red active:bg-gray-100'
                }`}
              >
                Contact
              </Link>
              <div className="my-4 border-t border-gray-100 pt-4">
                <p className="px-3 mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">Resources</p>
                {resourceLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-3 px-4 rounded-xl text-[15px] font-medium transition-colors touch-manipulation ${
                      location.pathname === to
                        ? 'bg-clinic-red text-white'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-clinic-red active:bg-gray-100'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              {/* <button
                type="button"
                onClick={cycleLanguage}
                className="mt-2 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl border-2 border-gray-200 text-gray-700 text-base font-bold hover:bg-gray-50 transition-colors touch-manipulation"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
                Language: {langLabel}
              </button> */}
              <Link
                to="/appointment"
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 py-4 px-4 rounded-xl bg-clinic-red text-white text-base font-bold shadow-lg shadow-clinic-red/25 hover:bg-clinic-red-dark active:opacity-95 transition-colors touch-manipulation"
              >
                <IconCalendar size="sm" className="text-white" />
                Book Appointment
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Floating WhatsApp + Call buttons */}
      <FloatingButtons />

      <footer className="mt-auto relative overflow-hidden text-white">
        {/* Background with gradient and subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-clinic-red-dark" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Main footer content */}
          <div className="pt-12 pb-8 md:pt-14 md:pb-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
              {/* Brand column */}
              <div className="md:col-span-5 lg:col-span-4">
                <Link to="/" className="inline-flex items-center gap-3 group mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/15 group-hover:border-white/20 transition-colors">
                    <IconFootprint className="w-6 h-6 text-white" size="md" />
                  </div>
                  <span className="font-bold text-lg text-white">{CLINIC.shortName}</span>
                </Link>
                <p className="text-white/90 font-semibold mb-1">Child Care Clinic</p>
                <p className="text-sm text-white/70 font-hindi mt-2">{DOCTOR.nameHi} — {ADDRESS.hi}</p>
                <p className="text-sm text-white/60 mt-1">{ADDRESS.en}</p>
              </div>

              {/* Quick links */}
              <div className="md:col-span-3 lg:col-span-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-4">Quick links</h4>
                <ul className="space-y-2.5">
                  {mainLinks.map(({ to, label }) => (
                    <li key={to}>
                      <Link to={to} className="text-sm text-white/85 hover:text-white transition-colors duration-200">
                        {label}
                      </Link>
                    </li>
                  ))}
                  <li><Link to="/contact" className="text-sm text-white/85 hover:text-white transition-colors duration-200">Contact</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div className="md:col-span-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-4">Resources</h4>
                <ul className="space-y-2.5">
                  {resourceLinks.map(({ to, label }) => (
                    <li key={to}>
                      <Link to={to} className="text-sm text-white/85 hover:text-white transition-colors duration-200">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact + CTA */}
              <div className="md:col-span-4 lg:col-span-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/50 mb-4">Contact</h4>
                <ul className="space-y-3 text-sm text-white/85">
                  <li className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <IconPhone size="sm" className="text-white" />
                    </span>
                    <span>
                      <a href={PHONE.landlineHref} className="hover:text-white transition-colors">{PHONE.landline}</a>{' · '}
                      <a href={PHONE.mobile1Href} className="hover:text-white transition-colors">{PHONE.mobile1}</a>{', '}
                      <a href={PHONE.mobile2Href} className="hover:text-white transition-colors">{PHONE.mobile2}</a>
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <IconMail size="sm" className="text-white" />
                    </span>
                    <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                      {EMAIL}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-[#25D366]/20 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </span>
                    <a href={PHONE.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                      WhatsApp: {PHONE.mobile1}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <IconLocation size="sm" className="text-white" />
                    </span>
                    <span>{ADDRESS.en}</span>
                  </li>
                </ul>
                <Link
                  to="/appointment"
                  className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-clinic-red font-bold text-sm shadow-lg hover:bg-white/95 hover:shadow-xl transition-all duration-200"
                >
                  <IconCalendar size="sm" />
                  Book Appointment
                </Link>
              </div>
            </div>

            {/* OPD Timings */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.values(OPD_TIMINGS).map(({ label, time }) => (
                <div key={label} className="rounded-xl bg-white/5 px-4 py-3 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/50 mb-1">{label}</p>
                  <p className="text-white font-bold">{time}</p>
                </div>
              ))}
            </div>

            {/* Appointment note strip */}
            <div className="mt-6 rounded-2xl bg-white/5 px-5 py-4 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-white/80 font-hindi">नोट: कृपया अपॉईंटमेन्ट लेकर ही दिखाने आयें।</p>
              <p className="text-sm text-white/70">Please come only after taking an appointment.</p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} {CLINIC.name}
            </p>
            <p className="text-xs text-white/40">Registration: {CLINIC.registration}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}