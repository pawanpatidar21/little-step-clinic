import { Link } from 'react-router-dom'
import { IconLocation, IconPhone, IconCalendar } from '../components/Icons'
import { AnimateIn } from '../components/AnimateIn'
import { OPD_TIMINGS, PHONE, ADDRESS, EMAIL } from '../config/clinic'

export default function Contact() {
  return (
    <div className="space-y-10">
      <AnimateIn delay={0}>
        <h1 className="main-title">Contact Us</h1>
      </AnimateIn>

      {/* OPD Timings — prominent strip */}
      <AnimateIn delay={40}>
        <section className="card-premium overflow-hidden">
          <div className="bg-gradient-to-r from-clinic-red to-clinic-red-dark px-6 py-4 flex items-center gap-3">
            <IconCalendar size="md" className="text-white" />
            <h2 className="text-white font-bold text-lg">OPD Timings / ओपीडी समय</h2>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Object.entries(OPD_TIMINGS).map(([key, { label, labelHi, time }]) => (
              <div
                key={key}
                className={`rounded-xl p-4 text-center ${
                  key === 'morning'
                    ? 'bg-clinic-pink/20 border border-clinic-pink/40'
                    : key === 'evening'
                    ? 'bg-clinic-sky/20 border border-clinic-sky/40'
                    : 'bg-green-50 border border-green-200'
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">{label}</p>
                <p className={`text-xl font-extrabold ${key === 'emergency' ? 'text-green-600' : 'text-clinic-red'}`}>{time}</p>
                <p className="text-xs text-gray-500 font-hindi mt-1">{labelHi}</p>
              </div>
            ))}
          </div>
        </section>
      </AnimateIn>

      <div className="grid md:grid-cols-2 gap-6">
        <AnimateIn delay={80}>
          <section className="card-premium p-8 h-full">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-clinic-pink/50 flex items-center justify-center text-clinic-red shrink-0">
                <IconLocation size="lg" />
              </div>
              <div>
                <h2 className="section-heading mb-2">Clinic Address</h2>
                <p className="text-gray-700 font-hindi">{ADDRESS.hi}</p>
                <p className="text-gray-700 mt-2">{ADDRESS.en}</p>
              </div>
            </div>
          </section>
        </AnimateIn>

        <AnimateIn delay={160}>
          <section className="card-premium p-8 h-full">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-clinic-sky/50 flex items-center justify-center text-clinic-red shrink-0">
                <IconPhone size="lg" />
              </div>
              <div>
                <h2 className="section-heading mb-2">Phone & Email</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Landline:</strong>{' '}
                    <a href={PHONE.landlineHref} className="text-clinic-red hover:underline font-medium">{PHONE.landline}</a>
                  </li>
                  <li>
                    <strong>Mobile:</strong>{' '}
                    <a href={PHONE.mobile1Href} className="text-clinic-red hover:underline font-medium">{PHONE.mobile1}</a>
                    {', '}
                    <a href={PHONE.mobile2Href} className="text-clinic-red hover:underline font-medium">{PHONE.mobile2}</a>
                  </li>
                  <li>
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${EMAIL}`} className="text-clinic-red hover:underline font-medium">{EMAIL}</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </AnimateIn>
      </div>

      {/* Google Maps Embed */}
      <AnimateIn delay={180}>
        <section className="card-premium overflow-hidden">
          <div className="bg-gradient-to-r from-clinic-sky-dark to-clinic-sky px-6 py-4 flex items-center gap-3">
            <IconLocation size="md" className="text-white" />
            <h2 className="text-white font-bold text-lg">Clinic Location / क्लिनिक का स्थान</h2>
          </div>
          <div className="p-4 sm:p-6">
            <div className="rounded-xl overflow-hidden shadow-card border border-gray-100">
              <iframe
                title="Little Steps Child Care Clinic — Mandsaur Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.5!2d75.069!3d24.071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGol%20Chauraha%2C%20Mandsaur%2C%20Madhya%20Pradesh%20458001!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-sm text-gray-700 font-semibold">📍 {ADDRESS.en}</p>
                <p className="text-sm text-gray-500 font-hindi">{ADDRESS.hi}</p>
              </div>
              <a
                href={ADDRESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-clinic-red text-white rounded-xl font-semibold text-sm hover:bg-clinic-red-dark transition-colors shadow-sm shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>
      </AnimateIn>

      {/* WhatsApp & Quick Actions */}
      <AnimateIn delay={240}>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href={PHONE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-premium p-6 flex items-center gap-4 group hover:border-[#25D366]/40"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#25D366]/15 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/25 transition-colors">
              <svg className="w-8 h-8 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-gray-900 group-hover:text-[#25D366] transition-colors">Chat on WhatsApp</p>
              <p className="text-sm text-gray-500">Tap to send a message</p>
            </div>
          </a>
          <Link
            to="/appointment"
            className="card-premium p-6 flex items-center gap-4 group hover:border-clinic-red/30"
          >
            <div className="w-14 h-14 rounded-2xl bg-clinic-pink/50 flex items-center justify-center text-clinic-red shrink-0 group-hover:bg-clinic-pink/70 transition-colors">
              <IconCalendar size="lg" />
            </div>
            <div>
              <p className="font-bold text-gray-900 group-hover:text-clinic-red transition-colors">Book Appointment</p>
              <p className="text-sm text-gray-500">Schedule your visit online</p>
            </div>
          </Link>
        </div>
      </AnimateIn>

      <AnimateIn delay={320}>
        <section className="card-premium p-6 bg-amber-50/50 border-amber-200/50">
          <p className="text-gray-700 font-hindi text-sm">नोट: कृपया अपॉईंटमेन्ट लेकर ही दिखाने आयें।</p>
          <p className="text-gray-600 text-sm mt-1">Please come only after taking an appointment.</p>
        </section>
      </AnimateIn>
    </div>
  )
}
