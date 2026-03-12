import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { IconHeartBaby, IconArrowRight } from '../components/Icons'
import { AnimateIn } from '../components/AnimateIn'
import { TESTIMONIALS, PHONE } from '../config/clinic'
import type { Testimonial } from '../config/clinic'

const testimonials = TESTIMONIALS

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-amber-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t, featured = false }: { t: Testimonial; featured?: boolean }) {
  return (
    <div
      className={`card-premium flex flex-col h-full transition-all duration-300 ${
        featured ? 'ring-2 ring-clinic-red/20 shadow-premium-lg' : ''
      }`}
    >
      {/* Colored top accent */}
      <div className={`h-1 bg-gradient-to-r ${t.color}`} />
      <div className="p-6 md:p-7 flex flex-col flex-1">
        {/* Quote icon */}
        <svg className="w-8 h-8 text-clinic-pink/60 mb-3 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
        </svg>

        {/* Highlight badge */}
        {t.highlight && (
          <div className="mb-3">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${t.color}`}>
              ⭐ {t.highlight}
            </span>
          </div>
        )}

        {/* Review text */}
        <p className="text-gray-700 leading-relaxed flex-1 text-[15px]">{t.text}</p>
        {t.textHi && (
          <p className="text-gray-500 font-hindi text-sm mt-2 leading-relaxed">{t.textHi}</p>
        )}

        {/* Rating */}
        <div className="mt-4 mb-4">
          <StarRating rating={t.rating} />
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-lg shadow-sm`}>
            {t.avatar}
          </div>
          <div className="min-w-0">
            <p className="font-bold text-gray-900 text-sm">{t.name}</p>
            {t.nameHi && <p className="text-xs text-gray-400 font-hindi">{t.nameHi}</p>}
            <p className="text-xs text-gray-500 mt-0.5">{t.relation} · Child age: {t.childAge}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-rotate featured testimonial
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  const stats = {
    total: testimonials.length,
    avgRating: (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1),
    fiveStars: testimonials.filter((t) => t.rating === 5).length,
  }

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero */}
      <AnimateIn delay={0}>
        <div className="flex items-center gap-4 mb-2">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center shadow-card shrink-0">
            <span className="text-3xl md:text-4xl">💬</span>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-clinic-red tracking-tight">
              What Parents Say
            </h1>
            <p className="text-gray-500 mt-1 text-lg">Real experiences from families we care for</p>
          </div>
        </div>
      </AnimateIn>

      {/* Stats strip */}
      <AnimateIn delay={40}>
        <div className="grid grid-cols-3 gap-4">
          <div className="card-premium p-5 text-center">
            <p className="text-3xl font-extrabold text-clinic-red">{stats.avgRating}</p>
            <div className="flex justify-center mt-1">
              <StarRating rating={5} />
            </div>
            <p className="text-xs text-gray-500 mt-2 font-medium">Average Rating</p>
          </div>
          <div className="card-premium p-5 text-center">
            <p className="text-3xl font-extrabold text-clinic-red">{stats.total}+</p>
            <p className="text-sm text-gray-600 mt-1">Happy Families</p>
            <p className="text-xs text-gray-500 mt-1 font-medium">And counting</p>
          </div>
          <div className="card-premium p-5 text-center">
            <p className="text-3xl font-extrabold text-clinic-red">{stats.fiveStars}/{stats.total}</p>
            <p className="text-sm text-gray-600 mt-1">5-Star Reviews</p>
            <p className="text-xs text-gray-500 mt-1 font-medium">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </AnimateIn>

      {/* Featured testimonial — carousel */}
      <AnimateIn delay={80}>
        <section
          className="relative card-premium overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-gradient-to-r from-clinic-red to-clinic-red-dark px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <IconHeartBaby size="md" className="text-white" />
              <h2 className="text-white font-bold text-lg">Featured Reviews</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                aria-label="Previous review"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <span className="text-white/80 text-sm font-medium min-w-[3rem] text-center">{activeSlide + 1} / {testimonials.length}</span>
              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                aria-label="Next review"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
          <div className="p-6 md:p-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              {/* Quote */}
              <svg className="w-12 h-12 text-clinic-pink/40 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              {/* Badge */}
              {testimonials[activeSlide].highlight && (
                <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white bg-gradient-to-r ${testimonials[activeSlide].color}`}>
                  ⭐ {testimonials[activeSlide].highlight}
                </span>
              )}

              {/* Text */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium transition-all duration-500">
                "{testimonials[activeSlide].text}"
              </p>
              {testimonials[activeSlide].textHi && (
                <p className="text-gray-500 font-hindi text-base leading-relaxed">
                  "{testimonials[activeSlide].textHi}"
                </p>
              )}

              {/* Stars */}
              <div className="flex justify-center">
                <StarRating rating={testimonials[activeSlide].rating} />
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-3 pt-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[activeSlide].color} flex items-center justify-center text-xl shadow-md`}>
                  {testimonials[activeSlide].avatar}
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900">{testimonials[activeSlide].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[activeSlide].relation} · Child age: {testimonials[activeSlide].childAge}</p>
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex justify-center gap-2 pt-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === activeSlide ? 'bg-clinic-red w-8' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimateIn>

      {/* All testimonials grid */}
      <AnimateIn delay={120}>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">All Reviews</h2>
      </AnimateIn>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <AnimateIn key={t.id} delay={140 + i * 40}>
            <TestimonialCard t={t} />
          </AnimateIn>
        ))}
      </div>

      {/* CTA */}
      <AnimateIn delay={400}>
        <section className="card-premium overflow-hidden">
          <div className="bg-gradient-to-r from-clinic-red/5 via-clinic-pink/10 to-clinic-sky/10 p-8 md:p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-clinic-pink to-clinic-red/20 flex items-center justify-center mx-auto shadow-card">
              <IconHeartBaby size="lg" className="text-clinic-red" />
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">
              Join our family of happy parents!
            </h3>
            <p className="text-gray-600 max-w-lg mx-auto">
              Experience the same caring and professional pediatric care. Book your appointment today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link to="/appointment" className="btn-primary group">
                Book Appointment
                <IconArrowRight size="sm" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={PHONE.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </AnimateIn>
    </div>
  )
}
