import { IconStethoscope, IconHeartBaby } from '../components/Icons'
import { AnimateIn } from '../components/AnimateIn'
import { DOCTOR, CLINIC } from '../config/clinic'

const qualifications = DOCTOR.qualifications
const experience = DOCTOR.experience

export default function About() {
  return (
    <div className="space-y-14 md:space-y-16">
      {/* Hero header */}
      <AnimateIn delay={0}>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-clinic-pink to-clinic-red/20 flex items-center justify-center text-clinic-red shadow-card shrink-0">
            <IconStethoscope size="lg" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-clinic-red tracking-tight">
              About the Doctor
            </h1>
            <p className="text-gray-500 mt-1 text-lg">Consulting Pediatrician & Neonatologist</p>
          </div>
        </div>
      </AnimateIn>

      {/* Doctor intro card — modern layout + Ghibli-style photo */}
      <AnimateIn delay={80}>
        <section className="relative card-premium p-8 md:p-12 overflow-visible">
          {/* Soft glowing blob behind photo (Ghibli-style) */}
          <div
            className="absolute top-1/2 left-1/2 lg:left-[18rem] -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-clinic-pink/40 via-clinic-sky/30 to-clinic-cream/50 pointer-events-none animate-ghibli-glow"
            aria-hidden
          />
          <div className="relative flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">
            {/* Photo with Ghibli float animation */}
            <AnimateIn delay={120} className="flex-shrink-0 flex justify-center lg:justify-start">
              <div className="relative inline-block animate-ghibli-float">
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-[1.5rem] overflow-hidden shadow-card ring-4 ring-white/80 ring-offset-4 ring-offset-clinic-beige bg-gray-100">
                  <picture>
                    <source srcSet="/images/dr-rajat-patidar.webp" type="image/webp" />
                    <img
                      src={DOCTOR.photo}
                      alt={`${DOCTOR.name} — ${DOCTOR.title}`}
                      width={576}
                      height={768}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                  </picture>
                </div>
                {/* Subtle corner accent */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-2xl bg-clinic-sky/20 -z-10" />
              </div>
            </AnimateIn>
            {/* Bio */}
            <div className="flex-1 min-w-0 space-y-6">
              <div className="inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br from-clinic-pink to-clinic-red/30 items-center justify-center text-white shadow-card-soft">
                <IconHeartBaby size="lg" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-clinic-red">{DOCTOR.name}</h2>
                <p className="font-hindi text-xl text-gray-700 mt-1">{DOCTOR.nameHi}</p>
                <p className="text-clinic-orange font-semibold mt-2">{DOCTOR.title}</p>
              </div>
              <p className="text-gray-700 font-hindi leading-relaxed">
                {DOCTOR.titleHi} — {DOCTOR.bio}
              </p>
              <p className="text-sm text-gray-500">Registration: {CLINIC.registration}</p>
            </div>
          </div>
        </section>
      </AnimateIn>

      {/* Qualifications & Experience — two-column on large screens */}
      <div className="grid md:grid-cols-2 gap-8">
        <AnimateIn delay={160}>
          <section className="card-premium p-8 border-l-4 border-clinic-orange h-full">
            <h2 className="section-heading mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-clinic-orange/15 flex items-center justify-center text-clinic-orange text-sm font-bold">Q</span>
              Qualifications
            </h2>
            <ul className="space-y-3">
              {qualifications.map((q) => (
                <li key={q} className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-clinic-orange shrink-0 mt-1.5" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </section>
        </AnimateIn>
        <AnimateIn delay={200}>
          <section className="card-premium p-8 border-l-4 border-clinic-sky-dark h-full">
            <h2 className="section-heading mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-clinic-sky/30 flex items-center justify-center text-clinic-sky-dark text-sm font-bold">E</span>
              Previous Experience
            </h2>
            <ul className="space-y-3">
              {experience.map((e) => (
                <li key={e} className="flex items-start gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-clinic-sky-dark shrink-0 mt-1.5" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </section>
        </AnimateIn>
      </div>
    </div>
  )
}
