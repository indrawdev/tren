'use client'

import type { Locale } from '@/i18n-config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  ae: () => import('@/app/dictionaries/ae.json').then((module) => module.default),
  au: () => import('@/app/dictionaries/en_AU.json').then((module) => module.default),
  ph: () => import('@/app/dictionaries/en_PH.json').then((module) => module.default),
  pk: () => import('@/app/dictionaries/en_PK.json').then((module) => module.default),
  en: () => import('@/app//dictionaries/en_US.json').then((module) => module.default),
  za: () => import('@/app/dictionaries/en_ZA.json').then((module) => module.default),
  es: () => import('@/app/dictionaries/es.json').then((module) => module.default),
  fr: () => import('@/app/dictionaries/fr.json').then((module) => module.default),
  id: () => import('@/app/dictionaries/id.json').then((module) => module.default),
  kn: () => import('@/app/dictionaries/kn.json').then((module) => module.default),
  my: () => import('@/app/dictionaries/my.json').then((module) => module.default),
  nb: () => import('@/app/dictionaries/nb_NO.json').then((module) => module.default),
  ng: () => import('@/app/dictionaries/ng.json').then((module) => module.default),
  nl: () => import('@/app/dictionaries/nl.json').then((module) => module.default),
  pt: () => import('@/app/dictionaries/pt.json').then((module) => module.default),
  ru: () => import('@/app/dictionaries/ru.json').then((module) => module.default),
  th: () => import('@/app/dictionaries/th.json').then((module) => module.default),
  vn: () => import('@/app/dictionaries/vn.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()