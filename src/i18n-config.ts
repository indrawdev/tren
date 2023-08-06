export const i18n = {
  defaultLocale: 'id',
  locales: ['ae', 'au', 'ph', 'pk', 'en', 'za', 'es', 'fr', 'id', 'kn', 'my', 'nb', 'ng', 'nl', 'pt', 'ru', 'th', 'vn'],
  localeDetection: false,
} as const

export type Locale = (typeof i18n)['locales'][number]