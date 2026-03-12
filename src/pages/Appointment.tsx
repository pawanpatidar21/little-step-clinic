import { IconCalendar, IconPhone } from '../components/Icons'
import { AnimateIn } from '../components/AnimateIn'
import { PHONE } from '../config/clinic'

const LANDLINE = PHONE.landline
const MOBILE_1 = PHONE.mobile1
const MOBILE_2 = PHONE.mobile2

// For tel: links use config href values
const telLandline = PHONE.landlineHref.replace('tel:', '')
const telMobile1 = PHONE.mobile1Href.replace('tel:', '')
const telMobile2 = PHONE.mobile2Href.replace('tel:', '')

export default function Appointment() {
  return (
    <div className="space-y-8">
      <AnimateIn delay={0}>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-clinic-red/20 to-clinic-pink/50 flex items-center justify-center text-clinic-red shadow-card">
            <IconCalendar size="lg" />
          </div>
          <div>
            <h1 className="main-title">Book an Appointment</h1>
            <p className="text-gray-600 text-sm mt-1 font-hindi">सुविधा के लिए कृपया पूर्व में समय लेकर आएँ।</p>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={80}>
        <p className="text-gray-600 font-hindi">नोट: कृपया अपॉईंटमेन्ट लेकर ही दिखाने आयें।</p>
        <p className="text-gray-600 mt-1">Please come only after taking an appointment. Call the numbers below to book.</p>
      </AnimateIn>

      <AnimateIn delay={120}>
        <section className="card-premium overflow-hidden max-w-2xl">
          {/* Header strip */}
          <div className="bg-gradient-to-r from-clinic-red to-clinic-red-dark px-6 py-5 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white shrink-0">
              <IconPhone size="lg" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Call to book</h2>
              <p className="text-sm text-white/90">Landline & mobile</p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Landline */}
              <a
                href={`tel:${telLandline}`}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-clinic-pink/20 border border-gray-100 hover:border-clinic-pink/30 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clinic-sky to-clinic-sky-dark flex items-center justify-center text-white shadow-card-soft shrink-0 group-hover:scale-105 transition-transform">
                  <IconPhone size="lg" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-0.5">Landline</p>
                  <p className="text-xl md:text-2xl font-bold text-clinic-red group-hover:text-clinic-red-dark transition-colors tabular-nums">
                    {LANDLINE}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Tap to call</p>
                </div>
              </a>

              {/* Mobile */}
              <div className="sm:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-clinic-red to-clinic-red-dark flex items-center justify-center text-white shadow-card-soft shrink-0">
                    <IconPhone size="md" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Mobile</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${telMobile1}`}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-clinic-pink/20 border border-gray-100 hover:border-clinic-pink/30 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-clinic-red shrink-0 group-hover:bg-clinic-pink/30 transition-colors">
                      <IconPhone size="sm" />
                    </div>
                    <span className="text-xl font-bold text-clinic-red group-hover:text-clinic-red-dark transition-colors tabular-nums">
                      {MOBILE_1}
                    </span>
                  </a>
                  <a
                    href={`tel:${telMobile2}`}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-clinic-pink/20 border border-gray-100 hover:border-clinic-pink/30 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-clinic-red shrink-0 group-hover:bg-clinic-pink/30 transition-colors">
                      <IconPhone size="sm" />
                    </div>
                    <span className="text-xl font-bold text-clinic-red group-hover:text-clinic-red-dark transition-colors tabular-nums">
                      {MOBILE_2}
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              Online booking form will be available soon.
            </p>
          </div>
        </section>
      </AnimateIn>
    </div>
  )
}
