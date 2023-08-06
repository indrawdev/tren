import { NextResponse } from 'next/server'

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let headers = {}
let languages = new Negotiator({ headers }).languages()
let locales = ['ae', 'au', 'ph', 'pk', 'en', 'za', 'es', 'fr', 'id', 'kn', 'my', 'nb', 'ng', 'nl', 'pt', 'ru', 'th', 'vn']
let defaultLocale = 'en'

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}

match(languages, locales, defaultLocale) // -> 'en'