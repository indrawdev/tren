
export const i18n = {
  defaultLocale: 'en',
  locales: ['ae', 'au', 'ph', 'pk', 'en', 'za', 'es', 'fr', 'id', 'kn', 'my', 'nb', 'ng', 'nl', 'pt', 'ru', 'th', 'vn'],
} as const

export type Locale = (typeof i18n)['locales'][number]