import { content, defaultLang, type Lang } from './content'

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/')
  if (segment in content) return segment as Lang
  return defaultLang
}

export function useContent(lang: Lang) {
  return content[lang]
}

/** Build a localized path. Spanish is the default locale (no prefix). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`
}

/** Same page in the other language. */
export function otherLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es'
}
