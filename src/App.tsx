import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'

// Eagerly load Home (LCP route)
import Home from './pages/Home'

// Lazy load all other pages for code splitting
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))
const Appointment = lazy(() => import('./pages/Appointment'))
const Breastfeeding = lazy(() => import('./pages/Breastfeeding'))
const Vaccination = lazy(() => import('./pages/Vaccination'))
const GrowthCharts = lazy(() => import('./pages/GrowthCharts'))
const BabyFood = lazy(() => import('./pages/BabyFood'))
const ForParents = lazy(() => import('./pages/ForParents'))
const Milestones = lazy(() => import('./pages/Milestones'))
const Testimonials = lazy(() => import('./pages/Testimonials'))

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      <div className="w-8 h-8 border-3 border-clinic-pink border-t-clinic-red rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
          <Route path="services" element={<Suspense fallback={<PageLoader />}><Services /></Suspense>} />
          <Route path="contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
          <Route path="appointment" element={<Suspense fallback={<PageLoader />}><Appointment /></Suspense>} />
          <Route path="breastfeeding" element={<Suspense fallback={<PageLoader />}><Breastfeeding /></Suspense>} />
          <Route path="vaccination" element={<Suspense fallback={<PageLoader />}><Vaccination /></Suspense>} />
          <Route path="growth-charts" element={<Suspense fallback={<PageLoader />}><GrowthCharts /></Suspense>} />
          <Route path="baby-food" element={<Suspense fallback={<PageLoader />}><BabyFood /></Suspense>} />
          <Route path="for-parents" element={<Suspense fallback={<PageLoader />}><ForParents /></Suspense>} />
          <Route path="milestones" element={<Suspense fallback={<PageLoader />}><Milestones /></Suspense>} />
          <Route path="testimonials" element={<Suspense fallback={<PageLoader />}><Testimonials /></Suspense>} />
        </Route>
      </Routes>
    </>
  )
}
