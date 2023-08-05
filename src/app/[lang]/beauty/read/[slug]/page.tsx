'use client'
import { Locale } from '@/i18n-config'

export default function BeautyPageDetail({
  params: { lang, slug },
  searchParams,
}: {
  params: { lang: Locale, slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  )
}

