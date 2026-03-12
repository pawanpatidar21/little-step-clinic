import { useState } from 'react'
import { IconGrowth, IconHeartBaby } from '../components/Icons'
import { AnimateIn } from '../components/AnimateIn'

/* ── Growth calculator reference data ── */

const growthRef = [
  { months: 0, boys: { weight: 3.3, length: 50.63 }, girls: { weight: 3.2, length: 49.9 } },
  { months: 3, boys: { weight: 6.0, length: 61.16 }, girls: { weight: 5.4, length: 60.2 } },
  { months: 6, boys: { weight: 7.8, length: 67.89 }, girls: { weight: 7.2, length: 66.6 } },
  { months: 9, boys: { weight: 9.2, length: 72.3 }, girls: { weight: 8.6, length: 71.7 } },
  { months: 12, boys: { weight: 10.2, length: 76.1 }, girls: { weight: 9.5, length: 75.0 } },
  { months: 24, boys: { weight: 12.3, length: 85.6 }, girls: { weight: 11.8, length: 84.5 } },
  { months: 36, boys: { weight: 14.8, length: 94.5 }, girls: { weight: 14.1, length: 93.8 } },
  { months: 48, boys: { weight: 16.7, length: 102.6 }, girls: { weight: 16.0, length: 101.6 } },
  { months: 60, boys: { weight: 18.7, length: 109.9 }, girls: { weight: 17.7, length: 108.4 } },
  { months: 72, boys: { weight: 20.7, length: 116.1 }, girls: { weight: 19.5, length: 114.5 } },
  { months: 84, boys: { weight: 22.9, length: 121.7 }, girls: { weight: 21.8, length: 120.8 } },
  { months: 96, boys: { weight: 25.3, length: 127.0 }, girls: { weight: 24.8, length: 126.4 } },
  { months: 108, boys: { weight: 28.1, length: 132.2 }, girls: { weight: 28.5, length: 132.2 } },
  { months: 120, boys: { weight: 31.4, length: 137.6 }, girls: { weight: 32.5, length: 138.3 } },
  { months: 132, boys: { weight: 32.2, length: 140.0 }, girls: { weight: 33.7, length: 142.0 } },
  { months: 144, boys: { weight: 37.0, length: 147.0 }, girls: { weight: 38.7, length: 148.0 } },
  { months: 156, boys: { weight: 40.9, length: 153.0 }, girls: { weight: 44.0, length: 150.0 } },
  { months: 168, boys: { weight: 47.0, length: 160.0 }, girls: { weight: 48.0, length: 155.0 } },
  { months: 180, boys: { weight: 52.6, length: 168.0 }, girls: { weight: 51.5, length: 161.0 } },
  { months: 192, boys: { weight: 58.0, length: 171.0 }, girls: { weight: 53.0, length: 162.0 } },
]

function interpolateRef(ageMonths: number, gender: 'boys' | 'girls') {
  if (ageMonths <= growthRef[0].months) return growthRef[0][gender]
  if (ageMonths >= growthRef[growthRef.length - 1].months) return growthRef[growthRef.length - 1][gender]
  for (let i = 0; i < growthRef.length - 1; i++) {
    if (ageMonths >= growthRef[i].months && ageMonths <= growthRef[i + 1].months) {
      const ratio = (ageMonths - growthRef[i].months) / (growthRef[i + 1].months - growthRef[i].months)
      return {
        weight: +(growthRef[i][gender].weight + ratio * (growthRef[i + 1][gender].weight - growthRef[i][gender].weight)).toFixed(1),
        length: +(growthRef[i][gender].length + ratio * (growthRef[i + 1][gender].length - growthRef[i][gender].length)).toFixed(1),
      }
    }
  }
  return growthRef[0][gender]
}

function getAgeMonths(dob: Date): number {
  const now = new Date()
  return (now.getFullYear() - dob.getFullYear()) * 12 + (now.getMonth() - dob.getMonth()) + (now.getDate() - dob.getDate()) / 30
}

function getAgeLabel(months: number): string {
  if (months < 1) return `${Math.round(months * 30)} days`
  if (months < 12) return `${Math.round(months)} month${Math.round(months) !== 1 ? 's' : ''}`
  const y = Math.floor(months / 12)
  const m = Math.round(months % 12)
  return m > 0 ? `${y} year${y > 1 ? 's' : ''}, ${m} month${m > 1 ? 's' : ''}` : `${y} year${y > 1 ? 's' : ''}`
}

function getComparisonLabel(actual: number, reference: number): { text: string; color: string } {
  const pct = ((actual - reference) / reference) * 100
  if (pct < -15) return { text: 'Below average — consult doctor', color: 'text-red-600' }
  if (pct < -5) return { text: 'Slightly below average', color: 'text-amber-600' }
  if (pct <= 10) return { text: 'Within normal range ✓', color: 'text-green-600' }
  if (pct <= 20) return { text: 'Above average', color: 'text-blue-600' }
  return { text: 'Well above average', color: 'text-blue-700' }
}

const boys = [
  { age: 'जन्म (Birth)', weight: 3.3, length: 50.63 },
  { age: '3 माह', weight: 6.0, length: 61.16 },
  { age: '6 माह', weight: 7.8, length: 67.89 },
  { age: '9 माह', weight: 9.2, length: 72.3 },
  { age: '1 साल', weight: 10.2, length: 76.1 },
  { age: '2 साल', weight: 12.3, length: 85.6 },
  { age: '3 साल', weight: 14.8, length: 94.5 },
  { age: '4 साल', weight: 16.7, length: 102.6 },
  { age: '5 साल', weight: 18.7, length: 109.9 },
  { age: '6 साल', weight: 20.7, length: 116.1 },
  { age: '7 साल', weight: 22.9, length: 121.7 },
  { age: '8 साल', weight: 25.3, length: 127.0 },
  { age: '9 साल', weight: 28.1, length: 132.2 },
  { age: '10 साल', weight: 31.4, length: 137.6 },
  { age: '11 साल', weight: 32.2, length: 140.0 },
  { age: '12 साल', weight: 37.0, length: 147.0 },
  { age: '13 साल', weight: 40.9, length: 153.0 },
  { age: '14 साल', weight: 47.0, length: 160.0 },
  { age: '15 साल', weight: 52.6, length: 168.0 },
  { age: '16 साल', weight: 58.0, length: 171.0 },
]

const girls = [
  { age: 'जन्म (Birth)', weight: 3.2, length: 49.9 },
  { age: '3 माह', weight: 5.4, length: 60.2 },
  { age: '6 माह', weight: 7.2, length: 66.6 },
  { age: '9 माह', weight: 8.6, length: 71.7 },
  { age: '1 साल', weight: 9.5, length: 75.0 },
  { age: '2 साल', weight: 11.8, length: 84.5 },
  { age: '3 साल', weight: 14.1, length: 93.8 },
  { age: '4 साल', weight: 16.0, length: 101.6 },
  { age: '5 साल', weight: 17.7, length: 108.4 },
  { age: '6 साल', weight: 19.5, length: 114.5 },
  { age: '7 साल', weight: 21.8, length: 120.8 },
  { age: '8 साल', weight: 24.8, length: 126.4 },
  { age: '9 साल', weight: 28.5, length: 132.2 },
  { age: '10 साल', weight: 32.5, length: 138.3 },
  { age: '11 साल', weight: 33.7, length: 142.0 },
  { age: '12 साल', weight: 38.7, length: 148.0 },
  { age: '13 साल', weight: 44.0, length: 150.0 },
  { age: '14 साल', weight: 48.0, length: 155.0 },
  { age: '15 साल', weight: 51.5, length: 161.0 },
  { age: '16 साल', weight: 53.0, length: 162.0 },
]

function ChartTable({ title, rows, rowBg }: { title: string; rows: typeof boys; rowBg: 'sky' | 'pink' }) {
  const bgClass = rowBg === 'sky' ? 'bg-clinic-sky/25' : 'bg-clinic-pink/25'
  return (
    <section className="card-premium overflow-hidden">
      <div className="flex items-center gap-3 p-6 pb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${rowBg === 'sky' ? 'bg-clinic-sky/50 text-clinic-red' : 'bg-clinic-pink/50 text-clinic-red'}`}>
          <IconGrowth size="md" />
        </div>
        <h2 className="section-heading mb-0">{title}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-3 px-5 font-semibold text-left bg-clinic-red text-white">उम्र / Age</th>
              <th className="py-3 px-5 font-semibold text-left bg-blue-200 text-gray-800">वजन (कि.ग्रा.)</th>
              <th className="py-3 px-5 font-semibold text-left bg-clinic-pink text-gray-800">लम्बाई (से.मी.)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.age} className={i % 2 === 0 ? bgClass : 'bg-white'}>
                <td className="py-2.5 px-5 font-medium">{row.age}</td>
                <td className="py-2.5 px-5">{row.weight}</td>
                <td className="py-2.5 px-5">{row.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default function GrowthCharts() {
  const [calcDob, setCalcDob] = useState('')
  const [calcGender, setCalcGender] = useState<'boys' | 'girls'>('boys')
  const [calcWeight, setCalcWeight] = useState('')
  const [calcLength, setCalcLength] = useState('')

  const ageMonths = calcDob ? getAgeMonths(new Date(calcDob)) : null
  const reference = ageMonths !== null ? interpolateRef(Math.max(0, ageMonths), calcGender) : null

  return (
    <div className="space-y-10">
      <AnimateIn delay={0}>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-clinic-sky/50 to-clinic-pink/40 flex items-center justify-center text-clinic-red shadow-card">
            <IconGrowth size="lg" />
          </div>
          <div>
            <h1 className="main-title">वजन लम्बाई चार्ट / Weight & Length Charts</h1>
            <p className="text-gray-600 text-sm mt-1">Average weight and length reference for boys and girls (birth to 16 years).</p>
          </div>
        </div>
      </AnimateIn>

      {/* ── Growth Calculator ── */}
      <AnimateIn delay={40}>
        <section className="card-premium overflow-hidden">
          <div className="bg-gradient-to-r from-clinic-sky-dark to-clinic-sky p-6 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white shrink-0">
              <IconGrowth size="lg" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Growth Calculator</h2>
              <p className="text-white/90 text-sm font-hindi">विकास कैलकुलेटर — अपने बच्चे की वृद्धि जाँचें</p>
            </div>
          </div>
          <div className="p-6 md:p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Date of Birth</label>
                <input
                  type="date"
                  value={calcDob}
                  onChange={(e) => setCalcDob(e.target.value)}
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-800 focus:ring-2 focus:ring-clinic-red/40 focus:bg-white transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Gender / लिंग</label>
                <select
                  value={calcGender}
                  onChange={(e) => setCalcGender(e.target.value as 'boys' | 'girls')}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-800 focus:ring-2 focus:ring-clinic-red/40 focus:bg-white transition"
                >
                  <option value="boys">Boy / लड़का</option>
                  <option value="girls">Girl / लड़की</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Weight (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  placeholder="e.g. 10.5"
                  value={calcWeight}
                  onChange={(e) => setCalcWeight(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium placeholder:text-gray-400 text-gray-800 focus:ring-2 focus:ring-clinic-red/40 focus:bg-white transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Height (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  placeholder="e.g. 76.0"
                  value={calcLength}
                  onChange={(e) => setCalcLength(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium placeholder:text-gray-400 text-gray-800 focus:ring-2 focus:ring-clinic-red/40 focus:bg-white transition"
                />
              </div>
            </div>

            {ageMonths !== null && reference && (
              <div className="mt-6 space-y-4">
                {/* Child info */}
                <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-clinic-pink/15 border border-clinic-pink/30">
                  <IconHeartBaby size="md" className="text-clinic-red shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">
                      Age: <span className="text-clinic-red">{getAgeLabel(ageMonths)}</span>
                    </p>
                  </div>
                </div>

                {/* Comparison results */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Weight comparison */}
                  <div className="rounded-xl bg-clinic-sky/15 border border-clinic-sky/30 p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Weight / वजन</p>
                    <p className="text-gray-800">
                      <span className="font-bold text-lg">Reference: {reference.weight} kg</span>
                    </p>
                    {calcWeight && (
                      <div className="mt-2 pt-2 border-t border-clinic-sky/20">
                        <p className="text-sm">
                          Your child: <span className="font-bold">{calcWeight} kg</span>
                        </p>
                        <p className={`text-sm font-semibold mt-1 ${getComparisonLabel(parseFloat(calcWeight), reference.weight).color}`}>
                          {getComparisonLabel(parseFloat(calcWeight), reference.weight).text}
                        </p>
                      </div>
                    )}
                  </div>
                  {/* Height comparison */}
                  <div className="rounded-xl bg-clinic-pink/15 border border-clinic-pink/30 p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Height / लम्बाई</p>
                    <p className="text-gray-800">
                      <span className="font-bold text-lg">Reference: {reference.length} cm</span>
                    </p>
                    {calcLength && (
                      <div className="mt-2 pt-2 border-t border-clinic-pink/20">
                        <p className="text-sm">
                          Your child: <span className="font-bold">{calcLength} cm</span>
                        </p>
                        <p className={`text-sm font-semibold mt-1 ${getComparisonLabel(parseFloat(calcLength), reference.length).color}`}>
                          {getComparisonLabel(parseFloat(calcLength), reference.length).text}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-xs text-gray-400">
                  * Reference values are averages. Individual growth may vary. Consult your doctor for personalized guidance.
                </p>
              </div>
            )}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn delay={80}>
        <ChartTable
          title="लड़कों का औसत वजन व लम्बाई / Boys"
          rows={boys}
          rowBg="sky"
        />
      </AnimateIn>
      <AnimateIn delay={160}>
        <ChartTable
          title="लड़कीयों का औसत वजन व लम्बाई / Girls"
          rows={girls}
          rowBg="pink"
        />
      </AnimateIn>
    </div>
  )
}
