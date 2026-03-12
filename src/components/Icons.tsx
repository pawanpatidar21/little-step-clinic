import type { SVGProps } from 'react'

const sizeClass = (s: 'sm' | 'md' | 'lg') =>
  s === 'sm' ? 'w-6 h-6' : s === 'md' ? 'w-10 h-10' : 'w-14 h-14'

export function IconFootprint(props: SVGProps<SVGSVGElement> & { size?: 'sm' | 'md' | 'lg' }) {
  const { size = 'md', className = '', ...rest } = props
  return (
    <svg className={`${sizeClass(size)} ${className}`} viewBox="0 0 48 48" fill="currentColor" {...rest}>
      <path d="M24 8c-2 0-4 1.5-5 3.5-.5 1-1.5 3-2 5-.5 2-.5 5 0 7 .5 2 2 4 4 5 2 1 4 1 5 0 1-1 2-3 2-5 .5-2 .5-5 0-7-.5-2-1.5-4-2-5C28 9.5 26 8 24 8z" opacity="0.9" />
      <ellipse cx="24" cy="26" rx="6" ry="8" />
      <circle cx="20" cy="22" r="1.5" opacity="0.7" />
      <circle cx="28" cy="22" r="1.5" opacity="0.7" />
      <circle cx="18" cy="32" r="2" />
      <circle cx="24" cy="34" r="2" />
      <circle cx="30" cy="32" r="2" />
    </svg>
  )
}

export function IconHeartBaby(props: SVGProps<SVGSVGElement> & { size?: 'sm' | 'md' | 'lg' }) {
  const { size = 'md', className = '', ...rest } = props
  return (
    <svg className={`${sizeClass(size)} ${className}`} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M24 42C24 42 8 32 8 20c0-6 4-10 10-10 4 0 6 2 6 2s2-2 6-2c6 0 10 4 10 10 0 12-16 22-16 22z" fill="currentColor" fillOpacity="0.15" />
      <path d="M24 42C24 42 8 32 8 20c0-6 4-10 10-10 4 0 6 2 6 2s2-2 6-2c6 0 10 4 10 10 0 12-16 22-16 22z" />
      <circle cx="24" cy="26" r="6" fill="currentColor" fillOpacity="0.2" strokeWidth="1.2" />
      <circle cx="21" cy="25" r="1" fill="currentColor" />
      <circle cx="27" cy="25" r="1" fill="currentColor" />
      <path d="M22 29c.5 1 1.5 1.5 2 1.5s1.5-.5 2-1.5" strokeWidth="1" />
    </svg>
  )
}

export function IconVaccine(props: SVGProps<SVGSVGElement> & { size?: 'sm' | 'md' | 'lg' }) {
  const { size = 'md', className = '', ...rest } = props
  return (
    <svg className={`${sizeClass(size)} ${className}`} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M18 8h12v6h-12z" fill="currentColor" fillOpacity="0.2" />
      <path d="M18 8h12v6h-12z" />
      <path d="M22 8V4h4v4" />
      <path d="M20 14v20M28 14v20" />
      <path d="M18 34h12" />
      <circle cx="24" cy="40" r="2" fill="currentColor" fillOpacity="0.3" />
      <path d="M14 20l4-4 12 12-4 4z" fill="currentColor" fillOpacity="0.15" />
      <path d="M14 20l4-4 12 12-4 4z" />
    </svg>
  )
}

export function IconBreastfeeding(props: SVGProps<SVGSVGElement> & { size?: 'sm' | 'md' | 'lg' }) {
  const { size = 'md', className = '', ...rest } = props
  return (
    <svg className={`${sizeClass(size)} ${className}`} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M24 12c-4 0-7 3-7 7 0 5 7 12 7 12s7-7 7-12c0-4-3-7-7-7z" fill="currentColor" fillOpacity="0.2" />
      <path d="M24 12c-4 0-7 3-7 7 0 5 7 12 7 12s7-7 7-12c0-4-3-7-7-7z" />
      <path d="M20 22v-2c0-2 1.5-4 4-4s4 2 4 4v2" />
      <ellipse cx="24" cy="32" rx="5" ry="6" fill="currentColor" fillOpacity="0.15" />
      <circle cx="21" cy="31" r="1" fill="currentColor" />
      <circle cx="27" cy="31" r="1" fill="currentColor" />
      <path d="M22 35c.6 1 1.4 1.5 2 1.5s1.4-.5 2-1.5" strokeWidth="1" />
      <path d="M24 19v-1" strokeWidth="1.5" />
    </svg>
  )
}

export function IconGrowth(props: SVGProps<SVGSVGElement> & { size?: 'sm' | 'md' | 'lg' }) {
  const { size = 'md', className = '', ...rest } = props
  return (
    <svg className={`${sizeClass(size)} ${className}`} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M8 40V24l8-8 8 4 8-12 8 8" fill="currentColor" fillOpacity="0.1" />
      <path d="M8 40V24l8-8 8 4 8-12 8 8" />
      <path d="M8 40h32M8 8v32" />
    </svg>
  )
}

export function IconBabyFood(props: SVGProps<SVGSVGElement> & { size?: 'sm' | 'md' | 'lg' }) {
  const { size = 'md', className = '', ...rest } = props
  return (
    <svg className={`${sizeClass(size)} ${className}`} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M14 16h20v18a4 4 0 01-4 4H18a4 4 0 01-4-4V16z" fill="currentColor" fillOpacity="0.1" />
      <path d="M14 16h20v18a4 4 0 01-4 4H18a4 4 0 01-4-4V16z" />
      <path d="M24 16V12" />
      <path d="M24 12a4 4 0 004-4 4 4 0 00-8 0 4 4 0 004 4z" fill="currentColor" fillOpacity="0.2" />
      <path d="M24 12a4 4 0 004-4 4 4 0 00-8 0 4 4 0 004 4z" />
      <path d="M18 26h12M18 30h8" />
    </svg>
  )
}

export function IconStethoscope(props: SVGProps<SVGSVGElement> & { size?: 'sm' | 'md' | 'lg' }) {
  const { size = 'md', className = '', ...rest } = props
  return (
    <svg className={`${sizeClass(size)} ${className}`} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M20 8v6a6 6 0 006 6 6 6 0 006-6V8" />
      <path d="M26 8h4v6a4 4 0 01-4 4 4 4 0 01-4-4V8h4z" fill="currentColor" fillOpacity="0.15" />
      <path d="M26 8h4v6a4 4 0 01-4 4 4 4 0 01-4-4V8h4z" />
      <path d="M32 18v14a6 6 0 01-12 0V18" />
      <circle cx="26" cy="32" r="4" fill="currentColor" fillOpacity="0.2" />
      <circle cx="26" cy="32" r="4" />
      <path d="M14 18l-4-4-4 4 4 4 4-4zM10 14v8" />
    </svg>
  )
}

export function IconPhone(props: SVGProps<SVGSVGElement> & { size?: 'sm' | 'md' | 'lg' }) {
  const { size = 'md', className = '', ...rest } = props
  return (
    <svg className={`${sizeClass(size)} ${className}`} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M18 8h12a2 2 0 012 2v28a2 2 0 01-2 2H18a2 2 0 01-2-2V10a2 2 0 012-2z" fill="currentColor" fillOpacity="0.1" />
      <path d="M18 8h12a2 2 0 012 2v28a2 2 0 01-2 2H18a2 2 0 01-2-2V10a2 2 0 012-2z" />
      <path d="M24 36v2" />
    </svg>
  )
}

export function IconCalendar(props: SVGProps<SVGSVGElement> & { size?: 'sm' | 'md' | 'lg' }) {
  const { size = 'md', className = '', ...rest } = props
  return (
    <svg className={`${sizeClass(size)} ${className}`} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M10 12h28v28H10z" fill="currentColor" fillOpacity="0.08" />
      <path d="M10 12h28v28H10z" />
      <path d="M10 20h28M20 8v8M28 8v8" />
    </svg>
  )
}

export function IconAlert(props: SVGProps<SVGSVGElement> & { size?: 'sm' | 'md' | 'lg' }) {
  const { size = 'md', className = '', ...rest } = props
  return (
    <svg className={`${sizeClass(size)} ${className}`} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M24 8l18 32H6L24 8z" fill="currentColor" fillOpacity="0.15" />
      <path d="M24 8l18 32H6L24 8z" />
      <path d="M24 20v12M24 36v2" />
    </svg>
  )
}

export function IconLocation(props: SVGProps<SVGSVGElement> & { size?: 'sm' | 'md' | 'lg' }) {
  const { size = 'md', className = '', ...rest } = props
  return (
    <svg className={`${sizeClass(size)} ${className}`} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M24 44s16-12 16-22c0-6-4-10-10-10-4 0-6 2-6 2s-2-2-6-2c-6 0-10 4-10 10 0 10 16 22 16 22z" fill="currentColor" fillOpacity="0.15" />
      <path d="M24 44s16-12 16-22c0-6-4-10-10-10-4 0-6 2-6 2s-2-2-6-2c-6 0-10 4-10 10 0 10 16 22 16 22z" />
      <circle cx="24" cy="22" r="6" fill="currentColor" fillOpacity="0.2" />
      <circle cx="24" cy="22" r="6" />
    </svg>
  )
}

export function IconMail(props: SVGProps<SVGSVGElement> & { size?: 'sm' | 'md' | 'lg' }) {
  const { size = 'md', className = '', ...rest } = props
  return (
    <svg className={`${sizeClass(size)} ${className}`} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M8 14h32v20H8z" fill="currentColor" fillOpacity="0.08" />
      <path d="M8 14l16 12 16-12M8 34l12-12M40 34L28 22" />
    </svg>
  )
}

export function IconArrowRight(props: SVGProps<SVGSVGElement> & { size?: 'sm' | 'md' | 'lg' }) {
  const { size = 'md', className = '', ...rest } = props
  return (
    <svg className={`${sizeClass(size)} ${className}`} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      <path d="M18 12l12 12-12 12" />
    </svg>
  )
}
