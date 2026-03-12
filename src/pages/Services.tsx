import { Link } from 'react-router-dom'
import { IconVaccine, IconStethoscope, IconCalendar, IconArrowRight } from '../components/Icons'
import { AnimateIn } from '../components/AnimateIn'

export default function Services() {
  return (
    <div className="space-y-10">
      <AnimateIn delay={0}>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-clinic-sky/50 to-clinic-pink/40 flex items-center justify-center text-clinic-red shadow-card">
            <IconStethoscope size="lg" />
          </div>
          <div>
            <h1 className="main-title">Our Services</h1>
            <p className="text-gray-600 text-sm mt-1">Child care from birth to 18 years</p>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={80}>
        <section className="card-premium p-8">
          <h2 className="section-heading mb-4">Core Services</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-clinic-red shrink-0" />
              Child care and pediatric medicine
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-clinic-red shrink-0" />
              Neonatal care (newborn specialist)
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-clinic-red shrink-0" />
              General pediatric consultations (birth to 18 years)
            </li>
          </ul>
        </section>
      </AnimateIn>

      <AnimateIn delay={160}>
        <section className="card-premium p-8 bg-gradient-to-br from-clinic-pink/20 to-white border-clinic-red/20">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-clinic-sky/50 flex items-center justify-center text-clinic-red shrink-0">
              <IconVaccine size="lg" />
            </div>
            <div>
              <h2 className="text-clinic-red font-bold text-lg mb-2">सम्पूर्ण टीकाकरण सुविधा उपलब्ध है।</h2>
              <p className="text-gray-700 mb-4">Complete vaccination facility available. We follow the standard immunization schedule from birth through adolescence.</p>
              <Link to="/vaccination" className="link-arrow inline-flex items-center gap-1 group">
                View vaccination schedule
                <IconArrowRight size="sm" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </AnimateIn>

      <AnimateIn delay={240}>
        <section className="card-premium p-8 border-l-4 border-clinic-orange">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-clinic-cream flex items-center justify-center text-clinic-orange shrink-0">
              <IconCalendar size="lg" />
            </div>
            <div>
              <h2 className="section-heading mb-2">Appointment Policy</h2>
              <p className="text-gray-700 font-hindi mb-2">सुविधा के लिए कृपया पूर्व में समय लेकर आएँ।</p>
              <p className="text-gray-700 mb-2">For convenience, please come after taking a prior appointment.</p>
              <p className="text-gray-700 font-hindi">नोट: कृपया अपॉईंटमेन्ट लेकर ही दिखाने आयें।</p>
              <p className="text-gray-700">Note: Please come only after taking an appointment.</p>
            </div>
          </div>
        </section>
      </AnimateIn>
    </div>
  )
}
