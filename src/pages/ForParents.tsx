import { IconAlert, IconBabyFood, IconCalendar } from '../components/Icons'
import { AnimateIn } from '../components/AnimateIn'
import { DOSAGE_TABLE, WARNING_SIGNS, PHONE } from '../config/clinic'

const dosageGuide = DOSAGE_TABLE
const warningSigns = WARNING_SIGNS

export default function ForParents() {
  return (
    <div className="space-y-10">
      <AnimateIn delay={0}>
        <h1 className="main-title">For Parents</h1>
      </AnimateIn>

      <AnimateIn delay={80}>
        <section className="card-premium p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-clinic-sky/50 flex items-center justify-center text-clinic-red">
              <IconBabyFood size="md" />
            </div>
            <h2 className="section-heading mb-0">Medication dosage guide</h2>
          </div>
          <p className="text-gray-600 text-sm mb-4">Use this for giving liquid medicines at home.</p>
          <div className="overflow-x-auto max-w-md">
            <table className="w-full">
              <thead>
                <tr className="bg-clinic-red text-white">
                  <th className="py-2.5 px-4 text-left font-semibold">Measure</th>
                  <th className="py-2.5 px-4 text-left font-semibold">Equivalent</th>
                </tr>
              </thead>
              <tbody>
                {dosageGuide.map((row, i) => (
                  <tr key={row.measure} className={i % 2 === 0 ? 'bg-clinic-sky/20' : 'bg-white'}>
                    <td className="py-2 px-4 font-medium">{row.measure}</td>
                    <td className="py-2 px-4">{row.equivalent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </AnimateIn>

      <AnimateIn delay={160}>
        <section className="overflow-hidden rounded-[1.25rem] bg-white shadow-card border border-gray-100/80">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-5 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/25 flex items-center justify-center text-white shrink-0">
              <IconAlert size="lg" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">When to see the doctor immediately</h2>
              <p className="text-white/95 text-sm font-hindi mt-0.5">शिशु में इनमें से कोई भी लक्षण दिखने पर तुरन्त डॉक्टर को दिखायें....</p>
            </div>
          </div>
          <div className="p-5 md:p-6">
            <ul className="space-y-2">
              {warningSigns.map(({ hi, en }, i) => (
                <li key={hi} className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/60 border border-amber-100">
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
          </div>
        </section>
      </AnimateIn>

      <AnimateIn delay={240}>
        <section className="card-premium p-8 flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-clinic-cream flex items-center justify-center text-clinic-orange shrink-0">
            <IconCalendar size="md" />
          </div>
          <div>
            <h2 className="section-heading mb-2">Appointment reminder</h2>
            <p className="text-gray-700 font-hindi">नोट: कृपया अपॉईंटमेन्ट लेकर ही दिखाने आयें।</p>
            <p className="text-gray-600 mt-2">Please come only after taking an appointment. Call {PHONE.landline}, {PHONE.mobile1}, or {PHONE.mobile2} to book.</p>
          </div>
        </section>
      </AnimateIn>
    </div>
  )
}
