import { IconBabyFood } from '../components/Icons'
import { AnimateIn } from '../components/AnimateIn'

const foodTable = [
  { sn: 1, food: 'Fruit juice & soup (tomato, onion, carrot, spinach, moong dal, little rice)', age: '6 माह', qty: '1–2 tsp, twice/day', remarks: 'No sugar; little salt, black pepper, butter only.' },
  { sn: 2, food: 'Mashed banana, chikoo, ripe apple (with milk/cream)', age: '6 माह', qty: '1–2 tsp, twice/day', remarks: 'In winter, banana/sour fruits may cause cough/cold; prefer summer.' },
  { sn: 3, food: 'Roasted semolina (suji) halwa with little milk & ghee. Alternatives: daliya, ragi, sago, rice flour', age: '1 week after starting above fruits', qty: '1–2 tsp, twice/day', remarks: 'Increase quantity every 3–4 days.' },
  { sn: 4, food: 'Boiled mashed egg', age: '1 week after giving porridge', qty: '1 tsp egg yolk', remarks: 'After 4 weeks of egg yolk, can give one whole egg.' },
  { sn: 5, food: 'Fully cooked and mashed vegetables', age: '1 week after fruit/egg', qty: '1–2 tsp, twice/day', remarks: 'Potato, pumpkin, greens, carrot, peas — boil till soft.' },
  { sn: 6, food: 'Curd/Yogurt', age: '1 week after vegetables', qty: '2–4 tsp', remarks: 'Fruit raita allowed. Use well-set, not sour curd.' },
  { sn: 7, food: 'Fully cooked mashed rice, dal or khichdi', age: '1 week after vegetables', qty: '1–2 tsp', remarks: 'Add little ghee, oil or butter; turmeric (हल्दी) can be used.' },
]

export default function BabyFood() {
  return (
    <div className="space-y-10">
      <AnimateIn delay={0}>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-clinic-pink/50 to-clinic-orange/20 flex items-center justify-center text-clinic-red shadow-card">
            <IconBabyFood size="lg" />
          </div>
          <div>
            <h1 className="main-title">शिशु आहार की शुरुआत / Introduction to Baby Food</h1>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={80}>
        <section className="card-premium p-8">
          <h2 className="section-heading mb-4">Core message</h2>
          <ul className="text-gray-700 space-y-2">
            <li className="flex gap-2"><span className="text-clinic-orange font-bold">•</span> Good nutrition is very important for healthy growth.</li>
            <li className="flex gap-2"><span className="text-clinic-orange font-bold">•</span> Breast milk meets all calories and nutrients up to 6 months.</li>
            <li className="flex gap-2"><span className="text-clinic-orange font-bold">•</span> After 6 months, start complementary foods for extra nutrition.</li>
          </ul>
        </section>
      </AnimateIn>

      <AnimateIn delay={160}>
        <section className="card-premium p-8 border-l-4 border-clinic-orange">
          <h2 className="section-heading mb-4">कब शुरू करें / When to start</h2>
          <p className="text-gray-700 mb-2">Start at <strong>6 months</strong> when:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Weight has doubled from birth weight.</li>
            <li>Baby holds head steady and sits with a little support.</li>
          </ul>
        </section>
      </AnimateIn>

      <AnimateIn delay={240}>
        <section className="card-premium p-8 bg-clinic-pink/10">
          <h2 className="section-heading mb-4">प्रथम आहार / First foods</h2>
          <ul className="text-gray-700 space-y-2">
            <li className="flex gap-2"><span className="text-clinic-red font-bold">•</span> Start with simple cereals: rice (चावल) or ragi (रागी).</li>
            <li className="flex gap-2"><span className="text-clinic-red font-bold">•</span> <strong>Allergy:</strong> Introduce one new cereal at a time; wait 3–7 days before adding another. If rash, red streaks, diarrhea, itching, discomfort or vomiting appear, consult the doctor.</li>
            <li className="flex gap-2"><span className="text-clinic-red font-bold">•</span> <strong>Preparation:</strong> Mix cereal with milk or water as per pack; start with 1 teaspoon cereal + 4–5 teaspoons milk/water.</li>
            <li className="flex gap-2"><span className="text-clinic-red font-bold">•</span> <strong>Do not add:</strong> Sugar (चीनी), honey (शहद), syrup (सिरप), or other sweeteners.</li>
          </ul>
        </section>
      </AnimateIn>

      <AnimateIn delay={320}>
        <section className="card-premium p-8">
          <h2 className="section-heading mb-2">प्रोटिन के स्त्रोत / Protein sources</h2>
          <p className="text-gray-700">After cereals, vegetables and fruits are accepted: strained pureed meat, chicken soup, cooked mashed/dried beans, yogurt (दही), fish, boiled egg white.</p>
        </section>
      </AnimateIn>

      <AnimateIn delay={400}>
        <section className="card-premium p-8 border-l-4 border-clinic-green">
          <h2 className="section-heading mb-2">खिलाने संबंधी सुझाव / Feeding suggestions</h2>
          <ul className="text-gray-700 space-y-1">
            <li>• Offer breast milk or formula 1–2 hours before solids so baby gets enough milk.</li>
            <li>• Early introduction of complementary food helps build healthy eating habits.</li>
            <li>• Feed frequently; infants have small stomachs and high energy needs.</li>
          </ul>
        </section>
      </AnimateIn>

      <AnimateIn delay={480}>
        <section className="card-premium overflow-hidden p-0">
          <div className="p-6 flex items-center gap-3">
            <IconBabyFood className="text-clinic-red" size="md" />
            <h2 className="section-heading mb-0">Food introduction table</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-clinic-red text-white">
                  <th className="py-3 px-4 text-left font-semibold">#</th>
                  <th className="py-3 px-4 text-left font-semibold">Food</th>
                  <th className="py-3 px-4 text-left font-semibold">Age to start</th>
                  <th className="py-3 px-4 text-left font-semibold">Quantity</th>
                  <th className="py-3 px-4 text-left font-semibold">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {foodTable.map((row, i) => (
                  <tr key={row.sn} className={i % 2 === 0 ? 'bg-clinic-sky/20' : 'bg-white'}>
                    <td className="py-2.5 px-4">{row.sn}</td>
                    <td className="py-2.5 px-4">{row.food}</td>
                    <td className="py-2.5 px-4">{row.age}</td>
                    <td className="py-2.5 px-4">{row.qty}</td>
                    <td className="py-2.5 px-4">{row.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </AnimateIn>
    </div>
  )
}
