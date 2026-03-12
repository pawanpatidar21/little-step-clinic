import { useRef, useEffect, useState, type ReactNode } from 'react'

const defaultOptions: IntersectionObserverInit = {
  threshold: 0.08,
  rootMargin: '0px 0px -24px 0px',
}

interface AnimateInProps {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Wraps content in a div and animates opacity + translateY when it scrolls into view.
 */
export function AnimateIn({ children, className = '', delay = 0 }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), defaultOptions)
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
