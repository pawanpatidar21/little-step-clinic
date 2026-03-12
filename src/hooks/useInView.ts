import { useEffect, useRef, useState } from 'react'

const defaultOptions: IntersectionObserverInit = {
  threshold: 0.1,
  rootMargin: '0px 0px -30px 0px',
}

/**
 * Returns a ref and boolean: when the element enters the viewport, inView becomes true.
 * Use with transition classes for scroll-triggered animations.
 */
export function useInView(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      ...defaultOptions,
      ...options,
    })
    obs.observe(el)
    return () => obs.disconnect()
  }, [options.threshold, options.rootMargin])
  return { ref, inView }
}

/**
 * Observe multiple elements and return a set of "in view" state per section key.
 */
export function useSectionsInView(keys: string[], options: IntersectionObserverInit = {}) {
  const refs = useRef<Record<string, HTMLDivElement | null>>({})
  const [inView, setInView] = useState<Record<string, boolean>>(
    keys.reduce((acc, k) => ({ ...acc, [k]: false }), {})
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setInView((prev) => {
          const next = { ...prev }
          entries.forEach((e) => {
            const key = (e.target as HTMLElement).dataset.section
            if (key) next[key] = e.isIntersecting
          })
          return next
        })
      },
      { ...defaultOptions, ...options }
    )
    keys.forEach((k) => {
      const el = refs.current[k]
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [keys.join(','), options.threshold, options.rootMargin])

  const setRef = (key: string) => (el: HTMLDivElement | null) => {
    refs.current[key] = el
  }

  return { setRef, inView }
}
