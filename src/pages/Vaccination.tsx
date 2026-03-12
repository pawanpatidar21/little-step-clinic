import { useState } from 'react'
import { IconVaccine, IconHeartBaby } from '../components/Icons'
import { AnimateIn } from '../components/AnimateIn'

/* ── vaccine calculator data ── */

const vaccineCalcSchedule = [
  { ageLabel: 'At Birth', ageHi: 'जन्म पर', days: 0, vaccines: 'BCG, OPV' },
  { ageLabel: '6 Weeks', ageHi: '6 सप्ताह', days: 42, vaccines: 'Hep-B (1st), DTwP/DTaP (1st), IPV/OPV (1st), Hib (1st), Rotavirus (1st), PCV (1st)' },
  { ageLabel: '10 Weeks', ageHi: '10 सप्ताह', days: 70, vaccines: 'DTwP/DTaP (2nd), IPV/OPV (2nd), Hib (2nd), Hep-B (3rd), Rotavirus (2nd), PCV (2nd)' },
  { ageLabel: '14 Weeks', ageHi: '14 सप्ताह', days: 98, vaccines: 'DTwP/DTaP (3rd), IPV/OPV (3rd), Hib (3rd), Hep-B (4th), Rotavirus (3rd), PCV (3rd)' },
  { ageLabel: '6 Months', ageHi: '6 माह', days: 183, vaccines: 'TCV' },
  { ageLabel: '9 Months', ageHi: '9 माह', days: 274, vaccines: 'MMR + Vitamin A (1st) + FIPV, MCV (1st)' },
  { ageLabel: '12 Months', ageHi: '12 माह', days: 365, vaccines: 'Hep A (1st), MCV (2nd), JE (1st)' },
  { ageLabel: '13 Months', ageHi: '13 माह', days: 395, vaccines: 'JE (2nd)' },
  { ageLabel: '15 Months', ageHi: '15 माह', days: 456, vaccines: 'MMR + Vitamin A (2nd), Varicella (1st), PCV Booster, Cholera' },
  { ageLabel: '16–18 Months', ageHi: '16–18 माह', days: 487, vaccines: 'DTwP/DTaP Booster, IPV Booster, Hib Booster' },
  { ageLabel: '18 Months', ageHi: '18 माह', days: 548, vaccines: 'Hep A (2nd), Varicella (2nd)' },
  { ageLabel: '2 Years', ageHi: '2 साल', days: 730, vaccines: 'MCV/TCV Booster' },
  { ageLabel: '4–6 Years', ageHi: '4–6 साल', days: 1461, vaccines: 'DTwP/DTaP (B2), IPV Booster (2nd), MMR (3rd)' },
  { ageLabel: '9–14 Years', ageHi: '9–14 साल', days: 3287, vaccines: 'Tdap, HPV (1 & 2), PCV (high-risk)' },
  { ageLabel: '15–18 Years', ageHi: '15–18 साल', days: 5475, vaccines: 'Td, HPV (1, 2, 3 doses)' },
]

function getChildAge(dob: Date): string {
  const now = new Date()
  let years = now.getFullYear() - dob.getFullYear()
  let months = now.getMonth() - dob.getMonth()
  let days = now.getDate() - dob.getDate()
  if (days < 0) {
    months--
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate()
  }
  if (months < 0) {
    years--
    months += 12
  }
  const parts: string[] = []
  if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`)
  if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`)
  if (days > 0 && years === 0) parts.push(`${days} day${days > 1 ? 's' : ''}`)
  return parts.join(', ') || '0 days'
}

type VaccineStatus = 'done' | 'due' | 'upcoming'

function getVaccineTimeline(dob: Date) {
  const now = new Date()
  const diffMs = now.getTime() - dob.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  return vaccineCalcSchedule.map((v) => {
    const dueDate = new Date(dob.getTime() + v.days * 24 * 60 * 60 * 1000)
    const daysDiff = diffDays - v.days // positive = past due
    let status: VaccineStatus = 'upcoming'
    if (daysDiff > 30) status = 'done'
    else if (daysDiff >= -14) status = 'due'
    return { ...v, dueDate, status }
  })
}

const statusConfig: Record<VaccineStatus, { badge: string; bg: string; dot: string; label: string; labelHi: string }> = {
  done: { badge: 'bg-green-100 text-green-700', bg: 'bg-green-50/50', dot: 'bg-green-500 border-green-300', label: '✅ Expected Done', labelHi: 'संभावित पूर्ण' },
  due: { badge: 'bg-amber-100 text-amber-700', bg: 'bg-amber-50/50', dot: 'bg-amber-500 border-amber-300', label: '⚡ Due Now', labelHi: 'अभी देय' },
  upcoming: { badge: 'bg-blue-100 text-blue-700', bg: 'bg-blue-50/30', dot: 'bg-blue-400 border-blue-200', label: '📅 Upcoming', labelHi: 'आगामी' },
}

const schedule = [
  { age: 'At Birth', vaccines: 'BCG, OPV' },
  { age: '6 Weeks', vaccines: 'Hep-B (1st), DTwP/DTaP (1st), IPV/OPV (1st), Hib (1st), Hep-B (2nd), Rotavirus (1st), PCV (1st)' },
  { age: '10 Weeks', vaccines: 'DTwP/DTaP (2nd), IPV/OPV (2nd), Hib (2nd), Hep-B (3rd), Rotavirus (2nd), PCV (2nd)' },
  { age: '14 Weeks', vaccines: 'DTwP/DTaP (3rd), IPV/OPV (3rd), Hib (3rd), Hep-B (4th), Rotavirus (3rd), PCV (3rd)' },
  { age: '6 Months', vaccines: 'TCV' },
  { age: '> 6 Months', vaccines: 'Influenza (1st dose), Influenza (2nd dose, after 1 month)' },
  { age: '9 Months', vaccines: 'MMR + Vitamin A (1st) + FIPV, MCV (1st)' },
  { age: '12 Months', vaccines: 'Hep A (1st), MCV (2nd), JE (1st)' },
  { age: '13 Months', vaccines: 'JE (2nd)' },
  { age: '15 Months', vaccines: 'MMR + Vitamin A (2nd), Varicella (1st), PCV (Booster 1st), Cholera (1 & 2)' },
  { age: '16–18 Months', vaccines: 'DTwP/DTaP (Booster), IPV (Booster 1st), Hib (Booster)' },
  { age: '18 Months', vaccines: 'Hep A (2nd)' },
  { age: '18–21 Months', vaccines: 'Varicella (2nd)' },
  { age: '2 Years', vaccines: 'MCV/TCV (Booster)' },
  { age: '4–6 Years', vaccines: 'DTwP (B2)/DTaP (B2), IPV Booster (2nd), MMR (3rd)' },
  { age: '9–14 Years', vaccines: 'Tdap, HPV (1 & 2), PCV (high-risk children)' },
  { age: '15–18 Years', vaccines: 'Td, HPV (1, 2, 3 doses)' },
]

export default function Vaccination() {
  const [dob, setDob] = useState('')
  const timeline = dob ? getVaccineTimeline(new Date(dob)) : null
  const summary = timeline
    ? {
        done: timeline.filter((t) => t.status === 'done').length,
        due: timeline.filter((t) => t.status === 'due').length,
        upcoming: timeline.filter((t) => t.status === 'upcoming').length,
      }
    : null

  return (
    <div className="space-y-10">
      <AnimateIn delay={0}>
        <div className="card-premium overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
              <div className="inline-flex items-center gap-2 w-fit mb-4 px-3 py-1.5 rounded-full bg-clinic-sky/50 text-clinic-red">
                <IconVaccine size="sm" />
                <span className="font-semibold text-sm">टीकाकरण</span>
              </div>
              <h1 className="main-title text-2xl md:text-3xl">Vaccination Schedule</h1>
              <p className="text-gray-600 mt-2">5 साल 7 बार — छूटे न टीका एक भी बार</p>
            </div>
            <div className="relative min-h-[200px] md:min-h-[280px] bg-gradient-to-br from-clinic-sky/30 to-clinic-cream order-1 md:order-2">
              <picture>
                <source srcSet="/images/vaccination-illustration.webp" type="image/webp" />
                <img
                  src="/images/vaccination-illustration.png"
                  alt="Vaccination - child care"
                  width={800}
                  height={446}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              </picture>
            </div>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={80}>
        <div className="bg-gradient-to-r from-clinic-red to-clinic-red-dark text-white rounded-2xl p-6 md:p-8 text-center shadow-premium">
          <p className="font-hindi font-bold text-lg">5 साल 7 बार — छूटे न टीका एक भी बार</p>
          <p className="mt-1 text-white/90">5 years, 7 times — don’t miss a single vaccine.</p>
          <p className="font-hindi mt-4 opacity-90">अपने शिशु का टीकाकरण समय पर कराएं, यह शिशु को गंभीर बीमारियों से बचाता है।</p>
          <p className="mt-1 text-white/80 text-sm">Get your child vaccinated on time; it protects the child from serious diseases.</p>
        </div>
      </AnimateIn>

      {/* ── Vaccine Due Date Calculator ── */}
      <AnimateIn delay={120}>
        <section className="card-premium overflow-hidden">
          <div className="bg-gradient-to-r from-clinic-sky-dark to-clinic-sky p-6 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white shrink-0">
              <IconVaccine size="lg" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Vaccine Due Date Calculator</h2>
              <p className="text-white/90 text-sm font-hindi">टीकाकरण तिथि कैलकुलेटर — जन्म तिथि डालें</p>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Child's Date of Birth / बच्चे की जन्म तिथि
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              className="w-full sm:w-auto px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-base font-medium text-gray-800 focus:ring-2 focus:ring-clinic-red/40 focus:bg-white focus:border-clinic-red/40 transition"
            />

            {timeline && summary && (
              <div className="mt-6 space-y-5">
                {/* Child age + summary */}
                <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-clinic-pink/15 border border-clinic-pink/30">
                  <IconHeartBaby size="md" className="text-clinic-red shrink-0" />
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">
                      Your child is <span className="text-clinic-red">{getChildAge(new Date(dob))}</span> old
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Born: {new Date(dob).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                </div>

                {/* Summary badges */}
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-bold">
                    ✅ {summary.done} Done
                  </span>
                  {summary.due > 0 && (
                    <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-bold animate-pulse-soft">
                      ⚡ {summary.due} Due Now
                    </span>
                  )}
                  <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
                    📅 {summary.upcoming} Upcoming
                  </span>
                </div>

                {/* Timeline */}
                <div className="space-y-0">
                  {timeline.map((item, i) => {
                    const cfg = statusConfig[item.status]
                    return (
                      <div key={item.ageLabel} className="flex gap-3 md:gap-4">
                        {/* Timeline connector */}
                        <div className="flex flex-col items-center w-4 shrink-0">
                          <div className={`w-3.5 h-3.5 rounded-full border-2 ${cfg.dot} shrink-0 mt-3`} />
                          {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-gray-200" />}
                        </div>
                        {/* Content */}
                        <div className={`flex-1 p-3 rounded-xl mb-2 ${cfg.bg} border border-transparent`}>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cfg.badge}`}>
                              {cfg.label}
                            </span>
                            <span className="font-semibold text-gray-800 text-sm">{item.ageLabel}</span>
                            <span className="text-xs text-gray-400 font-hindi">{item.ageHi}</span>
                          </div>
                          <p className="text-sm text-gray-700">{item.vaccines}</p>
                          <p className="text-xs text-gray-400 mt-1">
                            Due: {item.dueDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <p className="text-xs text-gray-400 mt-4">
                  * This is an indicative schedule. Always follow your doctor's advice for exact dates.
                </p>
              </div>
            )}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn delay={160}>
        <section className="card-premium overflow-hidden p-0">
          <h2 className="section-heading p-6 pb-0">Immunization schedule by age</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-clinic-red text-white">
                  <th className="text-left py-4 px-5 font-semibold">Age</th>
                  <th className="text-left py-4 px-5 font-semibold">Vaccines</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr
                    key={row.age}
                    className={i % 2 === 0 ? 'bg-clinic-sky/20' : 'bg-white'}
                  >
                    <td className="py-3 px-5 font-medium">{row.age}</td>
                    <td className="py-3 px-5 text-gray-700">{row.vaccines}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </AnimateIn>

      <AnimateIn delay={240}>
        <section className="card-premium p-8">
          <h2 className="section-heading mb-3">Other vaccines (as needed)</h2>
          <ul className="text-gray-700 space-y-1">
            <li>• COVID vaccine (as recommended)</li>
            <li>• Rabies</li>
            <li>• Yellow fever</li>
            <li>• Any other vaccine / Immunoglobulin</li>
          </ul>
        </section>
      </AnimateIn>

      <AnimateIn delay={320}>
        <section className="card-premium p-8 border-l-4 border-amber-400 bg-amber-50/30">
          <h2 className="section-heading mb-4">Important notes (patient education)</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li><strong>BCG:</strong> A small blister and then a mark are normal after BCG; no special reason needed.</li>
            <li><strong>Common side effects:</strong> Mild fever and swelling at injection site can occur.</li>
            <li><strong>Efficacy:</strong> No vaccine gives 100% protection; disease can still occur after vaccination.</li>
            <li><strong>Reactions:</strong> Sometimes significant reactions need medical attention.</li>
          </ol>
        </section>
      </AnimateIn>
    </div>
  )
}
