import { useState } from 'react'
import { AnimateIn } from '../components/AnimateIn'
import { IconHeartBaby, IconArrowRight } from '../components/Icons'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

/* ───────────────────────── milestone data ───────────────────────── */

interface MilestoneCategory {
  name: string
  nameHi: string
  items: { en: string; hi: string }[]
}

interface AgeGroup {
  age: string
  ageHi: string
  emoji: string
  colorClasses: { card: string; badge: string; dot: string; border: string }
  categories: MilestoneCategory[]
}

const milestoneData: AgeGroup[] = [
  {
    age: '0–3 Months',
    ageHi: '0–3 माह',
    emoji: '👶',
    colorClasses: {
      card: 'bg-pink-50/60',
      badge: 'bg-pink-100 text-pink-700',
      dot: 'bg-pink-400',
      border: 'border-pink-200',
    },
    categories: [
      {
        name: 'Motor Development',
        nameHi: 'शारीरिक विकास',
        items: [
          { en: 'Lifts head briefly when on tummy', hi: 'पेट के बल लेटने पर सिर उठाता है' },
          { en: 'Moves arms and legs actively', hi: 'हाथ और पैर सक्रिय रूप से हिलाता है' },
          { en: 'Opens and closes hands', hi: 'हाथ खोलता और बंद करता है' },
        ],
      },
      {
        name: 'Social & Language',
        nameHi: 'सामाजिक और भाषा विकास',
        items: [
          { en: 'Social smile (responds to faces)', hi: 'सामाजिक मुस्कान (चेहरे देखकर मुस्कुराता है)' },
          { en: 'Coos and makes gurgling sounds', hi: 'कूकना और गुनगुनाना शुरू करता है' },
          { en: "Recognizes mother's voice and face", hi: 'माँ की आवाज़ और चेहरा पहचानता है' },
        ],
      },
      {
        name: 'Cognitive',
        nameHi: 'मानसिक विकास',
        items: [
          { en: 'Follows moving objects with eyes', hi: 'चलती वस्तुओं को आँखों से देखता है' },
          { en: 'Turns head toward sounds', hi: 'आवाज़ की तरफ सिर घुमाता है' },
        ],
      },
    ],
  },
  {
    age: '3–6 Months',
    ageHi: '3–6 माह',
    emoji: '🍼',
    colorClasses: {
      card: 'bg-purple-50/60',
      badge: 'bg-purple-100 text-purple-700',
      dot: 'bg-purple-400',
      border: 'border-purple-200',
    },
    categories: [
      {
        name: 'Motor Development',
        nameHi: 'शारीरिक विकास',
        items: [
          { en: 'Rolls over (tummy to back)', hi: 'पलटना (पेट से पीठ पर)' },
          { en: 'Holds head steady when upright', hi: 'सीधे बैठने पर सिर स्थिर रखता है' },
          { en: 'Reaches for and grasps objects', hi: 'वस्तुओं को पकड़ता है' },
          { en: 'Sits with support', hi: 'सहारे से बैठता है' },
        ],
      },
      {
        name: 'Social & Language',
        nameHi: 'सामाजिक और भाषा विकास',
        items: [
          { en: 'Laughs and squeals with delight', hi: 'खुशी से हँसता है और चिल्लाता है' },
          { en: 'Babbles (ba-ba, ma-ma sounds)', hi: 'बड़बड़ाता है (बा-बा, मा-मा)' },
          { en: 'Responds to own name', hi: 'अपने नाम पर प्रतिक्रिया करता है' },
        ],
      },
      {
        name: 'Cognitive',
        nameHi: 'मानसिक विकास',
        items: [
          { en: 'Explores objects by mouthing them', hi: 'वस्तुओं को मुँह में डालकर जाँचता है' },
          { en: 'Shows curiosity about surroundings', hi: 'आसपास की चीज़ों में जिज्ञासा दिखाता है' },
        ],
      },
    ],
  },
  {
    age: '6–9 Months',
    ageHi: '6–9 माह',
    emoji: '🧸',
    colorClasses: {
      card: 'bg-sky-50/60',
      badge: 'bg-sky-100 text-sky-700',
      dot: 'bg-sky-500',
      border: 'border-sky-200',
    },
    categories: [
      {
        name: 'Motor Development',
        nameHi: 'शारीरिक विकास',
        items: [
          { en: 'Sits without support', hi: 'बिना सहारे बैठता है' },
          { en: 'Starts crawling', hi: 'रेंगना शुरू करता है' },
          { en: 'Transfers objects between hands', hi: 'एक हाथ से दूसरे हाथ में वस्तु देता है' },
        ],
      },
      {
        name: 'Social & Language',
        nameHi: 'सामाजिक और भाषा विकास',
        items: [
          { en: 'Stranger anxiety begins', hi: 'अजनबियों से डरना शुरू करता है' },
          { en: 'Responds to simple words like "no"', hi: '"नहीं" जैसे सरल शब्दों पर प्रतिक्रिया' },
          { en: 'Plays peek-a-boo', hi: 'लुका-छुपी खेलता है' },
        ],
      },
      {
        name: 'Cognitive',
        nameHi: 'मानसिक विकास',
        items: [
          { en: 'Looks for dropped or hidden objects', hi: 'गिरी/छिपी वस्तुएँ ढूँढता है' },
          { en: 'Begins to understand object permanence', hi: 'वस्तु स्थायित्व समझने लगता है' },
        ],
      },
    ],
  },
  {
    age: '9–12 Months',
    ageHi: '9–12 माह',
    emoji: '🎂',
    colorClasses: {
      card: 'bg-orange-50/60',
      badge: 'bg-orange-100 text-orange-700',
      dot: 'bg-orange-400',
      border: 'border-orange-200',
    },
    categories: [
      {
        name: 'Motor Development',
        nameHi: 'शारीरिक विकास',
        items: [
          { en: 'Pulls to stand and cruises along furniture', hi: 'खड़े होकर फर्नीचर पकड़कर चलता है' },
          { en: 'Pincer grasp (thumb and finger)', hi: 'चुटकी पकड़ (अँगूठे और उंगली से)' },
          { en: 'May take first steps', hi: 'पहले कदम उठा सकता है' },
        ],
      },
      {
        name: 'Social & Language',
        nameHi: 'सामाजिक और भाषा विकास',
        items: [
          { en: 'Says "mama" and "dada" meaningfully', hi: '"मामा" और "दादा" अर्थपूर्ण रूप से बोलता है' },
          { en: 'Waves bye-bye', hi: 'बाय-बाय करता है' },
          { en: 'Understands simple commands', hi: 'सरल आदेश समझता है' },
        ],
      },
      {
        name: 'Cognitive',
        nameHi: 'मानसिक विकास',
        items: [
          { en: 'Imitates actions and gestures', hi: 'क्रियाओं और इशारों की नकल करता है' },
          { en: 'Points to objects of interest', hi: 'रुचि की वस्तुओं की ओर इशारा करता है' },
        ],
      },
    ],
  },
  {
    age: '1–2 Years',
    ageHi: '1–2 साल',
    emoji: '🚶',
    colorClasses: {
      card: 'bg-green-50/60',
      badge: 'bg-green-100 text-green-700',
      dot: 'bg-green-500',
      border: 'border-green-200',
    },
    categories: [
      {
        name: 'Motor Development',
        nameHi: 'शारीरिक विकास',
        items: [
          { en: 'Walks independently by 15 months', hi: '15 माह तक स्वतंत्र रूप से चलता है' },
          { en: 'Climbs stairs with help', hi: 'सहायता से सीढ़ियाँ चढ़ता है' },
          { en: 'Scribbles with crayon', hi: 'क्रेयॉन से रेखाएँ बनाता है' },
          { en: 'Stacks 2-4 blocks', hi: '2-4 ब्लॉक एक पर एक रखता है' },
        ],
      },
      {
        name: 'Social & Language',
        nameHi: 'सामाजिक और भाषा विकास',
        items: [
          { en: 'Says 10–50 words by 18 months', hi: '18 माह तक 10-50 शब्द बोलता है' },
          { en: 'Follows simple instructions', hi: 'सरल निर्देशों का पालन करता है' },
          { en: 'Shows affection to familiar people', hi: 'परिचित लोगों से प्यार दिखाता है' },
          { en: 'Drinks from a cup', hi: 'कप से पीता है' },
        ],
      },
      {
        name: 'Cognitive',
        nameHi: 'मानसिक विकास',
        items: [
          { en: 'Knows names of body parts', hi: 'शरीर के अंगों के नाम जानता है' },
          { en: 'Sorts shapes and colors', hi: 'आकार और रंग छाँटता है' },
          { en: 'Engages in simple pretend play', hi: 'सरल कल्पना का खेल खेलता है' },
        ],
      },
    ],
  },
  {
    age: '2–3 Years',
    ageHi: '2–3 साल',
    emoji: '🏃',
    colorClasses: {
      card: 'bg-red-50/60',
      badge: 'bg-red-100 text-red-700',
      dot: 'bg-red-400',
      border: 'border-red-200',
    },
    categories: [
      {
        name: 'Motor Development',
        nameHi: 'शारीरिक विकास',
        items: [
          { en: 'Runs well and kicks a ball', hi: 'अच्छे से दौड़ता है और गेंद को लात मारता है' },
          { en: 'Jumps with both feet', hi: 'दोनों पैरों से कूदता है' },
          { en: 'Turns pages of a book', hi: 'किताब के पन्ने पलटता है' },
        ],
      },
      {
        name: 'Social & Language',
        nameHi: 'सामाजिक और भाषा विकास',
        items: [
          { en: 'Uses 2–3 word sentences', hi: '2-3 शब्दों के वाक्य बोलता है' },
          { en: 'Plays alongside other children', hi: 'अन्य बच्चों के साथ खेलता है' },
          { en: 'Toilet training begins', hi: 'शौचालय प्रशिक्षण शुरू होता है' },
          { en: 'Knows own name, age, gender', hi: 'अपना नाम, उम्र, लिंग जानता है' },
        ],
      },
      {
        name: 'Cognitive',
        nameHi: 'मानसिक विकास',
        items: [
          { en: 'Completes simple puzzles', hi: 'सरल पहेलियाँ पूरी करता है' },
          { en: 'Engages in pretend/imaginative play', hi: 'कल्पना का खेल खेलता है' },
          { en: 'Counts to 3', hi: '3 तक गिनता है' },
        ],
      },
    ],
  },
  {
    age: '3–5 Years',
    ageHi: '3–5 साल',
    emoji: '✏️',
    colorClasses: {
      card: 'bg-indigo-50/60',
      badge: 'bg-indigo-100 text-indigo-700',
      dot: 'bg-indigo-400',
      border: 'border-indigo-200',
    },
    categories: [
      {
        name: 'Motor Development',
        nameHi: 'शारीरिक विकास',
        items: [
          { en: 'Hops, skips, balances on one foot', hi: 'एक पैर पर खड़ा होता है, कूदता है' },
          { en: 'Uses scissors, draws shapes', hi: 'कैंची का उपयोग करता है, आकार बनाता है' },
          { en: 'Dresses and undresses independently', hi: 'स्वतंत्र रूप से कपड़े पहनता/उतारता है' },
          { en: 'Catches a bounced ball', hi: 'उछली हुई गेंद पकड़ता है' },
        ],
      },
      {
        name: 'Social & Language',
        nameHi: 'सामाजिक और भाषा विकास',
        items: [
          { en: 'Speaks in full sentences and tells stories', hi: 'पूरे वाक्य बोलता है और कहानियाँ सुनाता है' },
          { en: 'Makes friends and plays cooperatively', hi: 'दोस्त बनाता है और मिलकर खेलता है' },
          { en: 'Understands rules of games', hi: 'खेल के नियम समझता है' },
        ],
      },
      {
        name: 'Cognitive',
        nameHi: 'मानसिक विकास',
        items: [
          { en: 'Counts to 10 or more', hi: '10 या अधिक तक गिनता है' },
          { en: 'Knows basic colors and shapes', hi: 'बुनियादी रंग और आकार जानता है' },
          { en: 'Understands concept of time (morning, night)', hi: 'समय की अवधारणा समझता है (सुबह, रात)' },
          { en: 'Writes some letters or numbers', hi: 'कुछ अक्षर या संख्याएँ लिखता है' },
        ],
      },
    ],
  },
  {
    age: '5–8 Years',
    ageHi: '5–8 साल',
    emoji: '📚',
    colorClasses: {
      card: 'bg-teal-50/60',
      badge: 'bg-teal-100 text-teal-700',
      dot: 'bg-teal-500',
      border: 'border-teal-200',
    },
    categories: [
      {
        name: 'Motor Development',
        nameHi: 'शारीरिक विकास',
        items: [
          { en: 'Rides a bicycle', hi: 'साइकिल चलाता है' },
          { en: 'Ties shoelaces', hi: 'जूते के फीते बाँधता है' },
          { en: 'Writes letters and numbers clearly', hi: 'अक्षर और संख्याएँ स्पष्ट रूप से लिखता है' },
        ],
      },
      {
        name: 'Social & Language',
        nameHi: 'सामाजिक और भाषा विकास',
        items: [
          { en: 'Reads simple books independently', hi: 'सरल किताबें स्वतंत्र रूप से पढ़ता है' },
          { en: 'Understands rules and takes turns', hi: 'नियम समझता है और बारी का इंतजार करता है' },
          { en: 'Shows empathy and concern for others', hi: 'दूसरों के प्रति सहानुभूति दिखाता है' },
        ],
      },
      {
        name: 'Cognitive',
        nameHi: 'मानसिक विकास',
        items: [
          { en: 'Solves simple math problems', hi: 'सरल गणित के सवाल हल करता है' },
          { en: 'Thinks logically about events', hi: 'घटनाओं के बारे में तार्किक रूप से सोचता है' },
          { en: 'Has longer attention span', hi: 'ध्यान केंद्रित करने की अवधि बढ़ती है' },
        ],
      },
    ],
  },
]

/* ───────────────────────── warning signs ───────────────────────── */

const warningSigns = [
  { en: 'Not smiling by 3 months', hi: '3 माह तक मुस्कुराना नहीं' },
  { en: 'Not sitting by 9 months', hi: '9 माह तक बैठना नहीं' },
  { en: 'Not walking by 18 months', hi: '18 माह तक चलना नहीं' },
  { en: 'Not speaking 2–3 words by 18 months', hi: '18 माह तक 2-3 शब्द न बोलना' },
  { en: 'Loss of previously acquired skills', hi: 'पहले सीखी हुई क्षमताओं का खो जाना' },
  { en: 'Not responding to name by 12 months', hi: '12 माह तक नाम पर प्रतिक्रिया न देना' },
  { en: 'No eye contact or social interaction', hi: 'आँखों से संपर्क या सामाजिक बातचीत न करना' },
]

/* ───────────────────────── component ───────────────────────── */

export default function Milestones() {
  const [openGroup, setOpenGroup] = useState<number | null>(0)
  const { show } = useLanguage()

  return (
    <div className="space-y-10 md:space-y-14">
      {/* Header */}
      <AnimateIn delay={0}>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-clinic-pink to-clinic-sky/40 flex items-center justify-center text-clinic-red shadow-card shrink-0">
            <IconHeartBaby size="lg" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-clinic-red tracking-tight">
              {show('hi') && <span className="font-hindi">विकास के पड़ाव</span>}
              {show('hi') && show('en') && <span className="text-gray-300 mx-2">|</span>}
              {show('en') && 'Developmental Milestones'}
            </h1>
            <p className="text-gray-500 mt-1 text-lg">
              {show('hi') && <span className="font-hindi">जन्म से 8 वर्ष तक</span>}
              {show('hi') && show('en') && ' — '}
              {show('en') && 'Birth to 8 years'}
            </p>
          </div>
        </div>
      </AnimateIn>

      {/* Intro */}
      <AnimateIn delay={60}>
        <div className="card-premium p-6 md:p-8 bg-gradient-to-br from-clinic-cream/50 to-white">
          {show('hi') && (
            <p className="text-gray-700 font-hindi leading-relaxed">
              हर बच्चा अपनी गति से विकसित होता है। ये मील के पत्थर औसत उम्र पर आधारित हैं। यदि आपके बच्चे में कोई देरी दिखे, तो कृपया डॉक्टर से परामर्श करें।
            </p>
          )}
          {show('en') && (
            <p className="text-gray-600 mt-2 leading-relaxed">
              Every child develops at their own pace. These milestones are based on average ages. If you notice any delay, please consult the doctor.
            </p>
          )}
        </div>
      </AnimateIn>

      {/* Milestone groups — accordion style */}
      <div className="space-y-4">
        {milestoneData.map((group, idx) => {
          const isOpen = openGroup === idx
          return (
            <AnimateIn key={group.age} delay={80 + idx * 40}>
              <div className={`card-premium overflow-hidden border ${group.colorClasses.border}`}>
                {/* Accordion header */}
                <button
                  type="button"
                  onClick={() => setOpenGroup(isOpen ? null : idx)}
                  className={`w-full flex items-center gap-4 p-5 md:p-6 text-left transition-colors hover:bg-gray-50/50 ${
                    isOpen ? group.colorClasses.card : ''
                  }`}
                >
                  <span className="text-3xl">{group.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-gray-900 text-lg">
                      {show('hi') && <span className="font-hindi">{group.ageHi}</span>}
                      {show('hi') && show('en') && <span className="text-gray-300 mx-2">|</span>}
                      {show('en') && group.age}
                    </h2>
                  </div>
                  <span
                    className={`${group.colorClasses.badge} px-3 py-1 rounded-full text-xs font-bold`}
                  >
                    {group.categories.reduce((sum, c) => sum + c.items.length, 0)} milestones
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Accordion content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="p-5 md:p-6 pt-0 space-y-6">
                    {group.categories.map((cat) => (
                      <div key={cat.name}>
                        <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-3">
                          {show('hi') && <span className="font-hindi normal-case text-base">{cat.nameHi}</span>}
                          {show('hi') && show('en') && <span className="text-gray-300 mx-2">|</span>}
                          {show('en') && cat.name}
                        </h3>
                        <ul className="space-y-2">
                          {cat.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span
                                className={`w-2.5 h-2.5 rounded-full ${group.colorClasses.dot} shrink-0 mt-1.5`}
                              />
                              <div>
                                {show('hi') && (
                                  <span className="font-hindi text-gray-800">{item.hi}</span>
                                )}
                                {show('hi') && show('en') && (
                                  <span className="text-gray-300 mx-1.5">—</span>
                                )}
                                {show('en') && (
                                  <span className="text-gray-600">{item.en}</span>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          )
        })}
      </div>

      {/* Warning signs — when to consult doctor */}
      <AnimateIn delay={400}>
        <section className="card-premium overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-5 flex items-center gap-4">
            <span className="text-3xl">⚠️</span>
            <div>
              <h2 className="text-lg font-bold text-white">
                {show('hi') && <span className="font-hindi">डॉक्टर से कब मिलें</span>}
                {show('hi') && show('en') && <span className="text-white/60 mx-2">|</span>}
                {show('en') && 'When to consult the doctor'}
              </h2>
              <p className="text-white/90 text-sm mt-0.5">
                {show('hi') && <span className="font-hindi">इनमें से कोई भी संकेत दिखने पर</span>}
                {show('hi') && show('en') && ' — '}
                {show('en') && 'If you notice any of these signs'}
              </p>
            </div>
          </div>
          <div className="p-5 md:p-6">
            <ul className="space-y-3">
              {warningSigns.map((sign, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-amber-50/60 border border-amber-100"
                >
                  <span className="w-7 h-7 rounded-lg bg-amber-200/80 flex items-center justify-center text-amber-700 text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    {show('hi') && <span className="font-hindi text-gray-800">{sign.hi}</span>}
                    {show('hi') && show('en') && <span className="text-gray-300 mx-1.5">—</span>}
                    {show('en') && <span className="text-gray-600">{sign.en}</span>}
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/appointment"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-clinic-red hover:gap-3 transition-all"
            >
              Book an appointment <IconArrowRight size="sm" className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </AnimateIn>
    </div>
  )
}
