import { createContext, useContext, useState, type ReactNode } from 'react'

export type Language = 'en' | 'hi' | 'both'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  cycleLanguage: () => void
  show: (lang: 'en' | 'hi') => boolean
  label: string
}

const langOrder: Language[] = ['both', 'en', 'hi']
const langLabels: Record<Language, string> = {
  both: 'A/अ',
  en: 'EN',
  hi: 'हिं',
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'both',
  setLanguage: () => {},
  cycleLanguage: () => {},
  show: () => true,
  label: langLabels['both'],
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('both')

  const cycleLanguage = () => {
    setLanguage((prev) => {
      const idx = langOrder.indexOf(prev)
      return langOrder[(idx + 1) % langOrder.length]
    })
  }

  const show = (lang: 'en' | 'hi') => {
    if (language === 'both') return true
    return language === lang
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, cycleLanguage, show, label: langLabels[language] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

/**
 * Bilingual inline component — renders Hindi and/or English text based on active language.
 * Usage: <Bi en="Hello" hi="नमस्ते" />
 */
export function Bi({
  en,
  hi,
  className,
  hiClass,
  enClass,
}: {
  en: string
  hi: string
  className?: string
  hiClass?: string
  enClass?: string
}) {
  const { show } = useLanguage()
  if (!show('hi') && !show('en')) return null
  return (
    <span className={className}>
      {show('hi') && <span className={`font-hindi ${hiClass ?? ''}`}>{hi}</span>}
      {show('en') && show('hi') && ' '}
      {show('en') && <span className={enClass}>{en}</span>}
    </span>
  )
}
