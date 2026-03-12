import { IconBreastfeeding } from '../components/Icons'
import { AnimateIn } from '../components/AnimateIn'

export default function Breastfeeding() {
  return (
    <div className="space-y-10">
      <AnimateIn delay={0}>
        <div className="card-premium overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 w-fit mb-4 px-3 py-1.5 rounded-full bg-clinic-pink/60 text-clinic-red">
                <IconBreastfeeding size="sm" />
                <span className="font-semibold text-sm">स्तनपान ही सर्वोत्तम क्यों है?</span>
              </div>
              <h1 className="main-title text-2xl md:text-3xl">Why is Breastfeeding Best?</h1>
            </div>
            <div className="relative min-h-[200px] md:min-h-[280px] bg-gradient-to-br from-clinic-pink/30 to-clinic-cream">
              <picture>
                <source srcSet="/images/breastfeeding-illustration.webp" type="image/webp" />
                <img
                  src="/images/breastfeeding-illustration.png"
                  alt="Mother and baby - breastfeeding"
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
        <section className="card-premium p-8">
          <h2 className="section-heading mb-4">माताओं के लिए महत्वपूर्ण सलाह / Important advice for mothers</h2>
          <ul className="text-gray-700 space-y-3">
            <li className="flex gap-3"><span className="text-clinic-orange font-bold">•</span> Breast milk is rich in nutrients (vitamins, minerals, antibodies) needed for growth after birth.</li>
            <li className="flex gap-3"><span className="text-clinic-orange font-bold">•</span> It protects against diseases; easily digestible; lowers allergy risk.</li>
            <li className="flex gap-3"><span className="text-clinic-orange font-bold">•</span> For the first month give only breast milk — no water or other drinks.</li>
          </ul>
        </section>
      </AnimateIn>

      <AnimateIn delay={160}>
        <section className="card-premium p-8 border-l-4 border-clinic-pink-dark">
          <h2 className="section-heading mb-4">माँ के दूध की विशेषताएं / Characteristics of mother's milk</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li><strong>Colostrum:</strong> First milk after delivery is yellow and thick; appears in the first week. Richer in protein and infection-fighting factors than mature milk; important for early protection; high in Vitamin A. Give colostrum to the baby — it is very nutritious.</li>
            <li><strong>Digestion & immunity:</strong> Easily digestible; gives immunity from birth; more antibodies than other milk; helps protect from diarrhea, pneumonia, ear infections.</li>
            <li><strong>Availability:</strong> Always ready and clean; no preparation or heating needed.</li>
          </ol>
        </section>
      </AnimateIn>

      <AnimateIn delay={240}>
        <section className="card-premium p-8 bg-gradient-to-br from-clinic-pink/20 to-white">
          <h2 className="section-heading mb-4">स्तनपान के फायदे / Benefits of breastfeeding</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Best nutrition for growth in the first months.</li>
            <li>Strengthens immunity and protects against infections.</li>
            <li>Strengthens mother–child bond.</li>
            <li>Benefits for mother (e.g. postpartum recovery, some long-term health benefits).</li>
          </ol>
        </section>
      </AnimateIn>

      <AnimateIn delay={320}>
        <div className="bg-gradient-to-r from-clinic-red to-clinic-red-dark text-white rounded-2xl p-8 text-center shadow-premium">
          <p className="font-hindi font-bold text-lg md:text-xl">याद रखें माँ का दूध आपके शिशु के लिए सर्वोत्तम व सर्वाधिक किफायती आहार है!</p>
          <p className="mt-2 text-white/90">Remember: Mother's milk is the best and most affordable food for your baby.</p>
        </div>
      </AnimateIn>
    </div>
  )
}
